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
  FiExternalLink,
  FiSun,
  FiMoon
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
  SiNodedotjs,
  SiTensorflow,
  SiKeras
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import emailjs from '@emailjs/browser';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import ThankYou from './components/ThankYou';


// Glass card component
const GlassCard = ({ children, className = "" }) => (
  <div className={`backdrop-blur-lg bg-white/10 dark:bg-gray-900/50 border border-white/20 dark:border-gray-700/50 rounded-xl shadow-lg ${className}`}>
    {children}
  </div>
);

// Typing animation component
const TypingAnimation = () => {
  const roles = ["Full Stack Developer", "UI/UX Designer", "Software Tester / QA", "Software Developer", "Open-Source Contributor", "AI Enthusiast", "Network Engineer", "Web Developer"];
  const [displayedText, setDisplayedText] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const currentRole = roles[currentRoleIndex];

    if (isTyping) {
      if (displayedText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
          setIsDeleting(true);
        }, 1500);
      }
    } else if (isDeleting) {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.substring(0, displayedText.length - 1));
        }, 50);
      } else {
        setIsDeleting(false);
        setCurrentRoleIndex((currentRoleIndex + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, currentRoleIndex, isTyping, isDeleting, roles]);

  return (
    <span className="text-indigo-600 dark:text-indigo-400">
      {displayedText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="ml-1"
      >
        |
      </motion.span>
    </span>
  );
};

// Animated Avatar Component
const AnimatedAvatar = () => {
  return (
    <motion.div
      className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-indigo-500/20 dark:border-indigo-400/20"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring" }}
    >
      {/* Gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      />

      {/* Abstract shapes */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full opacity-70"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="white"
            d="M45.6,-59.3C58.4,-49.6,68,-34.9,72.9,-17.9C77.8,-0.9,78,18.4,69.6,34.7C61.2,51,44.2,64.3,24.5,72.6C4.8,80.9,-17.6,84.2,-36.6,76.5C-55.6,68.8,-71.2,50.1,-75.9,29.9C-80.6,9.7,-74.4,-12,-62.5,-29.1C-50.6,-46.2,-33,-58.8,-15.5,-66.7C2.1,-74.6,19.5,-77.9,35.3,-70.8C51.1,-63.8,65.3,-46.4,71.5,-27.7C77.7,-8.9,75.9,11.2,67.9,28.1C59.9,45,45.7,58.7,29.2,67.3C12.7,75.9,-6.1,79.4,-22.5,74.2C-38.9,69,-52.9,55.1,-62.8,38.6C-72.6,22.1,-78.2,3,-74.6,-14.7C-71,-32.4,-58.1,-48.6,-42.2,-57.4C-26.3,-66.2,-7.3,-67.6,10.1,-62.6C27.5,-57.6,55,-46.2,65.2,-30.3C75.4,-14.5,68.4,5.9,60.8,25.3C53.2,44.7,45,63.1,31.3,71.6C17.6,80.1,-1.6,78.7,-18.6,71.8C-35.6,64.9,-50.4,52.5,-59.7,36.8C-69,21.1,-72.9,2.1,-69.1,-15.6C-65.4,-33.3,-53.9,-49.7,-38.9,-58.9C-23.9,-68.1,-5.3,-70.1,12.8,-65.1C30.9,-60.1,61.8,-48.1,71.2,-31.1C80.6,-14.1,68.5,7.9,57.8,28.1C47.1,48.3,37.8,66.7,23.6,75.5C9.3,84.3,-9.8,83.5,-25.7,75.5C-41.6,67.4,-54.3,52.1,-62.8,34.3C-71.3,16.5,-75.6,-3.8,-71.3,-22.5C-67,-41.2,-54.1,-58.3,-38.1,-66.9C-22.1,-75.5,-3,-75.6,16.2,-69.9C35.4,-64.2,70.8,-52.8,77.7,-35.1C84.6,-17.4,63.1,6.6,51.9,28.3C40.7,50,39.8,69.4,28.8,78.2C17.8,87,-3.3,85.2,-21.6,77.1C-39.9,69,-55.4,54.6,-63.9,36.4C-72.4,18.2,-73.9,-3.8,-68.3,-23.2C-62.7,-42.6,-50,-59.4,-34.2,-68.5C-18.4,-77.6,0.5,-79,18.3,-72.5C36.1,-66,72.2,-51.6,81.3,-31.8C90.4,-12,72.5,13.2,59.8,36.3C47.1,59.4,39.6,80.4,26.2,86.9C12.8,93.4,-6.5,85.4,-22.8,74.4C-39.1,63.4,-52.3,49.4,-61.8,32.6C-71.3,15.8,-77.1,-3.8,-73.8,-21.8C-70.5,-39.8,-58.1,-55.3,-42.7,-64.8C-27.3,-74.3,-8.9,-77.8,8.6,-73.3C26.1,-68.8,52.2,-56.3,62.9,-38.8C73.6,-21.3,68.9,1.2,61.5,21.8C54.1,42.4,44,61,30.4,72.9C16.8,84.8,-0.3,90,-15.1,84.4C-29.9,78.8,-42.4,62.4,-52.9,44.4C-63.4,26.4,-71.9,6.8,-70.8,-12.1C-69.7,-31,-59,-49.2,-44.1,-59.1C-29.2,-69,-10.1,-70.6,7.3,-65.5C24.7,-60.4,49.4,-48.6,59.3,-32.5C69.2,-16.4,64.3,4,56.3,22.7C48.3,41.4,37.2,58.3,22.8,69.2C8.3,80.1,-9.5,85,-24.2,78.9C-38.9,72.8,-50.5,55.7,-59.9,36.9C-69.3,18.1,-76.5,-2.4,-74.1,-21.5C-71.7,-40.6,-59.7,-58.3,-43.9,-68.2C-28.1,-78.1,-8.5,-80.2,10.1,-73.2C28.7,-66.2,57.4,-50.1,68.9,-30.5C80.4,-10.9,74.7,12.2,64.9,32.8C55.1,53.4,41.2,71.5,24.8,80.2C8.4,88.9,-10.5,88.2,-26.3,80.1C-42.1,72,-54.8,56.5,-63.6,38.6C-72.4,20.7,-77.3,0.4,-74.1,-18.9C-70.9,-38.2,-59.6,-56.5,-44.3,-67.1C-29,-77.7,-9.7,-80.6,8.5,-75.2C26.7,-69.8,53.4,-56.1,64.6,-37.3C75.8,-18.5,71.5,5.4,63.1,27.3C54.7,49.2,42.2,69.1,26.3,79.8C10.4,90.5,-8.9,92,-25.4,83.9C-41.9,75.8,-55.6,58,-65.9,38.4C-76.2,18.8,-83.1,-2.6,-80.3,-22.5C-77.5,-42.4,-65,-60.9,-48.3,-71.7C-31.6,-82.5,-10.6,-85.6,8.3,-78.6C27.2,-71.6,54.3,-54.5,66.1,-33.3C77.9,-12.1,74.5,13.2,65.2,35.5C55.9,57.8,40.7,77.1,23.5,85.3C6.3,93.5,-12.9,90.6,-28.9,80.8C-44.9,71,-57.7,54.3,-66.7,35.5C-75.7,16.7,-80.9,-4.2,-77.1,-23.6C-73.3,-43,-60.5,-60.9,-43.7,-72.5C-26.9,-84.1,-6.1,-89.4,13.4,-83.1C32.9,-76.8,65.8,-58.9,77.3,-35.8C88.8,-12.7,78.9,15.6,65.3,40.5C51.7,65.4,34.4,86.9,14.7,93.8C-5,100.7,-27,93,-43.8,78.3C-60.6,63.6,-72.2,41.9,-78.2,18.8C-84.2,-4.3,-84.6,-28.8,-76.5,-49.1C-68.4,-69.4,-51.8,-85.5,-32.8,-89.9C-13.8,-94.3,7.6,-87,27.2,-75.1C46.8,-63.2,64.6,-46.7,75.1,-27.1C85.6,-7.5,88.8,15.2,83.4,35.7C78,56.2,64,74.5,46.1,84.4C28.2,94.3,6.4,95.8,-13.5,89.8C-33.4,83.8,-50.8,70.3,-63.1,52.7C-75.4,35.1,-82.6,13.4,-82.1,-8.5C-81.6,-30.4,-73.4,-52.6,-59.3,-69.4C-45.2,-86.2,-25.1,-97.6,-3.5,-91.9C18.1,-86.2,36.2,-63.4,49.7,-43.5C63.2,-23.6,72.1,-6.6,74.5,11.8C76.9,30.2,72.8,49.2,62.1,64.4C51.4,79.6,34.1,91,15.2,95.8C-3.7,100.6,-23.9,98.8,-40.4,89.4C-56.9,80,-69.6,63,-77.3,43.3C-85,23.6,-87.6,1.2,-83.9,-20.4C-80.2,-42,-70.2,-62.8,-55.1,-77.6C-40,-92.4,-19.8,-101.2,1.4,-101.2C22.6,-101.2,45.2,-92.4,62.1,-76.9C79,-61.4,90.2,-39.2,94.3,-15.8C98.4,7.6,95.4,32.2,85.6,53.3C75.8,74.4,59.2,92,40.1,101.2C21,110.4,-0.6,111.2,-19.8,103.7C-39,96.2,-55.8,80.4,-67.4,61.1C-79,41.8,-85.4,19,-85.1,-3.9C-84.8,-26.8,-77.8,-53.6,-64.7,-74.5C-51.6,-95.4,-32.4,-110.4,-11.2,-111.4C10,-112.4,20,-99.4,33.8,-85.2C47.6,-71,65.2,-55.6,76.3,-36.9C87.4,-18.2,92,3.8,89.1,24.8C86.2,45.8,75.8,65.8,60.4,80.3C45,94.8,24.6,103.8,3.7,104.4C-17.2,105,-38.5,97.2,-54.8,83.5C-71.1,69.8,-82.4,50.2,-87.6,29.3C-92.8,8.4,-91.9,-13.8,-84.4,-33.5C-76.9,-53.2,-62.8,-70.4,-45.5,-83.2C-28.2,-96,-7.7,-104.4,13.2,-100.6C34.1,-96.8,68.1,-80.8,91.5,-57.8C114.9,-34.8,127.7,-4.8,125.9,25.9C124.1,56.6,107.7,87.9,85.2,109.3C62.7,130.7,34.1,142.1,4.3,140.2C-25.5,138.3,-51,123.1,-69.8,101.3C-88.6,79.5,-100.6,51.1,-104.8,21.8C-109,-7.5,-105.4,-37.7,-94.1,-64.4C-82.8,-91.1,-63.8,-114.3,-40.8,-128.3C-17.8,-142.3,9.3,-147.1,34.4,-136.7C59.5,-126.3,82.6,-100.7,98.2,-71.5C113.8,-42.3,121.9,-9.5,120.5,23.4C119.1,56.3,108.2,89.4,89.7,114.6C71.2,139.8,45.1,157.1,16.9,163.3C-11.3,169.5,-41.7,164.6,-66.8,149.5C-91.9,134.3,-111.7,109,-124.2,80.1C-136.7,51.2,-141.9,18.7,-138.6,-12.9C-135.3,-44.5,-123.5,-75.2,-104.9,-99.9C-86.3,-124.6,-60.9,-143.3,-32.6,-152.3C-4.3,-161.3,26.9,-160.6,55.1,-150.6C83.3,-140.6,108.5,-121.3,126.3,-96.9C144.1,-72.5,154.5,-43,156.7,-12.8C158.9,17.4,152.9,48.4,139.3,75.2C125.7,102,104.5,124.6,79.9,140.2C55.3,155.8,27.7,164.4,-1.4,164.9C-30.5,165.4,-61,157.8,-85.8,141.8C-110.6,125.8,-129.6,101.4,-140.9,73.8C-152.2,46.2,-155.8,15.4,-150.8,-14.1C-145.8,-43.6,-132.2,-71.9,-112.6,-95.1C-93,-118.3,-67.4,-136.4,-39.3,-145.5C-11.2,-154.6,19.4,-154.7,46.8,-144.4C74.2,-134.1,98.4,-113.4,116.4,-88.1C134.4,-62.8,146.2,-32.9,149.3,-1.9C152.4,29.1,146.8,59.2,133.7,85.1C120.6,111,100,132.7,76.1,146.7C52.2,160.7,25.1,167,-2.6,166.3C-30.3,165.6,-60.6,157.9,-85.1,142.9C-109.6,127.9,-128.3,105.6,-139.7,80.1C-151.1,54.6,-155.2,25.9,-150.7,-1.9C-146.2,-29.7,-133.1,-58.4,-113.4,-82.3C-93.7,-106.2,-67.4,-125.3,-38.3,-135.4C-9.2,-145.5,22.7,-146.6,51.6,-137.1C80.5,-127.6,106.4,-107.5,125.2,-82.6C144,-57.7,155.7,-28,158.3,2.9C160.9,33.8,154.4,67.6,140.1,96.2C125.8,124.8,103.7,148.2,78.1,163.3C52.5,178.4,23.3,185.2,-5.7,183.5C-34.7,181.8,-69.4,171.6,-96.2,153.2C-123,134.8,-141.9,108.2,-152.3,79.1C-162.7,50,-164.6,18.4,-158.1,-11.4C-151.6,-41.2,-136.7,-69.4,-115.6,-92.1C-94.5,-114.8,-67.2,-131.9,-37.3,-140.6C-7.4,-149.3,25.1,-149.6,54.7,-139.9C84.3,-130.2,110.9,-110.5,131.5,-86.1C152.1,-61.7,166.7,-32.6,170.5,-1.8C174.3,29,167.3,60,152.3,86.5C137.3,113,114.3,135,88.3,149.8C62.3,164.6,33.2,172.2,2.8,171.2C-27.6,170.2,-56,160.6,-80.1,144.1C-104.2,127.6,-124,104.2,-136.9,77.1C-149.8,50,-155.8,19.2,-153.4,-10.7C-151,-40.6,-140.2,-69.2,-122.5,-92.9C-104.8,-116.6,-80.2,-135.4,-52.3,-144.8C-24.4,-154.2,6.8,-154.2,34.5,-143.7C62.2,-133.2,86.4,-112.2,104.9,-87.1C123.4,-62,136.2,-32.7,139.8,-1.8C143.4,29.1,137.8,58.2,124.8,83.2C111.8,108.2,91.4,129.1,67.6,142.9C43.8,156.7,16.9,163.4,-10.3,164.1C-37.5,164.8,-75,159.5,-103.5,144.5C-132,129.5,-151.5,104.8,-163.1,77.3C-174.7,49.8,-178.4,19.4,-173.5,-9.2C-168.6,-37.8,-155.1,-64.4,-135.9,-86.3C-116.7,-108.2,-91.8,-125.4,-64.3,-135.4C-36.8,-145.4,-6.8,-148.2,21.9,-140.7C50.6,-133.2,101.2,-115.4,126.1,-85.4C151,-55.4,150.2,-13.2,138.8,22.3C127.4,57.8,105.4,90.2,77.7,113.8C50,137.4,16.5,152.2,-16.2,153.2C-48.9,154.2,-97.8,141.4,-127.9,115.4C-158,89.4,-169.3,50.2,-165.4,13.3C-161.5,-23.6,-142.4,-57.2,-115.9,-82.8C-89.4,-108.4,-55.5,-125.9,-20.9,-132.9C13.7,-139.9,48.1,-136.4,77.3,-123.5C106.5,-110.6,130.5,-88.3,147.1,-61.6C163.7,-34.9,172.9,-3.8,169.3,26.4C165.7,56.6,149.3,85.2,126.3,106.8C103.3,128.4,73.7,143,42.8,149.3C11.9,155.6,-20.3,153.6,-48.2,142.9C-76.1,132.2,-99.7,112.8,-117.1,89.1C-134.5,65.4,-145.7,37.7,-148.4,9.1C-151.1,-19.5,-145.3,-48.1,-131.8,-72.8C-118.3,-97.5,-97.1,-118.3,-71.9,-132.1C-46.7,-145.9,-17.6,-152.7,10.8,-149.5C39.2,-146.3,78.4,-133.1,108.4,-111.5C138.4,-89.9,159.2,-59.9,168.2,-27.1C177.2,5.7,174.4,40.3,162.2,70.5C150,100.7,128.4,126.5,101.9,143.9C75.4,161.3,44,170.3,12.3,169.1C-19.4,167.9,-51,156.5,-77.2,138.3C-103.4,120.1,-124.2,95.1,-137.9,66.4C-151.6,37.7,-158.2,5.2,-156.3,-26.6C-154.4,-58.4,-144,-89.2,-126.8,-114.1C-109.6,-139,-85.6,-157.9,-58.4,-168.3C-31.2,-178.7,-0.8,-180.6,28.3,-173.3C57.4,-166,114.8,-149.5,141.1,-117.5C167.4,-85.5,162.6,-38,151.8,3.7C141,45.4,124.2,85.2,100.1,116.3C76,147.4,44.6,169.8,11.4,171.8C-21.8,173.8,-55.6,155.4,-81.1,130.1C-106.6,104.8,-123.8,72.6,-132.6,38.8C-141.4,5,-141.8,-30.4,-133.9,-63.1C-126,-95.8,-109.8,-125.8,-87.9,-148.5C-66,-171.2,-38.5,-186.6,-9.2,-189.5C20.1,-192.4,40.2,-182.8,58.5,-168.2C76.8,-153.6,93.3,-134,106.4,-111.8C119.5,-89.6,129.2,-64.8,133.8,-39.4C138.4,-14,137.9,12,131.5,36.6C125.1,61.2,112.8,84.4,95.8,102.8C78.8,121.2,57,134.8,33.5,142.8C10,150.8,-15.2,153.2,-38.7,146.5C-62.2,139.8,-83.9,124,-101.8,103.5C-119.7,83,-133.8,57.8,-141.3,30.9C-148.8,4,-149.7,-24.6,-143.6,-51.5C-137.5,-78.4,-124.4,-103.6,-106.3,-123.7C-88.2,-143.8,-65.1,-158.8,-40.1,-167.4C-15.1,-176,11.8,-178.2,36.4,-169.4C61,-160.6,83.4,-140.8,101.3,-116.8C119.2,-92.8,132.6,-64.6,139.7,-35.2C146.8,-5.8,147.6,24.8,141.8,53.8C136,82.8,123.6,110.2,105.8,131.8C88,153.4,64.8,169.2,39.7,176.3C14.6,183.4,-12.4,181.8,-37.2,173.2C-62,164.6,-84.6,149,-103.1,128.9C-121.6,108.8,-136,84.2,-144.8,57.8C-153.6,31.4,-156.8,3.2,-153.5,-23.9C-150.2,-51,-140.4,-76.8,-125.3,-98.2C-110.2,-119.6,-89.8,-136.6,-66.6,-148.4C-43.4,-160.2,-17.4,-166.8,8.6,-164.3C34.6,-161.8,69.2,-150.2,95.3,-130.8C121.4,-111.4,139,-84.2,148.7,-54.6C158.4,-25,160.2,7,155.3,37.6C150.4,68.2,138.8,96.4,121.7,119.4C104.6,142.4,82,160.2,56.9,170.5C31.8,180.8,4.2,183.6,-22.3,176.8C-48.8,170,-97.6,153.6,-127.8,125.6C-158,97.6,-169.6,58,-169.3,19.5C-169,-19,-156.8,-56.5,-135.2,-87.7C-113.6,-118.9,-82.6,-143.8,-49.7,-159.9C-16.8,-176,18,-183.3,50.8,-175.7C83.6,-168.1,114,-145.6,137.3,-118.4C160.6,-91.2,176.8,-59.3,183.5,-25.8C190.1,7.7,187.2,42.8,175.8,74.3C164.4,105.8,144.5,133.7,119.3,153.7C94.1,173.7,63.6,185.8,32.3,188.4C1,191,-31.1,184,-59.4,171.2C-87.7,158.4,-112.1,139.8,-131.6,116.9C-151.1,94,-165.7,66.8,-172.5,38C-179.3,9.2,-178.2,-21.2,-169.6,-49.3C-161,-77.4,-144.9,-104.2,-123.6,-125.8C-102.3,-147.4,-75.8,-163.8,-47.3,-172.3C-18.8,-180.8,11.8,-181.4,40.1,-173.5C68.4,-165.6,94.5,-149.2,115.5,-127.3C136.5,-105.4,152.4,-78,161.6,-48.6C170.8,-19.2,173.3,12.2,168.5,42.3C163.7,72.4,151.6,101.2,133.6,124.9C115.6,148.6,91.7,167.2,65.3,176.3C38.9,185.4,9.9,185,-18.7,176.7C-47.3,168.4,-94.6,152.1,-128.7,122.1C-162.8,92.1,-183.7,48.4,-187.2,4.3C-190.7,-39.8,-176.8,-83.6,-152.5,-118.6C-128.2,-153.6,-93.5,-179.8,-56.3,-191.9C-19.1,-204,20.6,-202,57.3,-190.3C94,-178.6,127.7,-157.2,154.1,-129.6C180.5,-102,199.6,-68.2,208.8,-32.6C218,3,217.3,40.4,207.7,75.1C198.1,109.8,179.6,141.8,155,167.2C130.4,192.6,99.7,211.4,67.1,220.5C34.5,229.6,0,229,-32.5,219.5C-65,210,-129.9,191.6,-167.8,155.6C-205.7,119.6,-216.5,66,-211.3,15.8C-206.1,-34.4,-184.9,-80.6,-152.5,-117.6C-120.1,-154.6,-76.5,-182.4,-31.8,-193.6C12.9,-204.8,58.5,-199.4,97.7,-182.9C136.9,-166.4,169.7,-138.8,193.9,-105.2C218.1,-71.6,233.7,-32,237.6,8.4C241.5,48.8,233.7,97.6,214.5,138.6C195.3,179.6,164.7,212.8,129.4,234.4C94.1,256,54.1,266,14.3,263.4C-25.5,260.8,-65,245.6,-98.5,222.6C-132,199.6,-159.5,168.8,-178.8,133.6C-198.1,98.4,-209.2,58.8,-210.8,19.1C-212.4,-20.6,-204.5,-60.4,-188.3,-96.2C-172.1,-132,-147.6,-163.9,-117.8,-187.9C-88,-211.9,-52.9,-228,-16.3,-233.6C20.3,-239.2,58,-234.4,91.6,-220.1C125.2,-205.8,154.8,-182,177.7,-152.4C200.6,-122.8,216.8,-87.4,223.9,-50.6C231,-13.8,229,24.4,218.3,60.2C207.6,96,188.2,129.4,162.6,155.4C137,181.4,105.2,200,71.5,209.7C37.8,219.4,2.2,220.2,-31.5,211.9C-65.2,203.6,-130.4,186.2,-170.1,150.2C-209.8,114.2,-224,59.6,-223.7,6.3C-223.4,-47,-208.6,-98.6,-183.7,-140.6C-158.8,-182.6,-123.8,-215,-85.2,-234.2C-46.6,-253.4,-4.4,-259.4,36.4,-250.4C77.2,-241.4,154.4,-217.4,197.1,-171.4C239.8,-125.4,248,-57.4,241.5,6.3C235,70,213.9,140,179.8,196C145.7,252,98.6,294,48.3,307.2C-2,320.4,-54.5,304.8,-98.3,276.8C-142.1,248.8,-177.2,208.4,-200.5,161.4C-223.8,114.4,-235.3,60.7,-235.1,7.3C-234.9,-46.1,-223,-98.1,-201.3,-143.1C-179.6,-188.1,-148.1,-226,-111.3,-251.5C-74.5,-277,-32.3,-290.1,8.9,-283.9C50.1,-277.7,100.2,-252.3,137.9,-213.3C175.6,-174.3,200.9,-121.7,213.2,-67.7C225.5,-13.7,224.9,41.7,211.8,93.2C198.7,144.7,173.1,192.3,138.8,226.3C104.5,260.3,61.5,280.7,16.8,284.8C-27.9,288.9,-74.3,276.7,-112.9,252.7C-151.5,228.7,-182.3,192.9,-202.6,151.9C-222.9,110.9,-232.7,64.7,-231.2,19.1C-229.7,-26.5,-217,-71.4,-196,-110.4C-175,-149.4,-145.7,-182.4,-111.5,-205.4C-77.3,-228.4,-38.2,-241.4,2,-241.8C42.2,-242.2,84.4,-230,120.1,-208C155.8,-186,185,-154.2,205.7,-116.8C226.4,-79.4,238.6,-36.4,240.5,6.4C242.4,49.2,234,98.4,215.3,140.4C196.6,182.4,167.6,217.2,133.1,239.6C98.6,262,58.6,272,18.2,270.4C-22.2,268.8,-66.1,255.6,-102.5,232.6C-138.9,209.6,-167.8,176.8,-187.7,138.8C-207.6,100.8,-218.5,57.6,-219.3,14.9C-220.1,-27.8,-210.8,-70,-193.1,-107C-175.4,-144,-149.3,-175.8,-118.6,-198.8C-87.9,-221.8,-52.6,-236,-16.1,-240.3C20.4,-244.6,58.7,-239,93.2,-224.4C127.7,-209.8,158.4,-186.2,182.7,-157.2C207,-128.2,224.9,-93.8,233.6,-57.6C242.4,-21.4,242.1,16.6,232.8,52.8C223.5,89,205.2,123.4,180.3,150.4C155.4,177.4,123.9,197,90.4,207.7C56.9,218.4,21.4,220.2,-13.5,213.2C-48.4,206.2,-96.8,190.4,-132.3,163.4C-167.8,136.4,-190.4,98.2,-202.7,57.8C-215,17.4,-217,-25.2,-209.9,-65.8C-202.8,-106.4,-186.6,-145,-163.3,-176C-140,-207,-109.6,-230.4,-76.9,-245.4C-44.2,-260.4,-9.2,-267,25.2,-260.2C59.6,-253.4,119.2,-233.8,158.1,-196.8C197,-159.8,215.2,-105.4,220.8,-51.8C226.4,1.8,219.4,54.6,201.8,101.6C184.2,148.6,156,189.8,121.9,219.8C87.8,249.8,47.9,268.6,6.5,271.4C-34.9,274.2,-73.8,261,-105.8,237C-137.8,213,-162.8,178.2,-178.9,138.2C-195,98.2,-202.2,53,-200,9.3C-197.8,-34.4,-186.2,-76.1,-167.2,-111.1C-148.2,-146.1,-121.8,-174.4,-91.6,-193.4C-61.4,-212.4,-27.2,-222.2,7.3,-221.5C41.8,-220.8,83.6,-209.6,118.1,-189.6C152.6,-169.6,179.8,-140.8,198.7,-107.8C217.6,-74.8,228.2,-37.6,229.4,0.3C230.6,38.2,222.4,76.4,205.8,109.4C189.2,142.4,164.2,170.2,134.2,188.2C104.2,206.2,69.2,214.4,33.6,214.2C-2,214,-40.2,205.4,-73.1,188.4C-106,171.4,-133.6,146,-153.8,116C-174,86,-186.8,51.4,-190.4,16.4C-194,-18.6,-188.4,-53.6,-174.8,-85.6C-161.2,-117.6,-139.6,-146.6,-113.1,-168.6C-86.6,-190.6,-55.2,-205.6,-22.6,-211.6C10,-217.6,44,-214.6,74.2,-203.6C104.4,-192.6,130.8,-173.6,151.4,-149.6C172,-125.6,186.8,-96.6,194.2,-65.6C201.6,-34.6,201.6,-1.6,194.1,30.4C186.6,62.4,171.6,93.4,151,118.4C130.4,143.4,104.2,162.4,75.6,172.4C47,182.4,16,183.4,-13.9,176.4C-43.8,169.4,-87.6,154.4,-121.1,130.4C-154.6,106.4,-177.8,73.4,-189.6,37.4C-201.4,1.4,-201.8,-37.6,-191.2,-73.6C-180.6,-109.6,-159,-142.6,-131.8,-167.6C-104.6,-192.6,-71.8,-209.6,-37.4,-215.6C-3,-221.6,33,-216.6,65.2,-203.6C97.4,-190.6,126.8,-169.6,150.2,-143.6C173.6,-117.6,191,-86.6,200.8,-53.6C210.6,-20.6,212.8,14.4,207.2,48.4C201.6,82.4,188.2,115.4,168.6,142.4C149,169.4,123.2,190.4,94.4,201.4C65.6,212.4,33.8,213.4,1.6,208.4C-30.6,203.4,-65.2,192.4,-94.4,174.4C-123.6,156.4,-147.4,131.4,-164,102.4C-180.6,73.4,-190,40.4,-191.6,7.4C-193.2,-25.6,-187,-58.6,-173.6,-88.6C-160.2,-118.6,-139.6,-145.6,-114.2,-165.6C-88.8,-185.6,-58.6,-198.6,-27.6,-202.6C3.4,-206.6,36.8,-201.6,66.8,-188.6C96.8,-175.6,123.4,-154.6,144.4,-128.6C165.4,-102.6,180.8,-71.6,188.6,-39.6C196.4,-7.6,196.6,25.4,189.2,56.4C181.8,87.4,166.8,116.4,146.2,138.4C125.6,160.4,99.4,175.4,71.6,182.4C43.8,189.4,14.4,188.4,-14.4,180.4C-43.2,172.4,-86.4,157.4,-121.4,134.4C-156.4,111.4,-183.2,80.4,-199.6,45.4C-216,10.4,-222,-28.6,-218.2,-66.6C-214.4,-104.6,-200.8,-141.6,-179.8,-171.6C-158.8,-201.6,-130.4,-224.6,-98.4,-237.6C-66.4,-250.6,-30.8,-253.6,4.2,-248.6C39.2,-243.6,78.4,-230.6,111.4,-210.6C144.4,-190.6,171.2,-163.6,190.2,-132.6C209.2,-101.6,220.4,-66.6,223.6,-31.6C226.8,3.4,222,38.4,209.6,70.4C197.2,102.4,177.2,131.4,151.8,153.4C126.4,175.4,95.6,190.4,63.6,196.4C31.6,202.4,-1.6,199.4,-33.6,189.4C-65.6,179.4,-104.4,162.4,-135.4,139.4C-166.4,116.4,-189.6,87.4,-203.6,54.4C-217.6,21.4,-222.4,-15.6,-217.8,-51.6C-213.2,-87.6,-199.2,-122.6,-177.8,-151.6C-156.4,-180.6,-127.6,-203.6,-95.6,-216.6C-63.6,-229.6,-28.4,-232.6,6.2,-228.6C40.8,-224.6,89.6,-213.6,129.6,-192.6" />
        </svg>
      </motion.div>

      {/* Center circle */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/30 flex items-center justify-center"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.8, 1, 0.8]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="text-4xl text-indigo-600 dark:text-indigo-400">👩‍💻</div>
      </motion.div>
    </motion.div>
  );
};

const AppContent = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [darkMode, setDarkMode] = useState(() => {
    // Check for saved theme preference or use system preference
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('darkMode');
      if (savedMode !== null) return savedMode === 'true';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });
  const [messageSent, setMessageSent] = useState(false);
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  // Apply dark mode class to document
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  // Handle message sent success
  useEffect(() => {
    if (messageSent) {
      navigate('/thank-you');
      const timer = setTimeout(() => {
        navigate('/');
        setMessageSent(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [messageSent, navigate]);


  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };


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
      title: "BudgetBuddy",
      desc: "Decentralized expense-sharing platform using Ethereum smart contracts with secure multi-user transactions.",
      stack: ["React", "Firebase", "Solidity", "Ethereum"],
      image: "/projects/budgetbuddy.png",
      live: "https://shambhavisingh.vercel.app", // MUST NOT be null
      code: "https://github.com/ShambhaviSingh16/BudgetBuddy",
      highlight: "🔐 Blockchain",

    },
    {
      title: "Ticket Reservation Portal",
      desc: "Full-stack train ticket booking system with authentication, admin control, and reservation management.",
      stack: ["Java", "JSP", "Servlets", "MySQL"],
      image: "/projects/ticket.png",
      live: "https://shambhavisingh.vercel.app",
      code: "https://github.com/ShambhaviSingh16/Online-Reservation-Portal",
      highlight: "🚆 Full Stack"
    },
    {
      title: "College Management System",
      desc: "Web-based system for managing student records, departments, and academic workflows along with the library department and notice board.",
      stack: ["HTML", "CSS", "JavaScript"],
      image: "/projects/college.png",
      live: "https://shambhavisingh.vercel.app",
      code: "https://github.com/ShambhaviSingh16/College-Management-System",
      highlight: "🎓 Academic Project"
    }
  ];


  const certificates = [
    {
      title: "Software Engineer Intern",
      issuer: "Paperbill Tech Pvt. Ltd.",
      date: "October 2025",
      link: "https://drive.google.com/file/d/1s84iiRcJwmYdCAtzyefKDZoHeiGT0fyp/view?usp=sharing",
      verified: true,
      logo: "https://paperbill.in/icons/icon-512x512.png"
    }

    // ,
    // {
    //   title: "Java Programming",
    //   issuer: "Coursera",
    //   date: "March 2023",
    //   link: "#",
    //   verified: true,
    //   logo: "https://d3njjcbhbojbot.cloudfront.net/web/images/favicons/apple-touch-icon.png"
    // },
    // {
    //   title: "React Advanced Concepts",
    //   issuer: "Pluralsight",
    //   date: "August 2023",
    //   link: "#",
    //   verified: true,
    //   logo: "https://www.pluralsight.com/etc/clientlibs/pluralsight/main/images/favicons/favicon-96x96.png"
    // },
    // {
    //   title: "Cloud Computing Fundamentals",
    //   issuer: "AWS",
    //   date: "January 2024",
    //   link: "#",
    //   verified: true,
    //   logo: "https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png"
    // }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    if (
      !process.env.REACT_APP_EMAILJS_SERVICE_ID ||
      !process.env.REACT_APP_EMAILJS_TEMPLATE_ID ||
      !process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    ) {
      alert("Email service not configured.");
      return;
    }

    const templateParams = {
      name: form.name.value,
      email: form.email.value,
      title: form.title.value,
      message: form.message.value,
      to_name: "Shambhavi Singh",
      reply_to: form.email.value,
      date: new Date().toLocaleString()
    };

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setMessageSent(true);
        form.reset();
      })
      .catch(() => {
        alert("Message failed. Try again later.");
      });
  };


  return (
    <>
      <main
        role="main"
        className="relative bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-950 text-gray-800 dark:text-gray-100 font-sans min-h-screen transition-colors duration-300"
      >

        {/* Background gradient */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-200/20 via-white to-purple-200/20 dark:from-indigo-900/20 dark:via-gray-950 dark:to-purple-900/20 transition-colors duration-300"></div>
        </div>

        {/* Floating circles */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-indigo-300/20 dark:bg-indigo-900/20 blur-3xl transition-colors duration-300"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-purple-300/20 dark:bg-purple-900/20 blur-3xl transition-colors duration-300"></div>
        </div>

        {/* Navbar */}
        <motion.nav
          className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 ${scrolled
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
              className="flex items-center gap-2"
            >
              {/* Developer icon */}
              <div className="w-8 h-8 rounded-full bg-indigo-600 dark:bg-indigo-400 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-white"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                  <path d="M8 21s4-3 4-9" />
                  <path d="M16 21s-4-3-4-9" />
                  <path d="M12 15c0 3-2 6-4 6s-4-3-4-6 2-6 4-6 4 3 4 6z" />
                </svg>
              </div>

              <h1
                className="text-2xl font-bold tracking-tight text-indigo-700 dark:text-indigo-300 cursor-pointer transition"
                onClick={() => scrollToSection("home")}
              >
                Portfolio
              </h1>
            </motion.div>

            <div className="flex items-center gap-4">
              {/* Desktop Navigation */}
              <ul className="hidden md:flex space-x-6 items-center">
                {navLinks.map((link) => (
                  <li key={link.id} className="relative">
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className={`px-2 py-1 text-sm font-medium transition ${activeSection === link.id
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

                {/* Theme Toggle Button */}
                <motion.button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full bg-white/30 dark:bg-gray-800/30 backdrop-blur-md border border-gray-200 dark:border-gray-700"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Toggle dark mode"
                  title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                >
                  <motion.div
                    animate={darkMode ? { rotate: 360 } : { rotate: 0 }}
                    transition={{ duration: 0.5, type: "spring" }}
                  >
                    {darkMode ? (
                      <FiSun className="text-white" size={18} />
                    ) : (
                      <FiMoon className="text-indigo-700" size={18} />
                    )}
                  </motion.div>
                </motion.button>
              </ul>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center gap-2">
                <motion.button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full bg-white/30 dark:bg-gray-800/30 backdrop-blur-md border border-gray-200 dark:border-gray-700"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? (
                    <FiSun className="text-white" size={18} />
                  ) : (
                    <FiMoon className="text-indigo-700" size={18} />
                  )}
                </motion.button>

                <button
                  className="p-2 text-gray-700 dark:text-gray-300"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
              </div>
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
                        className={`w-full text-left px-2 py-1 font-medium flex items-center ${activeSection === link.id
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



          <motion.h1
            className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring" }}
          >
            Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Shambhavi Singh</span>
          </motion.h1>

          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-300 mb-8 h-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            I am <TypingAnimation />
          </motion.h2>

          <motion.p
            className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <p class="hero-subtext">
              MCA Graduate with hands-on experience across
              <strong> UI/UX Design</strong>,
              <strong> Frontend</strong>,
              <strong> Backend</strong> and
              <strong> Software testing</strong>.
            </p>

            <div class="hero-badges">
              <span>Problem Solver</span> |
              <span> Strong Communicator</span> |
              <span> Fluent: English & Hindi</span>
            </div>


          </motion.p>


          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.a
              href="/Resume.pdf"
              download="Shambhavi_Singh.pdf"
              className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Check Resume
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
        {/* About Section */}
<motion.section 
  id="about" 
  className="py-20 px-6 md:px-20 relative overflow-hidden"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  {/* Floating background elements */}
  <motion.div 
    className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-indigo-200/20 dark:bg-indigo-900/10 blur-3xl"
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.7, 0.9, 0.7]
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
  
  <div className="max-w-6xl mx-auto">
    <motion.div 
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white text-center">
        <motion.span 
          className="border-b-4 border-indigo-500 pb-1 inline-block"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.span>
      </h2>
      
      <GlassCard className="p-8 md:p-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.p 
              className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              I'm an enthusiastic <span className="text-indigo-600 dark:text-indigo-400 font-medium">MCA student</span> from The Oxford College of Engineering , Bangalore with a <span className="text-indigo-600 dark:text-indigo-400 font-medium">BCA background</span> from The Oxford College of Science. I specialize in building <span className="text-indigo-600 dark:text-indigo-400 font-medium">full-stack web applications</span> using modern technologies.
            </motion.p>
            
            <motion.p 
              className="text-lg leading-relaxed mb-8 text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
            >
              With strong <span className="text-indigo-600 dark:text-indigo-400 font-medium">problem-solving</span> abilities and <span className="text-indigo-600 dark:text-indigo-400 font-medium">attention to detail</span>, I create efficient, scalable solutions. My excellent <span className="text-indigo-600 dark:text-indigo-400 font-medium">communication skills</span> enable effective collaboration in team environments.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="bg-indigo-50 dark:bg-gray-800 p-5 rounded-xl border border-indigo-100 dark:border-gray-700"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h4 className="font-medium text-indigo-800 dark:text-indigo-300 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Education
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 dark:text-indigo-400 mt-1">•</span>
                    <span>MCA at The Oxford College of Engineering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 dark:text-indigo-400 mt-1">•</span>
                    <span>BCA at The Oxford College of Science</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div 
                className="bg-indigo-50 dark:bg-gray-800 p-5 rounded-xl border border-indigo-100 dark:border-gray-700"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h4 className="font-medium text-indigo-800 dark:text-indigo-300 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                  Languages
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 dark:text-indigo-400 mt-1">•</span>
                    <span>English (Fluent)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 dark:text-indigo-400 mt-1">•</span>
                    <span>Hindi (Native)</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>
          
           <motion.div 
                  className="hidden md:block"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
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
</motion.section>



        {/* <p>
                I enjoy understanding user needs, designing intuitive interfaces,
                building reliable applications, and ensuring quality through structured
                testing. I communicate ideas clearly and confidently, and I work well
                in collaborative team environments.
              </p> */}

        <div className="max-w-4xl mx-auto mb-20">
          <h3 className="text-2xl font-semibold text-center text-gray-900 dark:text-white mb-6">
            What I’m Open To
          </h3>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="role-pill">UI/UX Designer</span>
            <span className="role-pill">Frontend Developer</span>
            <span className="role-pill">Backend Developer</span>
            <span className="role-pill">Full Stack Developer</span>
            <span className="role-pill">Software Tester / QA</span>
          </div>
        </div>
        {/* <div className="communication-section">
              <h3>Communication & Collaboration</h3>

              <ul className="communication-points">
                <li>Clear verbal and written communication across technical and non-technical teams</li>
                <li>Fluent in English and Hindi, confident in discussions and presentations</li>
                <li>Comfortable gathering requirements, explaining solutions, and giving updates</li>
                <li>Strong collaborator who works well with designers, developers, and testers</li>
              </ul>
            </div> */}
        {/* <div className="why-grid">
          <div className="why-card">
            🚀
            <h4>Multi-Role Ready</h4>
            <p>Comfortable switching between UI/UX, frontend, backend, full stack, and QA roles.</p>
          </div>

          <div className="why-card">
            🧠
            <h4>Strong Fundamentals</h4>
            <p>Solid academic background with real-world project experience.</p>
          </div>

          <div className="why-card">
            🤝
            <h4>Clear Communicator</h4>
            <p>Ensures clarity, alignment, and smooth execution across teams.</p>
          </div>

          <div className="why-card">
            ⚡
            <h4>Fast Learner</h4>
            <p>Quickly adapts to new tools, technologies, and workflows.</p>
          </div>
        </div>



        Journey
        <div className="relative max-w-4xl mx-auto">

          <h3 className="text-3xl font-semibold text-center text-gray-900 dark:text-white mb-16">
            My Journey
          </h3>

          <div className="timeline"> */}

            {/* 10th */}
            {/* <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>10th Grade — Secondary School</h4>
                <p>
                  <strong>School:</strong> XYZ High School<br />
                  <strong>Year:</strong> 2018<br />
                  <strong>Score:</strong> 85%
                </p>
              </div>
            </div> */}

            {/* 12th */}
            {/* <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>12th Grade — Higher Secondary</h4>
                <p>
                  <strong>School:</strong> XYZ Pre-University College<br />
                  <strong>Year:</strong> 2020<br />
                  <strong>Score:</strong> 82%
                </p>
              </div>
            </div> */}

            {/* BCA */}
            {/* <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>Bachelor of Computer Applications (BCA)</h4>
                <p>
                  <strong>College:</strong> The Oxford College of Science, Bangalore<br />
                  <strong>Duration:</strong> 2020 – 2023
                </p>
              </div>
            </div> */}

            {/* MCA */}
            {/* <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>Master of Computer Applications (MCA)</h4>
                <p>
                  <strong>College:</strong> The Oxford College of Engineering, Bangalore<br />
                  <strong>Duration:</strong> 2023 – 2025
                </p>
              </div>
            </div>

          </div>

        </div> */}

        {/* </div>
        </section> */}



        {/* About Section
<section id="about" className="py-24 px-6 md:px-20">
  <div className="max-w-5xl mx-auto">

    {/* Heading */}
        {/* <h2 className="text-4xl font-bold text-center text-white mb-10">
      About Me
      <span className="block w-20 h-1 bg-indigo-500 mx-auto mt-4"></span>
    </h2> */}

        {/* Intro */}
        {/* <p className="text-center text-lg text-gray-300 max-w-3xl mx-auto mb-20 leading-relaxed">
      I am a Full Stack Developer with a strong academic background and hands-on
      experience in building scalable, user-centric applications. I enjoy
      transforming ideas into clean, maintainable software and continuously
      improving my technical and problem-solving skills.
    </p> */}

        {/* Timeline */}
        {/* <div className="relative border-l border-indigo-500/40 pl-8 space-y-14"> */}

        {/* 10th */}
        {/* <div className="relative">
        <span className="absolute -left-[14px] top-1 w-3 h-3 bg-indigo-500 rounded-full"></span>
        <h3 className="text-xl font-semibold text-indigo-300">
          10th Grade (Secondary School)
        </h3>
        <p className="text-sm text-gray-400 mt-1">
          <strong>School:</strong> ABC High School<br/>
          <strong>Year:</strong> 2018<br/>
          <strong>Score:</strong> 85%
        </p>
      </div> */}

        {/* 12th */}
        {/* <div className="relative">
        <span className="absolute -left-[14px] top-1 w-3 h-3 bg-indigo-500 rounded-full"></span>
        <h3 className="text-xl font-semibold text-indigo-300">
          12th Grade (Higher Secondary)
        </h3>
        <p className="text-sm text-gray-400 mt-1">
          <strong>School:</strong> ABC Pre-University College<br/>
          <strong>Year:</strong> 2020<br/>
          <strong>Score:</strong> 82%
        </p>
      </div> */}

        {/* BCA */}
        {/* <div className="relative">
        <span className="absolute -left-[14px] top-1 w-3 h-3 bg-indigo-500 rounded-full"></span>
        <h3 className="text-xl font-semibold text-indigo-300">
          Bachelor of Computer Applications (BCA)
        </h3>
        <p className="text-sm text-gray-400 mt-1">
          <strong>University:</strong> The Oxford College of Science, Bangalore<br/>
          <strong>Duration:</strong> 2020 – 2023<br/>
          <strong>Focus:</strong> Programming, Databases, Web Development
        </p>
      </div> */}

        {/* MCA */}
        {/* <div className="relative">
        <span className="absolute -left-[14px] top-1 w-3 h-3 bg-indigo-500 rounded-full"></span>
        <h3 className="text-xl font-semibold text-indigo-300">
          Master of Computer Applications (MCA)
        </h3>
        <p className="text-sm text-gray-400 mt-1">
          <strong>University:</strong> The Oxford College of Engineering, Bangalore<br/>
          <strong>Duration:</strong> 2023 – 2025<br/>
          <strong>Focus:</strong> Full Stack Development, Software Engineering
        </p>
      </div>

    </div>
  </div>
</section> */}



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
                        className={`w-5 h-5 ${darkMode ? 'invert' : ''}`}
                        alt="Tailwind CSS"
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
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#5A9BD4" />
                        <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="#5A9BD4" />
                        <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="#5A9BD4" />
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

                {/* Concepts Section */}
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
                        src={darkMode
                          ? "https://www.netlify.com/v3/img/components/logomark-dark.png"
                          : "https://www.netlify.com/v3/img/components/logomark-light.png"
                        }
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
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
                    >
                      <SiFigma className="text-pink-500 text-xl" />
                      <span className="text-lg font-medium">Figma</span>
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
                  // <motion.div
                  //   key={index}
                  //   className="relative group"
                  //   whileHover={{ y: -5 }}
                  //   initial={{ opacity: 0, y: 20 }}
                  //   whileInView={{ opacity: 1, y: 0 }}
                  //   transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
                  //   viewport={{ once: true }}
                  // >
                  //   <GlassCard className="p-6 h-full">
                  //     <div className="relative overflow-hidden rounded-lg mb-4 h-48">
                  //       {project.gif ? (
                  //         <img 
                  //           src={project.gif} 
                  //           alt={project.title} 
                  //           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  //         />
                  //       ) : (
                  //         <div className="w-full h-full bg-indigo-100 dark:bg-gray-700 flex items-center justify-center">
                  //           <div className="text-4xl text-indigo-600 dark:text-indigo-400 opacity-30">📁</div>
                  //         </div>
                  //       )}
                  //     </div>

                  //     <h3 className="text-xl font-semibold text-indigo-800 dark:text-indigo-300 mb-2">
                  //       {project.title}
                  //     </h3>

                  //     <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm">
                  //       {project.desc}
                  //     </p>

                  //     <div className="flex flex-wrap gap-2 mb-4">
                  //       {project.stack.split(", ").map((tech, i) => (
                  //         <span key={i} className="text-xs px-2 py-1 bg-indigo-100 dark:bg-gray-700 text-indigo-800 dark:text-indigo-300 rounded-full">
                  //           {tech}
                  //         </span>
                  //       ))}
                  //     </div>

                  //     {project.link && (
                  //       <motion.a 
                  //         href={project.link} 
                  //         target="_blank" 
                  //         rel="noopener noreferrer" 
                  //         className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline"
                  //         whileHover={{ x: 2 }}
                  //       >
                  //         <FiGithub className="mr-1" /> View Project
                  //       </motion.a>
                  //     )}
                  //   </GlassCard>
                  // </motion.div>
                  <motion.div
                    key={index}
                    className="group relative"
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <GlassCard className="overflow-hidden flex flex-col">


                      {/* IMAGE / VISUAL ANCHOR */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://placehold.co/600x400?text=Project+Preview";
                          }}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />

                        {/* Highlight Badge */}

                      </div>

                      {/* CONTENT */}
                      <div className="p-6 flex flex-col h-full">
                        <h3 className="text-xl font-semibold text-indigo-800 dark:text-indigo-300 mb-2">
                          {project.title}
                        </h3>

                        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 flex-grow">
                          {project.desc}
                        </p>

                        {project.highlight && (
                          <div className="mb-3">
                            <span className="inline-block text-xs px-3 py-1 bg-indigo-50 dark:bg-gray-800 text-indigo-700 dark:text-indigo-300 rounded-full">
                              {project.highlight}
                            </span>
                          </div>
                        )}



                        {/* TECH STACK */}
                        {project.stack && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.stack.map((tech, i) => (
                              <span
                                key={i}
                                className="text-xs px-2 py-1 bg-indigo-100 dark:bg-gray-700 text-indigo-700 dark:text-indigo-300 rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}


                        {/* CTA BUTTONS */}
                        <div className="flex gap-3 mt-auto">
                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 text-center px-4 py-2 text-sm font-medium bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                            >
                              🔗 Live Demo
                            </a>
                          )}

                          {project.code && (
                            <a
                              href={project.code}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 text-center px-4 py-2 text-sm font-medium border border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-800 transition"
                            >
                              💻 Code
                            </a>
                          )}
                        </div>

                      </div>
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
                            href="mailto:sshambhavi89@gmail.com"
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
                    <form
                      onSubmit={handleSubmit}
                      className="space-y-4"
                    >
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-4 py-2 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="Your name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-2 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="example@gmail.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                        <input
                          type="text"
                          id="subject"
                          name="title"
                          required
                          className="w-full px-4 py-2 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="Subject"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                        <textarea
                          id="message"
                          name="message"
                          rows="4"
                          required
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
      </main>
    </>
  );
};


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppContent />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Router>
  );
};

export default App;
