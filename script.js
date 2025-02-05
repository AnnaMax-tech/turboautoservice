const carSelect = document.querySelector("#car_make");
const modelSelect = document.querySelector("#car_model");
const carSelectedValue = carSelect.value;
const cardButtons = document.querySelectorAll(".card_btn");
const modalWindow = document.getElementById("modal_window");
const closeModalBtn = document.querySelector(".modal_close_btn");
const modalForm = document.querySelector(".modal_form");
const langSelect = document.getElementById("lang_select");
const modalResult = document.getElementById("result");
const modalPhoneInput = document.querySelector(".input_phone");
const lang = localStorage.getItem("selectedLang");

//Close Modal
function closeModal() {
  const lang = localStorage.getItem("selectedLang");
  modalWindow.classList.remove("active");
  closeModalBtn.classList.remove("active");
  resetFormFields();
  modalResult.textContent =
    lang === "en"
      ? "Total cost from: €0.00"
      : lang === "de"
      ? "Summe ab: €0.00"
      : lang === "ua"
      ? "Сума від: €0.00"
      : "Language not supported";
  modalPhoneInput.style.border = "";
}

function resetFormFields() {
  const form = modalWindow.querySelector(".modal_form");
  form.reset();
  form.querySelector('input[type="tel"]').value = "+43";
  document.getElementById("car_model").innerHTML =
    '<option value="" disabled selected>Спочатку оберіть марку авто!</option>';
}

cardButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modalWindow.classList.add("active");
  });
});

modalWindow.addEventListener("mousedown", (event) => {
  if (event.target !== modalWindow) {
    return;
  }
  closeModal();
});

