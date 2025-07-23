import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Github, Play, Filter, X } from 'lucide-react'

const ProjectsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const categories = ['All', 'Mobile App', 'Website', 'Branding', 'UI/UX']

  const projects = [
    {
      id: 1,
      title: 'Committed: A Productivity App for Daily Tracking',
      category: 'Mobile App',
      description: 'A comprehensive productivity app designed to help users track daily habits, set goals, and maintain consistency in their personal development journey.',
      longDescription: 'Committed is a beautifully designed productivity app that focuses on habit tracking and goal achievement. The app features an intuitive interface with progress visualization, streak tracking, and motivational elements to keep users engaged. Built with user-centered design principles, it provides a seamless experience for daily habit management.',
      image: 'https://framerusercontent.com/images/fzZEuu8ePRYUsRe4FNEFkkc7WY.png',
      technologies: ['UI/UX Design', 'Figma', 'Prototyping', 'User Research', 'Mobile Design', 'Design Systems'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'WorkitPT: A Seamless Fitness Experience',
      category: 'Mobile App',
      description: 'A comprehensive fitness application designed to provide users with personalized workout plans, progress tracking, and seamless fitness experience.',
      longDescription: 'WorkitPT is a fitness application that combines beautiful design with powerful functionality. The app provides personalized workout plans, progress tracking, and social features to keep users motivated. The design focuses on clarity, motivation, and ease of use, making fitness accessible to everyone.',
      image: 'https://framerusercontent.com/images/gVhEXySnFiHgWD1REzIdyHtknBU.png',
      technologies: ['Mobile UI/UX', 'Figma', 'Prototyping', 'User Journey', 'Fitness App Design', 'Interactive Design'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 3,
      title: 'Papabo Website',
      category: 'Website',
      description: 'A modern, responsive website design for Papabo, focusing on clean aesthetics, user experience, and brand representation.',
      longDescription: 'The Papabo website project involved creating a comprehensive digital presence that reflects the brand\'s values and mission. The design emphasizes clean typography, strategic use of whitespace, and intuitive navigation to create an engaging user experience that drives conversions.',
      image: 'https://framerusercontent.com/images/NxThLIvim1SSzHaFnq8fB7hbsI.png',
      technologies: ['Web Design', 'Responsive Design', 'Framer', 'Brand Integration', 'UX Strategy', 'Visual Design'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      color: 'from-purple-500 to-violet-500'
    },
    {
      id: 4,
      title: 'Perficient Partners',
      category: 'Website',
      description: 'A professional corporate website design for Perficient Partners, emphasizing trust, expertise, and business partnerships.',
      longDescription: 'Perficient Partners website was designed to establish credibility and showcase the company\'s expertise in business consulting. The design features a professional layout with strategic content placement, clear call-to-actions, and responsive design that works seamlessly across all devices.',
      image: 'https://framerusercontent.com/images/zBdlbEPnjOAr3Je4Qbdkpj5s.png',
      technologies: ['Corporate Design', 'Web Development', 'Responsive Layout', 'Content Strategy', 'Professional Branding', 'SEO Optimization'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 5,
      title: 'Brand Identity Design - Papabo',
      category: 'Branding',
      description: 'Complete brand identity design including logo, color palette, typography, and brand guidelines for Papabo.',
      longDescription: 'Developed a comprehensive brand identity for Papabo that reflects their innovative approach and professional values. The project included logo design, color palette selection, typography choices, and detailed brand guidelines to ensure consistent application across all touchpoints.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      technologies: ['Brand Strategy', 'Logo Design', 'Visual Identity', 'Brand Guidelines', 'Color Theory', 'Typography'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      color: 'from-orange-500 to-amber-500'
    },
    {
      id: 6,
      title: 'UI/UX Design System',
      category: 'UI/UX',
      description: 'A comprehensive design system created for multiple projects, ensuring consistency and scalability across digital products.',
      longDescription: 'Created a robust design system that serves as the foundation for multiple digital products. The system includes reusable components, design tokens, interaction patterns, and detailed documentation to ensure consistency and efficiency in the design and development process.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
      technologies: ['Design Systems', 'Component Library', 'Figma', 'Design Tokens', 'Documentation', 'Scalable Design'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      color: 'from-indigo-500 to-purple-500'
    }
  ]

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
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

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Look what I made!
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A showcase of my recent design work, featuring mobile apps, websites, 
              and brand identities that solve real problems and delight users.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'glass-button'
                    : 'glass text-gray-400 hover:text-white hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Filter className="w-4 h-4 inline mr-2" />
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                variants={itemVariants}
                className="glass rounded-2xl overflow-hidden glass-hover group cursor-pointer"
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => setSelectedProject(project.id)}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-xs font-medium text-white">
                      Featured
                    </div>
                  )}

                  {/* Overlay Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.liveUrl}
                      className="glass rounded-full p-3 text-white hover:bg-white/20"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                    <motion.button
                      className="glass rounded-full p-3 text-white hover:bg-white/20"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedProject(project.id)
                      }}
                    >
                      <Play className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:gradient-text transition-all duration-300">
                      {project.title}
                    </h3>
                    <span className={`px-2 py-1 rounded-full text-xs bg-gradient-to-r ${project.color} bg-opacity-20 text-white`}>
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-white/10 rounded-md text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-white/10 rounded-md text-xs text-gray-300">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View All Projects Button */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <motion.button
              className="glass-button flex items-center space-x-2 mx-auto"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-5 h-5" />
              <span>View All Projects</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="glass rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const project = projects.find(p => p.id === selectedProject)
              if (!project) return null

              return (
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-3xl font-bold gradient-text">{project.title}</h3>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="glass rounded-full p-2 hover:bg-white/20"
                    >
                      <X className="w-6 h-6 text-white" />
                    </button>
                  </div>

                  {/* Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover rounded-xl mb-6"
                  />

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.longDescription}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Skills & Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.liveUrl}
                      className="glass-button flex items-center space-x-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>View Case Study</span>
                    </motion.a>
                  </div>
                </div>
              )
            })()}
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export default ProjectsSection