import React from "react";
import Image from "next/image";

const MoreNews: React.FC = () => {
  const articles = [
    {
      category: "TRAVEL",
      title: "Article title",
      description:
        "Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat…",
      timeAgo: "2 min ago",
    },
    {
      category: "TECHNOLOGY",
      title: "Article title",
      description:
        "Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat…",
      timeAgo: "2 min ago",
    },
  ];

  return (
    <div className="bg-white" style={{ height: "545px" }}>
      <div className="flex justify-between items-center mb-4 pt-16">
        <h2 className="text-xl font-bold text-gray-800 ms-16">MORE NEWS</h2>
        <div className="flex space-x-2 text-gray-500 me-16">
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
      <hr className="border-t border-gray-200 my-4 mx-16" />
      {articles.map((article, index) => (
        <div key={index} className="mb-4 mx-16">
          <p className="text-[#FC6680] font-bold">{article.category}</p>
          <h3 className="text-md font-bold text-gray-800">{article.title}</h3>
          <p className="text-sm text-gray-600">{article.description}</p>
          <div className="flex items-center text-gray-400 text-xs mt-2">
            <Image
              src="/icons/clock-2.svg"
              alt="Clock Icon"
              width={14}
              height={14}
            />
            <span className="ml-1 italic">{article.timeAgo}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoreNews;
