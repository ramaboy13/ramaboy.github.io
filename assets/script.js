AOS.init({
    offset: 300,
    duration: 1400,
  });
  const header = document.querySelector("header");

  window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 120);
  });

  let menu = document.querySelector("#menu-icon");
  let navlist = document.querySelector(".nav-list");

  menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navlist.classList.toggle("active");
  };

  window.onscroll = () => {
    menu.classList.remove("bx-x");
    navlist.classList.remove("active");
  };

  function MessageToWhatsapp() {
    const urlToWhatsapp = `https://wa.me/+6285775242278?text=Halo nama saya, ${name.value}, email saya ${email.value}, ${pesan.value}`;

    window.open(urlToWhatsapp, "_blank");
  }

  // The text content for each line
  const text1 = "Hi, There!";
  const text2Part1 = "I'm "; // Before the span
  const text2Part2 = "Barito Surya Ramadhani"; // Inside the span
  const text3 = "Informatics Engineering Student at Mercu Buana University";

  // Get the HTML elements
  const line1 = document.getElementById("line1");
  const line2 = document.getElementById("line2");
  const line3 = document.getElementById("line3");

  // Function to type text character by character
  function typeText(element, text, delay = 100, callback = null) {
    let i = 0;
    function typing() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, delay);
      } else if (callback) {
        callback(); // Call the next function if it exists
      }
    }
    typing();
  }

  // Start typing the text
  typeText(line1, text1, 100, () => {
    typeText(line2, text2Part1, 100, () => {
      // Create the span element and add it to the line2
      const span = document.createElement("span");
      line2.appendChild(span);
      typeText(span, text2Part2, 100, () => {
        typeText(line3, text3, 50);
      });
    });
  });

  const toggleButton = document.getElementById("toggle-dark-mode");
  const currentTheme = localStorage.getItem("theme");

  if (currentTheme) {
    document.documentElement.className = currentTheme;

    if (currentTheme === "light-mode") {
      toggleButton.querySelector(".ri-sun-fill").classList.add("active");
    } else {
      toggleButton.querySelector(".ri-moon-fill").classList.add("active");
    }
  }

  toggleButton.addEventListener("click", function () {
    if (document.documentElement.classList.contains("dark-mode")) {
      document.documentElement.className = "light-mode";
      localStorage.setItem("theme", "light-mode");
      this.querySelector(".ri-sun-fill").classList.add("active");
      this.querySelector(".ri-moon-fill").classList.remove("active");
    } else {
      document.documentElement.className = "dark-mode";
      localStorage.setItem("theme", "dark-mode");
      this.querySelector(".ri-moon-fill").classList.add("active");
      this.querySelector(".ri-sun-fill").classList.remove("active");
    }
  });