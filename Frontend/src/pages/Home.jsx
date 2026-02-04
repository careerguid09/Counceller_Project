import React, { useState } from "react";
import { Link } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Brain,
  Briefcase,
  GraduationCap,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  MessageCircle,
  ShieldCheck,
  Calendar,
  ChevronRight,
  Plus,
  Minus
} from "lucide-react";

// --- Constants & Data ---

const categories = [
  {
    id: "relationship",
    title: "Relationship Counseling",
    subtitle: "Heal. Connect. Thrive.",
    icon: <Heart className="w-8 h-8" />,
    color: "from-rose-500 to-pink-600",
    bgLight: "bg-rose-50",
    description: "Expert guidance for couples, families, and individuals seeking to build deeper, healthier connections.",
    features: ["Conflict Resolution", "Pre-marital Counseling", "Family Dynamics", "Communication Skills"],
    stats: "450+ Couples Helped"
  },
  {
    id: "mental",
    title: "Mental Well-being",
    subtitle: "Find Your Inner Peace.",
    icon: <Brain className="w-8 h-8" />,
    color: "from-teal-500 to-emerald-600",
    bgLight: "bg-emerald-50",
    description: "Personalized therapeutic approaches to manage stress, anxiety, and emotional challenges.",
    features: ["Stress Management", "Anxiety & Depression", "Mindfulness Coaching", "Personal Growth"],
    stats: "98% Client Satisfaction"
  },
  {
    id: "career",
    title: "Career Guidance",
    subtitle: "Design Your Success.",
    icon: <Briefcase className="w-8 h-8" />,
    color: "from-blue-600 to-indigo-700",
    bgLight: "bg-blue-50",
    description: "Strategic planning and executive coaching to help you navigate transitions and reach your peak potential.",
    features: ["Executive Coaching", "Career Transitions", "Leadership Training", "Burnout Prevention"],
    stats: "1200+ Professionals Guided"
  },
  {
    id: "education",
    title: "Educational Guidance",
    subtitle: "Unlock Your Potential.",
    icon: <GraduationCap className="w-8 h-8" />,
    color: "from-amber-500 to-orange-600",
    bgLight: "bg-amber-50",
    description: "Holistic academic advisory for students aiming for top-tier institutions and effective learning habits.",
    features: ["College Admissions", "Study Strategies", "Subject Specialization", "Scholarship Mentoring"],
    stats: "Global University Network"
  }
];

const faqs = [
  {
    question: "How do I choose the right counselor?",
    answer: "During your initial discovery session, we assess your primary needs and personality type to match you with a specialist from our team who has the most relevant expertise."
  },
  {
    question: "Are the sessions confidential?",
    answer: "Absolutely. We adhere to strict HIPAA-compliant protocols and ethical standards. Your privacy and safety are our top priorities."
  },
  {
    question: "Do you offer online or in-person sessions?",
    answer: "We offer high-definition video consultations globally, as well as in-person sessions at our regional centers in London, New York, and Singapore."
  }
];

// --- Components ---

const CategoryCard = ({ category }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full"
  >
    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
      {category.icon}
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.title}</h3>
    <p className="text-indigo-600 font-medium mb-4">{category.subtitle}</p>
    <p className="text-gray-600 leading-relaxed mb-6 flex-grow">{category.description}</p>

    <div className="space-y-3 mb-8">
      {category.features.map((f, i) => (
        <div key={i} className="flex items-center gap-2 text-sm text-gray-500">
          <CheckCircle className="w-4 h-4 text-green-500" />
          <span>{f}</span>
        </div>
      ))}
    </div>

    <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
      <span className="text-xs font-bold uppercase tracking-wider text-gray-400">{category.stats}</span>
    
    </div>
  </motion.div>
);

