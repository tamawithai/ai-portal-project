import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

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

interface ToolCardProps {
  tool: Tool;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {

  const getPricingColor = (pricing: string) => {
    switch (pricing.toLowerCase()) {
      case 'gratis':
        return 'bg-green-100 text-green-800';
      case 'berbayar':
        return 'bg-red-100 text-red-800';
      case 'freemium':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-white border border-gray-200">
      <CardContent className="p-6">
        <div className="aspect-video bg-gray-100 rounded-lg mb-4 overflow-hidden">
          <img 
            src={tool.imageUrl} 
            alt={tool.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="space-y-3">
          <div className="flex items-start justify-between">
            <h3 className="font-semibold text-lg text-gray-900 group-hover:text-gray-700 transition-colors">
              {tool.name}
            </h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.open(tool.link, '_blank')}
              className="text-gray-500 hover:text-gray-800 p-2"
            >
              <ExternalLink size={18} />
            </Button>
          </div>

          <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
            {tool.description}
          </p>

          <div className="flex flex-wrap gap-1">
            <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-800 border-gray-200">
              {tool.category}
            </Badge>
            <Badge className={`text-xs ${getPricingColor(tool.pricing)} border`}>
              {tool.pricing}
            </Badge>
          </div>

          {tool.tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {tool.tags.slice(0, 3).map((tag, index) => (
                <Badge key={index} variant="outline" className="text-xs text-gray-600 border-gray-300">
                  #{tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ToolCard;