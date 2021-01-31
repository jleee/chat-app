import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import { SignUpContainer, SignUpFieldContainer } from './SignUp.styles';
import { useAuth } from '../../contexts/AuthContext';
import useCustomMaterialUIStyles from '../../styles/materialUIStyle';

const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [values, setValues] = useState({});
  const [error, setError] = useState({});
  const [authError, setAuthError] = useState({});
  const [touched, setTouched] = useState({});
  const [successMessage, setSuccessMessage] = useState(false);
  const classes = useCustomMaterialUIStyles();
  const { signUp } = useAuth();

  const validateSignUp = (val) => {
    const errors = {};
    if (!val.email) {
      errors.email = 'Please enter an email address';
    } else if (!/\S+@\S+\.\S+/.test(val.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!val.password) {
      errors.password = 'Please enter a password';
    } else if (val.password?.length < 6) {
      errors.password = 'Password must be 6 or more characters';
    }
    return errors;
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);
      const response = await signUp(values.email, values.password);
      setSuccessMessage(response.additionalUserInfo.isNewUser);
      setError({});
      setAuthError({});
    } catch (err) {
      setAuthError({ signUp: err.message });
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setError(validateSignUp({ ...values, [e.target.name]: e.target.value }));
  };

  const handleTouch = (e) => {
    setError(validateSignUp(values));
    setTouched({ ...touched, [e.target.name]: true });
  };

  return (
    <SignUpContainer>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography component="h1" className={classes.title} color="textSecondary" gutterBottom>
            Sign up
          </Typography>
          <Typography component="p" className={classes.subTitle}>
            Create an account by filling in the fields below.
          </Typography>
          <SignUpFieldContainer>
            <TextField
              id="email"
              label="Email Address"
              name="email"
              type="email"
              variant="outlined"
              margin="normal"
              placeholder="name@email.com"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleChange}
              onFocus={handleTouch}
              helperText={touched.email && error.email}
              error={touched.email && error.email?.length > 0} // {error} prop accepts boolean
              fullWidth
            />
            <TextField
              id="password"
              label="Password"
              type="password"
              name="password"
              variant="outlined"
              margin="normal"
              placeholder="Enter your password"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleChange}
              onFocus={handleTouch}
              helperText={touched.password && error.password}
              error={touched.password && error.password?.length > 0} // {error} prop accepts boolean
              fullWidth
            />
            <Button
              onClick={handleSignUp}
              disabled={isSubmitting}
              className={`${classes.button} ${classes.buttonPurple} ${classes.marginTop1} ${classes.marginBottom1}`}
            >
              Create account
            </Button>
            {authError.signUp && (
              <Alert severity="error" className={classes.textLeft}>
                {authError.signUp}
              </Alert>
            )}
            {successMessage && (
              <Alert severity="success" className={classes.textLeft}>
                Account created successfully. Please sign in to use Slack Clone.
              </Alert>
            )}
          </SignUpFieldContainer>
          <Typography variant="body1" component="p" className={classes.marginTop2}>
            Already have an account?{' '}
            <Link to="/">
              <strong>Sign in</strong>
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </SignUpContainer>
  );
};

export default SignUp;
