import React, { useState } from "react";

function Slideshow({ cards }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };
  return (
    <>
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <section className="bg-green-3 text-blue-1 px-4 py-8 rounded-[1rem] shadow-lg hover:shadow-black max-w-[21rem]">
          <h1 className="headerText text-2xl mb-2">
            User Friendly Experience
          </h1>
          <p className="text-lg">
            We believe that managing your finances should be intuitive and
            straightforward. That's why Budget-Buddy offers a user-friendly
            interface that anyone can navigate with ease. No complex
            spreadsheets or financial jargon—just a simple, enjoyable
            experience.
          </p>
        </section>
        <section className="bg-green-3 text-blue-1 px-4 py-8 rounded-[1rem] shadow-lg hover:shadow-black max-w-[21rem]">
          <h1 className="headerText text-2xl mb-2">Data Security Matters</h1>
          <p className="text-lg">
            Your financial data is precious, and we treat it that way.
            Budget-Buddy employs the latest security measures to ensure that
            your information remains safe and confidential. Rest easy knowing
            your financial details are in good hands.
          </p>
        </section>
        <section className="bg-green-3 text-blue-1 px-4 py-8 rounded-[1rem] shadow-lg hover:shadow-black max-w-[21rem]">
          <h1 className="headerText text-2xl mb-2">Ahead of the Curve</h1>
          <p className="text-lg">
            Budget-Buddy is more than just a budgeting tool; it's a financial
            companion that grows with you. As your financial goals change, our
            platform adapts to your needs, offering you the tools and insights
            to stay ahead of the curve.
          </p>
        </section>
        <section className="bg-green-3 text-blue-1 px-4 py-8 rounded-[1rem] shadow-lg hover:shadow-black max-w-[21rem]">
          <h1 className=" headerText text-2xl mb-2">
            Community of Financial Success
          </h1>
          <p className="text-lg">
            Join a community of users who are taking control of their finances
            and achieving their financial dreams with Budget-Buddy. Share
            insights, learn from others, and be inspired by success stories
            within our platform.
          </p>
        </section>
      </div>
      <div className="flex flex-col gap-3 items-center">
        <section className="bg-green-3 text-blue-1 px-4 py-8 rounded-[1rem] shadow-lg shadow-black max-w-[21rem] md:hidden">
          <h1 className="headerText text-2xl mb-2">
            {cards[currentIndex].title}
          </h1>
          <p className="text-lg">{cards[currentIndex].content}</p>
        </section>
        <div>
          <button
            onClick={handlePrev}
            className="bg-cream-1 rounded-[50%] p-3 mr-2 md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={{ fill: "rgba(0, 0, 0, 1)", transform: "", msFilter: "" }}
            >
              <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="bg-cream-1 rounded-[50%] p-3 md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={{ fill: "rgba(0, 0, 0, 1)", transform: "", msFilter: "" }}
            >
              <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default Slideshow;
