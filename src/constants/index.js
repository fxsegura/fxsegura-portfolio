export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Jeff Bridwell',
      position: 'Director of Software Engineering at FundThatFlip DBA Upwrite',
      img: 'assets/review2.png',
      review:
        'Francisco worked for over a year in one of the engineering teams at Fund That Flip. He is a great communicator, highly fluent in English and seriously smart and capable person. He helped the team build a Javascript template that the org could use to implement our use case driven, serverless architecture. So he has real hands on experience that is highly relevant. I highly recommended Francisco for any consulting engagements you have on your radar.',
    },
    {
      id: 2,
      name: 'Marco Ramirez',
      position: 'CEO/Owner at Asisvet',
      img: 'assets/review2.png',
      review:
        'Francisco’s expertise in web development is truly impressive. He delivered a clean rework of my business website, walking me through each step of the process, and our sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
      id: 3,
      name: 'Cesar Illescas',
      position: 'CEO/Owner at FLTransport',
      img: 'assets/review3.png',
      review:
        'I can’t say enough good things about Francisco. He was able to take our project requirements and turn them into a seamless, functional website that powers my business. His problem-solving abilities are outstanding.',
    },
    {
      id: 4,
      name: 'Christian Green',
      position: 'Engineering Manager at FundThatFlip DBA Upwrite',
      img: 'assets/review3.png',
      review:
        'Francisco was a pleasure to work with. He did a great job working on multiple complex projects and delivering client facing features. His skills in frontend dev are top-notch.',
    },
  ];
  
  export const myProjects = [
    {
      title: 'Web Portfolio',
      desc: "A modern developer portfolio site that uses Threejs. You're looking at it right now!",
      subdesc:
        'Still a work in progress but this site is built with React, Tailwind CSS, Three.js, and Vite, as well as react fiber. Great project to practice and learn threejs, explore modern javascript 3d web design and have a place to host all the great projects I will build and deploy going forward. Stay tuned for further enhancements!',
      href: '##',
      texture: '/textures/project/project1.mp4',
      logo: '/assets/project-logo1.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
      ],
    },
    {
      title: 'Fullstack Library System',
      desc: 'Library system that consists of both a client side application and an admin app. The first is a web application that allows users to search for books and view book details. The latter is an admin dashboard for managing the available books in the app. Complete end to end app with authentication.',
      subdesc:
        'Built as a unique end-to-end app with Next.js, Tailwind CSS, TypeScript, PostgreSQL, Redis and Auth.js.',
      href: '#',
      texture: '/textures/project/project1.mp4',
      logo: '/assets/project-logo1.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
      ],
    },
    {
      title: 'Fullstack Dating App',
      desc: 'An interesting, scalable project consisting in mimicking existing dating apps.',
      subdesc:
        'Powered by Next.js, Prisma, NextAuth, Pusher and Cloudinary.',
      href: '#',
      texture: '/textures/project/project2.mp4',
      logo: '/assets/project-logo2.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
      ],
    },
    {
      title: 'Fullstack AI Email SaaS',
      desc: 'A deepdive on how email clients work, this project is a fullstack email client that uses AI to sort emails and provide a better user experience.',
      subdesc:
        'With a focus on efficiency and scalability, this email client is built with Next.js, Prisma, OpenAI, Stripe, Typescript, Tailwind.',
      href: '#',
      texture: '/textures/project/project3.mp4',
      logo: '/assets/project-logo3.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
      ],
    },
    {
      title: 'Calendly Clone',
      desc: 'This app powered by google calendar offers free online appointment booking and scheduling. It is a clone of the popular Calendly app.',
      subdesc:
        'Built with Next.js 14, Typescript, Drizzle, ShadCN, Tailwind and Neon.',
      href: '#',
      texture: '/textures/project/project4.mp4',
      logo: '/assets/project-logo4.png',
      logoStyle: {
        backgroundColor: '#0E1F38',
        border: '0.2px solid #0E2D58',
        boxShadow: '0px 0px 60px 0px #2F67B64D',
      },
      spotlight: '/assets/spotlight4.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
      ],
    },
    {
      title: 'Algo Visualizer',
      desc: 'This is an OLD sorting algorithm visualizer.',
      subdesc:
        'Part of a bootcamp project from a few years back, it was my entry into web development, so its far from perfect. Currently developing a new version from scratch. It uses Vue.js, and D3js to provide visualizations for common sorting algorithms.',
      href: '#',
      texture: '/textures/project/project5.mp4',
      logo: '/assets/project-logo5.png',
      logoStyle: {
        backgroundColor: '#1C1A43',
        border: '0.2px solid #252262',
        boxShadow: '0px 0px 60px 0px #635BFF4D',
      },
      spotlight: '/assets/spotlight5.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -6, 0] : [0.25, -9, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -7, 0] : isTablet ? [7, -5, 0] : [10, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [6, 3, 0] : [10, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-14, 7.5, 0] : isTablet ? [-12, 6, 0] : [-20, 6, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-7, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Jalasoft',
      pos: 'Full Stack Software Engineer',
      duration: '2021 - Present',
      title: "Jalasoft is a leading software development company that specializes in engineering staff augmentation. As a Full Stack Software Engineer, I work on a wide range of web application projects, using cutting-edge technologies, for top US companies as part of their engineering team. Experience building client facing and internal solutions in the Edtech, Fintech and IT space.",
      icon: '/assets/jala.svg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'FXSoft',
      pos: 'Self Employed Tech Consultant and Web Development Contractor',
      duration: '2018 - present',
      title: "Since college I've explored opportunities to put my knowledge to good use and offer my services as a tech consultant and web development contractor. I've worked with clients from various industries, including agroindustry, finance, education and transportation, to deliver high-quality web applications and custom digital solutions that fit individual business needs.",
      icon: '/assets/FXSoft.svg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Massiano Furniture',
      pos: 'Freelance Executive Assistant | Magento Developer | Designer | Tech Supervisor',
      duration: '2021 - 2021',
      title: "At Massiano Furniture, I was partially responsible for managing the company's online store, creating ad campaigns, supervising the team, doing data entry and providing technical support. It was a hybrid role that allowed me to wear many hats and gain valuable experience in e-commerce, web development, and digital marketing.",
      icon: '/assets/massiano.svg',
      animation: 'salute',
    },
    {
      id: 4,
      name: 'Big Data S.A.',
      pos: 'Software Engineer Intern',
      duration: '2020 - 2021',
      title: "My first experience as a software engineer during college. I was assigned to a file management system that was being build to sell to banks and other financial institutions. I was responsible for the front end and back end of the system, and I learned a lot about the software development process, teamwork, and the importance of communication. Worked directly on dashboards and a document labeling feature",
      icon: '/assets/bigdata.svg',
      animation: 'salute',
    },
    {
      id: 5,
      name: 'Universidad de las Fuerzas Armadas ESPE',
      pos: 'Technology Intern',
      duration: '2019 - 2019',
      title: "I did a brief internship in my University, assisting multiple departments with data entry and data migration, as well as occasional tech support. Also worked on a project to easily generate reports for student's academic progress.",
      icon: '/assets/university.svg',
      animation: 'salute',
    },
  ];