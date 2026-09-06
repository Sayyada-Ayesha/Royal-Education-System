import React from 'react';
import { motion } from 'framer-motion';
import { User, BookOpen, Quote, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { teachers } from '../data/teacherData';

const TeachersPage: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-sand-50 pb-20">
      <PageHero
        title="Our Teachers"
        subtitle="Passionate Educators. Real Impact."
        breadcrumbs={[{ label: 'Our Teachers' }]}
      />

      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-6">
            Meet Our Exceptional Educators
          </h2>
          <p className="text-lg text-navy-700">
            Our educators are more than just teachers; they are mentors, facilitators, and guides dedicated to unlocking every student's potential through modern, project-based learning.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {teachers.map((teacher) => (
            <motion.div
              key={teacher.id}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Photo Placeholder */}
              <div className="h-64 bg-navy-100 flex items-center justify-center relative overflow-hidden">
                <User className="w-24 h-24 text-navy-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-1">{teacher.name}</h3>
                  <p className="text-teal-300 font-medium text-sm">{teacher.specialization}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-6">
                  <div className="flex items-start gap-3 mb-3 text-navy-700">
                    <Award className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-semibold text-navy-900 text-sm">Qualification</span>
                      <span className="text-sm">{teacher.qualification}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 mb-4 text-navy-700">
                    <BookOpen className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-semibold text-navy-900 text-sm">Experience</span>
                      <span className="text-sm">{teacher.experience}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-sm text-navy-900 mb-2 uppercase tracking-wider">Subjects</h4>
                  <div className="flex flex-wrap gap-2">
                    {teacher.subjects.map((subject, idx) => (
                      <span key={idx} className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-xs font-semibold">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-cream-50 p-4 rounded-xl border border-gray-100 relative mt-auto">
                  <Quote className="absolute top-2 left-2 w-8 h-8 text-navy-100 -z-0" />
                  <p className="text-sm text-navy-700 italic relative z-10 pl-4">
                    "{teacher.philosophy}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTAs */}
        <div className="mt-24 max-w-4xl mx-auto bg-navy-900 rounded-3xl p-8 md:p-12 text-center shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-4">Want to Join Our Team?</h2>
          <p className="text-navy-200 mb-8 max-w-2xl mx-auto">
            We are always looking for passionate educators who believe in transformative, project-based learning.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="px-8 py-4 bg-teal-500 hover:bg-teal-400 text-white font-bold rounded-lg transition-colors">
              Join Our Teaching Team
            </Link>
            <Link to="/book-assessment" className="px-8 py-4 bg-transparent border-2 border-white/20 hover:bg-white/10 text-white font-bold rounded-lg transition-colors">
              Book Free Assessment
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TeachersPage;
