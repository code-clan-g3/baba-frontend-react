import { baloon } from "../assets";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [credentials, setCredentials] = useState({
    full_name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
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
    setLoading(true)

    if (credentials.confirmPassword !== credentials.password){
        setError("Passwords are not equal")
        return;
    }

    try{
        const response = await fetch("http://127.0.0.1:5000/auth/signup", {
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
        }else {
            const errorData = await response.json();
            setError(errorData.error);
        }
    } catch(error){
        setError("An error occured, please try again later");
    }finally{
        setLoading(false);
    }

  }

  return (
    <section className="flex gap-10">
      <div className="bg-[#B0BAC366] fixed overflow-hidden w-[800px] h-screen lg:flex hidden">
        <img
          src={baloon}
          alt="Baloon"
          className="md:w-[500px] md:flex hidden pt-[100px] m-auto"
        />
      </div>
      <div className="bg-[#FFF] lg:w-[800px] px-10 py-20 lg:ms-[800px]">
        <h1 className="font-bold text-[30px] text-center pb-[40px]">
          Create your Free account
        </h1>

        <form action="" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-[40px] lg:w-[600px]">
            <div className="flex flex-col text-left">
              <label
                htmlFor="Full Name"
                className="text-[20px] font-[600] text-gray-600"
              >
                {" "}
                Full Name
              </label>
              <input
                type="text"
                name="full_name"
                placeholder="Enter your Full Name here"
                value={credentials.full_name}
                onChange={handleChange}
                className="bg-[#B0BAC366] rounded-[20px] h-[55px] text-gray-600 border-none outline-none px-[20px] text-[20px] placeholder:text-[20px] placeholder:font-[600] py-[15px] w-full"
              />
            </div>
            <div className="flex flex-col text-left">
              <label
                htmlFor="Email"
                className="text-[20px] font-[600] text-gray-600"
              >
                {" "}
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your Full Name here"
                value={credentials.email}
                onChange={handleChange}
                className="bg-[#B0BAC366] rounded-[20px] h-[55px] text-gray-600 border-none outline-none px-[20px] text-[20px] placeholder:text-[20px] placeholder:font-[600] py-[15px] w-full"
              />
            </div>
            <div className="flex flex-col text-left">
              <label
                htmlFor="Full Name"
                className="text-[20px] font-[600] text-gray-600"
              >
                {" "}
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your Password"
                value={credentials.password}
                onChange={handleChange}
                className="bg-[#B0BAC366] rounded-[20px] h-[55px] text-gray-600 border-none outline-none px-[20px] text-[20px] placeholder:text-[20px] placeholder:font-[600] py-[15px] w-full"
              />
            </div>
            <div className="flex flex-col text-left">
              <label
                htmlFor="Full Name"
                className="text-[20px] font-[600] text-gray-600"
              >
                {" "}
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={credentials.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your Password"
                className="bg-[#B0BAC366] rounded-[20px] h-[55px] text-gray-600 border-none outline-none px-[20px] text-[20px] placeholder:text-[20px] placeholder:font-[600] py-[15px] w-full"
              />
            </div>
          </div>
          {error && (
            <div className="text-red-500 text-sm font-semibold">{error}</div>
          )}
          <button
            type="submit"
            className="text-white text-[25px] rounded-md bg-[#4F46E5] mt-[40px] text-center flex py-2 w-[300px] font-[600] m-auto justify-center mb-[50px]"
            disabled={loading}
          > {loading? "Loading..." : "Create Account"}
          </button>
          <span className="mt-[50px] text-[20px]">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500">
              login
            </Link>
          </span>
        </form>
      </div>
    </section>
  );
};

export default Register;
