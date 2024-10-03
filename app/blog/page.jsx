"use client";
import BlogCard from "@/components/BlogCard";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Blog() {
  const [knowledges, setKnowledges] = useState([]);

  useEffect(() => {
    axios
      .get("https://abdelrahman0027.pythonanywhere.com/api/knowledges/")
      .then((res) => {
        setKnowledges(res.data.knowledges);
      });
  }, []);

  return (
    <>
      <main>
        <section className="bg-[linear-gradient(45deg,#14141499,#2a2a2ac4),url(/hero.png)] bg-no-repeat bg-cover flex flex-col gap-4 justify-center items-center h-screen">
          <h1 className="text-4xl md:text-6xl lg:text-9xl text-white font-bold text-center">
            Stay Updated all the time with
            <br />
            Boost Travel
          </h1>
        </section>

        <section className="bg-third">
          <div className="container flex flex-col gap-14 justify-center py-24">
            <h3 className="text-3xl font-bold text-left">Knowledge Hub</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {knowledges.map((knowledge) => (
                <BlogCard
                  key={knowledge.id}
                  title={knowledge.name}
                  description={knowledge.description}
                  image={knowledge.knowledge_image}
                  day={knowledge.event_date}
                  country={knowledge.state}
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
