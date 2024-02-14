/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendSignInLinkToEmail,
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

  const logInWithEmail = (email) => {
    setIsLoading(true);
    return sendSignInLinkToEmail(auth, email, {
      // URL you want to redirect back to. The domain (www.example.com) for this
      // URL must be in the authorized domains list in the Firebase Console.
      url: "http://localhost:5173/",
      // This must be true.
      handleCodeInApp: true,
    });
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
