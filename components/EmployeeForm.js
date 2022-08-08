import {
  TextField,
  Input,
  Box,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  Typography
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
const EmployeeForm = (props) => {
  return (
    <Box
      sx={{
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        height: "100%",
      }}
    >
      <Typography variant="h5">Add a new Employee</Typography>
      <TextField id="first-name" label="first name" onChange={() => {}} fullWidth/>
      <TextField id="last-name" label="last name" onChange={() => {}} fullWidth/>
      <LocalizationProvider dateAdapter={AdapterDateFns} fullWidth>
        <DatePicker
          id="birth-date"
          label="birth date"
          value={null}
          renderInput={(params) => <TextField {...params} fullWidth/>}
          onChange={() => {}}
        />
      </LocalizationProvider>

      <FormControl fullWidth>
        <InputLabel id="gender-label">gender</InputLabel>
        <Select labelId="gender-label" label="gender" onChange={() => {}}>
          <MenuItem value="M">M</MenuItem>
          <MenuItem value="F">F</MenuItem>
          <MenuItem value="UNDEFINED">OTHER</MenuItem>
        </Select>
      </FormControl>
      <Button id="add-button" type="submit" variant="contained" fullWidth>
        Add
      </Button>
    </Box>
  );
};

export default EmployeeForm;
