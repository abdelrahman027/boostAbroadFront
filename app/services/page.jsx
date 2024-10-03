"use client"
import DestinationsCarousel from "@/components/DestinationsCarousel";
import { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2'

export default function Services() {
  // State for form data
  const [userData, setUserData] = useState({
    name: "",
    phoneNum: "",
    location: "",
    NumOfTravelers: "",
    checkIn: "",
    checkOut: "",
    typeofStay: ""
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    })
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", userData);
    axios
      .post("https://getform.io/f/blljrpeb", userData,
        { headers: { 'Accept': 'application/json' } })
      .then(response => console.log(response))
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your data is sended successfully",
          showConfirmButton: false,
          timer: 1500
        });
      })
      .then(() => setUserData({
        name: "",
        phoneNum: "",
        location: "",
        NumOfTravelers: "",
        checkIn: "",
        checkOut: "",
        typeofStay: ""
      }))
      .catch(error => console.log(error))
  };

  return (
    <>
      <main>
        <section className="bg-[linear-gradient(45deg,#14141499,#2a2a2ac4),url(/hero-sections/services.jfif)] bg-no-repeat bg-cover h-screen">
          <div className="container flex flex-col gap-4 justify-center items-center h-full">
            <h1 className="text-4xl md:text-6xl lg:text-9xl text-white font-bold text-center">
              The best
              <br />
              palaces to stay
            </h1>
            <p className="text-lg lg:text-2xl text-white font-thin text-center">
              The World is Your Campus: Learn Everywhere,
              <br />
              Anytime Start now with Study abroad
            </p>
          </div>
        </section>

        <section className="bg-third py-14">
          <div className="container flex flex-col lg:flex-row items-center gap-5">
            <div className="space-y-4">
              <h2 className="text-black text-3xl font-bold">
                Find Your Home Abroad with Travel Aboard Accommodations
              </h2>
              <p className="text-lg text-black text-light">
                Studying abroad is an exciting adventure, and UniStay
                Accommodations is here to ensure you feel at home wherever you
                go. Our dedicated team specializes in helping students find
                comfortable, safe, and affordable housing tailored to their
                needs. Choose from a wide range of options, from cozy
                dormitories to private apartments, all located near major
                universities and vibrant city centers. Our expert team will work
                closely with you to find the perfect place that fits your budget
                and preferences, making your transition to a new country smooth
                and stress-free. Experience the comfort and security of home
                with UniStay Accommodations. Let our team handle the housing
                details so you can focus on making the most of your
                international education.
              </p>
            </div>
            <img
              className="w-full lg:h-[20vw] rounded-lg"
              src="/services.jfif"
              alt="Chill"
            />
          </div>
        </section>

        <section className="bg-[linear-gradient(45deg,#14141499,#2a2a2ac4),url(/services-form.jfif)] bg-opacity-50 bg-no-repeat bg-cover py-14">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="space-y-4">
              <h2 className="text-white text-3xl font-bold">Let us help you</h2>
              <p className="text-lg text-white font-thin">
                Travel Abroad Accommodations makes your study abroad experience
                comfortable and hassle-free. Our dedicated team helps you find
                safe, affordable housing near major universities and city
                centers. From dorms to private apartments, we ensure you feel at
                home, so you can focus on your education and adventure. Let us
                handle the details—your perfect home abroad awaits with Travel
                Abroad.
                <br />
                Get in touch with our team now:
              </p>
              <form className="grid grid-cols-1 lg:grid-cols-2 gap-5" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-white font-light text-base"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="border border-[#7A7A7A] text-sm text-white py-2 px-4 bg-transparent rounded placeholder:text-[#7A7A7A]"
                    name="name"
                    id="name"
                    placeholder="Type your full name"
                    value={userData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="phoneNum"
                    className="text-white font-light text-base"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="border border-[#7A7A7A] text-sm text-white py-2 px-4 bg-transparent rounded placeholder:text-[#7A7A7A]"
                    name="phoneNum"
                    id="phoneNum"
                    placeholder="Type your Whatsapp phone number"
                    value={userData.phoneNum}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="location"
                    className="text-white font-light text-base"
                  >
                    Location
                  </label>
                  <input
                    type="text"
                    className="border border-[#7A7A7A] text-sm text-white py-2 px-4 bg-transparent rounded placeholder:text-[#7A7A7A]"
                    name="location"
                    id="location"
                    placeholder="Type the name of the city"
                    value={userData.location}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="NumOfTravelers"
                    className="text-white font-light text-base"
                  >
                    Number of travelers
                  </label>
                  <input
                    type="number"
                    min="0"
                    className="border border-[#7A7A7A] text-sm text-white py-2 px-4 bg-transparent rounded placeholder:text-[#7A7A7A]"
                    name="NumOfTravelers"
                    id="NumOfTravelers"
                    placeholder="How many guests?"
                    value={userData.NumOfTravelers}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="checkIn"
                    className="text-white font-light text-base"
                  >
                    Check in
                  </label>
                  <input
                    type="date"
                    className="border border-[#7A7A7A] text-sm text-white py-2 px-4 bg-transparent rounded placeholder:text-[#7A7A7A]"
                    name="checkIn"
                    id="checkIn"
                    value={userData.checkIn}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="checkOut"
                    className="text-white font-light text-base"
                  >
                    Check out
                  </label>
                  <input
                    type="date"
                    className="border border-[#7A7A7A] text-sm text-white py-2 px-4 bg-transparent rounded placeholder:text-[#7A7A7A]"
                    name="checkOut"
                    id="checkOut"
                    value={userData.checkOut}
                    onChange={handleInputChange}
                    min={userData.checkIn}
                  />
                </div>
                <div className="flex flex-col gap-2 col-span-full">
                  <label
                    htmlFor="typeofStay"
                    className="text-white font-light text-base"
                  >
                    Type of stay
                  </label>
                  <select
                    className="border border-[#7A7A7A] text-sm text-white py-2 px-4 bg-transparent rounded placeholder:text-[#7A7A7A]"
                    id="typeofStay"
                    name="typeofStay"
                    value={userData.typeofStay}
                    onChange={handleInputChange}
                  >
                    {[
                      { title: "Homestay", value: "homestay" },
                      { title: "Private", value: "private" }
                    ].map((item) => (
                      <option
                        key={item.value}
                        value={item.value}
                        className="text-black"
                      >
                        {item.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-primary px-4 py-3 rounded-lg text-white"
                  >
                    Find
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
        <DestinationsCarousel />
      </main>
    </>
  );
}
