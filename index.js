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

const addSignature = () => {
    const name = document.getElementById("name").value;
    const hometown = document.getElementById("hometown").value;
    const email = document.getElementById("email").value;


    if (name && hometown && email) {
        const newSignature = document.createElement("p");
        newSignature.textContent = `🖊️ ${name} from ${hometown} supports this.`;
        
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
    for (let i = 0; i < petitionInputs.length; i++) {
        if (petitionInputs[i].value.length < 2) {
        petitionInputs[i].classList.add('error');
        containsErrors = true;
        } else {
        petitionInputs[i].classList.remove('error');
        }
    }

    const email = document.getElementById('email');
    if (!email.value.includes('.com')) {
      email.classList.add('error');
      containsErrors = true;
    } else {
      email.classList.remove('error');
    }

    if (!containsErrors) {
        addSignature();  
        for (let i = 0; i < petitionInputs.length; i++) {
          petitionInputs[i].value = "";
        }
      }  
}
  
signNowButton.addEventListener('click', validateForm);
