import React, { useState } from 'react';
import { Search, Menu, X, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import AuthModal from './AuthModal';
import { useAuth } from '@/contexts/AuthContext';

interface HeaderProps {
  onMenuToggle: () => void;
  isMenuOpen: boolean;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle, isMenuOpen, searchQuery, onSearchChange }) => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <>
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={onMenuToggle}
                className="lg:hidden text-gray-700 hover:bg-gray-100"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
              <h1 className="text-2xl font-bold text-gray-900">AI Portal</h1>
            </div>

            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  type="text"
                  placeholder="Cari tools AI..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full bg-white border-gray-300 text-gray-900 focus:border-gray-800 focus:ring-gray-800"
                />
              </div>
            </div>

            <div className="flex items-center">
              {isAuthenticated ? (
                <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-700 hidden sm:inline">
                        Selamat datang, {user?.name}
                    </span>
                    <Button onClick={logout} variant="ghost" size="sm" className="text-gray-700 hover:bg-gray-100">
                       <LogOut size={18} className="mr-1 sm:mr-2" />
                       <span className="hidden sm:inline">Logout</span>
                    </Button>
                </div>
              ) : (
                <Button onClick={() => setIsAuthModalOpen(true)} className="bg-gray-800 hover:bg-gray-900 text-white">
                  Login
                </Button>
              )}
            </div>
          </div>

          <div className="md:hidden pb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="Cari tools AI..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-10 pr-4 py-2 w-full bg-white border-gray-300 text-gray-900 focus:border-gray-800 focus:ring-gray-800"
              />
            </div>
          </div>
        </div>
      </header>

      {!isAuthenticated && (
        <AuthModal 
          isOpen={isAuthModalOpen} 
          onClose={() => setIsAuthModalOpen(false)}
        />
      )}
    </>
  );
};

export default Header;