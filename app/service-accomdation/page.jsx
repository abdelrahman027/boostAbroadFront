'use client'
import {ServiceBody} from '@/components/ServiceBody'
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
            <p>Securing suitable accommodation is a crucial element of studying abroad, as it can significantly impact your overall experience. Whether you prefer the convenience and social atmosphere of university dormitories, the independence of a private apartment, the camaraderie of shared housing, or the cultural immersion of staying with a host family in a homestay, each option has its unique advantages. Finding the right living situation is about more than just a place to sleep; it's about creating an environment that aligns with your personal preferences, lifestyle, and budget. A comfortable and well-suited accommodation can help ease the transition to life in a new country, enabling you to focus on your studies and enjoy the broader experience of living abroad. By assisting in your search, we ensure that you feel at home, wherever you choose to stay.</p>
          </div>
        </section>
      </main>
    </div>
  )
}
