import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import portfolioData from '../data/portfolio.json';

const Contact = () => {
  const { personal } = portfolioData;
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

  return (
    <section id="contact" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
              Interested in collaborating or have a question? I'd love to hear from you. 
              Let's create something amazing together.
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-6" />
          </motion.div>

          {/* Contact Content */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="glass-card p-8 rounded-2xl text-left">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Get in Touch
                </h3>
                
                <div className="space-y-6">
                  <motion.a
                    href={`mailto:${personal.email}`}
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-card-hover transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <FiMail className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-foreground-muted">Email</p>
                      <p className="text-foreground font-medium">{personal.email}</p>
                    </div>
                  </motion.a>

                  <div className="flex items-center space-x-4 p-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <FiMapPin className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-foreground-muted">Location</p>
                      <p className="text-foreground font-medium">{personal.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Ready to Work Together?
                </h3>
                <p className="text-foreground-secondary mb-8 leading-relaxed">
                  Whether you're looking to build a new project, improve an existing one, 
                  or just want to say hello, I'm always open to discussing new opportunities 
                  and interesting challenges.
                </p>
                
                <motion.a
                  href={`mailto:${personal.email}?subject=Let's work together!`}
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-primary text-primary-foreground font-medium rounded-lg hover-glow transition-all duration-300 w-full justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FiSend size={18} />
                  <span>Send Message</span>
                </motion.a>
              </div>

              {/* Quick Links */}
              <motion.div variants={itemVariants}>
                <p className="text-foreground-muted mb-4">Or find me on</p>
                <div className="flex justify-center space-x-4">
                  {Object.entries(personal.social).map(([platform, url]) => (
                    <motion.a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground-muted hover:text-primary transition-colors link-hover capitalize"
                      whileHover={{ y: -2 }}
                    >
                      {platform}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div variants={itemVariants} className="mt-20 pt-8 border-t border-border/30">
            <p className="text-foreground-muted">
              © 2025 {personal.name}. Built with React, TypeScript, and Framer Motion.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-60 -translate-x-1/2 translate-y-1/2" />
    </section>
  );
};

export default Contact;