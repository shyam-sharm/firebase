import Form from "./Form";
import Listing from "./Listing";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzyi3Ll9inQvuCuqFYOcZ-qec2BlG4ARU",
  authDomain: "wsjp-14-eec0f.firebaseapp.com",
  databaseURL: "https://wsjp-14-eec0f-default-rtdb.firebaseio.com",
  projectId: "wsjp-14-eec0f",
  storageBucket: "wsjp-14-eec0f.appspot.com",
  messagingSenderId: "353487895929",
  appId: "1:353487895929:web:5c4063fa8944db26c6c3a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 function App() {
  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-5">
      <Listing/>
      <Form/>
    </div>
  );
}

export default App;
