import React from "react";
import { Box, Typography } from "@mui/material";
import EmployeeItem from "./EmployeeItem";

const DUMMY_EMPLOYEES = [
  {
    id: 1,
    firstName: "Nicola",
    lastName: "Rinaldi",
    birthDate: "03/05/1999",
    gender: "M",
  },
  {
    id: 2,
    firstName: "Nicola",
    lastName: "Rinaldi",
    birthDate: "03/05/1999",
    gender: "M",
  },
  {
    id: 3,
    firstName: "Silvia",
    lastName: "Rinaldi",
    birthDate: "06/08/1997",
    gender: "F",
  },
];

const EmployeeList = (props) => {
  return (
    <Box
      sx={{
        padding: "2rem",
        backgroundColor: "rgba(214, 214, 214, 0.5)",
      }}
    >
      <Typography variant="h5" sx={{padding: "10px"}}>Employees</Typography>
      {DUMMY_EMPLOYEES.map((emp) => {
        return <EmployeeItem key={emp.id} employee={emp} />;
      })}
    </Box>
  );
};

export default EmployeeList;
