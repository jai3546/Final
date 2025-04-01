import React, { useState } from 'react';
import { FileText, Slash as FlashCard, Map, Brain } from 'lucide-react';
import FileUpload from './FileUpload';

const features = [
  {
    icon: FileText,
    title: 'Document Analysis',
    description: 'Upload PDFs and text documents for intelligent analysis and content extraction.',
  },
  {
    icon: Brain,
    title: 'Quiz Generation',
    description: 'Create custom quizzes with multiple choice, true/false, and short answer questions.',
  },
  {
    icon: FlashCard,
    title: 'Smart Flashcards',
    description: 'Generate flashcards with spaced repetition for optimal learning retention.',
  },
  {
    icon: Map,
    title: 'Mind Maps',
    description: 'Visualize concepts and connections with automatically generated mind maps.',
  },
];

const Features = () => {
  const [showUpload, setShowUpload] = useState(false);

  const handleFileAccepted = (file: File) => {
    console.log('File accepted:', file);
    // Handle file processing here
  };

  return (
    <div id="features" className="py-24 bg-gray-900/50 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Powerful Learning Tools</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our AI-powered platform offers a comprehensive suite of tools to enhance your study
            experience and improve learning outcomes.
          </p>
        </div>
        
        {showUpload ? (
          <div className="mb-16">
            <FileUpload onFileAccepted={handleFileAccepted} />
          </div>
        ) : null}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              onClick={() => setShowUpload(true)}
              className="p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 
                transition-all cursor-pointer transform hover:-translate-y-1
                group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#7DF9FF]/0 via-[#7DF9FF]/5 to-[#7DF9FF]/0 
                translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              
              <feature.icon className="w-12 h-12 text-[#7DF9FF] mb-4 transition-transform group-hover:scale-110" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;