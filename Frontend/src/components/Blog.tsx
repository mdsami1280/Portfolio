import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaClock, FaTags } from 'react-icons/fa';
import { IconWrapper } from './IconWrapper';

interface BlogPost {
  id: string;
  title: string;
  summary: string;
  date: string;
  tags: string[];
  image: string;
  readTime: string;
  link: string;
}

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Getting Started with React and TypeScript',
      summary: 'Learn how to set up a new React project with TypeScript and understand the basics of type-safe development.',
      date: 'March 15, 2024',
      tags: ['React', 'TypeScript', 'Web Development'],
      image: '/blog1.jpg',
      readTime: '5 min read',
      link: '/blog/react-typescript',
    },
    {
      id: '2',
      title: 'Building Responsive Layouts with Tailwind CSS',
      summary: 'Explore the power of Tailwind CSS and learn how to create beautiful, responsive layouts quickly.',
      date: 'March 10, 2024',
      tags: ['CSS', 'Tailwind', 'Web Design'],
      image: '/blog2.jpg',
      readTime: '7 min read',
      link: '/blog/tailwind-layouts',
    },
    // Add more blog posts as needed
  ];

  const allTags = Array.from(new Set(blogPosts.flatMap((post) => post.tags)));

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;
    return matchesSearch && matchesTag;
  });

  return (
    <section id="blog" className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="heading">Blog</h2>
          <p className="subheading">Thoughts, tutorials and insights</p>
        </motion.div>

        {/* Search and Filter */}
        <div className="mt-12 space-y-6">
          <div className="relative max-w-xl mx-auto">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <IconWrapper icon={FaSearch} />
            </div>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 
                ${!selectedTag ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 
                  ${selectedTag === tag ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"
            >
              <a href={post.link} className="block">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <div className="mr-2">
                      <IconWrapper icon={FaClock} />
                    </div>
                    <span>{post.readTime}</span>
                    <span className="mx-2">•</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.summary}</p>
                  <div className="flex items-center space-x-2">
                    <div className="text-gray-400">
                      <IconWrapper icon={FaTags} />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-sm text-primary bg-primary/10 px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center text-gray-600 mt-12">
            No blog posts found matching your criteria.
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog; 