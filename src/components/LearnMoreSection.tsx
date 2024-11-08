import React from "react";

const LearnMoreSection: React.FC = () => {
  return (
    <div
      className="relative bg-white overflow-hidden"
      style={{ height: "545px" }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-8">
        <h1 className="text-2xl font-bold text-white text-left w-full max-w-lg">
          WORLD NEWS
        </h1>
        <hr className="w-full max-w-lg border-t-2 border-white my-4" />
        <h3 className="text-xl font-bold text-white text-left w-full max-w-lg mt-2">
          Amazing places in America to visit.
        </h3>
        <p className="text-md text-white text-left w-full max-w-lg">
          For some reason - this country, this city, this neighborhood, this
          particular street - is the place you are living a majority of your
          life in.
        </p>
        <div className="w-full max-w-lg text-left mt-4">
          <button className="w-32 h-10 bg-[#FC6680] text-white rounded-lg font-semibold">
            LEARN MORE
          </button>
        </div>
      </div>
      <img
        src="/images/hero.jpg"
        alt="Hero"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default LearnMoreSection;
