/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.init";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // states for holding user info
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [orgFormValues, setOrgFormValues] = useState({
    orgName: "",
    address: "",
    phone: "",
    email: "",
    website: "",
    service: "",
  });

  // function for signing in or singing out
  const createUser = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logInWithEmail = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logInWithGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const update = (name) => {
    setIsLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  const logOut = () => {
    setIsLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });
    return () => {
      return () => unsubscribe();
    };
  }, []);

  // values
  const authInfo = {
    user,
    isLoading,
    createUser,
    logInWithEmail,
    logInWithGoogle,
    update,
    logOut,
    setIsLoading,
    orgFormValues,
    setOrgFormValues,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
