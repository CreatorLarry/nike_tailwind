import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain"/>
      </div>

      <div className="flex flex-col flex-1">
        <h2 className="mt-10 font-palaquin text-4xl capitalize font-bold lg:max-w-lg">
          Welcome To Our
          <span className="text-gray-800"> Super </span>
          <span className="text-gray-800">Quality </span>
          Collection
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Whether you're dressing for a formal event or just lounging at home, there's a world of fashionable clothes out there to explore. Here are some of the most popular styles and the key pieces that define them.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Timeless and sophisticated, this style focuses on well-tailored pieces that never go out of fashion.
        </p>
        <div className="mt-11">
          <Button lable="View Shop" iconURL={arrowRight} />
        </div>
        
      </div>
    </section>
  );
};

export default SuperQuality;
