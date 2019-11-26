var firebaseConfig = {
      apiKey: "AIzaSyBqQu7rZkjmK_ziwVrsIOoALyFDbXpeK5Y",
      authDomain: "popochaofan3.firebaseapp.com",
      databaseURL: "https://popochaofan3.firebaseio.com",
      projectId: "popochaofan3",
      storageBucket: "popochaofan3.appspot.com",
      messagingSenderId: "833771618743",
      appId: "1:833771618743:web:ed2f26964c04a5ad9fa832",
      measurementId: "G-LZ1334B3XG"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig)
  
 

//Reference for form collection(3)
let formMessage = firebase.database().ref('register');

//listen for submit event//(1)
document
  .getElementById('popochaofan3')
  .addEventListener('submit', formSubmit);

//Submit form(1.2)
function formSubmit(e) {
  e.preventDefault();
  // Get Values from the DOM
  let name = document.querySelector('#name').value;
  let email = document.querySelector('#email').value;
  let password = document.querySelector('#password').value;
  let job = document.querySelector('#job').value;
  let interest = document.querySelector('#interest').value;

  //send message values
  sendMessage(name, email, password, job, interest);

  //Show Alert Message(5)
  document.querySelector('.alert').style.display = 'block';

  //Hide Alert Message After Seven Seconds(6)
  setTimeout(function() {
    document.querySelector('.alert').style.display = 'none';
  }, 7000);

  //Form Reset After Submission(7)
  document.getElementById('popochaofan3').reset();
}

//Send Message to Firebase(4)

function sendMessage(name, email, password, job, interest) {
  let newFormMessage = formMessage.push();
  newFormMessage.set({
    name: name,
    email: email,
    password: password,
    job: job,
    Interest: interest
  });
}