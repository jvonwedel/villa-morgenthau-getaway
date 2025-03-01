
import SectionTitle from '../ui/SectionTitle';

const StayContent = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle subtitle="YOUR EXPERIENCE">
              Exceptional Accommodations
            </SectionTitle>
            
            <p className="text-gray-700 mb-6">
              Villa Morgenthau offers a perfect blend of historic charm and modern comfort. Our meticulously restored property retains its original character while providing all the contemporary amenities you need for a relaxing and luxurious stay.
            </p>
            
            <p className="text-gray-700 mb-6">
              Each room in the villa has been thoughtfully designed to create a warm, welcoming atmosphere that feels both elegant and comfortable. High-quality furnishings, premium bedding, and beautiful decor ensure that you'll feel right at home from the moment you arrive.
            </p>
            
            <p className="text-gray-700 mb-8">
              Whether you're preparing a gourmet meal in our fully equipped kitchen, enjoying a book by the fireplace, or simply taking in the views from our terrace, every aspect of Villa Morgenthau has been designed with your comfort and enjoyment in mind.
            </p>
          </div>
          
          <div>
            <img 
              src="/placeholder.svg" 
              alt="Villa Morgenthau Interior" 
              className="w-full h-auto rounded-sm shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StayContent;
