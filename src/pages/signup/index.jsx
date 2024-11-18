// import bgImage from "../../assets/baloon-image.jpg";

import { useState } from "react";
import Logo from "../../components/Logo";

const Index = () => {
  const [credentials, setCredentials] = useState({
    fullname: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="flex justify-center items-center w-full h-screen bg-[#FCFEFF]">
      <div className="w-[50%] lg:min-w-[560px] h-screen bg-[url('/baloon-image.jpg')] bg-cover hidden md:block"></div>
      <div className="flex justify-start md:justify-center items-center flex-col w-full h-fit max-h-screen p-8 md:p-10 py-16 gap-10 rounded-l-6xl overflow-scroll">
        <div className="flex justify-center items-center flex-col mt-9">
          <Logo />
          ``
          <h1 className="text-3xl md:text-5xl font-bold">Welcome back!</h1>
          <p className="text-left mt-3">
            Kindly enter valid credentials to login back to your account.
          </p>
        </div>
        <form
          action=""
          className="flex justify-center items-center flex-col w-full gap-4"
        >
          <div className="w-full flex flex-col gap-2">
            <label
              htmlFor="fullname"
              className="text-base font-semibold text-[#7C838A]"
            >
              Full name
            </label>
            <input
              type="fullname"
              name="fullname"
              placeholder="e.g John Doe"
              value={credentials.fullname}
              onChange={(e) => handleChange(e)}
              className="w-full rounded-xl border-none bg-gray-300 text-gray-600 font-medium outline-[#4F46E5] h-[50px] px-4"
            />
          </div>
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
              placeholder="johndoe@gmail.com"
              value={credentials.email}
              onChange={(e) => handleChange(e)}
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
              placeholder="e.g password@123"
              value={credentials.password}
              onChange={(e) => handleChange(e)}
              className="w-full rounded-xl border-none bg-gray-300 text-gray-600 font-medium outline-[#4F46E5] h-[50px] px-4"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label
              htmlFor="confirm_password"
              className="text-base font-semibold text-[#7C838A]"
            >
              Confirm Password:
            </label>
            <input
              type="confirm_password"
              name="confirm_password"
              placeholder="e.g password@123"
              value={credentials.confirm_password}
              onChange={(e) => handleChange(e)}
              className="w-full rounded-xl border-none bg-gray-300 text-gray-600 font-medium outline-[#4F46E5] h-[50px] px-4"
            />
          </div>
          <button className="w-[100%] h-[40px] md:h-[50px] rounded-xl font-bold text-sm md:text-lg bg-[#4F46E5] text-white hover:opacity-95 active:scale-95">
            Login
          </button>
        </form>
        <p className="text-sm text-left w-full font-semibold">
          Don&apos;t have an account?{" "}
          <span className="cursor-pointer text-[#4F46E5] hover:text-yellow-600">
            Create an account.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Index;
