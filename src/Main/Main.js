import { Box, Grid } from "@mui/material";
import { ProfilePage } from "./Profile/ProfilePage";
import { SidebarPage } from "./Sidebar/SidebarPage";
import { DescriptionPage } from "./Description/DescriptionPage";

export const Main = () => {
  return (
    <Box>
      <Grid
        container
        xs={12}
        sx={{ width: "100vw", height: "100vh", borderTop: "2px solid black" }}
      >
        <Grid
          item
          container
          xs={3}
          sx={{
            pl: 5,
            pt: 2,
            borderRight: "1px solid black",
          }}
        >
          <SidebarPage />
        </Grid>
        <Grid item container xs={9}>
          <Grid item container xs={6} sx={{ pl: 4, pt: 5 }}>
            <ProfilePage />
          </Grid>
          <Grid item container xs={6} pt={30} pl={5}>
            <Grid item container xs={12}>
              <DescriptionPage />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
