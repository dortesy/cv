import ConsultlyLogo from "../images/logos/consultly.svg";
import AmbitLogo from "../images/logos/ambit.png";
import BarepapersLogo from "../images/logos/barepapers.svg";
import BimLogo from "../images/logos/bim.png";
import CDGOLogo from "../images/logos/cdgo.png";
import ClevertechLogo from "../images/logos/clevertech.png";
import EvercastLogo from "../images/logos/evercast.svg";
import Howdy from "../images/logos/howdy.png";
import JarockiMeLogo from "../images/logos/jarocki.svg";
import JojoMobileLogo from "../images/logos/jojomobile.png";
import MonitoLogo from "../images/logos/monito.svg";
import MobileVikingsLogo from "../images/logos/mv.png";
import NSNLogo from "../images/logos/nsn.svg";
import ParabolLogo from "../images/logos/parabol.svg";
import TastyCloudLogo from "../images/logos/tastycloud.png";
import YearProgressLogo from "../images/logos/yearprogress.svg";
import Minimal from "../images/logos/minimal.svg";
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
    "Full Stack Web Developer",
  summary:
    "Developer with over 6 years of experience, skilled in HTML, CSS, JavaScript, and PHP. Proficient in WordPress and Python frameworks like Django, I specialize in the full development cycle from concept to deployment, focusing on delivering efficient and effective web solutions.",
  avatarUrl: "https://avatars.githubusercontent.com/u/119113734?v=4",
  personalWebsiteUrl: "https://sherzod.dev",
  contact: {
    email: "contact@sherzod.dev",
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
        url: "/cv.pdf",
        icon: PdfIcon,
      },

    ],
  },
  education: [
    {
      school: "Mirzo-Ulugbek Professional College of Computer Science",
      degree: "Information Systems and Technology",
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
      start: "2018",
      end: "2023",
      description:
        "As the sole web developer, I specialized in creating and managing websites from concept to launch, using HTML, CSS, JavaScript, and PHP. My expertise included developing custom WordPress themes, integrating WooCommerce for e-commerce functionality.",
    },
    {
      company: "Сreativemade",
      link: "https://creativemade.ru",
      badges: ["Remote"],
      title: "HTML & CSS Developer",
      logo: '',
      start: "2017",
      end: "2018",
      description:
        "Developed websites from mockups using HTML, CSS, JavaScript. Ensured cross-browser compatibility and mobile responsiveness.",
    },
    {
      company: "Freelance",
      link: "#",
      badges: [],
      title: "Web Developer",
      logo: '',
      start: "2014",
      end: "2017",
      description:
        "Developed websites using HTML, CSS, JavaScript, PHP. Focused on Search Engine Optimization, web design, WordPress theme and plugin development.",
    },
  ],
  skills: [
    "Python",
    "Django",
    "PHP",
    "JavaScript",
    "HTML & CSS",
    "SASS",
    "WordPress",
    "Laravel",
    "FastAPI",
    "Flask",
    "SQL",
    "Linux",
    "Search Engine Optimization",
    "Gulp",
    "Photoshop/Illustrator/Indesign",
    "Figma"
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
      logo: ConsultlyLogo,
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
      logo: ConsultlyLogo,
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
      logo: ConsultlyLogo,
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
      logo: ConsultlyLogo,
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
      logo: MonitoLogo,
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
