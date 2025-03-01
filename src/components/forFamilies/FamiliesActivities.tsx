import { Smile, Trees, Cookie, Star } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const familySpaces = [
  {
    name: "Spacious Living Room",
    description: "Comfortable seating for the whole family with entertainment options."
  },
  {
    name: "Fully Equipped Kitchen",
    description: "Perfect for preparing family meals with all necessary appliances."
  },
  {
    name: "Private Garden",
    description: "Safe, enclosed outdoor space for children to play and explore."
  },
  {
    name: "Family Dining Area",
    description: "Indoor and outdoor dining spaces that accommodate everyone."
  }
];

const familyActivities = [
  {
    icon: <Smile className="h-8 w-8 text-villa-accent" />,
    title: "Kid-Friendly Fun",
    description: "Activities at the villa include board games, outdoor games, and a selection of books and toys for different ages.",
    suitable: "All ages"
  },
  {
    icon: <Trees className="h-8 w-8 text-villa-accent" />,
    title: "Outdoor Adventures",
    description: "Easy hiking trails, picnic spots, and nature observation points perfect for family exploration.",
    suitable: "Ages 3+"
  },
  {
    icon: <Cookie className="h-8 w-8 text-villa-accent" />,
    title: "Local Experiences",
    description: "Visit nearby farms for fruit picking, animal watching, and authentic local food experiences.",
    suitable: "All ages"
  },
  {
    icon: <Star className="h-8 w-8 text-villa-accent" />,
    title: "Special Attractions",
    description: "Family-friendly museums, adventure parks, and cultural sites within easy driving distance.",
    suitable: "Ages 5+"
  }
];

const FamiliesActivities = () => {
  return (
    <section className="section-padding bg-villa-muted">
      <div className="container-custom">
        <SectionTitle subtitle="FAMILY-FRIENDLY AMENITIES" centered>
          Designed With Families in Mind
        </SectionTitle>
        
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Villa Morgenthau offers spaces and amenities that cater to families, ensuring a comfortable and enjoyable stay for guests of all ages.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <h3 className="font-serif text-xl mb-6">Family Spaces at the Villa</h3>
            <ul className="space-y-4">
              {familySpaces.map((space, index) => (
                <li key={index} className="bg-white p-4 rounded-sm shadow-md">
                  <h4 className="font-medium mb-1">{space.name}</h4>
                  <p className="text-sm text-gray-600">{space.description}</p>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-xl mb-6">Family Conveniences</h3>
            <div className="bg-white p-6 rounded-sm shadow-md h-full">
              <h4 className="font-medium mb-4">Available Upon Request:</h4>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <span className="text-villa-accent mr-2">•</span>
                  <span>High chairs and booster seats</span>
                </li>
                <li className="flex items-center">
                  <span className="text-villa-accent mr-2">•</span>
                  <span>Cribs and toddler beds</span>
                </li>
                <li className="flex items-center">
                  <span className="text-villa-accent mr-2">•</span>
                  <span>Baby monitors</span>
                </li>
                <li className="flex items-center">
                  <span className="text-villa-accent mr-2">•</span>
                  <span>Child-proofing equipment</span>
                </li>
                <li className="flex items-center">
                  <span className="text-villa-accent mr-2">•</span>
                  <span>Children's books and toys</span>
                </li>
              </ul>
              
              <h4 className="font-medium mb-4">Services for Families:</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-villa-accent mr-2">•</span>
                  <span>Recommendations for family-friendly restaurants</span>
                </li>
                <li className="flex items-center">
                  <span className="text-villa-accent mr-2">•</span>
                  <span>Information on local babysitting services</span>
                </li>
                <li className="flex items-center">
                  <span className="text-villa-accent mr-2">•</span>
                  <span>First aid kit and medical information</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <SectionTitle subtitle="FAMILY ACTIVITIES" centered>
          Adventures For All Ages
        </SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {familyActivities.map((activity, index) => (
            <div key={index} className="bg-white p-6 rounded-sm shadow-md flex flex-col">
              <div className="mb-4">
                {activity.icon}
              </div>
              <h3 className="font-medium text-lg mb-2">{activity.title}</h3>
              <p className="text-gray-600 text-sm mb-4 flex-grow">{activity.description}</p>
              <div className="text-xs font-medium text-villa-accent mt-auto">
                {activity.suitable}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-sm shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h3 className="font-serif text-2xl mb-4">Seasonal Family Activities</h3>
              <p className="text-gray-700 mb-6">
                Each season offers unique family experiences in and around Villa Morgenthau:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Spring & Summer</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-villa-accent mr-2">•</span>
                      <span>Berry picking at local farms</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-villa-accent mr-2">•</span>
                      <span>Swimming and water play at safe beaches</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-villa-accent mr-2">•</span>
                      <span>Outdoor adventure parks and ziplines</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-villa-accent mr-2">•</span>
                      <span>Family-friendly hiking with wildlife spotting</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Fall & Winter</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-villa-accent mr-2">•</span>
                      <span>Apple orchards and harvest festivals</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-villa-accent mr-2">•</span>
                      <span>Indoor museums and cultural activities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-villa-accent mr-2">•</span>
                      <span>Gentle sledding and snow play areas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-villa-accent mr-2">•</span>
                      <span>Traditional craftmaking workshops</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="/placeholder.svg" 
                alt="Seasonal Family Activities" 
                className="w-full h-full object-cover rounded-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FamiliesActivities;
