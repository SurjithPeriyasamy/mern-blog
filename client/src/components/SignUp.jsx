import { useState } from "react";
import Logo from "./Logo";
import { FaGoogle } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(null);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage("Please fill out all fields");
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      navigate("/sign-in");
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };
  return (
    <div className="min-h-dvh mt-40 p-5">
      <div className="md:flex *:lg:basis-1/3 *:md:basis-2/4 md:justify-center md:gap-5 md:items-center space-y-5">
        <div className="space-y-5">
          <div className="text-4xl">
            <Logo />
          </div>
          <p>
            This is a demo project. You can sign up with your email and password
            or with Google.
          </p>
        </div>
        <div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col *:flex *:flex-col  gap-5"
          >
            <div>
              <label className="font-medium max-sm:text-sm">
                Your Username
              </label>
              <input
                onChange={handleChange}
                id="username"
                type="text"
                placeholder="Username"
                className="border py-2 px-3 rounded-xl border-gray-400 bg-gray-100 outline-cyan-600 placeholder:text-gray-500 placeholder:max-sm:text-sm"
              />
            </div>
            <div>
              <label className="font-medium max-sm:text-sm">Your email</label>
              <input
                onChange={handleChange}
                id="email"
                type="text"
                placeholder="enjoy@gmail.com"
                className="border py-2 px-3 rounded-xl border-gray-400 bg-gray-100 outline-cyan-600 placeholder:text-gray-500 placeholder:max-sm:text-sm"
              />
            </div>
            <div>
              <label className="font-medium max-sm:text-sm">
                Your password
              </label>
              <input
                onChange={handleChange}
                id="password"
                type="text"
                className="border py-2 px-3 rounded-xl border-gray-400 bg-gray-100 outline-cyan-600 placeholder:text-gray-500 placeholder:max-sm:text-sm"
                name="password"
              />
            </div>
            {errorMessage && (
              <div className="bg-red-500 text-white p-2 rounded-lg ">
                {errorMessage}
              </div>
            )}
            <div
              disabled={loading}
              className="max-sm:text-sm text-center text-white p-2 rounded-xl font-medium bg-gradient-to-r from-indigo-500 to-pink-700 hover:bg-gradient-to-l duration-150"
            >
              {loading ? (
                <div className="flex justify-center gap-2">
                  <div className="size-6 rounded-full border-y-2 animate-spin border-white"></div>
                  Loading
                </div>
              ) : (
                <button>Sign Up</button>
              )}
            </div>
          </form>
          <button className=" max-sm:text-sm border-2 rounded-xl font-medium border-orange-600 p-2 group hover:bg-gradient-to-tr duration-100 transition-colors from-orange-500 to-pink-500 hover:text-white flex items-center mt-4 w-full justify-center gap-3">
            <FaGoogle className="bg-black size-6 p-[5px] rounded-full text-white group-hover:text-orange-500 group-hover:bg-white" />
            <span className="">Continue with Google</span>
          </button>
          <div className="font-medium mt-2">
            Have an Account ?{" "}
            <Link to="/sign-in" className="text-indigo-600">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
