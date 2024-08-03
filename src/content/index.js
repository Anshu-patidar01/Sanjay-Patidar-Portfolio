import profileImage from "../Assets/ProfileIMG.jpeg";
import PersistentSystems from "../Assets/PersistentSystems.jpg";
import TCSIMG from "../Assets/TCS.png";
import TCSSmall from "../Assets/TCSIMG.png";
import PersistentIMGSmall from "../Assets/logo_persistent2png.png";
import AboutIMG from "../Assets/ProfileIMG-bg-removed.png";
const Links = {
  profileIMG: profileImage,
  aboutIMG: AboutIMG,
  Resume: "../Assets/Resume_Sanjay_Patidar.pdf",
  linkedin: "https://in.linkedin.com/in/patidarjay",
  instagram: "https://www.instagram.com/sanjupofficial/",
  facebook: "",
};

const Header = {
  Name: "Sanjay Patidar",
  Title: "Experienceds Dot Net Developer.",
  Discription:
    "I am a .NET Developer with over 5 years of experience in the IT industry. I worked as a .NET Developer at Tata Consultancy Services and have been with Persistent Systems in the same role since June 2022.",
};

const ProfileSummery = [
  {
    points: "Overall, 5 years of experience in IT industry",
  },
  {
    points:
      "Currently working as Dot Net Developer at Persistent Systems since June 2022.",
  },
  {
    points:
      "Worked as Dot Net Developer at Tata Consultancy Services from Oct 2018 to May 2022.",
  },
  {
    points: "Web application development in Asp.Net MVC, C#",
  },
  {
    points: "4 Year 5 Months Experience in application development (Dot Net)",
  },
  {
    points: "Experience in Power App, Power Automate",
  },
  {
    points: "Extensive experience in SQL server database design.",
  },
  {
    points: "Extensive knowledge of Object-oriented programing.",
  },
  {
    points:
      "Secure coding practice, experience with Software security Assurance tool: Fortify, Web Inspect",
  },
  {
    points:
      "Involved in all phases of SDLC from analysis, design, development, testing, implement and maintenance with timely delivery against tight deadlines.",
  },
  {
    points:
      "Strong understanding of functional testing (FT), User Acceptance Testing (UAT) and application deployment protocol and methodologies.",
  },
  {
    points: "Good Knowledge of code quality tools- DCT (Dependency check tool)",
  },
];
const aboutSection = {
  discription:
    "I am a dedicated .NET Developer with over five years of experience in application development. Currently, I am working at Persistent Systems since June 2022, where I have been honing my skills in web application development using ASP.NET MVC and C#.Previously, I contributed my expertise at Tata Consultancy Services from October 2018 to May 2022. My extensive experience spans across SQL Server database design, object-oriented programming, and the development of robust web applications.In addition to my core skills, I have hands-on experience with Power Apps and Power Automate, enabling me to create efficient and dynamic solutions tailored to business needs. My strong technical background is complemented by my commitment to delivering high-quality, scalable software solutions.",
};

const Education = {
  digree: "Master of Computer Application (MCA)",
  college: " Shri Vaishnav Institute of Management, Indore",
  cgpa: " 7.15 CGPA",
  year: "(2015-2018)",
};

const Skills_discription = [
  {
    title: "Primary skills",
    skills: [
      "C#",
      "Asp.Net",
      "Asp.Net MVC",
      " Java Script",
      " MSSQL",
      " HTML",
      "CSS",
      "Web API",
      "Web Services",
      " WCF",
    ],
  },
  {
    title: "Secondary Skills",
    skills: ["Power app", "Power Automate", "jQuery"],
  },
  {
    title: "Knowledge",
    skills: ["React", "Tailwind", "Bootstrap"],
  },
  {
    title: "Tools Used",
    skills: [
      "Visual Studio",
      " MS SQL Server",
      " Team foundation server",
      "GIT",
      " Dependency check tool",
      " Software Security Assurance",
      "Web Inspect",
      "Postman.",
    ],
  },
];

const myExperience = [
  //Company 1
  {
    companyName: "Persistent Systems",
    IMG: PersistentSystems,
    IMGSmall: PersistentIMGSmall,
    time: "– From June 2022 - Present",
    role: "Role – Dot Net Developer",
    workedOnProjects:
      "I am working on developing a workflow application to manage offshore operations and provide transparency to stakeholders, as well as implementing Dynamic 365 Intelligent Order Management (IOM) to optimize order processing and enhance overall operational efficiency.",
    projects: [
      //Project 1 in company Presistent
      {
        projectName: "Project1",
        discription:
          "Workflow application to manage offshore operation and provide transparency to stockholders. Itis hospitality domain-based project including User, Transaction and Report module. User modules includemultiple roles which are used to take care for order approval and rejection based on information andavailability. Transaction module used to create order. Report module used to check status for all pending,approved and rejected order",

        RolesAndResp: [
          "• Database design, Coding Development, and implementation",
          "• Architecting and designing solution according to business requirement and platform specific technical best practices",
          "• Worked on SQL Server database design",
          "• Developed .NET web-application, using ASP.NET MVC, C#",
          "• 100% client satisfaction and on-time completion.",
          "• Designed and built web application that helps client to create securely and update order and generate reports",
          "• Worked on visual Studio with C# Dot Net and Web API.",
        ],
      },
      //Project 2 in company Presistent
      {
        projectName: "Project2",
        discription:
          "– Dynamic 365 Intelligent order management (IOM) project. Which is used to send order, create customer from adobe to IOM portal using power automate. Once the order status changes it will reflect in adobe and IOM. We used custom and shared connector to call API.",

        RolesAndResp: [
          "• Custom connector, Power automate flow, Performance testing, Power App.",
          "• Created power automate flow to pull, process, customer create and update order status from Adobe to IOM.",
          "• Performance testing for power automate flow.",
          "• Create custom connector to call API",
        ],
      },
    ],
  },

  //Company 2
  {
    companyName: "Tata Consultancy Services",
    IMG: TCSIMG,
    IMGSmall: TCSSmall,
    time: "– From Oct 2018 – May 2022",
    role: "Role – Dot Net Developer",
    workedOnProjects:
      "I developed a .NET web application using ASP.NET C# and SQL Server for a transport domain-based project, where users can track the shipment of their orders, and I also created web services for the application.",
    projects: [
      //Project 1 in company Presistent
      {
        projectName: "Project1",
        discription:
          "It was transport domain-based project where user can track the shipment of the order.",

        RolesAndResp: [
          "          Database design, Coding Development, and implementation",
          "• Developed .NET web-application, using ASP.NET C#, SQL Server.",
          "• Created web services for the application.",
          "• Secure coding practices, experience with Software Security Assurance tool: Fortify, Web Inspect",
          "• Involved in all phases of the SDLC from analysis, design, development, testing, implementation,",
          "andmaintenance with timely delivery against tight deadlines.",
          "• Involved in Functional testing (FT), User Acceptance Testing (UAT) and Application deployment protocols and",
          "methodologies.",
          "• Worked on code quality Tools- DCT (Dependency Check Tool)",
          "• Maintain technical documentation.",
          "• Perform code review to improve software security.",
        ],
      },
    ],
  },
];

const ContactSection = {
  mobileNo: "7722829772",
  address: "Indore,India",
  email: "Jaypatidar31@gmail.com",
};

export {
  Header,
  Links,
  ProfileSummery,
  Skills_discription,
  myExperience,
  aboutSection,
  Education,
  ContactSection,
};
