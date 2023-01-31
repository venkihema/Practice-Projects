import { Box, Button, Grid } from "@mui/material";

export const ImageCard = () => {
  return (
    <Box>
      <Grid container pt={6} xs={12} sx={{ height: 150, width: 300 }}>
        <Grid item container xs={5}>
          <Grid item container xs={12}>
            <img
              src="https://w0.peakpx.com/wallpaper/404/436/HD-wallpaper-ramcharan-actor-movies-ram-charan-ram-charan-tej-rrr-telugu-actor-charan-telugu-movies-bollywood-ram.jpg"
              alt="Ramcharan"
              style={{ width: "100%", height: "120px", borderRadius: "50%" }}
            />
          </Grid>
        </Grid>
        <Grid item container xs={7} sx={{ pl: 3 }}>
          <Grid item container paddingTop={2}>
            <Button
              variant="contained"
              sx={{
                width: "100%",
                height: "40px",
              }}
            >
              Change Photo
            </Button>
          </Grid>
          <Grid item container>
            <Button
              variant="outlined"
              sx={{
                width: "100%",
                height: "40px",
                color: "black",
                border: "1px solid #6200EE",
              }}
            >
              Delete
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid container paddingTop={4}>
        <label>
          <small>Ram Charan from telgu Industry</small>
        </label>
      </Grid>
    </Box>
  );
};
