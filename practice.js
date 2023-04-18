
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWAJRvObHpDQ83QRAMjz58Nfpeua2MOT0",
  authDomain: "kwitter-cb6b0.firebaseapp.com",
  databaseURL: "https://kwitter-cb6b0-default-rtdb.firebaseio.com",
  projectId: "kwitter-cb6b0",
  storageBucket: "kwitter-cb6b0.appspot.com",
  messagingSenderId: "410665070579",
  appId: "1:410665070579:web:5751317a671559effa6c86"
};
firebase.initializeApp(firebaseConfig);


function addUser() {

    user_name = document.getElementById("user_name").value;
  
    localStorage.setItem("user_name", user_name);
    
      window.location = "kwitter_room.html";
  }
