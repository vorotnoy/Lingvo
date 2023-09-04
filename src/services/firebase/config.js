// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from "firebase/app";
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBs-V5ie5MB8fDE55XOmgHq5eboagdZNYI",
  authDomain: "lingvo-984f1.firebaseapp.com",
  databaseURL: "https://lingvo-984f1-default-rtdb.firebaseio.com",
  projectId: "lingvo-984f1",
  storageBucket: "lingvo-984f1.appspot.com",
  messagingSenderId: "469629162011",
  appId: "1:469629162011:web:608e411e51dd07fc0b9ebe",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);
// export const db = getFirestore(app);
export const storage = getStorage(app);
