import { db, auth } from "./config";
import {
  ref,
  child,
  get,
  query,
  limitToLast,
  startAt,
  endAt,
  limitToFirst,
  orderByChild,
  startAfter,
  endBefore,
  set,
} from "firebase/database";

export const getArrayLenthFirebase = async () => {
  try {
    const resp = query(ref(db, "teachers"));
    let len = "";
    await get(resp).then((data) => (len = data.val().length));
    return len;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getAllTeachersFirebase = async (end) => {
  try {
    const resp = query(ref(db, "teachers"), orderByChild("id"), endAt(end));
    let arr = [];
    await get(resp).then((data) => data.val().map((item) => arr.push(item)));
    return arr;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const addFavFirebase = async ({ user, id }) => {
  try {
    set(ref(db, "favorite/" + user + "/" + id), { id });
    return id;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export const delFavFirebase = async ({ user, id }) => {
  try {
    set(ref(db, "favorite/" + user + "/" + id), null );
    return id;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export const getAllFavFirebase = async () => {
  let arr = [];
  try {
    if (auth.currentUser) {
      const currentUser = auth?.currentUser.uid;
      const resp = query(ref(db, "favorite/" + currentUser));
      await get(resp).then((data) => {
        if (data.exists()) {
          data.val().map((item) => arr.push(item.id));
        } else {
          console.log("No data available");
        }
      });
      return arr;
    } else {
      console.log("not auth");
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};
