// js\sendToTelegram.js

console.log("Файл sendToTelegram.js загружен!");
window.sendTelegram = sendTelegram;
window.sendEmail2 = sendEmail2;
console.log("Функции sendTelegram и sendEmail2 добавлены в window!");

// Функція отримання UTM-міток з URL
console.log(window.location.href)
function getUTMParams() {
    const params = new URLSearchParams(window.location.search);
    const utmData = {
        utm_source: params.get('utm_source') || '',
        utm_medium: params.get('utm_medium') || '',
        utm_campaign: params.get('utm_campaign') || '',
        utm_content: params.get('utm_content') || '',
        utm_term: params.get('utm_term') || ''
    };
    console.log("UTM-метки:", utmData);
    console.log(params.toString())
    return utmData;
}

console.log("Файл sendToTelegram.js подключен и работает!");

// Функція надсилання даних у Telegram
function sendTelegram(name, phone, email, request, select_type, select_size, select_decor, privacy) {
    const utmParams = getUTMParams();
    console.log("Отправка в Telegram:", name, phone, email);
    console.log("UTM-данные для Telegram:", utmParams);
    
    const botToken = '8197764205:AAE-XbNUdeNg39ufCTNgo5wLMP_8lp75eXw';
    const chatId = '-1002295760352';

    const bodymessage = `
        Запит з сайту Annamax (Автосервіс в Австрії) https://turbo.avtoinstallservis.site/
        Ім'я: ${name}
        Телефон: ${phone}
        Пошта: ${email}
        Літери: ${request || ""}
        Наповнювачи: ${select_type || ""}
        Варіант цифр: ${select_size || ""}
        Святкове оформлення: ${select_decor || ""}
        Згода на обробку даних: ${privacy || "так"}
        
        UTM-мітки:
        utm_source: ${utmParams.utm_source}
        utm_medium: ${utmParams.utm_medium}
        utm_campaign: ${utmParams.utm_campaign}
        utm_content: ${utmParams.utm_content}
        utm_term: ${utmParams.utm_term}
    `;

    return fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text: bodymessage })
    })
    .then(response => {
        console.log("Сообщение успешно отправлено в Telegram!");
        alert('Заявка успішно відправлена!');
    })
    .catch(error => {
        console.error('Помилка запиту:', error);
        alert('Помилка при відправці заявки.');
    });
}

// Explicitly attach functions to window
window.sendTelegram = sendTelegram;
window.sendEmail2 = sendEmail2;
window.getUTMParams = getUTMParams;

// Add console log to verify script loading
console.log("sendToTelegram.js loaded and functions attached to window!");

// ===============================================================================

// Функція надсилання на email
function sendEmail2(name, phone, email, request, select_type, select_size, select_decor, privacy) {
    const emailjs = window.emailjs; // Используем emailjs из глобального объекта window
    if (!emailjs) {
        console.error("Ошибка: emailjs не загружен!");
        return;
    }

    console.log("EmailJS загружен:", typeof emailjs !== "undefined" ? "Да" : "Нет");

    let emailjsID = "mq5LVCRL1uA0epLXa";
    emailjs.init(emailjsID);

    const utmParams = getUTMParams();
    const templateParams = {
        from_name: 'site Annamax (Автосервіс в Австрії) https://turbo.avtoinstallservis.site/',
        message: `
            Ім'я: ${name || ""} 
            Телефон: ${phone || ""}
            Е-mail: ${email || ""}
            Літери: ${request || ""}
            Наповнювачи: ${select_type || ""} 
            Варіант цифр: ${select_size || ""} 
            Святкове оформлення: ${select_decor || ""}

            UTM-метки:
            utm_source: ${utmParams.utm_source}
            utm_medium: ${utmParams.utm_medium}
            utm_campaign: ${utmParams.utm_campaign}
            utm_content: ${utmParams.utm_content}
            utm_term: ${utmParams.utm_term}
        `,
    };

    console.log("Отправка email с данными:", templateParams);

    let SERVICE_ID = 'service_pq3pnlx';
    let TEMPLATE_ID = 'template_4zhd3xj';

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
        .then((response) => {
            console.log('Email успішно відправлено!', response.status, response.text);
        })
        .catch((error) => {
            console.error('Помилка відправки:', error);
        });
}
