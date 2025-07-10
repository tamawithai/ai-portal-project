import React from 'react';
<<<<<<< HEAD
import { Home, Search, Settings } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useAuth } from '@/contexts/AuthContext';
=======
import { useAuth } from '@/contexts/AuthContext';
import { Home, Search, Heart, Settings } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
>>>>>>> 1494ca6fb7369ec3af83384a469bbca7becf77e7

interface SidebarProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  selectedCategory: string;
  selectedPricing: string;
  onCategoryChange: (category: string) => void;
  onPricingChange: (pricing: string) => void;
}

const SidebarContent: React.FC<Omit<SidebarProps, 'isOpen' | 'onOpenChange'>> = ({ 
  selectedCategory, 
  selectedPricing, 
  onCategoryChange, 
  onPricingChange 
}) => {
  const location = useLocation();
  const { isAuthenticated } = useAuth();
<<<<<<< HEAD

=======
>>>>>>> 1494ca6fb7369ec3af83384a469bbca7becf77e7
  const menuItems = [
    { name: 'Beranda', path: '/', icon: Home },
    { name: 'Semua Tools', path: '/browse', icon: Search },
    { name: 'Admin', path: '/admin', icon: Settings },
  ];

  const categories = [
    'Semua Kategori', 'Produktivitas', 'Kreatif', 'Analisis', 'Komunikasi', 'Marketing'
  ];

  const pricingOptions = ['Semua Harga', 'Gratis', 'Berbayar', 'Freemium'];

  return (
    <div className="flex flex-col h-full bg-white border-r border-gray-200">
      <nav className="flex-grow p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            if (item.name === 'Admin' && !isAuthenticated) {
<<<<<<< HEAD
              return null;
            }
            return (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium ${
                      isActive ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50'
                    }`
                  }
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
=======
              return null; // Jangan tampilkan menu Admin jika belum login
    }
    return (
      <li key={item.name}>
        <NavLink
          to={item.path}
          className={({ isActive }) =>
            `flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium ${
              isActive ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50'
            }`
          }
        >
          <item.icon className="h-5 w-5" />
          <span>{item.name}</span>
        </NavLink>
      </li>
    );
  })}
</ul>
>>>>>>> 1494ca6fb7369ec3af83384a469bbca7becf77e7

        {location.pathname === '/' && onCategoryChange && onPricingChange && (
          <div className="mt-8 pt-4 border-t border-gray-200">
            <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Filter</h3>
            <div className="mt-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 px-3">
                  Kategori
                </label>
                <div className="px-3">
                    <Select value={selectedCategory} onValueChange={onCategoryChange}>
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {categories.map((category) => (
                            <SelectItem key={category} value={category}>
                                {category}
                            </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 px-3">
                  Harga
                </label>
                <div className="px-3">
                    <Select value={selectedPricing} onValueChange={onPricingChange}>
                        <SelectTrigger>
                        <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                        {pricingOptions.map((pricing) => (
                            <SelectItem key={pricing} value={pricing}>
                            {pricing}
                            </SelectItem>
                        ))}
                        </SelectContent>
                    </Select>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

<<<<<<< HEAD
=======

>>>>>>> 1494ca6fb7369ec3af83384a469bbca7becf77e7
const Sidebar: React.FC<SidebarProps> = ({ 
  isOpen, 
  onOpenChange,
  ...props
}) => {
  return (
    <>
      {/* Mobile Sidebar */}
      <Sheet open={isOpen} onOpenChange={onOpenChange}>
        <SheetContent side="left" className="p-0 w-64 lg:hidden">
          <SidebarContent {...props} />
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64">
           <SidebarContent {...props} />
        </div>
      </div>
    </>
  );
};

export default Sidebar;