"use client";
import Link from "next/link";
import { useState } from "react";
import { Input, Modal, Typography, Button } from 'antd';
const { TextArea } = Input;
const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onChange = (e) => {
    console.log('Change:', e.target.value);
  };
  return (
    <footer className="bg-[#EBE2F8] pt-12 text-dark">
      <div className="container grid lg:grid-cols-3 gap-12 lg:gap-20 pb-12">
        <div className="flex gap-4">
          <img src="/logo.png" className="h-14" />
          <div className="space-y-4">
            <p className="text-[#9B93A6] text-base">
              Get on app to connect with fans, share your sounds, and grow your
              audience. What are you waiting for ?
            </p>
            <button className="rounded px-6 py-2 border-2 border-black inline-block" onClick={showModal}>
              Get free Consultation
            </button>
            <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={[
              <Button key="back" onClick={handleCancel}>
                close
              </Button>,
              <Button key="submit" color="default" variant="solid" onClick={handleOk}>
                Get in contact
              </Button>
            ]}>
              <Typography.Title className="my-3" level={5}>Full name</Typography.Title>
              <Input placeholder="Insert your full name" />
              <Typography.Title className="my-3" level={5}>Email</Typography.Title>
              <Input type="email" placeholder="Insert your Email" />
              <Typography.Title className="my-3" level={5}>Phone number</Typography.Title>
              <Input type="text" placeholder="Insert your phone number ( whatsapp number )" />
              <Typography.Title className="my-3" level={5}>Source</Typography.Title>
              <Input placeholder="Where did you hear about us" />
              <Typography.Title className="my-3" level={5}>Comment</Typography.Title>
              <TextArea className="mb-5" showCount maxLength={100} onChange={onChange} placeholder="Leave your comment for us" />
            </Modal>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Link href="/">Home</Link>
          <Link href="/events">Events</Link>
          <Link href="/services">Services</Link>
          <Link href="/programs">Programs</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          {/* <Link href="/">Terms & Conditions</Link> */}
          {/* <Link href="/">Privacy</Link> */}
        </div>
        <div className="space-y-4">
          <p className="text-lg">
            <span className="font-bold">Subscribe </span>
            to our Newsletter to receive the latest offers and events
          </p>
          <div className="space-y-2">
            <input
              className="rounded-full border-2 py-2 px-6 bg-white w-2/3 outline-none border-third"
              name="email"
              placeholder="Enter your email address"
            />
            <button className="text-white bg-black rounded-full py-2 px-6">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white py-4 text-center text-[#8B8B8B]">
        Travel Aboard, All rights are recived © 2024
      </div>
    </footer>
  );
};

export default Footer;
