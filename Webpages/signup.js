
// signup.js
import { auth } from './firebaseConfig.js';
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = e.target[1].value;
  const password = e.target[2].value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert('Signed up!');
      console.log(userCredential.user);
    })
    .catch((error) => {
      alert(error.message);
    });
});
