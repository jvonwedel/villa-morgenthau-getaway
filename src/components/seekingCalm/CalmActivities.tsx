
import { Sun, Coffee, Book, Moon } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const activities = [
  {
    icon: <Sun className="h-8 w-8 text-villa-accent" />,
    title: "Morning Meditation",
    description: "Start your day with tranquility in our garden space, perfect for meditation or gentle yoga as the sun rises."
  },
  {
    icon: <Coffee className="h-8 w-8 text-villa-accent" />,
    title: "Mindful Moments",
    description: "Enjoy your coffee or tea on the terrace, taking in the peaceful surroundings and connecting with nature."
  },
  {
    icon: <Book className="h-8 w-8 text-villa-accent" />,
    title: "Reading Retreat",
    description: "Curl up with a good book in our cozy reading nook or under the shade of trees in the garden."
  },
  {
    icon: <Moon className="h-8 w-8 text-villa-accent" />,
    title: "Evening Unwinding",
    description: "End your day with a relaxing bath or star-gazing from the terrace, embracing the quiet of the countryside."
  }
];

const CalmActivities = () => {
  return (
    <section className="section-padding bg-villa-muted">
      <div className="container-custom">
        <SectionTitle subtitle="WELLNESS ACTIVITIES" centered>
          Nurture Your Wellbeing
        </SectionTitle>
        
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Discover activities and spaces at Villa Morgenthau designed to promote relaxation, mindfulness, and wellbeing.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="bg-white p-6 rounded-sm shadow-md flex flex-col items-center text-center">
              <div className="mb-4">
                {activity.icon}
              </div>
              <h3 className="font-medium text-lg mb-3">{activity.title}</h3>
              <p className="text-gray-600 text-sm">{activity.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-sm shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h3 className="font-serif text-2xl mb-4">Local Wellness Experiences</h3>
              <p className="text-gray-700 mb-4">
                Enhance your stay with these calming experiences available in the area:
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-villa-accent mr-2">•</span>
                  <div>
                    <span className="font-medium">Forest Bathing</span>
                    <p className="text-sm text-gray-600">Guided walks through ancient forests focusing on mindfulness and connection with nature.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-villa-accent mr-2">•</span>
                  <div>
                    <span className="font-medium">Thermal Springs</span>
                    <p className="text-sm text-gray-600">Visit natural hot springs known for their therapeutic properties, just a 30-minute drive away.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-villa-accent mr-2">•</span>
                  <div>
                    <span className="font-medium">Private Yoga Sessions</span>
                    <p className="text-sm text-gray-600">Arrange for a certified instructor to lead a personalized session at the villa.</p>
                  </div>
                </li>
              </ul>
              
              <p className="text-sm text-gray-500">
                Note: Some activities may require advance booking. Please ask us for recommendations based on the season of your stay.
              </p>
            </div>
            
            <div>
              <img 
                src="/placeholder.svg" 
                alt="Wellness Experience" 
                className="w-full h-full object-cover rounded-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalmActivities;
