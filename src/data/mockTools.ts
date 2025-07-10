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
    "name": "ChatGPT",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://chat.openai.com/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/chat-openai-com.png",
    "category": "teks",
    "pricing": "berbayar",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 45
  },
  {
    "id": "2",
    "name": "Claude",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://claude.ai/chats",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/claude-ai.png",
    "category": "musik",
    "pricing": "gratis",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 46
  },
  {
    "id": "3",
    "name": "Microsoft Copilot",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://copilot.microsoft.com/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/copilot-microsoft-com.png",
    "category": "multimedia",
    "pricing": "freemium",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 47
  },
  {
    "id": "4",
    "name": "Perplexity AI",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://www.perplexity.ai/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/www-perplexity-ai.png",
    "category": "teks",
    "pricing": "berbayar",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 48
  },
  {
    "id": "5",
    "name": "QuillBot AI",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://quillbot.com/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/quillbot-com.png",
    "category": "musik",
    "pricing": "gratis",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 49
  },
  {
    "id": "6",
    "name": "AI for Work",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://www.aiforwork.co/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/www-aiforwork-co.png",
    "category": "multimedia",
    "pricing": "freemium",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 50
  },
  {
    "id": "7",
    "name": "DeepL Translate",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://www.deepl.com/translator",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/www-deepl-com.png",
    "category": "teks",
    "pricing": "berbayar",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 51
  },
  {
    "id": "8",
    "name": "Booth.AI",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://www.booth.ai/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/www-booth-ai.png",
    "category": "musik",
    "pricing": "gratis",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 52
  },
  {
    "id": "9",
    "name": "GravityWrite",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://gravitywrite.com/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/gravitywrite-com.png",
    "category": "multimedia",
    "pricing": "freemium",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 53
  },
  {
    "id": "10",
    "name": "Dupdub",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://www.dupdub.com/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/www-dupdub-com.png",
    "category": "teks",
    "pricing": "berbayar",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 54
  },
  {
    "id": "11",
    "name": "You",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://you.com/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/you-com.png",
    "category": "musik",
    "pricing": "gratis",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 55
  },
  {
    "id": "12",
    "name": "Gandalf",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://gandalf.lakera.ai/intro",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/gandalf-lakera-ai.png",
    "category": "multimedia",
    "pricing": "freemium",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 56
  },
  {
    "id": "13",
    "name": "bolt.new",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://bolt.new/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/bolt-new.png",
    "category": "teks",
    "pricing": "berbayar",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 57
  },
  {
    "id": "14",
    "name": "Lovable",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://lovable.dev/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/lovable-dev.png",
    "category": "musik",
    "pricing": "gratis",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 58
  },
  {
    "id": "15",
    "name": "Cursor",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://cursor.com/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/cursor-com.png",
    "category": "multimedia",
    "pricing": "freemium",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 59
  },
  {
    "id": "16",
    "name": "Replit",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://replit.com/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/replit-com.png",
    "category": "teks",
    "pricing": "berbayar",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 60
  },
  {
    "id": "17",
    "name": "Windsurf",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://windsurf.com/editor",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/windsurf-com.png",
    "category": "musik",
    "pricing": "gratis",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 61
  },
  {
    "id": "18",
    "name": "GPTZero",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://gptzero.me/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/gptzero-me.png",
    "category": "multimedia",
    "pricing": "freemium",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 62
  },
  {
    "id": "19",
    "name": "ZeroGPT",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://www.zerogpt.com/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/www-zerogpt-com.png",
    "category": "teks",
    "pricing": "berbayar",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 63
  },
  {
    "id": "20",
    "name": "GPT Zero",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://gpt-zero.com/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/gpt-zero-com.png",
    "category": "musik",
    "pricing": "gratis",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 64
  },
  {
    "id": "21",
    "name": "Midjourney",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://www.midjourney.com/home/?callbackUrl=%2Fapp%2F",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/www-midjourney-com.png",
    "category": "multimedia",
    "pricing": "freemium",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 65
  },
  {
    "id": "22",
    "name": "LensGo",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://lensgo.ai/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/lensgo-ai.png",
    "category": "teks",
    "pricing": "berbayar",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 66
  },
  {
    "id": "23",
    "name": "BlueWillow",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://www.bluewillow.ai/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/www-bluewillow-ai.png",
    "category": "musik",
    "pricing": "gratis",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 67
  },
  {
    "id": "24",
    "name": "RenderNet",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://rendernet.ai/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/rendernet-ai.png",
    "category": "multimedia",
    "pricing": "freemium",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 68
  },
  {
    "id": "25",
    "name": "Ideogram",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://ideogram.ai/t/explore",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/ideogram-ai.png",
    "category": "teks",
    "pricing": "berbayar",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 69
  },
  {
    "id": "26",
    "name": "Tengr.ai",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://tengr.ai/en",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/tengr-ai.png",
    "category": "musik",
    "pricing": "gratis",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 70
  },
  {
    "id": "27",
    "name": "SeaArt",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://www.seaart.ai/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/www-seaart-ai.png",
    "category": "multimedia",
    "pricing": "freemium",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 71
  },
  {
    "id": "28",
    "name": "Artflow",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://app.artflow.ai/character-builder?feature=actors",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/app-artflow-ai.png",
    "category": "teks",
    "pricing": "berbayar",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 72
  },
  {
    "id": "29",
    "name": "Stylar",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://www.stylar.ai/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/www-stylar-ai.png",
    "category": "musik",
    "pricing": "gratis",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 73
  },
  {
    "id": "30",
    "name": "Logo Diffusion",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://logodiffusion.com/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/logodiffusion-com.png",
    "category": "multimedia",
    "pricing": "freemium",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 74
  },
  {
    "id": "31",
    "name": "Playground",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://playground.com/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/playground-com.png",
    "category": "teks",
    "pricing": "berbayar",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 75
  },
  {
    "id": "32",
    "name": "IP Adapter Face ID",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://ipadapterfaceid.com/id",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/ipadapterfaceid-com.png",
    "category": "musik",
    "pricing": "gratis",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 76
  },
  {
    "id": "33",
    "name": "AKOOL",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://akool.com/apps/faceswap",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/akool-com.png",
    "category": "multimedia",
    "pricing": "freemium",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 77
  },
  {
    "id": "34",
    "name": "Civitai",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://civitai.com/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/civitai-com.png",
    "category": "teks",
    "pricing": "berbayar",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 78
  },
  {
    "id": "35",
    "name": "Shakker AI",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://www.shakker.ai/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/www-shakker-ai.png",
    "category": "musik",
    "pricing": "gratis",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 79
  },
  {
    "id": "36",
    "name": "Adobe Firefly",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://firefly.adobe.com/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/firefly-adobe-com.png",
    "category": "multimedia",
    "pricing": "freemium",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 80
  },
  {
    "id": "37",
    "name": "Pica AI",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://www.pica-ai.com/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/www-pica-ai-com.png",
    "category": "teks",
    "pricing": "berbayar",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 81
  },
  {
    "id": "38",
    "name": "Remaker",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://remaker.ai/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/remaker-ai.png",
    "category": "musik",
    "pricing": "gratis",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 82
  },
  {
    "id": "39",
    "name": "Phot.AI",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://www.phot.ai/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/www-phot-ai.png",
    "category": "multimedia",
    "pricing": "freemium",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 83
  },
  {
    "id": "40",
    "name": "AI Image Upscaler",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://imgupscaler.com/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/imgupscaler-com.png",
    "category": "teks",
    "pricing": "berbayar",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 84
  },
  {
    "id": "41",
    "name": "Clipdrop",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://clipdrop.co/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/clipdrop-co.png",
    "category": "musik",
    "pricing": "gratis",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 85
  },
  {
    "id": "42",
    "name": "Let’s Enhance",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://letsenhance.io/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/letsenhance-io.png",
    "category": "multimedia",
    "pricing": "freemium",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 86
  },
  {
    "id": "43",
    "name": "PicWish bg remove",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://picwish.com/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/picwish-com.png",
    "category": "teks",
    "pricing": "berbayar",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 87
  },
  {
    "id": "44",
    "name": "Upscale Media",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://www.upscale.media/id",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/www-upscale-media.png",
    "category": "musik",
    "pricing": "gratis",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 88
  },
  {
    "id": "45",
    "name": "Beautiful.ai",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://www.beautiful.ai/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/www-beautiful-ai.png",
    "category": "multimedia",
    "pricing": "freemium",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 89
  },
  {
    "id": "46",
    "name": "Tome",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://tome.app/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/tome-app.png",
    "category": "teks",
    "pricing": "berbayar",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 90
  },
  {
    "id": "47",
    "name": "Gamma",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://gamma.app/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/gamma-app.png",
    "category": "musik",
    "pricing": "gratis",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 91
  },
  {
    "id": "48",
    "name": "Napkin",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://www.napkin.ai/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/www-napkin-ai.png",
    "category": "multimedia",
    "pricing": "freemium",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 92
  },
  {
    "id": "49",
    "name": "Future Tools",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://www.futuretools.io/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/www-futuretools-io.png",
    "category": "teks",
    "pricing": "berbayar",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 93
  },
  {
    "id": "50",
    "name": "Futurepedia",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://www.futurepedia.io/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/www-futurepedia-io.png",
    "category": "musik",
    "pricing": "gratis",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 94
  },
  {
    "id": "51",
    "name": "There's An AI For That",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://theresanaiforthat.com/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/theresanaiforthat-com.png",
    "category": "multimedia",
    "pricing": "freemium",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 95
  },
  {
    "id": "52",
    "name": "TurboScribe",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://turboscribe.ai/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/turboscribe-ai.png",
    "category": "teks",
    "pricing": "berbayar",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 96
  },
  {
    "id": "53",
    "name": "Suno",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://suno.com/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/suno-com.png",
    "category": "musik",
    "pricing": "gratis",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 97
  },
  {
    "id": "54",
    "name": "Voicemod",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://www.voicemod.net/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/www-voicemod-net.png",
    "category": "multimedia",
    "pricing": "freemium",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 98
  },
  {
    "id": "55",
    "name": "Murf AI",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://murf.ai/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/murf-ai.png",
    "category": "teks",
    "pricing": "berbayar",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 99
  },
  {
    "id": "56",
    "name": "Voicify AI",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://www.voicify.ai/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/www-voicify-ai.png",
    "category": "musik",
    "pricing": "gratis",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 100
  },
  {
    "id": "57",
    "name": "Lovo",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://lovo.ai/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/lovo-ai.png",
    "category": "multimedia",
    "pricing": "freemium",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 101
  },
  {
    "id": "58",
    "name": "ElevenLabs",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://elevenlabs.io/speech-synthesis",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/elevenlabs-io.png",
    "category": "teks",
    "pricing": "berbayar",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 102
  },
  {
    "id": "59",
    "name": "Prosa",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://tts.prosa.ai/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/tts-prosa-ai.png",
    "category": "musik",
    "pricing": "gratis",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 103
  },
  {
    "id": "60",
    "name": "Sonix",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://sonix.ai/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/sonix-ai.png",
    "category": "multimedia",
    "pricing": "freemium",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 104
  },
  {
    "id": "61",
    "name": "Audiobox",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://audiobox.metademolab.com/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/audiobox-metademolab-com.png",
    "category": "teks",
    "pricing": "berbayar",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 105
  },
  {
    "id": "62",
    "name": "Runway",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://runwayml.com/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/runwayml-com.png",
    "category": "musik",
    "pricing": "gratis",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 106
  },
  {
    "id": "63",
    "name": "Captions",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://www.captions.ai/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/www-captions-ai.png",
    "category": "multimedia",
    "pricing": "freemium",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 107
  },
  {
    "id": "64",
    "name": "Synthesia",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://www.synthesia.io/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/www-synthesia-io.png",
    "category": "teks",
    "pricing": "berbayar",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 108
  },
  {
    "id": "65",
    "name": "HeyGen",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://www.heygen.com/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/www-heygen-com.png",
    "category": "musik",
    "pricing": "gratis",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 109
  },
  {
    "id": "66",
    "name": "DeepBrain AI",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://www.deepbrain.io/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/www-deepbrain-io.png",
    "category": "multimedia",
    "pricing": "freemium",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 110
  },
  {
    "id": "67",
    "name": "Vidnoz AI Tools",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://www.vidnoz.com/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/www-vidnoz-com.png",
    "category": "teks",
    "pricing": "berbayar",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 111
  },
  {
    "id": "68",
    "name": "Haiper",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://haiper.ai/home",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/haiper-ai.png",
    "category": "musik",
    "pricing": "gratis",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 112
  },
  {
    "id": "69",
    "name": "PixVerse",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://pixverse.ai/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/pixverse-ai.png",
    "category": "multimedia",
    "pricing": "freemium",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 113
  },
  {
    "id": "70",
    "name": "PromeAI",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://www.promeai.pro/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/www-promeai-pro.png",
    "category": "teks",
    "pricing": "berbayar",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 114
  },
  {
    "id": "71",
    "name": "SmartShort",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://www.smartshort.co/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/www-smartshort-co.png",
    "category": "musik",
    "pricing": "gratis",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 115
  },
  {
    "id": "72",
    "name": "GoEnhance AI",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://www.goenhance.ai/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/www-goenhance-ai.png",
    "category": "multimedia",
    "pricing": "freemium",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 116
  },
  {
    "id": "73",
    "name": "Hedra",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://www.hedra.com/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/www-hedra-com.png",
    "category": "teks",
    "pricing": "berbayar",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 117
  },
  {
    "id": "74",
    "name": "Kling AI",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://klingai.com/global/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/klingai-com.png",
    "category": "musik",
    "pricing": "gratis",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 118
  },
  {
    "id": "75",
    "name": "Vidu",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://www.vidu.com/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/www-vidu-com.png",
    "category": "multimedia",
    "pricing": "freemium",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 119
  },
  {
    "id": "76",
    "name": "LeiaPix",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://convert.leiapix.com/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/convert-leiapix-com.png",
    "category": "teks",
    "pricing": "berbayar",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 120
  },
  {
    "id": "77",
    "name": "Pika Labs",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://www.pika.art/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/www-pika-art.png",
    "category": "musik",
    "pricing": "gratis",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 121
  },
  {
    "id": "78",
    "name": "D-ID",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://studio.d-id.com/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/studio-d-id-com.png",
    "category": "multimedia",
    "pricing": "freemium",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 122
  },
  {
    "id": "79",
    "name": "Animated Drawings",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://sketch.metademolab.com/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/sketch-metademolab-com.png",
    "category": "teks",
    "pricing": "berbayar",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 123
  },
  {
    "id": "80",
    "name": "Genmo",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://www.genmo.ai/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/www-genmo-ai.png",
    "category": "musik",
    "pricing": "gratis",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 124
  },
  {
    "id": "81",
    "name": "Kaiber",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://kaiber.ai/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/kaiber-ai.png",
    "category": "multimedia",
    "pricing": "freemium",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 125
  },
  {
    "id": "82",
    "name": "Immersity AI",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://www.immersity.ai/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/www-immersity-ai.png",
    "category": "teks",
    "pricing": "berbayar",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 126
  },
  {
    "id": "83",
    "name": "Chatmind",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://chatmind.tech/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/chatmind-tech.png",
    "category": "musik",
    "pricing": "gratis",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 127
  },
  {
    "id": "84",
    "name": "Mind map AI",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://whimsical.com/ai/ai-mind-maps",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/whimsical-com.png",
    "category": "multimedia",
    "pricing": "freemium",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 128
  },
  {
    "id": "85",
    "name": "GitMind",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://gitmind.com/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/gitmind-com.png",
    "category": "teks",
    "pricing": "berbayar",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 129
  },
  {
    "id": "86",
    "name": "Writefull X",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://x.writefull.com/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/x-writefull-com.png",
    "category": "musik",
    "pricing": "gratis",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 130
  },
  {
    "id": "87",
    "name": "Speedwrite",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://speedwrite.com/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/speedwrite-com.png",
    "category": "multimedia",
    "pricing": "freemium",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 131
  },
  {
    "id": "88",
    "name": "Rytr",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://rytr.me/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/rytr-me.png",
    "category": "teks",
    "pricing": "berbayar",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 132
  },
  {
    "id": "89",
    "name": "Elicit: The AI Research Assistant",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://elicit.com/welcome",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/elicit-com.png",
    "category": "musik",
    "pricing": "gratis",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 133
  },
  {
    "id": "90",
    "name": "Paperpal",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://paperpal.com/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/paperpal-com.png",
    "category": "multimedia",
    "pricing": "freemium",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 134
  },
  {
    "id": "91",
    "name": "Scite",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://scite.ai/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/scite-ai.png",
    "category": "teks",
    "pricing": "berbayar",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 135
  },
  {
    "id": "92",
    "name": "Prompt Library",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://promptlibrary.org/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/promptlibrary-org.png",
    "category": "musik",
    "pricing": "gratis",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 136
  },
  {
    "id": "93",
    "name": "Sweet Prompt",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://sweetprompt.com/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/sweetprompt-com.png",
    "category": "multimedia",
    "pricing": "freemium",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 137
  },
  {
    "id": "94",
    "name": "PromptHero",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://prompthero.com/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/prompthero-com.png",
    "category": "teks",
    "pricing": "berbayar",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 138
  },
  {
    "id": "95",
    "name": "PromptBase",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://promptbase.com/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/promptbase-com.png",
    "category": "musik",
    "pricing": "gratis",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 139
  },
  {
    "id": "96",
    "name": "PromptPal",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "link": "https://www.promptpal.net/",
    "imageUrl": "https://raw.githubusercontent.com/tamawithai/ai-portal-project/main/thumbnails/www-promptpal-net.png",
    "category": "multimedia",
    "pricing": "freemium",
    "tags": [
      "text",
      "animasi",
      "video"
    ],
    "popularityScore": 140
  }
];