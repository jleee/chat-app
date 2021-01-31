import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import GlobalStyle from './styles/globalStyle';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Chat from './pages/Chat/Chat';

const App = () => (
  <Router>
    <Switch>
      <AuthProvider>
        <ThemeProvider>
          <GlobalStyle />
          <PrivateRoute exact path="/channel" component={Chat} />
          <PrivateRoute exact path="/channel/:channelId" component={Chat} />
        </ThemeProvider>
        <Route exact path="/" component={SignIn} key="signin" />
        <Route exact path="/signup" component={SignUp} key="signup" />
      </AuthProvider>
    </Switch>
  </Router>
);

export default App;
