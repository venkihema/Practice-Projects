import { Box, Grid, TextField } from "@mui/material";
export const TextArea = ({ label, type = "text" }) => {
  return (
    <Box pt={3}>
      <Grid container xs={12}>
        <TextField label={label} fullWidth type={type} />
      </Grid>
    </Box>
  );
};
