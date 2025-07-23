import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Palette, 
  Smartphone, 
  Globe, 
  Zap,
  Brush,
  Layout,
  Users,
  Target
} from 'lucide-react'

const skillCategories = [
  {
    title: 'UI/UX Design',
    icon: Layout,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'User Interface Design', level: 95 },
      { name: 'User Experience Design', level: 92 },
      { name: 'Wireframing & Prototyping', level: 90 },
      { name: 'Design Systems', level: 88 },
      { name: 'Responsive Design', level: 94 },
      { name: 'Interactive Design', level: 87 }
    ]
  },
  {
    title: 'Branding & Identity',
    icon: Brush,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Logo Design', level: 93 },
      { name: 'Brand Strategy', level: 88 },
      { name: 'Visual Identity', level: 91 },
      { name: 'Brand Guidelines', level: 89 },
      { name: 'Color Theory', level: 92 },
      { name: 'Typography', level: 90 }
    ]
  },
  {
    title: 'Mobile & Web Design',
    icon: Smartphone,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Mobile App Design', level: 94 },
      { name: 'Web Design', level: 92 },
      { name: 'Cross-platform Design', level: 88 },
      { name: 'Progressive Web Apps', level: 85 },
      { name: 'Accessibility Design', level: 87 },
      { name: 'Performance Optimization', level: 83 }
    ]
  },
  {
    title: 'Development & Tools',
    icon: Zap,
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'Framer Development', level: 90 },
      { name: 'HTML/CSS', level: 88 },
      { name: 'JavaScript', level: 82 },
      { name: 'React Basics', level: 78 },
      { name: 'Animation & Motion', level: 92 },
      { name: 'SEO Optimization', level: 85 }
    ]
  }
]

const tools = [
  { name: 'Figma', icon: '🎨', category: 'Design Tool' },
  { name: 'Framer', icon: '⚡', category: 'Development' },
  { name: 'Adobe Creative Suite', icon: '🎭', category: 'Design Suite' },
  { name: 'Sketch', icon: '✏️', category: 'UI Design' },
  { name: 'Principle', icon: '🎬', category: 'Prototyping' },
  { name: 'InVision', icon: '👁️', category: 'Collaboration' },
  { name: 'Miro', icon: '🧠', category: 'Ideation' },
  { name: 'Notion', icon: '📝', category: 'Documentation' }
]

const SkillsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5
      }
    })
  }

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="gradient-text">What I'm Good At</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            A comprehensive overview of my design skills and the tools I use to create meaningful digital experiences.
          </motion.p>
        </motion.div>

        {/* Skills Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20"
        >
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-card rounded-2xl p-8 glow-hover"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mr-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-gray-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                          variants={skillBarVariants}
                          initial="hidden"
                          animate={isInView ? "visible" : "hidden"}
                          custom={skill.level}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-20"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-12"
          >
            <span className="gradient-text">Tools & Software</span>
          </motion.h3>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="glass-card rounded-xl p-6 text-center glow-hover cursor-pointer"
              >
                <div className="text-3xl mb-3">{tool.icon}</div>
                <h4 className="text-white font-semibold mb-1">{tool.name}</h4>
                <p className="text-gray-400 text-sm">{tool.category}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Services & Specializations */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-12"
          >
            <span className="gradient-text">Services & Specializations</span>
          </motion.h3>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: 'UI/UX Design',
                description: 'Craft intuitive interfaces and elevate user experiences',
                icon: Layout,
                color: 'from-blue-500 to-cyan-500',
                services: ['Mobile & Web App Design', 'Design Systems & Style Guides', 'Responsive Design', 'Wireframing & User Flows', 'Interactive Prototyping']
              },
              {
                title: 'Branding & Identity',
                description: 'Elevate your brand with a timeless identity that resonates',
                icon: Brush,
                color: 'from-purple-500 to-pink-500',
                services: ['Logo Design', 'Brand Strategy', 'Visual Identity', 'Brand Guidelines', 'Content Marketing']
              },
              {
                title: 'Framer Development',
                description: 'Build seamless, dynamic websites with Framer expertise',
                icon: Zap,
                color: 'from-orange-500 to-red-500',
                services: ['Responsive Web Development', 'SEO & Performance Optimization', 'Component-Based Design Systems', 'CMS Integration', 'Framer Motion Animations']
              }
            ].map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-card rounded-2xl p-6 text-center glow-hover"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{service.title}</h4>
                  <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                  <div className="space-y-1">
                    {service.services.map((item, idx) => (
                      <div key={idx} className="text-xs text-gray-400 bg-white/5 rounded-full px-3 py-1 inline-block mr-1 mb-1">
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating skill icons */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-indigo-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default SkillsSection