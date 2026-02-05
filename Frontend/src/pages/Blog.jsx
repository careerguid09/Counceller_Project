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
  BookOpen,
  Filter,
  Eye,
  BookmarkPlus,
  TrendingUp as TrendingUpIcon,
  Sparkles,
  Globe,
  Target,
  Users
} from 'lucide-react';

const BlogContent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [savedPosts, setSavedPosts] = useState([]);

  const toggleSavePost = (postId) => {
    if (savedPosts.includes(postId)) {
      setSavedPosts(savedPosts.filter(id => id !== postId));
    } else {
      setSavedPosts([...savedPosts, postId]);
    }
  };

  const experts = [
    {
      name: "Dr. Sarah Jenkins",
      role: "Relationship Specialist",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400",
      specialty: "Couples Therapy",
      articles: 42,
      rating: 4.9
    },
    {
      name: "Marcus Thorne",
      role: "CBT Specialist",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400",
      specialty: "Anxiety & Stress",
      articles: 38,
      rating: 4.8
    },
    {
      name: "Elena Rodriguez",
      role: "Career Strategist",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400",
      specialty: "Executive Coaching",
      articles: 35,
      rating: 4.9
    }
  ];

  const featuredPosts = [
    {
      id: 1,
      title: "Healing Relationship Trauma: The Path to Secure Attachment",
      excerpt: "Understanding the roots of relationship anxiety and how specialized therapy can help you build trust and emotional safety with your partner. Trauma isn't just about what happened; it's about how your nervous system responds to intimacy today.",
      category: "Relationships",
      categoryColor: "from-rose-500 to-pink-600",
      icon: <Heart className="w-5 h-5" />,
      readTime: "12 min read",
      date: "Jan 24, 2024",
      author: "Dr. Sarah Jenkins",
      authorImage: "https://i.pravatar.cc/150?img=1",
      image: "https://images.unsplash.com/photo-1516584566581-9b4121370295?auto=format&fit=crop&w=1200",
      tags: ["Trauma", "Attachment", "Couples"],
      views: "2.4k",
      likes: 189,
      featured: true
    },
    {
      id: 2,
      title: "The Silent Burnout: Managing Executive Stress in 2024",
      excerpt: "High-performance roles often come with invisible costs. Learn how to identify early signs of executive burnout and implement sustainable habits that protect your mental clarity without compromising your career trajectory.",
      category: "Career",
      categoryColor: "from-indigo-500 to-blue-600",
      icon: <Briefcase className="w-5 h-5" />,
      readTime: "8 min read",
      date: "Feb 02, 2024",
      author: "Marcus Thorne",
      authorImage: "https://i.pravatar.cc/150?img=2",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200",
      tags: ["Leadership", "Work-Life Balance", "CBT"],
      views: "1.8k",
      likes: 156,
      featured: true
    },
    {
      id: 3,
      title: "The Neurobiology of Resilience: Rewiring Your Stress Response",
      excerpt: "Science shows that our brains are plastic. We explore the latest neuroscientific breakthroughs in habit formation and how you can actually 'train' your brain to stay calm under intense pressure.",
      category: "Mental Health",
      categoryColor: "from-emerald-500 to-teal-600",
      icon: <Brain className="w-5 h-5" />,
      readTime: "15 min read",
      date: "Feb 05, 2024",
      author: "Dr. Emily Chen",
      authorImage: "https://i.pravatar.cc/150?img=3",
      image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=1200",
      tags: ["Neuroscience", "Mindset", "Health"],
      views: "3.2k",
      likes: 245,
      featured: true
    }
  ];

  const standardPosts = [
    {
      id: 4,
      title: "The Psychology of Career Transitions at 40",
      excerpt: "Mid-life career shifts are increasingly common. We explore the psychological barriers and the liberating potential of reinventing your identity.",
      category: "Career",
      categoryColor: "from-indigo-500 to-blue-600",
      icon: <Briefcase className="w-5 h-5" />,
      readTime: "10 min read",
      date: "Feb 03, 2024",
      author: "David Sterling",
      authorImage: "https://i.pravatar.cc/150?img=4",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800",
      tags: ["Career Change", "Midlife"],
      views: "956",
      likes: 89
    },
    {
      id: 5,
      title: "Mindfulness in the Classroom: Boosting Resilience",
      excerpt: "How simple breathing techniques and presence-based learning are helping students manage exam pressure and improve retention.",
      category: "Education",
      categoryColor: "from-amber-500 to-orange-600",
      icon: <GraduationCap className="w-5 h-5" />,
      readTime: "6 min read",
      date: "Feb 04, 2024",
      author: "Dr. Alistair Cook",
      authorImage: "https://i.pravatar.cc/150?img=5",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800",
      tags: ["Study Tips", "Students"],
      views: "1.2k",
      likes: 112
    },
    {
      id: 6,
      title: "Constructive Conflict: Turning Arguments into Growth",
      excerpt: "Conflict is inevitable, but destruction isn't. Learn the linguistic shifts that turn blame into a shared problem-solving session.",
      category: "Relationships",
      categoryColor: "from-rose-500 to-pink-600",
      icon: <Heart className="w-5 h-5" />,
      readTime: "9 min read",
      date: "Feb 06, 2024",
      author: "Dr. Sarah Jenkins",
      authorImage: "https://i.pravatar.cc/150?img=1",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2959210?auto=format&fit=crop&w=800",
      tags: ["Communication", "Conflict"],
      views: "1.5k",
      likes: 134
    },
    {
      id: 7,
      title: "Coping with the Loneliness Epidemic",
      excerpt: "In a hyper-connected world, deep loneliness is at an all-time high. We discuss how to foster genuine community in digital spaces.",
      category: "Mental Well-being",
      categoryColor: "from-emerald-500 to-teal-600",
      icon: <Brain className="w-5 h-5" />,
      readTime: "11 min read",
      date: "Feb 07, 2024",
      author: "Marcus Thorne",
      authorImage: "https://i.pravatar.cc/150?img=2",
      image: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=800",
      tags: ["Society", "Connection"],
      views: "2.1k",
      likes: 187
    },
    {
      id: 8,
      title: "Financial Therapy: The Psychology of Money",
      excerpt: "Why do we spend the way we do? Unpacking childhood 'money scripts' to heal your current relationship with finances and debt.",
      category: "Mental Health",
      categoryColor: "from-emerald-500 to-teal-600",
      icon: <Brain className="w-5 h-5" />,
      readTime: "14 min read",
      date: "Feb 08, 2024",
      author: "Elena Rodriguez",
      authorImage: "https://i.pravatar.cc/150?img=6",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800",
      tags: ["Finance", "Psychology"],
      views: "1.7k",
      likes: 156
    },
    {
      id: 9,
      title: "Parenting Styles and Long-term Success",
      excerpt: "Comparing authoritative, permissive, and neglectful parenting and their impact on a child's eventual career and relationship outcomes.",
      category: "Education",
      categoryColor: "from-amber-500 to-orange-600",
      icon: <GraduationCap className="w-5 h-5" />,
      readTime: "13 min read",
      date: "Feb 09, 2024",
      author: "Jessica Wu",
      authorImage: "https://i.pravatar.cc/150?img=7",
      image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=800",
      tags: ["Parenting", "Development"],
      views: "1.9k",
      likes: 178
    }
  ];

  const categories = [
    { name: "All", count: 126, icon: <TrendingUpIcon className="w-5 h-5" />, color: "from-slate-600 to-slate-700" },
    { name: "Mental Well-being", count: 42, icon: <Brain className="w-5 h-5" />, color: "from-emerald-500 to-teal-600" },
    { name: "Relationships", count: 28, icon: <Heart className="w-5 h-5" />, color: "from-rose-500 to-pink-600" },
    { name: "Career", count: 35, icon: <Briefcase className="w-5 h-5" />, color: "from-indigo-500 to-blue-600" },
    { name: "Education", count: 19, icon: <GraduationCap className="w-5 h-5" />, color: "from-amber-500 to-orange-600" },
    { name: "Holistic Health", count: 12, icon: <ShieldCheck className="w-5 h-5" />, color: "from-purple-500 to-violet-600" }
  ];

  const webinars = [
    { 
      title: "Mastering Difficult Conversations", 
      date: "Feb 15", 
      time: "6:00 PM EST", 
      expert: "Dr. Sarah Jenkins",
      spots: 24
    },
    { 
      title: "Overcoming Imposter Syndrome", 
      date: "Feb 18", 
      time: "4:00 PM EST", 
      expert: "Marcus Thorne",
      spots: 18
    },
    { 
      title: "Strategic College Planning", 
      date: "Feb 22", 
      time: "11:00 AM EST", 
      expert: "Dr. Alistair Cook",
      spots: 32
    }
  ];

  return (
    <div className="bg-gradient-to-b from-slate-50 to-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-sm font-semibold mb-6 border border-indigo-200"
            >
              <Sparkles className="w-4 h-4" />
              <span>Expert Insights & Research</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-700">
                The Knowledge Hub
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                For Personal Growth
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto"
            >
              Discover evidence-based insights, expert strategies, and transformative 
              ideas for relationships, career, mental health, and education.
            </motion.p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative max-w-2xl mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles, topics, or experts..."
                  className="w-full pl-12 pr-32 py-4 rounded-xl bg-white border-2 border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all shadow-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                  <Filter className="w-4 h-4 text-slate-400" />
                  <span className="text-sm text-slate-500">Advanced</span>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                <span className="text-sm text-slate-500">Trending:</span>
                {["Mindfulness", "Career Growth", "Anxiety", "Relationships"].map((tag) => (
                  <button
                    key={tag}
                    className="px-3 py-1.5 text-sm bg-slate-100 text-slate-700 rounded-full hover:bg-slate-200 transition-colors"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Main Content */}
            <div className="lg:w-8/12">
              {/* Featured Posts */}
              <div className="mb-16">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-slate-900">Featured Insights</h2>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <TrendingUp className="w-4 h-4" />
                    <span>Most Read This Week</span>
                  </div>
                </div>
                
                <div className="grid gap-8">
                  {featuredPosts.map((post) => (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5 }}
                      className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 group"
                    >
                      <div className="relative h-64 md:h-80 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                        <div className="absolute top-4 right-4">
                          <button
                            onClick={() => toggleSavePost(post.id)}
                            className={`p-2 rounded-full backdrop-blur-sm ${
                              savedPosts.includes(post.id)
                                ? 'bg-rose-500 text-white'
                                : 'bg-white/90 text-slate-600 hover:text-rose-500'
                            } transition-all`}
                          >
                            <Bookmark className="w-5 h-5" />
                          </button>
                        </div>
                        <div className="absolute bottom-4 left-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${post.categoryColor}`}>
                            {post.category}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-6 md:p-8">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={post.authorImage}
                              alt={post.author}
                              className="w-10 h-10 rounded-full border-2 border-white shadow"
                            />
                            <div>
                              <p className="font-semibold text-slate-900">{post.author}</p>
                              <p className="text-sm text-slate-500">{post.date} • {post.readTime}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 text-slate-500">
                            <button className="flex items-center gap-1 hover:text-indigo-600 transition-colors">
                              <ThumbsUp className="w-4 h-4" />
                              <span className="text-sm">{post.likes}</span>
                            </button>
                            <button className="hover:text-indigo-600 transition-colors">
                              <Share2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
                          <a href="#">{post.title}</a>
                        </h3>
                        
                        <p className="text-slate-600 mb-6 line-clamp-2">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 text-xs bg-slate-100 text-slate-700 rounded-full hover:bg-slate-200 transition-colors cursor-pointer"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                          <a
                            href="#"
                            className="flex items-center gap-2 text-indigo-600 font-semibold hover:gap-3 transition-all"
                          >
                            Read Full Article
                            <ArrowRight className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>

              {/* Recent Articles */}
              <div>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-slate-900">Latest Articles</h2>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Calendar className="w-4 h-4" />
                    <span>Updated Daily</span>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {standardPosts.map((post) => (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5 }}
                      className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-100 hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 right-3">
                          <button
                            onClick={() => toggleSavePost(post.id)}
                            className={`p-1.5 rounded-full backdrop-blur-sm ${
                              savedPosts.includes(post.id)
                                ? 'bg-rose-500 text-white'
                                : 'bg-white/90 text-slate-600 hover:text-rose-500'
                            } transition-all`}
                          >
                            <Bookmark className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className={`px-2 py-1 text-xs font-semibold rounded text-white bg-gradient-to-r ${post.categoryColor}`}>
                            {post.category}
                          </span>
                          <span className="text-sm text-slate-500">{post.readTime}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
                          <a href="#">{post.title}</a>
                        </h3>
                        
                        <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                          <div className="flex items-center gap-2">
                            <img
                              src={post.authorImage}
                              alt={post.author}
                              className="w-8 h-8 rounded-full"
                            />
                            <span className="text-sm font-medium text-slate-900">{post.author}</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm text-slate-500">
                            <span className="flex items-center gap-1">
                              <Eye className="w-3 h-3" />
                              {post.views}
                            </span>
                            <span className="flex items-center gap-1">
                              <ThumbsUp className="w-3 h-3" />
                              {post.likes}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
                
                {/* Load More */}
                <div className="mt-12 text-center">
                  <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all flex items-center gap-2 mx-auto">
                    Load More Articles
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-4/12">
              <div className="space-y-8 sticky top-24">
                
                {/* Newsletter Card */}
                <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 border border-white/30">
                    <Mail className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Weekly Insights</h3>
                  <p className="text-indigo-100 mb-6">
                    Get expert articles delivered directly to your inbox. No spam, just value.
                  </p>
                  <div className="space-y-4">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 placeholder-indigo-200 text-white focus:outline-none focus:ring-2 focus:ring-white/30"
                    />
                    <button className="w-full bg-white text-indigo-600 py-3 rounded-xl font-semibold hover:bg-indigo-50 transition-colors shadow-lg">
                      Subscribe Now
                    </button>
                  </div>
                  <p className="text-xs text-indigo-200 mt-4 text-center">
                    12,500+ professionals already subscribed
                  </p>
                </div>

                {/* Upcoming Webinars */}
                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <PlayCircle className="w-6 h-6 text-indigo-600" />
                    <h3 className="text-xl font-bold text-slate-900">Upcoming Webinars</h3>
                  </div>
                  
                  <div className="space-y-6">
                    {webinars.map((webinar, idx) => (
                      <div key={idx} className="p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer group">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-semibold text-indigo-600">{webinar.date} • {webinar.time}</span>
                          <span className="text-xs bg-rose-100 text-rose-600 px-2 py-1 rounded-full">
                            {webinar.spots} spots left
                          </span>
                        </div>
                        <h4 className="font-semibold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                          {webinar.title}
                        </h4>
                        <p className="text-sm text-slate-500">with {webinar.expert}</p>
                        <button className="mt-3 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors flex items-center gap-1">
                          Reserve Your Seat
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Top Experts */}
                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <Award className="w-6 h-6 text-amber-600" />
                    <h3 className="text-xl font-bold text-slate-900">Top Contributors</h3>
                  </div>
                  
                  <div className="space-y-6">
                    {experts.map((expert, idx) => (
                      <div key={idx} className="flex items-center gap-4 group cursor-pointer">
                        <div className="relative">
                          <img
                            src={expert.image}
                            alt={expert.name}
                            className="w-16 h-16 rounded-2xl object-cover border-2 border-white shadow group-hover:border-indigo-300 transition-colors"
                          />
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xs">
                            {expert.rating}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                            {expert.name}
                          </h4>
                          <p className="text-sm text-slate-600 mb-1">{expert.role}</p>
                          <p className="text-xs text-slate-500">{expert.articles} articles • {expert.specialty}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Saved Articles */}
                {savedPosts.length > 0 && (
                  <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                    <div className="flex items-center gap-3 mb-6">
                      <BookmarkPlus className="w-6 h-6 text-emerald-600" />
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">Saved Articles</h3>
                        <p className="text-sm text-slate-500">{savedPosts.length} articles saved</p>
                      </div>
                    </div>
                    <button className="w-full py-3 bg-emerald-50 text-emerald-600 rounded-xl font-semibold hover:bg-emerald-100 transition-colors">
                      View All Saved
                    </button>
                  </div>
                )}

                {/* Emergency Support */}
                <div className="bg-gradient-to-br from-rose-600 to-pink-600 rounded-2xl p-8 text-white shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <ShieldCheck className="w-8 h-8 text-white" />
                    <h3 className="text-xl font-bold">Emergency Support</h3>
                  </div>
                  <p className="text-rose-100 mb-6">
                    Immediate help available 24/7 for emotional crises.
                  </p>
                  <button className="w-full bg-white text-rose-600 py-3 rounded-xl font-semibold hover:bg-rose-50 transition-colors shadow-lg flex items-center justify-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    Contact Support Line
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "1,245+", label: "Expert Articles", icon: <BookOpen className="w-6 h-6" /> },
              { value: "42", label: "Contributing Experts", icon: <Users className="w-6 h-6" /> },
              { value: "2.1M+", label: "Monthly Readers", icon: <Eye className="w-6 h-6" /> },
              { value: "98%", label: "Satisfaction Rate", icon: <Target className="w-6 h-6" /> }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                  {stat.icon}
                  <div className="text-3xl font-bold">{stat.value}</div>
                </div>
                <p className="text-slate-300 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-white to-slate-50 rounded-3xl p-12 text-center border border-slate-200 shadow-xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 font-medium mb-8">
                <Globe className="w-4 h-4" />
                <span>Join Our Global Community</span>
              </div>
              
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Start Your Growth Journey Today
              </h2>
              
              <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
                Access exclusive content, connect with experts, and be part of a community 
                dedicated to personal and professional excellence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all flex items-center justify-center gap-3">
                  <Sparkles className="w-5 h-5" />
                  Get Started Free
                </button>
                <button className="px-8 py-4 bg-white text-slate-700 rounded-xl font-semibold border-2 border-slate-200 hover:border-slate-300 transition-all flex items-center justify-center gap-3">
                  <MessageCircle className="w-5 h-5" />
                  Talk to an Expert
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogContent;