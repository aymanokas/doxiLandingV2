import { motion } from 'framer-motion';
import { useLang } from '../i18n/LangContext';

export default function Steps() {
  const { t } = useLang();
  return (
    <section id="steps" className="py-24 sm:py-32 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider bg-primary-50 dark:bg-primary-900/30 px-3 py-1.5 rounded-full border border-primary-100 dark:border-primary-800 mb-4">
            {t.steps.sectionLabel}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">
            {t.steps.headline}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{t.steps.subheadline}</p>
        </motion.div>

        <div className="relative">
          {/* connector line */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-linear-to-r from-primary-100 via-primary-300 to-primary-100 dark:from-primary-900 dark:via-primary-700 dark:to-primary-900" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.steps.list.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative text-center"
              >
                {/* Number bubble */}
                <div className="relative inline-flex w-20 h-20 rounded-2xl bg-white dark:bg-gray-900 border-2 border-primary-200 dark:border-primary-800 items-center justify-center mb-5 shadow-md shadow-primary-100 dark:shadow-primary-900/30 mx-auto">
                  <span className="text-2xl font-extrabold bg-linear-to-br from-primary-600 to-accent-500 bg-clip-text text-transparent">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
