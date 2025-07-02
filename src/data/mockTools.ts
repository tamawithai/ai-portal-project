
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

export const mockTools: Tool[] = [
  {
    id: '1',
    name: 'ChatGPT',
    description: 'AI chatbot yang dapat membantu Anda dalam berbagai tugas seperti menulis, coding, dan menjawab pertanyaan.',
    link: 'https://chat.openai.com',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop',
    category: 'Text Generation',
    pricing: 'Freemium',
    tags: ['chatbot', 'writing', 'coding'],
    popularityScore: 98
  },
  {
    id: '2',
    name: 'Midjourney',
    description: 'Platform AI untuk membuat gambar berkualitas tinggi dari deskripsi teks dengan hasil yang menakjubkan.',
    link: 'https://midjourney.com',
    imageUrl: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=500&h=300&fit=crop',
    category: 'Image Generation',
    pricing: 'Berbayar',
    tags: ['art', 'design', 'creative'],
    popularityScore: 95
  },
  {
    id: '3',
    name: 'GitHub Copilot',
    description: 'AI coding assistant yang membantu developer menulis kode lebih cepat dengan suggestions yang cerdas.',
    link: 'https://github.com/features/copilot',
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop',
    category: 'Code Assistant',
    pricing: 'Berbayar',
    tags: ['coding', 'developer', 'productivity'],
    popularityScore: 92
  },
  {
    id: '4',
    name: 'DALL-E 2',
    description: 'Sistem AI dari OpenAI yang dapat membuat gambar realistis dan artwork dari deskripsi dalam bahasa natural.',
    link: 'https://openai.com/dall-e-2',
    imageUrl: 'https://images.unsplash.com/photo-1686191128892-c1d52e0d4d4b?w=500&h=300&fit=crop',
    category: 'Image Generation',
    pricing: 'Freemium',
    tags: ['art', 'image', 'creative'],
    popularityScore: 90
  },
  {
    id: '5',
    name: 'Canva AI',
    description: 'Tool design dengan bantuan AI untuk membuat desain grafis, presentasi, dan konten visual lainnya.',
    link: 'https://www.canva.com',
    imageUrl: 'https://images.unsplash.com/photo-1558655146-364adaf25c16?w=500&h=300&fit=crop',
    category: 'Design Tools',
    pricing: 'Freemium',
    tags: ['design', 'graphics', 'templates'],
    popularityScore: 88
  },
  {
    id: '6',
    name: 'Runway ML',
    description: 'Platform AI untuk editing video, membuat efek visual, dan mengolah media dengan teknologi machine learning.',
    link: 'https://runwayml.com',
    imageUrl: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=500&h=300&fit=crop',
    category: 'Video Editing',
    pricing: 'Freemium',
    tags: ['video', 'editing', 'effects'],
    popularityScore: 85
  },
  {
    id: '7',
    name: 'Jasper AI',
    description: 'AI writing assistant untuk membuat konten marketing, blog posts, dan copy yang engaging.',
    link: 'https://jasper.ai',
    imageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=500&h=300&fit=crop',
    category: 'Text Generation',
    pricing: 'Berbayar',
    tags: ['writing', 'marketing', 'content'],
    popularityScore: 82
  },
  {
    id: '8',
    name: 'Stable Diffusion',
    description: 'Model AI open-source untuk generate gambar dari text prompts dengan kontrol yang detail.',
    link: 'https://stability.ai',
    imageUrl: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=500&h=300&fit=crop',
    category: 'Image Generation',
    pricing: 'Gratis',
    tags: ['open-source', 'art', 'generation'],
    popularityScore: 80
  },
  {
    id: '9',
    name: 'Murf AI',
    description: 'Text-to-speech AI yang mengubah teks menjadi suara natural dengan berbagai pilihan voice.',
    link: 'https://murf.ai',
    imageUrl: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=500&h=300&fit=crop',
    category: 'Audio Processing',
    pricing: 'Freemium',
    tags: ['voice', 'speech', 'audio'],
    popularityScore: 78
  },
  {
    id: '10',
    name: 'Tableau AI',
    description: 'Platform analisis data dengan AI untuk visualisasi dan insights bisnis yang mendalam.',
    link: 'https://www.tableau.com',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    category: 'Data Analysis',
    pricing: 'Berbayar',
    tags: ['analytics', 'data', 'visualization'],
    popularityScore: 75
  },
  {
    id: '11',
    name: 'Copy.ai',
    description: 'AI copywriting tool untuk membuat konten marketing, email, dan social media posts.',
    link: 'https://copy.ai',
    imageUrl: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=500&h=300&fit=crop',
    category: 'Text Generation',
    pricing: 'Freemium',
    tags: ['copywriting', 'marketing', 'content'],
    popularityScore: 73
  },
  {
    id: '12',
    name: 'Replit AI',
    description: 'IDE online dengan AI assistant untuk coding, debugging, dan pembelajaran programming.',
    link: 'https://replit.com',
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop',
    category: 'Code Assistant',
    pricing: 'Freemium',
    tags: ['coding', 'ide', 'learning'],
    popularityScore: 70
  }
];
