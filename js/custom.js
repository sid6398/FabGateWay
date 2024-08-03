const dateInput = document.getElementById("date1");
dateInput.value = formatDate();

function padTo2Digits(num) {
  return num.toString().padStart(2, "0");
}

function formatDate(date = new Date()) {
  return [
    date.getFullYear(),
    padTo2Digits(date.getMonth() + 1),
    padTo2Digits(date.getDate()),
  ].join("-");
}


const dateInput2 = document.getElementById("date2");
dateInput2.value = formatDate2();

function padTo2Digits(num) {
  return num.toString().padStart(2, "0");
}

function formatDate2(date = new Date()) {
  return [
    date.getFullYear(),
    padTo2Digits(date.getMonth() + 1),
    padTo2Digits(date.getDate()),
  ].join("-");
}

