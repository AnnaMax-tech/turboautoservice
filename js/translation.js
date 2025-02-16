// Сообщение о загрузке скрипта
console.log('translation.js loaded!');

const SUPPORTED_LANGUAGES = ['de', 'en', 'ru', 'uk'];
const DEFAULT_LANGUAGE = 'en';



const translations = {
  site_title: {
    ua: "Turbo Autoservice : Діагностика, ремонт та електрика",
    en: "Turbo Autoservice: Diagnosis, Repair, and Electrical Services",
    de: "Turbo Autoservice : Diagnose, Reparatur und Elektrik",
    ru: "Turbo Autoservice : Диагностика, ремонт и электрика",
  },
  header_main: {
    ua: "Головна",
    en: "Main",
    de: "Startseite",
    ru: "Главная",
  },
  header_about: {
    ua: "Про нас",
    en: "About Us",
    de: "Über uns",
    ru: "О нас",
  },
  header_services: {
    ua: "Наші послуги",
    en: "Our Services",
    de: "Unsere Dienstleistungen",
    ru: "Наши услуги",
  },
  header_reviews: {
    ua: "Відгуки",
    en: "Reviews",
    de: "Bewertungen",
    ru: "Отзывы",
  },
  header_contacts: {
    ua: "Контакти",
    en: "Contacts",
    de: "Kontakte",
    ru: "Контакты",
  },
  topheader_phone: {
    ua: "Телефон",
    en: "Phone",
    de: "Telefon",
    ru: "Телефон",
  },
  topheader_email: {
    ua: "Ел. пошта",
    en: "Email",
    de: "E-Mail",
    ru: "Эл. почта",
  },
  topheader_contact: {
    ua: "Зв'язатися",
    en: "Contact",
    de: "Kontakt",
    ru: "Связаться",
  },
  intro: {
    ua: "Професійне обслуговування і ремонт автомобілів в Гляйсдорфі",
    en: "Professional car maintenance and repair in Gleisdorf",
    de: "Professionelle Autowartung und Reparatur in Gleisdorf",
    ru: "Профессиональное техобслуживание и ремонт автомобилей в Глайсдорфе",
  },
  signService: {
    ua: "Записатися на сервіс",
    en: "Book a service",
    de: "Service buchen",
    ru: "Записаться на сервис",
  },
  feedback: {
    ua: "Введіть ваше ім'я...",
    en: "Enter your name...",
    de: "Geben Sie Ihren Namen ein...",
    ru: "Введите ваше имя...",
  },
  about_title: {
    ua: "Про Нас",
    en: "About Us",
    de: "Über uns",
    ru: "О нас",
  },
  about_first_text: {
    ua: "Автосервіс Тurboautoservice— це професійний догляд за вашим автомобілем. Ми спеціалізуємося на ремонтних і детейлінгових послугах, поєднуючи швидкість, якість і уважність до деталей.",
    en: "Turboautoservice Auto Service — professional care for your car. We specialize in repair and detailing services, combining speed, quality, and attention to detail.",
    de: "Turboautoservice Autoservice — professionelle Pflege für Ihr Auto. Wir sind auf Reparatur- und Detailing-Dienstleistungen spezialisiert und verbinden Schnelligkeit, Qualität und Liebe zum Detail.",
    ru: "Автосервис Turboautoservice — это профессиональный уход за вашим автомобилем. Мы специализируемся на ремонтных и детейлинговых услугах, сочетая скорость, качество и внимательность к деталям.",
  },
    about_second_text: {
    ua: "Чому ми?",
    en: "Why us?",
    de: "Warum wir?",
    ru: "Почему мы?",
  },
  about_third_text: {
    ua: "Експертність: Досвідчені майстри забезпечують надійний сервіс із гарантією.",
    en: "Expertise: Experienced technicians provide reliable service with a guarantee.",
    de: "Fachkompetenz: Erfahrene Fachleute bieten zuverlässigen Service mit Garantie.",
    ru: "Экспертиза: Опытные техники обеспечивают надежное обслуживание с гарантией.",
  },
  about_third_text: {
    ua: "Експертність: Досвідчені майстри забезпечують надійний сервіс із гарантією.",
    en: "Expertise: Experienced technicians provide reliable service with a guarantee.",
    de: "Fachkompetenz: Erfahrene Fachleute bieten zuverlässigen Service mit Garantie.",
    ru: "Экспертиза: Опытные техники обеспечивают надежное обслуживание с гарантией.",
  },
  about_fourth_text: {
    ua: "Оперативність: Завдяки системі запису ваш автомобіль завжди готовий вчасно.",
    en: "Efficiency: Thanks to our scheduling system, your car is always ready on time.",
    de: "Effizienz: Dank unseres Terminplanungssystems ist Ihr Auto immer pünktlich fertig.",
    ru: "Эффективность: Благодаря нашей системе записи ваш автомобиль всегда готов вовремя.",
  },
  about_fiveth_text: {
    ua: "Індивідуальний підхід: Ми дбаємо про кожну деталь, щоб ваше авто виглядало бездоганно.",
    en: "Personalized Approach: We care about every detail to ensure your car looks flawless.",
    de: "Individueller Ansatz: Wir achten auf jedes Detail, damit Ihr Auto makellos aussieht.",
    ru: "Индивидуальный подход: Мы заботимся о каждой детали, чтобы ваш автомобиль выглядел безупречно.",
  },
  about_sixth_text: {
    ua: "Обираючи Тurboautoservice, ви отримуєте більше, ніж просто сервіс — ви отримуєте надійність і турботу про ваше авто.",
    en: "By choosing Turboautoservice, you get more than just service — you get reliability and care for your car.",
    de: "Wenn Sie sich für Turboautoservice entscheiden, erhalten Sie mehr als nur einen Service — Sie erhalten Zuverlässigkeit und Fürsorge für Ihr Auto.",
    ru: "Выбирая Turboautoservice, вы получаете больше, чем просто сервис — вы получаете надежность и заботу о вашем автомобиле.",
  },
  about_first_figure: {
    ua: "Кваліфіковані спеціалісти завжди готові надати якісні послуги нашим клієнтам з гарантією",
    en: "Qualified specialists are always ready to provide our clients with high-quality services backed by a guarantee.",
    de: "Qualifizierte Fachleute sind stets bereit, unseren Kunden hochwertige Dienstleistungen mit Garantie anzubieten.",
    ru: "Квалифицированные специалисты всегда готовы предоставить нашим клиентам качественные услуги с гарантией.",
  },
  about_second_figure: {
    ua: "Кожного дня в нас працює контакт-центр для консультації та записів наших клієнтів",
    en: "Our contact center operates daily to assist clients with consultations and appointments.",
    de: "Unser Kontaktzentrum ist täglich im Einsatz, um Kunden bei Beratungen und Terminvereinbarungen zu unterstützen.",
    ru: "Наш контакт-центр работает ежедневно, чтобы помочь клиентам с консультациями и записями.",
  },
  about_third_figure: {
    ua: "Ми прагнемо оптимізувати процес покращення Вашого авто і надати послуги високоякісно та швидко",
    en: "We strive to optimize the process of improving your car and deliver services with both speed and top quality.",
    de: "Wir bemühen uns, den Prozess der Verbesserung Ihres Autos zu optimieren und Dienstleistungen schnell und in höchster Qualität zu erbringen.",
    ru: "Мы стремимся оптимизировать процесс улучшения вашего автомобиля и предоставлять услуги быстро и качественно.",
  },
  services_title: {
    ua: "Наші Послуги",
    en: "Our Services",
    de: "Unsere Dienstleistungen",
    ru: "Наши Услуги",
  },
  card_detailing: {
    ua: "Преміум автосервіс - чистота та турбота про ваш автомобіль",
    en: "Premium car service - cleanliness and care for your car",
    de: "Premium Car Detailing - Sauberkeit und Pflege für Ihr Auto",
    ru: "Премиум-автосервис - чистота и забота о вашем автомобиле",
  },
  card_diagnostic: {
    ua: "Точна автодіагностика - швидке виявлення несправностей ",
    en: "Precise auto-diagnostics for quick fault detection",
    de: "Präzise Autodiagnose - schnelles Erkennen von Fehlern",
    ru: "Точная автодиагностика - быстрое выявление неисправностей",
  },
  card_electrics: {
    ua: "Надійне обслуговування електрики вашого автомобіля ",
    en: "Reliable maintenance of your car's electrical system ",
    de: "Zuverlässiger Fahrzeugelektrik-Service ",
    ru: "Надежное обслуживание электрики вашего автомобиля ",
  },
  card_repair: {
    ua: "Якісний ремонт автомобілів - надійно та професійно",
    en: "High-quality car repair - reliably and professionally",
    de: "Hochwertige Autoreparaturen – zuverlässig und professionell",
    ru: "Качественный ремонт автомобилей - надежно и профессионально",
  },
  modal_detailing: {
    ua: "Детейлінг",
    en: "Detailing",
    de: "Fahrzeugaufbereitung",
    ru: "Детейлинг",
  },
  modal_diagnostic: {
    ua: "Діагностика",
    en: "Diagnostics",
    de: "Diagnose",
    ru: "Диагностика",
  },
  modal_electrics: {
    ua: "Автоелектрика",
    en: "Auto Electronics",
    de: "Autoelektrik",
    ru: "Автоэлектрика",
  },
  modal_repair: {
    ua: "Ремонт",
    en: "Repair",
    de: "Reparatur",
    ru: "Ремонт",
  },
  detailing_first_li: {
    ua: "Глибоке очищення салону від пилу та бруду за допомогою спеціалізованих засобів.",
    en: "Deep cleaning of the interior from dust and dirt using specialized products.",
    de: "Tiefenreinigung des Fahrzeuginnenraums von Staub und Schmutz mit spezialisierten Reinigungsmitteln.",
    ru: "Глубокая очистка салона от пыли и грязи с использованием специализированных средств.",
  },
  detailing_second_li: {
    ua: "Захист і реставрація шкіряних та тканинних сидінь, а також інших поверхонь.",
    en: "Protection and restoration of leather and fabric seats, as well as other surfaces.",
    de: "Schutz und Restaurierung von Leder- und Stoffpolstern sowie anderen Oberflächen.",
    ru: "Защита и восстановление кожаных и тканевых сидений, а также других поверхностей.",
  },
  detailing_third_li: {
    ua: "Усунення неприємних запахів і дезінфекція для створення комфортної атмосфери.",
    en: "Elimination of unpleasant odors and disinfection to create a comfortable atmosphere.",
    de: "Entfernung unangenehmer Gerüche und Desinfektion zur Schaffung einer angenehmen Atmosphäre.",
    ru: "Устранение неприятных запахов и дезинфекция для создания комфортной атмосферы.",
  },
  diagnostic_first_li: {
    ua: "Комп'ютерна діагностика електронних систем автомобіля.",
    en: "Computer diagnostics of the car's electronic systems.",
    de: "Computergestützte Diagnose der elektronischen Systeme des Fahrzeugs.",
    ru: "Компьютерная диагностика электронных систем автомобиля.",
  },
  diagnostic_second_li: {
    ua: "Перевірка роботи двигуна, трансмісії та інших ключових систем.",
    en: "Inspection of the engine, transmission, and other key systems.",
    de: "Überprüfung des Motors, der Getriebe und anderer wichtiger Systeme.",
    ru: "Проверка работы двигателя, трансмиссии и других ключевых систем.",
  },
  diagnostic_third_li: {
    ua: "Визначення можливих несправностей та рекомендації щодо їх усунення.",
    en: "Identification of potential issues and recommendations for their resolution.",
    de: "Feststellung möglicher Probleme und Empfehlungen zu deren Behebung.",
    ru: "Определение возможных неисправностей и рекомендации по их устранению.",  
  },
  electrics_first_li: {
    ua: "Ремонт та заміна електричних компонентів автомобіля (акумулятори, стартери, генератори).",
    en: "Repair and replacement of electrical components in the car (batteries, starters, alternators).",
    de: "Reparatur und Austausch elektrischer Komponenten des Fahrzeugs (Batterien, Starter, Generatoren).",
    ru: "Ремонт и замена электрических компонентов автомобиля (аккумуляторы, стартеры, генераторы).",
  },
  electrics_second_li: {
    ua: "Виправлення проблем з освітленням, проводкою та електронними системами.",
    en: "Fixing issues with lighting, wiring, and electronic systems.",
    de: "Behebung von Problemen mit Beleuchtung, Verkabelung und elektronischen Systemen.",
    ru: "Устранение проблем с освещением, проводкой и электронными системами.",
  },
  electrics_third_li: {
    ua: "Встановлення додаткових електронних пристроїв (сигналізацій, парктроніків, мультимедійних систем).",
    en: "Installation of additional electronic devices (alarms, parking sensors, multimedia systems).",
    de: "Installation zusätzlicher elektronischer Geräte (Alarmanlagen, Parksensoren, Multimediasysteme).",
    ru: "Установка дополнительных электронных устройств (сигнализации, парктроников, мультимедийных систем).",
  },
  repair_first_li: {
    ua: "Усі види ремонтних робіт по двигуну, трансмісії та ходовій частині.",
    en: "All types of repair work on the engine, transmission, and chassis.",
    de: "Alle Arten von Reparaturarbeiten am Motor, Getriebe und Fahrwerk.",
    ru: "Все виды ремонтных работ по двигателю, трансмиссии и ходовой части.",
  },
  repair_second_li: {
    ua: "Замінa деталей та агрегатів (гальмівні системи, підвіска, зчеплення).",
    en: "Replacement of parts and assemblies (braking systems, suspension, clutch).",
    de: "Austausch von Teilen und Baugruppen (Bremssysteme, Aufhängung, Kupplung).",
    ru: "Замена деталей и агрегатов (тормозные системы, подвеска, сцепление).",
  },
  repair_third_li: {
    ua: "Виправлення кузовних пошкоджень та лакофарбових покриттів.",
    en: "Repair of body damage and restoration of paintwork.",
    de: "Behebung von Karosserieschäden und Wiederherstellung der Lackierung.",
    ru: "Устранение кузовных повреждений и восстановление лакокрасочных покрытий.",
  },
  card_btn: {
    ua: "Детальніше",
    en: "More",
    de: "Mehr",
    ru: "Подробнее",
  },
  enter_name: {
    ua: "Введіть ваше ім’я...",
    en: "Enter your name...",
    de: "Geben Sie Ihren Namen ein...",
    ru: "Введите ваше имя...",
  },
  modal_carbrand: {
    ua: "Оберіть марку авто...",
    en: "Select your car brand...",
    de: "Wählen Sie Ihre Automarke aus...",
    ru: "Выберите марку автомобиля...",
  },
  modal_carmark: {
    ua: "Спочатку оберіть марку авто!",
    en: "First, select a car brand!",
    de: "Wählen Sie zuerst eine Automarke aus!",
    ru: "Сначала выберите марку автомобиля!",
  },
  modal_services: {
    ua: "Послуги:",
    en: "Services:",
    de: "Dienstleistungen:",
    ru: "Услуги:",
  },
  modal_total: {
    ua: "Сума від: €0.00",
    en: "Total from: €0.00",
    de: "Summe ab: €0.00",
    ru: "Сумма от: €0.00",
  },
  accept: {
    ua: "Я приймаю",
    en: "I accept",
    de: "Ich akzeptiere",
    ru: "Я принимаю",
  },
  politics: {
    ua: "Політику конфіденційності",
    en: "the Privacy Policy",
    de: "die Datenschutzrichtlinie",
    ru: "Политику конфиденциальности",
  },
  clients_title: {
    ua: "Наші Клієнти",
    en: "Our Clients",
    de: "Unsere Kunden",
    ru: "Наши Клиенты",
  },
  first_client_name: {
    ua: "Андрій Кравчук (Україна)",
    en: "Andrii Kravchuk (Ukraine)",
    de: "Andrii Kravchuk (Ukraine)",
    ru: "Андрей Кравчук (Украина)",
  },
  second_client_name: {
    ua: "Олексій Дорошенко (Україна)",
    en: "Oleksii Doroshenko (Ukraine)",
    de: "Oleksii Doroshenko (Ukraine)",
    ru: "Алексей Дорошенко (Украина)",
  },
  third_client_name: {
    ua: "Йоган Келлер (Австрія)",
    en: "Johann Keller (Austria)",
    de: "Johann Keller (Austria)",
    ru: "Иоганн Келлер (Австрия)",
  },
  first_client_text: {
    ua: "Привозив авто на ремонт ходової частини. Все зробили на найвищому рівні, ще й запропонували безкоштовну діагностику в майбутньому. Сервіс супер, персонал привітний, ціни адекватні!",
    en: "Brought his car in for chassis repair. Everything was done at the highest level, and they even offered free diagnostics for the future. Excellent service, friendly staff, and reasonable prices!",
    de: "Hat sein Auto zur Reparatur des Fahrwerks gebracht. Alles wurde auf höchstem Niveau erledigt, und sie boten sogar kostenlose Diagnosen für die Zukunft an. Hervorragender Service, freundliches Personal und angemessene Preise!",
    ru: "Привозил авто на ремонт ходовой части. Все сделали на высшем уровне, да и предложили бесплатную диагностику на будущее. Сервис супер, персонал приветливый, цены адекватные!",
  },
  second_client_text: {
    ua: "Звертався в цей автосервіс на діагностику двигуна. Роботу виконали швидко, все детально пояснили. Дуже сподобалася відповідальність майстрів та сучасне обладнання. Тепер тільки до вас! Рекомендую!",
    en: "Visited this service center for engine diagnostics. The work was done quickly, and everything was explained in detail. I really appreciated the responsibility of the technicians and the modern equipment. From now on, only here! Highly recommend!",
    de: "War in dieser Werkstatt zur Motor-Diagnose. Die Arbeit wurde schnell erledigt, und alles wurde detailliert erklärt. Ich schätze die Verantwortung der Techniker und die moderne Ausrüstung sehr. Ab jetzt nur noch hier! Sehr zu empfehlen!",
    ru: "Обратился в этот автосервис для диагностики двигателя. Работу выполнили быстро, все подробно объяснили. Очень понравилась ответственность мастеров и современное оборудование. Теперь только к вам! Рекомендую!",
  },
  third_client_text: {
    ua: "Мені порадили цей сервіс друзі. Дуже задоволений високим рівнем обслуговування! Робив ремонт гальмівної системи. Все виконали чітко і вчасно. Надійне місце, яке варто відвідати.",
    en: "Friends recommended this service to me. I am very satisfied with the high level of service! I had the brake system repaired. Everything was done precisely and on time. A reliable place worth visiting.",
    de: "Mir wurde dieser Service von Freunden empfohlen. Ich bin sehr zufrieden mit dem hohen Serviceniveau! Ich ließ das Bremssystem reparieren. Alles wurde präzise und pünktlich erledigt. Ein zuverlässiger Ort, der einen Besuch wert ist.",
    ru: "Друзья порекомендовали мне этот сервис. Я очень доволен высоким уровнем обслуживания! Делал ремонт тормозной системы. Все сделали четко и вовремя. Надежное место, которое стоит посетить.",
  },
  projects: {
    ua: "Реалізованих проектів",
    en: "Completed Projects",
    de: "Abgeschlossene Projekte",
    ru: "Реализованных проектов",
  },
  polishings: {
    ua: "Кількість поліровок",
    en: "Number of Polishings",
    de: "Anzahl der Polierungen",
    ru: "Количество полировок",
  },
  cleanings: {
    ua: "Кількість хімчисток",
    en: "Number of Interior Cleanings",
    de: "Anzahl der Innenreinigung",
    ru: "Количество химчисток",
  },
  studios: {
    ua: "Кількість студій",
    en: "Number of Studios",
    de: "Anzahl der Studios",
    ru: "Количество студий",
  },
  shedule_title: {
    ua: "Графік Роботи",
    en: "Working Hours",
    de: "Öffnungszeiten",
    ru: "График Работы",
  },
  monday: {
    ua: "Пн 8:00 - 22:00",
    en: "Mon 8:00 AM - 10:00 PM",
    de: "Mo 8:00 - 22:00",
    ru: "Пн 8:00 - 22:00",
  },
  tuesday: {
    ua: "Вт 8:00 - 22:00",
    en: "Tue 8:00 AM - 10:00 PM",
    de: "Di 8:00 - 22:00",
    ru: "Вт 8:00 - 22:00",
  },
  wednesday: {
    ua: "Ср 8:00 - 22:00",
    en: "Wed 8:00 AM - 10:00 PM",
    de: "Mi 8:00 - 22:00",
    ru: "Ср 8:00 - 22:00",
  },
  thursday: {
    ua: "Чт 8:00 - 22:00",
    en: "Thu 8:00 AM - 10:00 PM",
    de: "Do 8:00 - 22:00",
    ru: "Чт 8:00 - 22:00",
  },
  friday: {
    ua: "Пт 8:00 - 22:00",
    en: "Fri 8:00 AM - 10:00 PM",
    de: "Fr 8:00 - 22:00",
    ru: "Пт 8:00 - 22:00",
  },
  weekend: {
    ua: "Сб,Нд - По домовленості",
    en: "Sat, Sun - By appointment",
    de: "Sa, So - Nach Vereinbarung",
    ru: "Сб, Вс - По договоренности",
  },
  feedback_title: {
    ua: "Заповніть форму для зв’язку!",
    en: "Fill out the contact form!",
    de: "Füllen Sie das Kontaktformular aus!",
    ru: "Заполните форму для связи!",
  },
  works_title: {
    ua: "Наші Роботи",
    en: "Our Works",
    de: "Unsere Arbeiten",
    ru: "Наши Работы",
  },
  placeholder_name: {
    ua: "Введіть ваше ім'я...",
    en: "Enter your name...",
    de: "Bitte geben Sie Ihren Namen ein...",
    ru: "Введите ваше имя...",
  },
  car_name: {
    ua: "Введіть назву Вашого авто...",
    en: "Enter the name of your car...",
    de: "Geben Sie den Namen Ihres Autos ein...",
    ru: "Введите название вашего автомобиля...",
  },
  feedback_btn: {
    ua: "Отримати консультацію",
    en: "Get a consultation",
    de: "Beratung erhalten",
    ru: "Получить консультацию",
  },
  footer_address: {
    ua: "Адреса",
    en: "Address",
    de: "Adresse",
    ru: "Адрес",
  },
  footer_nav: {
    ua: "Навігація",
    en: "Navigation",
    de: "Navigation",
    ru: "Навигация",
  },
  footer_socials: {
    ua: "Наші соцмережі",
    en: "Our Socials",
    de: "Unsere sozialen",
    ru: "Наши соцсети",
  },
  backsite: {
    ua: "Повернутись до сайту",
    en: "Return to the website",
    de: "Zurück zur Website",
    ru: "Вернуться на сайт",
  },
  politics_privacy: {
    ua: "Політика конфіденційності",
    en: "PRIVACY POLICY",
    de: "DATENSCHUTZRICHTLINIE",
    ru: "Политика конфиденциальности",
  },
  politics_first_p: {
    ua: "ФОП Колісник Т.М. з повагою ставиться до конфіденційної інформації будь-якої особи, яка відвідує наш інтернет-сайт. Всі Ваші дані збираються, обробляються і використовуються у відповідності до вимог чинного законодавства України.",
    en: "FOP Kolisnyk T.M. respects the confidentiality of any individual who visits our website. All your data is collected, processed, and used in accordance with the requirements of current Ukrainian legislation.",
    de: "Einzelunternehmer Kolisnyk T.M. respektiert die Vertraulichkeit jeder Person, die unsere Website besucht. Alle Ihre Daten werden in Übereinstimmung mit den Anforderungen der geltenden Gesetzgebung der Ukraine gesammelt, verarbeitet und verwendet.",
    ru: "ФОП Колісник Т.М. уважительно относится к конфиденциальной информации любого лица, посещающего наш веб-сайт. Все ваши данные собираются, обрабатываются и используются в соответствии с требованиями действующего законодательства Украины.",
  },
  politics_second_p: {
    ua: "Ми збираємо інформацію, яка стосується наших клієнтів, з метою використання її для можливості надавати повного обсягу наших послуг, і лише в тому випадку, якщо Ви добровільно надали інформацію або висловили згоду на її використання. Ми зобов’язуємося не використовувати, не обробляти і не передавати таку інформацію у спосіб, що виходить за межі вимог чинного законодавства України. Передача персональних даних здійснюється виключно на підставі судового рішення або в іншому порядку, передбаченому чинним законодавством України.",
    en: "We collect information about our clients to provide the full range of our services and only if you voluntarily provide the information or give consent for its use. We are committed not to use, process, or transfer such information in a way that goes beyond the requirements of current Ukrainian legislation. The transfer of personal data is carried out exclusively on the basis of a court decision or in another manner prescribed by the current legislation of Ukraine.",
    de: "Wir sammeln Informationen über unsere Kunden, um den vollen Umfang unserer Dienstleistungen bereitzustellen, und nur, wenn Sie die Informationen freiwillig zur Verfügung stellen oder der Nutzung zustimmen. Wir verpflichten uns, solche Informationen nicht in einer Weise zu verwenden, zu verarbeiten oder weiterzugeben, die über die Anforderungen der geltenden ukrainischen Gesetzgebung hinausgeht. Die Übermittlung personenbezogener Daten erfolgt ausschließlich auf der Grundlage einer gerichtlichen Entscheidung oder in einer anderen Weise, die durch die geltende ukrainische Gesetzgebung vorgesehen ist.",
    ru: "Мы собираем информацию о наших клиентах для предоставления полного спектра наших услуг и только в том случае, если вы добровольно предоставляете информацию или даете согласие на ее использование. Мы обязуемся не использовать, не обрабатывать и не передавать такую информацию способом, выходящим за рамки требований действующего законодательства Украины. Передача персональных данных осуществляется исключительно на основании судебного решения или иным способом, предусмотренным действующим законодательством Украины.",
  },
  politics_third_p: {
    ua: "Збережені дані будуть видалені з бази даних ФОП Колісник Т.М. після збігання періоду зберігання, встановленого законодавством, або у випадку, якщо більше не потребує збереження тих або інших даних. Ви маєте право у будь-який час вимагати видалення інформації про Вас з бази даних. У таких випадках, а також, якщо у Вас виникають інші побажання, пов’язані з Вашими персональними даними, просимо Вас звернутися до наших менеджерів.",
    en: "Stored data will be deleted from the database of FOP Kolisnyk T.M. after the expiration of the retention period established by law or in cases where the data is no longer needed. You have the right to request the deletion of your information from the database at any time. In such cases, as well as if you have any other requests related to your personal data, we ask you to contact our managers.",
    de: "Gespeicherte Daten werden aus der Datenbank von Einzelunternehmer Kolisnyk T.M. gelöscht, nachdem die gesetzliche Aufbewahrungsfrist abgelaufen ist oder wenn die Daten nicht mehr benötigt werden. Sie haben das Recht, jederzeit die Löschung Ihrer Daten aus der Datenbank zu verlangen. In solchen Fällen sowie bei anderen Wünschen in Bezug auf Ihre personenbezogenen Daten bitten wir Sie, sich an unsere Manager zu wenden.",
    ru: "Сохраненные данные будут удалены из базы данных ФОП Колісник Т.М. после истечения срока хранения, установленного законодательством, или в случае, если данные больше не нужны. Вы имеете право в любое время потребовать удаления информации о себе из базы данных. В таких случаях, а также если у вас возникнут другие пожелания, связанные с вашими персональными данными, просим вас обратиться к нашим менеджерам.",
  },
  offerta: {
    ua: "Договір оферти",
    en: "Offer Agreement",
    de: "Angebotsvertrag",
    ru: "Договор оферты",
  },
  offerta_first_title: {
    ua: "Загальні положення",
    en: "General Provisions",
    de: "Allgemeine Bestimmungen",
    ru: "Общие положения",
  },
  offerta_second_title: {
    ua: "Поняття і визначення",
    en: "Concepts and Definitions",
    de: "Begriffe und Definitionen",
    ru: "Понятия и определения",
  },
  offerta_third_title: {
    ua: "Предмет Договору",
    en: "Subject of the Agreement",
    de: "Vertragsgegenstand",
    ru: "Предмет Договора",
  },
  offerta_fourth_title: {
    ua: "Порядок оформлення замовлення",
    en: "Order Placement Procedure",
    de: "Bestellverfahren",
    ru: "Порядок оформления заказа",
  },
  offerta_fiveth_title: {
    ua: "Порядок оплати замовлення",
    en: "Order Payment Procedure",
    de: "Zahlungsverfahren für die Bestellung",
    ru: "Порядок оплаты заказа",
  },
  offerta_sixth_title: {
    ua: "Умови доставки замовлення",
    en: "Order Delivery Terms",
    de: "Lieferbedingungen der Bestellung",
    ru: "Условия доставки заказа",
  },
  offerta_seventh_title: {
    ua: "Права і обов'язки сторін",
    en: "Rights and Obligations of the Parties",
    de: "Rechte und Pflichten der Parteien",
    ru: "Права и обязанности сторон",
  },
  offerta_eight_title: {
    ua: "Відповідальність сторін",
    en: "Liability of the Parties",
    de: "Haftung der Parteien",
    ru: "Ответственность сторон",
  },
  offerta_nineth_title: {
    ua: "Інші умови",
    en: "Other Terms",
    de: "Sonstige Bedingungen",
    ru: "Прочие условия",
  },
  offerta_tenth_title: {
    ua: "Порядок повернення товару належної якості",
    en: "Procedure for Returning Goods of Proper Quality",
    de: "Verfahren zur Rückgabe von Waren in einwandfreiem Zustand",
    ru: "Порядок возврата товара надлежащего качества",
  },
  offerta_eleventh_title: {
    ua: "Термін дії договору",
    en: "Term of the Agreement",
    de: "Vertragsdauer",
    ru: "Срок действия договора",
  },
  offerta_twelfth_title: {
    ua: "Звертаємо вашу увагу",
    en: "Please Note",
    de: "Bitte beachten Sie",
    ru: "Обращаем ваше внимание",
  },
  offerta_thirteenth_title: {
    ua: "Адреса та Реквізити",
    en: "Address and Details",
    de: "Adresse und Angaben",
    ru: "Адрес и Реквизиты",
  },
  offerta_first_p: {
    ua: "1.1. Справжня оферта, є офіційною пропозицією ФОП Колісник Тетяна Миколаївна, далі по тексту — «Продавець», укласти Договір купівлі-продажу товарів дистанційним способом, тобто через Інтернет-магазин, далі по тексту — «Договір», і розміщує Публічну оферту (пропозицію) на офіційному інтернет-сайті Продавця «…» (Далі - «Інтернет-сайт»).",
    en: "1.1. This offer is the official proposal of Sole Proprietor Kolisnyk Tetiana Mykolaivna, hereinafter referred to as the 'Seller,' to conclude a Contract for the sale of goods remotely, i.e., through an online store, hereinafter referred to as the 'Contract,' and publishes a Public Offer (proposal) on the Seller's official website '…' (hereinafter referred to as the 'Website').",
    de: "1.1. Dieses Angebot ist der offizielle Vorschlag des Einzelunternehmers Kolisnyk Tetiana Mykolaivna, im Folgenden als „Verkäufer“ bezeichnet, einen Kaufvertrag über Waren auf fernmündlichem Wege, d. h. über einen Online-Shop, abzuschließen, im Folgenden als „Vertrag“ bezeichnet, und veröffentlicht ein öffentliches Angebot (Vorschlag) auf der offiziellen Website des Verkäufers „…“ (im Folgenden als „Website“ bezeichnet).",
    ru: "1.1. Настоящее предложение является официальным предложением ИП Колисник Татьяна Николаевна, в дальнейшем именуемым «Продавец», заключить Договор купли-продажи товаров дистанционным способом, то есть через Интернет-магазин, в дальнейшем именуемый «Договор», и публикует Публичную оферту (предложение) на официальном сайте Продавца «…» (далее - «Сайт»).",
  },
  offerta_second_p: {
    ua: "1.2. Моментом повного і безумовного прийняття Покупцем пропозиції Продавця (акцептом) укласти електронний договір купівлі-продажу товарів, вважається факт оплати Покупцем замовлення на умовах цього Договору, у строки та за цінами, вказаними на Інтернет-сайті Продавця.",
    en: "1.2. The moment of full and unconditional acceptance by the Buyer of the Seller's offer (acceptance) to conclude an electronic contract for the sale of goods is considered to be the fact of the Buyer's payment for the order under the terms of this Contract, within the timeframes and at the prices specified on the Seller's Website.",
    de: "1.2. Der Zeitpunkt der vollständigen und bedingungslosen Annahme des Angebots des Verkäufers (Annahme) durch den Käufer, einen elektronischen Kaufvertrag über Waren abzuschließen, gilt als die Zahlung des Käufers für die Bestellung zu den Bedingungen dieses Vertrags, innerhalb der auf der Website des Verkäufers angegebenen Fristen und zu den angegebenen Preisen.",
    ru: "1.2. Моментом полного и безусловного принятия Покупателем предложения Продавца (акцепта) заключить электронный договор купли-продажи товаров считается факт оплаты Покупателем заказа на условиях настоящего Договора, в сроки и по ценам, указанным на Сайте Продавца.",
  },
  offerta_third_p: {
    ua: "2.1. У цій оферті, якщо контекст не вимагає іншого, наведені нижче терміни мають таке значення:",
    en: "2.1. In this offer, unless the context requires otherwise, the terms listed below shall have the following meanings:",
    de: "2.1. In diesem Angebot haben die unten aufgeführten Begriffe, sofern der Kontext nichts anderes erfordert, die folgende Bedeutung:",
    ru: "2.1. В настоящем предложении, если контекст не требует иного, ниже приведенные термины имеют следующие значения:",
  },
  offerta_fourth_p: {
    ua: "3.1. Продавець зобов'язується передати у власність Покупця Товар, а Покупець зобов'язується оплатити і прийняти Товар на умовах даного Договору. Цей Договір регулює купівлю-продаж товарів в Інтернет-магазині, в тому числі:",
    en: "3.1. The Seller undertakes to transfer ownership of the Product to the Buyer, and the Buyer undertakes to pay for and accept the Product under the terms of this Agreement. This Agreement regulates the sale of goods in the Online Store, including:",
    de: "3.1. Der Verkäufer verpflichtet sich, das Eigentum an der Ware an den Käufer zu übertragen, und der Käufer verpflichtet sich, die Ware zu bezahlen und unter den Bedingungen dieses Vertrags zu akzeptieren. Dieser Vertrag regelt den Kauf und Verkauf von Waren im Online-Shop, einschließlich:",
    ru: "3.1. Продавец обязуется передать в собственность Покупателя Товар, а Покупатель обязуется оплатить и принять Товар на условиях настоящего Договора. Данный Договор регулирует куплю-продажу товаров в Интернет-магазине, в том числе:",
  },
  offerta_fiveth_p: {
    ua: "3.1. Продавець зобов'язується передати у власність Покупця Товар, а Покупець зобов'язується оплатити і прийняти Товар на умовах даного Договору. Цей Договір регулює купівлю-продаж товарів в Інтернет-магазині, в тому числі:",
    en: "3.1. The Seller undertakes to transfer ownership of the Product to the Buyer, and the Buyer undertakes to pay for and accept the Product under the terms of this Agreement. This Agreement regulates the sale of goods in the Online Store, including:",
    de: "3.1. Der Verkäufer verpflichtet sich, das Eigentum an der Ware an den Käufer zu übertragen, und der Käufer verpflichtet sich, die Ware zu bezahlen und unter den Bedingungen dieses Vertrags zu akzeptieren. Dieser Vertrag regelt den Kauf und Verkauf von Waren im Online-Shop, einschließlich:",
    ru: "3.1. Продавец обязуется передать в собственность Покупателя Товар, а Покупатель обязуется оплатить и принять Товар на условиях настоящего Договора. Данный Договор регулирует куплю-продажу товаров в Интернет-магазине, в том числе:",
  },
  offerta_sixth_p: {
    ua: "4.1. Покупець має право оформити замовлення на будь-який товар, представлений на Сайті Інтернет-магазину і наявний.",
    en: "4.1. The Buyer has the right to place an order for any product presented on the Online Store Website and available in stock.",
    de: "4.1. Der Käufer hat das Recht, eine Bestellung für jedes Produkt auf der Website des Online-Shops zu tätigen, das auf Lager und verfügbar ist.",
    ru: "4.1. Покупатель имеет право оформить заказ на любой товар, представленный на Сайте Интернет-магазина и имеющийся в наличии.",
  },
  offerta_seventh_p: {
    ua: "4.2. Кожна позиція може бути представлена ​​в замовленні в будь-якій кількості.",
    en: "4.2. Each item can be included in the order in any quantity.",
    de: "4.2. Jede Position kann in beliebiger Menge in der Bestellung enthalten sein.",
    ru: "4.2. Каждая позиция может быть включена в заказ в любом количестве.",
  },
  offerta_eight_p: {
    ua: "4.3. При відсутності товару на складі, Менеджер компанії зобов'язаний поставити Покупця до відома (по телефону або через електронну пошту).",
    en: "4.3. In case the product is out of stock, the Company Manager is obliged to notify the Buyer (by phone or email).",
    de: "4.3. Bei Nichtverfügbarkeit des Produkts ist der Firmenmanager verpflichtet, den Käufer zu benachrichtigen (per Telefon oder E-Mail).",
    ru: "4.3. При отсутствии товара на складе Менеджер компании обязан уведомить Покупателя (по телефону или по электронной почте).",
  },
  offerta_nineth_p: {
    ua: "4.4. При відсутності товару Покупець має право замінити його товаром аналогічної моделі, відмовитися від даного товару, анулювати замовлення.",
    en: "4.4. If the product is unavailable, the Buyer has the right to replace it with a product of the same model, refuse the product, or cancel the order.",
    de: "4.4. Bei Nichtverfügbarkeit des Produkts hat der Käufer das Recht, es durch ein Produkt des gleichen Modells zu ersetzen, das Produkt abzulehnen oder die Bestellung zu stornieren.",
    ru: "4.4. При отсутствии товара Покупатель имеет право заменить его товаром аналогичной модели, отказаться от данного товара, аннулировать заказ.",
  },
  offerta_nineth_p: {
    ua: "4.4. При відсутності товару Покупець має право замінити його товаром аналогічної моделі, відмовитися від даного товару, анулювати замовлення.",
    en: "4.4. If the product is unavailable, the Buyer has the right to replace it with a product of the same model, refuse the product, or cancel the order.",
    de: "4.4. Bei Nichtverfügbarkeit des Produkts hat der Käufer das Recht, es durch ein Produkt des gleichen Modells zu ersetzen, das Produkt abzulehnen oder die Bestellung zu stornieren.",
    ru: "4.4. При отсутствии товара Покупатель имеет право заменить его товаром аналогичной модели, отказаться от данного товара, аннулировать заказ.",
  },
  offerta_tenth_p: {
    ua: "5.1. Оплата здійснюється за фактом отримання товару у відділенні транспортних компанії за готівковий розрахунок в гривнях.",
    en: "5.1. Payment is made upon receipt of the product at the transport company's office in cash in UAH.",
    de: "5.1. Die Zahlung erfolgt bei Erhalt der Ware in einer Filiale des Transportunternehmens in bar in Hrywnja.",
    ru: "5.1. Оплата производится по факту получения товара в отделении транспортной компании за наличный расчет в гривнах.",
  },
  offerta_eleventh_p: {
    ua: "5.2. Оплата може здійснюватися безготівковим розрахунком на розрахунковий рахунок ФОП.",
    en: "5.2. Payment can be made by bank transfer to the Sole Proprietor's account.",
    de: "5.2. Die Zahlung kann per Überweisung auf das Geschäftskonto des Einzelunternehmers erfolgen.",
    ru: "5.2. Оплата может производиться безналичным расчетом на расчетный счет ИП.",
  },
  offerta_twelfth_p: {
    ua: "5.3. Оплата може здійснюватися картами Visa, Mastercard і іншими картами, а також на картку ПриватБанку.",
    en: "5.3. Payment can be made using Visa, Mastercard, and other cards, as well as to a PrivatBank card.",
    de: "5.3. Die Zahlung kann mit Visa, Mastercard und anderen Karten sowie auf eine PrivatBank-Karte erfolgen.",
    ru: "5.3. Оплата может производиться картами Visa, Mastercard и другими картами, а также на карту ПриватБанка.",
  },
  offerta_thirteenth_p: {
    ua: "5.4. Прі не надходження коштів Інтернет-магазин залишає за собою право анулювати замовлення.",
    en: "5.4. In case of non-receipt of funds, the Online Store reserves the right to cancel the order.",
    de: "5.4. Bei Nichtzahlung behält sich der Online-Shop das Recht vor, die Bestellung zu stornieren.",
    ru: "5.4. При непоступлении средств Интернет-магазин оставляет за собой право аннулировать заказ.",
  },
  offerta_fourteenth_p: {
    ua: "6.1. Доставка товарів, придбаних в Інтернет-магазині, здійснюється до складів транспортних компаній, де і здійснюється видача замовлень.",
    en: "6.1. The delivery of goods purchased in the Online Store is made to the warehouses of transport companies, where the orders are issued.",
    de: "6.1. Die Lieferung der im Online-Shop gekauften Waren erfolgt an die Lager der Transportunternehmen, wo die Bestellungen ausgegeben werden.",
    ru: "6.1. Доставка товаров, приобретенных в Интернет-магазине, осуществляется на склады транспортных компаний, где и производится выдача заказов.",
  },
  offerta_fiveteenth_p: {
    ua: "6.2. Разом із замовленням Покупцеві надаються документи згідно законодавства України.",
    en: "6.2. Along with the order, the Buyer is provided with documents in accordance with the legislation of Ukraine.",
    de: "6.2. Zusammen mit der Bestellung erhält der Käufer die Dokumente gemäß der Gesetzgebung der Ukraine.",
    ru: "6.2. Вместе с заказом Покупателю предоставляются документы в соответствии с законодательством Украины.",
  },
  offerta_sixteenth_p: {
    ua: "7.1. Продавець має право:",
    en: "7.1. The Seller has the right:",
    de: "7.1. Der Verkäufer hat das Recht:",
    ru: "7.1. Продавец имеет право:",
  },
  offerta_seventeenth_p: {
    ua: "7.2. Покупець зобов'язаний:",
    en: "7.2. The Buyer is obligated to:",
    de: "7.2. Der Käufer ist verpflichtet:",
    ru: "7.2. Покупатель обязан:",
  },
  offerta_eighteenth_p: {
    ua: "7.3. Покупець має право:",
    en: "7.3. The Buyer has the right:",
    de: "7.3. Der Käufer hat das Recht:",
    ru: "7.3. Покупатель имеет право:",
  },
  offerta_nineteenth_p: {
    ua: "8.1. Сторони несуть відповідальність за невиконання або неналежне виконання умов цього договору в порядку, передбаченому цим договором та чинним законодавством України.",
    en: "8.1. The parties are liable for non-performance or improper performance of the terms of this agreement in the manner prescribed by this agreement and the current legislation of Ukraine.",
    de: "8.1. Die Parteien haften für die Nichterfüllung oder unsachgemäße Erfüllung der Bedingungen dieses Vertrags in der gemäß diesem Vertrag und der geltenden Gesetzgebung der Ukraine vorgesehenen Weise.",
    ru: "8.1. Стороны несут ответственность за неисполнение или ненадлежащее исполнение условий настоящего договора в порядке, предусмотренном настоящим договором и действующим законодательством Украины.",
  },
  offerta_twenty_p: {
    ua: "8.2. Продавець не несе відповідальності за:",
    en: "8.2. The Seller is not liable for:",
    de: "8.2. Der Verkäufer haftet nicht für:",
    ru: "8.2. Продавец не несет ответственности за:",
  },
  offerta_twentyone_p: {
    ua: "8.3. Покупець, використовуючи наданий йому доступ до мережі Інтернет, самостійно несе відповідальність за шкоду, заподіяну його діями (особисто, навіть якщо під його логіном знаходилося іншу особу) особам або їх майну, юридичним особам, державі чи моральним принципам моральності.",
    en: "8.3. The Buyer, using the provided access to the Internet, is solely responsible for any damage caused by their actions (personally, even if another person was using their login) to individuals or their property, legal entities, the state, or moral principles of morality.",
    de: "8.3. Der Käufer trägt die alleinige Verantwortung für Schäden, die durch sein Verhalten (persönlich, auch wenn eine andere Person seinen Login verwendet hat) gegenüber Einzelpersonen oder deren Eigentum, juristischen Personen, dem Staat oder den moralischen Grundsätzen der Moral verursacht werden, indem er den ihm zur Verfügung gestellten Zugang zum Internet nutzt.",
    ru: "8.3. Покупатель, используя предоставленный ему доступ в Интернет, несет полную ответственность за ущерб, причиненный его действиями (лично, даже если под его логином находилось другое лицо) физическим лицам или их имуществу, юридическим лицам, государству или моральным принципам морали.",
  },
  offerta_twentytwo_p: {
    ua: "8.4. У разі настання обставин непереборної сили, сторони звільняються від виконання умов цього договору. Під обставинами непереборної сили для цілей цього договору розуміються події, що мають надзвичайний, непередбачений характер, які виключають або об'єктивно заважають виконанню цього договору, настання яких Сторони не могли передбачити і запобігти розумними способами.",
    en: "8.4. In the event of force majeure circumstances, the parties are relieved from fulfilling the terms of this agreement. For the purposes of this agreement, force majeure circumstances are events that are extraordinary, unforeseen, and that exclude or objectively hinder the fulfillment of this agreement, the occurrence of which the Parties could not foresee and prevent by reasonable means.",
    de: "8.4. Im Falle von höherer Gewalt sind die Parteien von der Erfüllung der Bedingungen dieses Vertrags befreit. Höhere Gewalt im Sinne dieses Vertrags sind außergewöhnliche, unvorhersehbare Ereignisse, die die Erfüllung dieses Vertrags ausschließen oder objektiv hindern und deren Eintreten die Parteien nicht vorhersehen oder mit angemessenen Mitteln verhindern konnten.",
    ru: "8.4. В случае наступления обстоятельств непреодолимой силы стороны освобождаются от выполнения условий настоящего договора. Для целей настоящего договора под обстоятельствами непреодолимой силы понимаются события, имеющие чрезвычайный, непредвиденный характер, которые исключают или объективно мешают выполнению настоящего договора, наступление которых Стороны не могли предвидеть и предотвратить разумными способами.",
  },
  offerta_twentythree_p: {
    ua: "8.5. Сторони прикладають максимум зусиль для вирішення будь-яких розбіжностей виключно шляхом переговорів.",
    en: "8.5. The parties shall make every effort to resolve any disagreements solely through negotiations.",
    de: "8.5. Die Parteien werden alle Anstrengungen unternehmen, um etwaige Unstimmigkeiten ausschließlich durch Verhandlungen zu lösen.",
    ru: "8.5. Стороны приложат максимум усилий для разрешения любых разногласий исключительно путем переговоров.",
  },
  offerta_twentyfour_p: {
    ua: "9.1. Інтернет-магазин залишає за собою право в односторонньому порядку вносити зміни до цього договору за умови попередньої публікації його на сайті...",
    en: "9.1. The Online Store reserves the right to unilaterally make changes to this agreement, provided that they are published in advance on the website...",
    de: "9.1. Der Online-Shop behält sich das Recht vor, diesen Vertrag einseitig zu ändern, vorausgesetzt, dass die Änderungen vorher auf der Website veröffentlicht werden...",
    ru: "9.1. Интернет-магазин оставляет за собой право в одностороннем порядке вносить изменения в настоящий договор при условии предварительной публикации его на сайте...",
  },
  offerta_twentyfive_p: {
    ua: "9.2. Інтернет-магазин створений для організації дистанційного способу продажу товарів через Інтернет.",
    en: "9.2. The Online Store is created for the organization of the remote sale of goods via the Internet.",
    de: "9.2. Der Online-Shop wurde für die Organisation des Fernverkaufs von Waren über das Internet geschaffen.",
    ru: "9.2. Интернет-магазин создан для организации дистанционного способа продажи товаров через Интернет.",
  },
  offerta_twentyfour_p: {
    ua: "9.1. Інтернет-магазин залишає за собою право в односторонньому порядку вносити зміни до цього договору за умови попередньої публікації його на сайті...",
    en: "9.1. The Online Store reserves the right to unilaterally make changes to this agreement, provided that they are published in advance on the website...",
    de: "9.1. Der Online-Shop behält sich das Recht vor, diesen Vertrag einseitig zu ändern, vorausgesetzt, dass die Änderungen vorher auf der Website veröffentlicht werden...",
    ru: "9.1. Интернет-магазин оставляет за собой право в одностороннем порядке вносить изменения в настоящий договор при условии предварительной публикации его на сайте...",
  },
  offerta_twentysix_p: {
    ua: "9.3. Покупець несе відповідальність за достовірність інформації, зазначеної при оформленні замовлення інформації. При цьому, при здійсненні акцепту (оформленні замовлення і подальшої оплати товару) Покупець надає Продавцю свою беззастережну згоду на збір, обробку, зберігання, використання своїх персональних даних, в розумінні ЗУ «Про захист персональних даних».",
    en: "9.3. The Buyer is responsible for the accuracy of the information provided when placing the order. By accepting (placing the order and subsequently paying for the goods), the Buyer gives the Seller their unconditional consent to collect, process, store, and use their personal data in accordance with the Law of Ukraine 'On the Protection of Personal Data.'",
    de: "9.3. Der Käufer trägt die Verantwortung für die Richtigkeit der bei der Bestellung angegebenen Informationen. Mit der Annahme (Platzierung der Bestellung und anschließender Bezahlung der Ware) gibt der Käufer dem Verkäufer seine bedingungslose Zustimmung zur Erhebung, Verarbeitung, Speicherung und Nutzung seiner persönlichen Daten gemäß dem Gesetz der Ukraine „Über den Schutz personenbezogener Daten“.",
    ru: "9.3. Покупатель несет ответственность за достоверность информации, указанной при оформлении заказа. При этом, при совершении акцепта (оформлении заказа и последующей оплате товара) Покупатель предоставляет Продавцу свое безоговорочное согласие на сбор, обработку, хранение, использование своих персональных данных, в понимании ЗУ «О защите персональных данных».",
  },
  offerta_twentyseven_p: {
    ua: "9.4. Оплата Покупцем оформленого в Інтернет-магазині замовлення означає повну згоду Покупця з умовами договору купівлі-продажу (публічної оферти).",
    en: "9.4. The Buyer’s payment for the order placed in the Online Store means the Buyer’s full acceptance of the terms of the sales agreement (public offer).",
    de: "9.4. Die Zahlung des Käufers für die Bestellung, die im Online-Shop aufgegeben wurde, bedeutet die vollständige Zustimmung des Käufers zu den Bedingungen des Kaufvertrags (öffentliche Offerte).",
    ru: "9.4. Оплата Покупателем оформленного в Интернет-магазине заказа означает полное согласие Покупателя с условиями договора купли-продажи (публичной оферты).",
  },
  offerta_twentyeight_p: {
    ua: "9.5. Фактичною датою електронного угоди між сторонами є дата прийняття умов, відповідно до ст. 11 Закону України «Про електронну комерцію».",
    en: "9.5. The actual date of the electronic agreement between the parties is the date of acceptance of the terms, in accordance with Article 11 of the Law of Ukraine 'On Electronic Commerce.'",
    de: "9.5. Das tatsächliche Datum des elektronischen Vertrags zwischen den Parteien ist das Datum der Annahme der Bedingungen gemäß § 11 des Gesetzes der Ukraine „Über elektronische Handelsgeschäfte“.",
    ru: "9.5. Фактической датой электронного соглашения между сторонами является дата принятия условий, в соответствии со ст. 11 Закона Украины «О электронной коммерции».",
  },
  offerta_twentynine_p: {
    ua: "9.6. Використання ресурсу Інтернет-магазину для попереднього перегляду товару, а також для оформлення замовлення для Покупця є безкоштовним.",
    en: "9.6. The use of the Online Store resource for previewing products and placing orders is free of charge for the Buyer.",
    de: "9.6. Die Nutzung der Ressource des Online-Shops zum Vorab-Ansehen von Produkten sowie zum Aufgeben von Bestellungen ist für den Käufer kostenlos.",
    ru: "9.6. Использование ресурса Интернет-магазина для предварительного просмотра товара, а также для оформления заказа для Покупателя является бесплатным.",
  },
  offerta_thirty_p: {
    ua: "9.7. Інформація, яку надає Покупцем, є конфіденційною. Інтернет-магазин використовує інформацію про Покупця виключно в цілях обробки замовлення, відправлення повідомлень Покупцеві, доставки товару, здійснення взаєморозрахунків та ін.",
    en: "9.7. The information provided by the Buyer is confidential. The Online Store uses the information about the Buyer solely for the purposes of processing the order, sending notifications to the Buyer, delivering the product, making payments, etc.",
    de: "9.7. Die vom Käufer bereitgestellten Informationen sind vertraulich. Der Online-Shop verwendet die Informationen des Käufers ausschließlich zur Bearbeitung der Bestellung, zum Versenden von Benachrichtigungen an den Käufer, zur Lieferung der Ware, zur Durchführung von Zahlungen usw.",
    ru: "9.7. Информация, предоставленная Покупателем, является конфиденциальной. Интернет-магазин использует информацию о Покупателе исключительно для целей обработки заказа, отправки уведомлений Покупателю, доставки товара, осуществления взаиморасчетов и т. д.",
  },
  offerta_thirtyone_p: {
    ua: "10.1. Повернення товару в Інтернет-магазин проводиться згідно чинного законодавства України.",
    en: "10.1. The return of goods to the Online Store is carried out in accordance with the current legislation of Ukraine.",
    de: "10.1. Die Rückgabe von Waren an den Online-Shop erfolgt gemäß der geltenden Gesetzgebung der Ukraine.",
    ru: "10.1. Возврат товара в Интернет-магазин осуществляется в соответствии с действующим законодательством Украины.",
  },
  offerta_thirtytwo_p: {
    ua: "10.2. Повернення товару в Інтернет-магазин проводиться за рахунок Покупця.",
    en: "10.2. The return of goods to the Online Store is at the Buyer’s expense.",
    de: "10.2. Die Rückgabe von Waren an den Online-Shop erfolgt auf Kosten des Käufers.",
    ru: "10.2. Возврат товара в Интернет-магазин осуществляется за счет Покупателя.",
  },
  offerta_thirtythree_p: {
    ua: "10.3. При поверненні Покупцем товару належної якості, Інтернет-магазин повертає йому сплачену за товар грошову суму за фактом повернення товару за вирахуванням компенсації витрат Інтернет-магазину, пов'язаних з доставкою товару Покупцеві.",
    en: "10.3. When the Buyer returns goods of proper quality, the Online Store will refund the amount paid for the product, subject to the return of the product, minus compensation for the Online Store’s expenses related to the delivery of the product to the Buyer.",
    de: "10.3. Bei der Rückgabe von Waren in einwandfreiem Zustand erstattet der Online-Shop dem Käufer den für die Ware gezahlten Betrag nach der Rückgabe der Ware, abzüglich der Entschädigung für die Ausgaben des Online-Shops im Zusammenhang mit der Lieferung der Ware an den Käufer.",
    ru: "10.3. При возврате Покупателем товара надлежащего качества Интернет-магазин возвращает ему уплаченную за товар денежную сумму по факту возврата товара за вычетом компенсации расходов Интернет-магазина, связанных с доставкой товара Покупателю.",
  },
  offerta_thirtyfour_p: {
    ua: "11.1. Електронний договір вважається укладеним з моменту одержання особою, яка направила пропозицію укласти такий договір, відповіді про прийняття цієї пропозиції в порядку, визначеному частиною шостою статті 11 Закону України «Про електронну комерцію».",
    en: "11.1. The electronic agreement is considered concluded from the moment the person who made the offer receives a response accepting the offer, in the manner defined by part six of Article 11 of the Law of Ukraine 'On Electronic Commerce.'",
    de: "11.1. Der elektronische Vertrag gilt als abgeschlossen, sobald die Person, die das Angebot gemacht hat, eine Antwort auf die Annahme des Angebots gemäß Absatz sechs des Artikels 11 des Gesetzes der Ukraine „Über elektronische Handelsgeschäfte“ erhält.",
    ru: "11.1. Электронный договор считается заключенным с момента получения лицом, направившим предложение заключить такой договор, ответа о принятии этого предложения в порядке, определенном частью шестой статьи 11 Закона Украины «О электронной коммерции».",
  },
  offerta_thirtyfive_p: {
    ua: "11.2. До закінчення терміну дії цей Договір може бути розірваний за взаємною згодою сторін до моменту фактичної доставки товару, шляхом повернення грошових коштів.",
    en: "11.2. Before the expiration of this agreement, it may be terminated by mutual consent of the parties before the actual delivery of the product, through the return of funds.",
    de: "11.2. Vor Ablauf dieses Vertrages kann dieser einvernehmlich zwischen den Parteien gekündigt werden, bevor die tatsächliche Lieferung der Ware erfolgt, durch Rückerstattung der Gelder.",
    ru: "11.2. До окончания срока действия настоящего договора он может быть расторгнут по взаимному согласию сторон до момента фактической доставки товара, путем возврата денежных средств.",
  },
  offerta_thirtysix_p: {
    ua: "11.3. Сторони мають право розірвати цей договір в односторонньому порядку, в разі невиконання однією із сторін умов цього Договору та у випадках, передбачених чинним законодавством України.",
    en: "11.3. The parties have the right to terminate this agreement unilaterally in case of non-performance of the terms of this agreement by one of the parties and in cases provided for by the current legislation of Ukraine.",
    de: "11.3. Die Parteien haben das Recht, diesen Vertrag einseitig zu kündigen, wenn eine der Parteien die Bedingungen dieses Vertrages nicht erfüllt und in den Fällen, die durch die geltende Gesetzgebung der Ukraine vorgesehen sind.",
    ru: "11.3. Стороны имеют право расторгнуть настоящий договор в одностороннем порядке в случае неисполнения одной из сторон условий настоящего договора и в случаях, предусмотренных действующим законодательством Украины.",
  },
  offerta_thirtyseven_p: {
    ua: "Звертаємо вашу увагу, що інтернет-магазин «…» на офіційному інтернет-сайті …, має право, відповідно до законодавства України, надавати право користування інтернет платформою ФОП і юридичним особам для реалізації товару.",
    en: "Please note that the online store '…' on the official website …, has the right, in accordance with the legislation of Ukraine, to grant the use of the internet platform to individual entrepreneurs and legal entities for the sale of goods.",
    de: "Bitte beachten Sie, dass der Online-Shop „…“ auf der offiziellen Website …, gemäß der Gesetzgebung der Ukraine, das Recht hat, Einzelunternehmern und juristischen Personen die Nutzung der Internetplattform zum Verkauf von Waren zu gewähren.",
    ru: "Обращаем ваше внимание, что интернет-магазин «…» на официальном сайте …, имеет право, в соответствии с законодательством Украины, предоставлять право пользования интернет-платформой ФОП и юридическим лицам для реализации товара.",
  },
  offerta_thirtyeight_p: {
    ua: "ФОП Колісник Тетяна Миколаївна",
    en: "Individual Entrepreneur Tetiana Mykolayivna Koliskyk",
    de: "Einzelunternehmerin Tetiana Mykolayivna Koliskyk",
    ru: "ИП Колисник Татьяна Николаевна",
  },
  offerta_thirtynine_p: {
    ua: "Полтавська обл., м. Полтава, вул. Головка 8",
    en: "Poltava Region, Poltava City, Hoholka Street 8",
    de: "Oblast Poltawa, Stadt Poltawa, Hoholka Straße 8",
    ru: "Полтавская обл., г. Полтава, ул. Головка 8",
  },
  offerta_first_li: {
    ua: "«товар» - моделі, аксесуари, комплектуючі та супровідні предмети;",
    en: "'Product' – models, accessories, components, and accompanying items.",
    de: "„Ware“ – Modelle, Zubehör, Komponenten und begleitende Artikel.",
    ru: "«товар» - модели, аксессуары, комплектующие и сопутствующие предметы;",
  },
  offerta_second_li: {
    ua: "«Інтернет-магазин» - відповідно до Закону України «про електронну комерцію», засіб для подання або реалізації товару, роботи або послуги шляхом здійснення електронної угоди.",
    en: "'Online Store' – according to the Law of Ukraine 'On Electronic Commerce,' a means for offering or selling goods, works, or services through an electronic agreement.",
    de: "„Online-Shop“ – gemäß dem Gesetz der Ukraine „Über elektronische Handelsgeschäfte“ ein Mittel, um Waren, Arbeiten oder Dienstleistungen durch einen elektronischen Vertrag anzubieten oder zu verkaufen.",
    ru: "«Интернет-магазин» - в соответствии с Законом Украины «о электронной коммерции», средство для предложения или продажи товара, работ или услуги путем заключения электронного договора.",
  },
  offerta_third_li: {
    ua: "«Продавець» - компанія, яка реалізує товари, представлені на Інтернет-сайті.",
    en: "'Seller' – the company that sells goods presented on the Website.",
    de: "„Verkäufer“ – das Unternehmen, das die auf der Website präsentierten Waren verkauft.",
    ru: "«Продавец» - компания, реализующая товары, представленные на Интернет-сайте.",
  },
  offerta_fourth_li: {
    ua: "«Покупець» - фізична особа, що уклала з Продавцем Договір на умовах, викладених нижче.",
    en: "'Buyer' – an individual who enters into an Agreement with the Seller under the terms outlined below.",
    de: "„Käufer“ – eine natürliche Person, die mit dem Verkäufer einen Vertrag zu den unten dargelegten Bedingungen abschließt.",
    ru: "«Покупатель» - физическое лицо, заключившее с Продавцом Договор на условиях, изложенных ниже.",
  },
  offerta_fiveth_li: {
    ua: "«Замовлення» - вибір окремих позицій з переліку товарів, зазначених Покупцем при розміщенні замовлення і проведенні оплати.",
    en: "'Order' – the selection of individual items from the list of goods specified by the Buyer when placing the order and making payment.",
    de: "„Bestellung“ – die Auswahl einzelner Artikel aus der Liste der Waren, die der Käufer bei der Bestellung und Bezahlung angibt.",
    ru: "«Заказ» - выбор отдельных позиций из списка товаров, указанных Покупателем при размещении заказа и проведении оплаты.",
  },
  offerta_sixth_li: {
    ua: "добровільний вибір Покупцем товарів в Інтернет-магазині;",
    en: "Voluntary selection of goods by the Buyer in the Online Store;",
    de: "Freiwillige Auswahl der Waren durch den Käufer im Online-Shop;",
    ru: "добровольный выбор Покупателем товаров в Интернет-магазине;",
  },
  offerta_seventh_li: {
    ua: "самостійне оформлення Покупцем замовлення в Інтернет-магазині;",
    en: "Independent placing of the order by the Buyer in the Online Store;",
    de: "Selbstständige Bestellung des Käufers im Online-Shop;",
    ru: "самостоятельное оформление Покупателем заказа в Интернет-магазине;",
  },
  offerta_eight_li: {
    ua: "оплата Покупцем замовлення, оформленого в Інтернет-магазині;",
    en: "Payment for the order placed by the Buyer in the Online Store;",
    de: "Zahlung des Käufers für die im Online-Shop aufgegebene Bestellung;",
    ru: "оплата Покупателем заказа, оформленного в Интернет-магазине;",
  },
  offerta_nineth_li: {
    ua: "обробка і доставка замовлення Покупцеві у власність на умовах цього Договору.",
    en: "Processing and delivery of the order to the Buyer’s ownership under the terms of this Agreement.",
    de: "Bearbeitung und Lieferung der Bestellung an den Käufer im Rahmen dieses Vertrages.",
    ru: "обработка и доставка заказа Покупателю в собственность на условиях настоящего Договора.",
  },
  offerta_tenth_li: {
    ua: "в односторонньому порядку припинити надання послуг за цим договором у разі порушення Покупцем умов цього договору.",
    en: "Unilaterally terminate the provision of services under this agreement in case of violation of the terms of this agreement by the Buyer.",
    de: "Die einseitige Beendigung der Dienstleistungserbringung im Rahmen dieses Vertrages im Falle der Verletzung der Vertragsbedingungen durch den Käufer.",
    ru: "в одностороннем порядке прекратить оказание услуг по настоящему договору в случае нарушения Покупателем условий настоящего договора.",
  },
  offerta_eleventh_li: {
    ua: "своєчасно оплатити та отримати замовлення на умовах цього договору.",
    en: "Timely pay for and receive the order under the terms of this agreement.",
    de: "Die rechtzeitige Zahlung und den Erhalt der Bestellung zu den Bedingungen dieses Vertrages.",
    ru: "своевременно оплатить и получить заказ на условиях настоящего договора.",
  },
  offerta_twelfth_li: {
    ua: "оформити замовлення в Інтернет-магазині;",
    en: "Place an order in the Online Store;",
    de: "Eine Bestellung im Online-Shop aufgeben;",
    ru: "оформить заказ в Интернет-магазине;",
  },
  offerta_thirteenth_li: {
    ua: "оформити електронний договір;",
    en: "Conclude an electronic agreement;",
    de: "Einen elektronischen Vertrag abschließen;",
    ru: "заключить электронный договор;",
  },
  offerta_fourteenth_li: {
    ua: "вимагати від Продавця виконання умов цього Договору.",
    en: "Demand from the Seller the fulfillment of the terms of this Agreement.",
    de: "Vom Verkäufer die Erfüllung der Bedingungen dieses Vertrages verlangen.",
    ru: "требовать от Продавца выполнения условий настоящего Договора.",
  },
  offerta_fiveteenth_li: {
    ua: "змінений виробником зовнішній вигляд Товару;",
    en: "Changes to the external appearance of the Product made by the manufacturer;",
    de: "Änderungen des äußeren Erscheinungsbildes des Produkts, die vom Hersteller vorgenommen wurden;",
    ru: "измененный производителем внешний вид Товара;",
  },
  offerta_sixteenth_li: {
    ua: "за незначне невідповідність колірної гами товару, що може відрізнятися від оригіналу товару виключно через різній колірній передачі моніторів персональних комп'ютерів окремих моделей;",
    en: "Minor discrepancies in the color scheme of the product, which may differ from the original product solely due to the different color representation of personal computer monitors of certain models;",
    de: "Geringfügige Abweichungen im Farbschema des Produkts, die nur aufgrund unterschiedlicher Farbdarstellung von Monitoren verschiedener Computermodelle vom Originalprodukt abweichen können;",
    ru: "за незначительное несоответствие цветовой гаммы товара, которое может отличаться от оригинала товара исключительно из-за различной цветовой передачи мониторов персональных компьютеров отдельных моделей;",
  },
  offerta_seventeenth_li: {
    ua: "за зміст і правдивість інформації, наданої Покупцем при оформленні замовлення;",
    en: "The content and accuracy of the information provided by the Buyer when placing the order;",
    de: "Der Inhalt und die Richtigkeit der Informationen, die der Käufer bei der Bestellung angegeben hat;",
    ru: "за содержание и достоверность информации, предоставленной Покупателем при оформлении заказа;",
  },
  offerta_eighteen_li: {
    ua: "за затримку і перебої в наданні Послуг (обробки замовлення та доставки товару), які відбуваються з причин, що знаходяться поза сферою його контролю;",
    en: "Delays and interruptions in providing Services (order processing and delivery of the product) that occur due to reasons beyond the Seller's control;",
    de: "Verzögerungen und Unterbrechungen bei der Erbringung von Dienstleistungen (Bestellbearbeitung und Lieferung des Produkts), die aufgrund von Faktoren außerhalb der Kontrolle des Verkäufers auftreten;",
    ru: "за задержки и перебои в оказании Услуг (обработки заказа и доставки товара), происходящие по причинам, находящимся за пределами его контроля;",
  },
  offerta_nineteen_li: {
    ua: "за зміну ціни на товар після його замовлення, коли ціна змінюється постачальником під час відвантаження товара чи зміні курса іноземної валюти;",
    en: "Price changes for the product after the order is placed, when the price is altered by the supplier during shipment or due to changes in the foreign exchange rate;",
    de: "Preisänderungen des Produkts nach der Bestellung, wenn der Preis durch den Lieferanten während des Versands oder aufgrund von Änderungen des Wechselkurses geändert wird;",
    ru: "за изменение цены на товар после его заказа, когда цена изменяется поставщиком во время отгрузки товара или из-за изменения курса иностранной валюты;",
  },
  offerta_twenty_li: {
    ua: "за протиправні незаконні дії, здійснені Покупцем за допомогою даного доступу до мережі Інтернет;",
    en: "Unlawful actions committed by the Buyer using this access to the Internet network;",
    de: "Illegale Handlungen des Käufers unter Nutzung dieses Zugriffs auf das Internetnetzwerk;",
    ru: "за незаконные действия, совершенные Покупателем с использованием данного доступа к сети Интернет;",
  },
  offerta_twentyone_li: {
    ua: "за передачу Покупцем своїх мережевих ідентифікаторів - IP, MAC-адреси, логіна і пароля третім особам.",
    en: "The transfer by the Buyer of their network identifiers – IP, MAC addresses, login, and password to third parties.",
    de: "Die Weitergabe von Netzwerkinformationen des Käufers – IP, MAC-Adresse, Login und Passwort an Dritte.",
    ru: "за передачу Покупателем своих сетевых идентификаторов – IP, MAC-адреса, логина и пароля третьим лицам.",
  },
  contact_subtitle:{
    ua:"У вас залишилися питання? Будемо раді вам допомогти!",
    en:"Do you have any questions? We will be happy to help you!",
    de:"Haben Sie Fragen? Wir helfen Ihnen gerne weiter!",
    ru:"У вас остались вопросы? Мы будем рады вам помочь!",
  },

};

