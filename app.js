function m1() {
  let Y = document.getElementById("inputValue").value;
  console.log(Y);
  const K = +document.getElementById("inputValue2").value; 
  console.log(K);
  switch (K) {
    case 1:
      switch (Y) {
        case "s": Y = "g"; break;
        case "j": Y = "q"; break;
        case "q": Y = "s"; break;
        case "g": Y = "j"; break;
        default: Y = "Bunday tomon yo";
      } break;
    case 2:
      switch (Y) {
        case "s": Y = "q"; break;
        case "j": Y = "g"; break;
        case "q": Y = "j"; break;
        case "g": Y = "s"; break;
        default: Y = "Bunday tomon yo";
      }
 break; default: Y = "Boshqa kamanda kiritingiz !";
  }
  document.getElementById("output").innerHTML = `Kamanda bajarilgan holat: ${Y}`;
}

function m2() {
  const input = document.getElementById("inputValue2-1").value;
  const input2 = document.getElementById("inputValue2-2").value;
  const input3 = document.getElementById("inputValue2-3").value;
  const number = parseInt(input);
  const number2 = parseInt(input2);
  const number3 = parseInt(input3);
  const sum1 = number + number2;
  const sum2 = number + number3;
  const sum3 = number2 + number3;
  if (sum1 >= sum2 && sum1 >= sum3) {
    document.getElementById(
      "output18"
    ).innerHTML = `Eng katta yig‘indi: ${sum1}, sonlar: ${number} va ${number2}`;
  } else if (sum2 >= sum1 && sum2 >= sum3) {
    document.getElementById(
      "output18"
    ).innerHTML = `Eng katta yig‘indi: ${sum2}, sonlar: ${number} va ${number3}`;
  } else {
    document.getElementById(
      "output18"
    ).innerHTML = `Eng katta yig‘indi: ${sum3}, sonlar: ${number2} va ${number3}`;
  }
}


function m3() {
  const input33 = document.getElementById("inputValue33").value;
  const number33 = parseInt(input33);
  let result = "";
  if (isNaN(number33)) {
    result = "Iltimos, son kiriting.";
  } else if (number33 === 0) {
    result = "Son 0 ga teng.";
  } else if (number33 > 0 && number33 % 2 === 0) {
    result = "Musbat juft son.";
  } else if (number33 > 0 && number33 % 2 !== 0) {
    result = "Musbat toq son.";
  } else if (number33 < 0 && number33 % 2 === 0) {
    result = "Manfiy juft son.";
  } else if (number33 < 0 && number33 % 2 !== 0) {
    result = "Manfiy toq son.";
  }
  document.getElementById("output3").innerHTML = `${result}`;
}

function m4() {
  const input = document.getElementById("inputValue4").value;
  const number = parseInt(input);
  let result = "";
  if (isNaN(number) || number < 1 || number > 999) {
    result = "Iltimos, 1 dan 999 gacha bo'lgan son kiriting.";
  } else {
    const yuzlik = Math.floor(number / 100);
    const onlik = Math.floor((number % 100) / 10);
    let birlik = number % 10;
    switch (yuzlik) {
      case 1:
        result += "Bir yuz ";
        break;
      case 2:
        result += "Ikki yuz ";
        break;
      case 3:
        result += "Uch yuz ";
        break;
      case 4:
        result += "To'rt yuz ";
        break;
      case 5:
        result += "Besh yuz ";
        break;
      case 6:
        result += "Olti yuz ";
        break;
      case 7:
        result += "Yetti yuz ";
        break;
      case 8:
        result += "Sakkiz yuz ";
        break;
      case 9:
        result += "To'qqiz yuz ";
        break;
    }
    if (onlik === 1) {
      switch (birlik) {
        case 0:
          result += "O'n";
          break;
        case 1:
          result += "O'n bir";
          break;
        case 2:
          result += "O'n ikki";
          break;
        case 3:
          result += "O'n uch";
          break;
        case 4:
          result += "O'n to'rt";
          break;
        case 5:
          result += "O'n besh";
          break;
        case 6:
          result += "O'n olti";
          break;
        case 7:
          result += "O'n yetti";
          break;
        case 8:
          result += "O'n sakkiz";
          break;
        case 9:
          result += "O'n to'qqiz";
          break;
      }
    } else {
      switch (onlik) {
        case 2:
          result += "Yigirma ";
          break;
        case 3:
          result += "O'ttiz ";
          break;
        case 4:
          result += "Qirq ";
          break;
        case 5:
          result += "Ellik ";
          break;
        case 6:
          result += "Oltmish ";
          break;
        case 7:
          result += "Yetmish ";
          break;
        case 8:
          result += "Sakson ";
          break;
        case 9:
          result += "To'qson ";
          break;
      }
      switch (birlik) {
        case 1:
          result += "bir";
          break;
        case 2:
          result += "ikki";
          break;
        case 3:
          result += "uch";
          break;
        case 4:
          result += "to'rt";
          break;
        case 5:
          result += "besh";
          break;
        case 6:
          result += "olti";
          break;
        case 7:
          result += "yetti";
          break;
        case 8:
          result += "sakkiz";
          break;
        case 9:
          result += "to'qqiz";
          break;
      }
    }
  }
  document.getElementById("output4").innerHTML = `<p>${result}</p>`;
}

