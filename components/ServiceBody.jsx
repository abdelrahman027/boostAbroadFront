"use client";
import { useEffect, useState } from "react";
import axios from "axios";
 function ServiceBody({title,subTitle,body}) {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://abdelrahman0027.pythonanywhere.com/api/events/")
//       .then((res) => {
//         setEvents(res.data.events);
//       });
//   }, []);

  return (
    <>

      <main>
        <section className="bg-[linear-gradient(45deg,#14141499,#2a2a2ac4),url(/hero.png)] bg-no-repeat bg-cover flex flex-col gap-4 justify-center items-center h-screen">
          <h1 className="text-4xl md:text-6xl lg:text-9xl text-white font-bold text-center">
                {title}
          </h1>
        </section>

        <section className="bg-third">
          <div className="container flex flex-col gap-14 justify-center py-24">
            <h3 className="text-3xl font-bold text-left">{subTitle}</h3>
            <p>{body}</p>
          </div>
        </section>
      </main>
    </>
  );
}

export default ServiceBody;