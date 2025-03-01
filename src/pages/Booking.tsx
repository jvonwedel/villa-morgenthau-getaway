
import Layout from '../components/layout/Layout';
import BookingHeader from '../components/booking/BookingHeader';
import BookingPrices from '../components/booking/BookingPrices';
import BookingForm from '../components/booking/BookingForm';

const Booking = () => {
  return (
    <Layout>
      <BookingHeader />
      <BookingPrices />
      <BookingForm />
    </Layout>
  );
};

export default Booking;
