import LearnMoreSection from "../components/LearnMoreSection";
import MoreNews from "../components/MoreNews";
import Trending from "../components/Trending";
import HappeningNow from "../components/HappeningNow";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <header className="bg-[#F6F8F9] py-4">
        <div className="px-4 flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-xl font-bold text-[#FC6680]">LOGO</h1>
          <nav className="flex flex-col md:flex-row items-center md:space-x-6 mt-4 md:mt-0">
            {" "}
            <a href="#" className="text-gray-800 font-semibold">
              HOME
            </a>
            <a href="#" className="text-gray-400 font-semibold">
              DISCOVERY
            </a>
            <a href="#" className="text-gray-400 font-semibold">
              PHOTOS
            </a>
            <a href="#" className="text-gray-400 font-semibold">
              CONTACT
            </a>
            <img
              src="/images/profile.jpg"
              alt="Profile"
              className="w-8 h-8 rounded-full ml-4 mt-4 md:mt-0"
            />
          </nav>
        </div>
      </header>

      <div className="flex flex-col md:flex-row gap-0">
        <div className="w-full md:w-2/3">
          <LearnMoreSection />
        </div>
        <div className="w-full md:w-1/3">
          <MoreNews />
        </div>
      </div>

      <Trending />
      <HappeningNow />
      <Footer />
    </div>
  );
}
