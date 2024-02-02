import { signInWithGoogle } from "./google";

let googleButton = document.querySelector('#googleButtons');

googleButton.addEventListener('click', signInWithGoogle);