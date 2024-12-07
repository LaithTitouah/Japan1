const principalBox = document.querySelector("#Principal");
const totaltimeBox = document.querySelector("#time");
const rateofinterestSlider = document.querySelector("#interest");
const rateofinterestText = document.querySelector("#interestText");
const compoundedBox = document.querySelector("#compounded_interest");
const CIOutput = document.querySelector("#result");
const IOutput = document.querySelector("#totalInterest");

principalBox.addEventListener("input", updateCI);
compoundedBox.addEventListener("input", updateCI);
totaltimeBox.addEventListener("input", updateCI);

rateofinterestSlider.addEventListener("input", () => {
  rateofinterestText.textContent = rateofinterestSlider.value;
  updateCI();
});

document.addEventListener("DOMContentLoaded", updateCI);

function updateCI() {
  const principal = Number(principalBox.value) || 0;
  const interest = Number(rateofinterestSlider.value) / 100 || 0;
  const compound = Number(compoundedBox.value) || 1;
  const totaltime = Number(totaltimeBox.value) || 1;

  const result =
    principal * (1 + interest / compound) ** (compound * totaltime);
  CIOutput.textContent = result.toFixed(2);

  const totalInterest = result - principal;
  IOutput.textContent = totalInterest.toFixed(2);
}
