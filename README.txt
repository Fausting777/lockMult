# L.LOCK – DE/RU сайт (готовая структура)
- Дизайн не менялся: классы/структура сохранены. Подключай свой реальный CSS в /assets/styles.css и замени /assets/logo.svg на свой логотип.
- Язык по умолчанию – немецкий (/index.html редиректит на /de/).
- Переключатель языка меняет первый сегмент URL (/de/ ↔ /ru/) и сохраняет остальную часть пути.
- Добавь свои домены в canonical/hreflang тегах.
- Формы отправляют POST на /send-mail – укажи свой backend.
Структура:
/de/index.html, /de/kontakt.html
/ru/index.html, /ru/kontakty.html
/js/lang-switch.js
/assets/styles.css, /assets/logo.svg (placeholder)
