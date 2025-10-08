L.LOCK — SEO/Ads пакет (обновлено 2025-10-08 16:59)

Файлы:
1) assets/og-image.jpg — картинка предпросмотра (Open Graph), 1200x630.
2) robots.txt — разрешает индексацию и указывает на sitemap.xml.
3) sitemap.xml — карта сайта с DE и RU.
4) snippets/head-og-hreflang-ga4.html — блок для вставки перед </head>.
5) snippets/jsonld-localbusiness.html — LocalBusiness JSON-LD, перед </head>.
6) snippets/jsonld-faq.html — FAQ JSON-LD, перед </head>.
7) snippets/ads-conversion.html — helper для конверсий Google Ads, перед </body>.
8) reviews.json — заготовка отзывов (по желанию).

Куда вставлять в index-landing1.html:
- Перед </head>: вставить 1) head-og-hreflang-ga4.html, 2) jsonld-localbusiness.html, 3) jsonld-faq.html.
- Перед </body>: вставить ads-conversion.html.
- Положить /assets/og-image.jpg на сервер.
- Загрузить robots.txt и sitemap.xml в корень.
- Везде заменить G-XXXXXXXXXX (GA4) и AW-XXXXXXXXX (Google Ads) на ваши реальные ID.
