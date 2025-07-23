import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin, ExternalLink, Award, Users, Code2 } from 'lucide-react'

const ExperienceSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      location: 'Mumbai, India',
      period: '2022 - Present',
      type: 'Full-time',
      description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting solutions for enterprise clients.',
      achievements: [
        'Increased application performance by 40% through optimization',
        'Led a team of 5 developers on multiple projects',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Architected microservices handling 1M+ daily requests'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'MongoDB', 'TypeScript', 'Docker'],
      icon: Code2,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      location: 'Bangalore, India',
      period: '2021 - 2022',
      type: 'Full-time',
      description: 'Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to create responsive and user-friendly interfaces.',
      achievements: [
        'Built 15+ responsive web applications',
        'Reduced bug reports by 35% through comprehensive testing',
        'Integrated third-party APIs and payment gateways',
        'Mentored 3 junior developers'
      ],
      technologies: ['React', 'Express.js', 'PostgreSQL', 'JavaScript', 'CSS3', 'Git'],
      icon: Users,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      location: 'Delhi, India',
      period: '2020 - 2021',
      type: 'Full-time',
      description: 'Focused on creating engaging user interfaces and improving user experience. Worked closely with UX designers to implement pixel-perfect designs.',
      achievements: [
        'Improved user engagement by 50% through UI/UX enhancements',
        'Developed reusable component library',
        'Optimized website loading speed by 45%',
        'Implemented responsive design for mobile-first approach'
      ],
      technologies: ['React', 'JavaScript', 'SASS', 'Figma', 'Webpack', 'Jest'],
      icon: Award,
      color: 'from-purple-500 to-violet-500'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Work Experience
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              My professional journey building innovative solutions and leading development teams 
              across various industries and technologies.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 transform md:-translate-x-1/2"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => {
                const Icon = exp.icon
                const isEven = index % 2 === 0

                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className={`relative flex items-center ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    } flex-col md:flex-row`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transform md:-translate-x-1/2 z-10 border-4 border-background"></div>
                    
                    {/* Icon */}
                    <motion.div
                      className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1 z-20"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center glass`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </motion.div>

                    {/* Content */}
                    <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-12' : 'md:pl-12'} ml-16 md:ml-0`}>
                      <motion.div
                        className="glass rounded-2xl p-8 glass-hover"
                        whileHover={{ scale: 1.02, y: -5 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Header */}
                        <div className="mb-6">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${exp.color} bg-opacity-20 text-white`}>
                              {exp.type}
                            </span>
                          </div>
                          <div className="flex items-center text-indigo-400 font-semibold mb-2">
                            <span>{exp.company}</span>
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </div>
                          <div className="flex items-center text-gray-400 text-sm space-x-4">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Achievements */}
                        <div className="mb-6">
                          <h4 className="text-white font-semibold mb-3">Key Achievements:</h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ delay: 0.5 + index * 0.2 + i * 0.1 }}
                                className="flex items-start text-gray-300 text-sm"
                              >
                                <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span>{achievement}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, i) => (
                              <motion.span
                                key={tech}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                                transition={{ delay: 0.8 + index * 0.2 + i * 0.05 }}
                                className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/20"
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Spacer for the other side */}
                    <div className="hidden md:block w-5/12"></div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold gradient-text mb-4">
                Let's Work Together
              </h3>
              <p className="text-gray-400 mb-6">
                I'm always open to discussing new opportunities and exciting projects. 
                Let's create something amazing together!
              </p>
              <motion.button
                className="glass-button flex items-center space-x-2 mx-auto"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.getElementById('contact')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                <span>Get In Touch</span>
                <ExternalLink className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ExperienceSection