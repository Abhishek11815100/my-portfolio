import project1 from "../assets/projects/medico.jpg";
import project2 from "../assets/projects/selfDrivingCar.jpg";
import project3 from "../assets/projects/project-1.jpg";
import project4 from "../assets/projects/project-2.jpg";
import project5 from "../assets/projects/project-3.jpg";


export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2+ years of hands-on experience, I have honed my skills in back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB  as well as front-end technologies like React, Flux and Redux,. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 2+ years of professional experience, I have worked with a variety of technologies, including React, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2022 - Present",
    role: "Backend Developer",
    company: "Genpact Ltd.",
    description: `Experienced in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Node.js", "mongoDB", "MySQL"],
  },
  {
    year: "2021 - 2021",
    role: "Machine Learning Intern",
    company: "CDAC",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["Python", "Machine Learning", "Deep Learning"],
  }
];

export const PROJECTS = [
  {
    title: "Medico-A hospital management website",
    image: project1,
    description:
      "To virtually connect doctors and patients during pandemic situation. Where Patient can register themselves and ask for appointment from a particular doctor. A fully fledged website where doctors can register themselves and see his/her appointment and can write reviews for patients",
    technologies: ["HTML", "CSS", "React", "Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "Self Driving Car",
    image: project2,
    description:
      " Used end-to-end approach to train a CNN model to map raw pixels from a single front-facing camera directly to steering commands. The model automatically learns internal representations of the necessary processing step such as detecting useful road features with only steering angle as the only human training data",
    technologies: ["Python", "Machine Learning", "Deep Learning", "Convolutional Neural Network"],
  },
  {
    title: "E-Commerce Website",
    image: project3,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js","Express.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project4,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "React", "MongoDB", "Node.js", "Express.js", "Docker"],
  },
  {
    title: "Portfolio Website",
    image: project5,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind", "Framer Motion"],
  },
  
];

export const CONTACT = {
  address: "517 Studio Tower, Paras Tieara, Sector-137, Noida, Uttar Pradesh 201305 ",
  phoneNo: "+91 7340294136 ",
  email: "abhiyadav5100@gmail.com",
};
