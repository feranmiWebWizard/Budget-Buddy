import headerImage from "../assets/Images/Spreadsheets-bro.png";
import Slideshow from "./Slideshow";

function Home() {
  const cards = [
    {
      title: "User Friendly Experience",
      content: `We believe that managing your finances should be intuitive and
    straightforward. That's why Budget-Buddy offers a user-friendly
    interface that anyone can navigate with ease. No complex spreadsheets
    or financial jargon—just a simple, enjoyable experience.`,
    },
    {
      title: "Data Security Matters",
      content: `Your financial data is precious, and we treat it that way.
    Budget-Buddy employs the latest security measures to ensure that your
    information remains safe and confidential. Rest easy knowing your
    financial details are in good hands.`,
    },
    {
      title: "Ahead of the Curve",
      content: `Budget-Buddy is more than just a budgeting tool; it's a financial
    companion that grows with you. As your financial goals change, our
    platform adapts to your needs, offering you the tools and insights to
    stay ahead of the curve.`,
    },
    {
      title: "Community of Financial Success",
      content: `Join a community of users who are taking control of their finances and
    achieving their financial dreams with Budget-Buddy. Share insights,
    learn from others, and be inspired by success stories within our
    platform.`,
    },
  ];
  return (
    <>
      <div className="bg-green-2 text-cream-1 border-[1rem] border-green-1 px-4 py-5 lg:flex justify-center items-center">
        <section className="max-w-[40rem]">
          <h1 className="headerText text-3xl md:text-5xl mb-4">
            Budget Buddy: Your Financial Companion
          </h1>
          <p className="text-blue-1 text-lg md:text-xl">
            We understand that managing your finances effectively is essential
            for a secure and stress-free future. That's why we've created a
            powerful platform that empowers you to take control of your money
            effortlessly.
          </p>
          <button className="bg-blue-1 text-white text-xl px-8 py-3 mr-2 mt-4 hover:bg-white hover:text-blue-1 transition ease-in-out delay-150">
            Sign Up
          </button>
        </section>
        <img
          src={headerImage}
          alt="a laptop showing charts"
          className="lg:max-w-[40rem]"
        />
      </div>

      <div className="bg-green-1 text-cream-1 py-5 px-4 flex flex-col gap-4 items-center">
        <Slideshow cards={cards} />
      </div>
    </>
  );
}

export default Home;