function getCurrentLanguage() {
  const urlParams = new URLSearchParams(window.location.search);
  let urlLang = urlParams.get('lang');
  const savedLang = localStorage.getItem("selectedLang");
  const browserLang = navigator.language.toLowerCase().split('-')[0];
  
  // Исправление: Если передан ua, заменяем на uk
  if (urlLang === 'ua') urlLang = 'uk';

  return SUPPORTED_LANGUAGES.includes(urlLang) ? urlLang :
         SUPPORTED_LANGUAGES.includes(savedLang) ? savedLang :
         SUPPORTED_LANGUAGES.includes(browserLang) ? browserLang : DEFAULT_LANGUAGE;
}

let currentLang = getCurrentLanguage(); // Добавлено объявление переменной

function syncLanguageSelectors(lang) {
  document.querySelectorAll(".lang_select").forEach(select => {
      select.value = lang;
  });
}

function updateTranslation() {
  const elements = document.querySelectorAll("[data-translate-key]");
  elements.forEach(element => {
      const key = element.dataset.translateKey;
      element.textContent = translations[key]?.[currentLang] || translations[key]?.[DEFAULT_LANGUAGE] || element.textContent;
  });
}

function changeLanguage(newLang) {
  if (!SUPPORTED_LANGUAGES.includes(newLang)) {
      console.error(`Unsupported language: ${newLang}`);
      return;
  }

  currentLang = newLang; // Обновляем значение currentLang
  localStorage.setItem("selectedLang", newLang);
  document.documentElement.lang = newLang;
  
  updateTranslation();
  syncLanguageSelectors(newLang);
}

document.addEventListener("DOMContentLoaded", () => {
  syncLanguageSelectors(currentLang);
  updateTranslation();

  document.querySelectorAll(".lang_select").forEach(select => {
      select.addEventListener("change", event => {
          changeLanguage(event.target.value);
      });
  });
});
