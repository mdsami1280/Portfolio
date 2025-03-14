import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const timeline = [
    {
      year: '2023',
      title: 'Your Most Recent Experience',
      description: 'Description of your most recent role or achievement',
    },
    {
      year: '2022',
      title: 'Previous Experience',
      description: 'Description of your previous role or education',
    },
    {
      year: '2021',
      title: 'Earlier Experience',
      description: 'Description of earlier experience or education',
    },
  ];

  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading text-center">About Me</h2>
          <p className="subheading text-center">Get to know me better</p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Profile Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <img
              src="https://asset.cloudinary.com//dj7n2t7nf//c43e567955009f10ed21d1fabbf476e6"
              alt="Your Name"
              className="w-64 h-64 rounded-full mx-auto lg:mx-0 object-cover shadow-lg"
            />
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Md Samiullah</h3>
              <p className="text-primary font-medium">Data Scientist</p>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Write a compelling bio here that highlights your passion for technology,
              your journey in software development, and what drives you. Include your
              key interests and what you bring to the table as a developer.
            </p>
            <div className="flex gap-4">
              <a
                href="/your-resume.pdf"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-primary">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1" />
                <div className="mb-1 text-sm text-primary font-semibold">{item.year}</div>
                <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 