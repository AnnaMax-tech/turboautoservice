// js/lang-detector.js
(function() {
    const SUPPORTED_LANGUAGES = ['de', 'en', 'ru', 'uk'];
    const DEFAULT_LANGUAGE = 'en';

    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    const savedLang = localStorage.getItem("selectedLang");
    const browserLang = navigator.language.toLowerCase().split('-')[0];
    
    function getValidLanguage(lang) {
        return SUPPORTED_LANGUAGES.includes(lang) ? lang : DEFAULT_LANGUAGE;
    }

    // Приоритет определения языка: URL > LocalStorage > Язык браузера > По умолчанию
    const detectedLang = getValidLanguage(urlLang) || getValidLanguage(savedLang) || getValidLanguage(browserLang);

    function updateLanguage(lang) {
        localStorage.setItem("selectedLang", lang);
        document.documentElement.lang = lang;
    }

    // Если языка нет в URL, добавляем ?lang=xxx
    if (!urlLang) {
        urlParams.set('lang', detectedLang);
        window.history.replaceState({}, '', window.location.pathname + '?' + urlParams.toString());
    }

    updateLanguage(detectedLang);
})();


