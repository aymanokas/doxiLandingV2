import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { useLang } from '../i18n/LangContext';

export default function CTA() {
  const { t } = useLang();
  return (
    <section className="py-24 sm:py-32 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary-600 via-primary-700 to-primary-800 px-8 py-16 sm:px-16 text-center"
        >
          {/* Decorative blobs */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-500/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.07),transparent)]" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse" />
              {t.cta.badge}
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              {t.cta.headline}
            </h2>
            <p className="text-primary-200 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              {t.cta.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#pricing"
                className="group inline-flex items-center justify-center gap-2 bg-white text-primary-600 font-semibold px-7 py-3.5 rounded-xl shadow-xl hover:bg-primary-50 transition-all"
              >
                {t.cta.cta1}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                {t.cta.cta2}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
