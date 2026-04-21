import { motion } from 'framer-motion';
import { HeadphonesIcon, ShieldCheck, MousePointerClick, Sparkles } from 'lucide-react';
import { useLang } from '../i18n/LangContext';

const icons = [HeadphonesIcon, ShieldCheck, MousePointerClick, Sparkles];

export default function WhyUs() {
  const { t } = useLang();
  return (
    <section className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider bg-primary-50 dark:bg-primary-900/30 px-3 py-1.5 rounded-full border border-primary-100 dark:border-primary-800 mb-4">
              {t.whyUs.sectionLabel}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">
              {t.whyUs.headline}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-10">
              {t.whyUs.subheadline}
            </p>

            {/* Decorative map hint */}
            <div className="relative h-48 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-linear-to-br from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/10 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl font-extrabold bg-linear-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent mb-1">🇲🇦</div>
                <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">Fait au Maroc, pour le Maroc</div>
              </div>
              {/* dots */}
              {['top-6 left-8', 'bottom-6 right-10', 'top-1/2 right-6', 'bottom-8 left-16'].map((pos, i) => (
                <div key={i} className={`absolute ${pos} w-2 h-2 rounded-full bg-primary-400 opacity-60`} />
              ))}
            </div>
          </motion.div>

          {/* Right grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {t.whyUs.list.map((item, i) => {
              const Icon = icons[i];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5 hover:shadow-md transition-all"
                >
                  <div className="inline-flex p-2.5 rounded-xl bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
