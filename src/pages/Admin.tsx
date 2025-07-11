import React, { useState } from 'react';
import { Upload, FileSpreadsheet, Check, AlertCircle, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import * as XLSX from 'xlsx';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

// Definisikan tipe Tool di sini agar file ini mandiri
interface Tool {
  id: string;
  name: string;
  description: string;
  link: string;
  imageUrl: string;
  category: string;
  pricing: string;
  tags: string[];
  popularityScore: number;
}

const Admin = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua Kategori');
  const [selectedPricing, setSelectedPricing] = useState('Semua Harga');
  const [file, setFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<{type: 'success' | 'error' | null, message: string}>({type: null, message: ''});
  const [previewData, setPreviewData] = useState<Tool[]>([]);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setUploadStatus({type: null, message: ''});
      previewExcelFile(selectedFile);
    }
  };

  const previewExcelFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = e.target?.result;
        const workbook = XLSX.read(data, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        
        const tools: Tool[] = jsonData.map((row: any, index: number) => ({
          id: String(row.id || index + 1),
          name: row.name || row.Name || '',
          description: row.description || row.Description || '',
          link: row.link || row.Link || row.url || row.URL || '',
          imageUrl: row.imageUrl || row.ImageUrl || row.image || row.Image || '',
          category: row.category || row.Category || '',
          pricing: row.pricing || row.Pricing || 'Gratis',
          tags: typeof (row.tags || row.Tags) === 'string' 
            ? (row.tags || row.Tags).split(',').map((tag: string) => tag.trim())
            : [],
          popularityScore: Number(row.popularityScore || row.PopularityScore) || 0
        }));

        setPreviewData(tools);
        setUploadStatus({ type: 'success', message: `Berhasil mem-preview ${tools.length} data. Siap untuk diunduh.` });
      } catch (error) {
        setUploadStatus({type: 'error', message: 'Error membaca file Excel. Pastikan format file benar.'});
        setPreviewData([]);
      }
    };
    reader.readAsBinaryString(file);
  };

  const handleDownloadFile = () => {
    if (previewData.length === 0) return;

    const fileContent = `
export interface Tool {
  id: string;
  name: string;
  description: string;
  link: string;
  imageUrl: string;
  category: string;
  pricing: string;
  tags: string[];
  popularityScore: number;
}

export const mockTools: Tool[] = ${JSON.stringify(previewData, null, 2)};
`;

    const blob = new Blob([fileContent.trim()], { type: 'text/typescript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'mockTools.ts';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <Sidebar 
          isOpen={isMenuOpen}
          onOpenChange={setIsMenuOpen}
          selectedCategory={selectedCategory}
          selectedPricing={selectedPricing}
          onCategoryChange={setSelectedCategory}
          onPricingChange={setSelectedPricing}
        />
        
        <div className="flex-1 flex flex-col">
          <Header 
            onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
            isMenuOpen={isMenuOpen}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
          <main className="flex-1 p-6">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Panel</h1>
                <p className="text-gray-600">Gunakan halaman ini untuk mengonversi file Excel menjadi file `mockTools.ts`.</p>
              </div>
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileSpreadsheet className="h-6 w-6" />
                    Upload File Excel
                  </CardTitle>
                  <CardDescription>
                    Unggah file Excel untuk membuat file `mockTools.ts` yang baru.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors relative text-gray-800 focus:outline-none focus:ring-0">
                    <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">
                        Klik untuk memilih file Excel atau drag & drop
                      </p>
                      <p className="text-xs text-gray-500">
                        Format yang didukung: .xlsx, .xls
                      </p>
                    </div>
                    <input
                      id="file-input"
                      type="file"
                      accept=".xlsx,.xls"
                      onChange={handleFileSelect}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                  </div>
                  {uploadStatus.type && (
                    <Alert className={uploadStatus.type === 'success' ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}>
                        {uploadStatus.type === 'success' ? <Check className="h-4 w-4 text-green-600" /> : <AlertCircle className="h-4 w-4 text-red-600" />}
                        <AlertDescription className={uploadStatus.type === 'success' ? 'text-green-800' : 'text-red-800'}>
                        {uploadStatus.message}
                        </AlertDescription>
                    </Alert>
                  )}

                  {previewData.length > 0 && (
                    <div className="space-y-4">
                      <h3 className="font-semibold text-gray-900">Preview Data ({previewData.length} items)</h3>
                      <div className="max-h-60 overflow-y-auto border rounded-lg p-2">
                        <div className="grid gap-2">
                          {previewData.slice(0, 5).map((tool, index) => (
                            <div key={index} className="bg-white p-3 rounded border text-sm">
                              <div className="font-medium">{tool.name}</div>
                              <div className="text-gray-600 text-xs">{tool.category} • {tool.pricing}</div>
                            </div>
                          ))}
                          {previewData.length > 5 && (
                            <div className="text-center text-sm text-gray-500 py-2">
                              ... dan {previewData.length - 5} item lainnya
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <Button
                          onClick={handleDownloadFile}
                          disabled={previewData.length === 0}
                          className="bg-gray-800 hover:bg-gray-900 text-white"
                        >
                          <Download className="mr-2 h-4 w-4" />
                          Generate & Download mockTools.ts
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Admin;