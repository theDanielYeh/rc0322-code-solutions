var $contactForm = document.querySelector('#contact-form');
$contactForm.addEventListener('submit', randomFunction);

function randomFunction(event) {
  event.preventDefault();
  var object = {
    name: $contactForm.elements.name.value,
    email: $contactForm.elements.email.value,
    message: $contactForm.elements.message.value
  };
  console.log(object);
  $contactForm.reset();
}
