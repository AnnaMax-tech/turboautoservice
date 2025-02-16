// js/lang-detector.js
(function() {
    const SUPPORTED_LANGUAGES = ['de', 'en', 'ru', 'uk'];
    const DEFAULT_LANGUAGE = 'en';

    const urlParams = new URLSearchParams(window.location.search);
    let urlLang = urlParams.get('lang');
    const savedLang = localStorage.getItem("selectedLang");
    const browserLang = navigator.language.toLowerCase().split('-')[0];
    
    // Fix for Ukrainian language code
    if (urlLang === 'ua') {
        urlLang = 'uk';
    }

    function getValidLanguage(lang) {
        // Handle both 'ua' and 'uk' as valid Ukrainian codes
        if (lang === 'ua') {
            return 'uk';
        }
        return SUPPORTED_LANGUAGES.includes(lang) ? lang : DEFAULT_LANGUAGE;
    }

    // Priority: URL > LocalStorage > Browser Language > Default
    const detectedLang = getValidLanguage(urlLang) || getValidLanguage(savedLang) || getValidLanguage(browserLang);

    function updateLanguage(lang) {
        localStorage.setItem("selectedLang", lang);
        document.documentElement.lang = lang;
    }

    // Add lang parameter to URL if it's not present
    if (!urlLang) {
        urlParams.set('lang', detectedLang);
        window.history.replaceState({}, '', window.location.pathname + '?' + urlParams.toString());
    }

    updateLanguage(detectedLang);
})();

