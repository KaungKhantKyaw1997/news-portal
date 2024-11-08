import React from "react";
import Image from "next/image";

const HappeningNow: React.FC = () => {
  const mainArticles = [
    {
      header: "CITY",
      title: "Large article title",
      description:
        "Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam detracto, vidit vituperatoribus duo id. Affert detraxit voluptatum vis eu, inermis eloquentiam.",
      timeAgo: "2m ago",
      image: "/images/main-article-1.jpg",
    },
    {
      header: "TRAVEL",
      title: "Large article title",
      description:
        "Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam detracto, vidit vituperatoribus duo id. Affert detraxit voluptatum vis eu, inermis eloquentiam.",
      timeAgo: "2m ago",
      image: "/images/main-article-2.jpg",
    },
  ];

  const smallArticles = [
    {
      title: "Small title",
      timeAgo: "3h ago by",
      name: "Worldnews",
      image: "/images/small-thumbnail-1.jpg",
    },
    {
      title: "Small title",
      timeAgo: "4h ago by",
      name: "Days",
      image: "/images/small-thumbnail-2.jpg",
    },
    {
      title: "Small title",
      timeAgo: "3h ago by",
      name: "Monica",
      image: "/images/small-thumbnail-3.jpg",
    },
  ];

  return (
    <section
      className="px-4"
      style={{ margin: "auto", width: "1000px", maxWidth: "calc(100% - 2rem)" }}
    >
      <div className="flex justify-between items-center mb-6 mt-8">
        <h2 className="text-xl font-bold text-gray-800">HAPPENING NOW</h2>
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
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
        <div className="space-y-4">
          {mainArticles.map((article, index) => (
            <div
              key={index}
              className="relative bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="absolute top-4 left-4">
                <h3 className="text-sm font-bold text-white">
                  {article.header}
                </h3>
              </div>
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 p-4 flex flex-col justify-end">
                <h3 className="text-lg font-semibold text-white">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-200 mt-1">
                  {article.description}
                </p>
                <div className="flex items-center mt-1">
                  <Image
                    src="/icons/clock-2.svg"
                    alt="Clock Logo"
                    width={16}
                    height={16}
                  />
                  <span className="text-xs text-gray-200 italic ml-2">
                    {article.timeAgo}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-8">
          {smallArticles.map((article, index) => (
            <div key={index} className="flex flex-col">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-32 object-cover rounded-lg"
              />
              <div className="mt-2">
                <h3 className="text-sm font-semibold">{article.title}</h3>
                <div className="flex items-center mt-1">
                  <Image
                    src="/icons/clock-1.svg"
                    alt="Clock Logo"
                    width={16}
                    height={16}
                  />
                  <span className="text-xs text-gray-400 italic ml-2">
                    {article.timeAgo}
                  </span>
                  <span className="text-xs text-gray-400 italic ml-1 underline">
                    {article.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HappeningNow;
