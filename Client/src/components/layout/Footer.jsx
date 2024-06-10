import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const MENUBAR = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
    { name: "Products", link: "/products" },
    { name: "Privacy Policy", link: "/privacy-policy" },
  ];
  return (
   <footer className=" bg-teal-200 pb-3">
     <div className="flex flex-col gap-8 md:flex-row justify-between px-6 py-4">
      <div className="flex-1">
        <h1 className="text-[24px] font-bold bg-teal-500 px-2 py-1 text-teal-100">ShopME</h1>
        <p className="text-[16px] text-justify pt-3 leading-loose">
          Discover an extensive collection of top-quality products at the best
          prices. Whether you're looking for the latest fashion trends,
          cutting-edge electronics, or everyday essentials, ShopMe has you
          covered. Experience seamless shopping with fast shipping and
          exceptional customer support.
        </p>
      </div>
      <div className="  flex-1">
        <h2 className="text-[24px] font-bold bg-teal-500 px-2 py-1 text-teal-100">Quick Links</h2>
        <ul className="flex flex-col gap-2">
          {MENUBAR.map((item, index) => {
            return <Link to={item.link} key={index}>{item.name}</Link>;
          })}
        </ul>
      </div>
      <div className="flex-1">
        <h2 className="text-[24px] font-bold bg-teal-500 px-2 py-1 text-teal-100">Customer Support</h2>
        <p className="text-[18px]">Have questions? <br /> Need assistance?<br /> Our team is here to help!</p>
        <p>Email: <span className="text-blue-600">support@shopme.com</span></p> 
        <p >Phone: <span className="text-blue-600">+1 (123) 456-7890</span></p>
      </div>
    </div>
     
    <p className="font-bold text-center">© 2024 ShopMe. All Rights Reserved.</p>
   </footer>
  );
};

export default Footer;
