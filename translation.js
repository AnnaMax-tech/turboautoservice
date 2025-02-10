// Доступные языки и переводы
const translations = {
  site_title: {
    ua: "Turbo Autoservice : Діагностика, ремонт та електрика",
    en: "Turbo Autoservice: Diagnosis, Repair, and Electrical Services",
    de: "Turbo Autoservice : Diagnose, Reparatur und Elektrik",
  },
  header_main: {
    ua: "Головна",
    en: "Main",
    de: "Startseite",
  },
  header_about: {
    ua: "Про нас",
    en: "About Us",
    de: "Über uns",
  },
  header_services: {
    ua: "Наші послуги",
    en: "Our Services",
    de: "Unsere Dienstleistungen",
  },
  header_reviews: {
    ua: "Відгуки",
    en: "Reviews",
    de: "Bewertungen",
  },
  header_contacts: {
    ua: "Контакти",
    en: "Contacts",
    de: "Kontakte",
  },
  topheader_phone: {
    ua: "Телефон",
    en: "Phone",
    de: "Telefon",
  },
  topheader_email: {
    ua: "Ел. пошта",
    en: "Email",
    de: "E-Mail",
  },
  topheader_contact: {
    ua: "Зв'язатися",
    en: "Contact",
    de: "Kontakt",
  },
  intro: {
    ua: "Професійне обслуговування і ремонт автомобілів в Гляйсдорфі",
    en: "Professional car maintenance and repair in Gleisdorf",
    de: "Professionelle Autowartung und Reparatur in Gleisdorf",
  },
  signService: {
    ua: "Записатися на сервіс",
    en: "Book a service",
    de: "Service buchen",
  },
  feedback: {
    ua: "Введіть ваше ім'я...",
    en: "Enter your name...",
    de: "Geben Sie Ihren Namen ein...",
  },
  about_title: {
    ua: "Про Нас",
    en: "About Us",
    de: "Über uns",
  },
  about_first_text: {
    ua: "Автосервіс Тurboautoservice— це професійний догляд за вашим автомобілем. Ми спеціалізуємося на ремонтних і детейлінгових послугах, поєднуючи швидкість, якість і уважність до деталей.",
    en: "Turboautoservice Auto Service — professional care for your car. We specialize in repair and detailing services, combining speed, quality, and attention to detail.",
    de: "Turboautoservice Autoservice — professionelle Pflege für Ihr Auto. Wir sind auf Reparatur- und Detailing-Dienstleistungen spezialisiert und verbinden Schnelligkeit, Qualität und Liebe zum Detail.",
  },
  about_second_text: {
    ua: "Чому ми?",
    en: "Why us?",
    de: "Warum wir?",
  },
  about_third_text: {
    ua: "Експертність: Досвідчені майстри забезпечують надійний сервіс із гарантією.",
    en: "Expertise: Experienced technicians provide reliable service with a guarantee.",
    de: "Fachkompetenz: Erfahrene Fachleute bieten zuverlässigen Service mit Garantie.",
  },
  about_third_text: {
    ua: "Експертність: Досвідчені майстри забезпечують надійний сервіс із гарантією.",
    en: "Expertise: Experienced technicians provide reliable service with a guarantee.",
    de: "Fachkompetenz: Erfahrene Fachleute bieten zuverlässigen Service mit Garantie.",
  },
  about_fourth_text: {
    ua: "Оперативність: Завдяки системі запису ваш автомобіль завжди готовий вчасно.",
    en: "Efficiency: Thanks to our scheduling system, your car is always ready on time.",
    de: "Effizienz: Dank unseres Terminplanungssystems ist Ihr Auto immer pünktlich fertig.",
  },
  about_fiveth_text: {
    ua: "Індивідуальний підхід: Ми дбаємо про кожну деталь, щоб ваше авто виглядало бездоганно.",
    en: "Personalized Approach: We care about every detail to ensure your car looks flawless.",
    de: "Individueller Ansatz: Wir achten auf jedes Detail, damit Ihr Auto makellos aussieht.",
  },
  about_sixth_text: {
    ua: "Обираючи Тurboautoservice, ви отримуєте більше, ніж просто сервіс — ви отримуєте надійність і турботу про ваше авто.",
    en: "By choosing Turboautoservice, you get more than just service — you get reliability and care for your car.",
    de: "Wenn Sie sich für Turboautoservice entscheiden, erhalten Sie mehr als nur einen Service — Sie erhalten Zuverlässigkeit und Fürsorge für Ihr Auto.",
  },
  about_first_figure: {
    ua: "Кваліфіковані спеціалісти завжди готові надати якісні послуги нашим клієнтам з гарантією",
    en: "Qualified specialists are always ready to provide our clients with high-quality services backed by a guarantee.",
    de: "Qualifizierte Fachleute sind stets bereit, unseren Kunden hochwertige Dienstleistungen mit Garantie anzubieten.",
  },
  about_second_figure: {
    ua: "Кожного дня в нас працює контакт-центр для консультації та записів наших клієнтів",
    en: "Our contact center operates daily to assist clients with consultations and appointments.",
    de: "Unser Kontaktzentrum ist täglich im Einsatz, um Kunden bei Beratungen und Terminvereinbarungen zu unterstützen.",
  },
  about_third_figure: {
    ua: "Ми прагнемо оптимізувати процес покращення Вашого авто і надати послуги високоякісно та швидко",
    en: "We strive to optimize the process of improving your car and deliver services with both speed and top quality.",
    de: "Wir bemühen uns, den Prozess der Verbesserung Ihres Autos zu optimieren und Dienstleistungen schnell und in höchster Qualität zu erbringen.",
  },
  services_title: {
    ua: "Наші Послуги",
    en: "Our Services",
    de: "Unsere Dienstleistungen",
  },
  card_detailing: {
    ua: "Преміум автосервіс - чистота та турбота про ваш автомобіль",
    en: "Premium car service - cleanliness and care for your car",
    de: "Premium Car Detailing - Sauberkeit und Pflege für Ihr Auto",
  },
  card_diagnostic: {
    ua: "Точна автодіагностика - швидке виявлення несправностей ",
    en: "Precise auto-diagnostics for quick fault detection",
    de: "Präzise Autodiagnose - schnelles Erkennen von Fehlern",
  },
  card_electrics: {
    ua: "Надійне обслуговування електрики вашого автомобіля ",
    en: "Reliable maintenance of your car's electrical system ",
    de: "Zuverlässiger Fahrzeugelektrik-Service ",
  },
  card_repair: {
    ua: "Якісний ремонт автомобілів - надійно та професійно",
    en: "High-quality car repair - reliably and professionally",
    de: "Hochwertige Autoreparaturen – zuverlässig und professionell",
  },
  modal_detailing: {
    ua: "Детейлінг",
    en: "Detailing",
    de: "Fahrzeugaufbereitung",
  },
  modal_diagnostic: {
    ua: "Діагностика",
    en: "Diagnostics",
    de: "Diagnose",
  },
  modal_electrics: {
    ua: "Автоелектрика",
    en: "Auto Electronics",
    de: "Autoelektrik",
  },
  modal_repair: {
    ua: "Ремонт",
    en: "Repair",
    de: "Reparatur",
  },
  detailing_first_li: {
    ua: "Глибоке очищення салону від пилу та бруду за допомогою спеціалізованих засобів.",
    en: "Deep cleaning of the interior from dust and dirt using specialized products.",
    de: "Tiefenreinigung des Fahrzeuginnenraums von Staub und Schmutz mit spezialisierten Reinigungsmitteln.",
  },
  detailing_second_li: {
    ua: "Захист і реставрація шкіряних та тканинних сидінь, а також інших поверхонь.",
    en: "Protection and restoration of leather and fabric seats, as well as other surfaces.",
    de: "Schutz und Restaurierung von Leder- und Stoffpolstern sowie anderen Oberflächen.",
  },
  detailing_third_li: {
    ua: "Усунення неприємних запахів і дезінфекція для створення комфортної атмосфери.",
    en: "Elimination of unpleasant odors and disinfection to create a comfortable atmosphere.",
    de: "Entfernung unangenehmer Gerüche und Desinfektion zur Schaffung einer angenehmen Atmosphäre.",
  },
  diagnostic_first_li: {
    ua: "Комп'ютерна діагностика електронних систем автомобіля.",
    en: "Computer diagnostics of the car's electronic systems.",
    de: "Computergestützte Diagnose der elektronischen Systeme des Fahrzeugs.",
  },
  diagnostic_second_li: {
    ua: "Перевірка роботи двигуна, трансмісії та інших ключових систем.",
    en: "Inspection of the engine, transmission, and other key systems.",
    de: "Überprüfung des Motors, der Getriebe und anderer wichtiger Systeme.",
  },
  diagnostic_third_li: {
    ua: "Визначення можливих несправностей та рекомендації щодо їх усунення.",
    en: "Identification of potential issues and recommendations for their resolution.",
    de: "Feststellung möglicher Probleme und Empfehlungen zu deren Behebung.",
  },
  electrics_first_li: {
    ua: "Ремонт та заміна електричних компонентів автомобіля (акумулятори, стартери, генератори).",
    en: "Repair and replacement of electrical components in the car (batteries, starters, alternators).",
    de: "Reparatur und Austausch elektrischer Komponenten des Fahrzeugs (Batterien, Starter, Generatoren).",
  },
  electrics_second_li: {
    ua: "Виправлення проблем з освітленням, проводкою та електронними системами.",
    en: "Fixing issues with lighting, wiring, and electronic systems.",
    de: "Behebung von Problemen mit Beleuchtung, Verkabelung und elektronischen Systemen.",
  },
  electrics_third_li: {
    ua: "Встановлення додаткових електронних пристроїв (сигналізацій, парктроніків, мультимедійних систем).",
    en: "Installation of additional electronic devices (alarms, parking sensors, multimedia systems).",
    de: "Installation zusätzlicher elektronischer Geräte (Alarmanlagen, Parksensoren, Multimediasysteme).",
  },
  repair_first_li: {
    ua: "Усі види ремонтних робіт по двигуну, трансмісії та ходовій частині.",
    en: "All types of repair work on the engine, transmission, and chassis.",
    de: "Alle Arten von Reparaturarbeiten am Motor, Getriebe und Fahrwerk.",
  },
  repair_second_li: {
    ua: "Замінa деталей та агрегатів (гальмівні системи, підвіска, зчеплення).",
    en: "Replacement of parts and assemblies (braking systems, suspension, clutch).",
    de: "Austausch von Teilen und Baugruppen (Bremssysteme, Aufhängung, Kupplung).",
  },
  repair_third_li: {
    ua: "Виправлення кузовних пошкоджень та лакофарбових покриттів.",
    en: "Repair of body damage and restoration of paintwork.",
    de: "Behebung von Karosserieschäden und Wiederherstellung der Lackierung.",
  },
  card_btn: {
    ua: "Детальніше",
    en: "More",
    de: "Mehr",
  },
  enter_name: {
    ua: "Введіть ваше ім’я...",
    en: "Enter your name...",
    de: "Geben Sie Ihren Namen ein...",
  },
  modal_carbrand: {
    ua: "Оберіть марку авто...",
    en: "Select your car brand...",
    de: "Wählen Sie Ihre Automarke aus...",
  },
  modal_carmark: {
    ua: "Спочатку оберіть марку авто!",
    en: "First, select a car brand!",
    de: "Wählen Sie zuerst eine Automarke aus!",
  },
  modal_services: {
    ua: "Послуги:",
    en: "Services:",
    de: "Dienstleistungen:",
  },
  modal_total: {
    ua: "Сума від: €0.00",
    en: "Total from: €0.00",
    de: "Summe ab: €0.00",
  },
  accept: {
    ua: "Я приймаю",
    en: "I accept",
    de: "Ich akzeptiere",
  },
  politics: {
    ua: "Політику конфіденційності",
    en: "the Privacy Policy",
    de: "die Datenschutzrichtlinie",
  },
  clients_title: {
    ua: "Наші Клієнти",
    en: "Our Clients",
    de: "Unsere Kunden",
  },
  first_client_name: {
    ua: "Андрій Кравчук (Україна)",
    en: "Andrii Kravchuk (Ukraine)",
    de: "Andrii Kravchuk (Ukraine)",
  },
  second_client_name: {
    ua: "Олексій Дорошенко (Україна)",
    en: "Oleksii Doroshenko (Ukraine)",
    de: "Oleksii Doroshenko (Ukraine)",
  },
  third_client_name: {
    ua: "Йоган Келлер (Австрія)",
    en: "Johann Keller (Austria)",
    de: "Johann Keller (Austria)",
  },
  first_client_text: {
    ua: "Привозив авто на ремонт ходової частини. Все зробили на найвищому рівні, ще й запропонували безкоштовну діагностику в майбутньому. Сервіс супер, персонал привітний, ціни адекватні!",
    en: "Brought his car in for chassis repair. Everything was done at the highest level, and they even offered free diagnostics for the future. Excellent service, friendly staff, and reasonable prices!",
    de: "Hat sein Auto zur Reparatur des Fahrwerks gebracht. Alles wurde auf höchstem Niveau erledigt, und sie boten sogar kostenlose Diagnosen für die Zukunft an. Hervorragender Service, freundliches Personal und angemessene Preise!",
  },
  second_client_text: {
    ua: "Звертався в цей автосервіс на діагностику двигуна. Роботу виконали швидко, все детально пояснили. Дуже сподобалася відповідальність майстрів та сучасне обладнання. Тепер тільки до вас! Рекомендую!",
    en: "Visited this service center for engine diagnostics. The work was done quickly, and everything was explained in detail. I really appreciated the responsibility of the technicians and the modern equipment. From now on, only here! Highly recommend!",
    de: "War in dieser Werkstatt zur Motor-Diagnose. Die Arbeit wurde schnell erledigt, und alles wurde detailliert erklärt. Ich schätze die Verantwortung der Techniker und die moderne Ausrüstung sehr. Ab jetzt nur noch hier! Sehr zu empfehlen!",
  },
  third_client_text: {
    ua: "Мені порадили цей сервіс друзі. Дуже задоволений високим рівнем обслуговування! Робив ремонт гальмівної системи. Все виконали чітко і вчасно. Надійне місце, яке варто відвідати.",
    en: "Friends recommended this service to me. I am very satisfied with the high level of service! I had the brake system repaired. Everything was done precisely and on time. A reliable place worth visiting.",
    de: "Mir wurde dieser Service von Freunden empfohlen. Ich bin sehr zufrieden mit dem hohen Serviceniveau! Ich ließ das Bremssystem reparieren. Alles wurde präzise und pünktlich erledigt. Ein zuverlässiger Ort, der einen Besuch wert ist.",
  },
  projects: {
    ua: "Реалізованих проектів",
    en: "Completed Projects",
    de: "Abgeschlossene Projekte",
  },
  polishings: {
    ua: "Кількість поліровок",
    en: "Number of Polishings",
    de: "Anzahl der Polierungen",
  },
  cleanings: {
    ua: "Кількість хімчисток",
    en: "Number of Interior Cleanings",
    de: "Anzahl der Innenraumreinigungen",
  },
  studios: {
    ua: "Кількість студій",
    en: "Number of Studios",
    de: "Anzahl der Studios",
  },
  shedule_title: {
    ua: "Графік Роботи",
    en: "Working Hours",
    de: "Öffnungszeiten",
  },
  monday: {
    ua: "Пн 8:00 - 22:00",
    en: "Mon 8:00 AM - 10:00 PM",
    de: "Mo 8:00 - 22:00",
  },
  tuesday: {
    ua: "Вт 8:00 - 22:00",
    en: "Tue 8:00 AM - 10:00 PM",
    de: "Di 8:00 - 22:00",
  },
  wednesday: {
    ua: "Ср 8:00 - 22:00",
    en: "Wed 8:00 AM - 10:00 PM",
    de: "Mi 8:00 - 22:00",
  },
  thursday: {
    ua: "Чт 8:00 - 22:00",
    en: "Thu 8:00 AM - 10:00 PM",
    de: "Do 8:00 - 22:00",
  },
  friday: {
    ua: "Пт 8:00 - 22:00",
    en: "Fri 8:00 AM - 10:00 PM",
    de: "Fr 8:00 - 22:00",
  },
  weekend: {
    ua: "Сб,Нд - По домовленості",
    en: "Sat, Sun - By appointment",
    de: "Sa, So - Nach Vereinbarung",
  },
  feedback_title: {
    ua: "Заповніть форму для зв’язку!",
    en: "Fill out the contact form!",
    de: "Füllen Sie das Kontaktformular aus!",
  },
  works_title: {
    ua: "Наші Роботи",
    en: "Our Works",
    de: "Unsere Arbeiten",
  },
  car_name: {
    ua: "Введіть назву Вашого авто...",
    en: "Enter the name of your car...",
    de: "Geben Sie den Namen Ihres Autos ein...",
  },
  feedback_btn: {
    ua: "Отримати консультацію",
    en: "Get a consultation",
    de: "Beratung erhalten",
  },
  footer_address: {
    ua: "Адреса",
    en: "Address",
    de: "Adresse",
  },
  footer_nav: {
    ua: "Навігація",
    en: "Navigation",
    de: "Navigation",
  },
  footer_socials: {
    ua: "Наші соцмережі",
    en: "Our Socials",
    de: "Unsere sozialen",
  },
  backsite: {
    ua: "Повернутись до сайту",
    en: "Return to the website",
    de: "Zurück zur Website",
  },
  politics_privacy: {
    ua: "Політика конфіденційності",
    en: "PRIVACY POLICY",
    de: "DATENSCHUTZRICHTLINIE",
  },
  politics_first_p: {
    ua: "ФОП Колісник Т.М. з повагою ставиться до конфіденційної інформації будь-якої особи, яка відвідує наш інтернет-сайт. Всі Ваші дані збираються, обробляються і використовуються у відповідності до вимог чинного законодавства України.",
    en: "FOP Kolisnyk T.M. respects the confidentiality of any individual who visits our website. All your data is collected, processed, and used in accordance with the requirements of current Ukrainian legislation.",
    de: "Einzelunternehmer Kolisnyk T.M. respektiert die Vertraulichkeit jeder Person, die unsere Website besucht. Alle Ihre Daten werden in Übereinstimmung mit den Anforderungen der geltenden Gesetzgebung der Ukraine gesammelt, verarbeitet und verwendet.",
  },
  politics_second_p: {
    ua: "Ми збираємо інформацію, яка стосується наших клієнтів, з метою використання її для можливості надавати повного обсягу наших послуг, і лише в тому випадку, якщо Ви добровільно надали інформацію або висловили згоду на її використання. Ми зобов’язуємося не використовувати, не обробляти і не передавати таку інформацію у спосіб, що виходить за межі вимог чинного законодавства України. Передача персональних даних здійснюється виключно на підставі судового рішення або в іншому порядку, передбаченому чинним законодавством України.",
    en: "We collect information about our clients to provide the full range of our services and only if you voluntarily provide the information or give consent for its use. We are committed not to use, process, or transfer such information in a way that goes beyond the requirements of current Ukrainian legislation. The transfer of personal data is carried out exclusively on the basis of a court decision or in another manner prescribed by the current legislation of Ukraine.",
    de: "Wir sammeln Informationen über unsere Kunden, um den vollen Umfang unserer Dienstleistungen bereitzustellen, und nur, wenn Sie die Informationen freiwillig zur Verfügung stellen oder der Nutzung zustimmen. Wir verpflichten uns, solche Informationen nicht in einer Weise zu verwenden, zu verarbeiten oder weiterzugeben, die über die Anforderungen der geltenden ukrainischen Gesetzgebung hinausgeht. Die Übermittlung personenbezogener Daten erfolgt ausschließlich auf der Grundlage einer gerichtlichen Entscheidung oder in einer anderen Weise, die durch die geltende ukrainische Gesetzgebung vorgesehen ist.",
  },
  politics_third_p: {
    ua: "Збережені дані будуть видалені з бази даних ФОП Колісник Т.М. після збігання періоду зберігання, встановленого законодавством, або у випадку, якщо більше не потребує збереження тих або інших даних. Ви маєте право у будь-який час вимагати видалення інформації про Вас з бази даних. У таких випадках, а також, якщо у Вас виникають інші побажання, пов’язані з Вашими персональними даними, просимо Вас звернутися до наших менеджерів.",
    en: "Stored data will be deleted from the database of FOP Kolisnyk T.M. after the expiration of the retention period established by law or in cases where the data is no longer needed. You have the right to request the deletion of your information from the database at any time. In such cases, as well as if you have any other requests related to your personal data, we ask you to contact our managers.",
    de: "Gespeicherte Daten werden aus der Datenbank von Einzelunternehmer Kolisnyk T.M. gelöscht, nachdem die gesetzliche Aufbewahrungsfrist abgelaufen ist oder wenn die Daten nicht mehr benötigt werden. Sie haben das Recht, jederzeit die Löschung Ihrer Daten aus der Datenbank zu verlangen. In solchen Fällen sowie bei anderen Wünschen in Bezug auf Ihre personenbezogenen Daten bitten wir Sie, sich an unsere Manager zu wenden.",
  },
  offerta: {
    ua: "Договір оферти",
    en: "Offer Agreement",
    de: "Angebotsvertrag",
  },
  offerta_first_title: {
    ua: "Загальні положення",
    en: "General Provisions",
    de: "Allgemeine Bestimmungen",
  },
  offerta_second_title: {
    ua: "Поняття і визначення",
    en: "Concepts and Definitions",
    de: "Begriffe und Definitionen",
  },
  offerta_third_title: {
    ua: "Предмет Договору",
    en: "Subject of the Agreement",
    de: "Vertragsgegenstand",
  },
  offerta_fourth_title: {
    ua: "Порядок оформлення замовлення",
    en: "Order Placement Procedure",
    de: "Bestellverfahren",
  },
  offerta_fiveth_title: {
    ua: "Порядок оплати замовлення",
    en: "Order Payment Procedure",
    de: "Zahlungsverfahren für die Bestellung",
  },
  offerta_sixth_title: {
    ua: "Умови доставки замовлення",
    en: "Order Delivery Terms",
    de: "Lieferbedingungen der Bestellung",
  },
  offerta_seventh_title: {
    ua: "Права і обов'язки сторін",
    en: "Rights and Obligations of the Parties",
    de: "Rechte und Pflichten der Parteien",
  },
  offerta_eight_title: {
    ua: "Відповідальність сторін",
    en: "Liability of the Parties",
    de: "Haftung der Parteien",
  },
  offerta_nineth_title: {
    ua: "Інші умови",
    en: "Other Terms",
    de: "Sonstige Bedingungen",
  },
  offerta_tenth_title: {
    ua: "Порядок повернення товару належної якості",
    en: "Procedure for Returning Goods of Proper Quality",
    de: "Verfahren zur Rückgabe von Waren in einwandfreiem Zustand",
  },
  offerta_eleventh_title: {
    ua: "Термін дії договору",
    en: "Term of the Agreement",
    de: "Vertragsdauer",
  },
  offerta_twelfth_title: {
    ua: "Звертаємо вашу увагу",
    en: "Please Note",
    de: "Bitte beachten Sie",
  },
  offerta_thirteenth_title: {
    ua: "Адреса та Реквізити",
    en: "Address and Details",
    de: "Adresse und Angaben",
  },
  offerta_first_p: {
    ua: "1.1. Справжня оферта, є офіційною пропозицією ФОП Колісник Тетяна Миколаївна, далі по тексту — «Продавець», укласти Договір купівлі-продажу товарів дистанційним способом, тобто через Інтернет-магазин, далі по тексту — «Договір», і розміщує Публічну оферту (пропозицію) на офіційному інтернет-сайті Продавця «…» (Далі - «Інтернет-сайт»).",
    en: "1.1. This offer is the official proposal of Sole Proprietor Kolisnyk Tetiana Mykolaivna, hereinafter referred to as the 'Seller,' to conclude a Contract for the sale of goods remotely, i.e., through an online store, hereinafter referred to as the 'Contract,' and publishes a Public Offer (proposal) on the Seller's official website '…' (hereinafter referred to as the 'Website').",
    de: "1.1. Dieses Angebot ist der offizielle Vorschlag des Einzelunternehmers Kolisnyk Tetiana Mykolaivna, im Folgenden als „Verkäufer“ bezeichnet, einen Kaufvertrag über Waren auf fernmündlichem Wege, d. h. über einen Online-Shop, abzuschließen, im Folgenden als „Vertrag“ bezeichnet, und veröffentlicht ein öffentliches Angebot (Vorschlag) auf der offiziellen Website des Verkäufers „…“ (im Folgenden als „Website“ bezeichnet).",
  },
  offerta_second_p: {
    ua: "1.2. Моментом повного і безумовного прийняття Покупцем пропозиції Продавця (акцептом) укласти електронний договір купівлі-продажу товарів, вважається факт оплати Покупцем замовлення на умовах цього Договору, у строки та за цінами, вказаними на Інтернет-сайті Продавця.",
    en: "1.2. The moment of full and unconditional acceptance by the Buyer of the Seller's offer (acceptance) to conclude an electronic contract for the sale of goods is considered to be the fact of the Buyer's payment for the order under the terms of this Contract, within the timeframes and at the prices specified on the Seller's Website.",
    de: "1.2. Der Zeitpunkt der vollständigen und bedingungslosen Annahme des Angebots des Verkäufers (Annahme) durch den Käufer, einen elektronischen Kaufvertrag über Waren abzuschließen, gilt als die Zahlung des Käufers für die Bestellung zu den Bedingungen dieses Vertrags, innerhalb der auf der Website des Verkäufers angegebenen Fristen und zu den angegebenen Preisen.",
  },
  offerta_third_p: {
    ua: "2.1. У цій оферті, якщо контекст не вимагає іншого, наведені нижче терміни мають таке значення:",
    en: "2.1. In this offer, unless the context requires otherwise, the terms listed below shall have the following meanings:",
    de: "2.1. In diesem Angebot haben die unten aufgeführten Begriffe, sofern der Kontext nichts anderes erfordert, die folgende Bedeutung:",
  },
  offerta_fourth_p: {
    ua: "3.1. Продавець зобов'язується передати у власність Покупця Товар, а Покупець зобов'язується оплатити і прийняти Товар на умовах даного Договору. Цей Договір регулює купівлю-продаж товарів в Інтернет-магазині, в тому числі:",
    en: "3.1. The Seller undertakes to transfer ownership of the Product to the Buyer, and the Buyer undertakes to pay for and accept the Product under the terms of this Agreement. This Agreement regulates the sale of goods in the Online Store, including:",
    de: "3.1. Der Verkäufer verpflichtet sich, das Eigentum an der Ware an den Käufer zu übertragen, und der Käufer verpflichtet sich, die Ware zu bezahlen und unter den Bedingungen dieses Vertrags zu akzeptieren. Dieser Vertrag regelt den Kauf und Verkauf von Waren im Online-Shop, einschließlich:",
  },
  offerta_fiveth_p: {
    ua: "3.1. Продавець зобов'язується передати у власність Покупця Товар, а Покупець зобов'язується оплатити і прийняти Товар на умовах даного Договору. Цей Договір регулює купівлю-продаж товарів в Інтернет-магазині, в тому числі:",
    en: "3.1. The Seller undertakes to transfer ownership of the Product to the Buyer, and the Buyer undertakes to pay for and accept the Product under the terms of this Agreement. This Agreement regulates the sale of goods in the Online Store, including:",
    de: "3.1. Der Verkäufer verpflichtet sich, das Eigentum an der Ware an den Käufer zu übertragen, und der Käufer verpflichtet sich, die Ware zu bezahlen und unter den Bedingungen dieses Vertrags zu akzeptieren. Dieser Vertrag regelt den Kauf und Verkauf von Waren im Online-Shop, einschließlich:",
  },
  offerta_sixth_p: {
    ua: "4.1. Покупець має право оформити замовлення на будь-який товар, представлений на Сайті Інтернет-магазину і наявний.",
    en: "4.1. The Buyer has the right to place an order for any product presented on the Online Store Website and available in stock.",
    de: "4.1. Der Käufer hat das Recht, eine Bestellung für jedes Produkt auf der Website des Online-Shops zu tätigen, das auf Lager und verfügbar ist.",
  },
  offerta_seventh_p: {
    ua: "4.2. Кожна позиція може бути представлена ​​в замовленні в будь-якій кількості.",
    en: "4.2. Each item can be included in the order in any quantity.",
    de: "4.2. Jede Position kann in beliebiger Menge in der Bestellung enthalten sein.",
  },
  offerta_eight_p: {
    ua: "4.3. При відсутності товару на складі, Менеджер компанії зобов'язаний поставити Покупця до відома (по телефону або через електронну пошту).",
    en: "4.3. In case the product is out of stock, the Company Manager is obliged to notify the Buyer (by phone or email).",
    de: "4.3. Bei Nichtverfügbarkeit des Produkts ist der Firmenmanager verpflichtet, den Käufer zu benachrichtigen (per Telefon oder E-Mail).",
  },
  offerta_nineth_p: {
    ua: "4.4. При відсутності товару Покупець має право замінити його товаром аналогічної моделі, відмовитися від даного товару, анулювати замовлення.",
    en: "4.4. If the product is unavailable, the Buyer has the right to replace it with a product of the same model, refuse the product, or cancel the order.",
    de: "4.4. Bei Nichtverfügbarkeit des Produkts hat der Käufer das Recht, es durch ein Produkt des gleichen Modells zu ersetzen, das Produkt abzulehnen oder die Bestellung zu stornieren.",
  },
  offerta_nineth_p: {
    ua: "4.4. При відсутності товару Покупець має право замінити його товаром аналогічної моделі, відмовитися від даного товару, анулювати замовлення.",
    en: "4.4. If the product is unavailable, the Buyer has the right to replace it with a product of the same model, refuse the product, or cancel the order.",
    de: "4.4. Bei Nichtverfügbarkeit des Produkts hat der Käufer das Recht, es durch ein Produkt des gleichen Modells zu ersetzen, das Produkt abzulehnen oder die Bestellung zu stornieren.",
  },
  offerta_tenth_p: {
    ua: "5.1. Оплата здійснюється за фактом отримання товару у відділенні транспортних компанії за готівковий розрахунок в гривнях.",
    en: "5.1. Payment is made upon receipt of the product at the transport company's office in cash in UAH.",
    de: "5.1. Die Zahlung erfolgt bei Erhalt der Ware in einer Filiale des Transportunternehmens in bar in Hrywnja.",
  },
  offerta_eleventh_p: {
    ua: "5.2. Оплата може здійснюватися безготівковим розрахунком на розрахунковий рахунок ФОП.",
    en: "5.2. Payment can be made by bank transfer to the Sole Proprietor's account.",
    de: "5.2. Die Zahlung kann per Überweisung auf das Geschäftskonto des Einzelunternehmers erfolgen.",
  },
  offerta_twelfth_p: {
    ua: "5.3. Оплата може здійснюватися картами Visa, Mastercard і іншими картами, а також на картку ПриватБанку.",
    en: "5.3. Payment can be made using Visa, Mastercard, and other cards, as well as to a PrivatBank card.",
    de: "5.3. Die Zahlung kann mit Visa, Mastercard und anderen Karten sowie auf eine PrivatBank-Karte erfolgen.",
  },
  offerta_thirteenth_p: {
    ua: "5.4. Прі не надходження коштів Інтернет-магазин залишає за собою право анулювати замовлення.",
    en: "5.4. In case of non-receipt of funds, the Online Store reserves the right to cancel the order.",
    de: "5.4. Bei Nichtzahlung behält sich der Online-Shop das Recht vor, die Bestellung zu stornieren.",
  },
  offerta_fourteenth_p: {
    ua: "6.1. Доставка товарів, придбаних в Інтернет-магазині, здійснюється до складів транспортних компаній, де і здійснюється видача замовлень.",
    en: "6.1. The delivery of goods purchased in the Online Store is made to the warehouses of transport companies, where the orders are issued.",
    de: "6.1. Die Lieferung der im Online-Shop gekauften Waren erfolgt an die Lager der Transportunternehmen, wo die Bestellungen ausgegeben werden.",
  },
  offerta_fiveteenth_p: {
    ua: "6.2. Разом із замовленням Покупцеві надаються документи згідно законодавства України.",
    en: "6.2. Along with the order, the Buyer is provided with documents in accordance with the legislation of Ukraine.",
    de: "6.2. Zusammen mit der Bestellung erhält der Käufer die Dokumente gemäß der Gesetzgebung der Ukraine.",
  },
  offerta_sixteenth_p: {
    ua: "7.1. Продавець має право:",
    en: "7.1. The Seller has the right:",
    de: "7.1. Der Verkäufer hat das Recht:",
  },
  offerta_seventeenth_p: {
    ua: "7.2. Покупець зобов'язаний:",
    en: "7.2. The Buyer is obligated to:",
    de: "7.2. Der Käufer ist verpflichtet:",
  },
  offerta_eighteenth_p: {
    ua: "7.3. Покупець має право:",
    en: "7.3. The Buyer has the right:",
    de: "7.3. Der Käufer hat das Recht:",
  },
  offerta_nineteenth_p: {
    ua: "8.1. Сторони несуть відповідальність за невиконання або неналежне виконання умов цього договору в порядку, передбаченому цим договором та чинним законодавством України.",
    en: "8.1. The parties are liable for non-performance or improper performance of the terms of this agreement in the manner prescribed by this agreement and the current legislation of Ukraine.",
    de: "8.1. Die Parteien haften für die Nichterfüllung oder unsachgemäße Erfüllung der Bedingungen dieses Vertrags in der gemäß diesem Vertrag und der geltenden Gesetzgebung der Ukraine vorgesehenen Weise.",
  },
  offerta_twenty_p: {
    ua: "8.2. Продавець не несе відповідальності за:",
    en: "8.2. The Seller is not liable for:",
    de: "8.2. Der Verkäufer haftet nicht für:",
  },
  offerta_twentyone_p: {
    ua: "8.3. Покупець, використовуючи наданий йому доступ до мережі Інтернет, самостійно несе відповідальність за шкоду, заподіяну його діями (особисто, навіть якщо під його логіном знаходилося іншу особу) особам або їх майну, юридичним особам, державі чи моральним принципам моральності.",
    en: "8.3. The Buyer, using the provided access to the Internet, is solely responsible for any damage caused by their actions (personally, even if another person was using their login) to individuals or their property, legal entities, the state, or moral principles of morality.",
    de: "8.3. Der Käufer trägt die alleinige Verantwortung für Schäden, die durch sein Verhalten (persönlich, auch wenn eine andere Person seinen Login verwendet hat) gegenüber Einzelpersonen oder deren Eigentum, juristischen Personen, dem Staat oder den moralischen Grundsätzen der Moral verursacht werden, indem er den ihm zur Verfügung gestellten Zugang zum Internet nutzt.",
  },
  offerta_twentytwo_p: {
    ua: "8.4. У разі настання обставин непереборної сили, сторони звільняються від виконання умов цього договору. Під обставинами непереборної сили для цілей цього договору розуміються події, що мають надзвичайний, непередбачений характер, які виключають або об'єктивно заважають виконанню цього договору, настання яких Сторони не могли передбачити і запобігти розумними способами.",
    en: "8.4. In the event of force majeure circumstances, the parties are relieved from fulfilling the terms of this agreement. For the purposes of this agreement, force majeure circumstances are events that are extraordinary, unforeseen, and that exclude or objectively hinder the fulfillment of this agreement, the occurrence of which the Parties could not foresee and prevent by reasonable means.",
    de: "8.4. Im Falle von höherer Gewalt sind die Parteien von der Erfüllung der Bedingungen dieses Vertrags befreit. Höhere Gewalt im Sinne dieses Vertrags sind außergewöhnliche, unvorhersehbare Ereignisse, die die Erfüllung dieses Vertrags ausschließen oder objektiv hindern und deren Eintreten die Parteien nicht vorhersehen oder mit angemessenen Mitteln verhindern konnten.",
  },
  offerta_twentythree_p: {
    ua: "8.5. Сторони прикладають максимум зусиль для вирішення будь-яких розбіжностей виключно шляхом переговорів.",
    en: "8.5. The parties shall make every effort to resolve any disagreements solely through negotiations.",
    de: "8.5. Die Parteien werden alle Anstrengungen unternehmen, um etwaige Unstimmigkeiten ausschließlich durch Verhandlungen zu lösen.",
  },
  offerta_twentyfour_p: {
    ua: "9.1. Інтернет-магазин залишає за собою право в односторонньому порядку вносити зміни до цього договору за умови попередньої публікації його на сайті...",
    en: "9.1. The Online Store reserves the right to unilaterally make changes to this agreement, provided that they are published in advance on the website...",
    de: "9.1. Der Online-Shop behält sich das Recht vor, diesen Vertrag einseitig zu ändern, vorausgesetzt, dass die Änderungen vorher auf der Website veröffentlicht werden...",
  },
  offerta_twentyfive_p: {
    ua: "9.2. Інтернет-магазин створений для організації дистанційного способу продажу товарів через Інтернет.",
    en: "9.2. The Online Store is created for the organization of the remote sale of goods via the Internet.",
    de: "9.2. Der Online-Shop wurde für die Organisation des Fernverkaufs von Waren über das Internet geschaffen.",
  },
  offerta_twentyfour_p: {
    ua: "9.1. Інтернет-магазин залишає за собою право в односторонньому порядку вносити зміни до цього договору за умови попередньої публікації його на сайті...",
    en: "9.1. The Online Store reserves the right to unilaterally make changes to this agreement, provided that they are published in advance on the website...",
    de: "9.1. Der Online-Shop behält sich das Recht vor, diesen Vertrag einseitig zu ändern, vorausgesetzt, dass die Änderungen vorher auf der Website veröffentlicht werden...",
  },
  offerta_twentysix_p: {
    ua: "9.3. Покупець несе відповідальність за достовірність інформації, зазначеної при оформленні замовлення інформації. При цьому, при здійсненні акцепту (оформленні замовлення і подальшої оплати товару) Покупець надає Продавцю свою беззастережну згоду на збір, обробку, зберігання, використання своїх персональних даних, в розумінні ЗУ «Про захист персональних даних».",
    en: "9.3. The Buyer is responsible for the accuracy of the information provided when placing the order. By accepting (placing the order and subsequently paying for the goods), the Buyer gives the Seller their unconditional consent to collect, process, store, and use their personal data in accordance with the Law of Ukraine 'On the Protection of Personal Data.'",
    de: "9.3. Der Käufer trägt die Verantwortung für die Richtigkeit der bei der Bestellung angegebenen Informationen. Mit der Annahme (Platzierung der Bestellung und anschließender Bezahlung der Ware) gibt der Käufer dem Verkäufer seine bedingungslose Zustimmung zur Erhebung, Verarbeitung, Speicherung und Nutzung seiner persönlichen Daten gemäß dem Gesetz der Ukraine „Über den Schutz personenbezogener Daten“.",
  },
  offerta_twentyseven_p: {
    ua: "9.4. Оплата Покупцем оформленого в Інтернет-магазині замовлення означає повну згоду Покупця з умовами договору купівлі-продажу (публічної оферти).",
    en: "9.4. The Buyer’s payment for the order placed in the Online Store means the Buyer’s full acceptance of the terms of the sales agreement (public offer).",
    de: "9.4. Die Zahlung des Käufers für die Bestellung, die im Online-Shop aufgegeben wurde, bedeutet die vollständige Zustimmung des Käufers zu den Bedingungen des Kaufvertrags (öffentliche Offerte).",
  },
  offerta_twentyeight_p: {
    ua: "9.5. Фактичною датою електронного угоди між сторонами є дата прийняття умов, відповідно до ст. 11 Закону України «Про електронну комерцію».",
    en: "9.5. The actual date of the electronic agreement between the parties is the date of acceptance of the terms, in accordance with Article 11 of the Law of Ukraine 'On Electronic Commerce.'",
    de: "9.5. Das tatsächliche Datum des elektronischen Vertrags zwischen den Parteien ist das Datum der Annahme der Bedingungen gemäß § 11 des Gesetzes der Ukraine „Über elektronische Handelsgeschäfte“.",
  },
  offerta_twentynine_p: {
    ua: "9.6. Використання ресурсу Інтернет-магазину для попереднього перегляду товару, а також для оформлення замовлення для Покупця є безкоштовним.",
    en: "9.6. The use of the Online Store resource for previewing products and placing orders is free of charge for the Buyer.",
    de: "9.6. Die Nutzung der Ressource des Online-Shops zum Vorab-Ansehen von Produkten sowie zum Aufgeben von Bestellungen ist für den Käufer kostenlos.",
  },
  offerta_thirty_p: {
    ua: "9.7. Інформація, яку надає Покупцем, є конфіденційною. Інтернет-магазин використовує інформацію про Покупця виключно в цілях обробки замовлення, відправлення повідомлень Покупцеві, доставки товару, здійснення взаєморозрахунків та ін.",
    en: "9.7. The information provided by the Buyer is confidential. The Online Store uses the information about the Buyer solely for the purposes of processing the order, sending notifications to the Buyer, delivering the product, making payments, etc.",
    de: "9.7. Die vom Käufer bereitgestellten Informationen sind vertraulich. Der Online-Shop verwendet die Informationen des Käufers ausschließlich zur Bearbeitung der Bestellung, zum Versenden von Benachrichtigungen an den Käufer, zur Lieferung der Ware, zur Durchführung von Zahlungen usw.",
  },
  offerta_thirtyone_p: {
    ua: "10.1. Повернення товару в Інтернет-магазин проводиться згідно чинного законодавства України.",
    en: "10.1. The return of goods to the Online Store is carried out in accordance with the current legislation of Ukraine.",
    de: "10.1. Die Rückgabe von Waren an den Online-Shop erfolgt gemäß der geltenden Gesetzgebung der Ukraine.",
  },
  offerta_thirtytwo_p: {
    ua: "10.2. Повернення товару в Інтернет-магазин проводиться за рахунок Покупця.",
    en: "10.2. The return of goods to the Online Store is at the Buyer’s expense.",
    de: "10.2. Die Rückgabe von Waren an den Online-Shop erfolgt auf Kosten des Käufers.",
  },
  offerta_thirtythree_p: {
    ua: "10.3. При поверненні Покупцем товару належної якості, Інтернет-магазин повертає йому сплачену за товар грошову суму за фактом повернення товару за вирахуванням компенсації витрат Інтернет-магазину, пов'язаних з доставкою товару Покупцеві.",
    en: "10.3. When the Buyer returns goods of proper quality, the Online Store will refund the amount paid for the product, subject to the return of the product, minus compensation for the Online Store’s expenses related to the delivery of the product to the Buyer.",
    de: "10.3. Bei der Rückgabe von Waren in einwandfreiem Zustand erstattet der Online-Shop dem Käufer den für die Ware gezahlten Betrag nach der Rückgabe der Ware, abzüglich der Entschädigung für die Ausgaben des Online-Shops im Zusammenhang mit der Lieferung der Ware an den Käufer.",
  },
  offerta_thirtyfour_p: {
    ua: "11.1. Електронний договір вважається укладеним з моменту одержання особою, яка направила пропозицію укласти такий договір, відповіді про прийняття цієї пропозиції в порядку, визначеному частиною шостою статті 11 Закону України «Про електронну комерцію».",
    en: "11.1. The electronic agreement is considered concluded from the moment the person who made the offer receives a response accepting the offer, in the manner defined by part six of Article 11 of the Law of Ukraine 'On Electronic Commerce.'",
    de: "11.1. Der elektronische Vertrag gilt als abgeschlossen, sobald die Person, die das Angebot gemacht hat, eine Antwort auf die Annahme des Angebots gemäß Absatz sechs des Artikels 11 des Gesetzes der Ukraine „Über elektronische Handelsgeschäfte“ erhält.",
  },
  offerta_thirtyfive_p: {
    ua: "11.2. До закінчення терміну дії цей Договір може бути розірваний за взаємною згодою сторін до моменту фактичної доставки товару, шляхом повернення грошових коштів.",
    en: "11.2. Before the expiration of this agreement, it may be terminated by mutual consent of the parties before the actual delivery of the product, through the return of funds.",
    de: "11.2. Vor Ablauf dieses Vertrages kann dieser einvernehmlich zwischen den Parteien gekündigt werden, bevor die tatsächliche Lieferung der Ware erfolgt, durch Rückerstattung der Gelder.",
  },
  offerta_thirtysix_p: {
    ua: "11.3. Сторони мають право розірвати цей договір в односторонньому порядку, в разі невиконання однією із сторін умов цього Договору та у випадках, передбачених чинним законодавством України.",
    en: "11.3. The parties have the right to terminate this agreement unilaterally in case of non-performance of the terms of this agreement by one of the parties and in cases provided for by the current legislation of Ukraine.",
    de: "11.3. Die Parteien haben das Recht, diesen Vertrag einseitig zu kündigen, wenn eine der Parteien die Bedingungen dieses Vertrages nicht erfüllt und in den Fällen, die durch die geltende Gesetzgebung der Ukraine vorgesehen sind.",
  },
  offerta_thirtyseven_p: {
    ua: "Звертаємо вашу увагу, що інтернет-магазин «…» на офіційному інтернет-сайті …, має право, відповідно до законодавства України, надавати право користування інтернет платформою ФОП і юридичним особам для реалізації товару.",
    en: "Please note that the online store '…' on the official website …, has the right, in accordance with the legislation of Ukraine, to grant the use of the internet platform to individual entrepreneurs and legal entities for the sale of goods.",
    de: "Bitte beachten Sie, dass der Online-Shop „…“ auf der offiziellen Website …, gemäß der Gesetzgebung der Ukraine, das Recht hat, Einzelunternehmern und juristischen Personen die Nutzung der Internetplattform zum Verkauf von Waren zu gewähren.",
  },
  offerta_thirtyeight_p: {
    ua: "ФОП Колісник Тетяна Миколаївна",
    en: "Individual Entrepreneur Tetiana Mykolayivna Koliskyk",
    de: "Einzelunternehmerin Tetiana Mykolayivna Koliskyk",
  },
  offerta_thirtynine_p: {
    ua: "Полтавська обл., м. Полтава, вул. Головка 8",
    en: "Poltava Region, Poltava City, Hoholka Street 8",
    de: "Oblast Poltawa, Stadt Poltawa, Hoholka Straße 8",
  },
  offerta_first_li: {
    ua: "«товар» - моделі, аксесуари, комплектуючі та супровідні предмети;",
    en: "'Product' – models, accessories, components, and accompanying items.",
    de: "„Ware“ – Modelle, Zubehör, Komponenten und begleitende Artikel.",
  },
  offerta_second_li: {
    ua: "«Інтернет-магазин» - відповідно до Закону України «про електронну комерцію», засіб для подання або реалізації товару, роботи або послуги шляхом здійснення електронної угоди.",
    en: "'Online Store' – according to the Law of Ukraine 'On Electronic Commerce,' a means for offering or selling goods, works, or services through an electronic agreement.",
    de: "„Online-Shop“ – gemäß dem Gesetz der Ukraine „Über elektronische Handelsgeschäfte“ ein Mittel, um Waren, Arbeiten oder Dienstleistungen durch einen elektronischen Vertrag anzubieten oder zu verkaufen.",
  },
  offerta_third_li: {
    ua: "«Продавець» - компанія, яка реалізує товари, представлені на Інтернет-сайті.",
    en: "'Seller' – the company that sells goods presented on the Website.",
    de: "„Verkäufer“ – das Unternehmen, das die auf der Website präsentierten Waren verkauft.",
  },
  offerta_fourth_li: {
    ua: "«Покупець» - фізична особа, що уклала з Продавцем Договір на умовах, викладених нижче.",
    en: "'Buyer' – an individual who enters into an Agreement with the Seller under the terms outlined below.",
    de: "„Käufer“ – eine natürliche Person, die mit dem Verkäufer einen Vertrag zu den unten dargelegten Bedingungen abschließt.",
  },
  offerta_fiveth_li: {
    ua: "«Замовлення» - вибір окремих позицій з переліку товарів, зазначених Покупцем при розміщенні замовлення і проведенні оплати.",
    en: "'Order' – the selection of individual items from the list of goods specified by the Buyer when placing the order and making payment.",
    de: "„Bestellung“ – die Auswahl einzelner Artikel aus der Liste der Waren, die der Käufer bei der Bestellung und Bezahlung angibt.",
  },
  offerta_sixth_li: {
    ua: "добровільний вибір Покупцем товарів в Інтернет-магазині;",
    en: "Voluntary selection of goods by the Buyer in the Online Store;",
    de: "Freiwillige Auswahl der Waren durch den Käufer im Online-Shop;",
  },
  offerta_seventh_li: {
    ua: "самостійне оформлення Покупцем замовлення в Інтернет-магазині;",
    en: "Independent placing of the order by the Buyer in the Online Store;",
    de: "Selbstständige Bestellung des Käufers im Online-Shop;",
  },
  offerta_eight_li: {
    ua: "оплата Покупцем замовлення, оформленого в Інтернет-магазині;",
    en: "Payment for the order placed by the Buyer in the Online Store;",
    de: "Zahlung des Käufers für die im Online-Shop aufgegebene Bestellung;",
  },
  offerta_nineth_li: {
    ua: "обробка і доставка замовлення Покупцеві у власність на умовах цього Договору.",
    en: "Processing and delivery of the order to the Buyer’s ownership under the terms of this Agreement.",
    de: "Bearbeitung und Lieferung der Bestellung an den Käufer im Rahmen dieses Vertrages.",
  },
  offerta_tenth_li: {
    ua: "в односторонньому порядку припинити надання послуг за цим договором у разі порушення Покупцем умов цього договору.",
    en: "Unilaterally terminate the provision of services under this agreement in case of violation of the terms of this agreement by the Buyer.",
    de: "Die einseitige Beendigung der Dienstleistungserbringung im Rahmen dieses Vertrages im Falle der Verletzung der Vertragsbedingungen durch den Käufer.",
  },
  offerta_eleventh_li: {
    ua: "своєчасно оплатити та отримати замовлення на умовах цього договору.",
    en: "Timely pay for and receive the order under the terms of this agreement.",
    de: "Die rechtzeitige Zahlung und den Erhalt der Bestellung zu den Bedingungen dieses Vertrages.",
  },
  offerta_twelfth_li: {
    ua: "оформити замовлення в Інтернет-магазині;",
    en: "Place an order in the Online Store;",
    de: "Eine Bestellung im Online-Shop aufgeben;",
  },
  offerta_thirteenth_li: {
    ua: "оформити електронний договір;",
    en: "Conclude an electronic agreement;",
    de: "Einen elektronischen Vertrag abschließen;",
  },
  offerta_fourteenth_li: {
    ua: "вимагати від Продавця виконання умов цього Договору.",
    en: "Demand from the Seller the fulfillment of the terms of this Agreement.",
    de: "Vom Verkäufer die Erfüllung der Bedingungen dieses Vertrages verlangen.",
  },
  offerta_fiveteenth_li: {
    ua: "змінений виробником зовнішній вигляд Товару;",
    en: "Changes to the external appearance of the Product made by the manufacturer;",
    de: "Änderungen des äußeren Erscheinungsbildes des Produkts, die vom Hersteller vorgenommen wurden;",
  },
  offerta_sixteenth_li: {
    ua: "за незначне невідповідність колірної гами товару, що може відрізнятися від оригіналу товару виключно через різній колірній передачі моніторів персональних комп'ютерів окремих моделей;",
    en: "Minor discrepancies in the color scheme of the product, which may differ from the original product solely due to the different color representation of personal computer monitors of certain models;",
    de: "Geringfügige Abweichungen im Farbschema des Produkts, die nur aufgrund unterschiedlicher Farbdarstellung von Monitoren verschiedener Computermodelle vom Originalprodukt abweichen können;",
  },
  offerta_seventeenth_li: {
    ua: "за зміст і правдивість інформації, наданої Покупцем при оформленні замовлення;",
    en: "The content and accuracy of the information provided by the Buyer when placing the order;",
    de: "Der Inhalt und die Richtigkeit der Informationen, die der Käufer bei der Bestellung angegeben hat;",
  },
  offerta_eighteen_li: {
    ua: "за затримку і перебої в наданні Послуг (обробки замовлення та доставки товару), які відбуваються з причин, що знаходяться поза сферою його контролю;",
    en: "Delays and interruptions in providing Services (order processing and delivery of the product) that occur due to reasons beyond the Seller's control;",
    de: "Verzögerungen und Unterbrechungen bei der Erbringung von Dienstleistungen (Bestellbearbeitung und Lieferung des Produkts), die aufgrund von Faktoren außerhalb der Kontrolle des Verkäufers auftreten;",
  },
  offerta_nineteen_li: {
    ua: "за зміну ціни на товар після його замовлення, коли ціна змінюється постачальником під час відвантаження товара чи зміні курса іноземної валюти;",
    en: "Price changes for the product after the order is placed, when the price is altered by the supplier during shipment or due to changes in the foreign exchange rate;",
    de: "Preisänderungen des Produkts nach der Bestellung, wenn der Preis durch den Lieferanten während des Versands oder aufgrund von Änderungen des Wechselkurses geändert wird;",
  },
  offerta_twenty_li: {
    ua: "за протиправні незаконні дії, здійснені Покупцем за допомогою даного доступу до мережі Інтернет;",
    en: "Unlawful actions committed by the Buyer using this access to the Internet network;",
    de: "Illegale Handlungen des Käufers unter Nutzung dieses Zugriffs auf das Internetnetzwerk;",
  },
  offerta_twentyone_li: {
    ua: "за передачу Покупцем своїх мережевих ідентифікаторів - IP, MAC-адреси, логіна і пароля третім особам.",
    en: "The transfer by the Buyer of their network identifiers – IP, MAC addresses, login, and password to third parties.",
    de: "Die Weitergabe von Netzwerkinformationen des Käufers – IP, MAC-Adresse, Login und Passwort an Dritte.",
  },
};

