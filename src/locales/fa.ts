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

export const fa = {
  fullName: "رضا زائرکعبه",
  nav: [
    {
      title: "خانه",
      href: "",
      icon: Home,
    },
    {
      title: "تماس با من",
      href: "/contact",
      icon: Phone,
    },
    {
      title: "درباره من",
      href: "/about",
      icon: Info,
    },
    {
      title: "پروژه‌ها",
      href: "/projects",
      icon: FolderKanban,
    },
    {
      title: "خدمات",
      href: "/services",
      icon: HardHat,
    },
    {
      title: "مدارک و افتخارات",
      href: "/Credentials",
      icon: IdCard,
    },
  ],

  hero: {
    eyebrow: "مهندس عمران",
    title: "ساختن آینده، با مهندسی دقیق",
    description:
      "طراحی، اجرا و مدیریت پروژه‌های عمرانی \nبا تمرکز بر کیفیت،\n دقت و نگاه حرفه‌ای.",
    primaryCta: "مشاهده پروژه‌ها",
    secondaryCta: "تماس با من",
  },

  projectsSection: {
    title: "پروژه‌ها",
    cta: "مشاهده همه",

    projects: [
      {
        year: "۱۴۰۳",
        title: "مرکز تجاری کراون",
        description:
          "توسعه تجاری مدرن طراحی شده برای کارایی، دوام و عملکرد بلندمدت.",
        category: "تجاری",
        location: "لندن، انگلستان",
        image: "/images/projects/project-1.jpg",
      },
      {
        year: "۱۴۰۲",
        title: "پل بندرگاه",
        description:
          "پروژه زیرساختی پیشرفته که دقت سازه‌ای را با مهندسی تاب‌آور ترکیب می‌کند.",
        category: "زیرساخت",
        location: "سیدنی، استرالیا",
        image: "/images/projects/project-2.jpg",
      },
      {
        year: "۱۴۰۳",
        title: "برج اداری نوردیک",
        description:
          "برج اداری معاصر که با تمرکز بر عملکرد، ایمنی و پایداری مهندسی شده است.",
        category: "تجاری",
        location: "استکهلم، سوئد",
        image: "/images/projects/project-3.jpg",
      },
    ],
  },

  servicesSection: {
    title: "سرویس ها",
    cta: "مشاهده همه",

    services: [
      {
        title: "مهندسی سازه",
        description:
          "طراحی‌های سازه‌ای نوآورانه که در برابر گذر زمان ایستادگی می‌کنند.",
        icon: Building2,
      },
      {
        title: "مشاوره",
        description: "مشاوره‌های تخصصی برای چالش‌های پیچیده مهندسی.",
        icon: Briefcase,
      },
      {
        title: "مدیریت پروژه",
        description: "مدیریت صفر تا صد برای تضمین تحویل روان پروژه.",
        icon: LayoutDashboard,
      },
      {
        title: "ارزیابی و بازرسی",
        description: "تضمین ایمنی، انطباق و عملکرد در هر مرحله.",
        icon: ClipboardCheck,
      },
    ],
  },

  contact: {
    title: "در تماس باشیم",
    description: "برای همکاری یا دریافت اطلاعات بیشتر با من در ارتباط باشید.",
    button: "تماس با من",
  },

  stats: [
    { value: "۵۰+", label: "پروژه‌ها" },
    { value: "۱۰+", label: "سال فعالیت" },
    { value: "۵+", label: "شهرها" },
    { value: "۳۵+", label: "مشتریان" },
  ],

  home: {
    about: {
      eyebrow: "درباره استراکچرا",

      title: "مهندسی برای ساختن آینده‌ای بهتر",

      description:
        "با بیش از ۱۸ سال تجربه، در کنار کارفرمایان و مجموعه‌های مختلف، سازه‌هایی طراحی کرده‌ایم که برای ماندگاری و عملکرد بلندمدت ساخته شده‌اند.",

      learnMore: "بیشتر بدانید",

      stats: {
        experience: {
          value: "+۱۸",
          label: "سال تجربه",
        },

        projects: {
          value: "+۲۵۰",
          label: "پروژه اجراشده",
        },

        engineers: {
          value: "۳۵",
          label: "مهندس متخصص",
        },
      },
    },

    process: {
      eyebrow: "فرآیند مهندسی ما",

      title: "رویکردی منسجم و هدفمند",

      viewFullProcess: "مشاهده فرآیند کامل",

      steps: [
        {
          number: "۰۱",
          title: "شناخت",
          description: "درک دقیق چشم‌انداز، نیازها و اهداف پروژه شما.",
        },
        {
          number: "۰۲",
          title: "طراحی",
          description: "ارائه راهکارهای نوآورانه، ایمن و کارآمد مهندسی.",
        },
        {
          number: "۰۳",
          title: "توسعه",
          description: "برنامه‌ریزی دقیق و همکاری مستمر در تمام مراحل پروژه.",
        },
        {
          number: "۰۴",
          title: "تحویل",
          description: "تحویل به‌موقع پروژه با بالاترین دقت و کیفیت.",
        },
      ],
    },
    credentials: {
      eyebrow: "مدارک و افتخارات",

      title: "تخصصی ساخته‌شده بر پایه\nتجربه و اعتبار",

      description:
        "مجموعه‌ای از مدارک حرفه‌ای، گواهینامه‌ها و افتخارات که تعهد ما به کیفیت و تعالی در مهندسی را نشان می‌دهد.",

      viewAll: "مشاهده همه مدارک",

      items: [
        {
          year: "۱۴۰۳",
          type: "گواهینامه",
          title: "گواهینامه حرفه‌ای مهندسی سازه",
          issuer: "شورای بین‌المللی مهندسی",
          description: "گواهینامه تخصصی در زمینه مهندسی و طراحی سازه.",
          image: "/images/credentials/certification-01.jpg",
        },
        {
          year: "۱۴۰۲",
          type: "افتخار",
          title: "جایزه تعالی در مهندسی",
          issuer: "انجمن جهانی مهندسی",
          description:
            "تقدیر از دستاوردهای برجسته در اجرای پروژه‌های نوآورانه مهندسی.",
          image: "/images/credentials/award-01.jpg",
        },
        {
          year: "۱۴۰۱",
          type: "مدرک تخصصی",
          title: "مدیریت پیشرفته پروژه",
          issuer: "مؤسسه مدیریت مهندسی",
          description:
            "مدرک حرفه‌ای با تمرکز بر مدیریت پروژه‌های پیچیده مهندسی.",
          image: "/images/credentials/certification-02.jpg",
        },
        {
          year: "۱۴۰۰",
          type: "تقدیرنامه",
          title: "دستاورد حرفه‌ای برجسته",
          issuer: "انجمن ساخت‌وساز اروپا",
          description:
            "تقدیر از عملکرد حرفه‌ای و موفقیت در اجرای پروژه‌های مهندسی.",
          image: "/images/credentials/award-02.jpg",
        },
      ],
    },

    testimonials: {
      eyebrow: "دیدگاه کارفرمایان",

      title: "اعتماد رهبران",

      items: [
        {
          quote:
            "تخصص و تعهد تیم استراکچرا به کیفیت، نقش مهمی در موفقیت پروژه پیچیده ما داشت.",

          name: "جیمز پیترسون",

          role: "مدیرعامل، BuildCore",

          image: "/images/testimonials/client-1.jpg",
        },
      ],
    },

    insights: {
      eyebrow: "آخرین مطالب",

      title: "از مجله مهندسی",

      viewAll: "مشاهده همه مطالب",

      readMore: "مطالعه مطلب",

      items: [
        {
          date: "۲۲ اردیبهشت ۱۴۰۳",

          title: "آینده طراحی پایدار",

          image: "/images/blog/blog-1.jpg",
        },
        {
          date: "۷ اردیبهشت ۱۴۰۳",

          title: "نوآوری‌ها در مهندسی سازه",

          image: "/images/blog/blog-2.jpg",
        },
        {
          date: "۲۶ فروردین ۱۴۰۳",

          title: "ساخت جوامعی مقاوم برای آینده",

          image: "/images/blog/blog-3.jpg",
        },
      ],
    },

    cta: {
      title: "بیایید چیزی بزرگ بسازیم",

      projectQuestion: "پروژه‌ای در ذهن دارید؟",

      description: "بیایید با هم چیزی فراتر از انتظار خلق کنیم.",

      form: {
        name: "نام شما",

        email: "آدرس ایمیل",

        projectType: "نوع پروژه",

        submit: "شروع گفتگو",

        projectTypes: {
          commercial: "تجاری",

          infrastructure: "زیرساخت",

          residential: "مسکونی",
        },
      },
    },

    footer: {
      brand: {
        name: "استراکچرا",

        subtitle: "مشاور مهندسی عمران",

        description:
          "ما برای ساختن آینده‌ای بهتر از طریق نوآوری، ایمنی و همکاری تلاش می‌کنیم.",
      },

      company: {
        title: "شرکت",

        links: [
          {
            label: "درباره ما",
            href: "/about",
          },
          {
            label: "تماس یا ما",
            href: "/team",
          },
        ],
      },

      services: {
        title: "خدمات",

        links: [
          {
            label: "مهندسی سازه",
          },
          {
            label: "مشاوره مهندسی",
          },
          {
            label: "مدیریت پروژه",
          },
          {
            label: "ارزیابی و ممیزی",
          },
        ],
      },

      resources: {
        title: "منابع",
        links: [
          {
            label: "مقالات",
            href: "/blog",
          },

          {
            label: "سؤالات متداول",
            href: "/faq",
          },
        ],
      },

      contact: {
        title: "ارتباط با ما",

        email: "hello@structura.com",

        phone: "+989144914796",

        address: [" خیابان امام خمینی ", "مرند، آذربایجان شرقی"],
      },

      copyright:
        "© ۲۰۲۴ استراکچرا، مهندسی و مشاوره عمران. تمامی حقوق محفوظ است.",

      privacy: "حریم خصوصی",

      terms: "شرایط استفاده",
    },
  },

  contactPage: {
    eyebrow: "ارتباط با من",
    title: "بیایید با هم همکاری کنیم",
    description:
      "اگر پروژه‌ای در ذهن دارید یا به خدمات تخصصی مهندسی عمران نیاز دارید، خوشحال می‌شوم درباره پروژه و نیازهایتان گفتگو کنیم.",

    contactInfo: {
      title: "اطلاعات تماس",
      email: {
        label: "ایمیل",
        value: "hello@structura.com",
        href: "mailto:hello@structura.com",
      },
      phone: {
        label: "شماره تماس",
        value: "+98 914 491 4796",
        href: "tel:+989144914796",
      },
      location: {
        label: "موقعیت",
        value: "مرند، آذربایجان شرقی، ایران",
      },
    },

    social: {
      title: "شبکه‌های اجتماعی",
      description:
        "برای دنبال کردن فعالیت‌ها و ارتباط مستقیم، می‌توانید از شبکه‌های اجتماعی با من در ارتباط باشید.",
      instagram: {
        label: "اینستاگرام",
        username: "@yourusername",
        href: "https://instagram.com/yourusername",
      },
      telegram: {
        label: "تلگرام",
        username: "@yourusername",
        href: "https://t.me/yourusername",
      },
      whatsapp: {
        label: "واتساپ",
        username: "WhatsApp",
        href: "https://wa.me/989144914796",
      },
    },

    emailCta: {
      title: "پروژه‌ای در ذهن دارید؟",
      description:
        "از طریق ایمیل درباره پروژه، اهداف و نیازهایتان برایم بنویسید تا بتوانیم درباره همکاری صحبت کنیم.",
      button: "ارسال ایمیل",
    },

    availability: {
      label: "آماده برای",
      value: "پروژه‌های جدید و همکاری",
    },
  },

  about: {
    eyebrow: "درباره من",
    number: "01",

    title: "مهندسی با هدف.",

    description:
      "رویکرد من به مهندسی عمران بر پایه دقت، حل مسائل به‌صورت کاربردی و خلق سازه‌هایی است که برای ماندگاری طراحی شده‌اند.",

    imageAlt: "رضا زعفرکاهی، مهندس عمران",

    roleLabel: "حرفه",
    role: "مهندس عمران",

    locationLabel: "موقعیت",
    location: "مرند، ایران",

    link: "درباره من بیشتر بدانید",

    stats: [
      {
        value: "+۸",
        label: "سال تجربه",
      },
      {
        value: "۲۴",
        label: "پروژه",
      },
      {
        value: "۱۲",
        label: "همکاری",
      },
    ],
  },

  projectsPage: {
    eyebrow: "پروژه‌های منتخب",

    title: "پروژه‌ها",

    description:
      "مجموعه‌ای از پروژه‌های مهندسی با تمرکز بر دقت، کارایی، اجرای عملی و عملکرد بلندمدت.",

    allProjects: "همه پروژه‌ها",
    projectDetails: "جزئیات پروژه",
    overview: "معرفی پروژه",
    gallery: "گالری پروژه",
    backToProjects: "بازگشت به پروژه‌ها",
    nextProject: "پروژه بعدی",

    filters: {
      all: "همه پروژه‌ها",
      ministryOfInterior: "وزارت کشور",
      judiciaryExperts: "مرکز کارشناسان رسمی قوه قضائیه",
      postgraduate: "تحصیلات تکمیلی",
      engineeringOrganization: "سازمان نظام مهندسی",
    },

    labels: {
      year: "سال",
      category: "دسته‌بندی",
      location: "موقعیت",
      client: "کارفرما",
      scope: "حوزه فعالیت",
      status: "وضعیت",
      area: "مساحت",
    },

    projects: [
      {
        slug: "crown-business-center",

        year: "۱۴۰۳",

        title: "مرکز تجاری کرون",

        category: "تجاری",

        location: "لندن، انگلستان",

        client: "کارفرمای خصوصی",

        scope: "طراحی و مهندسی سازه",

        status: "تکمیل شده",

        area: "۴٬۲۰۰ متر مربع",

        description:
          "یک مجموعه تجاری مدرن که با تمرکز بر کارایی سازه، انعطاف‌پذیری، دوام و عملکرد بلندمدت طراحی شده است.",

        overview:
          "مرکز تجاری کرون به‌عنوان یک پروژه تجاری معاصر توسعه یافت که نیازمند ایجاد تعادل میان انعطاف‌پذیری معماری و عملکرد سازه‌ای بود. رویکرد مهندسی پروژه بر طراحی سیستمی کارآمد متمرکز بود که بتواند فضاهای داخلی باز و قابل تغییر را پشتیبانی کرده و در عین حال ایمنی، قابلیت اجرا و دوام بلندمدت سازه را تضمین کند.",

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

        year: "۱۴۰۲",

        title: "پل هاربر",

        category: "زیرساخت",

        location: "سیدنی، استرالیا",

        client: "مجموعه توسعه زیرساخت",

        scope: "طراحی و مهندسی سازه",

        status: "تکمیل شده",

        area: "۶۸۰ متر",

        description:
          "یک پروژه زیرساختی با ترکیبی از دقت سازه‌ای و راهکارهای مهندسی مقاوم برای شرایط محیطی پیچیده.",

        overview:
          "پل هاربر با توجه ویژه به قابلیت اطمینان سازه، مقاومت در برابر شرایط محیطی و عملکرد بلندمدت طراحی شد. فرایند مهندسی پروژه شامل هماهنگی دقیق میان نیازهای سازه‌ای، انتخاب مصالح و ملاحظات اجرایی بود.",

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

        year: "۱۴۰۳",

        title: "برج اداری نوردیک",

        category: "تجاری",

        location: "استکهلم، سوئد",

        client: "سرمایه‌گذار خصوصی",

        scope: "مهندسی سازه",

        status: "تکمیل شده",

        area: "۱۲٬۵۰۰ متر مربع",

        description:
          "یک برج اداری معاصر که با تمرکز بر عملکرد سازه، ایمنی، پایداری و اجرای بهینه طراحی شده است.",

        overview:
          "برج اداری نوردیک نیازمند رویکردی سازه‌ای بود که بتواند یک ساختمان تجاری چندطبقه را پشتیبانی کرده و در عین حال انعطاف‌پذیری معماری را حفظ کند. راهکار نهایی بر توزیع بهینه بار، امکان‌پذیری اجرا و عملکرد بلندمدت ساختمان متمرکز بود.",

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
    eyebrow: "حوزه فعالیت",

    title: "خدمات مهندسی",

    description:
      "ارائه خدمات مهندسی حرفه‌ای با تمرکز بر ایمنی سازه، راهکارهای عملی، اجرای بهینه و عملکرد بلندمدت پروژه.",

    services: [
      {
        number: "۰۱",

        title: "مهندسی سازه",

        shortDescription:
          "طراحی سازه‌های ایمن، کارآمد و پایدار با نگاه بلندمدت.",

        description:
          "ارائه راهکارهای مهندسی سازه برای پروژه‌های مسکونی، تجاری و زیرساختی با توجه به ایمنی، عملکرد، قابلیت اجرا و دوام سازه.",

        features: [
          "تحلیل و طراحی سازه",
          "سازه‌های بتنی و فولادی",
          "طراحی فونداسیون",
          "بررسی ملاحظات لرزه‌ای",
        ],

        icon: Building2,
      },

      {
        number: "۰۲",

        title: "مشاوره مهندسی",

        shortDescription:
          "ارائه راهکار و مشاوره تخصصی برای چالش‌های مهندسی و اجرایی.",

        description:
          "ارائه خدمات مشاوره مهندسی برای کمک به تصمیم‌گیری صحیح در مراحل برنامه‌ریزی، طراحی، اجرا و توسعه پروژه.",

        features: [
          "مشاوره فنی",
          "مطالعات امکان‌سنجی",
          "ارزیابی مهندسی",
          "ارائه راهکارهای اجرایی",
        ],

        icon: Briefcase,
      },

      {
        number: "۰۳",

        title: "مدیریت پروژه",

        shortDescription:
          "مدیریت و هماهنگی پروژه از برنامه‌ریزی تا تحویل نهایی.",

        description:
          "مدیریت پروژه‌های عمرانی و مهندسی با تمرکز بر هماهنگی، زمان‌بندی، کنترل کیفیت، ارتباطات و اجرای مؤثر پروژه.",

        features: [
          "برنامه‌ریزی پروژه",
          "هماهنگی زمان‌بندی",
          "مدیریت تیم",
          "نظارت بر کیفیت",
        ],

        icon: LayoutDashboard,
      },

      {
        number: "۰۴",

        title: "ارزیابی و بررسی فنی",

        shortDescription: "بررسی عملکرد، ایمنی و وضعیت فنی سازه‌ها و پروژه‌ها.",

        description:
          "ارائه خدمات ارزیابی و بررسی فنی برای شناسایی مشکلات احتمالی، تحلیل وضعیت موجود و کمک به اتخاذ تصمیم‌های مهندسی مطمئن.",

        features: [
          "بازرسی سازه",
          "ارزیابی فنی",
          "بررسی ایمنی",
          "تهیه گزارش مهندسی",
        ],

        icon: ClipboardCheck,
      },
    ],

    process: {
      eyebrow: "نحوه همکاری",

      title: "یک فرایند مهندسی شفاف",

      steps: [
        {
          number: "۰۱",

          title: "شناخت",

          description: "بررسی نیازها، اهداف، چالش‌ها و شرایط فنی پروژه.",
        },

        {
          number: "۰۲",

          title: "تحلیل",

          description: "ارزیابی نیازهای فنی و انتخاب مناسب‌ترین رویکرد مهندسی.",
        },

        {
          number: "۰۳",

          title: "توسعه راهکار",

          description:
            "طراحی راهکارهای دقیق و عملی با توجه به عملکرد و قابلیت اجرا.",
        },

        {
          number: "۰۴",

          title: "اجرا و تحویل",

          description:
            "پشتیبانی از اجرای موفق پروژه با دقت، هماهنگی و نظارت حرفه‌ای.",
        },
      ],
    },

    cta: {
      title: "پروژه‌ای در ذهن دارید؟",

      description:
        "بیایید درباره نیازهای پروژه شما صحبت کنیم و بهترین راهکار مهندسی را پیدا کنیم.",

      button: "تماس با من",
    },
  },

  credentialsPage: {
    eyebrow: "مدارک و افتخارات",

    title: "تجربه‌ای مبتنی بر دانش و تخصص",

    description:
      "مجموعه‌ای از مدارک حرفه‌ای، گواهینامه‌ها، صلاحیت‌ها و افتخاراتی که نشان‌دهنده تجربه مهندسی و مسیر توسعه حرفه‌ای هستند.",

    filters: {
      all: "همه",
      certification: "گواهینامه‌ها",
      qualification: "صلاحیت‌ها",
      achievement: "دستاوردها",
      recognition: "تقدیرها",
    },

    stats: [
      {
        value: "+۱۰",
        label: "سال تجربه",
      },
      {
        value: "۱۲",
        label: "گواهینامه حرفه‌ای",
      },
      {
        value: "+۵۰",
        label: "پروژه",
      },
      {
        value: "۸",
        label: "افتخار و تقدیر",
      },
    ],

    items: [
      {
        id: "structural-certification",

        year: "۱۴۰۳",

        type: "certification",

        title: "گواهینامه حرفه‌ای مهندسی سازه",

        issuer: "شورای بین‌المللی مهندسی",

        description:
          "گواهینامه تخصصی در زمینه مهندسی سازه، تحلیل و طراحی سازه‌های مهندسی.",

        fullDescription:
          "این گواهینامه نشان‌دهنده دانش و توانمندی حرفه‌ای در زمینه تحلیل سازه، طراحی سیستم‌های سازه‌ای و ارائه راهکارهای مهندسی با توجه به الزامات ایمنی، عملکرد و قابلیت اجرا است.",

        image: "/images/credentials/certification-01.jpg",
      },

      {
        id: "engineering-excellence-award",

        year: "۱۴۰۲",

        type: "achievement",

        title: "تقدیرنامه برتری در مهندسی",

        issuer: "انجمن جهانی مهندسی",

        description:
          "تقدیر از مشارکت حرفه‌ای و ارائه راهکارهای نوآورانه در پروژه‌های مهندسی.",

        fullDescription:
          "این تقدیرنامه به دلیل مشارکت مؤثر در توسعه و اجرای پروژه‌های مهندسی و ارائه راهکارهای فنی با کیفیت، دقت و رویکرد حرفه‌ای اعطا شده است.",

        image: "/images/credentials/award-01.jpg",
      },

      {
        id: "project-management-qualification",

        year: "۱۴۰۱",

        type: "qualification",

        title: "صلاحیت حرفه‌ای مدیریت پروژه",

        issuer: "مؤسسه مدیریت مهندسی",

        description:
          "مدرک تخصصی در زمینه مدیریت و برنامه‌ریزی پروژه‌های پیچیده مهندسی.",

        fullDescription:
          "این صلاحیت حرفه‌ای بر مهارت‌های برنامه‌ریزی، مدیریت منابع، هماهنگی تیم‌ها، کنترل زمان و نظارت بر اجرای پروژه‌های مهندسی تمرکز دارد.",

        image: "/images/credentials/certification-02.jpg",
      },

      {
        id: "professional-recognition",

        year: "۱۴۰۰",

        type: "recognition",

        title: "تقدیر از دستاورد حرفه‌ای",

        issuer: "انجمن مهندسی و ساخت اروپا",

        description:
          "تقدیر از فعالیت حرفه‌ای و مشارکت مؤثر در حوزه مهندسی و ساخت.",

        fullDescription:
          "این تقدیر به پاس فعالیت مستمر حرفه‌ای، رعایت استانداردهای مهندسی و مشارکت در توسعه راهکارهای مؤثر در پروژه‌های عمرانی و ساختمانی ارائه شده است.",

        image: "/images/credentials/award-02.jpg",
      },

      {
        id: "advanced-structural-analysis",

        year: "۱۳۹۹",

        type: "certification",

        title: "گواهینامه تحلیل پیشرفته سازه",

        issuer: "مرکز آموزش مهندسی سازه",

        description:
          "دوره تخصصی تحلیل و بررسی رفتار سازه‌ها تحت شرایط و بارگذاری‌های مختلف.",

        fullDescription:
          "این گواهینامه بر تحلیل پیشرفته رفتار سازه‌ها، بررسی سیستم‌های باربر، ارزیابی عملکرد و استفاده از روش‌های تحلیلی برای دستیابی به طراحی ایمن و بهینه تمرکز دارد.",

        image: "/images/credentials/certification-03.jpg",
      },

      {
        id: "construction-professional-recognition",

        year: "۱۳۹۸",

        type: "recognition",

        title: "تقدیرنامه فعالیت حرفه‌ای در ساخت",

        issuer: "انجمن متخصصان صنعت ساختمان",

        description:
          "تقدیر از فعالیت حرفه‌ای و مشارکت در اجرای پروژه‌های ساختمانی و عمرانی.",

        fullDescription:
          "این تقدیرنامه به دلیل همکاری حرفه‌ای در پروژه‌های ساختمانی، توجه به کیفیت اجرا، رعایت اصول مهندسی و مشارکت مؤثر در فرایند ساخت ارائه شده است.",

        image: "/images/credentials/award-03.jpg",
      },
    ],
  },
} as const;
