import SectionTitle from '../ui/SectionTitle';
import { Link } from 'react-router-dom';
const About = () => {
  return <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle subtitle="SINCE 1867">
              About Villa Morgenthau
            </SectionTitle>
            <p className="text-gray-700 mb-6">
              Villa Morgenthau is a historic property dating back to 1867, meticulously restored to preserve its original charm while offering modern luxury. Situated in a breathtaking natural setting, our villa provides the perfect retreat for those seeking tranquility and comfort.
            </p>
            <p className="text-gray-700 mb-8">
              With spacious rooms, elegant furnishings, and attention to every detail, Villa Morgenthau creates a harmonious blend of history and contemporary comfort. Each corner of our property tells a story, inviting you to become part of its continuing legacy.
            </p>
            <Link to="/about" className="btn-secondary">ENTDECKEN SIE DIE GESCHICHTE</Link>
          </div>
          
          <div className="relative">
            <img alt="Villa Morgenthau Exterior" className="w-full h-auto rounded-sm shadow-lg" src="/lovable-uploads/b738799a-4fa8-4d26-abda-46f6d01759b0.jpg" />
            <div className="absolute -bottom-6 -left-6 bg-villa-accent p-6 rounded-sm shadow-lg hidden md:block">
              <p className="font-serif text-xl text-white">Over 150 years of history and elegance</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;