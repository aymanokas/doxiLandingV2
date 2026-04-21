import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Zap } from 'lucide-react';
import { useLang } from '../i18n/LangContext';

export default function Pricing() {
  const { t } = useLang();
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider bg-primary-50 dark:bg-primary-900/30 px-3 py-1.5 rounded-full border border-primary-100 dark:border-primary-800 mb-4">
            {t.pricing.sectionLabel}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">
            {t.pricing.headline}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">{t.pricing.subheadline}</p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all cursor-pointer ${
                !annual ? 'bg-primary-600 text-white shadow-md' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              {t.pricing.monthly}
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all cursor-pointer ${
                annual ? 'bg-primary-600 text-white shadow-md' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              {t.pricing.annual}
              <span className="text-xs bg-accent-100 dark:bg-accent-900/40 text-accent-600 dark:text-accent-400 px-1.5 py-0.5 rounded-md font-semibold">
                {t.pricing.annualSave}
              </span>
            </button>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:items-stretch">
          {t.pricing.plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex flex-col rounded-2xl border p-7 transition-all ${
                plan.highlight
                  ? 'bg-primary-600 border-primary-600 shadow-2xl shadow-primary-600/30 scale-[1.02]'
                  : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-lg hover:-translate-y-1'
              }`}
            >
              {'badge' in plan && plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    <Zap className="w-3 h-3" />
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <div className={`text-sm font-semibold mb-3 ${plan.highlight ? 'text-primary-200' : 'text-gray-500 dark:text-gray-400'}`}>
                  {plan.name}
                </div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className={`text-4xl font-extrabold tracking-tight ${plan.highlight ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                    {annual ? plan.priceAnnual : plan.price}
                  </span>
                  <span className={`text-sm font-medium ${plan.highlight ? 'text-primary-200' : 'text-gray-500 dark:text-gray-400'}`}>
                    {plan.currency}{plan.period}
                  </span>
                </div>
                <p className={`text-sm leading-relaxed ${plan.highlight ? 'text-primary-200' : 'text-gray-600 dark:text-gray-400'}`}>
                  {plan.desc}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map(feature => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${plan.highlight ? 'text-accent-400' : 'text-accent-500'}`} />
                    <span className={plan.highlight ? 'text-white' : 'text-gray-700 dark:text-gray-300'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`block text-center text-sm font-semibold px-5 py-3 rounded-xl transition-all ${
                  plan.highlight
                    ? 'bg-white text-primary-600 hover:bg-primary-50 shadow-lg shadow-primary-900/20'
                    : 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-600/20'
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
