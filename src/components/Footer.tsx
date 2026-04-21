import { Globe, ExternalLink, Share2, Link2, Stethoscope } from 'lucide-react';
import { useLang } from '../i18n/LangContext';
import { useTheme } from '../context/ThemeContext';

export default function Footer() {
  const { t, lang, setLang } = useLang();
  const { dark, toggle } = useTheme();

  const columns = [
    { title: t.footer.product, links: t.footer.productLinks },
    { title: t.footer.resources, links: t.footer.resourceLinks },
    { title: t.footer.company, links: t.footer.companyLinks },
    { title: t.footer.legal, links: t.footer.legalLinks },
  ];

  return (
    <footer className="bg-gray-950 text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand col */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl bg-primary-600 flex items-center justify-center">
                <Stethoscope className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">doxi</span>
            </a>
            <p className="text-sm leading-relaxed mb-5">{t.footer.tagline}</p>
            <div className="flex items-center gap-3">
              {[Globe, ExternalLink, Share2, Link2].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-primary-600 flex items-center justify-center text-gray-400 hover:text-white transition-all"
                  aria-label="Social media"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map(col => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-white mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-sm hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">{t.footer.copyright}</p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
              className="text-xs font-semibold border border-gray-700 rounded-lg px-2.5 py-1.5 hover:border-primary-600 hover:text-white transition-all"
            >
              {lang === 'fr' ? '🇬🇧 English' : '🇫🇷 Français'}
            </button>
            <button
              onClick={toggle}
              className="text-xs font-semibold border border-gray-700 rounded-lg px-2.5 py-1.5 hover:border-primary-600 hover:text-white transition-all"
            >
              {dark ? '☀️ Clair' : '🌙 Sombre'}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
