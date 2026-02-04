
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Heart,
  Brain,
  Briefcase,
  GraduationCap,
  ShieldCheck,
  ArrowRight,
  Target,
  Users,
  Award,
  Calendar,
  MessageCircle,
  Globe,
  Sparkles
} from 'lucide-react';

const About = () => {
  const coreValues = [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Radical Confidentiality",
      description: "We uphold the highest ethical standards of privacy and data security in every interaction.",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Holistic Synergy",
      description: "Our experts collaborate across disciplines to provide a 360-degree support system for your life.",
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Evidence-Based",
      description: "Every counseling framework we use is backed by peer-reviewed psychological and strategic research.",
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Result Oriented",
      description: "We don't just talk; we set measurable milestones to ensure tangible progress in your journey.",
      color: "bg-rose-50 text-rose-600"
    }
  ];

  const experts = [
    {
      name: "Dr. Sarah Jenkins",
      role: "Lead Relationship Counselor",
      specialty: "Couples Therapy & Family Dynamics",
      bio: "With over 15 years of experience in clinical psychology, Dr. Sarah specializes in the Gottman Method for relationship repair and emotional reconnection.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400",
      icon: <Heart className="w-4 h-4" />
    },
    {
      name: "Marcus Thorne",
      role: "Mental Well-being Specialist",
      specialty: "CBT & Mindfulness-Based Stress Reduction",
      bio: "Marcus helps high-performance individuals manage burnout and anxiety through a blend of cognitive behavioral therapy and ancient mindfulness practices.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400",
      icon: <Brain className="w-4 h-4" />
    },
    {
      name: "Elena Rodriguez",
      role: "Executive Career Strategic Advisor",
      specialty: "Leadership Transitions & Corporate Strategy",
      bio: "Former Fortune 500 HR Director, Elena provides data-driven career roadmaps for professionals seeking to break into C-suite leadership roles.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400",
      icon: <Briefcase className="w-4 h-4" />
    },
    {
      name: "Dr. Alistair Cook",
      role: "Senior Educational Consultant",
      specialty: "Ivy League Admissions & Pedagogy",
      bio: "Alistair specializes in holistic student development, helping candidates secure placements at top-tier global universities through strategic profile building.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400",
      icon: <GraduationCap className="w-4 h-4" />
    },
    {
      name: "Jessica Wu",
      role: "Child & Adolescent Counselor",
      specialty: "Developmental Psychology",
      bio: "Jessica focuses on the intersection of mental health and education for younger age groups, ensuring emotional resilience in academic environments.",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0ad2f01?auto=format&fit=crop&w=400",
      icon: <Users className="w-4 h-4" />
    },
    {
      name: "David Sterling",
      role: "Life Transition Coach",
      specialty: "Personal Reinvention & Purpose Discovery",
      bio: "David assists individuals navigating major life shifts—such as career changes or retirement—to find renewed purpose and strategic direction.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400",
      icon: <Sparkles className="w-4 h-4" />
    }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-900">
      {/* Introduction Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-slate-50">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 text-sm font-bold mb-6"
            >
              <Globe className="w-4 h-4" />
              <span>Founded in 2012 • 20,000+ Success Stories</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-8 leading-tight tracking-tight text-slate-900"
            >
              We Help You Navigate the <br />
              <span className="text-indigo-600">Complexities of Modern Life.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 leading-relaxed"
            >
              CounselHub was established with a singular vision: to bridge the gap between human potential and
              specialized expertise. We believe that true growth happens at the intersection of healthy
              relationships, mental resilience, strategic careers, and continuous education.
            </motion.p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-600/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
      </section>

      {/* Philosophy Section */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Multi-Disciplinary <br />Philosophy</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Traditional counseling often operates in silos. A career advisor rarely speaks to a mental health specialist.
              At CounselHub, we've pioneered the **Integrated Growth Model**. Our specialists across Relationship,
              Mental Health, Career, and Education work as a single, unified team.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {coreValues.map((value, idx) => (
                <div key={idx} className="p-6 rounded-2xl border border-slate-100 hover:border-indigo-100 transition-colors bg-white shadow-sm">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${value.color}`}>
                    {value.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-[60px] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800"
                alt="Our Team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-indigo-600 text-white p-10 rounded-[40px] shadow-xl hidden md:block">
              <Award className="w-10 h-10 mb-4" />
              <p className="text-3xl font-bold">12+</p>
              <p className="text-indigo-100 text-sm">International <br />Excellence Awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Meet the Specialists</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Our counselors are more than just advisors; they are world-class practitioners with decades of collective experience in their respective fields.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {experts.map((expert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-[32px] overflow-hidden shadow-md hover:shadow-xl transition-all border border-slate-100 group"
              >
                <div className="h-64 overflow-hidden relative">
                  <img src={expert.image} alt={expert.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold flex items-center gap-2 shadow-sm">
                    {expert.icon}
                    <span>{expert.specialty}</span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">{expert.name}</h3>
                  <p className="text-indigo-600 font-semibold text-sm mb-4 uppercase tracking-wider">{expert.role}</p>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8">
                    {expert.bio}
                  </p>
                  <Link to="/contact">
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-indigo-600/20 transition-all flex items-center gap-2">
                      Book session <ArrowRight className="w-5 h-5" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          <div>
            <div className="text-5xl font-bold text-indigo-600 mb-2">12k+</div>
            <p className="text-slate-500 font-medium">Monthly Consultations</p>
          </div>
          <div>
            <div className="text-5xl font-bold text-indigo-600 mb-2">98.4%</div>
            <p className="text-slate-500 font-medium">Client Success Rate</p>
          </div>
          <div>
            <div className="text-5xl font-bold text-indigo-600 mb-2">45+</div>
            <p className="text-slate-500 font-medium">Expert Clinicians</p>
          </div>
          <div>
            <div className="text-5xl font-bold text-indigo-600 mb-2">15</div>
            <p className="text-slate-500 font-medium">Global Locations</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Your Journey of Evolution <br />Starts with One Call.</h2>
            <p className="text-indigo-200 text-xl max-w-2xl mx-auto mb-12">
              Join thousands who have already reclaimed their mental clarity, relationship harmony, and career direction.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/contact">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-xl shadow-indigo-600/20 transition-all flex items-center justify-center gap-2">
                  <MessageCircle className="w-6 h-6" />
                  Talk to a Consultant
                </button>
              </Link>

            </div>
          </motion.div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #4f46e5 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </section>

      {/* Footer Disclaimer */}
      <footer className="py-12 border-t border-slate-100 container mx-auto px-6 text-center text-slate-400 text-sm">
        CounselHub International Ltd. is a registered educational and wellness organization. <br />
        All sessions are conducted under strictly confidential and HIPAA-compliant environments.
      </footer>
    </div>
  );
};

export default About;