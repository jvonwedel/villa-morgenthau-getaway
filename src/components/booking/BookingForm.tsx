
import { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '2',
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would normally send the booking request to a server
    alert('Thank you for your booking request! We will contact you shortly to confirm availability.');
  };
  
  return (
    <section className="section-padding bg-villa-muted">
      <div className="container-custom">
        <SectionTitle subtitle="MAKE A RESERVATION" centered>
          Book Your Dates
        </SectionTitle>
        
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Fill out the form below to check availability and request a reservation at Villa Morgenthau. We'll get back to you promptly to confirm your booking.
        </p>
        
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-sm shadow-md">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="checkIn" className="block text-sm font-medium mb-2">Check-in Date*</label>
                <input
                  type="date"
                  id="checkIn"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-villa-accent"
                />
              </div>
              
              <div>
                <label htmlFor="checkOut" className="block text-sm font-medium mb-2">Check-out Date*</label>
                <input
                  type="date"
                  id="checkOut"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-villa-accent"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="guests" className="block text-sm font-medium mb-2">Number of Guests*</label>
              <select
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-villa-accent"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                ))}
              </select>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-villa-accent"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-villa-accent"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number*</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-villa-accent"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium mb-2">Special Requests or Questions</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-villa-accent"
              ></textarea>
            </div>
            
            <div className="text-center">
              <button 
                type="submit" 
                className="btn-primary bg-villa-dark px-8 py-3"
              >
                Request Booking
              </button>
              
              <p className="text-sm text-gray-500 mt-4">
                * Required fields. By submitting this form, you agree to our terms and conditions.
              </p>
            </div>
          </form>
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <h3 className="font-serif text-2xl mb-4">Need Help?</h3>
          <p className="text-gray-700 mb-4">
            If you prefer to make your reservation by phone or have any questions, please don't hesitate to contact us:
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-6">
            <div className="bg-white p-6 rounded-sm shadow-md flex-1">
              <h4 className="font-medium mb-2">Email Us</h4>
              <p className="text-villa-accent">booking@villamorgenthau.com</p>
            </div>
            
            <div className="bg-white p-6 rounded-sm shadow-md flex-1">
              <h4 className="font-medium mb-2">Call Us</h4>
              <p className="text-villa-accent">+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
