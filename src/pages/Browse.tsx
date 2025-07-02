import React, { useState, useEffect, useMemo } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ToolCard from '../components/ToolCard';
import Footer from '../components/Footer';
import { Tool } from '../data/mockTools';
import { supabase } from '../lib/supabaseClient';

const Browse = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua Kategori');
  const [selectedPricing, setSelectedPricing] = useState('Semua Harga');
  const [allTools, setAllTools] = useState<Tool[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTools = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('tools')
        .select('*')
        .order('popularityScore', { ascending: false });

      if (error) {
        console.error('Error fetching tools:', error);
      } else {
        setAllTools(data as Tool[]);
      }
      setLoading(false);
    };

    fetchTools();
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
                  Ditemukan {filteredTools.length} tools yang tersedia.
                </p>
              </div>

              {loading ? (
                <div className="text-center py-12">Loading tools...</div>
              ) : filteredTools.length > 0 ? (
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