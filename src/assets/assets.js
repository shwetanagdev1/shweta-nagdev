import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot, FaSitemap, FaCogs, FaChartBar, FaCheckCircle } from 'react-icons/fa';

//import profileImg from '../assets/profile.avif';
import projectImg1 from '../assets/project1.avif';
import projectImg2 from '../assets/project2.avif';
import projectImg3 from '../assets/project3.avif';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/project5.avif';
import projectImg6 from '../assets/project6.avif';
import profilePicture from '../assets/IMG_9531.PNG';
import PMO_image from '../assets/pmo_image.png';
import sales_performance from '../assets/sales_performance_analytics.png';
import data_model_checker from '../assets/data_model_checker.png';


export const assets = {
    profilePicture,
}


export const aboutInfo = [
    {
      icon: FaServer,
      title: 'Data-Driven Systems',
      description: 'Leveraging a software systems foundation to optimize relational databases, enforce data integrity, and build reliable backend architectures that support business intelligence solutions.',
      color: 'text-purple'
    },
    {
      icon: FaCogs,
      title: 'Business Systems',
      description: 'Analyzing enterprise workflows and application behavior to troubleshoot incidents, map efficient processes, and implement solutions that drive cross-functional efficiency.',
      color: 'text-purple'
    },
    {
      icon: FaChartBar,
      title: 'Analytical Insights',
      description: 'Engineering automated pipelines and interactive dashboards to execute data transformations and translate complex datasets into clear, actionable business value.',
      color: 'text-purple'
    }
  ];



export const skills = [
  {
    title: 'Programming Languages',
    icon: FaCode,
    description: 'Writing clean, structured, and maintainable object-oriented code across various software systems.',
    tags: ['Python', 'Java', 'C', 'JavaScript', 'HTML/CSS', 'R']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing database models, executing data validation, and optimizing schema structures.',
    tags: ['SQL', 'MySQL', 'Firebase', 'PostgreSQL', 'MongoDB']
  },
  {
    title: 'Business Intelligence',
    icon: FaChartBar,
    description: 'Transforming complex datasets into clear, interactive reporting dashboards to track operational trends.',
    tags: ['Power BI', 'Excel', 'Pandas', 'Seaborn']
  },
  {
    title: 'Enterprise Systems',
    icon: FaSitemap,
    description: 'Analyzing ITIL workflows, tracking system incidents, and mapping operational process flows.',
    tags: ['ServiceNow', 'JIRA', 'Confluence', 'MS Visio', 'SharePoint']
  },
  {
    title: 'Automation & Tooling',
    icon: FaCogs,
    description: 'Optimizing repetitive workflows and managing code repositories securely across the SDLC.',
    tags: ['Power Automate', 'Git', 'GitHub', 'VS Code', 'Linux']
  },
  {
    title: 'Systems & Testing',
    icon: FaCheckCircle,
    description: 'Translating business requirements into technical specs and supporting User Acceptance Testing (UAT).',
    tags: ['SDLC', 'Requirements Engineering', 'UAT Support', 'Defect Tracking']
  }
];



export const projects = [
  {
    title: "Sales Performance Analytics",
    description: "Designed and built an automated Python-based ETL pipeline to transform and load relational datasets into a structured MySQL database, executing complex SQL queries to generate actionable business insights.",
    image: sales_performance,
    tech: ["Power BI", "MySQL"],
    icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
    githubUrl: "https://github.com/shwetanagdev1/Sales-Insight-Dashboard"
  },
  {
    title: "Project Centre Quality Report",
    description: "Developed an interactive PMO tracking dashboard by integrating over 300 projects via the SharePoint API, utilizing Power Query for high-precision data cleaning and executive reporting cost oversight.",
    image: PMO_image,
    tech: ["Power BI", "SharePoint Online", "Power Query"],
    icons: [FaVuejs, FaFire, FaCloud , FaDatabase]
  },
  {
    title: "Data Model Checker",
    description: "Programmed a Python-based testing suite to automate validation, enforce critical schema constraints, and verify structural data model accuracy across relational MySQL database architectures.",
    image: data_model_checker,
    tech: ["Python", "MySQL"],
    icons: [FaReact, FaDatabase],
    githubUrl: "https://github.com/shwetanagdev1/Data-Model-Checker"
  }
];


export const workData = [
  {
    role: "Business Systems Analyst Co-op",
    company: "BC Pension Corporation",
    duration: "May 2025 – Dec. 2025",
    description: "Investigated enterprise application incidents, analyzed ITIL workflows with Visio to optimize efficiency, and engineered a ServiceNow tracking dashboard to monitor incident volume and resolution trends.",
    color: "purple"
  },
  {
    role: "Project Coordinator Co-op",
    company: "BC Pension Corporation",
    duration: "May 2024 – Dec. 2024",
    description: "Supported the Oracle Fusion ERP Cloud Program, automated key workflows using Power Automate to reduce manual PMO workloads by 20%, and built custom Power BI reporting dashboards for executive project tracking.",
    color: "purple"
  }
];
