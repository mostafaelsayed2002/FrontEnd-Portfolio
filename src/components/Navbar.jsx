import * as React from "react";
import Typography from "@mui/material/Typography";
import { RiArrowDropDownFill } from "react-icons/ri";

const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <div className="items py-2 px-10 pt-4 fixed top-0 justify-between  bg-white  flex   gap-4  w-full border-t border-gray-300  ">
      <div className="flex items-center ">
        <Typography
          variant="h5"
          noWrap
          sx={{
            display: { xs: "flex", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 1000,
            letterSpacing: ".001rem",
            color: "inherit",
          }}
        >
          <span className="text-4xl pr-3"> 👨🏻‍💻 </span>{" "}
          <span className="pt-2">mostafa.dev</span>
        </Typography>
      </div>
      <div className=" items-center gap-6 hidden md:flex ">
        <a
          href="#Home"
          className="scroll-smooth text-lg p-2  tex- hover:bg-gray-200 rounded-xl font-bold "
        >
          Home
        </a>
        <a
          href="#About"
          className="text-lg p-2  hover:bg-gray-200 rounded-xl font-bold "
        >
          About
        </a>
        <a
          href="#Projects"
          className="text-lg p-2  hover:bg-gray-200 rounded-xl font-bold "
        >
          Projects
        </a>
        <a
          href="#Contact"
          className="text-lg p-2   hover:bg-gray-200 rounded-xl font-bold "
        >
          Contact
        </a>
      </div>
      <div className="flex md:hidden">
        <button onClick={() => setShowMenu(!showMenu)}>
          <RiArrowDropDownFill
            size={45}
            className={`${!showMenu ? "" : " rotate-180"} flex md:hidden `}
          />
        </button>
      </div>

      {showMenu && (
        <div className=" md:hidden absolute right-5 top-12  flex-col flex font-bold rounded-xl bg-[#d7d7d7]">
          <button onClick={() => setShowMenu(false)}>
            <a href="#Home">
              <div className="border-b rounded-t-xl p-2 hover:bg-gray-400">
                Home
              </div>
            </a>
          </button>
          <button onClick={() => setShowMenu(false)}>
            <a href="#About">
              <div className="border-b  p-2 hover:bg-gray-400">About</div>
            </a>
          </button>
          <button onClick={() => setShowMenu(false)}>
            <a href="#Projects">
              <div className="p-2 border-b  hover:bg-gray-400">Projects</div>
            </a>
          </button>
          <button onClick={() => setShowMenu(false)}>
            <a href="#Contact">
              <div className="p-2 border-b rounded-b-xl hover:bg-gray-400">
                Contact
              </div>
            </a>
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
