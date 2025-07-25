import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiGithub, FiExternalLink, FiStar } from 'react-icons/fi';
import portfolioData from '../data/portfolio.json';

const Projects = () => {
  const { projects } = portfolioData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number]
      }
    }
  };

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Research & <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
              Data-driven projects exploring machine learning, causal inference, and economic analysis.
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-6" />
          </motion.div>

          {/* Research Section */}
          {featuredProjects.length > 0 && (
            <motion.div variants={itemVariants} className="mb-20">
              <h3 className="text-3xl font-bold text-center mb-12">
                <span className="text-gradient">Research</span>
              </h3>

          {/* Featured Projects */}
              <div className="space-y-12">
                {featuredProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    variants={itemVariants}
                    className="group"
                  >
                    <div className="glass-card p-8 rounded-xl hover-glow">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-3xl font-bold text-foreground mb-3 group-hover:text-gradient transition-all duration-300">
                            {project.title}
                          </h3>
                          <div className="bg-primary/5 border border-primary/10 p-6 rounded-xl">
                            <p className="text-foreground-secondary leading-relaxed">
                              {project.description}
                            </p>
                          </div>
                        </div>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-sm bg-primary/10 text-primary border border-primary/20 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Links */}
                        <div className="flex space-x-4">
                          {project.github && (
                            <motion.a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-2 text-foreground-muted hover:text-primary transition-colors link-hover"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <FiGithub size={20} />
                              <span>Code</span>
                            </motion.a>
                          )}
                          {project.demo && (
                            <motion.a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-2 text-foreground-muted hover:text-primary transition-colors link-hover"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <FiExternalLink size={20} />
                              <span>Live Demo</span>
                            </motion.a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold text-center mb-12">
                <span className="text-gradient">Projects</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {otherProjects.map((project) => (
                  <motion.div
                    key={project.title}
                    className="glass-card p-6 rounded-xl hover-glow group"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-xl font-semibold text-foreground group-hover:text-gradient transition-all duration-300">
                        {project.title}
                      </h4>
                      <div className="flex space-x-2">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground-muted hover:text-primary transition-colors"
                          >
                            <FiGithub size={18} />
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground-muted hover:text-primary transition-colors"
                          >
                            <FiExternalLink size={18} />
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="text-foreground-secondary mb-4">
                      {project.summary}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-primary/10 text-primary border border-primary/20 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-40 translate-x-1/2" />
    </section>
  );
};

export default Projects;
