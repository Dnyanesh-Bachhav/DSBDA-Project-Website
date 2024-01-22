import { firestore } from "./firebase.js";
import {
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

function getVal(id) {
  return document.getElementById(id).value;
}

async function submitForm() {
  const name = getVal("name");
  const email = getVal("email");
  const subject = getVal("subject");
  const message = getVal("message");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Subject:", subject);
  console.log("Message:", message);
  const contactsCollection = collection(firestore, "contacts");

  try {
    // If the document doesn't exist, add a new document
    await addDoc(contactsCollection, {
      name: name,
      email: email,
      message: message,
      subject: subject,
    });
    alert("We will contact you shortly!");
    window.location.reload();
  } catch (error) {
    console.error("Error:", error);
    alert("Error sending message!");
  }
}

document.getElementById("formInput").addEventListener("submit", function (e) {
  e.preventDefault();
  submitForm();
});
