import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle2, Calendar, Users, TrendingUp } from 'lucide-react';
import { useLang } from '../i18n/LangContext';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
      className="relative"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-primary-600/20 blur-3xl rounded-3xl scale-95" />

      {/* Main card */}
      <div className="relative bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-2xl shadow-gray-900/20 overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
          <div className="ml-auto text-xs text-gray-400 font-medium">doxi.ma/dashboard</div>
        </div>

        <div className="p-5">
          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3 mb-5">
            {[
              { icon: Calendar, label: 'Rendez-vous', value: '24', sub: 'aujourd\'hui', color: 'bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400' },
              { icon: Users, label: 'Patients', value: '1 284', sub: 'total', color: 'bg-accent-100 dark:bg-accent-900/20 text-accent-600 dark:text-accent-400' },
              { icon: TrendingUp, label: 'Revenus', value: '12k', sub: 'ce mois', color: 'bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400' },
            ].map(({ icon: Icon, label, value, sub, color }) => (
              <div key={label} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-3">
                <div className={`inline-flex p-1.5 rounded-lg ${color} mb-2`}>
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <div className="text-lg font-bold text-gray-900 dark:text-white leading-none">{value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{label}</div>
                <div className="text-xs text-gray-400 dark:text-gray-600">{sub}</div>
              </div>
            ))}
          </div>

          {/* Appointment list */}
          <div className="space-y-2">
            <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">Prochains rendez-vous</div>
            {[
              { time: '09:00', name: 'Mme. Laila Chraibi', type: 'Consultation', status: 'Confirmé', color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' },
              { time: '09:30', name: 'M. Omar Fassi', type: 'Suivi', status: 'En attente', color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' },
              { time: '10:00', name: 'Mme. Samira Nouri', type: 'Téléconsultation', status: 'Confirmé', color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' },
              { time: '10:45', name: 'M. Karim Idrissi', type: 'Urgence', status: 'Urgent', color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' },
            ].map(({ time, name, type, status, color }) => (
              <div key={name} className="flex items-center gap-3 py-2 px-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-colors">
                <div className="text-xs font-mono font-semibold text-gray-400 w-10 shrink-0">{time}</div>
                <div className="w-7 h-7 rounded-full bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center shrink-0">
                  <span className="text-xs font-semibold text-primary-600 dark:text-primary-400">{name[4]}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-gray-900 dark:text-white truncate">{name}</div>
                  <div className="text-xs text-gray-400">{type}</div>
                </div>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${color}`}>{status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating notification */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute -right-4 top-16 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl p-3 flex items-center gap-3 max-w-45"
      >
        <div className="w-8 h-8 rounded-xl bg-accent-100 dark:bg-accent-900/40 flex items-center justify-center shrink-0">
          <CheckCircle2 className="w-4 h-4 text-accent-500" />
        </div>
        <div>
          <div className="text-xs font-semibold text-gray-900 dark:text-white">Ordonnance envoyée</div>
          <div className="text-xs text-gray-400">il y a 2 min</div>
        </div>
      </motion.div>

      {/* Floating stat pill */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="absolute -left-4 bottom-16 bg-primary-600 rounded-2xl shadow-xl p-3 flex items-center gap-2 text-white"
      >
        <TrendingUp className="w-4 h-4" />
        <span className="text-xs font-semibold">+18% patients ce mois</span>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const { t } = useLang();
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white dark:bg-gray-950">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/10 dark:bg-primary-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-500/10 dark:bg-accent-500/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-primary-50 dark:bg-primary-900/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — copy */}
          <div>
            {/* Badge */}
            <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500" />
              </span>
              <span className="text-sm font-semibold text-accent-600 dark:text-accent-400 bg-accent-50 dark:bg-accent-900/20 px-3 py-1 rounded-full border border-accent-200 dark:border-accent-800">
                {t.hero.badge}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.1] mb-6"
            >
              {t.hero.headline1}{' '}
              <span className="bg-linear-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                {t.hero.headline2}
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl mb-8"
            >
              {t.hero.subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 mb-12"
            >
              <a
                href="#pricing"
                className="group inline-flex items-center justify-center gap-2 bg-primary-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-primary-600/25 hover:bg-primary-700 hover:shadow-xl hover:shadow-primary-600/35 transition-all"
              >
                {t.hero.cta1}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <button className="group inline-flex items-center justify-center gap-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 font-semibold px-6 py-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary-300 hover:shadow-md transition-all">
                <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center">
                  <Play className="w-3.5 h-3.5 text-primary-600 dark:text-primary-400 ml-0.5" />
                </div>
                {t.hero.cta2}
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-8"
            >
              {[
                { value: t.hero.stat1, label: t.hero.stat1Label },
                { value: t.hero.stat2, label: t.hero.stat2Label },
                { value: t.hero.stat3, label: t.hero.stat3Label },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight">{value}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — dashboard mockup */}
          <div className="hidden lg:block">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
