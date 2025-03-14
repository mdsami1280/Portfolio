import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendar, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
import { IconWrapper } from './IconWrapper';

interface Event {
  title: string;
  date: string;
  location: string;
  description: string;
  role: string;
  image: string;
  attendees: string;
  link?: string;
}

const Events: React.FC = () => {
  const events: Event[] = [
    {
      title: 'Tech Conference 2023',
      date: 'September 15-16, 2023',
      location: 'University Convention Center',
      description: 'A two-day technology conference featuring workshops, keynote speakers, and networking opportunities.',
      role: 'Lead Organizer',
      image: '/event1.jpg',
      attendees: '500+',
      link: 'https://techconf2023.com',
    },
    {
      title: 'Hackathon 2023',
      date: 'July 1-2, 2023',
      location: 'Innovation Hub',
      description: '24-hour coding competition focusing on solving real-world problems through technology.',
      role: 'Technical Coordinator',
      image: '/event2.jpg',
      attendees: '200+',
      link: 'https://hackathon2023.com',
    },
    // Add more events as needed
  ];

  return (
    <section id="events" className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="heading">Event Organization</h2>
          <p className="subheading">Events I've helped organize and coordinate</p>
        </motion.div>

        <div className="mt-16 space-y-12">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64 md:h-full">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-600">
                      <div className="mr-2">
                        <IconWrapper icon={FaCalendar} />
                      </div>
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <div className="mr-2">
                        <IconWrapper icon={FaMapMarkerAlt} />
                      </div>
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <div className="mr-2">
                        <IconWrapper icon={FaUsers} />
                      </div>
                      <span>{event.attendees} Attendees</span>
                    </div>
                    <p className="text-gray-600">{event.description}</p>
                    <div className="bg-primary/10 text-primary px-4 py-2 rounded-full inline-block">
                      {event.role}
                    </div>
                    {event.link && (
                      <div>
                        <a
                          href={event.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
                        >
                          Visit Event Page
                          <svg
                            className="w-4 h-4 ml-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events; 