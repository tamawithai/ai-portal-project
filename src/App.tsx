import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';
<<<<<<< HEAD
import { ToolProvider } from './contexts/ToolContext'; // Tambahkan baris ini
=======
>>>>>>> 1494ca6fb7369ec3af83384a469bbca7becf77e7
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Admin from "./pages/Admin";
import Browse from "./pages/Browse";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
<<<<<<< HEAD
 <ToolProvider> {/* Tambahkan pembungkus ini */}
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* ...rute Anda tetap sama... */}
              <Route path="/" element={<Index />} />
              <Route path="/browse" element={<Browse />} />
              <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
              <Route path="*" element={<NotFound />} />
          </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </AuthProvider>
  </ToolProvider> /* Tutup pembungkus di sini */
=======
<AuthProvider>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
              <Route path="/browse" element={<Browse />} />
              <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
      </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
</AuthProvider>
>>>>>>> 1494ca6fb7369ec3af83384a469bbca7becf77e7
);

export default App;
