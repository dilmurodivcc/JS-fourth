function m1() {
  let Y = document.getElementById("inputValue").value;
  const K = +document.getElementById("inputValue2").value;
  switch (K) {
    case 1:
      switch (Y) {
        case "s":
          Y = "g";
          break;
        case "j":
          Y = "q";
          break;
        case "q":
          Y = "s";
          break;
        case "g":
          Y = "j";
          break;
        default:
          Y = "Bunday tomon yo";
      }
      break;
    case 2:
      switch (Y) {
        case "s":
          Y = "q";
          break;
        case "j":
          Y = "g";
          break;
        case "q":
          Y = "j";
          break;
        case "g":
          Y = "s";
          break;
        default:
          Y = "Bunday tomon yo";
      }
      break;
    default:
      Y = "Boshqa kamanda kiritingiz !";
  }
  document.getElementById(
    "output"
  ).innerHTML = `Kamanda bajarilgan holat: ${Y}`;
}
function m2() {
  const input = +document.getElementById("inputValue2-1").value;
  let hajm = input ** 3;
  let t_sirt = 6 * input ** 2;
  document.getElementById(
    "output2"
  ).innerHTML = `Hajmi: ${hajm}, To'la sirt: ${t_sirt}`;
}
function m3() {
  const input33 = +document.getElementById("inputValue33").value;
  const input33_2 = +document.getElementById("inputValue33_2").value;
  if ((input33 + input33_2) % 2 === 0) {
    document.getElementById(
      "output3"
    ).innerHTML = `Berilgan (x, y) maydon qora`;
  } else {
    document.getElementById("output3").innerHTML = `Berilgan (x, y) maydon oq`;
  }
}
function m4() {
  const input41 = +document.getElementById("inputValue4").value;
  const input42 = +document.getElementById("inputValue4-2").value;
  const input43 = +document.getElementById("inputValue4-3").value;
  let disB = Math.abs(input41 - input42);
  let disC = Math.abs(input43 - input43);
  if (disB <= disC) {
    document.getElementById("output4").innerHTML = `B nuqta eng yaqini.`;
  } else if (disB >= disC) {
    document.getElementById("output4").innerHTML = `C nuqta eng yaqini.`;
  } else {
    document.getElementById(
      "output4"
    ).innerHTML = `B va C nuqta yaqinligi birxil.`;
  }
}

function m5() {
  const x1 = +document.getElementById("inputValue5-1").value;
  const y1 = +document.getElementById("inputValue5-2").value;
  const x2 = +document.getElementById("inputValue5-3").value;
  const y2 = +document.getElementById("inputValue5-4").value;
  const x3 = +document.getElementById("inputValue5-5").value;
  const y3 = +document.getElementById("inputValue5-6").value;
  let x4;
  let y4;
  if (x1 === x2) {
    x4 = x3;
  } else if (x1 === x3) {
    x4 = x2;
  } else {
    x4 = x1;
  }
  if (y1 === y2) {
    y4 = y3;
  } else if (y1 === y3) {
    y4 = y2;
  } else {
    y4 = y1;
  }
  document.getElementById(
    "output5"
  ).innerHTML = `To'rtinchi nuqta: (${x4}, ${y4})`;
  console.log({ x4, y4 });
}

function m6() {
  const input_61 = +document.getElementById("inputValue6_1").value;
  const input_62 = +document.getElementById("inputValue6_2").value;
  const amal = +document.getElementById("inputValue6_3").value;
  switch (amal) {
    case 1:
      document.getElementById("output6").innerHTML = `A + B = ${
        input_61 + input_62
      }`;
      break;
    case 2:
      document.getElementById("output6").innerHTML = `A - B = ${
        input_61 - input_62
      }`;
      break;
    case 3:
      document.getElementById("output6").innerHTML = `A / B = ${
        input_61 / input_62
      }`;
      break;
    case 4:
      document.getElementById("output6").innerHTML = `A * B = ${
        input_61 * input_62
      }`;
      break;
    default:
      document.getElementById(
        "output6"
      ).innerHTML = `Bunday amal mavjud emas !`;
  }
}

function m7() {
  const input_71 = +document.getElementById("inputValue7_1").value;
  const value = +document.getElementById("inputValue7_2").value;
  const p = 3.14;
  let R;
  let D;
  let U;
  let S;
  switch (input_71) {
    case 1:
      R = value;
      D = 2 * R;
      U = 2 * p * R;
      S = p * R * R;
      break;
    case 2:
      D = value;
      R = D / 2;
      U = 2 * p * R;
      S = p * R * R;
      break;
    case 3:
      U = value;
      R = L / (2 * p);
      D = 2 * R;
      S = p * R * R;
      break;
    case 4:
      S = value;
      R = Math.sqrt(S / p);
      D = 2 * R;
      U = 2 * p * R;
      break;
    default:
      document.getElementById(
        "output7"
      ).innerHTML = `Bunday amal mavjud emas !`;
      return;
  }
  document.getElementById(
    "output7"
  ).innerHTML = `Radius = ${R}, Diametr = ${D}, Uzunlik = ${U}, Doiraning uzasi = ${S}`;
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
