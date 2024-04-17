import { IoSearchSharp } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className="flex justify-between items-center border-[2px] border-gray-300 bg-gray-200 rounded-lg p-1 px-2">
      <input
        placeholder="Search..."
        className="bg-transparent p-[1px] outline-none w-full placeholder:text-gray-500"
        type="text"
      />
      <IoSearchSharp size={20} className="text-gray-500 " />
    </div>
  );
};
export default SearchBar;
