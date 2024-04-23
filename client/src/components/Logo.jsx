import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"} className="tracking-wide font-medium ">
      <span className=" mr-1 bg-gradient-to-r from-indigo-500 to-pink-700 px-3 py-1 rounded-lg text-white ">
        Surjith&apos;s
      </span>
      Blog
    </Link>
  );
};
export default Logo;
