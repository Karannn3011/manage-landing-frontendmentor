import Testimonial from "./Testimonial.jsx";
import ali from "../assets/avatar-ali.png";
import anisha from "../assets/avatar-anisha.png";
import richard from "../assets/avatar-richard.png";
import shanai from "../assets/avatar-shanai.png";
import { useRef, useState, useEffect } from "react";
import GetStarted from "./GetStartedBtn.jsx";

function Slider() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);
  const totalSlides = 4;

  useEffect(() => {
    const startAutoScroll = () => {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % totalSlides);
      }, 5000);
    };

    startAutoScroll();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handleManualNavigation = (index) => {
    setCurrent(index);

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    setTimeout(() => {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % totalSlides);
      }, 5000);
    }, 5000); //
  };

  // Pause auto-scroll on hover
  const handleMouseEnter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleMouseLeave = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalSlides);
    }, 5000);
  };

  return (
    <>
      <div
        className="carousel pr-5 flex flex-row *:px-5 pt-10 scroll-smooth my-5 lg:my-10 w-full lg:overflow-x-visible"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          id="item0"
          className={`carousel-item w-full ${
            current === 0 ? "block" : "hidden"
          }`}
        >
          <Testimonial
            name="Ali Bravo"
            av={ali}
            said="We have been able to cancel so many other subscriptions since using 
      Manage. There is no more cross-channel confusion and everyone is much 
      more focused."
          />
        </div>
        <div
          id="item1"
          className={`carousel-item w-full ${
            current === 1 ? "block" : "hidden"
          }`}
        >
          <Testimonial
            name="Anisha Li"
            av={anisha}
            said="Manage has supercharged our team's workflow. The ability to maintain 
      visibility on larger milestones at all times keeps everyone motivated."
          />
        </div>
        <div
          id="item2"
          className={`carousel-item w-full ${
            current === 2 ? "block" : "hidden"
          }`}
        >
          <Testimonial
            name="Richard Watts"
            av={richard}
            said="Manage allows us to provide structure and process. It keeps us organized 
      and focused. I can't stop recommending them to everyone I talk to!"
          />
        </div>
        <div
          id="item3"
          className={`carousel-item w-full ${
            current === 3 ? "block" : "hidden"
          }`}
        >
          <Testimonial
            name="Shanai Gough"
            av={shanai}
            said="Their software allows us to track, manage and collaborate on our projects 
      from anywhere. It keeps the whole team in-sync without being intrusive."
          />
        </div>
      </div>
      <div className="lg:invisible flex w-full justify-center gap-2 py-2">
        {[0, 1, 2, 3].map((i) => {
          return (
            <div
              key={i}
              onClick={() => handleManualNavigation(i)}
              className={`w-3 h-3 border border-bright-red rounded-full cursor-pointer transition-colors duration-300 ${
                current === i
                  ? `bg-bright-red`
                  : `bg-transparent hover:bg-bright-red hover:bg-opacity-50`
              }`}
            />
          );
        })}
      </div>
      <div className="flex flex-row justify-center">
        <GetStarted className="my-5 lg:my-0 mx-auto" />
      </div>
    </>
  );
}

export default Slider;
