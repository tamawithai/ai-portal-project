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
    "name": "Gemini",
    "description": "Membuat musik latar bebas royalti dengan AI.",
    "link": "https://gemini.google.com/app",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/refs/heads/main/asset/gemini.jpg",
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
    "imageUrl": "https://placehold.co/500x300/fef2f2/b91c1c?text=ThumbnailAce",
    "category": "Kreatif",
    "pricing": "Freemium",
    "tags": [
      "youtube",
      "thumbnail",
      "desain"
    ],
    "popularityScore": 65
  },
  {
    "id": "31",
    "name": "DocuSum",
    "description": "Meringkas dokumen panjang menjadi poin-poin penting.",
    "link": "https://example.com/docusum",
    "imageUrl": "https://placehold.co/500x300/D1D5DB/111827?text=DocuSum",
    "category": "Produktivitas",
    "pricing": "Freemium",
    "tags": [
      "dokumen",
      "ringkasan",
      "riset"
    ],
    "popularityScore": 64
  },
  {
    "id": "32",
    "name": "SocialScheduler",
    "description": "Menjadwalkan postingan media sosial di waktu optimal.",
    "link": "https://example.com/socialscheduler",
    "imageUrl": "https://placehold.co/500x300/A5B4FC/312E81?text=Scheduler",
    "category": "Marketing",
    "pricing": "Berbayar",
    "tags": [
      "sosial media",
      "jadwal",
      "konten"
    ],
    "popularityScore": 63
  },
  {
    "id": "33",
    "name": "ClearTranslate",
    "description": "Terjemahan real-time untuk percakapan suara.",
    "link": "https://example.com/cleartranslate",
    "imageUrl": "https://placehold.co/500x300/FBCFE8/831843?text=Translate",
    "category": "Komunikasi",
    "pricing": "Gratis",
    "tags": [
      "terjemahan",
      "suara",
      "percakapan"
    ],
    "popularityScore": 62
  },
  {
    "id": "34",
    "name": "TestGen",
    "description": "Membuat unit test untuk kode secara otomatis.",
    "link": "https://example.com/testgen",
    "imageUrl": "https://placehold.co/500x300/FDE68A/854D0E?text=TestGen",
    "category": "Kreatif",
    "pricing": "Freemium",
    "tags": [
      "coding",
      "testing",
      "developer"
    ],
    "popularityScore": 61
  },
  {
    "id": "35",
    "name": "MarketPredict",
    "description": "Prediksi tren pasar menggunakan data historis.",
    "link": "https://example.com/marketpredict",
    "imageUrl": "https://placehold.co/500x300/C7D2FE/3730A3?text=Predict",
    "category": "Analisis",
    "pricing": "Berbayar",
    "tags": [
      "pasar",
      "analisis",
      "prediksi"
    ],
    "popularityScore": 60
  },
  {
    "id": "36",
    "name": "DreamBrush",
    "description": "Generator gambar dari imajinasi liar Anda.",
    "link": "https://example.com/dreambrush",
    "imageUrl": "https://placehold.co/500x300/BFDBFE/1E40AF?text=DreamBrush",
    "category": "Kreatif",
    "pricing": "Gratis",
    "tags": [
      "gambar",
      "seni",
      "imajinasi"
    ],
    "popularityScore": 59
  },
  {
    "id": "37",
    "name": "MinuteTaker",
    "description": "Membuat notulensi rapat secara otomatis dari rekaman.",
    "link": "https://example.com/minutetaker",
    "imageUrl": "https://placehold.co/500x300/DDD6FE/5B21B6?text=Minutes",
    "category": "Produktivitas",
    "pricing": "Freemium",
    "tags": [
      "rapat",
      "notulensi",
      "produktivitas"
    ],
    "popularityScore": 58
  },
  {
    "id": "38",
    "name": "EmailEngage",
    "description": "Personalisasi campaign email marketing dengan AI.",
    "link": "https://example.com/emailengage",
    "imageUrl": "https://placehold.co/500x300/FED7AA/9A3412?text=EmailEngage",
    "category": "Marketing",
    "pricing": "Berbayar",
    "tags": [
      "email",
      "marketing",
      "crm"
    ],
    "popularityScore": 57
  },
  {
    "id": "39",
    "name": "TalkFlow",
    "description": "Latihan presentasi dan pidato dengan feedback AI.",
    "link": "https://example.com/talkflow",
    "imageUrl": "https://placehold.co/500x300/FDE047/713F12?text=TalkFlow",
    "category": "Komunikasi",
    "pricing": "Freemium",
    "tags": [
      "presentasi",
      "pidato",
      "latihan"
    ],
    "popularityScore": 56
  },
  {
    "id": "40",
    "name": "AlgoTrader",
    "description": "Platform trading otomatis berbasis algoritma AI.",
    "link": "https://example.com/algotrader",
    "imageUrl": "https://placehold.co/500x300/BEF264/3F6212?text=AlgoTrader",
    "category": "Analisis",
    "pricing": "Berbayar",
    "tags": [
      "trading",
      "saham",
      "investasi"
    ],
    "popularityScore": 55
  },
  {
    "id": "41",
    "name": "StoryWeaver",
    "description": "Membantu penulis membuat alur cerita yang menarik.",
    "link": "https://example.com/storyweaver",
    "imageUrl": "https://placehold.co/500x300/E9D5FF/581C87?text=StoryWeaver",
    "category": "Kreatif",
    "pricing": "Freemium",
    "tags": [
      "menulis",
      "cerita",
      "kreatif"
    ],
    "popularityScore": 54
  },
  {
    "id": "42",
    "name": "FocusFlow",
    "description": "Memblokir gangguan dan meningkatkan fokus kerja.",
    "link": "https://example.com/focusflow",
    "imageUrl": "https://placehold.co/500x300/BAE6FD/0C4A6E?text=FocusFlow",
    "category": "Produktivitas",
    "pricing": "Gratis",
    "tags": [
      "fokus",
      "produktivitas",
      "kerja"
    ],
    "popularityScore": 53
  },
  {
    "id": "43",
    "name": "AdVisuals",
    "description": "Membuat visual iklan yang menarik dari deskripsi produk.",
    "link": "https://example.com/advisuals",
    "imageUrl": "https://placehold.co/500x300/FECACA/991B1B?text=AdVisuals",
    "category": "Marketing",
    "pricing": "Berbayar",
    "tags": [
      "iklan",
      "desain",
      "visual"
    ],
    "popularityScore": 52
  },
  {
    "id": "44",
    "name": "SupportBot",
    "description": "Chatbot layanan pelanggan yang belajar dari interaksi.",
    "link": "https://example.com/supportbot",
    "imageUrl": "https://placehold.co/500x300/D1FAE5/065F46?text=SupportBot",
    "category": "Komunikasi",
    "pricing": "Freemium",
    "tags": [
      "chatbot",
      "support",
      "layanan"
    ],
    "popularityScore": 51
  },
  {
    "id": "45",
    "name": "CodeDoc",
    "description": "Membuat dokumentasi kode secara otomatis.",
    "link": "https://example.com/codedoc",
    "imageUrl": "https://placehold.co/500x300/E0E7FF/3730A3?text=CodeDoc",
    "category": "Kreatif",
    "pricing": "Gratis",
    "tags": [
      "coding",
      "dokumentasi",
      "developer"
    ],
    "popularityScore": 50
  },
  {
    "id": "46",
    "name": "HealthTrack",
    "description": "Analisis data kesehatan pribadi dan rekomendasi.",
    "link": "https://example.com/healthtrack",
    "imageUrl": "https://placehold.co/500x300/BBF7D0/15803D?text=HealthTrack",
    "category": "Analisis",
    "pricing": "Freemium",
    "tags": [
      "kesehatan",
      "analisis",
      "data"
    ],
    "popularityScore": 49
  },
  {
    "id": "47",
    "name": "NotePerfect",
    "description": "Mengatur dan menghubungkan catatan digital Anda.",
    "link": "https://example.com/noteperfect",
    "imageUrl": "https://placehold.co/500x300/FEF9C3/854D0E?text=NotePerfect",
    "category": "Produktivitas",
    "pricing": "Freemium",
    "tags": [
      "catatan",
      "organisasi",
      "produktivitas"
    ],
    "popularityScore": 48
  },
  {
    "id": "48",
    "name": "SEOGuru",
    "description": "Rekomendasi kata kunci dan strategi SEO.",
    "link": "https://example.com/seoguru",
    "imageUrl": "https://placehold.co/500x300/CFFAFE/0E7490?text=SEOGuru",
    "category": "Marketing",
    "pricing": "Berbayar",
    "tags": [
      "seo",
      "marketing",
      "kata kunci"
    ],
    "popularityScore": 47
  },
  {
    "id": "49",
    "name": "ConnectSphere",
    "description": "Manajemen kontak dan jaringan profesional cerdas.",
    "link": "https://example.com/connectsphere",
    "imageUrl": "https://placehold.co/500x300/E9D5FF/6B21A8?text=Connect",
    "category": "Komunikasi",
    "pricing": "Gratis",
    "tags": [
      "jaringan",
      "kontak",
      "crm"
    ],
    "popularityScore": 46
  },
  {
    "id": "50",
    "name": "DesignSystem AI",
    "description": "Membuat dan mengelola design system secara otomatis.",
    "link": "https://example.com/designsystem",
    "imageUrl": "https://placehold.co/500x300/FBCFE8/9D2674?text=DesignSys",
    "category": "Kreatif",
    "pricing": "Berbayar",
    "tags": [
      "desain",
      "ui",
      "ux"
    ],
    "popularityScore": 45
  }
]