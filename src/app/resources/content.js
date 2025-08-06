import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Amraj",
  lastName: "Koonar",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "BSc Computing Science Student at SFU",
  avatar: "/images/pfp/pfp_amraj(2).jpg",
  email: "ask36@sfu.ca",
  location: "America/Vancouver", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false, // Disabled for academic portfolio
  title: <>Subscribe to {person.firstName}s Academic Updates</>,
  description: (
    <>
      I occasionally share updates about my academic projects, research, and learning journey.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/AmrajKoonar",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/amraj-koonar/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Hi, I am Amraj Koonar.</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">DeepPhishing</strong></>,
    href: "/work/deepphishing",
  },
  subline: (
    <> 
       A Computer Science Student at Simon Fraser University. Passionate about web, cloud, and software development.
        Always eager to learn, build, and grow!

    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a third-year Computer Science student at Simon Fraser University passionate about web development, software development, front-end design, and full-stack applications. 
        I specialize in React, JavaScript, and Python, with experience in technologies such as Git, GitHub, and Visual Studio Code. 
        I enjoy building interactive and scalable web solutions.
          <p>

          </p>
        Beyond technical skills, I thrive in team-oriented environments and enjoy problem-solving, mentoring, and collaborating on innovative ideas. 
        I seek opportunities to apply my knowledge in internships, software development roles, or open-source contributions. 
        I love exploring new technologies, optimizing code, and contributing to the tech community!
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experience",
    experiences: [
      {
        company: "Web Developer",
        timeframe: "July. 2025 - Present",
        role: "SFU Computing Science Student Society",
        achievements: [
          <>
            Collaborated with the W3 Committee to define the websites architecture, user flow, and overall design strategy.
          </>,
          <>
            Designed and developed the new homepage for the CSSS website, enhancing user experience for 2,000+ students.
          </>,
          <>
            Maintained and updated the CSSS Discord bot, automating tasks and improving communication for 4,000+ users.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "SFU Computer Science Peer Tutor",
        timeframe: "Dec. 2024 - Present",
        role: "Simon Fraser University",
        achievements: [
          <>
            Improved communication by helping students grasp recursion, dynamic programming, and other complex topics.
          </>,
          <>
            Guided students in debugging and explained fundamental concepts in Python, Java, and C++.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "SFU Calculus I & II Peer Tutor",
        timeframe: "Sept. 2023 - Present",
        role: "Simon Fraser University",
        achievements: [
          <>
            Strengthened problem-solving by simplifying advanced calculus for better understanding.
          </>,
          <>
            Demonstrated critical thinking and adaptability to assess student needs and suggest personalized strategies.
          </>,
        ],
        images: [],
      },
      {
        company: "Courtesy Clerk",
        timeframe: "July 2022 - Nov. 2023",
        role: "Real Canadian Superstore",
        achievements: [
          <>
            Managed multiple tasks efficiently in a fast-paced environment, showcasing communication and adaptability.
          </>,
          <>
             Strengthened problem-solving, critical thinking and teamwork by helping customers and streamlining daily tasks.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Simon Fraser University",
        description: (
          <>
            Bachelor of Science in Computing Science.<br />
            Recipient of the SFU CS Undergraduate Student Society Award valued at $3200.
          </>
        ),
      },
      // {
      //   // name: "Build the Future",
      //   // description: <>Studied online marketing and personal branding.</>,
      // },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Languages",
        description: <>JavaScript, TypeScript, HTML/CSS, Java, Python, C, C++, SQL (PostgreSQL), GraphQL</>,
        icon: "document",
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Frameworks",
        description: <>React.js, Next.js, Node.js, ExpressJs, Socket.io, Spring Boot, Vue.js, Tailwind CSS</>,
        icon: "grid",
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Developer Tools",
        description: <>Docker, AWS, MongoDB, Cypress, Git, GitHub, Vite</>,
        icon: "clipboard",
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Coursework",
  title: "Coursework",
  description: `Academic coursework and projects by ${person.name}`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Personal and academic projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Contact",
  title: `Contact – ${person.name}`,
  description: `Get in touch with ${person.name}`,
  // Contact information
  contact: {
    email: person.email,
    linkedin: "https://www.linkedin.com/in/amraj-koonar/",
    github: "https://github.com/AmrajKoonar",
    resume: "/resume/Amraj_Koonar_Resume.pdf/", // Placeholder for resume link
  },
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
