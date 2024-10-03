"use client"
import { useEffect, useState } from "react";
import axios from "axios";


const DestinationsCarousel = () => {

  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    axios
      .get("https://abdelrahman0027.pythonanywhere.com/api/destinations/")
      .then((res) => {
        setDestinations(res.data.destinations);
      });
  }, []);
  return (
    <div className="container flex flex-col justify-center items-center gap-y-4 my-4">
      <div className="carousel h-[50vh]">
        {destinations.map((destination, index) => (
          <div
            key={destination.id}
            id={`slide${index}`}
            className="carousel-item relative w-full"
          >
            <div className="absolute w-1/4 top-8 left-16 z-10 text-white p-20 bg-dark/75">
              <div>{destination.city + ' , ' + destination.country}</div>
              <div>{destination.continent}</div>
            </div>
            <img
              src={destination.image}
              alt={destination.Name}
              className="w-full object-cover"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a
                href={`#slide${index === 0 ? index : index - 1}`}
                className={`
                        btn btn-circle 
                        ${index === 0 ? "opacity-0 cursor-default" : ""}
                      `}
              >
                ❮
              </a>
              <a
                href={`#slide${index === destinations?.length - 1 ? index : index + 1
                  }`}
                className={`
                        btn btn-circle 
                        ${index === destinations?.length - 1
                    ? "opacity-0 cursor-default"
                    : ""
                  }
                      `}
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationsCarousel;
