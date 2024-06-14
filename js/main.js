

document.querySelectorAll(".dropdown-btn").forEach((button) => {
  button.addEventListener("click", function () {
    var dropdown = this.nextElementSibling;
    dropdown.classList.toggle("active");
  });
});

const FAQHeaders = document.querySelectorAll(".FAQ-header");

FAQHeaders.forEach((header) => {
  header.addEventListener("click", function () {
    const isactiveFAQ = header.classList.contains("activeFAQ");
    toggleactiveFAQ(header, !isactiveFAQ);
  });
});

function toggleactiveFAQ(elem, show) {
  const content = elem.nextElementSibling;
  if (show) {
    elem.classList.add("activeFAQ");
    content.style.maxHeight = content.scrollHeight + "px";
  } else {
    elem.classList.remove("activeFAQ");
    content.style.maxHeight = 0;
  }
}



//для заполнения номера телефона
const phoneInput = document.getElementById("phone");

phoneInput.addEventListener("input", (event) => {
  let input = event.target.value;

  // Удаление всех символов кроме цифр
  input = input.replace(/\D/g, "");

  // Проверка начального кода страны
  if (input.startsWith("7")) {
    input = input.slice(1);
  }

  // Форматирование номера телефона
  if (input.length > 10) {
    input = input.slice(0, 10);
  }

  let formattedInput = "+7 ";
  if (input.length > 0) {
    formattedInput += "(" + input.substring(0, 3);
  }
  if (input.length >= 4) {
    formattedInput += ") " + input.substring(3, 6);
  }
  if (input.length >= 7) {
    formattedInput += "-" + input.substring(6, 8);
  }
  if (input.length >= 9) {
    formattedInput += "-" + input.substring(8, 10);
  }

  phoneInput.value = formattedInput;
});

const input = document.getElementById("stylizedInput");

input.addEventListener("input", () => {
  if (input.value) {
    input.classList.add("not-empty");
  } else {
    input.classList.remove("not-empty");
  }
});

//переключение классов на рекоментдуемое и новое

function toggleActive(element) {
  const isActive = element.classList.contains("active");
  if (!isActive) {
    // Удаляем класс 'active' у всех элементов с классом 'content-switch-rec' и 'content-switch-new'
    document
      .querySelectorAll(".content-switch-rec, .content-switch-new")
      .forEach((el) => {
        el.classList.remove("active");
      });
    // Добавляем класс 'active' к текущему элементу
    element.classList.add("active");
    if (element.classList.contains("content-switch-rec")) {
      document.querySelector(".content-main").style.display = "flex";
      document.querySelector(".content-main-switch").style.display = "none";
    } else {
      document.querySelector(".content-main").style.display = "none";
      document.querySelector(".content-main-switch").style.display = "flex";
      let items = document.querySelectorAll(
        ".content-main-switch .content-main-switch-item"
      );
      items.forEach((item) => {
        item.style.display = "block";
      });
    }
  }
}

//код для аккордеона FAQ

