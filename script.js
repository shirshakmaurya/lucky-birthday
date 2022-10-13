const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box")

function compareValues(sum, luckyNumber) {
  if (sum % luckyNumber == 0) {
    outputBox.innerText = "Your birthday is lucky 😊"
  }
  else {
    outputBox.innerText = "Your birthday is not lucky 🥺"
  }
}

function checkBirthdayDateIsLucky() {
  const birthDate = dateOfBirth.value;
  const sum = calculateSume(birthDate);
  if(sum && luckyNumber.value<0){
    outputBox.innerText("Enter valid Number")
  }
  else if(!sum || luckyNumber.value===""){outputBox.innerText="Enter Both details correctly"}
  else if(sum && birthDate)
    compareValues(sum, luckyNumber.value);
  else  
    outputBox.innerText("Please enter both details.")
}

function calculateSume(birthDate) {
  birthDate = birthDate.replaceAll("-", "");
  let sum = 0;
  for (let index = 0; index < birthDate.length; index++) {
    sum = sum + Number(birthDate.charAt(index))
  }
  return sum;
}
checkNumberButton.addEventListener("click", checkBirthdayDateIsLucky)