import { motion } from 'framer-motion';
import { 
  FaCalendarAlt,
  FaUser,
  FaTag,
  FaArrowRight,
  FaBook,
  FaGraduationCap,
  FaLightbulb,
  FaChartLine,
  FaGlobeAmericas,
  FaSearch,
  FaShare,
  FaBookmark,
  FaComment
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Blog = () => {
  const featuredPosts = [
    {
      id: 1,
      title: "Top 10 Universities for Computer Science in 2024",
      excerpt: "Discover the best global universities for CS with detailed analysis of admission requirements, scholarships, and career outcomes.",
      category: "Admissions",
      readTime: "8 min read",
      date: "Dec 15, 2024",
      author: "Dr. Ananya Sharma",
      authorRole: "Admission Expert",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3",
      tags: ["Computer Science", "Rankings", "Admissions"]
    },
    {
      id: 2,
      title: "How to Write a Winning Statement of Purpose",
      excerpt: "Master the art of crafting compelling SOPs that stand out to admission committees.",
      category: "Application Tips",
      readTime: "6 min read",
      date: "Dec 12, 2024",
      author: "Rajesh Mehta",
      authorRole: "Head of Admissions",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3",
      tags: ["SOP", "Writing", "Application"]
    },
    {
      id: 3,
      title: "Scholarship Strategies for International Students",
      excerpt: "Comprehensive guide to securing financial aid and scholarships for your dream education.",
      category: "Financial Aid",
      readTime: "10 min read",
      date: "Dec 10, 2024",
      author: "Priya Patel",
      authorRole: "Financial Aid Expert",
      image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3",
      tags: ["Scholarships", "Financial Aid", "International"]
    }
  ];

  const popularPosts = [
    {
      id: 4,
      title: "GRE vs GMAT: Which Test Should You Take?",
      category: "Exam Prep",
      readTime: "7 min read",
      date: "Dec 8, 2024",
      views: "2.5k"
    },
    {
      id: 5,
      title: "Early Decision vs Regular Decision",
      category: "Strategy",
      readTime: "5 min read",
      date: "Dec 5, 2024",
      views: "1.8k"
    },
    {
      id: 6,
      title: "Building an Impressive Extracurricular Profile",
      category: "Profile Building",
      readTime: "9 min read",
      date: "Dec 3, 2024",
      views: "3.2k"
    },
    {
      id: 7,
      title: "Visa Interview Preparation Guide",
      category: "Visa Process",
      readTime: "6 min read",
      date: "Dec 1, 2024",
      views: "1.5k"
    }
  ];

  const categories = [
    { name: "Admissions", count: 24, icon: <FaGraduationCap /> },
    { name: "Application Tips", count: 18, icon: <FaBook /> },
    { name: "Financial Aid", count: 15, icon: <FaChartLine /> },
    { name: "Exam Prep", count: 12, icon: <FaLightbulb /> },
    { name: "Career Guidance", count: 20, icon: <FaGlobeAmericas /> },
    { name: "Student Life", count: 8, icon: <FaUser /> }
  ];

  const trendingTags = [
    "Computer Science", "MBA", "Scholarships", "SOP", "LOR", 
    "GRE", "TOEFL", "Interview", "Visa", "Career"
  ];

  const newsletterContent = {
    title: "Stay Updated with Education Insights",
    description: "Get weekly articles, admission tips, and scholarship alerts directly in your inbox.",
    subscribers: "15,000+"
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-gray-900 via-black to-gray-800 pt-20">
        <div className="absolute inset-0">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '30px 30px'
            }}></div>
          </div>
          
          {/* Gradient Overlays */}
          <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-blue-500/10 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-purple-500/10 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <FaBook className="text-yellow-400" />
                <span className="text-sm font-medium text-white/90">Education Insights</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Education Blog
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  & Resources
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Expert insights, admission strategies, and success stories to guide your 
                academic journey to top universities worldwide.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search articles, topics, or universities..."
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity">
                    Search
                  </button>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <span className="text-gray-400">Trending:</span>
                {["Admissions", "Scholarships", "SOP Guide", "Interview Prep"].map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 hover:bg-white/20 transition-colors cursor-pointer">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Featured & Articles */}
            <div className="lg:col-span-2">
              {/* Featured Posts */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-gray-900">Featured Articles</h2>
                  <Link to="/blog/all" className="text-blue-600 font-medium hover:text-blue-700 transition-colors flex items-center gap-2">
                    View All
                    <FaArrowRight />
                  </Link>
                </div>
                
                <div className="space-y-8">
                  {featuredPosts.map((post, idx) => (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="group"
                    >
                      <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
                        <div className="md:flex">
                          {/* Image */}
                          <div className="md:w-2/5 relative overflow-hidden">
                            <img 
                              src={post.image} 
                              alt={post.title}
                              className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute top-4 left-4">
                              <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                                {post.category}
                              </span>
                            </div>
                          </div>
                          
                          {/* Content */}
                          <div className="md:w-3/5 p-8">
                            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                              <div className="flex items-center gap-2">
                                <FaCalendarAlt />
                                <span>{post.date}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <FaUser />
                                <span>{post.author}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <FaBook />
                                <span>{post.readTime}</span>
                              </div>
                            </div>
                            
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                              <Link to={`/blog/${post.id}`}>
                                {post.title}
                              </Link>
                            </h3>
                            
                            <p className="text-gray-600 mb-6 leading-relaxed">
                              {post.excerpt}
                            </p>
                            
                            <div className="flex flex-wrap gap-2 mb-6">
                              {post.tags.map((tag, tagIdx) => (
                                <span key={tagIdx} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors">
                                  {tag}
                                </span>
                              ))}
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="flex items-center gap-2 text-gray-600">
                                  <FaComment className="text-blue-500" />
                                  <span className="text-sm">24 comments</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-600">
                                  <FaBookmark className="text-purple-500" />
                                  <span className="text-sm">Bookmark</span>
                                </div>
                              </div>
                              
                              <Link to={`/blog/${post.id}`}>
                                <button className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors">
                                  Read Article
                                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </motion.div>
              
              {/* Popular Posts Grid */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Most Popular</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {popularPosts.map((post, idx) => (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="group"
                    >
                      <div className="bg-white rounded-xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300">
                        <div className="flex items-center justify-between mb-4">
                          <span className="px-3 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-full">
                            {post.category}
                          </span>
                          <span className="text-sm text-gray-500">{post.readTime}</span>
                        </div>
                        
                        <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                          <Link to={`/blog/${post.id}`}>
                            {post.title}
                          </Link>
                        </h4>
                        
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center gap-2">
                            <FaCalendarAlt />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FaUser />
                            <span>{post.views} views</span>
                          </div>
                        </div>
                        
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <Link to={`/blog/${post.id}`}>
                            <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors text-sm">
                              Read More →
                            </button>
                          </Link>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-1">
              {/* Categories */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">Categories</h3>
                <div className="space-y-4">
                  {categories.map((category, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ x: 5 }}
                      className="group"
                    >
                      <Link to={`/blog/category/${category.name.toLowerCase()}`}>
                        <div className="flex items-center justify-between p-3 rounded-lg hover:bg-blue-50 transition-colors">
                          <div className="flex items-center gap-3">
                            <div className="text-blue-600">
                              {category.icon}
                            </div>
                            <span className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                              {category.name}
                            </span>
                          </div>
                          <span className="bg-gray-100 text-gray-600 text-sm px-2 py-1 rounded-full">
                            {category.count}
                          </span>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Trending Tags */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <FaTag className="text-purple-500" />
                  Trending Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {trendingTags.map((tag, idx) => (
                    <Link key={idx} to={`/blog/tag/${tag.toLowerCase()}`}>
                      <span className="inline-block px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-purple-50 hover:text-purple-600 transition-colors">
                        #{tag}
                      </span>
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Newsletter */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl p-6 text-white"
              >
                <div className="text-center">
                  <div className="inline-flex p-3 rounded-xl bg-white/20 backdrop-blur-sm mb-4">
                    <FaBook className="text-2xl" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{newsletterContent.title}</h3>
                  <p className="text-blue-100 mb-6">
                    {newsletterContent.description}
                  </p>
                  
                  <div className="space-y-4">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white"
                    />
                    <button className="w-full bg-white text-blue-600 font-semibold px-4 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                      Subscribe Now
                    </button>
                  </div>
                  
                  <p className="text-sm text-blue-200 mt-4">
                    Join {newsletterContent.subscribers} subscribers
                  </p>
                </div>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-8 bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">Blog Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-xl">
                    <div className="text-3xl font-bold text-blue-600 mb-2">250+</div>
                    <div className="text-sm text-gray-600">Articles</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-xl">
                    <div className="text-3xl font-bold text-purple-600 mb-2">50K+</div>
                    <div className="text-sm text-gray-600">Monthly Readers</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-xl">
                    <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
                    <div className="text-sm text-gray-600">Expert Authors</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-xl">
                    <div className="text-3xl font-bold text-orange-600 mb-2">6</div>
                    <div className="text-sm text-gray-600">Categories</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Authors */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-medium mb-4">
              Our Authors
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Expert Writers
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Industry professionals and admission experts sharing their knowledge
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Dr. Ananya Sharma",
                role: "Admission Consultant",
                expertise: "Top University Admissions",
                articles: 45,
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3"
              },
              {
                name: "Rajesh Mehta",
                role: "MBA Admissions Expert",
                expertise: "Business School Applications",
                articles: 32,
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3"
              },
              {
                name: "Priya Patel",
                role: "Scholarship Advisor",
                expertise: "Financial Aid & Funding",
                articles: 28,
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3"
              }
            ].map((author, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 text-center border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300">
                  <div className="relative inline-block mb-4">
                    <img 
                      src={author.image} 
                      alt={author.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                    />
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <FaBook className="text-white" />
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{author.name}</h4>
                  <p className="text-blue-600 font-medium mb-3">{author.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{author.expertise}</p>
                  
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <span>{author.articles} articles</span>
                    <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                    <span>Expert Contributor</span>
                  </div>
                  
                  <div className="mt-6">
                    <Link to={`/blog/author/${author.name.toLowerCase().replace(' ', '-')}`}>
                      <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors text-sm">
                        View Articles →
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <FaBook className="text-blue-400" />
                <span className="font-medium">Never Miss an Update</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Join Our Newsletter
              </h2>
              
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Get weekly admission tips, scholarship alerts, and success stories 
                directly in your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300">
                  Subscribe Now
                </button>
              </div>
              
              <p className="text-gray-400 text-sm mt-6">
                15,000+ subscribers • Unsubscribe anytime
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;