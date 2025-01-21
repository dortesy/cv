import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";
import { XIcon } from "../components/icons/XIcon";
import { PdfIcon } from "../components/icons/PdfIcon";

export const RESUME_DATA = {
  name: "Sherzod Saidmaksumov",
  initials: "SS",
  location: "Saint Petersburg, FL, USA",
  locationLink: "https://www.google.com/maps/place/Saint+Petersburg,+FL/",
  about:
    "Full Stack Developer",
  summary:
`
Full Stack Developer with 5+ years of experience delivering high-performance, scalable web applications with a strong emphasis on user experience and modern design. Successfully built and deployed complex projects like Webinarium, an high-performance e-learning platform, and HandTextAI, an innovative tool for generating realistic handwritten documents. Proficient in a diverse tech stack, including JavaScript, React, Next.js, Node.js, PHP, Python, Django, and HTML/CSS, with a proven ability to integrate cutting-edge technologies to solve real-world problems. Skilled in optimizing performance and crafting responsive, user-friendly interfaces for a seamless web experience.`,
  avatarUrl: "https://avatars.githubusercontent.com/u/119113734?v=4",
  personalWebsiteUrl: "https://sherzod.dev",
  contact: {
    email: "sherzod.saidmaksumov@gmail.com",
    tel: "+13322702902",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/dortesy",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sherzod-saidmaksumov/",
        icon: LinkedInIcon,
      },
      {
        name: "PersonalWebsiteIcon",
        url: "https://x.com/sherzod_on",
        icon: XIcon,
      },
      {
        name: "Resume",
        url: "/resume.pdf",
        icon: PdfIcon,
      },

    ],
  },
  education: [
    {
      school: "Tashkent University of Information Technologies",
      degree: "Bachelor's Degree in Computer Science",
      start: "2021",
      end: "Present",
    },

    {
      school: "Mirzo-Ulugbek Professional College of Computer Science",
      degree: "Associate Degree in Information Systems and Technology",
      start: "2011",
      end: "2014",
    },
  ],
  work: [
    {
      company: 'Webinarium',
      link: 'https://webinarium.uz/',
      badges: ['Hybrid'],
      title: 'Full Stack Web Developer',
      logo: '',
      start: '2024',
      end: 'Present',
      description:
        '• Architected and launched an enterprise-grade e-learning platform using Next.js 14, NestJS, and PostgreSQL, implementing a monorepo structure that reduced deployment time by 40%.\n' +
        '• Engineered a type-safe contract-first API system using ts-rest and Prisma ORM, resulting in zero runtime type errors and 30% faster development cycles.\n' +
        '• Developed a secure authentication system supporting JWT and OAuth2.0, handling 10,000+ user sessions with automated token rotation and device tracking.\n' +
        '• Built a scalable course management system with real-time video processing capabilities, supporting multiple file formats and concurrent uploads.\n' +
        '• Led technical decision-making and implementation of core platform features including internationalization, payment processing, and content delivery optimization.',
    },
    {
      company: "Blackmore Music Group",
      link: "http://blackmore-music-group.com/",
      badges: ["Remote"],
      title: "Full Stack Web Developer",
      logo: '',
      start: "2021",
      end: "Present",
      description:
        "• Developed 10 web projects, including 4 event ticketing and workshop registration sites utilizing WooCommerce, 1 educational portal, and 5 personal websites for artists, leveraging JavaScript, HTML, CSS, WordPress, React, and Next.js\n" +
        "• Redesigned back-end systems with WordPress for 3 projects, enhancing system stability and reducing average server response times from 1100ms to 600ms.\n" +
        "• Launched a bilingual event website with registration functionality under a tight one-week deadline. Engineered a form, processing 100 daily registrations.\n" +
        "• Constructed a WordPress dashboard for educational portal, integrating databases for schools and professionals. Facilitated user-driven content management, including personal and company profiles, job applications, and class registrations. \n" +
        "• Revamped both internal and external optimizations to the site, enhancing SEO practices and streamlining performance features, which led to a 50% increase in web traffic and improved user engagement metrics.",
    },
    {
      company: "Сreativemade",
      link: "https://creativemade.ru",
      badges: ["Remote"],
      title: "Frontend Developer",
      logo: '',
      start: "2020",
      end: "2021",
      description:
        "• Engineered 7 diverse web pages from Figma designs, utilizing semantic HTML markup, efficient CSS methodologies, and optimized JavaScript to ensure pixel-perfect, cross-browser compatibility and enhanced user experience\n" +
        "• Built a WordPress website with advanced animations and UI elements, optimizing performance to achieve a 95+ PageSpeed Insights score on both mobile and desktop.\n" +
        "• Spearheaded the optimization of high-performance landing pages, using advanced JavaScript and jQuery, which doubled client engagement and increased conversion rates by 25%.\n" +
        "• Streamlined front-end interactivity by integrating WordPress APIs, reducing page load times by 30% and increasing user session duration by 25%.",
    },

    {
      company: 'Freelancer',
      link: '*',
      badges: ['Remote'],
      title: 'Full Stack Web Developer',
      logo: '',
      start: '2018',
      end: '2020',
      description: [
        "• Developed custom WordPress themes and plugins using PHP, JavaScript, and MySQL to meet diverse client needs, including e-commerce, educational platforms, and multilingual websites.\n" +
        "• Optimized websites for performance and SEO using tools like Rank Math and best practices in web development, achieving improved loading speeds and higher search engine rankings.\n" +
        "• Built dynamic, user-friendly interfaces with HTML5, CSS3, and JavaScript frameworks such as React and jQuery, ensuring responsive design and cross-browser compatibility.\n" +
        "• Implemented advanced functionalities like booking systems, event calendars, AJAX-powered forms, and API integrations to enhance user experience and functionality."
      ]
    },
  ],
  skills: [
    "JavaScript",
    "Node.js",
    "Next.js",
    "React",
    'Nestjs',
    "FastAPI",
    "HTML & CSS",
    "WordPress",
    "PHP",
    "Python",
    "SASS",
    "Laravel",
    "SQL",
    "Linux",
    "Git",
    "Linux",
  ],
  projects: [
    {
      "title": "HandTextAI – Realistic Handwriting Generator",
      "techStack": [
        "Python",
        "Django",
        "React",
        "Next.js",
        "PostgreSQL",
        "Docker"
      ],
      "description": "HandTextAI is an innovative web application that converts typed text into realistic handwritten pages. It allows users to create custom fonts from their handwriting, supports detailed page settings, and integrates advanced features such as dynamic text effects and realistic textures. The project leverages modern technologies like Django for the backend, React and Next.js for the frontend, and PostgreSQL for data storage. The application is optimized for performance and scalability, ensuring a seamless user experience across devices.",
      "link": {
        "label": "handtextai.com",
        "href": "https://handtextai.com"
      }
    },
    {
      "title": "Tatjana Vassiljeva – Official Website",
      "techStack": [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS"
      ],
      "description": "Developed a professional website for internationally acclaimed cellist Tatjana Vassiljeva. The website features a dynamic calendar for events, discography, photo and video galleries, a biography section, and a contact form. Built with Next.js and Tailwind CSS, the site delivers a seamless, responsive experience across devices. Leveraged TypeScript for robust and maintainable code, ensuring high performance and scalability.",
      "link": {
        "label": "tatjanavassiljeva.com",
        "href": "https://tatjanavassiljeva.com"
      }
    },

    {
      title: "Webinarium - Learning Management System (in progress)",
      techStack: [
        "Next.js 14 (Full-stack)",
        "TypeScript",
        "Tailwind CSS",
        "Prisma",
        "Next-auth (Auth.js)",
      ],
      description: "Webinarium is built using the powerful Next.js 14 framework, leveraging its full-stack capabilities to deliver a seamless user experience. We employ next-auth for robust authentication processes, Prisma for object-relational mapping, and zod for schema validation, ensuring that our platform stands on a foundation of reliable and secure technologies.",
      link: {
        label: "Webinarium github",
        href: "https://github.com/dortesy/webinarium-lms",
      },
    },
    {
      title: "BLACKMORE'S – Berlins Musikzimmer",
      techStack: [
        "HTML",
        "CSS",
        "JavaScript",
        "WordPress",
        "PHP",
      ],
      description: "The website is for BLACKMORE'S – Berlins Musikzimmer, a concert hall in Berlin. It was custom-built from a provided design using WordPress as the backend, supplemented with extensive custom coding and fields. Key features include a custom concert system, custom search functionality, a calendar, and masterclasses pulled from another site via a MySQL database. The site also supports multiple languages and is responsive, ensuring it works well across different devices and screen sizes.",
      link: {
        label: "2023.blackmores-musikzimmer.de",
        href: "https://musikzimmer:2023bmz@2023.blackmores-musikzimmer.de/",
      },
    },

    {
      title: "Blackmore International Мusic Academy",
      techStack: [
        "HTML",
        "CSS",
        "JavaScript",
        "WordPress",
        "PHP",
        "WooCommerce",
        "Design"
      ],
      description: "The Blackmore Music Academy website features a similar technology stack to the concert hall site but with the notable addition of being designed by me. It incorporates a heavily customized WooCommerce plugin tailored to the client's requirements, enabling a sophisticated booking system for masterclasses. This customization provides extensive functionality to meet the specific needs of the academy, ensuring a seamless and user-friendly booking experience.",
      link: {
        label: "blackmore-academy.com",
        href: "https://blackmore-academy.com/",
      },
    },

    {
      "title": "David Geringas – Official Website",
      "techStack": [
        "WordPress",
        "PHP",
        "MySQL",
        "JavaScript",
        "HTML",
        "CSS"
      ],
      "description": "Developed the official website for renowned Lithuanian cellist and conductor David Geringas. The site offers comprehensive information, including his biography, news updates, master classes, event schedules, press reviews, and a media gallery featuring videos and photos. Built on the WordPress platform, the website ensures easy content management and a responsive design, providing an optimal user experience across various devices.",
      "link": {
        "label": "geringas.de",
        "href": "https://geringas.de"
      }
    },


    {
      title: "International Music Competition Website",
      techStack: ["Bootstrap", "PHP", "LESS", "JavaScript", "HTML", "CSS"],
      description:
        "Grunewald-Competition.com: A custom-designed website for an international music competition. Tailored to the client's specifications, I extensively modified Bootstrap and added new features like multilingual support. Utilized LESS preprocessor and developed a registration script in PHP with email confirmations for both site administrators and participants.",
      logo: '',
      link: {
        label: "grunewald-competition.com",
        href: "https://grunewald-competition.com",
      },
    },

    {
      "title": "Book Library App",
      "techStack": [
        "Flutter",
        "Firebase",
        "Open Library API",
        "Google Books API"
      ],
      "description": "Developed a cross-platform mobile application for an online book library using Flutter. The app features user authentication with Firebase, integration with Open Library and Google Books APIs for book search and previews, and a personalized library stored in Firestore. Users can register, search for books, view detailed information, and save books to their library. The app was designed for performance and seamless user experience.",
      "link": {
        "label": "GitHub Repository",
        "href": "https://github.com/dortesy/book_library"
      }
    },

    {
      title: "Geringas Chamber Orchestra",
      techStack: [
        "HTML",
        "CSS",
        "JavaScript",
        "WordPress",
        "Design"
      ],
      description:
        "Custom-designed WordPress site for Geringas Chamber Orchestra, HTML, CSS, JavaScript development.",
      link: {
        label: "Geringas-chamber-orchestra.de",
        href: "https://geringas-chamber-orchestra.de/",
      },
    },
    {
      title: "International Music Festival Buchenau",
      techStack: [
        "HTML",
        "CSS",
        "JavaScript",
        "WordPress",
        "PHP",
        'Design'
      ],
      description: "For the International Music Festival Buchenau website, I designed and developed it from scratch, handling everything from the design to the coding in HTML & CSS, and ultimately integrating it with WordPress",
      link: {
        label: "new.festival-buchenau.com",
        href: "https://blackmore:222145@new.festival-buchenau.com/",
      },
    },




    {
      title: "Horizon Global",
      techStack: ["HTML", "CSS", "Javascript", 'SASS', 'Gulp'],
      description:
        "Developed Horizon Global's website, a streamlined landing page for European residency services, using HTML, CSS, JavaScript, SASS, and Gulp.",
      logo: '',
      link: {
        label: "Horizon Global",
        href: "https://www.sherzod.my/portfolio/index.html",
      },
    },

    {
      title: "Website with free photos",
      techStack: ["Python","Django", "Design", "HTML", "CSS", "JavaScript", "SASS", 'Pet-project','Design'],
      description:
        "My pet project featuring a collection of photos, automatically sourced using a parser. Built with Python/Django, it offers a simple, user-friendly platform for finding and downloading photos.",
      logo: '',
      link: {
        label: "pictozone.com",
        href: "https://www.pictozone.com",
      },
    },

    {
      title: "Wallpapers for phone",
      techStack: ["PHP","Laravel", "Design", "HTML", "CSS", "JavaScript", "SASS", 'Pet-project'],
      description:
        "My pet project featuring a collection of wallpapers, automatically parsing images from open sources. Built with PHP/Laravel, it offers a simple, user-friendly platform for finding and downloading wallpapers.",
      logo: '',
      link: {
        label: "oboi-telefon.ru",
        href: "https://www.oboi-telefon.ru",
      },
    },



    {
      title: "Blackmore Stringed Instruments - Wordpress website",
      techStack: ["Wordpress", "HTML", "CSS", "JavaScript", "SASS", 'Design'],
      description:
        "Made a new version for website, created from scratch using Wordpress",
      logo: '',
      link: {
        label: "Blackmore Instruments",
        href: "http://admin:09876@new.blackmore-instruments.com",
      },
    },

    {
      title: "Hartmut Rohde - Personal website",
      techStack: ["Wordpress", "HTML", "CSS", "JavaScript", "SASS", 'Design'],
      description:
        "Personal website for music artist Hartmut Rohde, created from scratch using wordpress, gulp/sass",
      logo: '',
      link: {
        label: "hartmutrohde.com",
        href: "https://admin:09876@hartmutrohde.com",
      },
    },

    {
      title: "Heesook Ahn Personal website",
      techStack: ["Wordpress", "HTML", "CSS", "JavaScript", "SASS", 'Design'],
      description:
        "Personal website for music artist Heesook Ahn, created from scratch using wordpress, gulp/sass",
      logo: '',
      link: {
        label: "heesookahn.net",
        href: "http://heesookahn.net/de/",
      },
    },


    {
      title: "Anna Savkina - Violinist Personal Website",
      techStack: ["HTML", "CSS", "SASS", 'Gulp', 'Design'],
      description:
        "Simple Personal website for violinist Anna Savkina, created from scratch using HTML&CSS",
      logo: '',
      link: {
        label: "anna-savkina.com",
        href: "http://anna-savkina.com/",
      },
    },

  ],
} as const;
