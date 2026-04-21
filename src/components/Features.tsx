import { motion } from 'framer-motion';
import { Clock, FolderHeart, WifiOff, FileText, Users, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useLang } from '../i18n/LangContext';

const iconMap: Record<string, LucideIcon> = {
  Clock,
  FolderHeart,
  WifiOff,
  FileText,
  Users,
  Zap,
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardAnim = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Features() {
  const { t } = useLang();

  return (
    <section id="features" className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider bg-primary-50 dark:bg-primary-900/30 px-3 py-1.5 rounded-full border border-primary-100 dark:border-primary-800 mb-4">
            {t.features.sectionLabel}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">
            {t.features.headline}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {t.features.subheadline}
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {t.features.list.map((feature) => {
            const Icon = iconMap[feature.icon] ?? Clock;
            return (
              <motion.div
                key={feature.title}
                variants={cardAnim}
                className="group relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* hover gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-br from-primary-600/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                <div className="relative">
                  <div className="inline-flex p-3 rounded-xl bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-4 group-hover:bg-primary-600 group-hover:text-white dark:group-hover:bg-primary-600 transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
