
import { SignInButton,  SignedOut } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-white sticky top-0 z-40 py-5">
      <div className="w-11/12 md:w-4/5 m-auto flex justify-between items-center">
        <Link to="/">
          <h1 className="text-4xl font-bold">BuyCar</h1>
        </Link>
        <ul className="hidden md:flex space-x-5 text-sm font-semibold cursor-pointer hover:to-blue-500">
          <li>Home</li>
          <Link to="/cars"><li>Cars</li></Link>
          <li>Contact Us</li>
          <li>Help</li>
        </ul>
        <div className="flex items-center space-x-5">
          <button className="px-5 py-2 text-indigo-600 font-semibold">
          <SignedOut>
        <SignInButton className="px-5 py-2 text-indigo-600 font-semibold" />
      </SignedOut>
          </button>
         
     
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
