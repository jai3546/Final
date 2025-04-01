import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, Sparkles, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');
  };

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900" />
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#FF9933]/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#138808]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-[#7DF9FF]/20 rounded-full blur-3xl" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Brain className="w-24 h-24 mx-auto text-[#FF9933] mb-8 animate-float" />
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            Transform Your Learning with{' '}
            <span className="bg-gradient-to-r from-[#FF9933] via-white to-[#138808] text-transparent bg-clip-text">
              AI-Powered Study Tools
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Upload your study materials and let our AI create personalized quizzes, flashcards, and
            mind maps to enhance your learning experience.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.button
              onClick={handleGetStarted}
              className="px-8 py-4 rounded-lg bg-[#FF9933] text-white font-semibold 
                hover:bg-[#FF9933]/90 transition-all flex items-center gap-2 
                transform hover:-translate-y-1 active:translate-y-0
                shadow-[0_0_15px_rgba(255,153,51,0.5)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles className="w-5 h-5" />
              Get Started
            </motion.button>
            
            <motion.button
              onClick={scrollToFeatures}
              className="px-8 py-4 rounded-lg bg-white/10 text-white font-semibold 
                hover:bg-white/20 transition-all flex items-center gap-2
                backdrop-blur-sm transform hover:-translate-y-1 active:translate-y-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Features
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <ChevronDown 
            className="w-8 h-8 text-white/50 animate-bounce cursor-pointer"
            onClick={scrollToFeatures}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;