import React from "react";
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
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];
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
            <TableHead sx={{ bgcolor:'green' }}>
              <TableRow>
                <TableCell sx={{fontWeight:'bold'}}>Dessert (100g serving)</TableCell>
                <TableCell sx={{fontWeight:'bold'}} align="right">Calories</TableCell>
                <TableCell sx={{fontWeight:'bold'}} align="right">Fat&nbsp;(g)</TableCell>
                <TableCell sx={{fontWeight:'bold'}} align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell sx={{fontWeight:'bold'}} align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
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
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Container>
    </>
  );
}
