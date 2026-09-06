import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import RoyalAgent from './components/RoyalAgent';

// Lazy-load all pages for performance
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const AcademicsPage = lazy(() => import('./pages/AcademicsPage'));
const CurriculumPage = lazy(() => import('./pages/CurriculumPage'));
const RoyalJuniorsPage = lazy(() => import('./pages/RoyalJuniorsPage'));
const RoyalGemsPage = lazy(() => import('./pages/RoyalGemsPage'));
const RoyalNovaPage = lazy(() => import('./pages/RoyalNovaPage'));
const TechnologyAIPage = lazy(() => import('./pages/TechnologyAIPage'));
const FaithValuesPage = lazy(() => import('./pages/FaithValuesPage'));
const LearningMethodPage = lazy(() => import('./pages/LearningMethodPage'));
const HowItWorksPage = lazy(() => import('./pages/HowItWorksPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const EnrolPage = lazy(() => import('./pages/EnrolPage'));
const FreeAssessmentPage = lazy(() => import('./pages/FreeAssessmentPage'));
const FreeDemoPage = lazy(() => import('./pages/FreeDemoPage'));
const QueryPage = lazy(() => import('./pages/QueryPage'));
const NovaQueryPage = lazy(() => import('./pages/NovaQueryPage'));
const TeachersPage = lazy(() => import('./pages/TeachersPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-4 border-teal-200 border-t-teal-600 rounded-full animate-spin" />
        <p className="text-navy-600 font-medium">Loading...</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/academics" element={<AcademicsPage />} />
            <Route path="/curriculum" element={<CurriculumPage />} />
            <Route path="/royal-juniors" element={<RoyalJuniorsPage />} />
            <Route path="/royal-gems" element={<RoyalGemsPage />} />
            <Route path="/royal-nova" element={<RoyalNovaPage />} />
            <Route path="/technology-ai" element={<TechnologyAIPage />} />
            <Route path="/faith-values" element={<FaithValuesPage />} />
            <Route path="/learning-method" element={<LearningMethodPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/enrol" element={<EnrolPage />} />
            <Route path="/free-assessment" element={<FreeAssessmentPage />} />
            <Route path="/free-demo" element={<FreeDemoPage />} />
            <Route path="/query" element={<QueryPage />} />
            <Route path="/royal-nova/query" element={<NovaQueryPage />} />
            <Route path="/teachers" element={<TeachersPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <RoyalAgent />
    </div>
  );
}
