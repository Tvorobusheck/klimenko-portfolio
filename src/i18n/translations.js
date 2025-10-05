const translations = {
  ru: {
    header: {
      title: 'Клименко Владислав Викторович',
      subtitle: 'Разработчик программного обеспечения | Преподаватель',
      aboutButton: 'Обо мне',
      contactButton: 'Связаться'
    },
    nav: {
      name: 'Клименко',
      about: 'О себе',
      education: 'Образование',
      achievements: 'Достижения',
      skills: 'Навыки',
      projects: 'Мои проекты',
      contacts: 'Контакты'
    },
    about: {
      title: 'О себе',
      content: 'Я профессиональный разработчик, специализирующийся на веб-программировании, уже около 5 лет я работаю программистом. Мне нравится создавать код, который решает проблемы клиентов и создает прибыль компании.',
      additional: 'Помимо программирования я обучаюсь в аспирантуре и занимаюсь наукой в области алгоритмов. Тема моей диссертации - это решение задачи линейного раскроя. Также я являюсь действующим преподавателем Петрозаводского государственного университета и преподаю алгоритмы и структуры данных.'
    },
    education: {
      title: 'Образование',
      bachelor: 'Бакалавриат «Программная инженерия» - красный диплом',
      master: 'Магистратура «Информационные системы и технологии. Data Science» - красный диплом'
    },
    achievements: {
      title: 'Достижения и опыт',
      items: [
        '5 лет работы в ИТ',
        'Именная стипендия Республики Карелия за научные достижения',
        'Участие в полуфинале чемпионата мира по олимпиадному программированию (ICPC 2018)',
        'Научные публикации и конференции, включая международные',
        'Преподавание в университете',
        'Опыт предпринимательства'
      ]
    },
    contacts: {
      title: 'Контакты',
      description: 'Вы можете связаться со мной любым удобным способом:',
      telegram: 'Telegram',
      codeforces: 'Codeforces',
      email: 'Email',
      form: {
        name: 'Имя',
        namePlaceholder: 'Введите ваше имя',
        email: 'Email',
        emailPlaceholder: 'Введите ваш email',
        message: 'Сообщение',
        messagePlaceholder: 'Введите ваше сообщение',
        submit: 'Отправить сообщение',
        successMessage: 'Спасибо за ваше сообщение! Я свяжусь с вами в ближайшее время.'
      }
    },
    skills: {
      title: 'Навыки',
      programming: 'Программирование',
      other: 'Другое',
      programmingItems: [
        'Python (Django, Flask, FastAPI, aiohttp, SQLAlchemy, pandas, numpy, scikit-learn)',
        'JavaScript (Vue.js, React, Node.js, Express, TypeScript)',
        'C++ (STL, Boost, Qt, OpenMP, MPI)',
        'C# (.NET, WPF, ASP.NET Core)',
        'SQL (PostgreSQL, MySQL, SQLite, MS SQL Server)',
        'NoSQL (MongoDB, Redis, Elasticsearch)',
        'HTML5, CSS3, Bootstrap, Tailwind CSS'
      ],
      otherItems: [
        'Docker, Docker Compose',
        'Git, GitHub, GitLab, Bitbucket',
        'Linux, Windows',
        'Nginx, Apache',
        'CI/CD (GitHub Actions, GitLab CI/CD)',
        'REST API, GraphQL, WebSockets',
        'Алгоритмы и структуры данных'
      ]
    },
    projects: {
      title: 'Мои проекты',
      previous: 'Предыдущий',
      next: 'Следующий',
      technologies: 'Технологии',
      tryProject: 'Опробовать проект',
      items: [
        {
          title: 'HealthyEat',
          description: 'Сервис по доставке здорового питания с возможностью подбора индивидуального рациона в зависимости от целей пользователя (похудение, набор мышечной массы, поддержание веса).',
          technologies: 'Django, Python, HTML, CSS, JavaScript, Docker, Docker Registry, Docker Swarm, Jenkins, Celery, Redis, WebSocket, Nginx, PostgreSQL, Git',
          images: [
            '/images/healthyeat/registration.png',
            '/images/healthyeat/login.png',
            '/images/healthyeat/pay.png',
            '/images/healthyeat/meal.png',
            '/images/healthyeat/diary.png',
            '/images/healthyeat/schedule.png',
            '/images/healthyeat/diet.png',
            '/images/healthyeat/swagger.png',
            '/images/healthyeat/redoc.png'
          ]
        },
        {
          title: 'ChatGPT In Ru',
          description: 'chatgptin.ru позволял общаться с ChatGPT, когда эта нейросеть начинала набирать обороты. Также была поддержка генерации изображений через Dall-E. Технически все хорошо работало и нравилось пользователям. Однако проект пришлось закрыть, так как реклама не окупала затраты на инфраструктуру и api-ключи ChatGPT.',
          technologies: 'Django, Python, HTML, CSS, JavaScript, Docker, Docker Registry, Docker Swarm, Jenkins, Celery, Redis, WebSocket, Nginx, PostgreSQL, Git',
          images: [
            '/images/chatgptinru/main.png',
            '/images/chatgptinru/feedback.png',
            '/images/chatgptinru/performance.png',
            '/images/chatgptinru/metrika.png',
            '/images/chatgptinru/panel.png'
          ]
        },
        {
          title: 'Решатель задачи линейного раскроя',
          description: 'Данный проект был разработан в рамках моей научной диссертации. По мере развития научных разработок я планирую дорабатывать Robopaper.',
          technologies: 'Django, Python, HTML, CSS, JavaScript, PostgreSQL',
          images: [
            '/images/robopaper/main.png',
            '/images/robopaper/feedback.png'
          ],
          url: 'https://robopaper.ru'
        }
      ]
    }
  },
  en: {
    header: {
      title: 'Vladislav Klimenko',
      subtitle: 'Software Developer | Lecturer',
      aboutButton: 'About Me',
      contactButton: 'Contact Me'
    },
    nav: {
      name: 'Klimenko',
      about: 'About Me',
      education: 'Education',
      achievements: 'Achievements',
      skills: 'Skills',
      projects: 'My Projects',
      contacts: 'Contacts'
    },
    about: {
      title: 'About Me',
      content: 'I am a professional developer specializing in web programming, with about 5 years of experience as a programmer. I enjoy creating code that solves clients\' problems and generates company profit.',
      additional: 'In addition to programming, I am pursuing a postgraduate degree and conducting research in the field of algorithms. The topic of my dissertation is the solution to the linear cutting stock problem. I am also a current lecturer at Petrozavodsk State University, where I teach algorithms and data structures.'
    },
    education: {
      title: 'Education',
      bachelor: 'Bachelor\'s degree in Software Engineering - with honors',
      master: 'Master\'s degree in Information Systems and Technologies. Data Science - with honors'
    },
    achievements: {
      title: 'Achievements and Experience',
      items: [
        '5 years of experience in IT',
        'Named scholarship of the Republic of Karelia for scientific achievements',
        'Participation in the semifinals of the International Collegiate Programming Contest (ICPC 2018)',
        'Scientific publications and conferences, including international ones',
        'University teaching',
        'Entrepreneurship experience'
      ]
    },
    contacts: {
      title: 'Contacts',
      description: 'You can contact me in any convenient way:',
      telegram: 'Telegram',
      codeforces: 'Codeforces',
      email: 'Email',
      form: {
        name: 'Name',
        namePlaceholder: 'Enter your name',
        email: 'Email',
        emailPlaceholder: 'Enter your email',
        message: 'Message',
        messagePlaceholder: 'Enter your message',
        submit: 'Send Message',
        successMessage: 'Thank you for your message! I will get back to you as soon as possible.'
      }
    },
    skills: {
      title: 'Skills',
      programming: 'Programming',
      other: 'Other',
      programmingItems: [
        'Python (Django, Flask, FastAPI, aiohttp, SQLAlchemy, pandas, numpy, scikit-learn)',
        'JavaScript (Vue.js, React, Node.js, Express, TypeScript)',
        'C++ (STL, Boost, Qt, OpenMP, MPI)',
        'C# (.NET, WPF, ASP.NET Core)',
        'SQL (PostgreSQL, MySQL, SQLite, MS SQL Server)',
        'NoSQL (MongoDB, Redis, Elasticsearch)',
        'HTML5, CSS3, Bootstrap, Tailwind CSS'
      ],
      otherItems: [
        'Docker, Docker Compose',
        'Git, GitHub, GitLab, Bitbucket',
        'Linux, Windows',
        'Nginx, Apache',
        'CI/CD (GitHub Actions, GitLab CI/CD)',
        'REST API, GraphQL, WebSockets',
        'Algorithms and data structures'
      ]
    },
    projects: {
      title: 'My Projects',
      previous: 'Previous',
      next: 'Next',
      technologies: 'Technologies',
      tryProject: 'Try Project',
      items: [
        {
          title: 'HealthyEat',
          description: 'A healthy food delivery service with the ability to select an individual diet based on user goals (weight loss, muscle gain, weight maintenance).',
          technologies: 'Django, Python, HTML, CSS, JavaScript, Docker, Docker Registry, Docker Swarm, Jenkins, Celery, Redis, WebSocket, Nginx, PostgreSQL, Git',
          images: [
            '/images/healthyeat/registration.png',
            '/images/healthyeat/login.png',
            '/images/healthyeat/pay.png',
            '/images/healthyeat/meal.png',
            '/images/healthyeat/diary.png',
            '/images/healthyeat/schedule.png',
            '/images/healthyeat/diet.png',
            '/images/healthyeat/swagger.png',
            '/images/healthyeat/redoc.png'
          ]
        },
        {
          title: 'ChatGPT In Ru',
          description: 'chatgptin.ru allowed users to chat with ChatGPT when this neural network was just gaining popularity. It also supported image generation via Dall-E. Technically, everything worked well and was liked by users. However, the project had to be closed as advertising did not cover the costs of infrastructure and ChatGPT API keys.',
          technologies: 'Django, Python, HTML, CSS, JavaScript, Docker, Docker Registry, Docker Swarm, Jenkins, Celery, Redis, WebSocket, Nginx, PostgreSQL, Git',
          images: [
            '/images/chatgptinru/main.png',
            '/images/chatgptinru/feedback.png',
            '/images/chatgptinru/performance.png',
            '/images/chatgptinru/metrika.png',
            '/images/chatgptinru/panel.png'
          ]
        },
        {
          title: 'Linear Cutting Problem Solver',
          description: 'This project was developed as part of my scientific dissertation. As my research progresses, I plan to continue developing Robopaper.',
          technologies: 'Django, Python, HTML, CSS, JavaScript, PostgreSQL',
          images: [
            '/images/robopaper/main.png',
            '/images/robopaper/feedback.png'
          ],
          url: 'https://robopaper.ru'
        }
      ]
    }
  }
};

export default translations;
