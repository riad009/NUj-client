/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  sendSignInLinkToEmail,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.init";
import axios from "axios";
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
import config from "../../config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // states for holding user info
  const [openAddClient, setOpenAddClient] = useState(false);
  const [user, setUser] = useState(null);
  const [userDB, setUserDB] = useState(null);
  const [userRefetch, setUserRefetch] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [ecoSpaceRightBarOpen, setEcoSpaceRightBarOpen] = useState(false);
  const [ecoSpaceLeftBarOpen, setEcoSpaceLeftBarOpen] = useState(false);

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const openAddClientModal = () => {
    setOpenAddClient(true);
  };
  const closeAddClientModal = () => {
    setOpenAddClient(false);
  };

  // values for creating new Ecospace
  const [newEcoSpaceData, setNewEcoSpaceData] = useState({
    // owner: userDB?._id,
    // company: "",
    // address: "",
    // phone: "",
    // email: "",
    // website: "",
    // serviceId: "",
    // serviceDescription: "",
    // staffs: [],
    // project: "",
    // plan: "",
  });
  // values for assessment (Toxicity)
  const [assessmentObject, setAssessmentObject] = useState({});

  const logInWithEmail = (email) => {
    setIsLoading(true);
    return sendSignInLinkToEmail(auth, email, {
      // URL you want to redirect back to. The domain (www.example.com) for this
      // URL must be in the authorized domains list in the Firebase Console.
      // url: "http://localhost:5173/",
      url: "https://nu-j-9c35c.web.app/",
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
    localStorage.removeItem("accessToken");
    // navigate("/login");
    return signOut(auth);
  };

  // getting and setting the user from firebase
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // setIsLoading(false);
    });
    return () => {
      return () => unsubscribe();
    };
  }, []);

  // saving the user info if the user is logging in for the first time
  // useEffect(() => {
  //   if (user?.email) {
  //     setIsLoading(true);
  //     let newUser = {
  //       email: user?.email,
  //       name: user?.displayName,
  //     };
  //     if (user?.photoURL) newUser.photo = user?.photoURL;

  //     fetch(`${config.api_url}/users/create-user`, {
  //       method: "POST",
  //       headers: {
  //         "content-type": "Application/json",
  //       },
  //       body: JSON.stringify(newUser),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setIsLoading(false);
  //       });
  //   }
  // }, [user, user?.email]);

  // Getting the user from mongodb database
  const token = localStorage.getItem("accessToken");
  useEffect(() => {
    const getProfile = async () => {
      setIsLoading(true);

      try {
        const promise = await axios.get(`${config.api_url}/users/profile`, {
          headers: {
            authorization: `${token}`,
          },
        });

        setUserDB(promise.data.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        if (error.response.data.message === "Invalid Token!") {
          localStorage.removeItem("accessToken");
        }
      }
    };

    getProfile();
  }, [user, user?.email, token, userRefetch]);

  const authInfo = {
    user,
    userDB,
    isLoading,
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
    setEcoSpaceRightBarOpen,
    ecoSpaceRightBarOpen,
    setEcoSpaceLeftBarOpen,
    ecoSpaceLeftBarOpen,
    assessmentObject,
    setAssessmentObject,
    userRefetch,
    setUserRefetch,
    closeAddClientModal,
    openAddClient,
    openAddClientModal,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
