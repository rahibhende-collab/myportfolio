import type { Achievement, Internship, Project, SkillGroup, TimelineItem } from '../types';

export const profile = {
  name: 'Rahi',
  fullName: 'Rahi Sureshrao Bhende',
  title: 'MCA Student | Software Developer | AI Enthusiast',
  intro: 'Passionate about building modern web applications and exploring Artificial Intelligence, Machine Learning, and emerging technologies.',
  email: 'rahibhende@gmail.com',
  mobile: '+91 9322845182',
  github: 'https://github.com/rahibhende-collab',
  linkedin: 'https://www.linkedin.com/in/rahi-bhende-727664332/',
  resume: 'public/Rahi_Bhende_Resume.pdf',
  photo: 'public/profile.jpg.png',
};

export const navLinks = ['Home', 'About', 'Education', 'Projects', 'Skills', 'Journey', 'Internships', 'Contact'];

export const quickFacts = [
  ['Education', 'MCA'], ['Role', 'Software Developer | AI Enthusiast'],
  ['Frontend', 'React.js, HTML5, CSS3, JavaScript'], ['Backend', 'Node.js, Express.js'],
  ['Databases', 'MongoDB, MySQL'], ['Languages', 'Java, Python, C/C++'], ['Tools', 'Git, GitHub, VS Code'],
];

export const interests = ['Software Development', 'Web Development', 'Artificial Intelligence', 'Machine Learning', 'React.js', 'Full Stack Development'];

// Add your jobs here. Empty = placeholder is shown.
export const experience: TimelineItem[] = [];

export const education: TimelineItem[] = [
  { title: 'Master of Computer Applications (MCA)', subtitle: 'P. R. Pote Patil College of Engineering and Management, Amravati', period: 'Currently pursuing' },
  { title: 'Bachelor of Computer Applications (BCA)', subtitle: 'CGPA: 7.65' },
];

export const projectFilters = ['All', 'Web Development', 'MERN', 'AI / ML', 'Frontend', 'Backend'];

export const projects: Project[] = [
  {
    id: 1, title: 'FuturePath AI',
    description: 'An AI-powered career guidance platform designed to help users explore suitable career paths based on their interests, skills, preferences, and goals.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'AI/ML APIs'],
    features: ['Career recommendations', 'AI-driven guidance', 'Interest and skill based matching'],
    categories: ['Web Development', 'MERN', 'AI / ML', 'Frontend', 'Backend'], image: '/projects/future.png', github: 'https://github.com/rahibhende-collab/FuturePath-AI',
  },
  {
    id: 2, title: 'Jivashray',
    description: 'A smart pet adoption and pet shopping platform with rich filtering, detailed pet pages, and separate user and admin dashboards.',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'HTML5', 'CSS3', 'JavaScript'],
    features: ['Dog, Cat, Rabbit and Parrot categories', 'Breed, age and color/type filters', 'Pet details', 'Add to Cart and Shop Now', 'User dashboard', 'Admin dashboard'],
    categories: ['Web Development', 'MERN', 'Frontend', 'Backend'], image: '/projects/jivashray.png', github: 'https://github.com/rahibhende-collab/Jivashray',
  },
  {
    id: 3, title: 'CCMS',
    description: 'A Cyber Cafe Management System is a web-based application developed to streamline and automate the daily operations of a cyber cafe.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP'], features: ['👤 Customer Registration & Management', '💻 Computer/System Management'],
    categories: ['Web Development'], image: '/projects/ccms.jpg', github: 'https://github.com/rahibhende-collab/Cyber-Cafe-Management-System',
  },
];

export const skillGroups: SkillGroup[] = [
  { category: 'Programming Languages', items: ['Java', 'C', 'C++', 'Python', 'JavaScript', 'TypeScript', 'SQL'] },
  { category: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Responsive Web Design'] },
  { category: 'Backend', items: ['Node.js', 'Express.js'] },
  { category: 'Databases', items: ['MongoDB', 'MySQL', 'SQL'] },
  { category: 'AI / ML', items: ['Artificial Intelligence', 'Machine Learning', 'AI APIs', 'Prompt Engineering', 'Generative AI'] },
  { category: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA', 'PyCharm', 'Linux'] },
];

export const journey: TimelineItem[] = [
  'Started BCA', 'Learned programming fundamentals', 'Started web development', 'Learned Java and OOP', 'Learned DSA',
  'Started React.js', 'Learned MERN stack', 'Explored AI/ML', 'Completed internships', 'Started MCA',
  'Worked on FuturePath AI', 'Built Jivashray', 'Preparing for software development opportunities',
].map((title) => ({ title }));

// Add achievements & certificates here. Put files in public/certificates/ and link as '/certificates/file.pdf'
export const achievements: Achievement[] = []


export const internships: Internship[] = [
  {
    organization: 'Tata', title: 'Tata Virtual Internship', type: 'Virtual Internship', status: 'Completed', duration: 'Add duration',
    skills: ['Data Visualization', 'Data Analysis', 'Data Cleaning', 'Dashboard Development', 'Business Insights', 'Data Interpretation', 'Excel', 'Data Storytelling'], description: 'Completed a virtual internship program. Add what you worked on.', certificate: '/certificates/tata.pdf'
  },
  {
    organization: 'Deloitte', title: 'Deloitte Virtual Internship', type: 'Virtual Internship', status: 'Completed', duration: 'Add duration',
    skills: ['Dat a Analytics', 'Tableau', 'Excel', 'Data Visualization', 'Data Classification', 'Forensic Data Analysis', 'Business Insights'], description: 'Completed a virtual internship program. Add what you worked on.', certificate: '/certificates/deloitte.pdf'
  },
  {
    organization: 'Wadvani Foundation ', title: 'Wadvani Foundation Virtual Internship', type: 'Virtual Internship', status: 'Completed', duration: '10 Weeks',
    skills: ['Communication Skills', 'Teamwork', 'Professional Skills', 'Employability Skills', 'Job Readiness', 'Interview Preparation', 'Workplace Etiquette', 'Career Development'], description: 'Completed a virtual internship program', certificate: '/certificates/Wadvani.pdf'
  },
];
