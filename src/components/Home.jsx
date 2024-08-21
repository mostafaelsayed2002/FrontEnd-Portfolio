import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

import { Grid } from "@mui/material";
import TailWind from "./ImageComponent/TailWind";
import CSS from "./ImageComponent/CSS";
import Html from "./ImageComponent/Html";
import ReactSVG from "./ImageComponent/ReactSVG";
import JavaScript from "./ImageComponent/JavaScript";
import TypeScript from "./ImageComponent/TypeScript";
import Next from "./ImageComponent/Next";

function Home() {
  return (
    <div className="flex flex-col gap-4" id="Home">
      <Grid
        container
        spacing={4}
        sx={{ mt: 15 }}
        className="flex justify-center  "
        id="home"
      >
        <Grid item sm={12} md={6}>
          <div className="flex flex-col gap-6 ">
            <div className="text-6xl text-black font-bold">
              <h1>Front-End React</h1>
              <h1>Developer 👋🏻</h1>
            </div>

            <div className="text-xl  text-gray-500 ">
              <h1>
                I'm Mostafa Elsayed, a passionate Front-End React Developer
              </h1>
              <h1>and very interested in IoT</h1>
            </div>

            <div className="flex flex-row gap-4 items-center">
              <a href="https://github.com/mostafaelsayed2002">
                <BsGithub size={35} className="hover:text-blue-600" />
              </a>
              <a
                className="round-full  "
                href="https://www.linkedin.com/in/mostafa-elsayed-19a610214/"
              >
                <BsLinkedin size={33} className="hover:text-blue-600 " />
              </a>
              <a
                className="round-full  "
                href="mailto:mostafa.elsayed.2002@gmail.com"
              >
                <SiGmail size={38} className="hover:text-blue-600 " />
              </a>
              <a
                href="https://drive.usercontent.google.com/u/0/uc?id=1OPkYbrzzwpr-CvyyGclZ7n6nuqYvO8y4&export=download"
                class="bg-transparent hover:bg-blue-500  hover:text-white py-2 px-4  border-[2px] border-black hover:border-transparent rounded-2xl font-bold"
              >
                Download CV
              </a>
            </div>
          </div>
        </Grid>
        <Grid item sm={12} md={6}>
          <div className="flex justify-center ">
            <img
              alt="Mostafa Elsayed"
              src="https://i.imgur.com/ilrF0hw.jpg"
              className="max-h-[390px] p-3 rounded-full border-2 border-gray-300"
            />
          </div>
        </Grid>
      </Grid>
      <div className="flex items-center gap-10 ">
        <Grid container spacing={2} mt={4}>
          <Grid item sm={12} md={1.5}>
            <div className="font-bold text-2xl ">Tech Stack </div>
          </Grid>
          <Grid item md={1}>
            <div className="w-10 h-10">
              <Html />
            </div>
          </Grid>
          <Grid item md={1}>
            <div className="w-10 h-10">
              <CSS />
            </div>
          </Grid>
          <Grid item md={1}>
            <div className="w-10 h-10">
              <TypeScript />
            </div>
          </Grid>
          <Grid item md={1}>
            <div className="w-10 h-10">
              <JavaScript />
            </div>
          </Grid>
          <Grid item md={1}>
            <div className="w-10 h-10">
              <ReactSVG />
            </div>
          </Grid>
          <Grid item md={1}>
            <div className="w-10 h-10">
              <Next />
            </div>
          </Grid>
          <Grid item md={1.5}>
            <div className="w-14 h-14">
              <TailWind />
            </div>
          </Grid>
        </Grid>
      </div>
      <div id="About"></div>
    </div>
  );
}

export default Home;