// Текущий язык (по умолчанию — английский)
let currentLang = localStorage.getItem("selectedLang") || "de";

// Функция обновления переводов
function updateTranslation() {
  const elements = document.querySelectorAll("[data-translate-key]");

  elements.forEach((element) => {
    const key = element.dataset.translateKey; // Читаем ключ
    if (translations[key] && translations[key][currentLang]) {
      element.textContent = translations[key][currentLang]; // Обновляем текст
    }
  });

  // Обновляем плейсхолдеры отдельно (если нужно)
  const feedbackNameInput = document.getElementById("feedback_name_input");
  if (feedbackNameInput) {
    feedbackNameInput.placeholder =
      translations["enter_name"]?.[currentLang] || "Translation not available";
  }

  const modalNameInput = document.getElementById("modal_name_input");
  if (modalNameInput) {
    modalNameInput.placeholder =
      translations["enter_name"]?.[currentLang] || "Translation not available";
  }

  const carNameInput = document.getElementById("car_name_input");
  if (carNameInput) {
    carNameInput.placeholder =
      translations["car_name"]?.[currentLang] || "Translation not available";
  }
}

// Слушатель изменения языка
document.getElementById("lang_select").addEventListener("change", (event) => {
  currentLang = event.target.value; // Получаем выбранный язык
  localStorage.setItem("selectedLang", currentLang); // Сохраняем выбранный язык
  updateTranslation(); // Обновляем перевод
});

// Устанавливаем язык из LocalStorage при загрузке страницы
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("selectedLang");
  if (savedLang) {
    currentLang = savedLang; // Устанавливаем язык из LocalStorage
    document.getElementById("lang_select").value = savedLang; // Устанавливаем значение в select
  }
  updateTranslation(); // Обновляем перевод
});
