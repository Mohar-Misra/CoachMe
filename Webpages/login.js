
// login.js
import { auth } from './firebaseConfig.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = e.target[0].value;
  const password = e.target[1].value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert('Logged in!');
      console.log(userCredential.user);
    })
    .catch((error) => {
      alert(error.message);
    });
});
