function conversionCalcu() {
  let conversionInput = Number(
    document.getElementById("conversionInput").value
  );
  let unit = document.getElementById("unit").value;

  if (unit === "millimeter") {
    document.getElementById("result").textContent =
      conversionInput * 25.4 + " Millimeter";
  } else if (unit === "centimeter") {
    document.getElementById("result").textContent =
      conversionInput * 2.54 + " Centimeter";
  } else {
       document.getElementById("result").textContent =
      conversionInput / 39.37 + " Meter";
  }
}

function reset() {
  document.getElementById("conversionInput").value = "";
  document.getElementById("result").textContent = "";
}