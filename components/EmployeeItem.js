import { Card, Paper, Typography, Button } from "@mui/material";
import { Male, Female } from "@mui/icons-material";
import { pink } from '@mui/material/colors';

import classes from "./EmployeeItem.module.css";

const EmployeeItem = (props) => {
  
  const { firstName, lastName, birthDate, gender } = props.employee;

  let genderContent = "";
  if (gender === "M") {
    genderContent = <Male color="primary"/>;
  }
  if (gender === "F") {
    genderContent = <Female sx={{ color: pink[500] }} />;
  }

  return (
    <Paper sx={{
      margin: "10px"
    }}>
      <div className={classes.employeeData}>
        <div>
          <Typography variant="h6">{`${firstName} ${lastName} `}</Typography>
          <Typography variant="subtitle">{birthDate}</Typography>
        </div>
        <div>{genderContent}</div>
        <Button color="error">Remove</Button>
      </div>
    </Paper>
  );
};

export default EmployeeItem;
