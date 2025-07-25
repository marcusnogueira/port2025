import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiChevronDown } from 'react-icons/fi';
import portfolioData from '../data/portfolio.json';

const Hero = () => {
  const { personal } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number]
      }
    }
  };

  const socialLinks = [
    { icon: FiGithub, url: personal.social.github, label: 'GitHub' },
    { icon: FiLinkedin, url: personal.social.linkedin, label: 'LinkedIn' },
    { icon: FiMail, url: `mailto:${personal.email}`, label: 'Email' }
  ];

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <motion.div
        className="container mx-auto px-6 text-center z-10 py-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-16">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight mb-12">
            <motion.span 
              animate={{ 
                y: [0, -20, 0],
                color: ["hsl(var(--primary))", "hsl(var(--accent))", "hsl(var(--secondary))", "hsl(var(--primary))"]
              }}
              transition={{ 
                y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
                color: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              {personal.name}
            </motion.span>
          </h1>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="text-xl md:text-2xl lg:text-3xl text-foreground-secondary mb-4 font-light max-w-4xl mx-auto">
            {personal.headline}
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="text-lg md:text-xl text-foreground-muted mb-12 max-w-2xl mx-auto">
            {personal.tagline}
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <div className="flex justify-center space-x-6 mb-16">
            {socialLinks.map(({ icon: Icon, url, label }) => (
              <motion.a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full border border-border/30 text-foreground-muted hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            className="flex flex-col items-center text-foreground-muted hover:text-primary transition-colors duration-300 group"
            whileHover={{ y: -2 }}
            aria-label="Scroll to about section"
          >
            <span className="text-sm mb-2 font-medium">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <FiChevronDown size={24} className="group-hover:text-primary transition-colors" />
            </motion.div>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;