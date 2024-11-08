import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="py-8 mt-8" style={{ backgroundColor: "#A5ACB3" }}>
      <div
        className="px-4 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4"
        style={{
          margin: "auto",
          width: "1000px",
          maxWidth: "calc(100% - 2rem)",
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 gap-4">
          <h3 className="text-sm font-bold text-white">LOGO</h3>
          <div className="text-sm text-[#B6BCC2] font-bold">
            <p>Home</p>
            <p>Discovery</p>
            <p>Photos</p>
            <p>Contact</p>
          </div>
          <div className="text-sm text-[#B6BCC2] font-bold">
            <p>About</p>
            <p>Terms</p>
            <p>Guidelines</p>
            <p>Careers</p>
          </div>
          <div className="text-sm text-[#B6BCC2] font-bold">
            <p>Testimonials</p>
            <p>Advertise</p>
            <p>Integrations</p>
            <p>Careers</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          <div>
            <div className="relative">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 pr-10 rounded-lg text-white placeholder-[#B6BCC2] bg-transparent border border-[#ADB4BB] focus:outline-none focus:ring-0 "
                style={{ backgroundColor: "#A5ACB3" }}
              />
              <Image
                src="/icons/send.svg"
                alt="Send Icon"
                width={16}
                height={16}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              />
            </div>
            <h3 className="text-xs text-[#B6BCC2] font-semibold mt-2">
              Stay in touch with us for the freshest products!
            </h3>
          </div>
          <div className="flex space-x-4 mt-4 sm:mt-0 items-start justify-end">
            <Image
              src="/icons/ig.svg"
              alt="Instagram Logo"
              width={24}
              height={24}
            />
            <Image
              src="/icons/tt.svg"
              alt="Twitter Logo"
              width={24}
              height={24}
            />
            <Image
              src="/icons/fb.svg"
              alt="Facebook Logo"
              width={24}
              height={24}
            />
            <Image src="/icons/web.svg" alt="Web Logo" width={24} height={24} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
