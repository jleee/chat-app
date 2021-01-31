import React, { useState } from 'react';
import { useHistory, Link, withRouter } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import {
  SignInContainer,
  SignInOptions,
  HorizontalDividerText,
  HorizontalDivider,
  GoogleLogo,
} from './SignIn.styles';
import googleLogo from '../../images/google-logo.svg';
import { useAuth } from '../../contexts/AuthContext';
import useCustomMaterialUIStyles from '../../styles/materialUIStyle';

const SignIn = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [values, setValues] = useState({});
  const [error, setError] = useState({});
  const [authError, setAuthError] = useState({});
  const [touched, setTouched] = useState({});
  const classes = useCustomMaterialUIStyles();
  const { signInWithGoogleProvider, signInWithEmailAndPassword } = useAuth();
  const history = useHistory();

  const validateSignIn = (val) => {
    const errors = {};
    if (!val.email) {
      errors.email = 'Please enter an email address';
    } else if (!/\S+@\S+\.\S+/.test(val.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!val.password) {
      errors.password = 'Please enter a password';
    }
    return errors;
  };

  const handleEmailPasswordSignIn = async (e) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);
      await signInWithEmailAndPassword(values.email, values.password);
      setError({});
      setAuthError({});
      history.push('/channel');
    } catch (err) {
      setAuthError({ signIn: err.message });
      setIsSubmitting(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogleProvider();
      console.log('success');
      history.push('/channel');
    } catch (err) {
      setAuthError(err.message);
    }
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setError(validateSignIn({ ...values, [e.target.name]: e.target.value }));
  };

  const handleTouch = (e) => {
    setError(validateSignIn(values));
    setTouched({ ...touched, [e.target.name]: true });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      handleEmailPasswordSignIn(e);
    }
  };

  return (
    <SignInContainer>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography component="h1" className={classes.title} color="textSecondary" gutterBottom>
            Sign in to Slack Clone
          </Typography>
          <Typography component="p" className={classes.subTitle}>
            Continue with a Google account or email address you use to sign in.
          </Typography>
          <SignInOptions>
            <Button onClick={handleGoogleSignIn} className={`${classes.button} ${classes.buttonOutline}`}>
              <GoogleLogo src={googleLogo} />
              Continue with Google
            </Button>
            <HorizontalDivider>
              <HorizontalDividerText>OR</HorizontalDividerText>
            </HorizontalDivider>
            <TextField
              id="email"
              label="Email"
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
              onKeyDown={handleKeyDown}
              helperText={touched.email && error.email}
              error={touched.email && error.email?.length > 0} // {error} prop accepts boolean
              fullWidth
            />
            <TextField
              id="password"
              label="Password"
              name="password"
              type="password"
              variant="outlined"
              margin="normal"
              placeholder="Enter your password"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleChange}
              onFocus={handleTouch}
              onKeyDown={handleKeyDown}
              helperText={touched.password && error.password}
              error={touched.password && error.password?.length > 0} // {error} prop accepts boolean
              fullWidth
            />
            <Button
              onClick={handleEmailPasswordSignIn}
              disabled={isSubmitting}
              className={`${classes.button} ${classes.buttonPurple} ${classes.marginTop1} ${classes.marginBottom1}`}
            >
              Sign in with Email
            </Button>
            {authError.signIn && (
              <Alert severity="error" className={classes.textLeft}>
                {authError.signIn}
              </Alert>
            )}
          </SignInOptions>
          <Typography variant="body1" component="p" className={classes.marginTop2}>
            New to Slack Clone?{' '}
            <Link to="/signup">
              <strong>Create an account</strong>
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </SignInContainer>
  );
};

export default withRouter(SignIn);
