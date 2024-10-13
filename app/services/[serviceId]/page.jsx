"use client"
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

export default function ServiceDetails  ({ params })  {
    const [serviceDetail, setServiceDetail] = useState([]);
    useEffect(()=>{
        axios
        .get(`https://abdelrahman0027.pythonanywhere.com/api/services/${params.serviceId}/`)
        .then((res) => {
            setServiceDetail(res.data.service);
        });
        // const fetchData = async () => {
        //     const response= await fetch("https://abdelrahman0027.pythonanywhere.com/api/services/"+params.serviceId,{headers: {
        //         'Access-Control-Allow-Origin':'*'
        //       },mode:'cors'});
        //     const jsonData = await response.json();
        //     setServiceDetail(jsonData);
        //   }
        //   fetchData();
    },[])
    console.log(serviceDetail)
  return (
    <>
      <section className="bg-[linear-gradient(45deg,#14141499,#2a2a2ac4),url(/hero.png)] bg-no-repeat bg-cover flex flex-col gap-4 justify-center items-center h-screen">
        <h1 className="text-4xl md:text-6xl lg:text-9xl text-white font-bold text-center">
          {serviceDetail.title}
        </h1>
      </section>

      <section className="bg-third">
        <div className="container flex flex-col gap-14 justify-center py-24">
          <h3 className="text-3xl font-bold text-left">
            {serviceDetail.sub_title}
          </h3>
          <p>
            {serviceDetail.details}
          </p>
        </div>
      </section>
    </>
  );
};

