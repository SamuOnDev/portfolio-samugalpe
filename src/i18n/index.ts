export const LANGS = ['es', 'en'] as const;
export type ActiveLang = (typeof LANGS)[number];
export const DEFAULT_LANG: ActiveLang = 'es';

import es from './es.json';
import en from './en.json';

type Dictionary = Record<string, string>;
const dictionaries: Record<ActiveLang, Dictionary> = { es, en };

export function t(lang: ActiveLang, key: string): string {
    const dict = dictionaries[lang] ?? dictionaries[DEFAULT_LANG];
    return dict[key] ?? dictionaries[DEFAULT_LANG][key] ?? key;
}

export function getAlternateLinks(current: ActiveLang, path: string) {
    return LANGS.map((l) => ({
        lang: l,
        href: `/${l}${path}`
    }));
}
