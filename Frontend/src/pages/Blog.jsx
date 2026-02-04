import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Calendar, 
  User, 
  Clock, 
  ArrowRight, 
  MessageCircle, 
  Bookmark, 
  TrendingUp,
  Heart,
  Brain,
  Briefcase,
  GraduationCap,
  ChevronRight,
  Mail,
  Tag,
  Share2,
  ThumbsUp,
  Award,
  ShieldCheck,
  Star,
  PlayCircle,
  BookOpen
} from 'lucide-react';
import { MemoryRouter } from 'react-router-dom';

const BlogContent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const experts = [
    {
      name: "Dr. Sarah Jenkins",
      role: "Relationship Specialist",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200"
    },
    {
      name: "Marcus Thorne",
      role: "CBT Specialist",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200"
    },
    {
      name: "Elena Rodriguez",
      role: "Career Strategist",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200"
    }
  ];

  const featuredPosts = [
    {
      id: 1,
      title: "Healing Relationship Trauma: The Path to Secure Attachment",
      excerpt: "Understanding the roots of relationship anxiety and how specialized therapy can help you build trust and emotional safety with your partner. Trauma isn't just about what happened; it's about how your nervous system responds to intimacy today.",
      category: "Relationships",
      categoryColor: "text-rose-600 bg-rose-50",
      readTime: "12 min read",
      date: "Jan 24, 2024",
      author: "Dr. Sarah Jenkins",
      image: "https://images.unsplash.com/photo-1516584566581-9b4121370295?auto=format&fit=crop&w=800",
      tags: ["Trauma", "Attachment", "Couples"]
    },
    {
      id: 2,
      title: "The Silent Burnout: Managing Executive Stress in 2024",
      excerpt: "High-performance roles often come with invisible costs. Learn how to identify early signs of executive burnout and implement sustainable habits that protect your mental clarity without compromising your career trajectory.",
      category: "Career",
      categoryColor: "text-indigo-600 bg-indigo-50",
      readTime: "8 min read",
      date: "Feb 02, 2024",
      author: "Marcus Thorne",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800",
      tags: ["Leadership", "Work-Life Balance", "CBT"]
    },
    {
      id: 3,
      title: "The Neurobiology of Resilience: Rewiring Your Stress Response",
      excerpt: "Science shows that our brains are plastic. We explore the latest neuroscientific breakthroughs in habit formation and how you can actually 'train' your brain to stay calm under intense pressure.",
      category: "Mental Health",
      categoryColor: "text-emerald-600 bg-emerald-50",
      readTime: "15 min read",
      date: "Feb 05, 2024",
      author: "Dr. Emily Chen",
      image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=800",
      tags: ["Neuroscience", "Mindset", "Health"]
    }
  ];

  const standardPosts = [
    {
      id: 6,
      title: "The Psychology of Career Transitions at 40",
      excerpt: "Mid-life career shifts are increasingly common. We explore the psychological barriers and the liberating potential of reinventing your identity.",
      category: "Career",
      categoryColor: "text-indigo-600 bg-indigo-50",
      readTime: "10 min read",
      date: "Feb 03, 2024",
      author: "David Sterling",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800",
      tags: ["Career Change", "Midlife"]
    },
    {
      id: 7,
      title: "Mindfulness in the Classroom: Boosting Resilience",
      excerpt: "How simple breathing techniques and presence-based learning are helping students manage exam pressure and improve retention.",
      category: "Education",
      categoryColor: "text-amber-600 bg-amber-50",
      readTime: "6 min read",
      date: "Feb 04, 2024",
      author: "Dr. Alistair Cook",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800",
      tags: ["Study Tips", "Students"]
    },
    {
      id: 8,
      title: "Constructive Conflict: Turning Arguments into Growth",
      excerpt: "Conflict is inevitable, but destruction isn't. Learn the linguistic shifts that turn blame into a shared problem-solving session.",
      category: "Relationships",
      categoryColor: "text-rose-600 bg-rose-50",
      readTime: "9 min read",
      date: "Feb 06, 2024",
      author: "Dr. Sarah Jenkins",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2959210?auto=format&fit=crop&w=800",
      tags: ["Communication", "Conflict"]
    },
    {
      id: 9,
      title: "Coping with the Loneliness Epidemic",
      excerpt: "In a hyper-connected world, deep loneliness is at an all-time high. We discuss how to foster genuine community in digital spaces.",
      category: "Mental Well-being",
      categoryColor: "text-emerald-600 bg-emerald-50",
      readTime: "11 min read",
      date: "Feb 07, 2024",
      author: "Marcus Thorne",
      image: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=800",
      tags: ["Society", "Connection"]
    },
    {
      id: 10,
      title: "Financial Therapy: The Psychology of Money",
      excerpt: "Why do we spend the way we do? Unpacking childhood 'money scripts' to heal your current relationship with finances and debt.",
      category: "Mental Health",
      categoryColor: "text-emerald-600 bg-emerald-50",
      readTime: "14 min read",
      date: "Feb 08, 2024",
      author: "Elena Rodriguez",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800",
      tags: ["Finance", "Psychology"]
    },
    {
      id: 11,
      title: "Parenting Styles and Long-term Success",
      excerpt: "Comparing authoritative, permissive, and neglectful parenting and their impact on a child's eventual career and relationship outcomes.",
      category: "Education",
      categoryColor: "text-amber-600 bg-amber-50",
      readTime: "13 min read",
      date: "Feb 09, 2024",
      author: "Jessica Wu",
      image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=800",
      tags: ["Parenting", "Development"]
    }
  ];

  const categories = [
    { name: "All", count: 126, icon: <TrendingUp className="w-4 h-4" /> },
    { name: "Mental Well-being", count: 42, icon: <Brain className="w-4 h-4" /> },
    { name: "Relationship Harmony", count: 28, icon: <Heart className="w-4 h-4" /> },
    { name: "Career Psychology", count: 35, icon: <Briefcase className="w-4 h-4" /> },
    { name: "Educational Growth", count: 19, icon: <GraduationCap className="w-4 h-4" /> },
    { name: "Holistic Health", count: 12, icon: <ShieldCheck className="w-4 h-4" /> }
  ];

  const webinars = [
    { title: "Mastering Difficult Conversations", date: "Feb 15", time: "6:00 PM EST", expert: "Dr. Sarah Jenkins" },
    { title: "Overcoming Imposter Syndrome", date: "Feb 18", time: "4:00 PM EST", expert: "Marcus Thorne" },
    { title: "Strategic College Planning", date: "Feb 22", time: "11:00 AM EST", expert: "Dr. Alistair Cook" }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-900">
      {/* Search & Hero Section */}
      <section className="relative pt-32 pb-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-indigo-600/20 backdrop-blur-md border border-indigo-500/30 text-indigo-300 text-sm font-black mb-10 tracking-[0.1em] uppercase"
            >
              <Star className="w-4 h-4 fill-current" />
              <span>Premium Resource Hub for Self-Actualization</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter leading-none"
            >
              The <span className="text-indigo-400">Evolution</span> <br />Journal
            </motion.h1>
            <p className="text-xl md:text-2xl text-slate-400 mb-12 leading-relaxed max-w-3xl mx-auto font-medium">
              A comprehensive library of human wisdom, psychological rigor, and 
              career strategic intelligence.
            </p>
            
            <div className="relative max-w-3xl mx-auto group">
              <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-400 transition-colors">
                <Search className="w-6 h-6" />
              </div>
              <input 
                type="text"
                placeholder="Search across 1,000+ expert articles..."
                className="w-full pl-16 pr-8 py-7 rounded-[40px] bg-white/10 backdrop-blur-xl border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/30 transition-all shadow-2xl text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-[30px] font-bold transition-all flex items-center gap-2">
                Discover
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Bar */}
      <div className="bg-slate-50 border-y border-slate-100 sticky top-0 z-40 overflow-x-auto">
        <div className="container mx-auto px-6 py-4 flex items-center justify-center gap-10 whitespace-nowrap">
          {categories.map((cat, i) => (
            <button 
              key={i}
              onClick={() => setActiveCategory(cat.name)}
              className={`text-sm font-bold uppercase tracking-widest transition-all pb-1 border-b-2 ${activeCategory === cat.name ? 'text-indigo-600 border-indigo-600' : 'text-slate-400 border-transparent hover:text-slate-900'}`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Layout */}
      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Main Feed */}
          <div className="lg:w-[68%]">
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Curated Masterpieces</h2>
              <p className="text-slate-500 text-lg">Our editorial team's selection of the most impactful research this month.</p>
            </div>

            <div className="space-y-32">
              {featuredPosts.map((post) => (
                <motion.article 
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative h-[550px] rounded-[64px] overflow-hidden mb-10 shadow-2xl shadow-slate-300 cursor-pointer">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/10 to-transparent" />
                    <div className="absolute bottom-12 left-12 right-12">
                      <span className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-6 inline-block ${post.categoryColor}`}>
                        {post.category}
                      </span>
                      <h3 className="text-4xl md:text-6xl font-bold text-white leading-[1.1] hover:text-indigo-300 transition-colors tracking-tighter">
                        <a href="#">{post.title}</a>
                      </h3>
                    </div>
                  </div>
                  
                  <div className="px-8">
                    <div className="flex flex-wrap items-center gap-10 text-sm text-slate-400 mb-8">
                      <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden"><img src="https://i.pravatar.cc/100" /></div> <span className="font-black text-slate-900 uppercase tracking-widest">{post.author}</span></div>
                      <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {post.date}</div>
                      <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> {post.readTime}</div>
                      <div className="flex items-center gap-2 text-indigo-600 font-bold"><ThumbsUp className="w-4 h-4" /> 2.4k Likes</div>
                    </div>
                    <p className="text-2xl text-slate-600 leading-relaxed mb-10 font-light italic">
                      "{post.excerpt}"
                    </p>
                    <div className="flex items-center justify-between pb-10 border-b border-slate-100">
                      <div className="flex gap-4">
                        {post.tags.map(tag => (
                          <span key={tag} className="text-[11px] font-black text-slate-400 uppercase tracking-widest bg-slate-50 px-5 py-2 rounded-full border border-slate-100 hover:border-indigo-100 transition-all cursor-pointer">#{tag}</span>
                        ))}
                      </div>
                      <div className="flex items-center gap-6">
                        <button className="text-slate-400 hover:text-indigo-600 transition-all"><Bookmark className="w-6 h-6" /></button>
                        <button className="text-slate-400 hover:text-indigo-600 transition-all"><Share2 className="w-6 h-6" /></button>
                        <button className="group bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-indigo-600 transition-all">
                          Read Case Study <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}

              <div className="pt-20">
                <h3 className="text-3xl font-bold mb-12 text-slate-900 flex items-center gap-4">
                  <TrendingUp className="text-indigo-600" /> Latest Deep Dives
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  {standardPosts.map(post => (
                    <motion.article 
                      key={post.id}
                      whileHover={{ y: -15 }}
                      className="group flex flex-col h-full"
                    >
                      <div className="h-80 rounded-[48px] overflow-hidden mb-8 shadow-lg">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                      </div>
                      <div className="flex-grow">
                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 inline-block ${post.categoryColor}`}>
                          {post.category}
                        </span>
                        <h4 className="text-3xl font-bold mb-4 group-hover:text-indigo-600 transition-colors leading-tight tracking-tight">
                          <a href="#">{post.title}</a>
                        </h4>
                        <p className="text-slate-500 text-lg leading-relaxed mb-8 line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>
                      <div className="flex items-center justify-between pt-8 border-t border-slate-50">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white font-black text-xs">CS</div>
                          <span className="text-sm font-black uppercase tracking-tighter text-slate-700">{post.author}</span>
                        </div>
                        <button className="text-indigo-600 font-black text-sm uppercase tracking-widest flex items-center gap-1 group-hover:gap-3 transition-all">
                          Full Guide <ChevronRight className="w-5 h-5" />
                        </button>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>
            </div>

            {/* Pagination / Load More */}
            <div className="mt-32 pt-16 border-t border-slate-100 text-center">
              <p className="text-slate-400 mb-10 font-medium">Viewing 9 of 1,245 specialized articles</p>
              <button className="group bg-slate-900 text-white px-16 py-6 rounded-[30px] font-black text-xl hover:bg-indigo-600 transition-all shadow-[0_20px_50px_rgba(79,70,229,0.2)] flex items-center gap-4 mx-auto">
                Discover More Insights <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform" />
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-[32%] space-y-16">
            
            {/* Newsletter - Sticky potential */}
            <div className="bg-gradient-to-br from-indigo-600 to-purple-800 rounded-[64px] p-12 text-white relative overflow-hidden shadow-2xl">
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-3xl bg-white/20 backdrop-blur-xl flex items-center justify-center mb-10 border border-white/20 shadow-2xl">
                  <Mail className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-4xl font-bold mb-6 leading-none tracking-tighter">The Weekly <br />Ascension</h4>
                <p className="text-indigo-100 text-lg mb-12 leading-relaxed font-light">
                  Join 25,000+ top-tier professionals and students. No fluff, just pure psychological strategy.
                </p>
                <div className="space-y-4">
                  <input type="email" placeholder="Preferred Email" className="w-full px-8 py-6 rounded-3xl bg-white/10 border border-white/20 placeholder-indigo-300 text-white focus:outline-none focus:ring-4 focus:ring-white/30 transition-all text-lg" />
                  <button className="w-full bg-white text-indigo-600 py-6 rounded-3xl font-black text-xl shadow-2xl hover:bg-indigo-50 transition-all active:scale-95">Upgrade My Inbox</button>
                </div>
              </div>
              <div className="absolute top-[-15%] right-[-15%] w-72 h-72 bg-white/10 blur-[100px] rounded-full" />
              <div className="absolute bottom-[-10%] left-[-10%] w-56 h-56 bg-purple-400/20 blur-[80px] rounded-full" />
            </div>

            {/* Upcoming Webinars */}
            <div className="bg-white rounded-[48px] p-12 border border-slate-100 shadow-2xl shadow-slate-200">
              <h4 className="text-2xl font-bold mb-10 flex items-center gap-3">
                <PlayCircle className="w-7 h-7 text-rose-500" /> Live Workshops
              </h4>
              <div className="space-y-10">
                {webinars.map((webinar, i) => (
                  <div key={i} className="group cursor-pointer">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-black text-indigo-600 uppercase tracking-widest">{webinar.date} • {webinar.time}</span>
                      <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                    </div>
                    <h5 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-all leading-tight mb-2">{webinar.title}</h5>
                    <p className="text-sm text-slate-400 font-medium">with {webinar.expert}</p>
                    <button className="mt-4 text-xs font-black uppercase tracking-widest text-slate-900 group-hover:underline underline-offset-8">Reserve Seat →</button>
                  </div>
                ))}
              </div>
              <button className="w-full mt-12 py-5 bg-slate-50 rounded-2xl text-slate-900 font-black text-sm uppercase tracking-widest hover:bg-slate-100 transition-all border border-slate-100">Full Schedule</button>
            </div>

            {/* Meet the Authors */}
            <div className="p-12 bg-slate-900 rounded-[64px] text-white">
              <h4 className="text-2xl font-bold mb-12 flex items-center gap-3"><Award className="w-7 h-7 text-indigo-400" /> Faculty Contributors</h4>
              <div className="space-y-12">
                {experts.map((expert, i) => (
                  <div key={i} className="flex items-center gap-6 group cursor-pointer">
                    <div className="w-24 h-24 rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl transition-all group-hover:-translate-y-3">
                      <img src={expert.image} alt={expert.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                    </div>
                    <div className="flex-1">
                      <h5 className="text-xl font-bold group-hover:text-indigo-400 transition-colors leading-tight mb-1">{expert.name}</h5>
                      <p className="text-sm font-medium text-slate-400">{expert.role}</p>
                      <div className="flex items-center gap-1 mt-3">
                        {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 text-yellow-500 fill-current" />)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Reading */}
            <div className="bg-slate-50 rounded-[48px] p-12 border border-slate-200">
               <h4 className="text-2xl font-bold mb-10 flex items-center gap-3"><BookOpen className="w-7 h-7 text-indigo-600" /> Curated Reading</h4>
               <div className="space-y-8">
                 {[
                   { title: "Man's Search for Meaning", author: "Viktor Frankl", type: "Classic Psychology" },
                   { title: "The Body Keeps the Score", author: "Bessel van der Kolk", type: "Trauma Study" },
                   { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", type: "Decision Science" }
                 ].map((book, i) => (
                   <div key={i} className="border-b border-slate-200 pb-6 last:border-0 last:pb-0 group cursor-pointer">
                     <p className="text-[10px] font-black text-indigo-500 uppercase tracking-widest mb-2">{book.type}</p>
                     <h5 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-all mb-1">{book.title}</h5>
                     <p className="text-xs text-slate-400 font-medium">by {book.author}</p>
                   </div>
                 ))}
               </div>
            </div>

            {/* Crisis Widget */}
            <div className="bg-rose-600 rounded-[48px] p-12 text-white shadow-[0_30px_60px_-15px_rgba(225,29,72,0.4)]">
              <div className="flex items-center gap-4 mb-8">
                 <ShieldCheck className="w-10 h-10 text-white" />
                 <h4 className="text-3xl font-bold leading-tight">Emergency Assistance</h4>
              </div>
              <p className="text-xl text-rose-100 mb-10 leading-relaxed font-light">Facing an immediate emotional crisis? Our emergency support desk is available 24/7.</p>
              <button className="w-full flex items-center justify-center gap-4 bg-white text-rose-600 py-6 rounded-3xl font-black text-xl hover:bg-rose-50 transition-all shadow-xl">
                <MessageCircle className="w-7 h-7" /> Contact SOS Line
              </button>
            </div>

          </aside>
        </div>
      </section>

      {/* Expanded Topics Grid */}
      <section className="py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-white to-transparent opacity-5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-10">
            <div className="max-w-3xl">
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">Global Research <br />Network Feed</h2>
              <p className="text-xl text-slate-400 leading-relaxed">We aggregate data-driven research from over 50 global counseling partners to bring you the cutting edge of human development.</p>
            </div>
            <a href="#" className="group bg-indigo-600 text-white px-10 py-5 rounded-full font-bold flex items-center gap-3 hover:bg-white hover:text-indigo-600 transition-all shadow-2xl">
              Access Full Archives <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[...standardPosts, ...standardPosts].slice(0, 8).map((post, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[48px] backdrop-blur-md hover:bg-white/10 transition-all group flex flex-col">
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400 mb-8">{post.category}</div>
                <h4 className="text-2xl font-bold text-white mb-10 flex-grow leading-tight group-hover:text-indigo-300 transition-colors tracking-tight">
                  <a href="#">{post.title}</a>
                </h4>
                <div className="flex items-center justify-between pt-8 border-t border-white/10">
                  <span className="text-xs font-black uppercase tracking-tighter text-slate-400">{post.date}</span>
                  <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white"><ArrowRight className="w-4 h-4" /></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Newsletter CTA */}
      <section className="py-32 container mx-auto px-6">
        <div className="bg-slate-50 rounded-[80px] p-20 md:p-32 text-center relative overflow-hidden border border-slate-100 shadow-sm">
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-8xl font-bold mb-12 tracking-tighter leading-none text-slate-900">The Future of Your <br /><span className="text-indigo-600">Well-being</span> Starts Here.</h2>
              <p className="text-2xl text-slate-500 mb-16 max-w-2xl mx-auto leading-relaxed font-light italic">
                Get the insights that help you stay ahead in a complex world.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-2xl mx-auto">
                <input type="email" placeholder="Email Address" className="flex-grow px-10 py-7 rounded-[35px] bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 shadow-xl text-lg" />
                <button className="bg-slate-900 text-white px-12 py-7 rounded-[35px] font-black text-xl hover:bg-indigo-600 transition-all shadow-2xl flex items-center justify-center gap-4">
                  Enroll Now <ArrowRight className="w-6 h-6" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer Disclaimer & Legal */}
      <footer className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start gap-20 mb-20">
              <div className="max-w-sm">
                <div className="w-16 h-16 bg-indigo-600 text-white rounded-[20px] flex items-center justify-center font-black text-3xl mb-8 shadow-2xl shadow-indigo-200">E</div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">Evolution Journal</h4>
                <p className="text-slate-400 text-sm leading-relaxed">Empowering human potential through rigorous psychological insights and strategic mentorship since 2012.</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
                <div>
                  <h5 className="font-black text-xs uppercase tracking-widest text-slate-900 mb-8">Pillars</h5>
                  <ul className="space-y-4 text-sm text-slate-500 font-medium">
                    <li><a href="#" className="hover:text-indigo-600">Relationships</a></li>
                    <li><a href="#" className="hover:text-indigo-600">Mental Health</a></li>
                    <li><a href="#" className="hover:text-indigo-600">Executive Success</a></li>
                    <li><a href="#" className="hover:text-indigo-600">Educational Path</a></li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-black text-xs uppercase tracking-widest text-slate-900 mb-8">Resources</h5>
                  <ul className="space-y-4 text-sm text-slate-500 font-medium">
                    <li><a href="#" className="hover:text-indigo-600">Podcast</a></li>
                    <li><a href="#" className="hover:text-indigo-600">Case Studies</a></li>
                    <li><a href="#" className="hover:text-indigo-600">Assessments</a></li>
                    <li><a href="#" className="hover:text-indigo-600">Legal Center</a></li>
                  </ul>
                </div>
                <div className="col-span-2 md:col-span-1">
                  <h5 className="font-black text-xs uppercase tracking-widest text-slate-900 mb-8">Trust</h5>
                  <div className="flex gap-4">
                    <ShieldCheck className="w-10 h-10 text-slate-200" />
                    <Award className="w-10 h-10 text-slate-200" />
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-16 border-t border-slate-100 text-center">
              <p className="text-slate-300 text-xs leading-relaxed max-w-3xl mx-auto font-medium">
                © 2024 COUNSELHUB INTERNATIONAL. ALL RIGHTS RESERVED. <br />
                The information provided in The Evolution Journal is for educational and growth purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogContent;