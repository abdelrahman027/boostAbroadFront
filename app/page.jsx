"use client";

import Link from "next/link";
import DestinationsCarousel from "@/components/DestinationsCarousel";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [universities, setUnivseities] = useState([]);
  const [services, setServices] = useState([]);
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/universities/")
      .then((res) => {
        setUnivseities(res.data.universities);
      });

    axios
      .get("http://localhost:8000/api/services/")
      .then((res) => {
        setServices(res.data.services);
      });

    axios
      .get("http://localhost:8000/api/destinations/")
      .then((res) => {
        setDestinations(res.data.destinations);
      });
  }, []);

  return (
    <>
      <main>
        <section className="bg-[linear-gradient(45deg,#14141499,#2a2a2ac4),url(/hero.png)] bg-no-repeat bg-cover flex flex-col gap-4 justify-center items-center h-screen">
          <h1 className="text-4xl md:text-6xl lg:text-9xl text-white font-bold">
            Study Abroad
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-6xl text-white font-medium">
            Make It Happen
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-white font-thin text-center">
            The World is Your Campus: Learn Everywhere, Anytime
            <br />
            Start now with Study abroad
          </p>
          <Link href="/programs" className="bg-primary px-4 py-3 rounded-lg text-white">
            Start your future now
          </Link>
        </section>
        <section className="flex flex-col gap-10 justify-center items-center bg-third py-24">
          <h3 className="text-3xl font-bold text-center text-dark">Our Services</h3>
          <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services?.map((service) => (
              <div
                key={service.title}
                className="flex flex-col gap-4 rounded-2xl bg-white shadow-lg overflow-hidden p-6"
              >
                <img
                  className="rounded-xl"
                  src={service.image}
                  alt={service.title}
                />
                <h4 className="text-xl font-medium text-black">
                  {service.title}
                </h4>
                <p className="text-base text-[#9B93A6]">
                  {service.description}
                </p>

                <Link
                  className="text-secondary font-black text-lg"
                  href="/services"
                >
                  Learn more
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-10 justify-center items-center bg-third py-24">
          <h3 className="text-3xl font-bold text-center text-dark">
            Discover the best University for you
          </h3>

          <p className="text-[#363636] font-light text-xl text-center">
            Embark on an educational journey that transforms your aspirations
            into reality. With our expert guidance,
            <br />
            you can secure a place at a world-renowned university and begin
            writing your success story.
          </p>

          <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {universities?.map((university) => (
              <Link href={`/programs/${university.name.split(" ").join('_')}`}
                key={university.name}
              >
                <div
                  className="flex flex-col gap-4 rounded-2xl bg-white shadow-lg overflow-hidden p-4"
                >
                  <img
                    className="rounded-xl aspect-square object-contain"
                    src={university.image}
                    alt={university.name}
                  />
                  <h4 className="text-lg font-medium text-black text-center">
                    {university.name}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
          <Link href="/programs" className="rounded px-6 py-2 border-2 border-black inline-block text-dark">
            Start your future now
          </Link>
        </section>

        <section className="flex flex-col gap-10 justify-center items-center bg-third py-24">
          <h3 className="text-3xl font-bold text-center text-dark">
            Who to access your feature?
          </h3>

          <p className="text-[#363636] font-light text-xl text-center">
            We&rsquo;ve streamlined the process to make it incredibly
            straightforward and user-friendly.
          </p>

          <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: "/feature_section/1.png",
                title: "Find you program",
                description:
                  "Over 90 universities are available. Still unsure? Our tests well help you find one.",
              },
              {
                icon: "/feature_section/2.png",
                title: "Apply with us s",
                description:
                  "Apply instantly, upload your academic documents, and receive offers promptly.",
              },
              {
                icon: "/feature_section/3.png",
                title: "Get Consultation n",
                description:
                  "Our highly trained counsultants will get with you and help you with the whole process",
              },
              {
                icon: "/feature_section/4.png",
                title: "Predeparture.",
                description:
                  "From Visa to accommodations, our platform well help you get stale effortlessly",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="flex gap-4 rounded-2xl bg-white shadow-lg overflow-hidden p-4"
              >
                <img
                  className="rounded-full w-20 h-20 aspect-square object-contain"
                  src={feature.icon}
                  alt={feature.title}
                />
                <div className="space-y-5">
                  <h4 className="text-xl font-bold text-black">
                    {feature.title}
                  </h4>
                  <p className="text-lg font-medium text-[#363636]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Link href="/programs" className="rounded px-6 py-2 border-2 border-black inline-block text-dark">
            Start your future now
          </Link>
        </section>

        {/* Carousel Destinations */}
        <section className="my-10 space-y-10">
          <h2 className="text-3xl text-center font-bold te">
            Check our top destinations
          </h2>
          <div className="h-0.5 bg-black w-full mb-10" />
          <DestinationsCarousel />
        </section>
      </main>
    </>
  );
}
