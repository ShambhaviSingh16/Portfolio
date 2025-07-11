import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ThankYou() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center bg-indigo-50 dark:bg-gray-900"
    >
      <motion.div 
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="text-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg max-w-md mx-4"
      >
        <motion.h1 
          className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-4"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
        >
          Thank You!
        </motion.h1>
        <motion.p 
          className="text-lg text-gray-700 dark:text-gray-300 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Your message has been sent successfully. I'll get back to you soon!
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-6">
            <motion.div 
              className="h-full bg-indigo-600 dark:bg-indigo-400"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, ease: "linear" }}
            />
          </div>
          <a 
            href="/" 
            className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition"
          >
            Return Home
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}