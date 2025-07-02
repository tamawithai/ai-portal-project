import React, { useState, useEffect, useMemo } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ToolCard from '../components/ToolCard';
import Footer from '../components/Footer';
import { mockTools, Tool } from '../data/mockTools';

const Browse = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua Kategori');
  const [selectedPricing, setSelectedPricing] = useState('Semua Harga');
  const [allTools, setAllTools] = useState<Tool[]>([]);

  useEffect(() => {
    // Coba ambil data dari localStorage
    const storedTools = localStorage.getItem('ai_tools_data');
    if (storedTools) {
      try {
        const parsedTools = JSON.parse(storedTools);
        const sortedTools = [...parsedTools].sort((a, b) => b.popularityScore - a.popularityScore);
        setAllTools(sortedTools);
      } catch (e) {
        console.error("Gagal parse data dari localStorage, menggunakan mock data.", e);
        setAllTools([...mockTools].sort((a, b) => b.popularityScore - a.popularityScore));
      }
    } else {
      // Jika tidak ada, gunakan mockTools
      setAllTools([...mockTools].sort((a, b) => b.popularityScore - a.popularityScore));
    }
  }, []);

  const filteredTools = useMemo(() => {
    return allTools.filter(tool => {
      const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           (tool.tags && tool.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
      
      const matchesCategory = selectedCategory === 'Semua Kategori' || tool.category === selectedCategory;
      const matchesPricing = selectedPricing === 'Semua Harga' || tool.pricing === selectedPricing;
      
      return matchesSearch && matchesCategory && matchesPricing;
    });
  }, [searchQuery, selectedCategory, selectedPricing, allTools]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex flex-1">
        <Sidebar 
          isOpen={isMenuOpen}
          onOpenChange={setIsMenuOpen}
          selectedCategory={selectedCategory}
          selectedPricing={selectedPricing}
          onCategoryChange={setSelectedCategory}
          onPricingChange={setSelectedPricing}
        />
        
        <div className="flex flex-col flex-1">
          <Header 
            onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
            isMenuOpen={isMenuOpen}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
          
          <main className="flex-1 p-6">
            <div className="max-w-7xl mx-auto">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Semua Tools AI
                </h2>
                <p className="text-gray-600">
                  Menampilkan {filteredTools.length} tools yang tersedia.
                </p>
              </div>

              {filteredTools.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {filteredTools.map((tool, index) => (
                    <ToolCard
                      key={`${tool.id}-${tool.name}-${index}`}
                      tool={tool}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Tidak ada tools ditemukan</h3>
                  <p className="text-gray-500">Coba ubah kata kunci pencarian atau filter yang Anda gunakan.</p>
                </div>
              )}
            </div>
          </main>
          
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Browse;