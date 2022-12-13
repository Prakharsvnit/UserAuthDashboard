import { Box, Container, Typography, TextField, Button } from "@mui/material";

export default function LoginForm() {
  return (
    <>
      <Container maxWidth="sm">
        <Box
          sx={{
            flexDirection: "column",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            p: 5,
          }}
        >
          <Typography variant="h4" sx={{ mb: 2 }}>
            Register
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Full name"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="User Name"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Select Country"
            type="password"
            id="password"
            autoComplete="current-password"
          />{" "}
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Mobile Number"
            type="password"
            id="password"
            autoComplete="current-password"
          />{" "}
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Email ID"
            type="password"
            id="password"
            autoComplete="current-password"
          />{" "}
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />{" "}
          <TextField
            margin="normal"
            fullWidth
            name="password"
            label="Referral ID"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            variant="contained"
            type="submit"
            sx={{ mt: 2, height: 60 }}
            color="primary"
            fullWidth
          >
            Register
          </Button>
        </Box>
      </Container>
    </>
  );
}
