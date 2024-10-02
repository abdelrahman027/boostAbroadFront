"use client";
import EventCard from "@/components/EventCard";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/events/")
      .then((res) => {
        setEvents(res.data.events);
      });
  }, []);

  return (
    <>

      <main>
        <section className="bg-[linear-gradient(45deg,#14141499,#2a2a2ac4),url(/hero.png)] bg-no-repeat bg-cover flex flex-col gap-4 justify-center items-center h-screen">
          <h1 className="text-4xl md:text-6xl lg:text-9xl text-white font-bold text-center">
            Embark on Extraordinary
            <br />
            Journeys
          </h1>
        </section>

        <section className="bg-third">
          <div className="container flex flex-col gap-14 justify-center py-24">
            <h3 className="text-3xl font-bold text-left">Our Events</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {events.map((oneEvent) => (
                <EventCard
                  key={oneEvent.name}
                  title={oneEvent.name}
                  image={oneEvent.event_image}
                  time={oneEvent.event_time}
                  day={oneEvent.event_date}
                  country={oneEvent.state}
                />
              ))}
            </div>
            {/* <div className="flex justify-center items-center">
              <button className="rounded px-6 py-2 border-2 border-black inline-block">
                Load more events
              </button>
            </div> */}
          </div>
        </section>
      </main>
    </>
  );
}
