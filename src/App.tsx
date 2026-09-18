import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import RoyalAgent from './components/RoyalAgent';

// Lazy-load all pages for high performance
const HomePage = lazy(() => import('./pages/HomePage'));
const WhyRESPage = lazy(() => import('./pages/WhyRESPage'));
const ProgramsPage = lazy(() => import('./pages/ProgramsPage'));
const CurriculumPage = lazy(() => import('./pages/CurriculumPage'));
const LearningMethodPage = lazy(() => import('./pages/LearningMethodPage'));
const TechnologyAIPage = lazy(() => import('./pages/TechnologyAIPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const HowItWorksPage = lazy(() => import('./pages/HowItWorksPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const EnrolPage = lazy(() => import('./pages/EnrolPage'));
const QueryPage = lazy(() => import('./pages/QueryPage'));

// Individual Pathway Pages
const RoyalJuniorsPage = lazy(() => import('./pages/RoyalJuniorsPage'));
const RoyalGemsPage = lazy(() => import('./pages/RoyalGemsPage'));
const RoyalNovaPage = lazy(() => import('./pages/RoyalNovaPage'));
const NovaQueryPage = lazy(() => import('./pages/NovaQueryPage'));

// Supplementary Pages
const OfferingsPage = lazy(() => import('./pages/OfferingsPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const AcademicsPage = lazy(() => import('./pages/AcademicsPage'));
const FaithValuesPage = lazy(() => import('./pages/FaithValuesPage'));
const PartnersPage = lazy(() => import('./pages/PartnersPage'));
const PersonalizedLearningPage = lazy(() => import('./pages/PersonalizedLearningPage'));
const TeachersPage = lazy(() => import('./pages/TeachersPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));

// Assessment & Demo Pages
const FreeAssessmentPage = lazy(() => import('./pages/FreeAssessmentPage'));
const FreeDemoPage = lazy(() => import('./pages/FreeDemoPage'));

// Legal Pages
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));

// Legacy pages (kept for backward compatibility)
const FeesPage = lazy(() => import('./pages/FeesPage'));
const AdmissionsPage = lazy(() => import('./pages/AdmissionsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ApplyPage = lazy(() => import('./pages/ApplyPage'));

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh] bg-ivory-50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-3 border-champagne-200 border-t-champagne-500 rounded-full animate-spin" />
        <p className="text-ink-700 font-semibold text-xs tracking-widest uppercase">Loading Royal Education System...</p>
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
            {/* PRD v2.0 Primary Navigation Routes (Section 19) */}
            <Route path="/" element={<HomePage />} />
            <Route path="/why-res" element={<WhyRESPage />} />
            <Route path="/programmes" element={<ProgramsPage />} />
            <Route path="/curriculum" element={<CurriculumPage />} />
            <Route path="/learning-method" element={<LearningMethodPage />} />
            <Route path="/technology-ai" element={<TechnologyAIPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/enrol" element={<EnrolPage />} />
            <Route path="/query" element={<QueryPage />} />

            {/* Individual Pathway Routes */}
            <Route path="/royal-juniors" element={<RoyalJuniorsPage />} />
            <Route path="/royal-gems" element={<RoyalGemsPage />} />
            <Route path="/royal-nova" element={<RoyalNovaPage />} />
            <Route path="/royal-nova/query" element={<NovaQueryPage />} />

            {/* Supplementary Content Pages */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/academics" element={<AcademicsPage />} />
            <Route path="/faith-values" element={<FaithValuesPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/personalized-learning" element={<PersonalizedLearningPage />} />
            <Route path="/teachers" element={<TeachersPage />} />
            <Route path="/faq" element={<FAQPage />} />

            {/* Assessment & Demo Routes */}
            <Route path="/free-assessment" element={<FreeAssessmentPage />} />
            <Route path="/assessment" element={<FreeAssessmentPage />} />
            <Route path="/free-demo" element={<FreeDemoPage />} />
            <Route path="/demo" element={<FreeDemoPage />} />

            {/* Standalone Learning Offerings & Opportunity Pathways */}
            <Route path="/offerings" element={<OfferingsPage />} />
            <Route path="/learning-opportunities" element={<OfferingsPage />} />
            <Route path="/masterclasses" element={<OfferingsPage />} />
            <Route path="/workshops" element={<OfferingsPage />} />
            <Route path="/trainings" element={<OfferingsPage />} />
            <Route path="/opportunities" element={<OfferingsPage />} />

            {/* Backward Compatibility Aliases */}
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/fees" element={<FeesPage />} />
            <Route path="/admissions" element={<AdmissionsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/apply" element={<ApplyPage />} />

            {/* Legal */}
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/privacy-policy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <RoyalAgent />
    </div>
  );
}
