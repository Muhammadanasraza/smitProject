

import React from 'react';

const cardData = [
  {
    id: 1,
    icon: "🎓", // Graduation cap for education
    title: "Student",
  },
  {
    id: 2,
    icon: "💻", // Laptop for technology
    title: "Technology",
  },
  {
    id: 3,
    icon: "🖍️", // Crayon for graphic design
    title: "Graphic Design",
  },
  {
    id: 4,
    icon: "🌐", // Globe for web development
    title: "Web Development",
  },
  {
    id: 5,
    icon: "🖌️", // Paintbrush for UI/UX design
    title: "UI/UX Design",
  },
  {
    id: 6,
    icon: "💰", // Money bag for affiliate marketing
    title: "Affiliate Marketing",
  },
  {
    id: 7,
    icon: "🔧", // Wrench for mobile repairing
    title: "Mobile Repairing",
  },
  {
    id: 8,
    icon: "📈", // Chart for digital marketing
    title: "Digital Marketing",
  },
];

const Student = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10 mx-10">
      {cardData.map((card) => (
        <div
          key={card.id}
          className="flex flex-col w-40 h-40 items-center justify-center bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
        >
          <div className="text-5xl mb-4">{card.icon}</div> {/* Icon size increased */}
          <h2 className="text-xl font-bold">{card.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Student;
