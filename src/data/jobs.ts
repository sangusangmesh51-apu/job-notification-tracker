export type WorkMode = "Remote" | "Hybrid" | "Onsite";
export type ExperienceLevel = "Fresher" | "0-1" | "1-3" | "3-5";
export type JobSource = "LinkedIn" | "Naukri" | "Indeed";

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  mode: WorkMode;
  experience: ExperienceLevel;
  skills: string[];
  source: JobSource;
  postedDaysAgo: number;
  salaryRange: string;
  applyUrl: string;
  description: string;
}

export const jobs: Job[] = [
  // Infosys
  {
    id: "job-001",
    title: "SDE Intern",
    company: "Infosys",
    location: "Bangalore",
    mode: "Hybrid",
    experience: "Fresher",
    skills: ["Java", "Python", "SQL", "Data Structures"],
    source: "LinkedIn",
    postedDaysAgo: 2,
    salaryRange: "₹25k–₹35k/month Internship",
    applyUrl: "https://careers.infosys.com/jobs/sde-intern-bangalore",
    description: "Join India's leading IT services company as a Software Development Engineer Intern. You will work on real client projects, learn enterprise-grade development practices, and gain exposure to cloud technologies. Mentorship from senior engineers provided."
  },
  {
    id: "job-002",
    title: "Java Developer (0-1)",
    company: "Infosys",
    location: "Pune",
    mode: "Onsite",
    experience: "0-1",
    skills: ["Java", "Spring Boot", "Microservices", "MySQL"],
    source: "Naukri",
    postedDaysAgo: 5,
    salaryRange: "3–5 LPA",
    applyUrl: "https://careers.infosys.com/jobs/java-developer-pune",
    description: "Looking for passionate Java developers to join our banking solutions team. You will build and maintain scalable microservices, work with Spring Boot framework, and collaborate with global teams. Fresh graduates with strong Java fundamentals encouraged."
  },
  // TCS
  {
    id: "job-003",
    title: "Graduate Engineer Trainee",
    company: "TCS",
    location: "Hyderabad",
    mode: "Hybrid",
    experience: "Fresher",
    skills: ["C++", "Java", "Communication", "Problem Solving"],
    source: "Indeed",
    postedDaysAgo: 1,
    salaryRange: "3.3–3.6 LPA",
    applyUrl: "https://www.tcs.com/careers/graduate-engineer-trainee",
    description: "Start your IT career with Asia's largest IT services company. Comprehensive training program covering latest technologies. Work on diverse projects across banking, retail, and healthcare domains. Excellent growth opportunities."
  },
  {
    id: "job-004",
    title: "Python Developer (Fresher)",
    company: "TCS",
    location: "Chennai",
    mode: "Remote",
    experience: "Fresher",
    skills: ["Python", "Django", "Flask", "PostgreSQL"],
    source: "LinkedIn",
    postedDaysAgo: 3,
    salaryRange: "3.5–4.5 LPA",
    applyUrl: "https://www.tcs.com/careers/python-developer-chennai",
    description: "Join our data analytics division as a Python Developer. Build data pipelines, create REST APIs, and work with machine learning teams. Strong foundation in Python programming required. Remote work with occasional office visits."
  },
  // Wipro
  {
    id: "job-005",
    title: "Frontend Intern",
    company: "Wipro",
    location: "Bangalore",
    mode: "Hybrid",
    experience: "Fresher",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    source: "Naukri",
    postedDaysAgo: 7,
    salaryRange: "₹18k–₹25k/month Internship",
    applyUrl: "https://careers.wipro.com/frontend-intern-bangalore",
    description: "6-month internship program for aspiring frontend developers. Learn modern React development, work on client projects, and build responsive web applications. Convertible to full-time based on performance."
  },
  {
    id: "job-006",
    title: "React Developer (1-3)",
    company: "Wipro",
    location: "Gurgaon",
    mode: "Onsite",
    experience: "1-3",
    skills: ["React", "TypeScript", "Redux", "Material UI"],
    source: "LinkedIn",
    postedDaysAgo: 4,
    salaryRange: "6–10 LPA",
    applyUrl: "https://careers.wipro.com/react-developer-gurgaon",
    description: "Seeking experienced React developers for our digital transformation projects. Build enterprise-grade web applications, implement complex UI components, and mentor junior developers. Strong TypeScript skills preferred."
  },
  // Accenture
  {
    id: "job-007",
    title: "Junior Backend Developer",
    company: "Accenture",
    location: "Mumbai",
    mode: "Hybrid",
    experience: "0-1",
    skills: ["Node.js", "Express", "MongoDB", "AWS"],
    source: "Indeed",
    postedDaysAgo: 2,
    salaryRange: "4.5–6 LPA",
    applyUrl: "https://www.accenture.com/in-en/careers/backend-developer-mumbai",
    description: "Join our Technology Center to build scalable backend systems. Work with Node.js, cloud services, and microservices architecture. Global exposure and continuous learning opportunities. Great for career growth."
  },
  {
    id: "job-008",
    title: "Data Analyst Intern",
    company: "Accenture",
    location: "Bangalore",
    mode: "Remote",
    experience: "Fresher",
    skills: ["SQL", "Python", "Power BI", "Excel"],
    source: "LinkedIn",
    postedDaysAgo: 6,
    salaryRange: "₹20k–₹30k/month Internship",
    applyUrl: "https://www.accenture.com/in-en/careers/data-analyst-intern",
    description: "3-month internship in our Analytics practice. Analyze business data, create dashboards, and present insights to clients. Learn industry-standard tools and methodologies. Stipend plus certificate provided."
  },
  // Capgemini
  {
    id: "job-009",
    title: "QA Intern",
    company: "Capgemini",
    location: "Pune",
    mode: "Onsite",
    experience: "Fresher",
    skills: ["Selenium", "Java", "TestNG", "Manual Testing"],
    source: "Naukri",
    postedDaysAgo: 8,
    salaryRange: "₹15k–₹22k/month Internship",
    applyUrl: "https://www.capgemini.com/in-en/careers/qa-intern-pune",
    description: "Learn software testing fundamentals and automation with Selenium. Work on live projects, write test cases, and ensure quality deliverables. Training on Agile methodology included."
  },
  {
    id: "job-010",
    title: "DevOps Engineer (1-3)",
    company: "Capgemini",
    location: "Hyderabad",
    mode: "Hybrid",
    experience: "1-3",
    skills: ["Docker", "Kubernetes", "Jenkins", "AWS"],
    source: "Indeed",
    postedDaysAgo: 3,
    salaryRange: "6–9 LPA",
    applyUrl: "https://www.capgemini.com/in-en/careers/devops-engineer-hyderabad",
    description: "Build and maintain CI/CD pipelines, manage cloud infrastructure, and automate deployment processes. Work with cutting-edge DevOps tools and practices. Cloud certification support provided."
  },
  // Cognizant
  {
    id: "job-011",
    title: "Full Stack Developer (0-1)",
    company: "Cognizant",
    location: "Chennai",
    mode: "Hybrid",
    experience: "0-1",
    skills: ["React", "Node.js", "MongoDB", "Express"],
    source: "LinkedIn",
    postedDaysAgo: 1,
    salaryRange: "4–6 LPA",
    applyUrl: "https://careers.cognizant.com/fullstack-developer-chennai",
    description: "Develop end-to-end web applications using MERN stack. Work on healthcare and insurance domain projects. Comprehensive training program and mentorship from senior developers."
  },
  {
    id: "job-012",
    title: "Business Analyst Intern",
    company: "Cognizant",
    location: "Kolkata",
    mode: "Remote",
    experience: "Fresher",
    skills: ["Excel", "SQL", "PowerPoint", "Communication"],
    source: "Naukri",
    postedDaysAgo: 9,
    salaryRange: "₹18k–₹25k/month Internship",
    applyUrl: "https://careers.cognizant.com/ba-intern-kolkata",
    description: "Understand business requirements, document processes, and support project delivery. Learn Agile methodologies and client interaction. Good communication skills essential."
  },
  // IBM
  {
    id: "job-013",
    title: "Cloud Engineer Intern",
    company: "IBM",
    location: "Bangalore",
    mode: "Hybrid",
    experience: "Fresher",
    skills: ["AWS", "Azure", "Linux", "Python"],
    source: "Indeed",
    postedDaysAgo: 4,
    salaryRange: "₹25k–₹35k/month Internship",
    applyUrl: "https://www.ibm.com/careers/cloud-engineer-intern",
    description: "Join IBM's cloud division to learn enterprise cloud solutions. Work on IBM Cloud and hybrid cloud projects. Certification opportunities and potential full-time conversion."
  },
  {
    id: "job-014",
    title: "AI/ML Engineer (1-3)",
    company: "IBM",
    location: "Pune",
    mode: "Remote",
    experience: "1-3",
    skills: ["Python", "TensorFlow", "PyTorch", "NLP"],
    source: "LinkedIn",
    postedDaysAgo: 2,
    salaryRange: "8–12 LPA",
    applyUrl: "https://www.ibm.com/careers/aiml-engineer-pune",
    description: "Build intelligent solutions using Watson and open-source AI frameworks. Work on NLP, computer vision, and recommendation systems. Research-oriented role with publication opportunities."
  },
  // Oracle
  {
    id: "job-015",
    title: "Database Administrator (0-1)",
    company: "Oracle",
    location: "Hyderabad",
    mode: "Onsite",
    experience: "0-1",
    skills: ["Oracle DB", "SQL", "PL/SQL", "Linux"],
    source: "Naukri",
    postedDaysAgo: 5,
    salaryRange: "5–7 LPA",
    applyUrl: "https://www.oracle.com/careers/dba-hyderabad",
    description: "Manage Oracle database systems for enterprise clients. Learn performance tuning, backup strategies, and high-availability configurations. Database certification support provided."
  },
  {
    id: "job-016",
    title: "Java Backend Developer (1-3)",
    company: "Oracle",
    location: "Bangalore",
    mode: "Hybrid",
    experience: "1-3",
    skills: ["Java", "Spring", "Hibernate", "Oracle DB"],
    source: "Indeed",
    postedDaysAgo: 3,
    salaryRange: "7–11 LPA",
    applyUrl: "https://www.oracle.com/careers/java-developer-bangalore",
    description: "Develop backend services for Oracle Cloud applications. Work with enterprise Java technologies and cloud-native architectures. Excellent learning and growth environment."
  },
  // SAP
  {
    id: "job-017",
    title: "ABAP Developer Intern",
    company: "SAP",
    location: "Bangalore",
    mode: "Hybrid",
    experience: "Fresher",
    skills: ["ABAP", "SAP HANA", "SQL", "Debugging"],
    source: "LinkedIn",
    postedDaysAgo: 6,
    salaryRange: "₹30k–₹40k/month Internship",
    applyUrl: "https://jobs.sap.com/abap-intern-bangalore",
    description: "Learn SAP's proprietary ABAP programming language. Work on ERP modules and contribute to enterprise solutions. Global company with excellent work culture. Stipend and benefits included."
  },
  {
    id: "job-018",
    title: "UX Designer (1-3)",
    company: "SAP",
    location: "Gurgaon",
    mode: "Hybrid",
    experience: "1-3",
    skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
    source: "Naukri",
    postedDaysAgo: 7,
    salaryRange: "6–10 LPA",
    applyUrl: "https://jobs.sap.com/ux-designer-gurgaon",
    description: "Design intuitive user experiences for enterprise software. Conduct user research, create wireframes, and build interactive prototypes. Work with global design teams."
  },
  // Dell
  {
    id: "job-019",
    title: "Network Engineer (0-1)",
    company: "Dell",
    location: "Chennai",
    mode: "Onsite",
    experience: "0-1",
    skills: ["CCNA", "Networking", "Linux", "Troubleshooting"],
    source: "Indeed",
    postedDaysAgo: 4,
    salaryRange: "4–6 LPA",
    applyUrl: "https://jobs.dell.com/network-engineer-chennai",
    description: "Support Dell's global network infrastructure. Monitor network performance, troubleshoot issues, and implement security measures. CCNA certification preferred."
  },
  {
    id: "job-020",
    title: "Technical Support Engineer",
    company: "Dell",
    location: "Hyderabad",
    mode: "Hybrid",
    experience: "Fresher",
    skills: ["Windows", "Hardware", "Customer Service", "Troubleshooting"],
    source: "LinkedIn",
    postedDaysAgo: 1,
    salaryRange: "3–4.5 LPA",
    applyUrl: "https://jobs.dell.com/tech-support-hyderabad",
    description: "Provide technical support to Dell enterprise customers. Diagnose hardware and software issues, guide customers through solutions. Excellent communication skills required."
  },
  // Amazon
  {
    id: "job-021",
    title: "SDE Intern",
    company: "Amazon",
    location: "Bangalore",
    mode: "Hybrid",
    experience: "Fresher",
    skills: ["Java", "Python", "System Design", "Algorithms"],
    source: "LinkedIn",
    postedDaysAgo: 2,
    salaryRange: "₹60k–₹80k/month Internship",
    applyUrl: "https://www.amazon.jobs/en/jobs/sde-intern-bangalore",
    description: "6-month internship at one of the world's most sought-after tech companies. Work on scalable distributed systems, learn from the best engineers, and potentially convert to full-time."
  },
  {
    id: "job-022",
    title: "Software Development Engineer (1-3)",
    company: "Amazon",
    location: "Hyderabad",
    mode: "Onsite",
    experience: "1-3",
    skills: ["Java", "AWS", "Distributed Systems", "Microservices"],
    source: "Naukri",
    postedDaysAgo: 3,
    salaryRange: "12–18 LPA",
    applyUrl: "https://www.amazon.jobs/en/jobs/sde-hyderabad",
    description: "Build systems that impact millions of customers worldwide. Work on AWS services, e-commerce platforms, and cutting-edge technologies. High bar for coding and system design."
  },
  // Flipkart
  {
    id: "job-023",
    title: "Android Developer Intern",
    company: "Flipkart",
    location: "Bangalore",
    mode: "Hybrid",
    experience: "Fresher",
    skills: ["Kotlin", "Android", "Java", "Mobile Development"],
    source: "Indeed",
    postedDaysAgo: 5,
    salaryRange: "₹35k–₹50k/month Internship",
    applyUrl: "https://www.flipkartcareers.com/android-intern",
    description: "Work on India's largest e-commerce mobile app. Learn mobile architecture, build features used by millions, and grow as an Android developer. Competitive stipend and perks."
  },
  {
    id: "job-024",
    title: "Data Engineer (1-3)",
    company: "Flipkart",
    location: "Bangalore",
    mode: "Onsite",
    experience: "1-3",
    skills: ["Python", "Spark", "Hadoop", "SQL"],
    source: "LinkedIn",
    postedDaysAgo: 4,
    salaryRange: "10–16 LPA",
    applyUrl: "https://www.flipkartcareers.com/data-engineer",
    description: "Build data pipelines that process petabytes of e-commerce data. Work with big data technologies, real-time streaming, and analytics platforms. High-impact role."
  },
  // Swiggy
  {
    id: "job-025",
    title: "Backend Developer (1-3)",
    company: "Swiggy",
    location: "Bangalore",
    mode: "Hybrid",
    experience: "1-3",
    skills: ["Go", "Java", "Redis", "Kafka"],
    source: "Naukri",
    postedDaysAgo: 2,
    salaryRange: "12–20 LPA",
    applyUrl: "https://careers.swiggy.com/backend-developer",
    description: "Build systems that power food delivery for millions of users. Work on high-scale distributed systems, real-time order tracking, and logistics optimization. Fast-paced startup environment."
  },
  {
    id: "job-026",
    title: "iOS Developer Intern",
    company: "Swiggy",
    location: "Hyderabad",
    mode: "Remote",
    experience: "Fresher",
    skills: ["Swift", "iOS", "Xcode", "UIKit"],
    source: "Indeed",
    postedDaysAgo: 6,
    salaryRange: "₹30k–₹45k/month Internship",
    applyUrl: "https://careers.swiggy.com/ios-intern",
    description: "Join Swiggy's iOS team to build delightful food ordering experiences. Learn Swift, iOS architecture patterns, and contribute to app features. Convertible to full-time."
  },
  // Razorpay
  {
    id: "job-027",
    title: "Frontend Developer (1-3)",
    company: "Razorpay",
    location: "Bangalore",
    mode: "Hybrid",
    experience: "1-3",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    source: "LinkedIn",
    postedDaysAgo: 3,
    salaryRange: "10–18 LPA",
    applyUrl: "https://razorpay.com/jobs/frontend-developer",
    description: "Build the future of payments in India. Work on merchant dashboards, payment interfaces, and financial products. Modern tech stack and excellent engineering culture."
  },
  {
    id: "job-028",
    title: "Security Engineer (0-1)",
    company: "Razorpay",
    location: "Bangalore",
    mode: "Onsite",
    experience: "0-1",
    skills: ["Security", "Python", "Penetration Testing", "OWASP"],
    source: "Naukri",
    postedDaysAgo: 7,
    salaryRange: "6–10 LPA",
    applyUrl: "https://razorpay.com/jobs/security-engineer",
    description: "Protect India's leading payment gateway from security threats. Learn application security, conduct vulnerability assessments, and implement security controls."
  },
  // PhonePe
  {
    id: "job-029",
    title: "SDE Intern",
    company: "PhonePe",
    location: "Bangalore",
    mode: "Hybrid",
    experience: "Fresher",
    skills: ["Java", "Spring Boot", "MySQL", "Redis"],
    source: "Indeed",
    postedDaysAgo: 1,
    salaryRange: "₹50k–₹70k/month Internship",
    applyUrl: "https://www.phonepe.com/careers/sde-intern",
    description: "Intern at India's largest digital payments company. Work on UPI infrastructure, payment systems, and financial services. High learning curve and excellent mentorship."
  },
  {
    id: "job-030",
    title: "Site Reliability Engineer (1-3)",
    company: "PhonePe",
    location: "Bangalore",
    mode: "Onsite",
    experience: "1-3",
    skills: ["Linux", "Kubernetes", "Prometheus", "Grafana"],
    source: "LinkedIn",
    postedDaysAgo: 4,
    salaryRange: "12–20 LPA",
    applyUrl: "https://www.phonepe.com/careers/sre",
    description: "Ensure 99.99% uptime for India's payment infrastructure. Build monitoring systems, automate deployments, and manage incidents. Critical role with high ownership."
  },
  // Paytm
  {
    id: "job-031",
    title: "QA Engineer (0-1)",
    company: "Paytm",
    location: "Noida",
    mode: "Hybrid",
    experience: "0-1",
    skills: ["Selenium", "Java", "API Testing", "Postman"],
    source: "Naukri",
    postedDaysAgo: 5,
    salaryRange: "4–7 LPA",
    applyUrl: "https://paytm.com/careers/qa-engineer",
    description: "Test India's super app with millions of daily users. Write automation scripts, perform API testing, and ensure quality of payments and financial services."
  },
  {
    id: "job-032",
    title: "Product Manager Intern",
    company: "Paytm",
    location: "Mumbai",
    mode: "Remote",
    experience: "Fresher",
    skills: ["Product Management", "Analytics", "Excel", "Communication"],
    source: "LinkedIn",
    postedDaysAgo: 8,
    salaryRange: "₹25k–₹40k/month Internship",
    applyUrl: "https://paytm.com/careers/pm-intern",
    description: "Learn product management at India's fintech leader. Analyze user behavior, define features, and work with engineering teams. MBA or engineering background preferred."
  },
  // Zoho
  {
    id: "job-033",
    title: "Software Developer (Fresher)",
    company: "Zoho",
    location: "Chennai",
    mode: "Onsite",
    experience: "Fresher",
    skills: ["Java", "Python", "JavaScript", "Problem Solving"],
    source: "Indeed",
    postedDaysAgo: 2,
    salaryRange: "6–9 LPA",
    applyUrl: "https://careers.zoho.com/software-developer",
    description: "Join the company that builds software for the world. Work on Zoho's suite of products, learn full-stack development, and grow in a product-focused environment."
  },
  {
    id: "job-034",
    title: "Technical Writer (0-1)",
    company: "Zoho",
    location: "Chennai",
    mode: "Hybrid",
    experience: "0-1",
    skills: ["Technical Writing", "Documentation", "API Docs", "Communication"],
    source: "Naukri",
    postedDaysAgo: 9,
    salaryRange: "4–6 LPA",
    applyUrl: "https://careers.zoho.com/technical-writer",
    description: "Create documentation for Zoho's enterprise products. Write API documentation, user guides, and help articles. Strong English skills and technical aptitude required."
  },
  // Freshworks
  {
    id: "job-035",
    title: "Customer Success Intern",
    company: "Freshworks",
    location: "Chennai",
    mode: "Hybrid",
    experience: "Fresher",
    skills: ["Communication", "CRM", "Customer Support", "Problem Solving"],
    source: "LinkedIn",
    postedDaysAgo: 3,
    salaryRange: "₹20k–₹30k/month Internship",
    applyUrl: "https://www.freshworks.com/careers/cs-intern",
    description: "Help global customers succeed with Freshworks products. Learn SaaS customer success, handle support tickets, and build customer relationships."
  },
  {
    id: "job-036",
    title: "Ruby on Rails Developer (1-3)",
    company: "Freshworks",
    location: "Bangalore",
    mode: "Hybrid",
    experience: "1-3",
    skills: ["Ruby", "Rails", "PostgreSQL", "Redis"],
    source: "Indeed",
    postedDaysAgo: 6,
    salaryRange: "8–14 LPA",
    applyUrl: "https://www.freshworks.com/careers/rails-developer",
    description: "Build features for Freshdesk and other Freshworks products. Work with Ruby on Rails, contribute to a mature codebase, and learn SaaS development best practices."
  },
  // Juspay
  {
    id: "job-037",
    title: "React Native Developer (1-3)",
    company: "Juspay",
    location: "Bangalore",
    mode: "Hybrid",
    experience: "1-3",
    skills: ["React Native", "JavaScript", "Mobile", "Payment SDKs"],
    source: "Naukri",
    postedDaysAgo: 4,
    salaryRange: "10–18 LPA",
    applyUrl: "https://juspay.in/careers/react-native",
    description: "Build payment experiences used by millions of Indians. Work on React Native SDKs, integrate with banks and payment networks. High-performance engineering culture."
  },
  {
    id: "job-038",
    title: "Backend Engineer (0-1)",
    company: "Juspay",
    location: "Bangalore",
    mode: "Onsite",
    experience: "0-1",
    skills: ["Haskell", "PureScript", "Functional Programming", "Nix"],
    source: "LinkedIn",
    postedDaysAgo: 7,
    salaryRange: "8–14 LPA",
    applyUrl: "https://juspay.in/careers/backend-engineer",
    description: "Work with functional programming languages to build reliable payment systems. Learn Haskell and PureScript while building critical financial infrastructure."
  },
  // CRED
  {
    id: "job-039",
    title: "Android Developer (1-3)",
    company: "CRED",
    location: "Bangalore",
    mode: "Hybrid",
    experience: "1-3",
    skills: ["Kotlin", "Android", "MVVM", "Coroutines"],
    source: "Indeed",
    postedDaysAgo: 2,
    salaryRange: "15–25 LPA",
    applyUrl: "https://cred.club/careers/android-developer",
    description: "Build India's most rewarding credit card payment app. Work with modern Android architecture, implement beautiful UI, and learn from top-tier engineers."
  },
  {
    id: "job-040",
    title: "Data Scientist Intern",
    company: "CRED",
    location: "Bangalore",
    mode: "Remote",
    experience: "Fresher",
    skills: ["Python", "Machine Learning", "SQL", "Statistics"],
    source: "LinkedIn",
    postedDaysAgo: 5,
    salaryRange: "₹40k–₹60k/month Internship",
    applyUrl: "https://cred.club/careers/data-science-intern",
    description: "Apply ML to fintech problems at one of India's hottest startups. Work on credit risk models, user behavior analysis, and recommendation systems."
  },
  // Startup - Groww
  {
    id: "job-041",
    title: "Frontend Developer (1-3)",
    company: "Groww",
    location: "Bangalore",
    mode: "Hybrid",
    experience: "1-3",
    skills: ["React", "JavaScript", "CSS", "Web Performance"],
    source: "Naukri",
    postedDaysAgo: 3,
    salaryRange: "12–20 LPA",
    applyUrl: "https://groww.in/careers/frontend",
    description: "Simplify investing for millions of Indians. Build intuitive web interfaces for stocks, mutual funds, and financial products. Fast-growing fintech startup."
  },
  {
    id: "job-042",
    title: "SDE Intern",
    company: "Groww",
    location: "Bangalore",
    mode: "Remote",
    experience: "Fresher",
    skills: ["Java", "Python", "JavaScript", "Data Structures"],
    source: "Indeed",
    postedDaysAgo: 6,
    salaryRange: "₹35k–₹50k/month Internship",
    applyUrl: "https://groww.in/careers/sde-intern",
    description: "Join India's fastest-growing investment platform. Learn full-stack development, work on financial products, and grow with the company."
  },
  // Startup - Zerodha
  {
    id: "job-043",
    title: "Python Developer (1-3)",
    company: "Zerodha",
    location: "Bangalore",
    mode: "Onsite",
    experience: "1-3",
    skills: ["Python", "Django", "PostgreSQL", "AWS"],
    source: "LinkedIn",
    postedDaysAgo: 4,
    salaryRange: "10–18 LPA",
    applyUrl: "https://zerodha.com/careers/python-developer",
    description: "Build India's largest stock brokerage platform. Work on trading systems, back-office operations, and financial technology. Flat hierarchy and engineering-focused culture."
  },
  {
    id: "job-044",
    title: "Support Engineer (0-1)",
    company: "Zerodha",
    location: "Bangalore",
    mode: "Hybrid",
    experience: "0-1",
    skills: ["SQL", "Python", "Linux", "Customer Support"],
    source: "Naukri",
    postedDaysAgo: 8,
    salaryRange: "5–8 LPA",
    applyUrl: "https://zerodha.com/careers/support-engineer",
    description: "Help traders and investors use India's best brokerage platform. Technical troubleshooting, query resolution, and customer education."
  },
  // Startup - Unacademy
  {
    id: "job-045",
    title: "Backend Developer (1-3)",
    company: "Unacademy",
    location: "Bangalore",
    mode: "Hybrid",
    experience: "1-3",
    skills: ["Go", "Microservices", "MongoDB", "Kafka"],
    source: "Indeed",
    postedDaysAgo: 2,
    salaryRange: "12–22 LPA",
    applyUrl: "https://unacademy.com/careers/backend",
    description: "Build India's largest learning platform. Work on live classes, content delivery, and student engagement systems. High-scale edtech challenges."
  },
  {
    id: "job-046",
    title: "Video Streaming Engineer",
    company: "Unacademy",
    location: "Bangalore",
    mode: "Onsite",
    experience: "1-3",
    skills: ["FFmpeg", "HLS", "WebRTC", "CDN"],
    source: "LinkedIn",
    postedDaysAgo: 5,
    salaryRange: "14–24 LPA",
    applyUrl: "https://unacademy.com/careers/video-engineer",
    description: "Optimize video streaming for millions of learners. Work on live class infrastructure, reduce latency, and improve video quality."
  },
  // Startup - Meesho
  {
    id: "job-047",
    title: "Data Analyst (0-1)",
    company: "Meesho",
    location: "Bangalore",
    mode: "Hybrid",
    experience: "0-1",
    skills: ["SQL", "Python", "Excel", "Data Visualization"],
    source: "Naukri",
    postedDaysAgo: 3,
    salaryRange: "6–10 LPA",
    applyUrl: "https://meesho.io/careers/data-analyst",
    description: "Analyze data for India's leading social commerce platform. Generate insights, build dashboards, and support business decisions with data."
  },
  {
    id: "job-048",
    title: "iOS Developer (1-3)",
    company: "Meesho",
    location: "Bangalore",
    mode: "Hybrid",
    experience: "1-3",
    skills: ["Swift", "iOS", "UIKit", "SwiftUI"],
    source: "Indeed",
    postedDaysAgo: 7,
    salaryRange: "12–20 LPA",
    applyUrl: "https://meesho.io/careers/ios-developer",
    description: "Build the shopping experience for India's next billion internet users. Work on seller and buyer apps, implement new features, and optimize performance."
  },
  // Startup - Dunzo
  {
    id: "job-049",
    title: "Android Developer (1-3)",
    company: "Dunzo",
    location: "Bangalore",
    mode: "Hybrid",
    experience: "1-3",
    skills: ["Kotlin", "Android", "Jetpack", "Coroutines"],
    source: "LinkedIn",
    postedDaysAgo: 4,
    salaryRange: "12–20 LPA",
    applyUrl: "https://dunzo.com/careers/android",
    description: "Build India's hyperlocal delivery app. Work on customer, partner, and merchant apps. Fast-paced environment with immediate impact."
  },
  {
    id: "job-050",
    title: "DevOps Engineer (1-3)",
    company: "Dunzo",
    location: "Bangalore",
    mode: "Onsite",
    experience: "1-3",
    skills: ["AWS", "Kubernetes", "Terraform", "CI/CD"],
    source: "Naukri",
    postedDaysAgo: 6,
    salaryRange: "12–20 LPA",
    applyUrl: "https://dunzo.com/careers/devops",
    description: "Keep Dunzo's infrastructure running 24/7. Manage cloud resources, automate deployments, and ensure system reliability for hyperlocal delivery."
  },
  // Startup - Urban Company
  {
    id: "job-051",
    title: "ML Engineer (1-3)",
    company: "Urban Company",
    location: "Gurgaon",
    mode: "Hybrid",
    experience: "1-3",
    skills: ["Python", "TensorFlow", "NLP", "Recommendation Systems"],
    source: "Indeed",
    postedDaysAgo: 2,
    salaryRange: "12–22 LPA",
    applyUrl: "https://www.urbancompany.com/careers/ml-engineer",
    description: "Apply machine learning to home services. Build matching algorithms, pricing models, and quality prediction systems."
  },
  {
    id: "job-052",
    title: "Product Designer (0-1)",
    company: "Urban Company",
    location: "Gurgaon",
    mode: "Hybrid",
    experience: "0-1",
    skills: ["Figma", "UI/UX", "Prototyping", "User Research"],
    source: "LinkedIn",
    postedDaysAgo: 5,
    salaryRange: "6–10 LPA",
    applyUrl: "https://www.urbancompany.com/careers/product-designer",
    description: "Design experiences for customers and service professionals. Create intuitive interfaces for booking, payments, and service delivery."
  },
  // Startup - Ola
  {
    id: "job-053",
    title: "Backend Engineer (1-3)",
    company: "Ola",
    location: "Bangalore",
    mode: "Hybrid",
    experience: "1-3",
    skills: ["Java", "Spring", "Kafka", "Cassandra"],
    source: "Naukri",
    postedDaysAgo: 3,
    salaryRange: "12–20 LPA",
    applyUrl: "https://www.olacabs.com/careers/backend",
    description: "Build systems that power India's largest mobility platform. Work on ride matching, pricing, and real-time tracking at massive scale."
  },
  {
    id: "job-054",
    title: "Data Engineer (0-1)",
    company: "Ola",
    location: "Bangalore",
    mode: "Onsite",
    experience: "0-1",
    skills: ["Python", "Spark", "Hadoop", "Airflow"],
    source: "Indeed",
    postedDaysAgo: 7,
    salaryRange: "8–14 LPA",
    applyUrl: "https://www.olacabs.com/careers/data-engineer",
    description: "Build data pipelines for Ola's analytics and ML platforms. Process ride data, driver behavior, and customer insights."
  },
  // Startup - OYO
  {
    id: "job-055",
    title: "Frontend Developer (1-3)",
    company: "OYO",
    location: "Gurgaon",
    mode: "Hybrid",
    experience: "1-3",
    skills: ["React", "Next.js", "TypeScript", "CSS"],
    source: "LinkedIn",
    postedDaysAgo: 4,
    salaryRange: "10–18 LPA",
    applyUrl: "https://www.oyorooms.com/careers/frontend",
    description: "Build the world's leading travel technology platform. Work on booking engines, hotel management systems, and customer-facing applications."
  },
  {
    id: "job-056",
    title: "Business Analyst (0-1)",
    company: "OYO",
    location: "Gurgaon",
    mode: "Hybrid",
    experience: "0-1",
    skills: ["SQL", "Excel", "PowerPoint", "Analytics"],
    source: "Naukri",
    postedDaysAgo: 8,
    salaryRange: "6–10 LPA",
    applyUrl: "https://www.oyorooms.com/careers/business-analyst",
    description: "Analyze business metrics for OYO's global operations. Generate insights, build reports, and support strategic decisions."
  },
  // Startup - Lenskart
  {
    id: "job-057",
    title: "Computer Vision Engineer",
    company: "Lenskart",
    location: "Faridabad",
    mode: "Hybrid",
    experience: "1-3",
    skills: ["Python", "OpenCV", "TensorFlow", "Deep Learning"],
    source: "Indeed",
    postedDaysAgo: 2,
    salaryRange: "10–18 LPA",
    applyUrl: "https://lenskart.com/careers/cv-engineer",
    description: "Build AR try-on experiences for eyewear. Work on face detection, virtual glasses fitting, and 3D rendering."
  },
  {
    id: "job-058",
    title: "Mobile Developer Intern",
    company: "Lenskart",
    location: "Faridabad",
    mode: "Onsite",
    experience: "Fresher",
    skills: ["Flutter", "Dart", "Mobile Development", "UI/UX"],
    source: "LinkedIn",
    postedDaysAgo: 6,
    salaryRange: "₹20k–₹30k/month Internship",
    applyUrl: "https://lenskart.com/careers/mobile-intern",
    description: "Build cross-platform mobile apps using Flutter. Learn mobile development while contributing to India's leading eyewear platform."
  },
  // Startup - Nykaa
  {
    id: "job-059",
    title: "QA Engineer (1-3)",
    company: "Nykaa",
    location: "Mumbai",
    mode: "Hybrid",
    experience: "1-3",
    skills: ["Selenium", "Appium", "API Testing", "Automation"],
    source: "Naukri",
    postedDaysAgo: 3,
    salaryRange: "8–14 LPA",
    applyUrl: "https://www.nykaa.com/careers/qa-engineer",
    description: "Ensure quality for India's leading beauty and fashion platform. Build automation frameworks, test e-commerce flows, and maintain high standards."
  },
  {
    id: "job-060",
    title: "SDE Intern",
    company: "Nykaa",
    location: "Mumbai",
    mode: "Hybrid",
    experience: "Fresher",
    skills: ["Java", "Spring Boot", "MySQL", "Redis"],
    source: "Indeed",
    postedDaysAgo: 5,
    salaryRange: "₹25k–₹40k/month Internship",
    applyUrl: "https://www.nykaa.com/careers/sde-intern",
    description: "Join India's premier beauty-tech company. Learn e-commerce development, work on inventory systems, and gain full-stack experience."
  }
];

export const getUniqueLocations = (): string[] => {
  const locations = [...new Set(jobs.map(job => job.location))];
  return locations.sort();
};

export const getUniqueSkills = (): string[] => {
  const allSkills = jobs.flatMap(job => job.skills);
  return [...new Set(allSkills)].sort();
};
