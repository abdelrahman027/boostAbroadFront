"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

export default function AboutPage() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios
      .get("https://abdelrahman0027.pythonanywhere.com/api/locations/")
      .then((res) => {
        setLocations(res.data.locations);
      });
  }, []);

  return (
    <>
      <main>
        <section className="bg-[linear-gradient(45deg,#14141499,#2a2a2ac4),url(/hero-sections/services.jfif)] bg-no-repeat bg-cover h-screen">
          <div className="container flex flex-col gap-4 justify-center items-center h-full">
            <h1 className="text-2xl md:text-5xl lg:text-7xl text-white font-bold text-center">
              Explore Beyond
              <br />
              Borders
            </h1>
            <p className="text-base lg:text-2xl text-white font-thin text-center">
              Transforming Dreams into Global Adventures
            </p>
            {/* <button className="bg-primary px-4 py-3 rounded-lg text-white">
              Sign up for free
            </button> */}
          </div>
        </section>

        <section className="bg-third py-14">
          <div className="container flex flex-col lg:flex-row items-center gap-5">
            <div className="space-y-10">
              <h2 className="text-black text-xl lg:text-3xl font-bold">
                Why us?
              </h2>
              <div className="flex flex-col lg:flex-row items-center gap-10">
                <img
                  className="h-full lg:h-[15vw] aspect-[9/5] object-cover rounded-lg"
                  src="/services.jfif"
                  alt="Expert Guidance"
                />
                <div className="space-y-2">
                  <h3 className="font-bold text-xl">Expert Guidance</h3>
                  <p className="text-base text-black text-light">
                    Our team of travel experts brings years of experience and
                    firsthand knowledge to help you plan the perfect trip. From
                    selecting destinations to creating detailed itineraries, we
                    guide you every step of the way. Our team of travel experts
                    brings years of experience and firsthand knowledge to help
                    you plan the perfect trip. From selecting destinations to
                    creating detailed itineraries, we guide you every step of
                    the way.
                  </p>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-center gap-10">
                <div className="space-y-2 order-1 lg:order-0">
                  <h3 className="font-bold text-xl">
                    Personalized Itineraries
                  </h3>
                  <p className="text-base text-black text-light">
                    We believe no two travelers are alike. That’s why we tailor
                    each itinerary to your specific interests, preferences, and
                    budget, ensuring a unique and unforgettable experience every
                    time. We believe no two travelers are alike. That’s why we
                    tailor each itinerary to your specific interests,
                    preferences, and budget, ensuring a unique and unforgettable
                    experience every time.
                  </p>
                </div>
                <img
                  className="h-full lg:h-[15vw] aspect-[9/5] object-cover rounded-lg order-0 lg:order-1"
                  src="/services.jfif"
                  alt="Personalized Itineraries"
                />
              </div>

              <div className="flex flex-col lg:flex-row items-center gap-10">
                <img
                  className="h-full lg:h-[15vw] aspect-[9/5] object-cover rounded-lg"
                  src="/services.jfif"
                  alt="Personalized Itineraries"
                />
                <div className="space-y-2">
                  <h3 className="font-bold text-xl">Comprehensive Support</h3>
                  <p className="text-base text-black text-light">
                    From the moment you start planning until you return home, we
                    provide continuous support. Whether it&apos;s assistance with
                    visas, travel insurance, or local tips, we&apos;re here to make
                    your journey smooth and stress-free. From the moment you
                    start planning until you return home, we provide continuous
                    support. Whether it&apos;s assistance with visas, travel
                    insurance, or local tips, we&apos;re here to make your journey
                    smooth and stress-free.
                  </p>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-center gap-10">
                <div className="space-y-2 order-1 lg:order-0">
                  <h3 className="font-bold text-xl">Exclusive Experiences</h3>
                  <p className="text-base text-black text-light">
                    Gain access to exclusive experiences that go beyond typical
                    tourist attractions. Whether its a private tour, a cultural
                    immersion, or an off-the-beaten-path adventure, we help you
                    discover the world like a local. Gain access to exclusive
                    experiences that go beyond typical tourist attractions.
                    Whether it&apos;s a private tour, a cultural immersion, or an
                    off-the-beaten-path adventure, we help you discover the
                    world like a local.
                  </p>
                </div>
                <img
                  className="h-full lg:h-[15vw] aspect-[9/5] object-cover rounded-lg order-0 lg:order-1"
                  src="/services.jfif"
                  alt="Exclusive Experiences"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[linear-gradient(45deg,#14141499,#2a2a2ac4),url(/about-page/mission&vision.png)] bg-top bg-no-repeat bg-cover py-24">
          <div className="container space-y-24 text-white text-center">
            <div className="space-y-4">
              <h4 className="text-3xl font-bold">Our Mission</h4>
              <p className="text-lg font-thin">
                Our vision at Travel Abroad is to create a world where travel
                bridges cultures, fosters understanding, and transforms lives.
                We aspire to be the leading travel abroad service, renowned for
                our commitment to excellence, personalized experiences, and
                unwavering support. By connecting people to diverse destinations
                and unique experiences, we aim to cultivate a global community
                of explorers who embrace the richness of our shared humanity.
                Through every journey, we strive to make the world a smaller,
                more connected, and harmonious place.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-3xl font-bold">Our Vision</h4>
              <p className="text-lg font-thin">
                Our vision at Travel Abroad is to create a world where travel
                bridges cultures, fosters understanding, and transforms lives.
                We aspire to be the leading travel abroad service, renowned for
                our commitment to excellence, personalized experiences, and
                unwavering support. By connecting people to diverse destinations
                and unique experiences, we aim to cultivate a global community
                of explorers who embrace the richness of our shared humanity.
                Through every journey, we strive to make the world a smaller,
                more connected, and harmonious place.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-third py-14">
          <div className="container flex flex-col gap-5">
            <h2 className="text-black text-xl lg:text-3xl font-bold">
              Our locations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {locations.map((location) => (
                <div
                  key={location.district}
                  className="flex flex-col gap-2 rounded-2xl overflow-hidden bg-white p-5 lg:p-3"
                >
                  <img
                    className="rounded-xl aspect-[5/3] object-cover"
                    src={location.location_image}
                    alt={location.district}
                  />
                  <h4 className="text-xl font-bold text-black">
                    {location.district}
                  </h4>
                  <p className="text-base font-light text-black">
                    {location.address}
                  </p>
                  <p className="text-base font-normal text-black">
                    Phone Number:{" "}
                    <span className="font-bold">{location.phone}</span>
                  </p>
                  <a
                    href={location.location}
                    className="bg-black border border-black px-4 py-3 rounded-lg text-white"
                  >
                    Directions
                  </a>
                  <a
                    href={location.whats_link}
                    className="bg-transparent border border-black px-4 py-3 rounded-lg text-black"
                  >
                    Chat with whatsapp
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
