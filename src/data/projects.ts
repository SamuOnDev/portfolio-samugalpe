import type { ActiveLang } from '../i18n';

export interface Project {
    id: string;
    name: string;
    type: string;
    year: string;
    tech: string[];
    // Ruta a la captura de la home (guardar las imágenes en /public/projects)
    screenshot: string;
    liveUrl?: string;
    codeUrl?: string;
    description: Record<ActiveLang, string>;
}

export const projects: Project[] = [
    {
        id: 'auris',
        name: 'Auris International',
        type: 'Web corporativa',
        year: '2025',
        tech: ['Astro', 'Tailwind', 'TypeScript'],
        screenshot: '/projects/auris-home.jpg',
        liveUrl: 'https://TU_URL_AURIS',
        codeUrl: 'https://github.com/SamuOnDev/auris-web',
        description: {
        es: 'Web corporativa para despacho de psicología, multilenguaje, formularios personalizados y despliegue en Vercel.',
        en: 'Corporate website for a psychology practice, multi-language, custom forms and deployment on Vercel.'
        }
    },
    {
        id: 'portfolio',
        name: 'Portfolio Samuel Galpe',
        type: 'Portfolio personal',
        year: '2025',
        tech: ['Astro', 'Tailwind', 'TypeScript'],
        screenshot: '/projects/portfolio-home.jpg',
        liveUrl: 'https://TU_URL_PORTFOLIO',
        codeUrl: 'https://github.com/TU_USER/portfolio-samuel-galpe',
        description: {
        es: 'Portfolio personal de Samuel Galpe para presentar proyectos web con diseño limpio y modo oscuro.',
        en: 'Personal portfolio by Samuel Galpe to showcase web projects, with a clean design and dark theme.'
        }
    }
  // Añade más proyectos aquí
];
