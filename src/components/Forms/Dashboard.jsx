import React from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

export default function Dashboard() {
  const userInfo = useSelector((state) => state.userData.userValue);

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
            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="userInfo">
                  {userInfo.full_name}
                </TableCell>
                <TableCell align="right">{userInfo.username}</TableCell>
                <TableCell align="right">{userInfo.email_id}</TableCell>
                <TableCell align="right">{userInfo.mobile_number}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </Container>
    </>
  );
}
