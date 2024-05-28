import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth';

import auth from '../../Firebase/firebase.config';
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      console.log(currentUser);
      setLoading(true);
      setUser(currentUser);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const createUser = (name, email, password) => {
    return createUserWithEmailAndPassword(auth, name, email, password);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleProvider = new GoogleAuthProvider();

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const facebookProvider = new FacebookAuthProvider();

  const facebookLogin = () => {
    return signInWithPopup(auth, facebookProvider);
  };
  const updateUser = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    updateUser,
    googleLogin,
    facebookLogin,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
