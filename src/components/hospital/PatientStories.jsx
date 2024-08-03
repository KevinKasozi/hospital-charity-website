import React from 'react';

const PatientStories = () => {
  const stories = [
    {
      name: "John Doe",
      image: "img/patients/john_doe.png",
      story: "Thanks to the incredible care at GOSH, I am now healthy and happy.",
    },
    {
      name: "Jane Smith",
      image: "img/patients/jane_smith.png",
      story: "The doctors and nurses at GOSH saved my life. I'll be forever grateful.",
    },
    {
      name: "Sam Brown",
      image: "img/patients/sam_brown.png",
      story: "The treatment and support I received at GOSH were exceptional.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Patient Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
              <img src={story.image} alt={story.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">{story.name}</h3>
              <p className="text-gray-600">{story.story}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PatientStories;
