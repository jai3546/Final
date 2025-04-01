import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { Brain } from 'lucide-react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login, continueAsGuest } = useAuthStore();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login(username);
    navigate('/dashboard');
  };

  const handleGuestAccess = () => {
    continueAsGuest();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF9933]/20 via-white/5 to-[#138808]/20 rounded-xl blur-xl" />
        
        <div className="relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border-2 border-[#7DF9FF]/30">
          <div className="flex flex-col items-center mb-8">
            <Brain className="w-12 h-12 text-[#FF9933] animate-float" />
            <h2 className="mt-4 text-3xl font-bold bg-gradient-to-r from-[#FF9933] via-white to-[#138808] text-transparent bg-clip-text">
              Welcome to splan.ai
            </h2>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-[#7DF9FF] text-white placeholder-gray-400"
              />
            </div>
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-[#7DF9FF] text-white placeholder-gray-400"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-[#FF9933] text-white rounded-lg hover:bg-[#FF9933]/90 transition-all transform hover:-translate-y-1 active:translate-y-0"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6">
            <button
              onClick={handleGuestAccess}
              className="w-full py-3 px-4 bg-transparent border-2 border-[#7DF9FF] text-white rounded-lg hover:bg-[#7DF9FF]/10 transition-all transform hover:-translate-y-1 active:translate-y-0"
            >
              Continue as Guest
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;