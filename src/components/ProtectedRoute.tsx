import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // Jika pengguna tidak terautentikasi, alihkan ke halaman utama
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;