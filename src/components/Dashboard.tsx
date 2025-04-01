import React from 'react';
import { useAuthStore } from '../store/authStore';
import Features from './Features';

const Dashboard = () => {
  const { username, isGuest } = useAuthStore();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome, {username}!
          </h1>
          <p className="text-gray-400">
            {isGuest 
              ? "Explore our features as a guest. Sign in to save your progress!"
              : "Start exploring our AI-powered learning tools below."}
          </p>
        </div>
        <Features />
      </div>
    </div>
  );
};

export default Dashboard;