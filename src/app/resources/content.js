import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Amraj",
  lastName: "Koonar",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "BSc Computer Science Student at SFU",
  avatar: "/images/pfp/pfp_amraj(2).jpg",
  email: "ask36@sfu.ca",
  location: "America/Vancouver", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
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
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Hi, I'm Amraj Koonar.</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Once UI</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
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
        description: <>Bachelor of Science in Computing Science.</>,
      },
      // {
      //   // name: "Build the Future",
      //   // description: <>Studied online marketing and personal branding.</>,
      // },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
