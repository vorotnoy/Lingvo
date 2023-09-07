import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  onAuthStateChanged,
  updateProfile,
  signOut,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { auth } from "./config";

export const createUserFirebase = async ({ email, password, name }) => {
  try {
    const getUser = await fetchSignInMethodsForEmail(auth, email);
    if (getUser.length > 0) {
      throw new Error("User Already Exists");
    }
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const updateUser = auth.currentUser;
    if (updateUser) {
      await updateProfile(updateUser, {
        displayName: name,
      });
    }
    return auth.currentUser.email;
  } catch (error) {
    console.log("Registration error:", error);
    throw error;
  }
};
export const logOutUserFirebase = () => {
  try {
    signOut(auth).then(() => {
      return 'logout';
    });
  } catch (error) {
    throw error;
  }
};

export const loginUserFirebase = async ({ email, password }) => {
  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password)
    return credentials.user;
  } catch (error) {
    throw error;
  }
};

// export const loginUserFirebase = async ({ email, password }) => {
//   await setPersistence(auth, browserSessionPersistence)
//     .then(() => {
//       return (
//         signInWithEmailAndPassword(auth, email, password)
//         .then((data) => {
//           if (data.user.uid) {
//              return data.user;
//           } else {
//             console.log("wrong");
//           }
//         }
//       ))
//     })
//     .catch((error) => {
//       // Handle Errors here.
//       const errorCode = error.code;
//       const errorMessage = error.message;
//     });
// };
