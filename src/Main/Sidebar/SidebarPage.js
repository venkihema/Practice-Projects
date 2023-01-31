import { Box, Grid } from "@mui/material";
export const SidebarPage = () => {
  return (
    <div>
      <Box>
        <Grid>
          <dl>
            <dt>Organization</dt>
            <dd style={{ paddingTop: "5px" }}>General</dd>
            <dd style={{ paddingTop: "5px" }}>Prequalifications</dd>
            <dd style={{ paddingTop: "5px" }}>Teams</dd>
            <dd style={{ paddingTop: "5px" }}>Subscription</dd>
            <dt style={{ paddingTop: "15px" }}>Account</dt>
            <dd style={{ paddingTop: "5px" }}>My Account</dd>
            <dd style={{ paddingTop: "5px" }}>My Profile</dd>
            <dd style={{ paddingTop: "5px" }}>Security</dd>
          </dl>
        </Grid>
      </Box>
    </div>
  );
};
