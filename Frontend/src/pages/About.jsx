import React, { useState } from 'react';
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
  Sparkles,
  ChevronRight,
  Star,
  Clock,
  CheckCircle,
  User,
  MapPin,
  Phone,
  Mail,
  ArrowUpRight
} from 'lucide-react';

const About = () => {
  const [hoveredExpert, setHoveredExpert] = useState(null);

  const coreValues = [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Complete Confidentiality",
      description: "Your privacy is our top priority with end-to-end encrypted sessions.",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Holistic Approach",
      description: "Integrated support across all aspects of your life journey.",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Evidence-Based Methods",
      description: "Science-backed techniques for measurable results.",
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Results-Driven",
      description: "Clear milestones and progress tracking.",
      color: "from-rose-500 to-rose-600",
      bgColor: "bg-rose-50"
    }
  ];

  const experts = [
    {
      name: "Dr. Sarah Jenkins",
      role: "Relationship Counselor",
      specialty: "Couples & Family Therapy",
      experience: "15+ years",
      bio: "Specializes in Gottman Method for relationship repair and emotional connection.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400",
      color: "from-rose-500 to-pink-600"
    },
    {
      name: "Marcus Thorne",
      role: "Mental Health Specialist",
      specialty: "CBT & Mindfulness",
      experience: "12+ years",
      bio: "Helps manage burnout and anxiety through evidence-based techniques.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400",
      color: "from-teal-500 to-emerald-600"
    },
    {
      name: "Elena Rodriguez",
      role: "Career Strategist",
      specialty: "Leadership & Transitions",
      experience: "18+ years",
      bio: "Former Fortune 500 HR Director guiding professionals to C-suite roles.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400",
      color: "from-blue-500 to-indigo-600"
    },
    {
      name: "Dr. Alistair Cook",
      role: "Educational Consultant",
      specialty: "University Admissions",
      experience: "14+ years",
      bio: "Specializes in Ivy League admissions and strategic profile building.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400",
      color: "from-amber-500 to-orange-600"
    },
    {
      name: "Jessica Wu",
      role: "Youth Counselor",
      specialty: "Child & Adolescent",
      experience: "10+ years",
      bio: "Focuses on developmental psychology and academic resilience.",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0ad2f01?auto=format&fit=crop&w=400",
      color: "from-purple-500 to-violet-600"
    },
    {
      name: "David Sterling",
      role: "Life Transition Coach",
      specialty: "Purpose & Reinvention",
      experience: "16+ years",
      bio: "Assists individuals navigating major life changes and finding new direction.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400",
      color: "from-cyan-500 to-sky-600"
    }
  ];

  const stats = [
    { value: "12,000+", label: "Monthly Sessions", icon: <MessageCircle className="w-6 h-6" /> },
    { value: "98.4%", label: "Success Rate", icon: <Star className="w-6 h-6" /> },
    { value: "45+", label: "Certified Experts", icon: <Users className="w-6 h-6" /> },
    { value: "15", label: "Global Centers", icon: <Globe className="w-6 h-6" /> }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery Call",
      description: "Free 15-minute consultation to understand your needs",
      icon: <Phone className="w-6 h-6" />
    },
    {
      step: "02",
      title: "Expert Matching",
      description: "Personalized pairing with the right specialist",
      icon: <User className="w-6 h-6" />
    },
    {
      step: "03",
      title: "Strategy Session",
      description: "Deep-dive assessment and plan creation",
      icon: <Target className="w-6 h-6" />
    },
    {
      step: "04",
      title: "Growth Journey",
      description: "Ongoing support and progress tracking",
      icon: <Sparkles className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
 

      {/* Hero Section */}
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 text-sm font-medium mb-8 border border-blue-100"
            >
              <Globe className="w-4 h-4" />
              <span>Est. 2012 • 20,000+ Success Stories</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
            >
              Guiding Your Journey to
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Personal Excellence
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
            >
              We provide integrated counseling solutions across relationships, mental health, career, and education. 
              Our multidisciplinary team works together to support your complete growth journey.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <span className="text-blue-600 font-semibold mb-2 block">Our Philosophy</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Integrated Growth Model
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Unlike traditional siloed counseling, our experts collaborate across disciplines. 
                  When career stress affects relationships, your career advisor and relationship counselor 
                  work together for a unified solution.
                </p>
              </motion.div>

              <div className="space-y-6">
                {coreValues.map((value, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all"
                  >
                    <div className={`w-12 h-12 rounded-xl ${value.bgColor} flex items-center justify-center flex-shrink-0`}>
                      <div className={`bg-gradient-to-br ${value.color} rounded-lg p-2 text-white`}>
                        {value.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{value.title}</h3>
                      <p className="text-gray-600 text-sm">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                    alt="Team Collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-blue-600 to-purple-600 text-white p-8 rounded-2xl shadow-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <Award className="w-8 h-8" />
                    <div>
                      <p className="text-2xl font-bold">12+</p>
                      <p className="text-blue-100 text-sm">International Awards</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experts Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-blue-600 font-semibold mb-2 block">Our Team</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Meet Our Specialists
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Certified experts with decades of combined experience across all counseling disciplines.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experts.map((expert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onMouseEnter={() => setHoveredExpert(idx)}
                onMouseLeave={() => setHoveredExpert(null)}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-100">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={expert.image} 
                      alt={expert.name}
                      className={`w-full h-full object-cover transition-transform duration-500 ${
                        hoveredExpert === idx ? 'scale-110' : 'scale-100'
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <div className={`px-3 py-1 bg-gradient-to-br ${expert.color} text-white rounded-full text-xs font-medium`}>
                        {expert.specialty}
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <div className="text-white">
                        <h3 className="text-xl font-bold">{expert.name}</h3>
                        <p className="text-sm opacity-90">{expert.role}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-500">{expert.experience} experience</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-6">{expert.bio}</p>
                    
                    <Link to="/contact">
                      <button className="w-full bg-gray-50 hover:bg-gray-100 text-gray-700 px-4 py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2 group-hover:bg-blue-50 group-hover:text-blue-600">
                        Book Consultation
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-blue-600 font-semibold mb-2 block">How It Works</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Simple 4-Step Process
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                We've streamlined the counseling journey to make growth accessible and effective.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 text-center h-full border border-gray-100">
                  <div className="text-3xl font-bold text-gray-300 mb-4">{step.step}</div>
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white">
                    {step.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
                
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <ChevronRight className="w-6 h-6 text-gray-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl p-8 md:p-12 text-center text-white overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            
            <div className="relative z-10">
              <Sparkles className="w-12 h-12 mx-auto mb-6 text-yellow-300" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Start Your Transformation Today
              </h2>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
                Join thousands who have found clarity, purpose, and growth through personalized counseling.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all flex items-center gap-2 shadow-lg">
                    <MessageCircle className="w-5 h-5" />
                    Free Consultation
                  </button>
                </Link>
                <Link to="/services">
                  <button className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition-colors">
                    View Services
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">CounselHub</span>
            </div>
            <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
              Certified counseling services across relationships, mental health, career, and education.
            </p>
            <p className="text-gray-500 text-sm">
              © 2024 CounselHub. All rights reserved. HIPAA compliant and confidential.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;