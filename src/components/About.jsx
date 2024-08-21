import { Grid, Typography } from "@mui/material";

function About() {
  return (
    <div className="flex justify-center">
      <Grid container mt={27}>
        <Grid item xs={12} sm={12} md={12}>
          <div className="flex-col flex text-center items-center gap-3">
            <div className="text-gray-400 text-lg">Get To Know More</div>
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
                About Me
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={12} mt={4}>
          <Grid container className="flex justify-between gap-2">
            <Grid xs={12} sm={12} md={5.5}>
              <div className="rounded-3xl gap-3 border-black border p-4 items-center justify-center flex flex-col text-2xl font-bold">
                <div className="text-7xl">🎓</div>
                <div>Education</div>
                <div className="text-lg text-center font-normal text-gray-400 ">
                  Senior Student at Cairo University, Faculty of Engineering,
                  Computer Department
                </div>
              </div>
            </Grid>
            <Grid xs={12} sm={12} md={5.5}>
              <div className="rounded-3xl w-full gap-3 border-black border p-4 items-center justify-center flex flex-col text-2xl font-bold">
                <div className="text-7xl">💼</div>
                <div>Internship</div>
                <div className="text-lg text-center font-normal text-gray-400 ">
                  Front-End At{" "}
                  <a
                    className="text-blue-400 no-underline hover:underline"
                    href="https://slash-eg.com/"
                  >
                    Slash Hub
                  </a>
                  <div className="">July 2024 - September 2024</div>
                </div>
              </div>
            </Grid>
          </Grid>
          <Grid />
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