closeModalBtn.addEventListener("click", () => {
  closeModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

// Selects with Cars
carSelect.addEventListener("change", () => {
  const selectedMake = carSelect.value;
  const modelOptions = [];

  switch (selectedMake) {
    case "toyota":
      modelOptions.push(
        "Corolla",
        "Camry",
        "RAV4",
        "Land Cruiser",
        "Hilux",
        "Yaris",
        "Supra",
        "Prius",
        "Avalon",
        "Highlander",
        "Tacoma",
        "Sequoia"
      );
      break;
    case "volkswagen":
      modelOptions.push(
        "Golf",
        "Passat",
        "Tiguan",
        "Polo",
        "Jetta",
        "Arteon",
        "ID.4",
        "ID.3",
        "Touareg",
        "Beetle",
        "Amarok"
      );
      break;
    case "ford":
      modelOptions.push(
        "Focus",
        "Mustang",
        "Explorer",
        "F-150",
        "Escape",
        "Fusion",
        "Edge",
        "Expedition",
        "Bronco",
        "Ranger",
        "Maverick"
      );
      break;
    case "honda":
      modelOptions.push(
        "Civic",
        "Accord",
        "CR-V",
        "Pilot",
        "Fit",
        "Odyssey",
        "Ridgeline",
        "HR-V",
        "Passport",
        "Insight"
      );
      break;
    case "bmw":
      modelOptions.push(
        "X5",
        "3 Series",
        "5 Series",
        "7 Series",
        "X3",
        "X1",
        "X7",
        "M3",
        "M5",
        "i4",
        "iX"
      );
      break;
    case "mercedes":
      modelOptions.push(
        "C-Class",
        "E-Class",
        "GLE",
        "S-Class",
        "GLC",
        "GLS",
        "A-Class",
        "CLA-Class",
        "EQB",
        "EQC",
        "AMG GT"
      );
      break;
    case "hyndai":
      modelOptions.push(
        "Elantra",
        "Santa Fe",
        "Tucson",
        "Accent",
        "Kona",
        "Sonata",
        "Palisade",
        "Ioniq 5",
        "Kona Electric",
        "Veloster",
        "Nexo"
      );
      break;
    case "nissan":
      modelOptions.push(
        "Altima",
        "Rogue",
        "Murano",
        "Pathfinder",
        "Sentra",
        "Maxima",
        "Armada",
        "Juke",
        "Titan",
        "Leaf"
      );
      break;
    case "tesla":
      modelOptions.push(
        "Model S",
        "Model 3",
        "Model X",
        "Model Y",
        "Cybertruck"
      );
      break;
    case "kia":
      modelOptions.push(
        "Sportage",
        "Sorento",
        "Rio",
        "Optima",
        "Soul",
        "Telluride",
        "Stinger",
        "Forte",
        "Carnival",
        "Niro"
      );
      break;
    default:
      modelOptions.push("Please select a car make");
  }
  modelSelect.innerHTML = "";

  modelOptions.forEach((model) => {
    const option = document.createElement("option");
    option.value = model;
    option.text = model;
    modelSelect.appendChild(option);
  });
});

// CALCULATOR
const detailing = 15;
const diagnostic = 15;
const electronicDiagnostic = 15;
const repare = 15;

const multipliers = {
  Corolla: 1,
  Camry: 1.1,
  RAV4: 1.2,
  "Land Cruiser": 1.5,
  Hilux: 1.3,
  Yaris: 1,
  Supra: 1.8,
  Prius: 1.2,
  Avalon: 1.3,
  Highlander: 1.4,
  Tacoma: 1.3,
  Sequoia: 1.5,
  Golf: 1,
  Passat: 1.1,
  Tiguan: 1.2,
  Polo: 1,
  Jetta: 1.1,
  Arteon: 1.3,
  "ID.4": 1.4,
  "ID.3": 1.3,
  Touareg: 1.5,
  Beetle: 1.2,
  Amarok: 1.4,
  Focus: 1,
  Mustang: 1.6,
  Explorer: 1.4,
  "F-150": 1.5,
  Escape: 1.2,
  Fusion: 1.1,
  Edge: 1.3,
  Expedition: 1.5,
  Bronco: 1.4,
  Ranger: 1.3,
  Maverick: 1.2,
  Civic: 1,
  Accord: 1.1,
  "CR-V": 1.2,
  Pilot: 1.4,
  Fit: 1,
  Odyssey: 1.2,
  Ridgeline: 1.3,
  "HR-V": 1.1,
  Passport: 1.3,
  Insight: 1.1,
  X5: 1.6,
  "3 Series": 1.4,
  "5 Series": 1.5,
  "7 Series": 1.8,
  X3: 1.4,
  X1: 1.3,
  X7: 1.8,
  M3: 2,
  M5: 2.2,
  i4: 1.9,
  iX: 1.8,
  "C-Class": 1.4,
  "E-Class": 1.5,
  GLE: 1.6,
  "S-Class": 1.8,
  GLC: 1.5,
  GLS: 1.7,
  "A-Class": 1.3,
  "CLA-Class": 1.4,
  EQB: 1.6,
  EQC: 1.7,
  "AMG GT": 2,
  Elantra: 1,
  "Santa Fe": 1.2,
  Tucson: 1.2,
  Accent: 1,
  Kona: 1.1,
  Sonata: 1.1,
  Palisade: 1.4,
  "Ioniq 5": 1.5,
  "Kona Electric": 1.4,
  Veloster: 1.3,
  Nexo: 1.5,
  Altima: 1,
  Rogue: 1.2,
  Murano: 1.3,
  Pathfinder: 1.4,
  Sentra: 1,
  Maxima: 1.2,
  Armada: 1.5,
  Juke: 1.1,
  Titan: 1.4,
  Leaf: 1.3,
  "Model S": 1.8,
  "Model 3": 1.5,
  "Model X": 1.9,
  "Model Y": 1.7,
  Cybertruck: 2,
  Sportage: 1.2,
  Sorento: 1.3,
  Rio: 1,
  Optima: 1.1,
  Soul: 1,
  Telluride: 1.4,
  Stinger: 1.6,
  Forte: 1,
  Carnival: 1.2,
  Niro: 1.1,
};

const resultDisplay = document.getElementById("result");
const carModelSelect = document.getElementById("car_model");

function calculateTotal() {
  const selectedModel = carModelSelect.value;
  const multiplier = multipliers[selectedModel] || 1;

  let total = 0;

  if (document.getElementById("detailing_input").checked) {
    total += detailing * multiplier;
  }
  if (document.getElementById("diagnostic_input").checked) {
    total += diagnostic * multiplier;
  }
  if (document.getElementById("electronics_input").checked) {
    total += electronicDiagnostic * multiplier;
  }
  if (document.getElementById("repare_input").checked) {
    total += repare * multiplier;
  }

  resultDisplay.textContent = `Total cost from: €${total.toFixed(2)}`;
}

document.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
  checkbox.addEventListener("change", calculateTotal);
});

