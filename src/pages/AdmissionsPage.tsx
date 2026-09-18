import React from 'react';
import { motion } from 'framer-motion';
import { 
  ClipboardCheck, PlayCircle, Award, CreditCard, Rocket, 
  MessageSquare, Target, Settings, DollarSign, UserCheck, 
  CheckCircle2, ArrowRight, ShieldCheck, HeartHandshake, Compass
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const AdmissionsPage: React.FC = () => {
  useDocumentTitle('Admissions | The Royal Education System');
  const standardSteps = [
    {
      num: '01',
      title: 'Free Assessment',
      subtitle: 'Identify Knowledge & Readiness',
      desc: 'A stress-free diagnostic session to understand current academic strengths, conceptual gaps, and learning style.',
      icon: <ClipboardCheck className="w-6 h-6 text-champagne-600" />,
      cta: 'Book Assessment',
      link: '/free-assessment',
    },
    {
      num: '02',
      title: 'Free Demo Class',
      subtitle: 'Experience Our Teaching Firsthand',
      desc: 'Experience our interactive Understand → Practice → Explain → Apply → Create method before making any commitment.',
      icon: <PlayCircle className="w-6 h-6 text-champagne-600" />,
      cta: 'Book Free Demo',
      link: '/free-demo',
    },
    {
      num: '03',
      title: 'Programme Recommendation',
      subtitle: 'Tailored Learning Plan',
      desc: 'Our academic team proposes the right grade pathway (Juniors KG–4 or Gems 5–8) with schedule alignment.',
      icon: <Award className="w-6 h-6 text-champagne-600" />,
      cta: 'Explore Curriculum',
      link: '/curriculum',
    },
    {
      num: '04',
      title: 'Enrolment & Admission Fee',
      subtitle: 'Transparent Registration',
      desc: 'Complete the simple online enrolment and submit the one-time registration fee (AED 99 / ~$27). No hidden charges.',
      icon: <CreditCard className="w-6 h-6 text-champagne-600" />,
      cta: 'Enrol Now',
      link: '/enrol',
    },
    {
      num: '05',
      title: 'Onboarding & Begin Learning',
      subtitle: 'Welcome to the Royal Community',
      desc: 'Receive your portal credentials, schedule, meet your mentors, and begin your future-focused learning journey.',
      icon: <Rocket className="w-6 h-6 text-champagne-600" />,
      cta: 'Contact Admissions',
      link: '/query',
    },
  ];

  const novaSteps = [
    {
      step: '01',
      title: 'Custom Query & Goals',
      desc: 'Tell us which skills you need: AI, Python, Web Dev, high-school exam support, or personal mentorship.',
      icon: <MessageSquare className="w-5 h-5 text-champagne-400" />,
    },
    {
      step: '02',
      title: 'Goal Discussion & Assessment',
      desc: 'A personalized consultation to review your existing proficiency and specific targets.',
      icon: <Target className="w-5 h-5 text-champagne-400" />,
    },
    {
      step: '03',
      title: 'Custom Curriculum Design',
      desc: 'A flexible, targeted curriculum crafted specifically for your timeline and career or academic goals.',
      icon: <Settings className="w-5 h-5 text-champagne-400" />,
    },
    {
      step: '04',
      title: 'Personalized Fee Quote',
      desc: 'Transparent pricing reflecting only the specific modules you choose—no bulk tuition bundles.',
      icon: <DollarSign className="w-5 h-5 text-champagne-400" />,
    },
    {
      step: '05',
      title: 'Enrolment & Flexible Learning',
      desc: 'Learn at your own pace with 1-on-1 feedback, real capstone projects, and verified certificates.',
      icon: <UserCheck className="w-5 h-5 text-champagne-400" />,
    },
  ];

  return (
    <div className="min-h-screen bg-ivory-50">
      <PageHero
        title="Admissions & How It Works"
        subtitle="A clear, transparent pathway designed to welcome every learner at their own pace."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Admissions' }]}
      />

      {/* Main Container */}
      <div className="site-container py-16 -mt-8 relative z-20">
        
        {/* Intro Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-200 mb-16 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-champagne-600 bg-champagne-50 px-3 py-1 rounded-full border border-champagne-200 inline-block mb-3">
            Two Distinct Pathways
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-ink-900 mb-3">
            Simple, Transparent Enrolment For All Learners
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Whether enrolling a young child in foundational KG–8 academics or tailoring specialized Grade 9+ skills, our admissions process is designed for clarity, zero pressure, and complete transparency.
          </p>
        </div>

        {/* 1. Standard Pathway (KG - Grade 8) */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="flex items-center justify-between mb-8 border-b border-slate-200/80 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-champagne-600 block">Foundation & Development</span>
              <h3 className="text-2xl font-extrabold font-heading text-ink-900">Standard Enrolment Flow (KG to Grade 8)</h3>
            </div>
            <Link to="/pricing" className="text-xs font-bold text-champagne-600 hover:underline hidden sm:inline-flex items-center gap-1">
              View Grade Pricing <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="space-y-4">
            {standardSteps.map((st) => (
              <motion.div
                key={st.num}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-extrabold font-heading text-champagne-600/40 shrink-0">
                    {st.num}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-champagne-50 flex items-center justify-center shrink-0">
                    {st.icon}
                  </div>
                  <div>
                    <h4 className="font-heading font-extrabold text-lg text-ink-900 mb-0.5">
                      {st.title}
                    </h4>
                    <span className="text-xs font-bold text-champagne-600 block mb-1.5">{st.subtitle}</span>
                    <p className="text-xs text-slate-600 max-w-xl leading-relaxed">{st.desc}</p>
                  </div>
                </div>
                <Link
                  to={st.link}
                  className="px-5 py-2.5 rounded-xl bg-ivory-50 hover:bg-ink-900 hover:text-white text-ink-900 font-bold text-xs transition-colors shrink-0 flex items-center gap-1.5"
                >
                  {st.cta} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. Royal Nova Pathway (Grade 9+ & Adults) */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="gradient-ink rounded-3xl p-8 sm:p-12 text-white border border-champagne-400/30 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-champagne-400/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-champagne-300 bg-white/10 px-3 py-1 rounded-full inline-block mb-3">
                Grade 9+, Young Adults & Lifelong Learners
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white mb-2">
                Royal Nova: Customized Skill Pathway Process
              </h3>
              <p className="text-xs sm:text-sm text-ivory-50/80 max-w-2xl leading-relaxed">
                You do not need to take every subject. Build only what you need: AI, Python, Web Dev, or exam reinforcement.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10 mb-10">
              {novaSteps.map((nv) => (
                <div key={nv.step} className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-extrabold text-champagne-400">Step {nv.step}</span>
                      {nv.icon}
                    </div>
                    <h5 className="font-heading font-bold text-sm text-white mb-2">{nv.title}</h5>
                    <p className="text-xs text-ivory-50/70 leading-relaxed">{nv.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
              <span className="text-xs text-ivory-50/80 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-champagne-400" /> No fixed generic packages. Custom curriculum and quote.
              </span>
              <Link
                to="/royal-nova/query"
                className="px-6 py-3.5 bg-champagne-400 hover:bg-champagne-300 text-ink-950 font-bold rounded-xl text-xs transition-colors shadow-md shadow-champagne-400/30 whitespace-nowrap"
              >
                REQUEST CUSTOM LEARNING PLAN →
              </Link>
            </div>
          </div>
        </div>

        {/* External School Learners & Pakistan Tuition Pathways */}
        <div className="max-w-5xl mx-auto mt-14 p-8 bg-white rounded-3xl border border-ink-100/15 shadow-xs">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-champagne-700 bg-champagne-50 px-3 py-1 rounded-full border border-champagne-200 inline-block mb-3">
              Alternative Educational Pathways
            </span>
            <h3 className="font-heading font-extrabold text-ink-950 text-xl sm:text-2xl">
              Not Looking for Full RES Enrolment?
            </h3>
            <p className="text-xs sm:text-sm text-ink-600 mt-2">
              If your child is already attending a physical or online school, you can still access RES academic support without enrolling in our full curriculum.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-ivory-50 rounded-2xl border border-ink-100/10 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-champagne-700 bg-white px-2.5 py-1 rounded-md border border-ink-100/10 inline-block mb-2">
                  International · Global
                </span>
                <h4 className="font-heading font-bold text-base text-ink-950 mb-1">
                  Free Academic Doubt Support
                </h4>
                <p className="text-xs text-ink-600 leading-relaxed mb-4">
                  Open to students globally (Pakistan, UAE, Saudi Arabia, UK, USA, etc.). Submit difficult school homework questions and join free peer-accessible live doubt sessions. RES does not adopt your school curriculum.
                </p>
              </div>
              <Link to="/query" className="btn-secondary text-xs text-center py-2.5">
                Submit an Academic Doubt &rarr;
              </Link>
            </div>

            <div className="p-6 bg-champagne-50/50 rounded-2xl border border-champagne-200/60 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-wine-700 bg-white px-2.5 py-1 rounded-md border border-wine-200 inline-block mb-2">
                  Pakistan Only · Paid Service
                </span>
                <h4 className="font-heading font-bold text-base text-ink-950 mb-1">
                  Paid Personal Tuition / Coaching
                </h4>
                <p className="text-xs text-ink-600 leading-relaxed mb-4">
                  Personalized coaching for Pakistani day-school students (Federal, Government, Private). Tutoring aligned to school syllabus with Urdu voice support available where helpful. From PKR 1,000/month.
                </p>
              </div>
              <Link to="/enrol" className="btn-primary text-xs text-center py-2.5">
                Enrol for Pakistan Tuition &rarr;
              </Link>
            </div>
          </div>
        </div>

      </div>

      <CTASection
        title="Ready to Begin the Learning Journey?"
        description="Every child begins with our complimentary diagnostic assessment to map learning readiness."
        primaryCTA={{ text: "Book Free Assessment", link: "/free-assessment" }}
        secondaryCTA={{ text: "Enrol Now", link: "/enrol" }}
        variant="navy"
      />
    </div>
  );
};

export default AdmissionsPage;
