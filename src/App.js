import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  FiArrowDownCircle, 
  FiMenu, 
  FiX, 
  FiGithub, 
  FiLinkedin, 
  FiMail, 
  FiPhone, 
  FiExternalLink 
} from "react-icons/fi";
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaNodeJs,
  FaPython
} from "react-icons/fa";
import { 
  SiReact, 
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiTypescript,
  SiDocker,
  SiVercel,
  SiJupyter,
  SiPostman,
  SiFigma,
  SiGit,
  SiIntellijidea,
  SiCanva,
  SiNextdotjs, 
  SiMaterialui, 
  SiRedux, 
  SiDjango, 
  SiPostgresql, 
  SiGraphql, 
  SiFirebase, 
  SiSupabase,
  SiNetlify,
  SiTensorflow,
  SiKeras
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import emailjs from '@emailjs/browser';
// Glass card component
const GlassCard = ({ children, className = "" }) => (
  <div className={`backdrop-blur-lg bg-white/10 dark:bg-gray-900/50 border border-white/20 dark:border-gray-700/50 rounded-xl shadow-lg ${className}`}>
    {children}
  </div>
);

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  // Scroll handler
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  // Track scroll position and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'projects', 'certificates', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navbar links data - Added certificates
  const navLinks = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "certificates", label: "Certificates" },
    { id: "contact", label: "Contact" }
  ];

  const projects = [
    {
      title: "Institute Student Portal",
      desc: "Website aiding students, faculty, and guests with access to results, exam schedules, and registration procedures.",
      stack: "PHP, MySQL, HTML, CSS",
      link: "#",
      gif: "https://via.placeholder.com/400x225/6366f1/ffffff?text=Student+Portal"
    },
    {
      title: "College Management System",
      desc: "Enhanced system serving colleges and universities in managing daily tasks with centralized control.",
      stack: "HTML, CSS, JavaScript",
      link: "https://github.com/ShambhaviSingh16/College-Management-System",
      gif: "https://via.placeholder.com/400x225/6366f1/ffffff?text=College+System"
    },
    {
      title: "Ticket Reservation Portal",
      desc: "Java-based portal for booking train tickets, managing journeys, and tracking reservations.",
      stack: "Java, MySQL, JSP, Servlets",
      link: "#",
      gif: "https://via.placeholder.com/400x225/6366f1/ffffff?text=Ticket+Portal"
    }
  ];

  const certificates = [
    {
      title: "Full Stack Web Development",
      issuer: "Udemy",
      date: "June 2023",
      link: "#",
      verified: true,
      logo: "https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
    },
    {
      title: "Java Programming",
      issuer: "Coursera",
      date: "March 2023",
      link: "#",
      verified: true,
      logo: "https://d3njjcbhbojbot.cloudfront.net/web/images/favicons/apple-touch-icon.png"
    },
    {
      title: "React Advanced Concepts",
      issuer: "Pluralsight",
      date: "August 2023",
      link: "#",
      verified: true,
      logo: "https://www.pluralsight.com/etc/clientlibs/pluralsight/main/images/favicons/favicon-96x96.png"
    },
    {
      title: "Cloud Computing Fundamentals",
      issuer: "AWS",
      date: "January 2024",
      link: "#",
      verified: true,
      logo: "https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png"
    }
  ];

  return (
    <div className="relative bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-950 text-gray-800 dark:text-gray-100 font-sans min-h-screen">
      {/* Background gradient */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-200/20 via-white to-purple-200/20 dark:from-indigo-900/20 dark:via-gray-950 dark:to-purple-900/20"></div>
      </div>

      {/* Floating circles */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-indigo-300/20 dark:bg-indigo-900/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-purple-300/20 dark:bg-purple-900/20 blur-3xl"></div>
      </div>
      
      {/* Navbar */}
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 ${
          scrolled 
            ? "bg-white/80 dark:bg-gray-900/80 border-b border-white/10 dark:border-gray-800 h-16 shadow-sm" 
            : "bg-transparent dark:bg-transparent h-20"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center h-full">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h1
              className="text-2xl font-bold tracking-tight text-indigo-700 dark:text-indigo-300 cursor-pointer transition"
              onClick={() => scrollToSection("home")}
            >
              Shambhavi
            </h1>
          </motion.div>
          
          <div className="flex items-center gap-4">
            {/* Desktop Navigation */}
            <ul className="hidden md:flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.id} className="relative">
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className={`px-2 py-1 text-sm font-medium transition ${
                      activeSection === link.id 
                        ? "text-indigo-600 dark:text-indigo-400" 
                        : "text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400"
                    }`}
                  >
                    {link.label}
                    {activeSection === link.id && (
                      <motion.span 
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 dark:bg-indigo-400"
                        layoutId="navUnderline"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30
                        }}
                      />
                    )}
                  </button>
                </li>
              ))}
            </ul>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 text-gray-700 dark:text-gray-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="md:hidden bg-white/95 dark:bg-gray-900/95 shadow-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <ul className="px-6 py-4 space-y-4">
                {navLinks.map((link) => (
                  <motion.li 
                    key={link.id}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ 
                      delay: 0.1 * navLinks.indexOf(link),
                      type: "spring",
                      stiffness: 300
                    }}
                  >
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className={`w-full text-left px-2 py-1 font-medium flex items-center ${
                        activeSection === link.id 
                          ? "text-indigo-600 dark:text-indigo-400" 
                          : "text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      {link.label}
                      {activeSection === link.id && (
                        <motion.span 
                          className="ml-2 w-2 h-2 bg-indigo-500 dark:bg-indigo-400 rounded-full inline-block"
                          layoutId="mobileNavIndicator"
                          initial={false}
                        />
                      )}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section 
        id="home" 
        ref={heroRef}
        className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 relative overflow-hidden"
      >
        <motion.div 
          className="absolute inset-0 -z-10"
          style={{
            y: yBg,
            background: 'radial-gradient(circle, rgba(79,70,229,0.1) 0%, rgba(79,70,229,0) 100%)'
          }}
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: "spring" }}
        >
          <GlassCard className="px-8 py-6 mb-8 inline-block">
            <p className="text-indigo-600 dark:text-indigo-400 font-medium">MCA Student & Web Developer</p>
          </GlassCard>
        </motion.div>
        
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-6"
          initial={{ opacity: 0, y: -60 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, type: "spring" }}
        >
          Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Shambhavi Singh</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          I build exceptional digital experiences with modern web technologies and clean, efficient code.
        </motion.p>
        
        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <motion.a 
            href="/shambhavi_singh_updated_resume.pdf" 
            download="Shambhavi_Singh_Resume.pdf"
            className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>
          <motion.button
            onClick={() => scrollToSection("projects")}
            className="border border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400 font-semibold px-6 py-3 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-800 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.button>
        </motion.div>
        
        <motion.div 
          className="mt-12 text-3xl text-indigo-600 dark:text-indigo-400 cursor-pointer" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 1.2 }}
          onClick={() => scrollToSection("about")}
          whileHover={{ scale: 1.2 }}
        > 
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FiArrowDownCircle /> 
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 md:px-20 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.7, type: "spring" }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-10 text-gray-900 dark:text-white">
              <span className="border-b-4 border-indigo-500 pb-1">About Me</span>
            </h2>
            
            <GlassCard className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-lg leading-relaxed mb-4">
                    I'm an enthusiastic MCA student from VTU, Bangalore with a BCA background from The Oxford College of Science. I specialize in building full-stack web applications using modern technologies.
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    With strong problem-solving abilities and attention to detail, I create efficient, scalable solutions. My excellent communication skills enable effective collaboration in team environments.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-indigo-50 dark:bg-gray-800 p-4 rounded-lg">
                      <h4 className="font-medium text-indigo-800 dark:text-indigo-300 mb-2">Education</h4>
                      <p className="text-sm">MCA at VTU Bangalore</p>
                      <p className="text-sm">BCA at Bangalore University</p>
                    </div>
                    <div className="bg-indigo-50 dark:bg-gray-800 p-4 rounded-lg">
                      <h4 className="font-medium text-indigo-800 dark:text-indigo-300 mb-2">Languages</h4>
                      <p className="text-sm">English (Fluent)</p>
                      <p className="text-sm">Hindi (Native)</p>
                    </div>
                  </div>
                </div>
                
                <motion.div 
                  className="hidden md:block"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                  viewport={{ once: true }}
                >
                  <div className="relative w-full h-64 bg-indigo-100 dark:bg-gray-700 rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-500 opacity-20 dark:opacity-30"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl text-indigo-600 dark:text-indigo-400 opacity-30">👩‍💻</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 md:px-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
              <span className="border-b-4 border-indigo-500 pb-1">Skills</span>
            </h2>
            <p className="text-center text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
              Here's a comprehensive overview of my technical skills and tools I work with.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Frontend Development */}
<GlassCard className="p-8 hover:shadow-xl transition-shadow duration-300">
  <div className="flex items-center gap-4 mb-6">
    <div className="p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl">
      <VscCode className="text-indigo-600 dark:text-indigo-400 text-2xl" />
    </div>
    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Frontend Development</h3>
  </div>
  <div className="flex flex-wrap gap-3">
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
    >
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="w-5 h-5" alt="HTML" />
      <span className="text-lg font-medium">HTML</span>
    </motion.div>
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
    >
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="w-5 h-5" alt="CSS" />
      <span className="text-lg font-medium">CSS</span>
    </motion.div>
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
    >
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" className="w-5 h-5" alt="Bootstrap" />
      <span className="text-lg font-medium">Bootstrap</span>
    </motion.div>
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
    >
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-5 h-5" alt="JavaScript" />
      <span className="text-lg font-medium">JavaScript</span>
    </motion.div>
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
    >
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" className="w-5 h-5" alt="TypeScript" />
      <span className="text-lg font-medium">TypeScript</span>
    </motion.div>
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
    >
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" className="w-5 h-5" alt="jQuery" />
      <span className="text-lg font-medium">jQuery</span>
    </motion.div>
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
    >
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-5 h-5" alt="React" />
      <span className="text-lg font-medium">React.js</span>
    </motion.div>
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
    >
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" className="w-5 h-5" alt="Next.js" />
      <span className="text-lg font-medium">Next.js</span>
    </motion.div>
    <motion.div
  whileHover={{ scale: 1.05 }}
  className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
>
  <img 
    src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" 
    className="w-5 h-5" 
    alt="Tailwind CSS" 
    style={{ filter: 'brightness(0) invert(1)' }} 
  />
  <span className="text-lg font-medium">Tailwind CSS</span>
</motion.div>
  </div>
</GlassCard>

{/* Backend Development */}
<GlassCard className="p-8 hover:shadow-xl transition-shadow duration-300">
  <div className="flex items-center gap-4 mb-6">
    <div className="p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl">
      <FaNodeJs className="text-indigo-600 dark:text-indigo-400 text-2xl" />
    </div>
    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Backend Development</h3>
  </div>
  <div className="flex flex-wrap gap-3">
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
    >
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="w-5 h-5" alt="Node.js" />
      <span className="text-lg font-medium">Node.js</span>
    </motion.div>
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
    >
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="w-5 h-5" alt="MongoDB" />
      <span className="text-lg font-medium">MongoDB</span>
    </motion.div>
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
    >
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" className="w-5 h-5" alt="MySQL" />
      <span className="text-lg font-medium">MySQL</span>
    </motion.div>
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
    >
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" className="w-5 h-5" alt="Express.js" />
      <span className="text-lg font-medium">Express.js</span>
    </motion.div>
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
    >
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" className="w-5 h-5" alt="Django" />
      <span className="text-lg font-medium">Django</span>
    </motion.div>
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
    >
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" className="w-5 h-5" alt="PostgreSQL" />
      <span className="text-lg font-medium">PostgreSQL</span>
    </motion.div>
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
    >
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" className="w-5 h-5" alt="GraphQL" />
      <span className="text-lg font-medium">GraphQL</span>
    </motion.div>
  </div>
</GlassCard>

{/* Data Analysis */}
<GlassCard className="p-8 hover:shadow-xl transition-shadow duration-300">
  <div className="flex items-center gap-4 mb-6">
    <div className="p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl">
      <FaPython className="text-indigo-600 dark:text-indigo-400 text-2xl" />
    </div>
    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Data Analysis and Virtualization</h3>
  </div>
  <div className="flex flex-wrap gap-3">
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
    >
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-5 h-5" alt="Python" />
      <span className="text-lg font-medium">Python</span>
    </motion.div>
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
    >
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" className="w-5 h-5" alt="Pandas" />
      <span className="text-lg font-medium">Pandas</span>
    </motion.div>
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
    >
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" className="w-5 h-5" alt="NumPy" />
      <span className="text-lg font-medium">NumPy</span>
    </motion.div>
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
    >
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" className="w-5 h-5" alt="Matplotlib" />
      <span className="text-lg font-medium">Matplotlib</span>
    </motion.div>
    <motion.div
  whileHover={{ scale: 1.05 }}
  className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
>
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#5A9BD4"/>
    <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="#5A9BD4"/>
    <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="#5A9BD4"/>
  </svg>
  <span className="text-lg font-medium">Seaborn</span>
</motion.div>
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
    >
      <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" className="w-5 h-5" alt="Scikit-Learn" />
      <span className="text-lg font-medium">Scikit-Learn</span>
    </motion.div>
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
    >
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" className="w-5 h-5" alt="TensorFlow" />
      <span className="text-lg font-medium">TensorFlow</span>
    </motion.div>
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
    >
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg" className="w-5 h-5" alt="Keras" />
      <span className="text-lg font-medium">Keras</span>
    </motion.div>
  </div>
</GlassCard>

 {/* Concepts Section - Original Layout with New Symbols */}
<GlassCard className="p-8 hover:shadow-xl transition-shadow duration-300">
  <div className="flex items-center gap-4 mb-6">
    <div className="p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl">
      <VscCode className="text-indigo-600 dark:text-indigo-400 text-2xl" />
    </div>
    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Concepts</h3>
  </div>
  <div className="flex flex-wrap gap-3">
    {/* Data Structure & Algorithm */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
    >
      <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
      <span className="text-lg font-medium">Data Structure & Algorithm</span>
    </motion.div>
 {/* Database Management System */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
    >
      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
      <span className="text-lg font-medium">Database Management System</span>
    </motion.div>
 {/* Software Engineering */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
    >
      <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
      <span className="text-lg font-medium">Software Engineering</span>
    </motion.div>
 {/* Computer Architecture */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
    >
      <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
      <span className="text-lg font-medium">Computer Architecture</span>
    </motion.div>
 {/* Data Communication & Network */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
    >
      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
      <span className="text-lg font-medium">Data Communication & Network</span>
    </motion.div>
  </div>
</GlassCard>


{/* Version Control */}
<GlassCard className="p-8 hover:shadow-xl transition-shadow duration-300">
  <div className="flex items-center gap-4 mb-6">
    <div className="p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl">
      <SiGit className="text-indigo-600 dark:text-indigo-400 text-2xl" />
    </div>
    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Version Control & Deployment</h3>
  </div>
  <div className="flex flex-wrap gap-3">
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
    >
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" className="w-5 h-5" alt="Git" />
      <span className="text-lg font-medium">Git</span>
    </motion.div>
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
    >
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" className="w-5 h-5" alt="GitHub" />
      <span className="text-lg font-medium">GitHub</span>
    </motion.div>
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
    >
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" className="w-5 h-5" alt="Docker" />
      <span className="text-lg font-medium">Docker</span>
    </motion.div>
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
    >
      <img src="https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png" className="w-5 h-5" alt="Vercel" />
      <span className="text-lg font-medium">Vercel</span>
    </motion.div>
    <motion.div
  whileHover={{ scale: 1.05 }}
  className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
>
  <img 
    src="https://www.netlify.com/v3/img/components/logomark-dark.png" 
    className="w-5 h-5" 
    alt="Netlify" 
  />
  <span className="text-lg font-medium">Netlify</span>
</motion.div>
  </div>
</GlassCard>

{/* Tools */}
<GlassCard className="p-8 hover:shadow-xl transition-shadow duration-300">
  <div className="flex items-center gap-4 mb-6">
    <div className="p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl">
      <SiIntellijidea className="text-indigo-600 dark:text-indigo-400 text-2xl" />
    </div>
    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Tools</h3>
  </div>
  <div className="flex flex-wrap gap-3">
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
    >
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" className="w-5 h-5" alt="VS Code" />
      <span className="text-lg font-medium">VS Code</span>
    </motion.div>
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
    >
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg" className="w-5 h-5" alt="PyCharm" />
      <span className="text-lg font-medium">PyCharm</span>
    </motion.div>
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
    >
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" className="w-5 h-5" alt="Jupyter" />
      <span className="text-lg font-medium">Jupyter Notebook</span>
    </motion.div>
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
    >
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" className="w-5 h-5" alt="Canva" />
      <span className="text-lg font-medium">Canva</span>
    </motion.div>
  </div>
</GlassCard>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 md:px-20 bg-indigo-50/30 dark:bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-10 text-gray-900 dark:text-white text-center">
              <span className="border-b-4 border-indigo-500 pb-1">Projects</span>
            </h2>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
                  viewport={{ once: true }}
                >
                  <GlassCard className="p-6 h-full">
                    <div className="relative overflow-hidden rounded-lg mb-4 h-48">
                      {project.gif ? (
                        <img 
                          src={project.gif} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full bg-indigo-100 dark:bg-gray-700 flex items-center justify-center">
                          <div className="text-4xl text-indigo-600 dark:text-indigo-400 opacity-30">📁</div>
                        </div>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-indigo-800 dark:text-indigo-300 mb-2">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm">
                      {project.desc}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.stack.split(", ").map((tech, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-indigo-100 dark:bg-gray-700 text-indigo-800 dark:text-indigo-300 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {project.link && (
                      <motion.a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline"
                        whileHover={{ x: 2 }}
                      >
                        <FiGithub className="mr-1" /> View Project
                      </motion.a>
                    )}
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 px-6 md:px-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-10 text-gray-900 dark:text-white text-center">
              <span className="border-b-4 border-indigo-500 pb-1">Certificates</span>
            </h2>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                  {certificates.map((certificate, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5 }}
                    >
                      <GlassCard className="p-6 h-full hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-start justify-between mb-3">
                          <div className="bg-indigo-100 dark:bg-gray-700 p-2 rounded-lg">
                            <img 
                              src={certificate.logo || "https://via.placeholder.com/40"} 
                              alt={certificate.issuer} 
                              className="w-10 h-10 object-contain"
                            />
                          </div>
                          {certificate.verified && (
                            <motion.span 
                              className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 rounded-full flex items-center"
                              initial={{ scale: 0.9 }}
                              animate={{ scale: 1 }}
                              transition={{ 
                                repeat: Infinity,
                                repeatType: "reverse",
                                duration: 1.5
                              }}
                            >
                              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              Verified
                            </motion.span>
                          )}
                        </div>
                        
                        <h3 className="text-lg font-semibold text-indigo-800 dark:text-indigo-300 mb-1">
                          {certificate.title}
                        </h3>
                        
                        <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                          {certificate.issuer}
                        </p>
                        
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                          Issued: {certificate.date}
                        </p>
                        
                        {certificate.link && (
                          <motion.a 
                            href={certificate.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline"
                            whileHover={{ x: 2 }}
                          >
                            View Certificate <FiExternalLink className="ml-1" />
                          </motion.a>
                        )}
                      </GlassCard>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 md:px-20 bg-indigo-50/30 dark:bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-10 text-gray-900 dark:text-white text-center">
              <span className="border-b-4 border-indigo-500 pb-1">Get In Touch</span>
            </h2>
            
            <GlassCard className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-indigo-800 dark:text-indigo-300 mb-4">Let's Connect</h3>
                  <p className="text-lg mb-6">
                    Have a project in mind or want to discuss opportunities? Feel free to reach out!
                  </p>
                                    
                  <div className="space-y-4">
                    <motion.div 
                      className="flex items-center gap-4 p-4 rounded-lg hover:bg-indigo-50/50 dark:hover:bg-gray-700/50 transition"
                      whileHover={{ x: 5 }}
                    >
                      <div className="p-3 bg-indigo-100 dark:bg-gray-700 rounded-full">
                        <FiMail className="text-indigo-600 dark:text-indigo-400 text-xl" />
                      </div>
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <a 
                          href="mailto:shambhavi.singh@example.com" 
                          className="text-indigo-600 dark:text-indigo-400 hover:underline"
                        >
                          sshambhavi89@gmail.com
                        </a>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-center gap-4 p-4 rounded-lg hover:bg-indigo-50/50 dark:hover:bg-gray-700/50 transition"
                      whileHover={{ x: 5 }}
                    >
                      <div className="p-3 bg-indigo-100 dark:bg-gray-700 rounded-full">
                        <FiPhone className="text-indigo-600 dark:text-indigo-400 text-xl" />
                      </div>
                      <div>
                        <h4 className="font-medium">Phone</h4>
                        <a 
                          href="tel:+919380250104" 
                          className="text-indigo-600 dark:text-indigo-400 hover:underline"
                        >
                          +91 9380250104
                        </a>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-center gap-4 p-4 rounded-lg hover:bg-indigo-50/50 dark:hover:bg-gray-700/50 transition"
                      whileHover={{ x: 5 }}
                    >
                      <div className="p-3 bg-indigo-100 dark:bg-gray-700 rounded-full">
                        <FiLinkedin className="text-indigo-600 dark:text-indigo-400 text-xl" />
                      </div>
                      <div>
                        <h4 className="font-medium">LinkedIn</h4>
                        <a 
                          href="https://www.linkedin.com/in/shambhavi-singh2023" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-indigo-600 dark:text-indigo-400 hover:underline"
                        >
                          https://www.linkedin.com/in/shambhavi-singh2023
                        </a>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-center gap-4 p-4 rounded-lg hover:bg-indigo-50/50 dark:hover:bg-gray-700/50 transition"
                      whileHover={{ x: 5 }}
                    >
                      <div className="p-3 bg-indigo-100 dark:bg-gray-700 rounded-full">
                        <FiGithub className="text-indigo-600 dark:text-indigo-400 text-xl" />
                      </div>
                      <div>
                        <h4 className="font-medium">GitHub</h4>
                        <a 
                          href="https://github.com/ShambhaviSingh16" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-indigo-600 dark:text-indigo-400 hover:underline"
                        >
                          https://github.com/ShambhaviSingh16
                        </a>
                      </div>
                    </motion.div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-indigo-800 dark:text-indigo-300 mb-4">Send Me a Message</h3>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="example@gmail.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        className="w-full px-4 py-2 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Subject"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                      <textarea
                        id="message"
                        rows="4"
                        className="w-full px-4 py-2 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Your message here..."
                      ></textarea>
                    </div>
                    
                    <motion.button
                      type="submit"
                      className="w-full bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Send Message
                    </motion.button>
                  </form>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-indigo-900/10 dark:bg-gray-900/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold text-indigo-700 dark:text-indigo-300">Shambhavi Singh</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400"></p>
            </div>
            
            <div className="flex space-x-6">
              <motion.a 
                href="https://github.com/ShambhaviSingh16" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                <FiGithub size={20} />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/shambhavi-singh2023" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                <FiLinkedin size={20} />
              </motion.a>
              <motion.a 
                href="mailto:sshambhavi89@gmail.com" 
                whileHover={{ y: -3 }}
                className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                <FiMail size={20} />
              </motion.a>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-600 dark:text-gray-400">
            <p>© {new Date().getFullYear()} Shambhavi Singh. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;