//Counter figures
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter_item_number");
  const speed = 200;

  const runCounter = (counter) => {
    const target = +counter.getAttribute("data-count");
    let count = +counter.innerText;
    const increment = target / speed;

    const interval = setInterval(() => {
      if (count < target) {
        count += increment;
        counter.innerText = Math.min(Math.ceil(count), target);
      } else {
        counter.innerText = target;
        clearInterval(interval);
      }
    }, 10);
  };

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          runCounter(counter);
          observer.unobserve(counter);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => observer.observe(counter));
});

// Input Phone Validate
const phoneInputs = document.querySelectorAll(".input_phone");
const itiInstances = [];

// Инициализация полей для intlTelInput
phoneInputs.forEach((input) => {
  const iti = window.intlTelInput(input, {
    initialCountry: "at", // Инициализация с кодом страны
    geoIpLookup: (callback) => {
      fetch("https://ipinfo.io/json?token=your_token_here")
        .then((response) => response.json())
        .then((data) => callback(data.country))
        .catch(() => callback("us"));
    },
    utilsScript:
      "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
  });

  itiInstances.push({ input, iti }); // Добавляем экземпляр в массив
});

document.querySelectorAll('a[target="_blank"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const url = new URL(link.href);
    const utmParams = new URLSearchParams(url.search);

    // Извлечение текущего массива из localStorage
    const clickedLinks =
      JSON.parse(localStorage.getItem("clicked_links")) || [];

    // Создаем объект с данными текущего нажатия
    const clickedData = {
      href: link.href,
      utm_source: utmParams.get("utm_source") || "Не указано",
      utm_medium: utmParams.get("utm_medium") || "Не указано",
      utm_campaign: utmParams.get("utm_campaign") || "Не указано",
      utm_content: utmParams.get("utm_content") || "Не указано",
      utm_term: utmParams.get("utm_term") || "Не указано",
      timestamp: new Date().toISOString(), // Время клика
    };

    // Добавляем новые данные в массив
    clickedLinks.push(clickedData);

    // Сохраняем обновленный массив в localStorage
    localStorage.setItem("clicked_links", JSON.stringify(clickedLinks));

    console.log("Данные о нажатии сохранены:", clickedData);
  });
});

async function hashPhoneNumber(phoneNumber) {
  // Кодирование строки в байты
  const encoder = new TextEncoder();
  const data = encoder.encode(phoneNumber);

  // Хэширование с использованием SHA-256
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);

  // Преобразование результата в шестнадцатеричную строку
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashedPhone = hashArray
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");

  return hashedPhone;
}

async function sendEmail(params) {
  const emailJSID = "f-9iJDVJajodVpgnA"; // Ваш ID
  const SERVICE_ID = "service_duehlmq"; // Ваш Service ID
  const TEMPLATE_ID = "template_yn4v6qu"; // Ваш Template ID

  emailjs.init(emailJSID);

  try {
    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, params);
    console.log("Email успішно відправлено!", response.status, response.text);
    return true; // Успешная отправка
  } catch (error) {
    console.error("Помилка відправки:", error);
    return false; // Ошибка отправки
  }
}

