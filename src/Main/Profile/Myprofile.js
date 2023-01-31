import { Box, Grid } from "@mui/material";

export const Myprofile = () => {
  return (
    <Box>
      <Grid container xs={12}>
        <Grid item container xs={12}>
          <h1 style={{ margin: 0, padding: 0 }}>My Profile</h1>
        </Grid>
        <Grid item container xs={12}>
          <p style={{ margin: 0, padding: 0 }}>
            <small>RamCharan Konidela</small>
          </p>
        </Grid>
      </Grid>
    </Box>
  );
};
