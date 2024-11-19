// import bgImage from "../../assets/baloon-image.jpg";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); 


  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try{
      const response = await fetch("http://127.0.0.1:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        localStorage.setItem("name", data.user.full_name);
        localStorage.setItem("thread_id", data.chat.thread_id)

        navigate("/chatroom");
        alert(data.message);
      } else {
        const errorData = await response.json();
        setError(errorData.message);
      }

    } catch (error){
      setError("An error occured. Please try again later.");
    } finally{
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-screen bg-[#FCFEFF]">
      <div className="w-[50%] lg:min-w-[560px] h-screen bg-[url('/baloon-image.jpg')] bg-cover hidden md:block"></div>
      <div className="flex justify-start md:justify-center  items-center flex-col p-8 md:p-10 w-full h-full gap-10 rounded-l-6xl">
        <div className="flex justify-center items-center flex-col">
          <Logo />
          <h1 className="text-3xl md:text-5xl font-bold">Welcome back!</h1>
          <p className="text-left mt-3">
            Kindly enter valid credentials to login back to your account.
          </p>
        </div>
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex justify-center items-center flex-col w-full gap-4 px-20"
        >
          <div className="w-full flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-base font-semibold text-[#7C838A]"
            >
              Email Address:
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              value={credentials.email}
              onChange={handleChange}
              className="w-full rounded-xl border-none bg-gray-300 text-gray-600 font-medium outline-[#4F46E5] h-[50px] px-4"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label
              htmlFor="password"
              className="text-base font-semibold text-[#7C838A]"
            >
              Password:
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter valid password"
              value={credentials.password}
              onChange={handleChange}
              className="w-full rounded-xl border-none bg-gray-300 text-gray-600 font-medium outline-[#4F46E5] h-[50px] px-4"
            />
          </div>
          {error && (
            <div className="text-red-500 text-sm font-semibold">{error}</div>
          )}
          <button
            className="w-[100%] h-[40px] md:h-[50px] rounded-xl font-bold text-sm md:text-lg bg-[#4F46E5] text-white hover:opacity-95 active:scale-95"
            disabled={loading} 
          >
            {loading ? "Loading..." : "Login"} {}
          </button>
        </form>
        <div className="">
          <p className="text-sm text-left w-full font-semibold mx-20">
            Don&apos;t have an account?{" "}
            <span className="cursor-pointer text-[#4F46E5] hover:text-yellow-600">
              Create an account.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
