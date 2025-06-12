import { useEffect, useRef, useState } from "react";
import "../App.css";

const Left = ({ signal }) => {
  const [carLeft, setCarLeft] = useState(-20);
  const [busLeft, setBusLeft] = useState(-30);
  const [bikeLeft, setBikeLeft] = useState(-19);

  const carPos = useRef(-20);
  const busPos = useRef(-30);
  const bikePos = useRef(-19);

  useEffect(() => {
    const interval = setInterval(() => {
      // Stop if signal is red and vehicle near stop line
      const nearStop = carPos.current > 26 && carPos.current < 60;
      const isRed = signal !== "left";

      if (isRed && nearStop) {
        return; // pause movement
      }

      // Reset if gone too far
      if (carPos.current > 130) {
        carPos.current = -20;
        busPos.current = -30;
        bikePos.current = -19;
      } else {
        carPos.current += 1;
        busPos.current += 1;
        bikePos.current += 1;
      }

      setCarLeft(carPos.current);
      setBusLeft(busPos.current);
      setBikeLeft(bikePos.current);
    }, 100);

    return () => clearInterval(interval);
  }, [signal]); // <== only run once on mount

  return (
    <>
      <img
        src="car-png-top-view-png-blue-car-top-view-11562875896ptd1ytjtjv.png"
        alt="Car"
        className="vehicle car"
        style={{ top: `38%`, left: `${carLeft}%` }}
      />
      <img
        src="images.png"
        alt="Bus"
        className="vehicle bus"
        style={{ top: "45%", left: `${busLeft}%` }}
      />
      <img
        src="images1.jpeg"
        alt="Bike"
        className="vehicle bike"
        style={{ top: "44%", left: `${bikeLeft}%` }}
      />
    </>
  );
};

export default Left;
