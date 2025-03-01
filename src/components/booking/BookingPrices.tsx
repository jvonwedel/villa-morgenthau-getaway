
import { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';

type Season = 'low' | 'mid' | 'high' | 'peak';

const seasonalRates = {
  low: {
    name: 'Low Season',
    period: 'November - March (excluding holidays)',
    weekday: 250,
    weekend: 300,
    weekly: 1650,
    minStay: 2
  },
  mid: {
    name: 'Mid Season',
    period: 'April - May, October',
    weekday: 300,
    weekend: 350,
    weekly: 1950,
    minStay: 2
  },
  high: {
    name: 'High Season',
    period: 'June - September',
    weekday: 350,
    weekend: 400,
    weekly: 2300,
    minStay: 3
  },
  peak: {
    name: 'Peak Season',
    period: 'Holiday weeks (Christmas, New Year, Easter)',
    weekday: 400,
    weekend: 450,
    weekly: 2650,
    minStay: 4
  }
};

const additionalFees = [
  {
    name: 'Cleaning Fee',
    amount: 150,
    type: 'One-time'
  },
  {
    name: 'Security Deposit',
    amount: 500,
    type: 'Refundable'
  },
  {
    name: 'Pet Fee',
    amount: 75,
    type: 'Per pet'
  },
  {
    name: 'Extra Guest Fee',
    amount: 25,
    type: 'Per person/night (over 6 guests)'
  }
];

const BookingPrices = () => {
  const [activeSeason, setActiveSeason] = useState<Season>('high');
  
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle subtitle="RATES & AVAILABILITY" centered>
          Pricing Information
        </SectionTitle>
        
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Villa Morgenthau offers different rates based on the season. Below you'll find our current pricing structure and additional fees.
        </p>
        
        {/* Season Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {(Object.keys(seasonalRates) as Season[]).map((season) => (
            <button
              key={season}
              onClick={() => setActiveSeason(season)}
              className={`px-6 py-2 rounded-sm transition-colors ${
                activeSeason === season 
                  ? 'bg-villa-dark text-white' 
                  : 'bg-villa-muted text-gray-700 hover:bg-gray-200'
              }`}
            >
              {seasonalRates[season].name}
            </button>
          ))}
        </div>
        
        {/* Pricing Table */}
        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-villa-muted">
                <th className="text-left p-4 font-medium">Season</th>
                <th className="text-left p-4 font-medium">Period</th>
                <th className="text-left p-4 font-medium">Weekday Rate</th>
                <th className="text-left p-4 font-medium">Weekend Rate</th>
                <th className="text-left p-4 font-medium">Weekly Rate</th>
                <th className="text-left p-4 font-medium">Minimum Stay</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4 font-medium">{seasonalRates[activeSeason].name}</td>
                <td className="p-4">{seasonalRates[activeSeason].period}</td>
                <td className="p-4">${seasonalRates[activeSeason].weekday}/night</td>
                <td className="p-4">${seasonalRates[activeSeason].weekend}/night</td>
                <td className="p-4">${seasonalRates[activeSeason].weekly}/week</td>
                <td className="p-4">{seasonalRates[activeSeason].minStay} nights</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* Additional Fees */}
        <div className="bg-villa-muted p-8 rounded-sm">
          <h3 className="font-serif text-xl mb-6">Additional Fees</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-sm overflow-hidden">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-4 font-medium">Fee</th>
                    <th className="text-left p-4 font-medium">Amount</th>
                    <th className="text-left p-4 font-medium">Type</th>
                  </tr>
                </thead>
                <tbody>
                  {additionalFees.map((fee, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-4">{fee.name}</td>
                      <td className="p-4">${fee.amount}</td>
                      <td className="p-4">{fee.type}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Booking Policy</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-villa-accent mr-2">•</span>
                  <p className="text-sm">
                    <span className="font-medium">Deposit:</span> 30% of total stay is required to confirm booking
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-villa-accent mr-2">•</span>
                  <p className="text-sm">
                    <span className="font-medium">Balance:</span> Due 30 days prior to arrival
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-villa-accent mr-2">•</span>
                  <p className="text-sm">
                    <span className="font-medium">Cancellation:</span> Full refund if cancelled 60+ days before arrival, 50% refund if 30-59 days before arrival
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-villa-accent mr-2">•</span>
                  <p className="text-sm">
                    <span className="font-medium">Check-in:</span> 3:00 PM - 8:00 PM
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-villa-accent mr-2">•</span>
                  <p className="text-sm">
                    <span className="font-medium">Check-out:</span> 11:00 AM
                  </p>
                </li>
              </ul>
              
              <div className="mt-6">
                <h4 className="font-medium mb-4">Payment Methods</h4>
                <p className="text-sm mb-2">We accept the following payment methods:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 px-3 py-1 text-xs rounded-full">Credit Cards</span>
                  <span className="bg-gray-100 px-3 py-1 text-xs rounded-full">Bank Transfer</span>
                  <span className="bg-gray-100 px-3 py-1 text-xs rounded-full">PayPal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingPrices;
