import React from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Container,
  Typography,
  Table,
  // TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

export default function Dashboard() {
  const userInfo = useSelector((state) => state.fetchUserData.userDetails);

  console.log(userInfo);

  return (
    <>
      <Container maxWidth="md">
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
            Dashboard
          </Typography>

          <Table sx={{ minWidth: 650, border: 1 }} aria-label="simple table">
            <TableHead sx={{ bgcolor: "green" }}>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>Fullname</TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="right">
                  Username
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="right">
                  Country
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="right">
                  Email id
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="right">
                  Mobile number
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="right">
                  Referral id
                </TableCell>
              </TableRow>
            </TableHead>
            {/* <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                  <TableCell align="right">{row.arf}</TableCell>
                </TableRow>
              ))}
            </TableBody> */}
          </Table>
        </Box>
      </Container>
    </>
  );
}
