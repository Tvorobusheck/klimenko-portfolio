# Портфолио Клименко Владислава

Персональный сайт-портфолио на чистом HTML/CSS/JavaScript без сборки.

## Технологии

- HTML5, CSS3, JavaScript
- Bootstrap 5 (CDN)
- Font Awesome 5 (CDN)

## Запуск

Сайт статический — достаточно открыть `index.html` в браузере или раздать директорию любым веб-сервером, например:

```sh
python3 -m http.server 8000
```

## Структура проекта

```
index.html    # Вся страница: разметка, стили, переводы (RU/EN) и скрипты
images/       # Скриншоты проектов и favicon
```

## Развертывание

Jenkins отслеживает ветку `main` локального bare-репозитория на сервере
`/mnt/storage/git/klimenko-portfolio.git` и запускает [Jenkinsfile](Jenkinsfile).
При отправке нового коммита Jenkins вызывает ограниченную SSH-команду,
которая копирует `index.html`, `404.html`, `500.html` и `images/` в
`/var/www/html` и проверяет HTTPS. Директивы
Apache для основного HTTPS VirtualHost находятся в
`deploy/apache-error-documents.conf`.

Отправить изменения на сервер:

```sh
git push vklimenko main
```

Серверный скрипт находится в `deploy/portfolio-jenkins-deploy`. После его
изменения нужно отдельно обновить установленную копию на сервере.

## Лицензия

Этот проект распространяется под лицензией MIT.