function m5() {
  const input5 = document.getElementById("inputValue5").value;
  const num = parseInt(input5);
  switch (num) {
    case 1 || 3 || 5 || 7 || 8 || 10 || 12:
      document.getElementById("output5").innerHTML = "Bu oy 31 kun.";
      break;
    case 2:
      document.getElementById("output5").innerHTML =
        "Bu oy 28 kun (kabisa yilida 29 kun).";
      break;
    case 4 || 6 || 9 || 11:
      document.getElementById("output5").innerHTML = "Bu oy 30 kun.";
      break;
    default:
      document.getElementById("output5").innerHTML = "Bunday oy yoq";
  }
}

function m6() {
  const input_61 = document.getElementById("inputValue6_1").value;
  const input_62 = document.getElementById("inputValue6_2").value;
  const Y = input_61.trim().toUpperCase();
  const K = parseInt(input_62);
  let finalPosition = Y;
  if (K === 1) {
    if (Y === "S") finalPosition = "g";
    else if (Y === "q") finalPosition = "S";
    else if (Y === "J") finalPosition = "q";
    else if (Y === "g") finalPosition = "J";
  } else if (K === 2) {
    if (Y === "S") finalPosition = "q";
    else if (Y === "q") finalPosition = "J";
    else if (Y === "J") finalPosition = "g";
    else if (Y === "g") finalPosition = "S";
  } else if (K === 0) {
    finalPosition = Y;
  } else {
    finalPosition = "Noma'lum komanda";
  }
  document.getElementById(
    "output6"
  ).innerHTML = `Final yo'nalish: ${finalPosition}`;
}

// SOME FUNCTION -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

const moonIcon = document.querySelector(".moon-icon");
const body = document.body;

if (!localStorage.getItem("mode")) {
  localStorage.setItem("mode", "dark");
  body.classList.add("dark");
} else {
  body.classList.add(localStorage.getItem("mode"));
}

moonIcon.addEventListener("click", () => {
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    body.classList.add("light");
    localStorage.setItem("mode", "light");
  } else {
    body.classList.remove("light");
    body.classList.add("dark");
    localStorage.setItem("mode", "dark");
  }

  if (body.classList.contains("dark")) {
    moonIcon.classList.remove("fa-sun");
    moonIcon.classList.add("fa-moon");
  } else {
    moonIcon.classList.remove("fa-moon");
    moonIcon.classList.add("fa-sun");
  }
});
let backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

backToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const customCursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {
  const smoke = document.createElement("div");
  smoke.classList.add("tutun");

  smoke.style.left = `${e.pageX}px`;
  smoke.style.top = `${e.pageY}px`;

  document.body.appendChild(smoke);

  setTimeout(() => {
    smoke.style.opacity = "0";
  }, 100);

  setTimeout(() => {
    smoke.remove();
  }, 550);
});
AOS.init({
  duration: 1700,
  once: true,
});
