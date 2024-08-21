import { Grid, Typography } from "@mui/material";
import ReactSVG from "./ImageComponent/ReactSVG";
import TailWind from "./ImageComponent/TailWind";
import ProjectCard from "./ProjectCard";
import Next from "./ImageComponent/Next";

function Projects() {
  return (
    <div>
      <Grid container mt={27} mb={27}>
        <Grid item xs={12} sm={12} md={12}>
          <div id="Projects" className="mb-[40px]"></div>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <div className="flex-col flex text-center items-center gap-3">
            <div className="text-gray-400 text-lg">Browse My Recent</div>
            <div>
              <Typography
                variant="h3"
                noWrap
                sx={{
                  display: { xs: "flex", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 1000,
                  letterSpacing: ".1rem",
                  color: "inherit",
                }}
              >
                Projects
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={12} mt={4}>
          <Grid container className="flex justify-between gap-2">
            <Grid xs={12} sm={12} md={3.5}>
              <ProjectCard
                title={"On-The-Go"}
                description={"Restaurant Management System"}
                techarray={[<ReactSVG />, <TailWind />]}
                github={"https://github.com/mostafaelsayed2002/On-The-Go"}
                img={"https://i.imgur.com/80xT6gk.png"}
              />
            </Grid>
            <Grid xs={12} sm={12} md={3.5}>
              <ProjectCard
                title={"Almost Google"}
                description={"Search Engine with Java Backend"}
                techarray={[<Next />, <TailWind />]}
                github={"https://github.com/mostafaelsayed2002/Almost-Google"}
                img={
                  "https://raw.githubusercontent.com/mostafaelsayed2002/Almost-Google/main/assets/python.png"
                }
              />
            </Grid>
            <Grid sm={12} md={3.5}>
              <ProjectCard
                title={"Twitter Chat"}
                description={"Twitter Chat with socket.io"}
                techarray={[<ReactSVG />, <TailWind />]}
                github={"https://github.com/Twitter-Clone-Project/Front-End"}
                img={"https://i.imgur.com/YjrfAme.png"}
              />
            </Grid>
          </Grid>
          <Grid />
        </Grid>
      </Grid>
    </div>
  );
}

export default Projects;
