


// formy//
let form = 
document.getElementById('registrationForm');
form.addEventListener('submit',function (event)
{
    event.preventDefault();
    processForm();

});


// process that thang//

function processForm(){

// text imputs//
let team = 
document.getElementById('teamname').value;
let phone = 
document.getElementById('phone').value;
let make = 
document.getElementById('make').value;
let model=
document.getElementById('model').value;
let color=
document.getElementById('color').value;

// menu selection //
let selectbox =
document.getElementById('Theme').value;

 // these are required //
  if (!team || !phone || !make || !model || !color) {
    alert('Please fill out all required fields!');
    return; // stop if invalid
  }

  // phone number //
  const phonePattern = /^[0-9\-\(\)\s]+$/;
  if (!phonePattern.test(phone)) {
    alert('Please enter a valid phone number!');
    return;
  }

  // checked it twice //
  console.log('Form submitted by:', team);

  triggerJumpscare(team);

form.reset();

}
// spooky jumpscare //
function triggerJumpscare(team) {
  console.log("🎃 triggerJumpscare() called");
  const scare = document.getElementById('jumpscare');
  console.log("scare element is:", scare);
//omg give it to me already//
  if (!scare) {
    console.error("😱 No #jumpscare element found");
    return;
  }

  scare.style.display = 'block';
  scare.style.opacity = '1';
  scare.style.transition = 'opacity 0.3s ease-in-out';
  scare.style.zIndex = '999999';

  // test that thang//
  scare.style.backgroundColor = 'black';
  console.log("👻 set display:block and opacity:1");

  const sound = new Audio('mp3/boo-and-laugh-7060.mp3');
  sound.play().then(() => {
    console.log("🔊 Sound started successfully");
  }).catch(err => console.error("❌ Sound error:", err));

  setTimeout(() => {
    scare.style.display = 'none';
    console.log("🎬 hiding jumpscare");
    alert(`Thanks, ${team}! You survived the form and are registered for Trunk or Treat! 🎃`);
  }, 3000);
}


