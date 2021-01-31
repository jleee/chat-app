import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { auth, googleProvider } from '../firebase';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const userName = user?.user?.displayName;
  const userNameAlternative = user?.email && user.email.substring(0, user.email.indexOf('@'));

  const signInWithGoogleProvider = () => auth.signInWithPopup(googleProvider);

  const signInWithEmailAndPassword = (username, password) =>
    auth.signInWithEmailAndPassword(username, password);

  const signUp = (email, password) => auth.createUserWithEmailAndPassword(email, password);

  const signOut = () => auth.signOut();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => setUser(userAuth));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signInWithGoogleProvider,
        signInWithEmailAndPassword,
        signUp,
        signOut,
        user,
        userName,
        userNameAlternative,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
