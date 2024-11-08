import React from "react";
import Image from "next/image";

const Trending: React.FC = () => {
  const trendingData = [
    {
      title: "Tartu",
      description:
        "Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.",
      timeAgo: "2m ago",
      image: "/images/trending-1.jpg",
    },
    {
      title: "Siem Reap",
      description:
        "Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.",
      timeAgo: "1h ago",
      image: "/images/trending-2.jpg",
    },
    {
      title: "Maryland",
      description:
        "Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.",
      timeAgo: "3h ago",
      image: "/images/trending-3.jpg",
    },
  ];

  return (
    <section
      className="px-4"
      style={{ margin: "auto", width: "1000px", maxWidth: "calc(100% - 2rem)" }}
    >
      <div className="flex justify-between items-center mb-6 mt-8">
        <h2 className="text-xl font-bold text-gray-800">TRENDING</h2>
        <div className="flex space-x-2 text-gray-500">
          <Image
            src="/icons/left-arrow.svg"
            alt="Left Arrow Icon"
            width={24}
            height={24}
          />
          <Image
            src="/icons/right-arrow.svg"
            alt="Right Arrow Icon"
            width={24}
            height={24}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {trendingData.map((item, index) => (
          <div key={index} className="bg-white rounded-lg">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <h3 className="font-semibold mt-4 px-4">{item.title}</h3>
            <p className="text-sm text-gray-600 mt-2 px-4">
              {item.description}
            </p>
            <div className="flex items-center mt-2 px-4 pb-4">
              <Image
                src="/icons/clock-1.svg"
                alt="Clock Logo"
                width={16}
                height={16}
              />
              <span className="text-xs text-gray-400 italic ml-2">
                {item.timeAgo}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trending;
