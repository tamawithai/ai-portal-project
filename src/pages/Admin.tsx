
import React, { useState } from 'react';
import { Upload, FileSpreadsheet, Check, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import * as XLSX from 'xlsx';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

interface Tool {
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
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
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
          name: row.name || row.Name || '',
          description: row.description || row.Description || '',
          link: row.link || row.Link || row.url || row.URL || '',
          imageUrl: row.imageUrl || row.ImageUrl || row.image || row.Image || '',
          category: row.category || row.Category || '',
          pricing: row.pricing || row.Pricing || 'Gratis',
          tags: typeof (row.tags || row.Tags) === 'string' 
            ? (row.tags || row.Tags).split(',').map((tag: string) => tag.trim())
            : [],
          popularityScore: Number(row.popularityScore || row.PopularityScore) || index + 1
        }));

        setPreviewData(tools);
      } catch (error) {
        setUploadStatus({type: 'error', message: 'Error membaca file Excel. Pastikan format file benar.'});
      }
    };
    reader.readAsBinaryString(file);
  };

  const handleUpload = async () => {
    if (!file || previewData.length === 0) return;

    setUploading(true);
    try {
      // Simpan data ke localStorage sebagai string JSON
      localStorage.setItem('ai_tools_data', JSON.stringify(previewData));

      // Simulasi penundaan untuk UX
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setUploadStatus({type: 'success', message: `Berhasil menyimpan ${previewData.length} tools!`});
      setFile(null);
      setPreviewData([]);
      
      // Reset input file
      const fileInput = document.getElementById('file-input') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
      
    } catch (error) {
      console.error("Gagal menyimpan ke localStorage:", error);
      setUploadStatus({type: 'error', message: 'Gagal menyimpan data. Silakan coba lagi.'});
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
        isMenuOpen={isMenuOpen}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      
      <div className="flex">
        <Sidebar isOpen={isMenuOpen} />
        
        <main className="flex-1 p-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Panel</h1>
              <p className="text-gray-600">Kelola konten AI Portal dengan mengunggah file Excel</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileSpreadsheet className="h-6 w-6" />
                  Upload File Excel
                </CardTitle>
                <CardDescription>
                  Upload file Excel dengan kolom: name, description, link, imageUrl, category, pricing, tags, popularityScore
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center hover:border-gray-300 transition-colors">
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

                {file && (
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-blue-900">File yang dipilih:</p>
                    <p className="text-sm text-blue-700">{file.name}</p>
                    <p className="text-xs text-blue-600 mt-1">
                      Preview: {previewData.length} tools akan ditambahkan
                    </p>
                  </div>
                )}

                {uploadStatus.type && (
                  <Alert className={uploadStatus.type === 'success' ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}>
                    {uploadStatus.type === 'success' ? (
                      <Check className="h-4 w-4 text-green-600" />
                    ) : (
                      <AlertCircle className="h-4 w-4 text-red-600" />
                    )}
                    <AlertDescription className={uploadStatus.type === 'success' ? 'text-green-800' : 'text-red-800'}>
                      {uploadStatus.message}
                    </AlertDescription>
                  </Alert>
                )}

                {previewData.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-900">Preview Data ({previewData.length} items)</h3>
                    <div className="max-h-60 overflow-y-auto border rounded-lg">
                      <div className="grid gap-2 p-4">
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
                  </div>
                )}

                <div className="flex gap-3">
                  <Button
                    onClick={handleUpload}
                    disabled={!file || previewData.length === 0 || uploading}
                    className="bg-gray-800 hover:bg-gray-900 text-white"
                  >
                    {uploading ? 'Mengunggah...' : 'Upload Data'}
                  </Button>
                  
                  {file && (
                    <Button
                      variant="outline"
                      onClick={() => {
                        setFile(null);
                        setPreviewData([]);
                        setUploadStatus({type: null, message: ''});
                        const fileInput = document.getElementById('file-input') as HTMLInputElement;
                        if (fileInput) fileInput.value = '';
                      }}
                    >
                      Batal
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Format File Excel</CardTitle>
                <CardDescription>
                  Pastikan file Excel memiliki kolom dengan header berikut:
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div><strong>name:</strong> Nama tool AI</div>
                    <div><strong>description:</strong> Deskripsi tool</div>
                    <div><strong>link:</strong> URL website tool</div>
                    <div><strong>imageUrl:</strong> URL gambar/logo</div>
                  </div>
                  <div className="space-y-2">
                    <div><strong>category:</strong> Kategori tool</div>
                    <div><strong>pricing:</strong> Gratis/Berbayar/Freemium</div>
                    <div><strong>tags:</strong> Tag dipisah koma</div>
                    <div><strong>popularityScore:</strong> Angka popularitas</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Admin;
