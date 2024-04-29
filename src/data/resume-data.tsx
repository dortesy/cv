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
    "• Web Developer with 3 years of experience, specializing in creating compelling user interfaces utilizing JavaScript, HTML, CSS, React, and Next.js and WordPress.\n" +
    "• Coded 10 major websites by transforming high-fidelity designs into fully functional, scalable web platforms.\n" +
    "• Enhanced Website Performance: Achieved an 80% reduction in load times by strategically upgrading technology and refining coding practices, resulting in smoother user experiences.\n" +
    "• Increased web traffic by 50 percent through SEO enhancements and technical optimizations\n" +
    "• Engineered a WordPress dashboard plugin for an educational portal, integrating a database of over 100,000 schools and professionals. ",
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
        name: "CV",
        url: "/resume-sherzod.pdf",
        icon: PdfIcon,
      },

    ],
  },
  education: [
    {
      school: "Tashkent University of Information Technologies",
      degree: "Bachelor's Degree in Computer Science",
      start: "2021",
      end: "2026",
    },

    {
      school: "Mirzo-Ulugbek Professional College of Computer Science",
      degree: "Vocational School Diploma in Information Systems and Technology",
      start: "2014",
      end: "2017",
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
        "• Launched a bilingual event website with registration functionality under a tight one-week deadline. Engineered a form, processing 50 daily registrations.\n" +
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
        "• Developed backend APIs with WordPress, enhancing functionality and responsiveness, which improved overall website performance by 60%.",
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






    
    // {
    //   title: "Minimal",
    //   techStack: ["Side Project", "Next.js", "Puppeteer"],
    //   description:
    //     "Minimalist calendars, habit trackers and planners generator",
    //   logo: Minimal,
    //   link: {
    //     label: "useminimal.com",
    //     href: "https://useminimal.com/",
    //   },
    // },
    // {
    //   title: "Barepapers",
    //   techStack: ["Side Project", "Next.js", "Puppeteer"],
    //   description:
    //     "Generates beautiful wallpapers using random shapes and gradients",
    //   logo: BarepapersLogo,
    //   link: {
    //     label: "barepapers.com",
    //     href: "https://barepapers.com/",
    //   },
    // },
    // {
    //   title: "Year progress",
    //   techStack: ["Side Project", "TypeScript", "Next.js"],
    //   description: "Tracks current year progress and displays a countdown",
    //   logo: YearProgressLogo,
    //   link: {
    //     label: "getyearprogress.com",
    //     href: "https://getyearprogress.com/",
    //   },
    // },
    // {
    //   title: "Parabol",
    //   techStack: [
    //     "Full Stack Developer",
    //     "TypeScript",
    //     "React",
    //     "Node.js",
    //     "GraphQL",
    //   ],
    //   description:
    //     "The Agile meeting co-pilot that delivers better meetings with less effort",
    //   logo: ParabolLogo,
    //   link: {
    //     label: "github.com",
    //     href: "https://parabol.co/",
    //   },
    // },
    // {
    //   title: "Evercast",
    //   techStack: [
    //     "Lead Frontend Developer",

    //     "TypeScript",
    //     "React",
    //     "Node.js",
    //     "GraphQL",
    //   ],
    //   description:
    //     "Creative collaboration platform that combines video conferencing and HD media streaming",
    //   logo: EvercastLogo,
    //   link: {
    //     label: "evercast.us",
    //     href: "https://www.evercast.us/",
    //   },
    // },
    // {
    //   title: "Mobile Vikings",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application for leading virtual mobile operator in Poland",
    //   logo: MobileVikingsLogo,
    //   link: {
    //     label: "mobilevikings.pl",
    //     href: "https://mobilevikings.pl/",
    //   },
    // },
    // {
    //   title: "Howdy",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Howdy is a place for you to join communities you care about",
    //   logo: Howdy,
    //   link: {
    //     label: "play.google.com",
    //     href: "https://howdy.co/",
    //   },
    // },
    // {
    //   title: "Tastycloud",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application for managing and displaying restaurant menus in kiosk mode",
    //   logo: TastyCloudLogo,
    //   link: {
    //     label: "tastycloud.fr",
    //     href: "https://www.tastycloud.fr/",
    //   },
    // },
    // {
    //   title: "Ambit",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application that helps with sharing your contact details",
    //   logo: AmbitLogo,
    // },
    // {
    //   title: "Bim",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application that helps with booking a table in a restaurants",
    //   logo: BimLogo,
    // },
    // {
    //   title: "Canal Digital GO",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Video streaming mobile application for Canal Digital subscribers",
    //   logo: CDGOLogo,
    // },
  ],
} as const;
