import { motion } from 'framer-motion';
import { ArrowRight, Play, Calendar, Users, FileText, Clock, Wifi, WifiOff, ChevronRight, LayoutDashboard, FolderOpen, ClipboardList, Receipt, Settings } from 'lucide-react';
import { useLang } from '../i18n/LangContext';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

function DesktopAppMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
      className="relative"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-primary-600/15 blur-3xl rounded-3xl scale-95 pointer-events-none" />

      {/* Desktop app window */}
      <div className="relative bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-2xl shadow-gray-900/30 overflow-hidden border border-gray-200 dark:border-gray-700">

        {/* ── Title bar (macOS style) ── */}
        <div className="flex items-center px-4 h-10 bg-gray-200/80 dark:bg-gray-900 border-b border-gray-300/60 dark:border-gray-700 select-none">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400 hover:bg-red-500 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-yellow-400 hover:bg-yellow-500 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-green-400 hover:bg-green-500 transition-colors" />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1.5">
            <img src="/doxilogo.png" alt="Doxi" className="h-3.5 w-auto" />
            <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">Doxi — Cabinet Dr. Benali</span>
          </div>
        </div>

        {/* ── App body ── */}
        <div className="flex h-[340px]">

          {/* Sidebar */}
          <div className="w-14 bg-primary-700 dark:bg-primary-900 flex flex-col items-center py-3 gap-1 shrink-0">
            {[
              { Icon: LayoutDashboard, active: true, label: 'Tableau de bord' },
              { Icon: Users, active: false, label: 'Patients' },
              { Icon: Calendar, active: false, label: 'Agenda' },
              { Icon: Clock, active: false, label: 'Salle d\'attente' },
              { Icon: FolderOpen, active: false, label: 'Dossiers' },
              { Icon: ClipboardList, active: false, label: 'Ordonnances' },
              { Icon: Receipt, active: false, label: 'Facturation' },
            ].map(({ Icon, active, label }) => (
              <div
                key={label}
                title={label}
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all cursor-pointer ${
                  active
                    ? 'bg-white/20 text-white'
                    : 'text-primary-200 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Icon className="w-4.5 h-4.5" />
              </div>
            ))}
            {/* Spacer + settings at bottom */}
            <div className="flex-1" />
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-primary-300 hover:bg-white/10 hover:text-white cursor-pointer">
              <Settings className="w-4.5 h-4.5" />
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 bg-white dark:bg-gray-900 overflow-hidden flex flex-col">
            {/* Top bar */}
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-100 dark:border-gray-800">
              <div>
                <div className="text-sm font-bold text-gray-900 dark:text-white">Tableau de bord</div>
                <div className="text-xs text-gray-400">Lundi 21 Avril 2026</div>
              </div>
              <div className="flex items-center gap-2">
                {/* Offline badge */}
                <div className="flex items-center gap-1 bg-accent-50 dark:bg-accent-900/20 text-accent-600 dark:text-accent-400 text-xs font-semibold px-2 py-1 rounded-lg border border-accent-200 dark:border-accent-800">
                  <WifiOff className="w-3 h-3" />
                  Hors ligne
                </div>
                <div className="w-7 h-7 rounded-full bg-primary-600 flex items-center justify-center text-white text-xs font-bold">B</div>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-2.5 p-3">
              {[
                { icon: Calendar, label: 'Consultations', value: '18', sub: 'aujourd\'hui', color: 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30' },
                { icon: Clock, label: 'En attente', value: '5', sub: 'salle d\'attente', color: 'text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20' },
                { icon: Users, label: 'Patients', value: '1 847', sub: 'dans la base', color: 'text-accent-600 dark:text-accent-400 bg-accent-50 dark:bg-accent-900/20' },
              ].map(({ icon: Icon, label, value, sub, color }) => (
                <div key={label} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-2.5">
                  <div className={`inline-flex p-1 rounded-lg ${color} mb-1.5`}>
                    <Icon className="w-3 h-3" />
                  </div>
                  <div className="text-base font-extrabold text-gray-900 dark:text-white leading-none">{value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-tight">{label}</div>
                  <div className="text-xs text-gray-400 dark:text-gray-600">{sub}</div>
                </div>
              ))}
            </div>

            {/* Patient queue — Salle d'attente */}
            <div className="flex-1 px-3 pb-3 overflow-hidden">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Salle d'attente</span>
                <span className="text-xs text-primary-600 dark:text-primary-400 font-medium flex items-center gap-0.5">Voir tout <ChevronRight className="w-3 h-3" /></span>
              </div>
              <div className="space-y-1.5">
                {[
                  { num: 1, name: 'Mme. Laila Chraibi', age: '34 ans', wait: '8 min', status: 'En cours', statusColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', hasFile: true },
                  { num: 2, name: 'M. Omar Fassi', age: '52 ans', wait: '15 min', status: 'En attente', statusColor: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400', hasFile: false },
                  { num: 3, name: 'Mme. Samira Nouri', age: '28 ans', wait: '22 min', status: 'En attente', statusColor: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400', hasFile: true },
                  { num: 4, name: 'M. Karim Idrissi', age: '67 ans', wait: '—', status: 'Urgent', statusColor: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', hasFile: true },
                ].map(({ num, name, age, wait, status, statusColor, hasFile }) => (
                  <div key={name} className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-colors">
                    <div className="w-5 h-5 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs font-bold text-gray-500 dark:text-gray-400 shrink-0">{num}</div>
                    <div className="w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center shrink-0">
                      <span className="text-xs font-bold text-primary-600 dark:text-primary-400">{name[5]}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-semibold text-gray-900 dark:text-white truncate">{name}</div>
                      <div className="text-xs text-gray-400">{age} · {wait !== '—' ? `${wait} d'attente` : 'Pas de RDV'}</div>
                    </div>
                    {hasFile && <FileText className="w-3 h-3 text-gray-300 dark:text-gray-600 shrink-0" />}
                    <span className={`text-xs font-medium px-1.5 py-0.5 rounded-md shrink-0 ${statusColor}`}>{status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating: offline sync badge */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute -right-5 top-20 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl p-3 flex items-center gap-2.5"
      >
        <div className="w-8 h-8 rounded-xl bg-accent-100 dark:bg-accent-900/40 flex items-center justify-center shrink-0">
          <Wifi className="w-4 h-4 text-accent-500" />
        </div>
        <div>
          <div className="text-xs font-semibold text-gray-900 dark:text-white whitespace-nowrap">Fonctionne hors ligne</div>
          <div className="text-xs text-gray-400">Synchronisation auto</div>
        </div>
      </motion.div>

      {/* Floating: secretary message */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute -left-5 bottom-20 bg-primary-600 rounded-2xl shadow-xl px-3.5 py-2.5 flex items-center gap-2 text-white w-56"
      >
        <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold shrink-0">S</div>
        <div className="min-w-0">
          <div className="text-xs font-semibold">Secrétaire Salma</div>
          <div className="text-xs text-primary-200 leading-snug">Patient Fassi arrive dans 5 min</div>
        </div>
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

          {/* Right — desktop app mockup */}
          <div className="hidden lg:block">
            <DesktopAppMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
