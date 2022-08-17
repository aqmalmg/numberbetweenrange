let x = Math.floor(Math.random() * 6) + 1;
let lowestNumber;
let highestNumber;
let result;

document.getElementById("submitButton").onclick = function() {
  lowestNumber = document.getElementById("angkaTerendah").value;
  lowestNumber = Number(lowestNumber);
  console.log(lowestNumber);
  highestNumber = document.getElementById("angkaTertinggi").value;
  highestNumber = Number(highestNumber);
  console.log(highestNumber);
  result = Math.floor(Math.random() * (highestNumber - lowestNumber + 1) + lowestNumber);

  document.getElementById("hasil").innerHTML = `Hasilnya adalah: ${result}`;
}