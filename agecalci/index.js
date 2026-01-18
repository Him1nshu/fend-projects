const DateTime = luxon.DateTime;

function findAge() {
  const dobValue = document.getElementById("dob").value;
  const result = document.getElementById("res");

  if (!dobValue) {
    result.innerText = "Please select a date.";
    return;
  }

  const dob = DateTime.fromISO(dobValue);
  const now = DateTime.now();

  const diff = now.diff(dob, ["years", "months", "days"]).toObject();

  result.innerText =
    `Age: ${Math.floor(diff.years)} years, ` +
    `${Math.floor(diff.months)} months, ` +
    `${Math.floor(diff.days)} days`;
}
