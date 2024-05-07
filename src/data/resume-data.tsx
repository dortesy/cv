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
    "Web Developer",
  summary:
`
• Web Developer with 3 years of experience, specializing in creating compelling user interfaces utilizing JavaScript, HTML, CSS, React, and Next.js and WordPress.
• Coded 17 major websites by transforming high-fidelity designs into fully functional, scalable web platforms using frontend and backend technologies WordPress REST API, Python/Django, PHP/Laravel.
• Enhanced Website Performance: Achieved an 80% reduction in load times by strategically upgrading technology and refining coding practices, resulting in smoother user experiences.
• Increased web traffic by 50 percent through SEO enhancements and technical optimization.
• Engineered a WordPress dashboard plugin featuring a profile system with over a hundred detailed, customizable input fields tailored for music students and educators.`,
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
      company: "Blackmore Music Group",
      link: "http://blackmore-music-group.com/",
      badges: ["Remote"],
      title: "Full Stack Web Developer",
      logo: '',
      start: "2021",
      end: "2023",
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
  ],
  skills: [
    "JavaScript",
    "HTML & CSS",
    "WordPress",
    "PHP",
    "React",
    "Next.js",
    "Python",
    "Django",
    "SASS",
    "Laravel",
    "FastAPI",
    "Flask",
    "SQL",
    "Linux",
    "Search Engine Optimization",
    "Gulp",
    "Photoshop/Illustrator/Indesign",
    "Figma",
    "Git",
    "GitHub",
    "Linux",
  ],
  projects: [
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
      title: "Read books online",
      techStack: [
        "Python",
        "Django",
        "Design",
        "HTML",
        "CSS",
        "JavaScript",
        "SASS",
        'Pet-project'
      ],
      description: "Website I built from scratch for online book reading, featuring snippets of books for free. Designed and coded using HTML, CSS, JavaScript, and Python/Django, it includes user registration, dark/light mode toggle, and a reading interface. I added the capability to quickly and easily add any books by simply uploading them in FB2 format through the Django admin panel.",
      link: {
        label: "kelebooks.com",
        href: "https://kelebooks.com/",
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
      title: "Horizon Global",
      techStack: ["HTML", "CSS", "Javascript", 'SASS', 'Gulp'],
      description:
        "Developed Horizon Global's website, a streamlined landing page for European residency services, using HTML, CSS, JavaScript, SASS, and Gulp.",
      logo: '',
      link: {
        label: "Horizon Global",
        href: "https://www.sherzod.dev/portfolio/index.html",
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
