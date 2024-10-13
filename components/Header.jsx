"use client";
import Link from "next/link";
import { useState } from "react";
import { Input, Modal, Typography, Button } from 'antd';
import { useRouter } from 'next/navigation';
import axios from "axios";
const { TextArea } = Input;

const Header = () => {
  const [isOpened, setIsOpened] = useState(false);

  const router = useRouter();
  const [searchValue, setSearchValue] = useState('');

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNum: '',
    source: '',
    comment: ''
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://getform.io/f/blljrpeb", formData,
        { headers: { 'Accept': 'application/json' } })
  };

  const handleSearch = (event) => {
    event.preventDefault();
    router.push(`/search/${searchValue}`);
    setSearchValue('')
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header className="bg-white z-50 shadow-xl">
        <div className="container block lg:flex justify-between items-center gap-24">
          <div className="flex gap-10 justify-between items-center">
            <Link href="/">
              <img className="h-12" src="/logo.png" alt="Logo Image" />
            </Link>
            <button
              className="block lg:hidden"
              onClick={() => setIsOpened((prev) => !prev)}
            >
              <img className="h-12" src="/icons/menu.png" alt="Menu Icon" />
            </button>
            <ul className="hidden lg:flex justify-center items-center gap-10">
              <li className="py-7">
                <Link href="/">
                  <button className="text-dark">Home</button>
                </Link>
              </li>
              <li className="py-7">
                <Link href="/services">
                  <button className="text-dark">Services</button>
                </Link>
              </li>
              <li className="py-7">
                <Link href="/about">
                  <button className="text-dark">About</button>
                </Link>
              </li>
              <li className="py-7">
                <Link href="/events">
                  <button className="text-dark">Events</button>
                </Link>
              </li>
              <li className="py-7">
                <Link href="/blog">
                  <button className="text-dark">Blog</button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center gap-7 sm:pb-5 md:pb-0">
            <form onSubmit={handleSearch}>
              <div className="search-box">
                <input className="search-txt" onChange={ev => setSearchValue(ev.target.value)} value={searchValue} type="text" name="" placeholder="Type the university" />
                <a className="search-btn" href="#">
                  <img src="/icons/search.svg" width="20" alt="" />
                </a>
              </div>
            </form>
            <button className="py-3 px-5 rounded border-black border-2 bg-black text-sm text-white" onClick={showModal}>
              Get consultation
            </button>
            <Modal open={isModalOpen} onCancel={handleCancel} footer={null}>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                  <Typography.Title className="my-3" level={5}>
                    Full name
                  </Typography.Title>
                  <Input
                    placeholder="Insert your full name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Typography.Title className="my-3" level={5}>
                    Email
                  </Typography.Title>
                  <Input
                    type="email"
                    placeholder="Insert your email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Typography.Title className="my-3" level={5}>
                    Phone number
                  </Typography.Title>
                  <Input
                    type="text"
                    placeholder="Insert your phone number (Whatsapp number)"
                    name="phoneNum"
                    value={formData.phoneNum}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Typography.Title className="my-3" level={5}>
                    Source
                  </Typography.Title>
                  <Input
                    placeholder="Where did you hear about us?"
                    name="source"
                    value={formData.source}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col gap-2 col-span-full">
                  <Typography.Title className="my-3" level={5}>
                    Comment
                  </Typography.Title>
                  <TextArea
                    showCount
                    maxLength={100}
                    placeholder="Leave your comment for us"
                    name="comment"
                    value={formData.comment}
                    onChange={handleInputChange}
                    className="mb-5"
                  />
                </div>
                <div className="col-span-full flex justify-end mt-4">
                  <button type="submit" className="bg-black px-4 py-2 rounded-lg text-white" onClick={handleCancel}>
                    Submit
                  </button>
                </div>
              </form>
            </Modal>
          </div>
        </div>
      </header>
      {isOpened && (
        <section className="fixed flex flex-col gap-10 items-center justify-center inset-0 bg-white z-50">
          <a href="">
            <img src="/logo.png" className="h-24" alt="Logo Image" />
          </a>
          {[
            { title: "Home", path: "/" },
            { title: "About", path: "/about" },
            { title: "Services", path: "/services" },
            { title: "Blog", path: "/blog" },
            { title: "Events", path: "/events" },
          ].map((item) => (
            <Link key={item.path} href={item.path} onClick={() => setIsOpened(false)} className="text-3xl text-black font-bold">
              {item.title}
            </Link>
          ))}
          <button
            onClick={() => setIsOpened(false)}
            className="bg-black border border-black font-bold text-xl px-8 py-3 rounded-lg text-white capitalize"
          >
            close
          </button>
        </section>
      )}
    </>
  );
};

export default Header;
