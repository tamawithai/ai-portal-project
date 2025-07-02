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
    "id": "1",
    "name": "SynthWave",
    "description": "Membuat musik latar bebas royalti dengan AI.",
    "link": "https://example.com/synthwave",
    "imageUrl": "https://placehold.co/500x300/e8d2fc/6b46c1?text=SynthWave",
    "category": "Kreatif",
    "pricing": "Freemium",
    "tags": [
      "musik",
      "audio",
      "creative"
    ],
    "popularityScore": 98
  },
  {
    "id": "2",
    "name": "DataBot",
    "description": "Asisten analisis data untuk visualisasi cepat.",
    "link": "https://example.com/databot",
    "imageUrl": "https://placehold.co/500x300/d1e9ff/1a365d?text=DataBot",
    "category": "Analisis",
    "pricing": "Berbayar",
    "tags": [
      "data",
      "analisis",
      "bisnis"
    ],
    "popularityScore": 95
  },
  {
    "id": "3",
    "name": "FlowWrite",
    "description": "Meningkatkan produktivitas menulis email dan laporan.",
    "link": "https://example.com/flowwrite",
    "imageUrl": "https://placehold.co/500x300/bde0fe/0077b6?text=FlowWrite",
    "category": "Produktivitas",
    "pricing": "Freemium",
    "tags": [
      "menulis",
      "email",
      "produktivitas"
    ],
    "popularityScore": 94
  },
  {
    "id": "4",
    "name": "MarketGenius",
    "description": "Membuat kampanye marketing otomatis.",
    "link": "https://example.com/marketgenius",
    "imageUrl": "https://placehold.co/500x300/fecdd3/be123c?text=MarketGenius",
    "category": "Marketing",
    "pricing": "Berbayar",
    "tags": [
      "marketing",
      "otomatisasi",
      "iklan"
    ],
    "popularityScore": 92
  },
  {
    "id": "5",
    "name": "CodePilot X",
    "description": "Asisten coding dengan dukungan multi-bahasa.",
    "link": "https://example.com/codepilotx",
    "imageUrl": "https://placehold.co/500x300/d1fae5/047857?text=CodePilotX",
    "category": "Kreatif",
    "pricing": "Berbayar",
    "tags": [
      "coding",
      "developer",
      "github"
    ],
    "popularityScore": 91
  },
  {
    "id": "6",
    "name": "CommuniKate",
    "description": "AI untuk transkripsi dan ringkasan rapat.",
    "link": "https://example.com/communikate",
    "imageUrl": "https://placehold.co/500x300/fef3c7/b45309?text=CommuniKate",
    "category": "Komunikasi",
    "pricing": "Freemium",
    "tags": [
      "rapat",
      "transkripsi",
      "kolaborasi"
    ],
    "popularityScore": 90
  },
  {
    "id": "7",
    "name": "Artify",
    "description": "Mengubah sketsa menjadi karya seni digital.",
    "link": "https://example.com/artify",
    "imageUrl": "https://placehold.co/500x300/fce7f3/db2777?text=Artify",
    "category": "Kreatif",
    "pricing": "Gratis",
    "tags": [
      "seni",
      "desain",
      "gambar"
    ],
    "popularityScore": 88
  },
  {
    "id": "8",
    "name": "TaskMaster",
    "description": "Manajemen proyek cerdas dengan prediksi deadline.",
    "link": "https://example.com/taskmaster",
    "imageUrl": "https://placehold.co/500x300/e0e7ff/3730a3?text=TaskMaster",
    "category": "Produktivitas",
    "pricing": "Freemium",
    "tags": [
      "proyek",
      "manajemen",
      "tugas"
    ],
    "popularityScore": 87
  },
  {
    "id": "9",
    "name": "LeadSpark",
    "description": "Menemukan prospek penjualan berkualitas.",
    "link": "https://example.com/leadspark",
    "imageUrl": "https://placehold.co/500x300/ccfbf1/0d9488?text=LeadSpark",
    "category": "Marketing",
    "pricing": "Berbayar",
    "tags": [
      "penjualan",
      "leads",
      "b2b"
    ],
    "popularityScore": 86
  },
  {
    "id": "10",
    "name": "VideoScribe AI",
    "description": "Membuat video animasi dari teks secara otomatis.",
    "link": "https://example.com/videoscribe",
    "imageUrl": "https://placehold.co/500x300/fee2e2/dc2626?text=VideoScribe",
    "category": "Kreatif",
    "pricing": "Freemium",
    "tags": [
      "video",
      "animasi",
      "konten"
    ],
    "popularityScore": 85
  },
  {
    "id": "11",
    "name": "Insightify",
    "description": "Analisis sentimen media sosial untuk brand Anda.",
    "link": "https://example.com/insightify",
    "imageUrl": "https://placehold.co/500x300/ebf4ff/1d4ed8?text=Insightify",
    "category": "Analisis",
    "pricing": "Berbayar",
    "tags": [
      "analisis",
      "sosial media",
      "sentimen"
    ],
    "popularityScore": 84
  },
  {
    "id": "12",
    "name": "LingoLink",
    "description": "Layanan terjemahan dokumen multi-bahasa akurat.",
    "link": "https://example.com/lingolink",
    "imageUrl": "https://placehold.co/500x300/fafafa/18181b?text=LingoLink",
    "category": "Komunikasi",
    "pricing": "Gratis",
    "tags": [
      "terjemahan",
      "dokumen",
      "bahasa"
    ],
    "popularityScore": 83
  },
  {
    "id": "13",
    "name": "DevOps-Bot",
    "description": "Otomatisasi alur kerja CI/CD untuk developer.",
    "link": "https://example.com/devopsbot",
    "imageUrl": "https://placehold.co/500x300/f3e8ff/7e22ce?text=DevOpsBot",
    "category": "Kreatif",
    "pricing": "Freemium",
    "tags": [
      "devops",
      "ci-cd",
      "coding"
    ],
    "popularityScore": 82
  },
  {
    "id": "14",
    "name": "SlideCraft",
    "description": "Membuat slide presentasi yang menarik dalam sekejap.",
    "link": "https://example.com/slidecraft",
    "imageUrl": "https://placehold.co/500x300/fff7ed/ea580c?text=SlideCraft",
    "category": "Produktivitas",
    "pricing": "Freemium",
    "tags": [
      "presentasi",
      "slides",
      "powerpoint"
    ],
    "popularityScore": 81
  },
  {
    "id": "15",
    "name": "AdCopy Pro",
    "description": "Generator copy iklan untuk Facebook & Google.",
    "link": "https://example.com/adcopypro",
    "imageUrl": "https://placehold.co/500x300/eff6ff/2563eb?text=AdCopyPro",
    "category": "Marketing",
    "pricing": "Berbayar",
    "tags": [
      "iklan",
      "copywriting",
      "ads"
    ],
    "popularityScore": 80
  },
  {
    "id": "16",
    "name": "PersonaGen",
    "description": "Membuat persona pengguna fiktif untuk riset pasar.",
    "link": "https://example.com/personagen",
    "imageUrl": "https://placehold.co/500x300/f0fdf4/16a34a?text=PersonaGen",
    "category": "Analisis",
    "pricing": "Gratis",
    "tags": [
      "riset",
      "persona",
      "ux"
    ],
    "popularityScore": 79
  },
  {
    "id": "17",
    "name": "VoiceOver AI",
    "description": "Mengubah teks menjadi suara manusia yang natural.",
    "link": "https://example.com/voiceover",
    "imageUrl": "https://placehold.co/500x300/ecfeff/0891b2?text=VoiceOverAI",
    "category": "Komunikasi",
    "pricing": "Freemium",
    "tags": [
      "voiceover",
      "audio",
      "podcast"
    ],
    "popularityScore": 78
  },
  {
    "id": "18",
    "name": "BrandGuard",
    "description": "Memonitor penyebutan brand Anda di seluruh web.",
    "link": "https://example.com/brandguard",
    "imageUrl": "https://placehold.co/500x300/faf5ff/9333ea?text=BrandGuard",
    "category": "Marketing",
    "pricing": "Berbayar",
    "tags": [
      "brand",
      "monitoring",
      "reputasi"
    ],
    "popularityScore": 77
  },
  {
    "id": "19",
    "name": "SketchUp AI",
    "description": "Plugin AI untuk pemodelan arsitektur 3D.",
    "link": "https://example.com/sketchupai",
    "imageUrl": "https://placehold.co/500x300/dbeafe/3b82f6?text=SketchUpAI",
    "category": "Kreatif",
    "pricing": "Freemium",
    "tags": [
      "3d",
      "arsitektur",
      "desain"
    ],
    "popularityScore": 76
  },
  {
    "id": "20",
    "name": "QueryBot",
    "description": "Membuat query SQL kompleks dari bahasa natural.",
    "link": "https://example.com/querybot",
    "imageUrl": "https://placehold.co/500x300/eef2ff/4338ca?text=QueryBot",
    "category": "Analisis",
    "pricing": "Berbayar",
    "tags": [
      "sql",
      "database",
      "developer"
    ],
    "popularityScore": 75
  },
  {
    "id": "21",
    "name": "MeetMinder",
    "description": "Asisten virtual untuk menjadwalkan pertemuan.",
    "link": "https://example.com/meetminder",
    "imageUrl": "https://placehold.co/500x300/fdf2f8/c026d3?text=MeetMinder",
    "category": "Produktivitas",
    "pricing": "Freemium",
    "tags": [
      "jadwal",
      "kalender",
      "rapat"
    ],
    "popularityScore": 74
  },
  {
    "id": "22",
    "name": "TrendSpotter",
    "description": "Mengidentifikasi tren pasar yang sedang naik daun.",
    "link": "https://example.com/trendspotter",
    "imageUrl": "https://placehold.co/500x300/f5f5f5/404040?text=TrendSpotter",
    "category": "Analisis",
    "pricing": "Berbayar",
    "tags": [
      "tren",
      "pasar",
      "riset"
    ],
    "popularityScore": 73
  },
  {
    "id": "23",
    "name": "ContentReel",
    "description": "Membuat video pendek untuk media sosial dari artikel.",
    "link": "https://example.com/contentreel",
    "imageUrl": "https://placehold.co/500x300/fff1f2/e11d48?text=ContentReel",
    "category": "Marketing",
    "pricing": "Freemium",
    "tags": [
      "video",
      "konten",
      "sosial media"
    ],
    "popularityScore": 72
  },
  {
    "id": "24",
    "name": "DialogFlow",
    "description": "Platform untuk membangun chatbot cerdas.",
    "link": "https://example.com/dialogflow",
    "imageUrl": "https://placehold.co/500x300/fefce8/ca8a04?text=DialogFlow",
    "category": "Komunikasi",
    "pricing": "Freemium",
    "tags": [
      "chatbot",
      "customer service",
      "ai"
    ],
    "popularityScore": 71
  },
  {
    "id": "25",
    "name": "CodeReview AI",
    "description": "Menganalisis kode dan memberikan saran perbaikan.",
    "link": "https://example.com/codereview",
    "imageUrl": "https://placehold.co/500x300/e5e7eb/1f2937?text=CodeReview",
    "category": "Kreatif",
    "pricing": "Berbayar",
    "tags": [
      "coding",
      "review",
      "kualitas"
    ],
    "popularityScore": 70
  },
  {
    "id": "26",
    "name": "ResumeBuilder",
    "description": "AI untuk membuat CV profesional dalam hitungan menit.",
    "link": "https://example.com/resumebuilder",
    "imageUrl": "https://placehold.co/500x300/f3f4f6/374151?text=ResumeBuilder",
    "category": "Produktivitas",
    "pricing": "Gratis",
    "tags": [
      "cv",
      "resume",
      "karier"
    ],
    "popularityScore": 69
  },
  {
    "id": "27",
    "name": "LegalDraft",
    "description": "Menyusun dokumen hukum dasar secara otomatis.",
    "link": "https://example.com/legaldraft",
    "imageUrl": "https://placehold.co/500x300/e2e8f0/475569?text=LegalDraft",
    "category": "Produktivitas",
    "pricing": "Berbayar",
    "tags": [
      "hukum",
      "dokumen",
      "legal"
    ],
    "popularityScore": 68
  },
  {
    "id": "28",
    "name": "PodcastPro",
    "description": "Editing dan mastering audio podcast dengan AI.",
    "link": "https://example.com/podcastpro",
    "imageUrl": "https://placehold.co/500x300/fae8ff/86198f?text=PodcastPro",
    "category": "Komunikasi",
    "pricing": "Freemium",
    "tags": [
      "podcast",
      "audio",
      "editing"
    ],
    "popularityScore": 67
  },
  {
    "id": "29",
    "name": "StockSight",
    "description": "Analisis prediktif untuk pasar saham.",
    "link": "https://example.com/stocksight",
    "imageUrl": "https://placehold.co/500x300/dcfce7/166534?text=StockSight",
    "category": "Analisis",
    "pricing": "Berbayar",
    "tags": [
      "saham",
      "investasi",
      "finansial"
    ],
    "popularityScore": 66
  },
  {
    "id": "30",
    "name": "Thumbnail Ace",
    "description": "Desain thumbnail YouTube yang menarik perhatian.",
    "link": "https://example.com/thumbnailace",
    "imageUrl": "https://placehold.co/fef2f2/b91c1c?text=ThumbnailAce",
    "category": "Kreatif",
    "pricing": "Freemium",
    "tags": [
      "youtube",
      "thumbnail",
      "desain"
    ],
    "popularityScore": 65
  }
];