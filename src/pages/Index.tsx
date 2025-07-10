<<<<<<< HEAD
import React, { useState, useMemo } from 'react';
=======
import React, { useState, useEffect, useMemo } from 'react';
>>>>>>> 1494ca6fb7369ec3af83384a469bbca7becf77e7
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ToolCard from '../components/ToolCard';
import Footer from '../components/Footer';
<<<<<<< HEAD
import { Tool } from '../data/mockTools';
import { useTools } from '../contexts/ToolContext';
=======
import { mockTools, Tool } from '../data/mockTools';
>>>>>>> 1494ca6fb7369ec3af83384a469bbca7becf77e7
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

const ITEMS_PER_PAGE = 20;

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua Kategori');
  const [selectedPricing, setSelectedPricing] = useState('Semua Harga');
<<<<<<< HEAD
  const { tools: allTools, loading } = useTools();
  const [currentPage, setCurrentPage] = useState(1);

=======
  const [allTools, setAllTools] = useState<Tool[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const storedTools = localStorage.getItem('ai_tools_data');
    if (storedTools) {
      try {
        const parsedTools = JSON.parse(storedTools);
        // Urutkan data berdasarkan popularityScore saat pertama kali dimuat
        const sortedTools = [...parsedTools].sort((a, b) => b.popularityScore - a.popularityScore);
        setAllTools(sortedTools);
      } catch (e) {
        console.error("Gagal parse data dari localStorage, menggunakan mock data.", e);
        setAllTools([...mockTools].sort((a, b) => b.popularityScore - a.popularityScore));
      }
    } else {
      setAllTools([...mockTools].sort((a, b) => b.popularityScore - a.popularityScore));
    }
  }, []);


>>>>>>> 1494ca6fb7369ec3af83384a469bbca7becf77e7
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

  const totalPages = Math.ceil(filteredTools.length / ITEMS_PER_PAGE);

  const paginatedTools = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredTools.slice(startIndex, endIndex);
  }, [filteredTools, currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  
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
<<<<<<< HEAD
              <div className="mb-8">
                {/* Judul dihilangkan sesuai permintaan sebelumnya */}
              </div>

              {loading ? (
                <div className="text-center py-12">Loading tools...</div>
              ) : paginatedTools.length > 0 ? (
=======

              {paginatedTools.length > 0 ? (
>>>>>>> 1494ca6fb7369ec3af83384a469bbca7becf77e7
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {paginatedTools.map((tool, index) => (
                      <ToolCard
                        key={`${tool.id}-${tool.name}-${index}`}
                        tool={tool}
                      />
                    ))}
                  </div>

                  {totalPages > 1 && (
                     <Pagination>
                        <PaginationContent>
                          <PaginationItem>
                            <PaginationPrevious 
                              href="#"
                              onClick={(e) => { e.preventDefault(); handlePageChange(currentPage - 1); }}
                              className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                            />
                          </PaginationItem>
                          {[...Array(totalPages)].map((_, i) => (
                            <PaginationItem key={i}>
                                <PaginationLink 
                                    href="#"
                                    isActive={currentPage === i + 1}
                                    onClick={(e) => { e.preventDefault(); handlePageChange(i + 1); }}
                                >
                                    {i + 1}
                                </PaginationLink>
                            </PaginationItem>
                          ))}
                          <PaginationItem>
                            <PaginationNext 
                              href="#"
                              onClick={(e) => { e.preventDefault(); handlePageChange(currentPage + 1); }}
                              className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                            />
                          </PaginationItem>
                        </PaginationContent>
                      </Pagination>
                  )}
                </>
              ) : (
                <div className="text-center py-12">
<<<<<<< HEAD
=======
                  <div className="text-gray-400 mb-4">
                    <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.137 0-4.146-.832-5.657-2.343C2.343 8.657 2.343 4.343 6.343 1.343A7.962 7.962 0 0112 3c2.137 0 4.146.832 5.657 2.343"/>
                    </svg>
                  </div>
>>>>>>> 1494ca6fb7369ec3af83384a469bbca7becf77e7
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

export default Index;