import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex flex-col flex-1">
        <h2 className="mt-10 font-palaquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-gray-800">New Styles,</span>
          <span className="text-gray-800"> Unbeatable</span>
          <span className="text-gray-800"> Prices</span>
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Get a fresh look for the season with our special collection offers.
          Find high-quality fashion at prices you'll love, for a limited time
          only.
        </p>
        <p className="mt-4 lg:max-w-lg info-text">
          Revamp your wardrobe with our exclusive special offers. Discover
          exceptional value and elevate your style with our latest collection of
          fashionable clothing.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>

      <div className="flex-1">
        <img
          src={offer}
          alt=""
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
    </section>
  );
};

export default SpecialOffer;
