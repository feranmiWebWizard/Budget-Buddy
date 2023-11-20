import LoginImg from "../assets/Images/login-page.png";
import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../api/Axios";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const REGISTER_URL = "/createUser";

function SignIn() {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, SetValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, SetValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = emailRegex.test(user);
    SetValidName(result);
  }, [user]);

  useEffect(() => {
    const result = passwordRegex.test(password);
    SetValidPassword(result);
  }, [password]);

  useEffect(() => {
    setErrMsg("");
  }, [user, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const v1 = emailRegex.test(user);
    const v2 = passwordRegex.test(password);

    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }

    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ email: user, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      setSuccess(true);
      console.log(success);
      setPassword("");
      setUser("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No server response");
        console.log(errMsg);
      }
    }
  };

  return (
    <section className="bg-cream-1 text-lg flex flex-col justify-center md:grid grid-cols-3 min-h-[90vh] px-4 md:px-0">
      <section className="bg-blue-1 text-cream-1 hidden md:flex flex-col justify-center px-4">
        <h1 className="headerText text-4xl">
          Welcome Back to <br />
          <span className="text-green-1 text-5xl">Budget Buddy</span>
        </h1>
        <p className="">Sign in to continue to your account.</p>
        <img src={LoginImg} alt="two people having a conversation" />
      </section>
      <section className="flex flex-col col-span-2 max-w-[25rem] w-full place-self-center">
        <button className="border-2 rounded-[1rem] border-black text-lg font-semibold flex py-4 px-4">
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
        <hr />
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-5">
          <label htmlFor="email">
            Email Address:
            <span className={validName ? "valid" : "hide"}>
              <FontAwesomeIcon icon={faCheck} />
            </span>
            <span className={validName || !user ? "hide" : "invalid"}>
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </label>
          <input
            className="bg-cream-1 border-2 border-gray-400 rounded-[0.5rem] h-[3.5rem] px-3 hover:bg-white focus:bg-white"
            type="email"
            id="email"
            value={user}
            ref={userRef}
            autoComplete="off"
            onChange={(e) => {
              setUser(e.target.value);
            }}
            required
            onFocus={() => {
              setUserFocus(true);
            }}
            onBlur={() => {
              setUserFocus(false);
            }}
            placeholder="user@example.com"
          />
          <p
            className={
              userFocus && user && !validName ? "instructions" : "offscreen"
            }
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            Must be a valid email address
          </p>

          <label htmlFor="password">
            Password:
            <span className={validPassword ? "valid" : "hide"}>
              <FontAwesomeIcon icon={faCheck} />
            </span>
            <span className={validPassword || !password ? "hide" : "invalid"}>
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </label>
          <input
            className="bg-cream-1 border-2 border-gray-400 rounded-[0.5rem] h-[3.5rem] px-3 hover:bg-white focus:bg-white"
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            onFocus={() => {
              setPasswordFocus(true);
            }}
            onBlur={() => {
              setPasswordFocus(false);
            }}
            placeholder="*********"
          />
          <p
            className={
              passwordFocus && !validPassword ? "instructions" : "offscreen"
            }
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            8 to 24 characters. <br />
            Must include uppercase and lowercase letters, a number and a special
            character
          </p>
          <button
            disabled={!validName || !validPassword ? true : false}
            className="bg-blue-1 rounded-[0.5rem] text-cream-1 border-2 border-blue-1 py-3"
          >
            Sign In
          </button>
        </form>
      </section>
    </section>
  );
}

export default SignIn;
