import React, { useState } from 'react';
import { Upload, FileSpreadsheet, Check, AlertCircle, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import * as XLSX from 'xlsx';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { useTools } from '../contexts/ToolContext';

const Admin = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua Kategori');
  const [selectedPricing, setSelectedPricing] = useState('Semua Harga');
  const { setTools } = useTools(); // Tambahkan ini
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<{type: 'success' | 'error' | null, message: string}>({type: null, message: ''});
  const [previewData, setPreviewData] = useState<any[]>([]);

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
        
        const tools = jsonData.map((row: any) => ({
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
      } catch (error) {
        setUploadStatus({type: 'error', message: 'Error membaca file Excel. Pastikan format file benar.'});
      }
    };
    reader.readAsBinaryString(file);
  };

  const handleUpload = async () => {
    if (previewData.length === 0) return;
    setUploading(true);
    setUploadStatus({ type: null, message: '' });

    // Simulasi proses upload
    await new Promise(resolve => setTimeout(resolve, 500));

    try {
      // Simpan data baru ke context
      setTools(previewData);

      setUploadStatus({ type: 'success', message: `Berhasil memuat ${previewData.length} tools ke dalam sistem!` });
      setFile(null);
      setPreviewData([]);
    } catch (error) {
      setUploadStatus({ type: 'error', message: `Gagal memuat data: ${error instanceof Error ? error.message : String(error)}` });
    }

    setUploading(false);
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
                <p className="text-gray-600">Kelola konten AI Portal dengan mengunggah file Excel.</p>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileSpreadsheet className="h-6 w-6" />
                    Upload File Excel ke Database
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center hover:border-gray-300 transition-colors relative">
                    <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
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
                      <div className="flex gap-3">
                        <Button
                           onClick={handleUpload} // Ganti di sini
                                disabled={previewData.length === 0 || uploading}
                                className="bg-gray-800 hover:bg-gray-900 text-white"
                              >
                                <Database className="mr-2 h-4 w-4" />
                                {uploading ? 'Memuat...' : `Muat ${previewData.length} Data`}
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