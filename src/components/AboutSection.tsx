import { motion } from 'framer-motion'
import { Award, Coffee, Users, Zap } from 'lucide-react'

const stats = [
  {
    icon: Award,
    value: '250+',
    label: 'Projects Delivered',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Users,
    value: '40+',
    label: 'Brands Launched',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Coffee,
    value: '500+',
    label: 'Moodboards Created',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Zap,
    value: '94%',
    label: 'Happy Clients',
    color: 'from-purple-500 to-pink-500'
  }
]

const values = [
  {
    title: 'Human-Centered',
    description: 'I prioritize understanding real user needs by combining research insights with empathy.',
    icon: '👥'
  },
  {
    title: 'Data-Driven',
    description: 'Leveraging analytics and user behavior insights to create designs that drive measurable outcomes.',
    icon: '📊'
  },
  {
    title: 'Cross-Functional',
    description: 'Working closely with developers, marketers, and product managers for scalable solutions.',
    icon: '🤝'
  },
  {
    title: 'Global Mindset',
    description: 'Based in Nepal, I blend cultural understanding with globally competitive design execution.',
    icon: '🌍'
  }
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Starting as a freelancer and transitioning to a full-time professional, I'm passionate about creating meaningful, user-centered designs that drive conversions and make a real impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Profile Image and Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-full blur-xl"></div>
              
              {/* Profile card */}
              <div className="glass-card rounded-2xl p-8 glow relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-2xl font-bold text-white mr-6">
                    R
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Rahul G.</h3>
                    <p className="text-gray-400">Product Designer</p>
                    <p className="text-gray-500 text-sm">Kathmandu, Nepal</p>
                  </div>
                </div>
                
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    <span>Available for new opportunities</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    <span>6+ years of experience</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    <span>5M+ users impacted</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">My Story</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I am a Product Designer with over 6 years of experience in UI/UX design. I've had the 
                  privilege of collaborating with global brands to create user experiences that have 
                  reached and impacted more than 5 million active users worldwide.
                </p>
                <p>
                  Starting as a freelancer and transitioning to a full-time professional, I'm passionate 
                  about creating meaningful, user-centered designs that drive conversions and make a real impact. 
                  I specialize in combining research insights with empathy to solve real problems.
                </p>
                <p>
                  With hands-on experience working closely with developers, marketers, and product managers, 
                  I ensure designs are feasible, scalable, and aligned with business goals while maintaining 
                  a focus on user needs and behavior.
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-3">What I Do Best</h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'UI/UX Design',
                  'Branding & Identity',
                  'Framer Development',
                  'Design Systems',
                  'User Research',
                  'Prototyping'
                ].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass px-3 py-2 rounded-lg text-sm text-gray-300 text-center"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              viewport={{ once: true }}
              className="glass-card rounded-xl p-6 text-center glow-hover"
            >
              <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                <stat.icon size={24} className="text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-white mb-4">My Approach</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            These core principles guide my design process and interactions with clients and teams.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              viewport={{ once: true }}
              className="glass-card rounded-xl p-6 text-center glow-hover"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h4 className="text-lg font-semibold text-white mb-3">{value.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}