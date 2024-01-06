function Dashboard() {
  return (
    <>
      <section>
        <section className="flex justify-center items-center gap-4 py-5">
          <button className=" bg-green-1 text-white rounded-[1rem] px-4 py-4 hover:bg-white hover:text-black">
            Income
          </button>
          <button className=" bg-green-1 text-white rounded-[1rem] px-4 py-4 hover:bg-white hover:text-black">
            Expenses
          </button>
          <button className=" bg-green-1 text-white rounded-[1rem] px-4 py-4 hover:bg-white hover:text-black">
            Investment
          </button>
          <button className=" bg-green-1 text-white rounded-[1rem] px-4 py-4 hover:bg-white hover:text-black">
            Savings
          </button>
        </section>
        {/* section to contain the analytics graphs */}
        <section></section>

        {/* Section to show totals */}
        <section className="flex justify-center items">
          <h2 className="px-4 py-4"> Income: $40,000 </h2>
          <h2 className="px-4 py-4"> Income: $40,000 </h2>
          <h2 className="px-4 py-4"> Income: $40,000 </h2>
          <h2 className="px-4 py-4"> Income: $40,000 </h2>
        </section>
      </section>
    </>
  );
}

export default Dashboard;
