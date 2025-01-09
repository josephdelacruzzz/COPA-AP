// Add JavaScript code for your web site here and call it from index.html.
let themeButton = document.getElementById("theme-button");

// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () => {

    // Write your code to manipulate the DOM here
    document.body.classList.toggle("dark-mode");
}

themeButton.addEventListener("click", toggleDarkMode);

let count = 3;

let signNowButton = document.getElementById("sign-now-button");

const addSignature = (person) => {
    // const name = document.getElementById("name").value;
    // const hometown = document.getElementById("hometown").value;
    // const email = document.getElementById("email").value;


    if (name && hometown && email) {
        const newSignature = document.createElement("p");
        newSignature.textContent = `🖊️ ${person.name} from ${person.hometown} supports this.`;
        
        const signaturesDiv = document.querySelector(".signatures");
        signaturesDiv.appendChild(newSignature);

        count++;
        
        const oldCounter = document.getElementById("counter");
        if (oldCounter) {
            oldCounter.remove();
        }

        const counter = document.createElement("p");
        counter.id = "counter";
        counter.textContent = `🖊️ ${count} people have signed this petition and support this cause.`;
        signaturesDiv.appendChild(counter);

        document.getElementById("sign-petition").reset();
    }
}

const validateForm = () => {
    let containsErrors = false;
    var petitionInputs = document.getElementById("sign-petition").elements;

    let person = {
      name: petitionInputs[0].value,
      hometown: petitionInputs[1].value,
      email: petitionInputs[2].value
    }

    if (person.name.length < 2) {
      person.name.classList.add('error');
      containsErrors = true;
    } 
    // else {
    //   con;
    //   person.name.classList.remove('error');
    // }

    if (person.hometown.length < 2) {
      person.hometown.classList.add('error');
      containsErrors = true;
    } 
    // else {
    //   person.hometown.classList.remove('error');
    // }

    if (person.email.length < 2 && !person.email.includes('.com')) {
      person.email.classList.add('error');
      containsErrors = true;
    } 
    // else {
    //   person.email.classList.remove('error');
    // }

    // const email = document.getElementById('email');
    // if (!email.value.includes('.com')) {
    //   email.classList.add('error');
    //   containsErrors = true;
    // } else {
    //   email.classList.remove('error');
    // }

    if (!containsErrors) {
        addSignature(person);
        toggleModal(person);  
        for (let i = 0; i < petitionInputs.length; i++) {
          petitionInputs[i].value = "";
        }
      }  

    // addSignature(person);
    // toggleModal(person);
}
  
signNowButton.addEventListener('click', validateForm);

let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease',
};

let revealableContainers = document.querySelectorAll('.revealable');

function reveal() {
  for (let i = 0; i < revealableContainers.length; i++) {
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;

    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      revealableContainers[i].classList.add('active');
    } else {
      revealableContainers[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', reveal);

function toggleModal(person) {
  const modal = document.getElementById('thanks-modal');
  const modalContent = document.getElementById('thanks-modal-content');
  const modalImage = document.getElementById('modal-image');

  modalContent.textContent = `Thank you, ${person.name} from ${person.hometown}, for supporting the cause!`;

  modal.style.display = 'flex';

  let scaleFactor = 1;
  const scaleImage = () => {
    scaleFactor = scaleFactor === 1 ? 0.8 : 1;
    modalImage.style.transform = `scale(${scaleFactor})`;
  };
  const intervalId = setInterval(scaleImage, 500);

  setTimeout(() => {
    modal.style.display = 'none';
    clearInterval(intervalId);
  }, 4000);
};