async function sendEmail2(params) {
  const emailJSID = "f-9iJDVJajodVpgnA"; // Ваш ID
  const SERVICE_ID = "service_duehlmq"; // Ваш Service ID
  const TEMPLATE_ID = "template_yn4v6qu"; // Ваш Template ID

  emailjs.init(emailJSID);

  try {
    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, params);
    console.log("Email успішно відправлено!", response.status, response.text);
    return true; // Успешная отправка
  } catch (error) {
    console.error("Помилка відправки:", error);
    return false; // Ошибка отправки
  }
}

const sendPostRequest = async (apiVersion, pixelId, token, eventData) => {
  const url = `https://graph.facebook.com/${apiVersion}/${pixelId}/events?access_token=${token}`;

  const payload = {
    data: eventData,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Ошибка запроса:", errorData);
    } else {
      const responseData = await response.json();
      console.log("Успешная отправка:", responseData);
    }
  } catch (error) {
    console.error("Ошибка выполнения запроса:", error);
  }
};

// Обработчик отправки формы
const feedbackForm = document.querySelector(".feedback_form");

feedbackForm.addEventListener("submit", async (e) => {
  e.preventDefault(); // Отмена стандартного поведения

  // Получение значений полей
  const name = feedbackForm.querySelector('input[name="name"]').value.trim();
  const phoneInput = feedbackForm.querySelector(".input_phone");
  const car = feedbackForm.querySelector('input[name="car_name"]').value.trim();
  const acceptPolitics = feedbackForm.querySelector(
    'input[type="checkbox"]'
  ).checked;

  // Получаем экземпляр intlTelInput для поля телефона
  const iti = itiInstances.find(({ input }) => input === phoneInput)?.iti;

  // Проверка валидности телефона
  const isPhoneValid = iti && iti.isValidNumber();

  // Локализация сообщений
  const messages = {
    fillFields: {
      ua: "Будь ласка, заповніть всі поля і прийміть політику конфіденційності!",
      en: "Please fill in all fields and accept the privacy policy!",
      de: "Bitte füllen Sie alle Felder aus und akzeptieren Sie die Datenschutzrichtlinie!",
    },
    invalidPhone: {
      ua: "Будь ласка, введіть дійсний номер телефону!",
      en: "Please enter a valid phone number!",
      de: "Bitte geben Sie eine gültige Telefonnummer ein!",
    },
    success: {
      ua: "Дані успішно відправлені!",
      en: "Data has been successfully sent!",
      de: "Daten wurden erfolgreich gesendet!",
    },
  };

  const lang = langSelect.value;
  const errorMessageFillFields =
    messages.fillFields[lang] || "Language not supported";
  const errorMessageInvalidPhone =
    messages.invalidPhone[lang] || "Language not supported";
  const successMessage = messages.success[lang] || "Language not supported";

  // Валидация формы
  if (!name || !phoneInput.value.trim() || !car || !acceptPolitics) {
    Toastify({
      text: errorMessageFillFields,
      duration: 3000,
      close: true,
      gravity: "top",
      position: "center",
      backgroundColor: "#FF6347", // Красный для ошибки
    }).showToast();
    return;
  }

  if (!isPhoneValid) {
    Toastify({
      text: errorMessageInvalidPhone,
      duration: 3000,
      close: true,
      gravity: "top",
      position: "center",
      backgroundColor: "#FF6347",
    }).showToast();
    phoneInput.style.border = "2px solid red";
    return;
  }

  // Если данные валидны
  phoneInput.style.border = ""; // Убираем ошибку

  const token = "8197764205:AAE-XbNUdeNg39ufCTNgo5wLMP_8lp75eXw";
  const chatId = "-1002295760352";
  const message = `Назва сайту: Turbo Autoservice\nФорма для консультації:\nІм'я: ${name}\nТелефон: ${phoneInput.value}\nАвтомобіль: ${car}`;

  try {
    // Отправка данных в Telegram
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      }
    );

    if (!telegramResponse.ok) {
      throw new Error("Не удалось отправить сообщение в Telegram");
    }

    // Отправка данных в EmailJS
    emailjs.init("izUn8c8DGbhnXBEc8"); // Инициализация EmailJS
    const emailResponse = await emailjs.send(
      "service_q0nga99",
      "template_z8ca37o",
      {
        from_name: "Назва сайту - Turbo Autoservice",
        name: `${name} /// Авто користувача: ${car} `,
        phone: `${phoneInput.value}`,
      }
    );

    if (emailResponse.status !== 200) {
      throw new Error("Не удалось отправить сообщение на почту");
    }

    // Успешное уведомление
    Toastify({
      text: successMessage,
      duration: 3000,
      close: true,
      gravity: "top",
      position: "center",
      backgroundColor: "#4CAF50", // Зеленый для успеха
    }).showToast();

    // Очистка формы
    feedbackForm.reset();
  } catch (error) {
    console.error(error);
    Toastify({
      text: "Ошибка отправки данных. Попробуйте позже.",
      duration: 3000,
      close: true,
      gravity: "top",
      position: "center",
      backgroundColor: "#FF6347", // Красный для ошибки
    }).showToast();
  }
});

