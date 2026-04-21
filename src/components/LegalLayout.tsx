import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

interface Props {
  title: string;
  subtitle?: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalLayout({ title, subtitle, lastUpdated, children }: Props) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      <Navbar />
      <main className="pt-28 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors mb-10 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Retour à l'accueil
          </Link>

          {/* Header */}
          <div className="mb-10 pb-8 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider bg-primary-50 dark:bg-primary-900/30 px-2.5 py-1 rounded-full border border-primary-100 dark:border-primary-800">
                Document légal
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight mb-3">
              {title}
            </h1>
            {subtitle && (
              <p className="text-gray-500 dark:text-gray-400 text-base">{subtitle}</p>
            )}
            <p className="text-xs text-gray-400 dark:text-gray-600 mt-4">
              Dernière mise à jour : {lastUpdated}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-gray dark:prose-invert max-w-none
            prose-headings:font-bold prose-headings:tracking-tight
            prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-gray-900 prose-h2:dark:text-white prose-h2:pb-2 prose-h2:border-b prose-h2:border-gray-100 prose-h2:dark:border-gray-800
            prose-h3:text-base prose-h3:mt-6 prose-h3:mb-2 prose-h3:text-gray-800 prose-h3:dark:text-gray-200
            prose-p:text-gray-600 prose-p:dark:text-gray-400 prose-p:leading-relaxed prose-p:text-sm
            prose-li:text-gray-600 prose-li:dark:text-gray-400 prose-li:text-sm
            prose-strong:text-gray-800 prose-strong:dark:text-gray-200
            prose-a:text-primary-600 prose-a:dark:text-primary-400 prose-a:no-underline hover:prose-a:underline
          ">
            {children}
          </div>

          {/* Footer note */}
          <div className="mt-12 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 text-xs text-gray-500 dark:text-gray-500">
            Ce document est régi par le droit marocain. Pour toute question, contactez-nous à{' '}
            <a href="mailto:contact@doxi.ma" className="text-primary-600 dark:text-primary-400 hover:underline">
              contact@doxi.ma
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
