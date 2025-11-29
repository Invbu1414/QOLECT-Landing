export interface Experience {
    plan_id: number;
    plan_title: string;
    plan_image: string;
    plan_price: string;
    plan_url: string;
    plan_rating: string;
    categoria: string;
    descripcion: string;
    descripcioncorta: string;
    precio: number;
    precio_normal?: number;
    precio_rebajado?: number;
    is_active: boolean;
    imagen?: string;  // Fallback image property
    destino?: string; // Destination property
}

export interface News {
    idnoticia: number;
    titulo: string;
    descripcion: string;  // Changed from resumen
    imagen: string;
    autor: string;
    created_at: string;
    is_active: boolean;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://qolect-api-820237834683.us-central1.run.app';
const API_KEY = process.env.NEXT_PUBLIC_API_KEY || 'qolect-api-key-prod-2024-secure-abc123xyz';

export async function getFeaturedExperiences(lang: string = 'es'): Promise<Experience[]> {
    try {
        const res = await fetch(`${API_URL}/api/v1/mobile/planes?lang=${lang}`, {
            headers: {
                'Content-Type': 'application/json',
                'X-API-Key': API_KEY,
            },
            next: { revalidate: 3600 }
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch experiences: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        return data.items || [];
    } catch (error) {
        console.error('Error fetching experiences:', error);
        return [];
    }
}

export async function getOffers(lang: string = 'es'): Promise<Experience[]> {
    try {
        const experiences = await getFeaturedExperiences(lang);
        return experiences.filter(exp => {
            return true;
        }).slice(0, 4);
    } catch (error) {
        console.error('Error fetching offers:', error);
        return [];
    }
}

export async function getNews(lang: string = 'es'): Promise<News[]> {
    try {
        console.log('📰 Fetching news from PUBLIC API... (lang:', lang, ')');
        const res = await fetch(`${API_URL}/api/v1/mobile/noticias?lang=${lang}`, {
            headers: {
                'Content-Type': 'application/json',
                'X-API-Key': API_KEY,
            },
            next: { revalidate: 3600 }
        });

        console.log('📰 News API response status:', res.status);

        if (!res.ok) {
            console.error(`❌ Failed to fetch news: ${res.status} ${res.statusText}`);
            return [];
        }

        const data = await res.json();
        console.log('📰 News data received:', data);
        console.log('📰 News items count:', data.items?.length || 0);

        const validNews = (data.items || []).filter((item: any) => {
            const isValid = item.titulo && item.descripcion && item.idnoticia;
            if (!isValid) {
                console.log('❌ Invalid news item:', { titulo: item.titulo, descripcion: item.descripcion, idnoticia: item.idnoticia });
            }
            return isValid;
        });

        console.log('✅ Valid news items:', validNews.length);
        return validNews;
    } catch (error) {
        console.error('❌ Error fetching news:', error);
        return [];
    }
}

export async function getNewsById(id: number, lang: string = 'es'): Promise<News | null> {
    try {
        const allNews = await getNews(lang);
        const newsItem = allNews.find(item => item.idnoticia === id);
        return newsItem || null;
    } catch (error) {
        console.error('Error fetching news by ID:', error);
        return null;
    }
}
