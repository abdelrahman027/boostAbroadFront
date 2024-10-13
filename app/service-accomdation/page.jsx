'use client'
import {ServiceBody} from '@/components/ServiceBody'
import { BsFillAirplaneFill } from "react-icons/bs";
import React from 'react'

export default function ServiceOne() {
  return (
    <div>
        <main>
        <section className="bg-[linear-gradient(45deg,#14141499,#2a2a2ac4),url(/hero.png)] bg-no-repeat bg-cover flex flex-col gap-4 justify-center items-center h-screen">
          <h1 className="text-4xl md:text-6xl lg:text-9xl text-white font-bold text-center">
          Accommodation Support
          </h1>
        </section>

        <section className="bg-third">
          <div className="container flex flex-col gap-14 justify-center py-24">
            <h3 className="text-3xl font-bold text-left">Finding the Perfect Accommodation for Your Study Abroad Experience</h3>
            <p>Securing suitable accommodation is a crucial element of studying abroad, as it can significantly impact your overall experience. Whether you prefer the convenience and social atmosphere of university dormitories, the independence of a private apartment, the camaraderie of shared housing, or the cultural immersion of staying with a host family in a homestay, each option has its unique advantages. Finding the right living situation is about more than just a place to sleep; it&apos;s about creating an environment that aligns with your personal preferences, lifestyle, and budget. A comfortable and well-suited accommodation can help ease the transition to life in a new country, enabling you to focus on your studies and enjoy the broader experience of living abroad. By assisting in your search&lsquo; we ensure that you feel at home&lsquo; wherever you choose to stay.</p>
            <h3 className="text-3xl font-bold text-left">Accommodation options:</h3>
            <ul>
              <li className="flex gap-2 items-center p-2 "> <BsFillAirplaneFill className="text-[#772edf]" /> <span>University dormitories: Offers convenience and a social atmosphere.</span></li>
              <li className="flex gap-2 items-center p-2"> <BsFillAirplaneFill className="text-[#772edf]" /> <span>Private apartments: Provides independence and privacy.</span></li>
              <li className="flex gap-2 items-center p-2"> <BsFillAirplaneFill className="text-[#772edf]" /> <span>Shared housing: Encourages camaraderie and social interactions..</span></li>
              <li className="flex gap-2 items-center p-2"> <BsFillAirplaneFill className="text-[#772edf]" /> <span>Homestays: Offers cultural immersion by living with a host family.</span></li>
            </ul>

          </div>
        </section>
      </main>
    </div>
  )
}
