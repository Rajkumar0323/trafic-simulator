import { useEffect, useState, useRef } from "react";
import "../App.css";

const Top = ({ signal }) => {
  const [carLeft, setCarLeft] = useState(-20);
  const [busLeft, setBusLeft] = useState(-40);
  const [bikeLeft, setBikeLeft] = useState(-30);

  const carPos = useRef(-20);
  const busPos = useRef(-40);
  const bikePos = useRef(-30);

  useEffect(() => {
    const interval = setInterval(() => {
      // Stop if signal is red and vehicle near stop line
      const nearStop = carPos.current > 31 && carPos.current < 60;
      const isRed = signal !== "top";

      if (isRed && nearStop) {
        return; // pause movement
      }

      // Reset if gone too far
      if (carPos.current > 130) {
        carPos.current = -20;
        busPos.current = -40;
        bikePos.current = -30;
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
  }, [signal]);

  return (
    <>
      <img
        src="images.jpeg"
        alt="Car"
        className="vehicle car"
        style={{
          right: `42%`,
          top: `${bikeLeft}%`,
          transform: "rotate(180deg)",
        }}
      />
      <img
        src="images.png"
        alt="Bus"
        className="vehicle bus"
        style={{
          right: "36%",
          top: `${bikeLeft}%`,
          transform: "rotate(90deg)",
        }}
      />
      <img
        src="images1.jpeg"
        alt="Bike"
        className="vehicle bike"
        style={{
          right: "42%",
          top: `${carLeft}%`,
          transform: "rotate(180deg)",
        }}
      />
    </>
  );
};
export default Top;
