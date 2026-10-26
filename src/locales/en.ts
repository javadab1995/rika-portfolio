import {
  Building2,
  Briefcase,
  LayoutDashboard,
  ClipboardCheck,
  Home,
  Phone,
  Info,
  FolderKanban,
  HardHat,
  IdCard,
} from "lucide-react";

export const en = {
  fullName: "Reza Zaearkabeh",
  nav: [
    {
      title: "Home",
      href: "",
      icon: Home,
    },
    {
      title: "Contact",
      href: "/contact",
      icon: Phone,
    },
    {
      title: "About",
      href: "/about",
      icon: Info,
    },
    {
      title: "Projects",
      href: "/projects",
      icon: FolderKanban,
    },
    {
      title: "Services",
      href: "/services",
      icon: HardHat,
    },
    {
      title: "Credentials",
      href: "/Credentials",
      icon: IdCard,
    },
  ],
  hero: {
    eyebrow: "Civil Engineer",
    title: "Building the Future Through Precise Engineering",
    description:
      "Designing, executing, and managing construction projects with a focus on quality, precision, and professional vision.",
    primaryCta: "View Projects",
    secondaryCta: "Get in Touch",
  },

  projectsSection: {
    title: "projects",
    cta: "View All Projects",
    projects: [
      {
        year: "2024",
        title: "Crown Business Center",
        description:
          "Modern commercial development designed for efficiency, durability and long-term performance.",
        category: "Commercial",
        location: "London, UK",
        image: "/images/projects/project-1.jpg",
      },
      {
        year: "2023",
        title: "Harbor Bridge",
        description:
          "Advanced infrastructure project combining structural precision with resilient engineering.",
        category: "Infrastructure",
        location: "Sydney, Australia",
        image: "/images/projects/project-2.jpg",
      },
      {
        year: "2024",
        title: "Nordic Office Tower",
        description:
          "Contemporary office tower engineered with a focus on performance, safety and sustainability.",
        category: "Commercial",
        location: "Stockholm, Sweden",
        image: "/images/projects/project-3.jpg",
      },
    ],
  },

  servicesSection: {
    title: "Our Services",
    cta: "View All Services",

    services: [
      {
        title: "Structural Engineering",
        description:
          "Innovative structural designs that stand the test of time.",
        icon: Building2,
      },
      {
        title: "Consulting",
        description: "Expert advice for complex engineering challenges.",
        icon: Briefcase,
      },
      {
        title: "Project Management",
        description: "End-to-end management ensuring smooth project delivery.",
        icon: LayoutDashboard,
      },
      {
        title: "Assessment & Audit",
        description:
          "Ensure safety, compliance, and performance at every stage.",
        icon: ClipboardCheck,
      },
    ],
  },

  contact: {
    title: "Let's Work Together",
    description:
      "Get in touch for collaboration or to learn more about my work.",
    button: "Contact Me",
  },

  stats: [
    { value: "50+", label: "Projects" },
    { value: "10+", label: "Years of Experience" },
    { value: "15", label: "Cities" },
    { value: "120", label: "Clients" },
  ],

  home: {
    about: {
      eyebrow: "About Structura",

      title: "Engineering a Better Future",

      description:
        "With over 18 years of experience, we've partnered with global clients to design structures that inspire and endure.",

      learnMore: "Learn More",

      stats: {
        experience: {
          value: "18+",
          label: "Years Experience",
        },

        projects: {
          value: "250+",
          label: "Projects Completed",
        },

        engineers: {
          value: "35",
          label: "Expert Engineers",
        },
      },
    },

    process: {
      eyebrow: "Our Engineering Process",

      title: "A Streamlined Approach",

      viewFullProcess: "View Full Process",

      steps: [
        {
          number: "01",
          title: "Discover",
          description: "Understanding your vision and project goals.",
        },
        {
          number: "02",
          title: "Design",
          description:
            "Creating innovative, safe, and efficient structural solutions.",
        },
        {
          number: "03",
          title: "Develop",
          description: "Detailed planning and collaboration at every stage.",
        },
        {
          number: "04",
          title: "Deliver",
          description: "On-time delivery with precision and quality.",
        },
      ],
    },

    credentials: {
      eyebrow: "Credentials & Achievements",

      title: "Expertise Built on\nExperience & Recognition",

      description:
        "A collection of professional qualifications, certifications and achievements that reflect our commitment to excellence in engineering.",

      viewAll: "View All Credentials",

      items: [
        {
          year: "2024",
          type: "Certification",
          title: "Professional Structural Engineering Certification",
          issuer: "International Engineering Council",
          description:
            "Advanced professional certification in structural engineering and design.",
          image: "/images/credentials/certification-01.jpg",
        },
        {
          year: "2023",
          type: "Achievement",
          title: "Excellence in Engineering Award",
          issuer: "Global Engineering Association",
          description:
            "Recognized for outstanding contribution to innovative engineering projects.",
          image: "/images/credentials/award-01.jpg",
        },
        {
          year: "2022",
          type: "Qualification",
          title: "Advanced Project Management",
          issuer: "Engineering Management Institute",
          description:
            "Professional qualification focused on complex engineering project management.",
          image: "/images/credentials/certification-02.jpg",
        },
        {
          year: "2021",
          type: "Recognition",
          title: "Outstanding Professional Achievement",
          issuer: "European Construction Forum",
          description:
            "Recognition for excellence in engineering practice and project delivery.",
          image: "/images/credentials/award-02.jpg",
        },
      ],
    },

    testimonials: {
      eyebrow: "Client Testimonials",

      title: "Trusted by Leaders",

      items: [
        {
          quote:
            "Structura's expertise and commitment to excellence made our complex project a tremendous success.",
          name: "James Peterson",
          role: "CEO, BuildCore",
          image: "/images/testimonials/client-1.jpg",
        },
      ],
    },

    insights: {
      eyebrow: "Latest Insights",

      title: "From the Blog",

      viewAll: "View All Articles",

      readMore: "Read More",

      items: [
        {
          date: "May 12, 2024",
          title: "The Future of Sustainable Design",
          image: "/images/blog/blog-1.jpg",
        },
        {
          date: "April 26, 2024",
          title: "Innovations in Structural Engineering",
          image: "/images/blog/blog-2.jpg",
        },
        {
          date: "April 15, 2024",
          title: "Building Resilient Communities",
          image: "/images/blog/blog-3.jpg",
        },
      ],
    },

    cta: {
      title: "Let's Build Something Great",

      projectQuestion: "Have a project in mind?",

      description: "Let's create something extraordinary together.",

      form: {
        name: "Your Name",
        email: "Email Address",
        projectType: "Project Type",
        submit: "Start a Conversation",

        projectTypes: {
          commercial: "Commercial",
          infrastructure: "Infrastructure",
          residential: "Residential",
        },
      },
    },

    footer: {
      brand: {
        name: "STRUCTURA",
        subtitle: "Consulting Civil Engineers",

        description:
          "We are passionate about engineering a better future through innovation, safety, and collaboration.",
      },

      company: {
        title: "Company",

        links: [
          {
            label: "About Us",
            href: "/about",
          },
        ],
      },

      services: {
        title: "Services",

        links: [
          {
            label: "Structural Engineering",
          },
          {
            label: "Consulting",
          },
          {
            label: "Project Management",
          },
          {
            label: "Assessment & Audit",
          },
        ],
      },

      resources: {
        title: "Resources",

        links: [
          {
            label: "Blog",
            href: "/blog",
          },

          {
            label: "FAQs",
            href: "/faq",
          },
        ],
      },

      contact: {
        title: "Contact",

        email: "hello@structura.com",
        phone: "+989144914796",

        address: [" Emamm Street", "َAZ, Marand"],
      },

      copyright: "© 2024 Structura Consulting Engineers. All rights reserved.",

      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
  },

  contactPage: {
    eyebrow: "Get In Touch",
    title: "Let's Work Together",
    description:
      "Have a project in mind or need professional engineering expertise? Get in touch and let's discuss how we can work together.",

    contactInfo: {
      title: "Contact Information",
      email: {
        label: "Email",
        value: "hello@structura.com",
        href: "mailto:hello@structura.com",
      },
      phone: {
        label: "Phone",
        value: "+98 914 491 4796",
        href: "tel:+989144914796",
      },
      location: {
        label: "Location",
        value: "Marand, East Azerbaijan, Iran",
      },
    },

    social: {
      title: "Connect With Me",
      description: "Follow my work or get in touch through social media.",
      instagram: {
        label: "Instagram",
        username: "@yourusername",
        href: "https://instagram.com/yourusername",
      },
      telegram: {
        label: "Telegram",
        username: "@yourusername",
        href: "https://t.me/yourusername",
      },
      whatsapp: {
        label: "WhatsApp",
        username: "WhatsApp",
        href: "https://wa.me/989144914796",
      },
    },

    emailCta: {
      title: "Have a project in mind?",
      description:
        "Send me an email and tell me a little about your project, goals, and requirements.",
      button: "Send an Email",
    },

    availability: {
      label: "Available for",
      value: "New Projects & Collaborations",
    },
  },

  about: {
    eyebrow: "About Me",

    title: "Engineering with purpose.",
    number: "01",

    description:
      "I approach civil engineering with a focus on precision, practical problem-solving, and creating structures that stand the test of time.",

    imageAlt: "Reza Zaearkabeh, Civil Engineer",

    roleLabel: "Profession",
    role: "Civil Engineer",

    locationLabel: "Based In",
    location: "Marand, Iran",

    link: "More About Me",

    stats: [
      {
        value: "+8",
        label: "Years Experience",
      },
      {
        value: "24",
        label: "Projects",
      },
      {
        value: "12",
        label: "Collaborations",
      },
    ],
  },

  projectsPage: {
    eyebrow: "Selected Work",

    title: "Projects",

    description:
      "A selection of engineering projects developed with a focus on precision, efficiency, practical execution, and long-term performance.",

    allProjects: "All Projects",
    projectDetails: "Project Details",
    overview: "Project Overview",
    gallery: "Project Gallery",
    backToProjects: "Back to Projects",
    nextProject: "Next Project",

    filters: {
      all: "All Projects",
      ministryOfInterior: "Ministry of Interior",
      judiciaryExperts: "Judicial Experts Center",
      postgraduate: "Postgraduate Studies",
      engineeringOrganization: "Engineering Organization",
    },

    labels: {
      year: "Year",
      category: "Category",
      location: "Location",
      client: "Client",
      scope: "Scope",
      status: "Status",
      area: "Area",
    },

    projects: [
      {
        slug: "crown-business-center",

        year: "2024",

        title: "Crown Business Center",

        category: "Commercial",

        location: "London, UK",

        client: "Private Client",

        scope: "Structural Engineering & Design",

        status: "Completed",

        area: "4,200 m²",

        description:
          "A modern commercial development designed with a strong focus on structural efficiency, flexibility, durability, and long-term performance.",

        overview:
          "The Crown Business Center was developed as a contemporary commercial project requiring a balanced approach between architectural flexibility and structural performance. The engineering strategy focused on creating an efficient structural system capable of supporting open and adaptable interior spaces while maintaining safety, constructability, and long-term durability.",

        image: "/images/projects/project-1.jpg",

        gallery: [
          "/images/projects/project-1.jpg",
          "/images/projects/project-1-2.jpg",
          "/images/projects/project-1-3.jpg",
          "/images/projects/project-1-4.jpg",
        ],
      },

      {
        slug: "harbor-bridge",

        year: "2023",

        title: "Harbor Bridge",

        category: "Infrastructure",

        location: "Sydney, Australia",

        client: "Infrastructure Development",

        scope: "Structural Design & Engineering",

        status: "Completed",

        area: "680 m",

        description:
          "An infrastructure project combining structural precision with resilient engineering solutions for demanding environmental conditions.",

        overview:
          "Harbor Bridge was developed with particular attention to structural reliability, environmental resistance, and long-term performance. The engineering process involved careful coordination between structural requirements, material selection, and practical construction considerations.",

        image: "/images/projects/project-2.jpg",

        gallery: [
          "/images/projects/project-2.jpg",
          "/images/projects/project-2-2.jpg",
          "/images/projects/project-2-3.jpg",
          "/images/projects/project-2-4.jpg",
        ],
      },

      {
        slug: "nordic-office-tower",

        year: "2024",

        title: "Nordic Office Tower",

        category: "Commercial",

        location: "Stockholm, Sweden",

        client: "Private Developer",

        scope: "Structural Engineering",

        status: "Completed",

        area: "12,500 m²",

        description:
          "A contemporary office tower engineered with a focus on structural performance, safety, sustainability, and efficient construction.",

        overview:
          "The Nordic Office Tower required a structural strategy capable of supporting a multi-storey commercial building while preserving architectural flexibility. The final approach focused on efficient load distribution, construction feasibility, and long-term building performance.",

        image: "/images/projects/project-3.jpg",

        gallery: [
          "/images/projects/project-3.jpg",
          "/images/projects/project-3-2.jpg",
          "/images/projects/project-3-3.jpg",
          "/images/projects/project-3-4.jpg",
        ],
      },
    ],
  },

  servicesPage: {
    eyebrow: "What I Do",

    title: "Engineering Services",

    description:
      "Professional engineering services focused on structural integrity, practical solutions, efficient execution, and long-term project performance.",

    services: [
      {
        number: "01",

        title: "Structural Engineering",

        shortDescription:
          "Innovative structural designs built for safety, efficiency, and long-term performance.",

        description:
          "Providing structural engineering solutions for residential, commercial, and infrastructure projects, with careful attention to safety, functionality, constructability, and durability.",

        features: [
          "Structural analysis and design",
          "Concrete and steel structures",
          "Foundation design",
          "Seismic considerations",
        ],

        icon: Building2,
      },

      {
        number: "02",

        title: "Engineering Consulting",

        shortDescription:
          "Expert guidance for complex engineering and construction challenges.",

        description:
          "Professional consulting services to support informed decision-making throughout planning, design, construction, and project development stages.",

        features: [
          "Technical consulting",
          "Feasibility studies",
          "Engineering evaluation",
          "Problem-solving strategies",
        ],

        icon: Briefcase,
      },

      {
        number: "03",

        title: "Project Management",

        shortDescription:
          "Coordinated project management from planning to successful delivery.",

        description:
          "Managing engineering and construction projects with a focus on coordination, scheduling, quality control, communication, and efficient project execution.",

        features: [
          "Project planning",
          "Schedule coordination",
          "Team management",
          "Quality supervision",
        ],

        icon: LayoutDashboard,
      },

      {
        number: "04",

        title: "Assessment & Audit",

        shortDescription:
          "Evaluating structural performance, safety, and project compliance.",

        description:
          "Comprehensive assessment and technical review services to identify potential issues, evaluate existing conditions, and support reliable engineering decisions.",

        features: [
          "Structural inspection",
          "Technical assessment",
          "Safety evaluation",
          "Engineering reports",
        ],

        icon: ClipboardCheck,
      },
    ],

    process: {
      eyebrow: "How I Work",

      title: "A Clear Engineering Process",

      steps: [
        {
          number: "01",
          title: "Understand",
          description:
            "Understanding the project requirements, challenges, objectives, and technical conditions.",
        },

        {
          number: "02",
          title: "Analyze",
          description:
            "Evaluating technical requirements and developing the most appropriate engineering approach.",
        },

        {
          number: "03",
          title: "Develop",
          description:
            "Creating detailed and practical solutions with attention to performance and execution.",
        },

        {
          number: "04",
          title: "Deliver",
          description:
            "Supporting successful implementation with precision, coordination, and professional oversight.",
        },
      ],
    },

    cta: {
      title: "Have a Project in Mind?",

      description:
        "Let's discuss your project requirements and find the right engineering solution.",

      button: "Get in Touch",
    },
  },

  credentialsPage: {
    eyebrow: "Credentials & Achievements",

    title: "Experience Backed by Expertise",

    description:
      "Professional qualifications, certifications and achievements that reflect years of engineering experience and continuous professional development.",

    filters: {
      all: "All",
      certification: "Certifications",
      qualification: "Qualifications",
      achievement: "Achievements",
      recognition: "Recognition",
    },

    items: [
      {
        id: "structural-certification",

        year: "2024",

        type: "Certification",

        title: "Professional Structural Engineering Certification",

        issuer: "International Engineering Council",

        description:
          "Advanced professional certification in structural engineering and design.",

        fullDescription:
          "This certification recognizes advanced professional knowledge and practical expertise in structural engineering, structural analysis, and engineering design.",

        image: "/images/credentials/certification-01.jpg",
      },
    ],
  },
} as const;



