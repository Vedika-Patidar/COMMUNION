import React, { useState } from "react";

const EventsSection = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Christmas Charity Drive",
      date: "Saturday, March 15, 2025",
      time: "5:30 AM IST",
      tag: "DONATION",
      category: "Charity",
      description: "Join us to spread love and donate to the less fortunate.",
      image:
        "https://cdn.pixabay.com/photo/2021/12/16/19/07/family-6875069_640.jpg",
    },
    {
      id: 2,
      title: "Eid-ul-Fitr",
      date: "Sunday, March 30, 2025",
      time: "5:30 AM IST",
      tag: "FREE",
      category: "Religious",
      description:
        "Celebrate the festival of Eid with joy and community spirit.",
      image:
        "https://img.freepik.com/free-vector/eid-mubarak-festival-decorative-greeting-background_1017-18442.jpg?ga=GA1.1.1229161352.1723810304&semt=ais_hybrid",
    },
    {
      id: 3,
      title: "Holi Party",
      date: "Friday, March 14, 2025",
      time: "11:30 AM IST",
      tag: "FREE Party",
      category: "Festival",
      description:
        "Join us for a vibrant Holi Party with music, colors, rain dance, and delicious festive treats! 🌈✨ Celebrate joy, laughter, and endless fun with friends and family! 🎉💃",
      image:
        "https://cdn.pixabay.com/photo/2023/03/07/08/07/ai-generated-7835222_640.jpg",
    },
  ]);

  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    time: "",
    tag: "",
    category: "",
    description: "",
    image: "",
  });

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [filter, setFilter] = useState("All");

  // Handle input changes
  const handleChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  // Add new event
  const addEvent = () => {
    if (
      newEvent.title &&
      newEvent.date &&
      newEvent.time &&
      newEvent.image &&
      newEvent.description
    ) {
      setEvents([...events, { id: events.length + 1, ...newEvent }]);
      alert("Event Added Successfully")
      setNewEvent({
        title: "",
        date: "",
        time: "",
        tag: "",
        category: "",
        description: "",
        image: "",
      });
    }
  };

  // Filter events by category
  const filteredEvents =
    filter === "All"
      ? events
      : events.filter((event) => event.category === filter);

  return (
    <section className="bg-gray-900 text-white py-12 px- -mt-20">
      <h2 className="text-4xl font-bold text-center mb-8 text-emerald-400">
        Upcoming Events
      </h2>

      {/* Filter Section */}
      <div className="flex justify-center gap-4 mb-6">
        {["All", "Charity", "Religious", "Festival"].map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full ${
              filter === cat
                ? "bg-emerald-500 text-white"
                : "bg-gray-700 text-gray-300"
            }`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="bg-gray-800 p-5 rounded-xl shadow-lg transition transform hover:scale-105 w-full max-w-sm"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <span className="px-3 py-1 text-sm font-semibold bg-emerald-500 rounded-full">
              {event.tag}
            </span>
            <h3 className="text-2xl font-semibold mt-3 text-center">
              {event.title}
            </h3>
            <p className="text-gray-300 text-center">{event.date}</p>
            <p className="text-gray-300 text-center">{event.time}</p>
            <button
              className="mt-4 bg-emerald-500 text-white py-2 px-5 rounded-lg hover:bg-emerald-600 transition block mx-auto"
              onClick={() => setSelectedEvent(event)}
            >
              Event Details
            </button>
          </div>
        ))}
      </div>

      {/* Add New Event Section */}
      <div className="mt-12 bg-gray-800 p-8 rounded-xl shadow-lg max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6">
        {/* Left Side Image */}
        <div className="md:w-1/2">
          <img
            src="https://cdn.pixabay.com/photo/2025/02/20/09/57/top-event-management-9419524_640.jpg"
            alt="Event Illustration"
            className="w-full rounded-lg shadow-lg transition transform hover:scale-105"
          />
        </div>

        {/* Right Side: Add Event Form */}
        <div className="w-full md:w-1/2 px-4">
          <h3 className="text-2xl font-bold text-center text-emerald-400 mb-5">
            Add New Event
          </h3>
          <div className="grid gap-4">
            <input
              type="text"
              name="title"
              placeholder="Event Title"
              value={newEvent.title}
              onChange={handleChange}
              className="p-3 w-full rounded-lg bg-gray-700 text-white"
            />
            <input
              type="text"
              name="date"
              placeholder="Event Date"
              value={newEvent.date}
              onChange={handleChange}
              className="p-3 w-full rounded-lg bg-gray-700 text-white"
            />
            <input
              type="text"
              name="time"
              placeholder="Event Time"
              value={newEvent.time}
              onChange={handleChange}
              className="p-3 w-full rounded-lg bg-gray-700 text-white"
            />
            <input
              type="text"
              name="tag"
              placeholder="Tag (e.g., Free, Donation)"
              value={newEvent.tag}
              onChange={handleChange}
              className="p-3 w-full rounded-lg bg-gray-700 text-white"
            />
            <input
              type="text"
              name="category"
              placeholder="Category (e.g., Religious, Charity)"
              value={newEvent.category}
              onChange={handleChange}
              className="p-3 w-full rounded-lg bg-gray-700 text-white"
            />
            <textarea
              name="description"
              placeholder="Event Description"
              value={newEvent.description}
              onChange={handleChange}
              className="p-3 w-full rounded-lg bg-gray-700 text-white h-20"
            ></textarea>
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={newEvent.image}
              onChange={handleChange}
              className="p-3 w-full rounded-lg bg-gray-700 text-white"
            />
            <button
              onClick={addEvent}
              className="bg-emerald-500 text-white py-3 w-full rounded-lg hover:bg-emerald-600 transition"
            >
              Add Event
            </button>
          </div>
        </div>
      </div>

      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 p-6 rounded-lg max-w-md w-full shadow-lg">
            <img
              src={selectedEvent.image}
              alt={selectedEvent.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-emerald-400">
              {selectedEvent.title}
            </h3>
            <p className="text-gray-300 mt-2">
              {selectedEvent.date} | {selectedEvent.time}
            </p>
            <p className="mt-3">{selectedEvent.description}</p>
            <button
              className="mt-4 bg-red-500 text-white py-2 px-5 rounded-lg hover:bg-red-600 transition"
              onClick={() => setSelectedEvent(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default EventsSection;
