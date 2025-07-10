import React, { createContext, useState, useContext, ReactNode, useMemo } from 'react';
import { Tool, mockTools } from '../data/mockTools';

interface ToolContextType {
  tools: Tool[];
  setTools: React.Dispatch<React.SetStateAction<Tool[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const ToolContext = createContext<ToolContextType | undefined>(undefined);

export const ToolProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tools, setTools] = useState<Tool[]>(mockTools);
  const [loading, setLoading] = useState(false);

  const value = useMemo(() => ({
    tools,
    setTools,
    loading,
    setLoading
  }), [tools, loading]);

  return (
    <ToolContext.Provider value={value}>
      {children}
    </ToolContext.Provider>
  );
};

export const useTools = () => {
  const context = useContext(ToolContext);
  if (context === undefined) {
    throw new Error('useTools must be used within a ToolProvider');
  }
  return context;
};