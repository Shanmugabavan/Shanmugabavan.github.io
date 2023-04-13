/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Shanmugabavan's Portfolio",
  description:
    "As a highly motivated and dedicated Computer Science engineering student, I have a deep understanding of the fundamentals of software construction and stay up to date with the latest technology stack and best practices. My experience working on multiple projects has honed my skills as a team player and communicator. I am now seeking a challenging position as a software engineer where I can contribute my skills and knowledge to developing cutting-edge software solutions in an enterprise application environment, and grow my career in the field.",
  og: {
    title: "Shanmugabavan's Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Shanmugabavan",
  logo_name: "S.Shanmugabavan",
  nickname: "",
  subTitle:
    "As a highly motivated and dedicated Computer Science engineering student, I have a deep understanding of the fundamentals of software construction and stay up to date with the latest technology stack and best practices. My experience working on multiple projects has honed my skills as a team player and communicator. I am now seeking a challenging position as a software engineer where I can contribute my skills and knowledge to developing cutting-edge software solutions in an enterprise application environment, and grow my career in the field.",
  resumeLink:
    "https://drive.google.com/file/d/1ZD7o5SXat_ZRDjOj9a0J9aW572jeIskL/view?usp=share_link",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/Shanmugabavan",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/Shanmugabavan",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/shanmugabavan-shanmugakumar-830360192/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:shanmugakumar.18@cse.mrt.ac.lk",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/user5912bp/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/Shanmugabavan",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/shanmugabavan",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Moratuwa",
      subtitle: "Bachelor of Science in Computer Science and Engineering",
      logo_path: "University_of_Moratuwa_logo.png",
      alt_name: "IIITDM Kurnool",
      duration: "2018 - 2023",
      descriptions: [
        "⚡ CGPA - 3.83/4.2",
        "⚡ Dean's List - Semester-3 | Semester-4 | Semester-5 | Semester-6 | Semester-7",
      ],
      website_link: "https://uom.lk/",
    },
  ],
};

const schools = {
  schools: [
    {
      title: "Jaffna Hindu College",
      subtitle: "GCE Advance Level (Physical Stream)",
      logo_path: "Jaffna_Hindu_Collge_logo.png",
      alt_name: "Jaffna Hindu College",
      duration: "2014-2017",
      descriptions: [
        "⚡ Subjects: Physics - A, Chemistry - A, Combined Mathematics - A",
        "⚡ Z-Score: 2.3988",
        "⚡ Rank - 7 (District Rank), 58 (Island Rank)",
      ],
      website_link: "https://jhc.lk/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning Specialization",
      subtitle: "- Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/TV4HPP6FKKPC",
      alt_name: "deeplearning.ai",
      color_code: "#2A73CC",
    },
    {
      title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
      subtitle: "- Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/3A4VZ3EE2TXC",
      alt_name: "deeplearning.ai",
      color_code: "#2A73CC",
    },
    {
      title: "Advanced Learning Algorithms",
      subtitle: "- Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/M44L492JTFSD",
      alt_name: "deeplearning.ai",
      color_code: "#2A73CC",
    },
    {
      title: "Supervised Machine Learning: Regression and Classification",
      subtitle: "- Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/C8S4XY7B5BC8",
      alt_name: "deeplearning.ai",
      color_code: "#2A73CC",
    },
    {
      title: "AWS Essential Training for Developers",
      subtitle: "- LinkedIn",
      logo_path: "linkedIn.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/a80a7090ddb44aff8448756e5174a7e440c64f82da25e3804a16e7d5779f5190?trk=backfilled_certificate",
      alt_name: "LinkedIn Learning",
      // color_code: "#D83B0199",
    },
    {
      title: "Advanced Java Programming",
      subtitle: "- LinkedIn",
      logo_path: "linkedIn.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/4621c7780b9bdf05652772093a854a0560488ebf04178a8ee1f043bca2ddac89?trk=backfilled_certificate",
      alt_name: "LinkedIn Learning",
      // color_code: "#1F70C199",
    },
    {
      title: "Java: Testing with JUnit",
      subtitle: "- LinkedIn",
      logo_path: "linkedIn.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/87f0e40c9d264d26a8b2f9295c2efeae5d352044012896f185f623baf34caaec?trk=backfilled_certificate",
      alt_name: "LinkedIn Learning",
      // color_code: "#0C9D5899",
    },
    {
      title: "Learning Bash Scripting",
      subtitle: "- LinkedIn",
      logo_path: "linkedIn.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/9d51ce282af25ceebd82ad1a3f1b2b4b51cea076ed3534e812d225933e843141?trk=backfilled_certificate",
      alt_name: "LinkedIn Learning",
      // color_code: "#00000099",
    },
    {
      title: "Learning Jenkins",
      subtitle: "- LinkedIn",
      logo_path: "linkedIn.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/73b274792bf542d10fdd75238401b98b7505da405524d73ceffd25dd9772c308?trk=backfilled_certificate",
      alt_name: "LinkedIn Learning",
      // color_code: "#2A73CC",
    },
    {
      title: "Scrum: The Basics",
      subtitle: "- LinkedIn",
      logo_path: "linkedIn.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/6963fa7570ec125572df0cad76b7054f814670d102fad25d44584e7bf0a11b0b?trk=backfilled_certificate",
      alt_name: "LinkedIn Learning",
      // color_code: "#4285F499",
    },
    {
      title: "Learning Cloud Computing: Core Concepts",
      subtitle: "- LinkedIn",
      logo_path: "linkedIn.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/30afd5dfbbfd7ea4f9757e4f0318fdff4004e1bb3a65b5fc7b06015a801de28f?trk=backfilled_certificate",
      alt_name: "LinkedIn Learning",
      // color_code: "#FFBB0099",
    },
    {
      title: "Java (Intermediate)",
      subtitle: "- HackerRank",
      logo_path: "HackerRank_logo.png",
      certificate_link: "https://www.hackerrank.com/certificates/6b8d622ec6cb",
      alt_name: "HackerRank",
      // color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  // subtitle: "Work, Internship and Volunteership",
  // description:
  //   "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Engineering Intern",
          company: "LSEG",
          company_url: "https://www.lseg.com/en",
          logo_path: "lseg.png",
          duration: "Dec 2021 - Jun 2022",
          location: "Millenium Drive, Malabe, Sri Lanka",
          description:
            "As one of the main contributors to the Kudu export tool, I played a key role in designing and developing the tool, which allows users to export databases as CSV files using a Kudu-native command line component. Compared to the previous method of using Spark for exporting files, this tool demonstrated nearly double the export speed in most test cases. Through this project, I gained valuable experience with C++, Spark, and parallel programming techniques such as multithreading and synchronization.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Inuvil West, Inuvil",
    avatar_image_path: "address_image.svg",
    // location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  schools,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
