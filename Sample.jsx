import { Container, Stack } from "@mui/material";
import React from "react";
import TextField from "@mui/material/TextField";

const Sample = () => {
  return (
    <div>
      <Container>
        <Stack spacing={2}>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Stack>
      </Container>
    </div>
  );
};

export default Sample;