modalForm.addEventListener("submit", async (e) => {
  e.preventDefault(); // Отмена стандартного поведения формы

  // Получение значений полей
  const name = modalForm.querySelector('input[name="name"]').value.trim();
  const phoneInput = modalForm.querySelector(".input_phone");
  const carMake = modalForm.querySelector("#car_make").value;
  const carModel = modalForm.querySelector("#car_model").value;
  const acceptPolitics = modalForm.querySelector(
    'input[type="checkbox"][required]'
  ).checked;
  const selectedServices = Array.from(
    modalForm.querySelectorAll(
      ".modal_form_services input[type='checkbox']:checked"
    )
  ).map((checkbox) => checkbox.nextElementSibling.textContent.trim());
  const totalPrice = modalForm.querySelector("#result").textContent.trim();

  // Получаем экземпляр intlTelInput для поля телефона
  const iti = itiInstances.find(({ input }) => input === phoneInput)?.iti;

  // Проверка валидности телефона
  const isPhoneValid = iti && iti.isValidNumber();

  // Локализация сообщений
  const errorMessages = {
    fillFields: {
      ua: "Будь ласка, заповніть всі поля і прийміть політику конфіденційності!",
      en: "Please fill in all fields and accept the privacy policy!",
      de: "Bitte füllen Sie alle Felder aus und akzeptieren Sie die Datenschutzrichtlinie!",
    },
    invalidPhone: {
      ua: "Будь ласка, введіть дійсний номер телефону!",
      en: "Please enter a valid phone number!",
      de: "Bitte geben Sie eine gültige Telefonnummer ein!",
    },
    success: {
      ua: "Дані успішно відправлені!",
      en: "Data has been successfully sent!",
      de: "Daten wurden erfolgreich gesendet!",
    },
  };

  const errorMessageFillFields =
    errorMessages.fillFields[lang] || "Language not supported";
  const errorMessageInvalidPhone =
    errorMessages.invalidPhone[lang] || "Language not supported";
  const successMessage =
    errorMessages.success[lang] || "Language not supported";

  // Проверка всех условий
  if (!name || !phoneInput.value.trim() || !carMake || !acceptPolitics) {
    Toastify({
      text: errorMessageFillFields,
      duration: 3000,
      close: true,
      gravity: "top",
      position: "center",
      backgroundColor: "#FF6347", // Красный для ошибки
    }).showToast();
    return;
  }

  if (!isPhoneValid) {
    Toastify({
      text: errorMessageInvalidPhone,
      duration: 3000,
      close: true,
      gravity: "top",
      position: "center",
      backgroundColor: "#FF6347", // Красный для ошибки
    }).showToast();
    phoneInput.style.border = "2px solid red";
    return;
  }

  phoneInput.style.border = ""; // Сбрасываем стили ошибок

  const clickedLinks = JSON.parse(localStorage.getItem("clicked_links")) || [];

  // Формируем сообщение
  const message = `
    Нова заявка:\nНазва сайту: Turbo Autroservice\nІм'я: ${name}\nТелефон: ${
    phoneInput.value
  }\nМарка авто: ${carMake}\nМодель авто: ${carModel}\nПослуги: ${
    selectedServices.length > 0 ? selectedServices.join(", ") : "Не обрані"
  }\nСумма: ${totalPrice}\n\nUTM-мітки: ${clickedLinks
    .map(
      (link, index) =>
        `${index + 1}. Ссилка: ${link.href}\n  UTM Source: ${
          link.utm_source
        }\n  UTM Medium: ${link.utm_medium}\n  UTM Campaign: ${
          link.utm_campaign
        }\n  Час: ${link.timestamp}`
    )
    .join("\n\n")}
  `;

  // Параллельная отправка в Telegram и EmailJS
  try {
    // Отправка в Telegram
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot8197764205:AAE-XbNUdeNg39ufCTNgo5wLMP_8lp75eXw/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: "-1002295760352",
          text: message,
        }),
      }
    );

    if (!telegramResponse.ok) {
      throw new Error("Не удалось отправить сообщение в Telegram");
    }

    // Отправка в EmailJS
    emailjs.init("izUn8c8DGbhnXBEc8"); // Инициализация EmailJS
    const emailResponse = await emailjs.send(
      "service_q0nga99",
      "template_5mwmhdt",
      {
        from_name: "Назва сайту - Turbo Autoservice",
        name: `${name}`,
        carType: `${carMake}`,
        service: `${
          selectedServices.length > 0
            ? selectedServices.join(", ")
            : "Не обрані"
        }`,
        phone: `${phoneInput.value}`,
        comments: `Модель авто: ${carModel}`,
      }
    );

    if (emailResponse.status !== 200) {
      throw new Error("Не удалось отправить сообщение на почту");
    }

    const phoneNumber = iti.getNumber(); // Получаем номер телефона в формате E.164
    const hashedPhone = await hashPhoneNumber(phoneNumber); // Хэшируем номер

    const eventData = [
      {
        event_name: "Lead",
        event_time: Math.floor(Date.now() / 1000),
        user_data: {
          ph: hashedPhone,
        },
        custom_data: {
          currency: "EUR",
          value: parseFloat(totalPrice.replace(/[^\d.-]/g, "")) || 0,
          services:
            selectedServices.length > 0
              ? selectedServices
              : ["No services selected"],
        },
      },
    ];

    const apiVersion = "v12.0";
    const pixelId = "1071062520995467"; // Замените на ваш Pixel ID
    const token =
      "EAA2CZAuNcWIABO2teerfXDNZBl8JVBckLyweuI4I4hy528XsJXjE3dfNZCd64XROdKGRZBNQKx1FMcijLGr0AddqZARHid3kZA9psJP7VYWS6dTkZAAihJkRRZCBCtbRfP5REZCVqPGD4DqF3yvzBi3cHCs0AaDEU6X5nHWYa4pHxHhHN53ZAzQbDZBG7UAsD00Yr7ZAsQZDZD"; // Замените на ваш Access Token

    await sendPostRequest(apiVersion, pixelId, token, eventData);

    Toastify({
      text: successMessage,
      duration: 3000,
      close: true,
      gravity: "top",
      position: "center",
      backgroundColor: "#4CAF50", // Зеленый для успеха
    }).showToast();

    // Сброс формы и закрытие модалки
    modalForm.reset();
    closeModal();
  } catch (error) {
    console.error("Ошибка:", error);
    Toastify({
      text: "Ошибка отправки данных. Попробуйте позже.",
      duration: 3000,
      close: true,
      gravity: "top",
      position: "center",
      backgroundColor: "#FF6347", // Красный для ошибки
    }).showToast();
  }
});

function toggleMenu() {
  const nav = document.getElementById("burgerNav");
  nav.style.display = nav.style.display === "block" ? "none" : "block";
}
