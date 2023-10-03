function SignIn() {
  return (
    <>
      <div className="bg-cream-1 text-lg flex flex-col md:grid grid-cols-3 min-h-[100vh] px-2">
        <section className="bg-blue-1 text-cream-1 hidden md:flex flex-col justify-center px-4">
          <h1 className="headerText text-4xl">
            Welcome Back to <br />
            <span className="text-green-1 text-5xl">Budget Buddy</span>
          </h1>
          <p className="">Sign in to continue to your account.</p>
        </section>
        <div className="flex flex-col col-span-2 place-self-center py-4 ">
          <div className="flex flex-col gap-4 px-2">
            <button className="border-2 border-black text-lg font-semibold flex w-full py-4 px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{
                  fill: "rgba(0, 0, 0, 1)",
                  transform: "",
                  msFilter: "",
                }}
              >
                <path d="M20.26 7.8a4.82 4.82 0 0 0-3.93-2.44 3.91 3.91 0 0 0-2.54 1.09 10.58 10.58 0 0 0-1.52 1.71 11 11 0 0 0-1.63-1.72 4.39 4.39 0 0 0-2.88-1.08A5 5 0 0 0 3.7 8 11.49 11.49 0 0 0 2 14a7 7 0 0 0 .18 1.64A4.44 4.44 0 0 0 2.71 17a3.23 3.23 0 0 0 3 1.6c1.25 0 2.19-.56 3.3-2a26.4 26.4 0 0 0 2.21-3.6l.63-1.12c.06-.09.11-.18.16-.27l.15.25 1.79 3A14.77 14.77 0 0 0 16 17.63a3.38 3.38 0 0 0 2.55 1 3 3 0 0 0 2.54-1.23 2.2 2.2 0 0 0 .18-.28 4.1 4.1 0 0 0 .31-.63l.12-.35A6.53 6.53 0 0 0 22 15a9 9 0 0 0 0-1 11.15 11.15 0 0 0-1.74-6.2zm-10.12 3.56c-.64 1-1.57 2.51-2.37 3.61-1 1.37-1.51 1.51-2.07 1.51a1.29 1.29 0 0 1-1.15-.66 3.3 3.3 0 0 1-.39-1.7A9.74 9.74 0 0 1 5.54 9a2.8 2.8 0 0 1 2.19-1.47A3 3 0 0 1 10 8.74a14.07 14.07 0 0 1 1 1.31zm8.42 5.12c-.48 0-.85-.19-1.38-.83A34.87 34.87 0 0 1 14.82 12l-.52-.86c-.36-.61-.71-1.16-1-1.65a2.46 2.46 0 0 1 .17-.27c.94-1.39 1.77-2.17 2.8-2.17a3.12 3.12 0 0 1 2.49 1.66 10.17 10.17 0 0 1 1.37 5.34c-.04 1.31-.34 2.43-1.57 2.43z"></path>
              </svg>
              <span className="mx-auto"> Continue with Facebook</span>
            </button>
            <button className="border-2 border-black text-lg font-semibold flex w-full py-4 px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{
                  fill: "rgba(0, 0, 0, 1)",
                  transform: "",
                  msFilter: "",
                }}
              >
                <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
              </svg>
              <span className="mx-auto"> Continue with Google</span>
            </button>
            <button className="border-2 border-black text-lg font-semibold flex w-full py-4 px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{
                  fill: "rgba(0, 0, 0, 1)",
                  transform: "",
                  msFilter: "",
                }}
              >
                <path d="M19.665 16.811a10.316 10.316 0 0 1-1.021 1.837c-.537.767-.978 1.297-1.316 1.592-.525.482-1.089.73-1.692.744-.432 0-.954-.123-1.562-.373-.61-.249-1.17-.371-1.683-.371-.537 0-1.113.122-1.73.371-.616.25-1.114.381-1.495.393-.577.025-1.154-.229-1.729-.764-.367-.32-.826-.87-1.377-1.648-.59-.829-1.075-1.794-1.455-2.891-.407-1.187-.611-2.335-.611-3.447 0-1.273.275-2.372.826-3.292a4.857 4.857 0 0 1 1.73-1.751 4.65 4.65 0 0 1 2.34-.662c.46 0 1.063.142 1.81.422s1.227.422 1.436.422c.158 0 .689-.167 1.593-.498.853-.307 1.573-.434 2.163-.384 1.6.129 2.801.759 3.6 1.895-1.43.867-2.137 2.08-2.123 3.637.012 1.213.453 2.222 1.317 3.023a4.33 4.33 0 0 0 1.315.863c-.106.307-.218.6-.336.882zM15.998 2.38c0 .95-.348 1.838-1.039 2.659-.836.976-1.846 1.541-2.941 1.452a2.955 2.955 0 0 1-.021-.36c0-.913.396-1.889 1.103-2.688.352-.404.8-.741 1.343-1.009.542-.264 1.054-.41 1.536-.435.013.128.019.255.019.381z"></path>
              </svg>
              <span className="mx-auto">Continue with Apple</span>
            </button>
          </div>
          <hr />
          <form className="flex flex-col gap-5 px-2 mt-5" action="">
            <input
              className="bg-cream-1 border-2 h-[3.5rem] px-3 hover:bg-white focus:bg-white"
              type="email"
              name=""
              id=""
              required
              placeholder="Email Address"
            />
            <input
              className="bg-cream-1 border-2 h-[3.5rem] px-3 hover:bg-white focus:bg-white"
              type="password"
              name=""
              id=""
              required
              placeholder="Password"
            />
            <div className="flex items-center gap-2">
              <input
                className="w-[2rem] h-[2rem]"
                type="checkbox"
                name=""
                id=""
              />
              <label htmlFor="">Keep me signed in until i sign out</label>
            </div>

            <button
              className="bg-blue-1 text-cream-1 border-2 border-blue-1 py-3 hover:bg-cream-1 hover:text-blue-1"
              type="submit"
            >
              Sign In
            </button>
          </form>
          <p>Forgot password?</p>
          <p className="mt-[40%] md:mt-auto mx-auto ">
            Not a Member yet? Sign Up
          </p>
        </div>
      </div>
    </>
  );
}

export default SignIn;
