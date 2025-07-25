import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiMapPin, FiCalendar, FiArrowRight } from 'react-icons/fi';
import portfolioData from '../data/portfolio.json';

const Experience = () => {
  const { experience } = portfolioData;
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

  return (
    <section id="experience" className="py-20 lg:py-32 relative">
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
              Career <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
              My professional journey as a quantitative researcher and creative technologist.
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-6" />
          </motion.div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={`${job.title}-${job.organization}`}
                variants={itemVariants}
                className="group"
              >
                <div className="glass-card p-8 rounded-xl hover-glow">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Timeline Indicator */}
                    <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-2 lg:w-48 flex-shrink-0">
                      <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg flex-shrink-0" />
                      <div className="text-sm text-foreground-muted flex items-center gap-1">
                        <FiCalendar size={14} />
                        {job.dates}
                      </div>
                    </div>

                    {/* Job Content */}
                    <div className="flex-1 space-y-4">
                      {/* Header */}
                      <div>
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-gradient transition-all duration-300">
                          {job.title}
                        </h3>
                        <h4 className="text-lg text-primary font-semibold">
                          {job.organization}
                        </h4>
                        <div className="flex items-center gap-1 text-foreground-muted mt-1">
                          <FiMapPin size={14} />
                          {job.location}
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <div className="space-y-3">
                        {job.bullets.map((bullet, bulletIndex) => (
                          <div
                            key={bulletIndex}
                            className="flex items-start gap-3 text-foreground-secondary"
                          >
                            <FiArrowRight 
                              size={16} 
                              className="text-primary mt-0.5 flex-shrink-0" 
                            />
                            <span className="leading-relaxed">{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-40 -translate-x-1/2" />
    </section>
  );
};

export default Experience;