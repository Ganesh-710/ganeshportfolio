/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Ganesh Ravindran",
  title: "Hi there, I'm Ganesh Ravindran",
  subTitle: emoji(
    "A passionate Full Stack Data Scientist & Software Engineer 📊 with about Two years of industry experience. Driven by passion and intellectual curiosity, I am pursuing an MSc in Data Science at the University of Essex."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1X-Va5PeY5WN35Iwnc2NscSJOfwQDMdxI/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Ganesh-710",
  linkedin: "https://www.linkedin.com/in/ganeshcv/",
  gmail: "ganeshelon@gmail.com",
  // kaggle: "https://github.com/Ganesh-710",
  // instagram: "https://www.facebook.com/saad.pasta7",
  // // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DATA SCIENTIST AND SOFTWARE ENGINEER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Machine Learning/AI/Data Science: Machine Learning, Neural Networks & Deep Learning, Natural Language Processing , Exploratory Data Analysis, , Data Visualization, A/B Testing, Hypothesis Testing, Statistical Modelling, Time Series Analysis and Forecasting, Text/Sentiment Analysis, Data Science Project Lifecycle."
    ),
    emoji("⚡ Programming Languages: Python, R Language, Java 8+, JavaScript (ES6+),PHP 5.6+ "),
    emoji(
      "⚡ Database Administration: SQL (MYSQL, Postgres), No-SQL (MongoDB)."
    ),
    emoji(
      "⚡ Technologies / Libraries: NumPy, Pandas, Scikit-Learn, TensorFlow, NLTK, Matplotlib, Seaborn, Selenium, Scrapy, Beautiful soap"
    ),
    emoji(
      "⚡ Tools And Platforms: MS Office (Excel, Word, PowerPoint), AWS, CI/CD, Git & GitHub, Linux, Vs code, Jupyter notebooks, PyCharm."
    ),
    emoji(
      "⚡ Web Technologies: Flask, Django, jQuery, HTML 5 , CSS 3(Scss) , Bootstrap 4."
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    // {
    //   skillName: "PYTHON",
    //   fontAwesomeClassname: "fab fa-python"
    // },
    // {
    //   skillName: "SQL",
    //   fontAwesomeClassname: "fas fa-database"
    // },
    // {
    //   skillName: "R Language",
    //   fontAwesomeClassname: "fab fa-r-project"
    // },
    // {
    //   skillName: "Linux",
    //   fontAwesomeClassname: "fab fa-linux"
    // },
    // {
    //   skillName: "GitHub",
    //   fontAwesomeClassname: "fab fa-github"
    // },
    // {
    //   skillName: "reactjs",
    //   fontAwesomeClassname: "fab fa-react"
    // },
    // {
    //   skillName: "nodejs",
    //   fontAwesomeClassname: "fab fa-node"
    // },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    // {
    //   skillName: "npm",
    //   fontAwesomeClassname: "fab fa-npm"
    // },
    // {
    //   skillName: "sql-database",
    //   fontAwesomeClassname: "fas fa-database"
    // },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Uiversity of Essex",
      logo: require("./assets/images/EssexLogo.jpg"),
      subHeader: "Master of Science in Data Science",
      duration: "Oct 2021 - Oct 2023",
      desc: ["Modules Include : Machine Learning, Deep Learning, Big data, Natural Language Processing, Data Science and Decision making, Applied Statistics, Modelling Experimental Data, Research Methods.",
             ],
      descBullets: [
        "Founding member University of Essex Artificial Intelligence society"
        // "Design and Application of a Machine Learning System.",
        // "Time-series analysis & Forecasting in Deep Learning (Python, Tensorflow, Keras)",
        // "Sentiment analysis using Deep Learning (Python, PyTorch, NLTK)",
        // "Game Automation using Deep Learning",
        // "Sentence generation using natural language models.",
      ]
    },
    {
      schoolName: "Anna University",
      logo: require("./assets/images/annaUni.png"),
      subHeader: "Bachelor of Engineering in Electronics and Communication",
      duration: "September 2013 - April 2017",
      desc: "Modules Include: Probability and Random Processes, Linear Algebra and Partial Differential Equations, Data Structures and Algorithms, Object Oriented Programming, Computer Networks, Computer Architecture, Digital signal and Image Processing, Speech Processing. ",
      descBullets: [
        "Underwent in-plant training at the Indian government’s Council for Scientific and    Industrial Research -Central Electronics Engineering Research Institute.",
        "Completed a short-term internship from chase technologies, India on embedded systems.",
        "Coordinated a national-level workshop on Electronics and communication systems at Rajalakshmi institute of technology, India."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Data Engineering",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Lateshipment.com",
      companylogo: require("./assets/images/Lateshipment.comLogo.jpg"),
      date: "Aug 2019 – 2021",
      desc: "B2B Cloud based Carrier analytics Software company",
      descBullets: [
        "Worked in a hyper-growth start-up with a team in an agile environment to build and maintain a scalable seamless Real-time shipments tracking system that gathers 130 real-time data points on millions of packages a day all around the world.",
        "Automated data collection process by utilizing APIS, Automation tools and, web scraping frameworks to gather data from various sources for development and analytics purposes.",
        "Replaced existing Apis with modern webhooks which increased the data collection frequency and reduced time complexity and computational cost by 40%.",
        "Created Microservices to integrate the system with CRM, E-Commerce, Help-desk, etc platforms such as Shopify, Salesforce, Zoho, Freshworks which increased user engagement by a significant margin.",
      ]
    },
    {
      role: "Software Developer intern",
      company: "Surya Informatics",
      companylogo: require("./assets/images/surya InformaticsLogo.png"),
      date: "Sep 2018 – Dec 2018",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets:[
        "Designed and developed a full-stack web application accessible to all the employees in the company to monitor user engagement and analytics.",
        "Worked in a team to Build an SMS and email notification system for an e-commerce system to improve customer experience."
      ]
    },
    // {
    //   role: "Software Engineer Intern",
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/machinel.webp"),
      projectName: "Machine Learning",
      projectDesc: "projects",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/Ganesh-710/machine-learning"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/deepl.jpeg"),
      projectName: "Deep Learning",
      projectDesc: "projects",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/Ganesh-710/deep-learning"
        }
      ]
    },
    {
      image: require("./assets/images/nlp.jpeg"),
      projectName: "Natural Language Engineering",
      projectDesc: "projects",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/Ganesh-710/natural-language-engineering"
        }
      ]
    },
    // {
    //   image: require("./assets/images/nextuLogo.webp"),
    //   projectName: "Nextu",
    //   projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "http://nextu.se/"
    //     }
    //   ]
    // }

    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+44-7436915220",
  email_address: "ganeshelon@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "ganeshgans710", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
