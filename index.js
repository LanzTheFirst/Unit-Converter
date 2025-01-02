const convertBtn = document.getElementById("convert-btn")
const inputField = document.querySelector('[data-function="expand"]');
inputField.addEventListener('input', () => {
  inputField.style.width = (inputField.value.length + 1) + 'ch'; // Adjust width
});
function convertUnits(){
  const inputNumber = document.getElementById("input-number").value
  const lowerContainer = document.getElementById("lower-container")
  if (isNaN(inputNumber)){
    alert("Please enter a valid number.");
    return;
  }

  const metersToFeet = (inputNumber * 3.28084).toFixed(2);
  const feetToMeters = (inputNumber / 3.28084).toFixed(2);

  const litersToGallons = (inputNumber * 0.264172).toFixed(2);
  const gallonsToLiters = (inputNumber / 0.264172).toFixed(2);

  const kiloToPounds = (inputNumber * 2.20462).toFixed(2);
  const poundsToKilo = (inputNumber / 2.20462).toFixed(2);

  lowerContainer.innerHTML = `
    <div class="lc-inner">
        <h3>Length (Meter/Feet)</h3>
        <p>${inputNumber} meters = ${metersToFeet} feet | ${inputNumber} feet = ${feetToMeters} meters</p>
    </div>
    <div class="lc-inner">
        <h3>Volume (liters/Gallons)</h3>
        <p>${inputNumber} liters = ${litersToGallons} gallons | ${inputNumber} gallons = ${gallonsToLiters} liters</p>
    </div>
    <div class="lc-inner">
        <h3>Mass (Kilograms/Pounds)</h3>
        <p>${inputNumber} kilo = ${kiloToPounds} pounds | ${inputNumber} pounds = ${poundsToKilo} kilo</p>
    </div>
  `
}
convertBtn.addEventListener("click", convertUnits)