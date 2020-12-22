import { auth } from "src/services/firebase";

const authServices = {
  createAccount: async (email, password) => {
    try {
      const user = await auth.createUserWithEmailAndPassword(email, password);
      return user;
    } catch (err) {
      console.error(err);
    }
  },
  login: async (email, password) => {
    try {
      const user = await auth.signInUserWithEmailAndPassword(email, password);
      return user;
    } catch (err) {
      console.error(err);
    }
  },
  logout: async () => {
    try {
      auth.signOut();
    } catch {
      console.error(err);
    }
  },
};

export default authServices;
