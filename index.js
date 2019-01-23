// Tranlates the calender that we use to Gardea's calender

var month = window.prompt("Please enter your numerical month of your birthday: ");
var day = window.prompt("Please enter your numerical day of your birthday: ");

var total = 0;
var translatedTotal = 0;
var translatedMonth = "nothing";
var totalNumber = 0;

function getTotal() {
  // January
  if (month == 1) {
    totalNumber = Number(day) + Number(total);
  }

  //Febuary
  if (month == 2) {
    total = 31;
    totalNumber = Number(day) + Number(total);
  }

  //March
  if (month == 3) {
    total = 59;
    totalNumber = Number(day) + Number(total);
  }

  //April
  if (month == 4) {
    total = 90;
    totalNumber = Number(day) + Number(total);
  }

  //May
  if (month == 5) {
    total = 120;
    totalNumber = Number(day) + Number(total);
  }

  //June
  if (month == 6) {
    total = 151;
    totalNumber = Number(day) + Number(total);
  }

  //July
  if (month == 7) {
    total = 181;
    totalNumber = Number(day) + Number(total);
  }

  //August
  if (month == 8) {
    total = 212;
    totalNumber = Number(day) + Number(total);
  }

  //September
  if (month == 9) {
    total = 243;
    totalNumber = Number(day) + Number(total);
  }

  //October
  if (month == 10) {
    total = 273;
    totalNumber = Number(day) + Number(total);
  }

  //November
  if (month == 11) {
    total = 304;
    totalNumber = Number(day) + Number(total);
  }

  //December
  if (month == 12) {
    total = 334;
    totalNumber = Number(day) + Number(total);
  }

}

// Outputs the total number of your birthday with totalNumber

function translateTotal() {
  if (totalNumber <= 26) {
    translatedMonth = "Uninom";
    translatedTotal = totalNumber;
  }
  if (totalNumber >= 26 && totalNumber <= 52) {
    translatedMonth = "Binom";
    translatedTotal = totalNumber - 26;
  }
  if (totalNumber >= 52 && totalNumber <= 78) {
    translatedMonth = "Trinom";
    translatedTotal = totalNumber - 52;
  }
  if (totalNumber >= 78 && totalNumber <= 104) {
    translatedMonth = "Quadnom";
    translatedTotal = totalNumber - 78;
  }
  if (totalNumber >= 104 && totalNumber <= 130) {
    translatedMonth = "Pentinom";
    translatedTotal = totalNumber - 104;
  }
  if (totalNumber >= 130 && totalNumber <= 156) {
    translatedMonth = "Sexnom";
    translatedTotal = totalNumber - 130;
  }
  if (totalNumber >= 156 && totalNumber <= 182) {
    translatedMonth = "Septnom";
    translatedTotal = totalNumber - 156;
  }
  if (totalNumber >= 182 && totalNumber <= 208) {
    translatedMonth = "Octnom";
    translatedTotal = totalNumber - 182;
  }
  if (totalNumber >= 208 && totalNumber <= 234) {
    translatedMonth = "Novnom";
    translatedTotal = totalNumber - 208;
  }
  if (totalNumber >= 234 && totalNumber <= 260) {
    translatedMonth = "Decnom";
    translatedTotal = totalNumber - 234;
  }
  if (totalNumber >= 260 && totalNumber <= 286) {
    translatedMonth = "Unidecnom";
    translatedTotal = totalNumber - 260;
  }
  if (totalNumber >= 286 && totalNumber <= 312) {
    translatedMonth = "Bidecnom";
    translatedTotal = totalNumber - 286;
  }
  if (totalNumber >= 312 && totalNumber <= 338) {
    translatedMonth = "Tridecnom";
    translatedTotal = totalNumber - 312;
  }
  if (totalNumber >= 338 && totalNumber <= 364) {
    translatedMonth = "Quaddecnom";
    translatedTotal = totalNumber - 338;
  }
  if (totalNumber >= 365) {
    translatedMonth = "Quaddecnom";
    translatedTotal = totalNumber - 365;
  }
}
function outputCode() {
  console.log("You're date in the Gardean calender would be:");
  console.log(translatedMonth + ", " +translatedTotal);
}

function startandFinished() {
  getTotal();
  translateTotal();
  outputCode();
}


startandFinished();
