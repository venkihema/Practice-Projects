import { ImageCard } from "./ImageCard";
import { Myprofile } from "./Myprofile";
import { TextArea } from "./TextArea";
import { Box, Button, Grid } from "@mui/material";
export const ProfilePage = () => {
  return (
    <Box>
      <Grid item container xs={12}>
        <Grid item xs={12}>
          <Myprofile />
        </Grid>
        <Grid item xs={12}>
          <ImageCard />
        </Grid>
        <Grid item xs={12}>
          <TextArea label="Name" />
        </Grid>
        <Grid item xs={12}>
          <TextArea label="Last Name" />
        </Grid>
        <Grid item xs={12}>
          <TextArea label="Email" />
        </Grid>
        <Grid item xs={12}>
          <TextArea label="Phone" type="number" />
        </Grid>
        <Grid
          pt={3}
          xs={12}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button variant="contained">Submit</Button>
        </Grid>
      </Grid>
    </Box>
  );
};
