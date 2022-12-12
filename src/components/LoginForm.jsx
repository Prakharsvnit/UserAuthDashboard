import { Box, Container, Typography, TextField, Button } from "@mui/material";

export default function LoginForm() {
  return (
    <>
      <Container maxWidth="sm">
        <Box
          sx={{
            flexDirection: "column",
            display: "flex",
            height: 600,
            justifyContent: "center",
            textAlign: "center",
            p: 5,
          }}
        >
          <Typography variant="h4" sx={{ mb: 2 }}>
            Login
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            variant="contained"
            type="submit"
            sx={{ mt: 2,height:60 }}
            color="primary"
            fullWidth
          >
            Submit
          </Button>
        </Box>
      </Container>
    </>
  );
}