const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-6">
      <button
        className="w-full flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-bold text-gray-900">{faq.question}</span>
        {isOpen ? <Minus className="text-indigo-600" /> : <Plus className="text-gray-400" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-gray-600 leading-relaxed">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0A0C10]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-indigo-300 text-sm font-medium mb-8">
                <ShieldCheck className="w-4 h-4" />
                <span>Certified Global Network of Specialists</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1]">
                Empowering Your <br />
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Complete Evolution
                </span>
              </h1>
              <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl">
                A multi-disciplinary team of expert counselors dedicated to your mental, emotional, professional, and academic growth. Holistic care, powered by science and empathy.
              </p>

              <div className="flex flex-wrap gap-5">
                {/* Start Your Journey → Contact page */}
                <Link to="/contact">
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-indigo-600/20 transition-all flex items-center gap-2">
                    Start Your Journey <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>

              </div>


              <div className="mt-16 flex items-center gap-12">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-[#0A0C10] bg-gray-800 overflow-hidden">
                      <img src={`https://i.pravatar.cc/150?u=${i + 20}`} alt="user" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-yellow-400 mb-1">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-sm text-gray-400"><span className="text-white font-bold">4.9/5</span> from 2,000+ verified sessions</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Four Pillars of Expertise
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We provide specialized support across the four most critical areas of human experience, ensuring a balanced and fulfilling life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <CategoryCard category={cat} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Focus Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.div whileHover={{ scale: 1.05 }} className="h-64 rounded-3xl overflow-hidden shadow-lg"><img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600" alt="Counselor" /></motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="h-48 rounded-3xl overflow-hidden shadow-lg bg-indigo-600 flex items-center justify-center p-8 text-white">
                  <div className="text-center">
                    <p className="text-4xl font-bold mb-2">15+</p>
                    <p className="text-sm font-medium opacity-80">Certified Specialists</p>
                  </div>
                </motion.div>
              </div>
              <div className="space-y-4 pt-12">
                <motion.div whileHover={{ scale: 1.05 }} className="h-48 rounded-3xl overflow-hidden shadow-lg bg-slate-900 flex items-center justify-center p-8 text-white">
                  <Users className="w-12 h-12 text-indigo-400" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="h-64 rounded-3xl overflow-hidden shadow-lg"><img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600" alt="Counseling" /></motion.div>
              </div>
            </div>
           
          </div>

          <div>
            <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-4 block">Our Unique Approach</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">Collective Wisdom for Individual Growth</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Unlike solo practitioners, we work as an integrated team. If your career stress is affecting your relationship, our career expert and relationship counselor collaborate to provide a unified solution.
            </p>

            <div className="space-y-6">
              {[
                { title: "Multi-Perspective Analysis", desc: "Every case is reviewed by at least two specialists to ensure objective guidance." },
                { title: "Evidence-Based Frameworks", desc: "We utilize CBT, Gottman Method, and Data-Driven Career Mapping." },
                { title: "Global Accessibility", desc: "Secure tele-health options for clients across all time zones." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <ChevronRight className="w-4 h-4 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-400">Simplifying the path to your better self.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "A free 15-minute call to understand your needs.", icon: <MessageCircle /> },
              { step: "02", title: "Matching", desc: "We pair you with the perfect specialist team.", icon: <Users /> },
              { step: "03", title: "Insight", desc: "Deep-dive sessions to uncover core challenges.", icon: <Brain /> },
              { step: "04", title: "Evolution", desc: "Actionable plans and ongoing mentorship.", icon: <Star /> }
            ].map((step, i) => (
              <div key={i} className="relative group">
                {i < 3 && <div className="hidden md:block absolute top-12 left-full w-full h-[2px] bg-gradient-to-r from-indigo-500 to-transparent z-0" />}
                <div className="relative z-10 bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all">
                  <div className="text-indigo-400 mb-6 text-3xl font-black opacity-20">{step.step}</div>
                  <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-600/20">{step.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Common Questions</h2>
        </div>
        <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-sm border border-gray-100">
          {faqs.map((faq, i) => <FAQItem key={i} faq={faq} />)}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 container mx-auto px-6">
        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-[50px] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }} />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative z-10"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Ready to start your <br />transformation?</h2>
            <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto">
              Join thousands who have already reclaimed their peace, purpose, and potential with CounselHub.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/contact">
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-indigo-600/20 transition-all flex items-center gap-2">
                    Start Your Journey <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
              
            </div>
            <p className="mt-10 text-indigo-200 text-sm font-medium">Available in 12 languages • Confidential & Secure</p>
          </motion.div>
        </div>
      </section>
            
    </div>
  );
}