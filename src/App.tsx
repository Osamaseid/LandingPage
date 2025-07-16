import React from 'react';
import { 
  BookOpen, 
  Users, 
  Award, 
  TrendingUp, 
  Play, 
  Star, 
  ChevronRight,
  Code,
  Database,
  Smartphone,
  Globe,
  CheckCircle,
  ArrowRight,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import image from '../src/assets/photo_2024-06-28_09-55-56-removebg-preview.png';
function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
         
                <img src = {image} className=''/>
              </div>
              <span className="text-xl font-bold text-gray-900">Nile Tech Academy</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#courses" className="text-gray-600 hover:text-blue-600 transition-colors">Courses</a>
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <TrendingUp className="w-4 h-4" />
                <span>Join 50,000+ Tech Professionals</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Master Tech Skills with 
                <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent"> Nile Tech Academy</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Advance your career with hands-on tech courses designed by industry experts. 
                Learn coding, cloud computing, AI, and more through our interactive learning platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center justify-center">
                  Start Learning Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-gray-400 transition-colors flex items-center justify-center">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </button>
              </div>
              <div className="flex items-center space-x-8 mt-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Courses</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">200+</div>
                  <div className="text-sm text-gray-600">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">95%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Course Completed!</div>
                      <div className="text-sm text-gray-600">React Advanced Patterns</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Progress</span>
                      <span className="text-sm font-semibold text-gray-900">100%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full w-full"></div>
                    </div>
                    <div className="flex items-center space-x-4 pt-2">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">4.9</span>
                      </div>
                      <div className="text-sm text-gray-600">24 hours</div>
                      <div className="text-sm text-gray-600">Certificate earned</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section id="courses" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Tech Courses</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our most sought-after courses designed to boost your tech career
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Code,
                title: "Full Stack Development",
                description: "Master React, Node.js, and modern web development",
                price: "$299",
                rating: 4.9,
                students: "12.5K",
                duration: "40 hours",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: Database,
                title: "Cloud Computing",
                description: "AWS, Azure, and Google Cloud certification prep",
                price: "$399",
                rating: 4.8,
                students: "8.2K",
                duration: "50 hours",
                color: "from-teal-500 to-teal-600"
              },
              {
                icon: Smartphone,
                title: "Mobile App Development",
                description: "Build iOS and Android apps with React Native",
                price: "$249",
                rating: 4.7,
                students: "6.8K",
                duration: "35 hours",
                color: "from-orange-500 to-orange-600"
              },
              {
                icon: Globe,
                title: "AI & Machine Learning",
                description: "Python, TensorFlow, and deep learning fundamentals",
                price: "$499",
                rating: 4.9,
                students: "9.1K",
                duration: "60 hours",
                color: "from-purple-500 to-purple-600"
              }
            ].map((course, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className={`h-2 bg-gradient-to-r ${course.color} rounded-t-xl`}></div>
                <div className="p-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${course.color} rounded-lg flex items-center justify-center mb-4`}>
                    <course.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-gray-900">{course.price}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <span>{course.students} students</span>
                    <span>{course.duration}</span>
                  </div>
                  <button className="w-full bg-gray-100 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Nile Tech Academy?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform is designed to provide the best learning experience for tech professionals
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Expert-Led Courses",
                description: "Learn from industry professionals with years of real-world experience"
              },
              {
                icon: Users,
                title: "Interactive Learning",
                description: "Engage with peers, join study groups, and participate in coding challenges"
              },
              {
                icon: Award,
                title: "Industry Certificates",
                description: "Earn recognized certifications that boost your career prospects"
              },
              {
                icon: TrendingUp,
                title: "Career Support",
                description: "Get job placement assistance and career guidance from our experts"
              },
              {
                icon: Code,
                title: "Hands-on Projects",
                description: "Build real-world projects that showcase your skills to employers"
              },
              {
                icon: CheckCircle,
                title: "Lifetime Access",
                description: "Access course materials forever and stay updated with new content"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-teal-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-blue-100">See how we're transforming tech education across the region</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "50,000+", label: "Students Enrolled", icon: Users },
              { number: "500+", label: "Courses Available", icon: BookOpen },
              { number: "95%", label: "Job Placement Rate", icon: TrendingUp },
              { number: "4.9/5", label: "Average Rating", icon: Star }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Nile Tech Academy</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2020, Nile Tech Academy has emerged as Egypt's leading technology education platform, 
                dedicated to bridging the gap between traditional education and industry demands.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our mission is to empower the next generation of tech professionals through comprehensive, 
                hands-on learning experiences that prepare students for real-world challenges in the rapidly 
                evolving technology landscape.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </div>
                <div className="text-center p-6 bg-teal-50 rounded-xl">
                  <div className="text-3xl font-bold text-teal-600 mb-2">100+</div>
                  <div className="text-sm text-gray-600">Expert Instructors</div>
                </div>
                <div className="text-center p-6 bg-orange-50 rounded-xl">
                  <div className="text-3xl font-bold text-orange-600 mb-2">50K+</div>
                  <div className="text-sm text-gray-600">Graduates</div>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-xl">
                  <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
                  <div className="text-sm text-gray-600">Job Placement Rate</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 via-teal-600 to-purple-600 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
                  <p className="text-gray-600">
                    To become the Middle East's premier technology education hub, 
                    fostering innovation and creating a skilled workforce ready for the digital future.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-4">Our Values</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5" />
                      <span>Excellence in Education</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5" />
                      <span>Innovation & Creativity</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5" />
                      <span>Student Success Focus</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5" />
                      <span>Industry Partnerships</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Blog/News Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest from Our Blog</h2>
            <p className="text-xl text-gray-600">Stay updated with the latest trends in tech education</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "The Future of Web Development in 2025",
                excerpt: "Explore the emerging trends and technologies that will shape web development in the coming year.",
                date: "January 15, 2025",
                readTime: "5 min read",
                image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2",
                category: "Web Development"
              },
              {
                title: "AI and Machine Learning Career Guide",
                excerpt: "A comprehensive guide to starting your career in artificial intelligence and machine learning.",
                date: "January 12, 2025",
                readTime: "8 min read",
                image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2",
                category: "AI/ML"
              },
              {
                title: "Cloud Computing Certification Roadmap",
                excerpt: "Your step-by-step guide to earning the most valuable cloud computing certifications.",
                date: "January 10, 2025",
                readTime: "6 min read",
                image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2",
                category: "Cloud Computing"
              }
            ].map((article, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">
                      {article.category}
                    </span>
                    <span className="text-gray-500 text-sm">{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{article.date}</span>
                    <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center space-x-1">
                      <span>Read More</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              View All Articles
            </button>
          </div>
        </div>
      </section>
     

     

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Student Success Stories</h2>
            <p className="text-xl text-gray-600">See how our courses have transformed careers</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Full Stack Developer at Microsoft",
                image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
                testimonial: "The Full Stack course at Nile Tech Academy completely changed my career. I went from a non-tech background to landing a job at Microsoft in just 8 months!",
                rating: 5
              },
              {
                name: "Ahmed Hassan",
                role: "Cloud Architect at Amazon",
                image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
                testimonial: "The Cloud Computing course was incredibly comprehensive. The hands-on labs prepared me perfectly for my AWS certification and current role.",
                rating: 5
              },
              {
                name: "Maria Garcia",
                role: "Mobile App Developer",
                image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
                testimonial: "I built three apps during the Mobile Development course. The portfolio I created helped me secure my dream job as a mobile developer.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.testimonial}"</p>
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
       {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Get answers to common questions about our platform</p>
          </div>
          <div className="space-y-6">
            {[
              {
                question: "How long do I have access to the courses?",
                answer: "Once you enroll in a course, you have lifetime access to all course materials, including future updates and additional content."
              },
              {
                question: "Are there any prerequisites for the courses?",
                answer: "Most of our beginner courses have no prerequisites. For advanced courses, we clearly list the required knowledge and skills in the course description."
              },
              {
                question: "Do you offer certificates upon completion?",
                answer: "Yes! Upon successful completion of any course, you'll receive a verified certificate that you can share on LinkedIn and add to your resume."
              },
              {
                question: "Can I get a refund if I'm not satisfied?",
                answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied with your purchase, contact us for a full refund."
              },
              {
                question: "Is there support available if I get stuck?",
                answer: "Absolutely! We provide multiple support channels including community forums, direct instructor access, and priority support for Pro members."
              },
              {
                question: "Can I download course materials for offline viewing?",
                answer: "Yes, our mobile app allows you to download course videos and materials for offline learning, perfect for learning on the go."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Tech Journey?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of students who have transformed their careers with Nile Tech Academy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Browse All Courses
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Nile Tech Academy</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Empowering the next generation of tech professionals through comprehensive, 
                hands-on learning experiences.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-400">Cairo, Egypt</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-400">+20 123 456 7890</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-400">info@niletech.com</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Courses</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cloud Computing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mobile Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AI & Machine Learning</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Nile Tech Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
