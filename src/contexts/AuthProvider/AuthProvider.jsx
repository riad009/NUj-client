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
import config from "../../config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // states for holding user info
  const [user, setUser] = useState(null);
  const [userDB, setUserDB] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  // values for creating new Ecospace
  const [newEcoSpaceData, setNewEcoSpaceData] = useState({
    owner: userDB?._id,
    company: "",
    address: "",
    phone: "",
    email: "",
    website: "",
    serviceId: "",
    serviceDescription: "",
    staffs: [],
    project: "",
    plan: "",
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

  // getting and setting the user from firebase
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });
    return () => {
      return () => unsubscribe();
    };
  }, []);

  // saving the user info if the user is logging in for the first time
  useEffect(() => {
    if (user?.email) {
      setIsLoading(true);
      let newUser = {
        email: user?.email,
        name: user?.displayName,
      };
      if (user?.photoURL) newUser.photo = user?.photoURL;

      fetch(`${config.api_url}/users/create-user`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newUser),
      })
        .then((res) => res.json())
        .then((data) => {
          setIsLoading(false);
        });
    }
  }, [user, user?.email]);

  // Getting the user from mongodb database
  useEffect(() => {
    if (user?.email) {
      setIsLoading(true);
      fetch(`${config.api_url}/general/my-profile/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          setUserDB(data.data);
          setIsLoading(false);
        });
    }
  }, [user, user?.email]);

  const authInfo = {
    user,
    userDB,
    isLoading,
    createUser,
    logInWithEmail,
    logInWithGoogle,
    update,
    logOut,
    setIsLoading,
    newEcoSpaceData,
    setNewEcoSpaceData,
    open,
    showDrawer,
    onClose,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
