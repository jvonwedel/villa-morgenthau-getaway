
import { useState } from 'react';
import { ChevronDown, Utensils, Wifi, Tv, Coffee, Shower, Car } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const amenityCategories = [
  {
    id: "living-spaces",
    title: "Living Spaces",
    icon: <Home className="h-6 w-6 text-villa-accent" />,
    items: [
      "Spacious living room with comfortable seating",
      "Dining area that seats 8 people",
      "Reading nook with selection of books",
      "Fireplace for cozy evenings",
      "Air conditioning and heating throughout",
      "Spectacular views from large windows"
    ]
  },
  {
    id: "kitchen",
    title: "Kitchen",
    icon: <Utensils className="h-6 w-6 text-villa-accent" />,
    items: [
      "Fully equipped modern kitchen",
      "High-end appliances including dishwasher",
      "Coffee maker, toaster, and microwave",
      "Complete set of cookware and utensils",
      "Dining essentials for 10+ people",
      "Pantry basics and welcome package"
    ]
  },
  {
    id: "bedrooms",
    title: "Bedrooms",
    icon: <Bed className="h-6 w-6 text-villa-accent" />,
    items: [
      "Master bedroom with king-size bed",
      "Second bedroom with queen-size bed",
      "Third bedroom with two single beds",
      "Premium quality linens and bedding",
      "Blackout curtains for restful sleep",
      "Ample storage space in each room"
    ]
  },
  {
    id: "bathrooms",
    title: "Bathrooms",
    icon: <Shower className="h-6 w-6 text-villa-accent" />,
    items: [
      "Master en-suite bathroom with bathtub",
      "Second full bathroom with shower",
      "Guest half-bathroom on ground floor",
      "Luxury towels and toiletries provided",
      "Hair dryers in each bathroom",
      "Heated towel rails for extra comfort"
    ]
  },
  {
    id: "outdoor",
    title: "Outdoor Areas",
    icon: <Garden className="h-6 w-6 text-villa-accent" />,
    items: [
      "Private garden with seating area",
      "Outdoor dining table and chairs",
      "BBQ grill for alfresco cooking",
      "Sun loungers for relaxation",
      "Covered porch for shade",
      "Secure parking area for vehicles"
    ]
  },
  {
    id: "entertainment",
    title: "Entertainment & Connectivity",
    icon: <Tv className="h-6 w-6 text-villa-accent" />,
    items: [
      "Smart TV with streaming services",
      "High-speed Wi-Fi throughout property",
      "Bluetooth speaker system",
      "Selection of board games and cards",
      "DVD player with movie collection",
      "Local guides and maps"
    ]
  },
  {
    id: "misc",
    title: "Additional Amenities",
    icon: <Coffee className="h-6 w-6 text-villa-accent" />,
    items: [
      "Washer and dryer with laundry essentials",
      "Iron and ironing board",
      "Cleaning supplies",
      "First aid kit",
      "Fire extinguisher and smoke detectors",
      "Welcome guide with local information"
    ]
  },
  {
    id: "services",
    title: "Services & Accessibility",
    icon: <Car className="h-6 w-6 text-villa-accent" />,
    items: [
      "Self check-in with keybox",
      "Cleaning service available on request",
      "Parking on premises for 2 vehicles",
      "Accessible entrance with minimal steps",
      "Local caretaker available for assistance",
      "Welcome basket with local products"
    ]
  }
];

// Missing import for these icons
import { Bed, Garden, Home } from 'lucide-react';

const StayAmenities = () => {
  const [openCategory, setOpenCategory] = useState<string | null>("living-spaces");
  
  const toggleCategory = (categoryId: string) => {
    setOpenCategory(openCategory === categoryId ? null : categoryId);
  };
  
  return (
    <section className="section-padding bg-villa-muted">
      <div className="container-custom">
        <SectionTitle subtitle="AMENITIES & FEATURES" centered>
          Everything You Need for a Perfect Stay
        </SectionTitle>
        
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Villa Morgenthau is equipped with a comprehensive range of amenities to ensure your stay is comfortable, convenient, and enjoyable.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <img 
              src="/placeholder.svg" 
              alt="Villa Morgenthau Amenities" 
              className="w-full h-auto rounded-sm shadow-lg mb-6"
            />
            
            <img 
              src="/placeholder.svg" 
              alt="Villa Morgenthau Interior" 
              className="w-full h-auto rounded-sm shadow-lg"
            />
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-white rounded-sm shadow-md overflow-hidden">
              {amenityCategories.map((category) => (
                <div key={category.id} className="border-b border-gray-100 last:border-b-0">
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="w-full flex items-center justify-between p-4 text-left transition-colors hover:bg-gray-50"
                  >
                    <div className="flex items-center">
                      <div className="mr-3">{category.icon}</div>
                      <h3 className="font-medium">{category.title}</h3>
                    </div>
                    <ChevronDown 
                      className={`h-5 w-5 text-gray-500 transition-transform ${
                        openCategory === category.id ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  
                  <div 
                    className={`bg-gray-50 transition-all overflow-hidden ${
                      openCategory === category.id ? 'max-h-96 py-4' : 'max-h-0'
                    }`}
                  >
                    <ul className="space-y-2 px-4 pl-14">
                      {category.items.map((item, index) => (
                        <li key={index} className="flex items-start text-gray-700">
                          <span className="text-villa-accent mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-white p-6 rounded-sm shadow-md">
              <h3 className="font-serif text-xl mb-4">Special Requests</h3>
              <p className="text-gray-700 mb-4">
                We're happy to accommodate special requests to make your stay even more comfortable. Please let us know in advance if you need:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-villa-accent mr-2">•</span>
                      <span>Additional bedding or towels</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-villa-accent mr-2">•</span>
                      <span>Early check-in or late check-out</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-villa-accent mr-2">•</span>
                      <span>Specific kitchen equipment</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-villa-accent mr-2">•</span>
                      <span>Baby and child equipment</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-villa-accent mr-2">•</span>
                      <span>Grocery delivery service</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-villa-accent mr-2">•</span>
                      <span>Special occasion arrangements</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StayAmenities;
