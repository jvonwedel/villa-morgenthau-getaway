
import { Mountains, Bike, SwimmingPool, Map } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const seasonalActivities = [
  {
    season: "Spring",
    activities: [
      "Mountain Biking",
      "Wildflower Hiking",
      "Birdwatching",
      "Rock Climbing"
    ]
  },
  {
    season: "Summer",
    activities: [
      "Swimming in Lakes",
      "Kayaking & Canoeing",
      "Fishing",
      "Trail Running"
    ]
  },
  {
    season: "Fall",
    activities: [
      "Forest Hiking",
      "Photography Tours",
      "Mountain Biking",
      "Mushroom Foraging"
    ]
  },
  {
    season: "Winter",
    activities: [
      "Cross-Country Skiing",
      "Snowshoeing",
      "Winter Photography",
      "Wildlife Tracking"
    ]
  }
];

const featuredActivities = [
  {
    icon: <Mountains className="h-8 w-8 text-villa-accent" />,
    title: "Mountain Hiking",
    description: "Explore scenic trails ranging from easy walks to challenging ascents, all within a short drive from the villa.",
    distance: "5-25 min drive"
  },
  {
    icon: <Bike className="h-8 w-8 text-villa-accent" />,
    title: "Cycling Routes",
    description: "Discover the countryside on dedicated cycling paths suitable for both casual riders and experienced cyclists.",
    distance: "Directly from villa"
  },
  {
    icon: <SwimmingPool className="h-8 w-8 text-villa-accent" />,
    title: "Water Activities",
    description: "Enjoy swimming, kayaking, and paddleboarding at nearby lakes and rivers during the warmer months.",
    distance: "15-30 min drive"
  },
  {
    icon: <Map className="h-8 w-8 text-villa-accent" />,
    title: "Adventure Tours",
    description: "Join guided excursions for rock climbing, canyoning, or paragliding with experienced local guides.",
    distance: "30-45 min drive"
  }
];

const ActivesActivities = () => {
  return (
    <section className="section-padding bg-villa-muted">
      <div className="container-custom">
        <SectionTitle subtitle="OUTDOOR ADVENTURES" centered>
          Activities For Every Season
        </SectionTitle>
        
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          No matter when you visit Villa Morgenthau, there are plenty of outdoor activities to keep you active and engaged with the natural beauty of the region.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {seasonalActivities.map((season, index) => (
            <div key={index} className="bg-white p-6 rounded-sm shadow-md">
              <h3 className="font-serif text-xl mb-4 text-center">{season.season}</h3>
              <ul className="space-y-2">
                {season.activities.map((activity, actIndex) => (
                  <li key={actIndex} className="flex items-center text-gray-700">
                    <span className="text-villa-accent mr-2">•</span>
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <SectionTitle subtitle="FEATURED EXPERIENCES" centered>
          Popular Activities Nearby
        </SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {featuredActivities.map((activity, index) => (
            <div key={index} className="bg-white p-6 rounded-sm shadow-md flex flex-col">
              <div className="mb-4">
                {activity.icon}
              </div>
              <h3 className="font-medium text-lg mb-2">{activity.title}</h3>
              <p className="text-gray-600 text-sm mb-4 flex-grow">{activity.description}</p>
              <div className="text-xs font-medium text-villa-accent mt-auto">
                {activity.distance}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="font-serif text-2xl mb-4">Equipment & Recommendations</h3>
          <p className="text-gray-700 max-w-3xl mx-auto mb-6">
            We're happy to provide recommendations for local guides, equipment rental, and the best times to enjoy specific activities. Some basic equipment is available for guests at the villa, including:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="bg-white p-4 rounded-sm">
              <h4 className="font-medium mb-2">Available at Villa</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>Mountain Bikes (2 adult)</li>
                <li>Hiking Poles</li>
                <li>Day Backpacks</li>
                <li>Maps & Guidebooks</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-sm">
              <h4 className="font-medium mb-2">Rentals Nearby</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>Kayaks & Paddleboards</li>
                <li>Specialized Cycling Gear</li>
                <li>Climbing Equipment</li>
                <li>Winter Sports Equipment</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-sm">
              <h4 className="font-medium mb-2">Guided Experiences</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>Forest Foraging Tours</li>
                <li>Wildlife Photography</li>
                <li>Rock Climbing Lessons</li>
                <li>Mountain Biking Guides</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivesActivities;
