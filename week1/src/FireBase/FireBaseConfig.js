import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const FireBaseConfig = {
  apiKey: "AIzaSyCPDKJU1h0k-3QP6TkfjcUaGOsa_AMr2C0",
  authDomain: "contemporarywebapps-52dc7.firebaseapp.com",
  projectId: "contemporarywebapps-52dc7",
  storageBucket: "contemporarywebapps-52dc7.appspot.com",
  messagingSenderId: "857645936986",
  appId: "1:857645936986:web:2ceea3972fe48562d30363",
  measurementId: "G-4BKYE0E0ZT"
};

const app = initializeApp(FireBaseConfig);
const analytics = getAnalytics(app);

export default FireBaseConfig