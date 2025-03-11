import React from 'react'
import { motion } from 'framer-motion';
import EventsSection from './EventsSection';
function Events() {
  return (
    <div>
      <section className="relative  text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
        
          <motion.h1
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Discover Upcoming 
            <span className="text-gray-200"> Faith Events</span>
          </motion.h1>

          <motion.p
            className="text-lg text-gray-100 max-w-2xl mx-auto mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Stay connected with our vibrant community through live worship
            sessions, spiritual retreats, and faith-based gatherings.
          </motion.p>

          
        </div>
      </section>

      <EventsSection/>
    </div>
  );
}

export default Events
