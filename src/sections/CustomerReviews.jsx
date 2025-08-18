import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What our
        <span className="text-gray-800 "> Customers </span>
        Say?
      </h3>
      <p className="info-text m-auto max-w-lg text-center text-gray-600 mt-4">
        Genuine stories from our satisfied customers. We value our customers'
        feedback and strive to improve our services.
      </p>

      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard 
          key={review.customerName}
          imgURL={review.imgURL} 
          customerName={review.customerName} 
          rating= {review.rating} 
          feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
