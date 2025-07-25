import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import portfolioData from '../data/portfolio.json';

const About = () => {
  const { about } = portfolioData;
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number]
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number]
      }
    }
  };

  return (
    <section id="about" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Bio Section */}
            <motion.div variants={itemVariants}>
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
                  Building digital experiences that matter
                </h3>
                <p className="text-lg text-foreground-secondary leading-relaxed">
                  {about.bio}
                </p>
                <div className="pt-6">
                  <motion.a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gradient-primary text-primary-foreground font-medium rounded-lg hover-glow transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Download Resume
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div variants={itemVariants}>
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
                  Technologies & Skills
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {about.skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      variants={skillVariants}
                      transition={{ delay: index * 0.1 }}
                      className="group"
                    >
                      <div className="bg-card hover:bg-card-hover border border-border/30 rounded-lg p-4 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-elegant">
                        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                          {skill}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl opacity-60 -translate-y-1/2 -translate-x-1/2" />
    </section>
  );
};

export default About;