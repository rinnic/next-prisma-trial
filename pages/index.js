import Head from "next/head";
import styles from "../styles/Home.module.css";

import { Grid } from "@mui/material";

import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Employees</title>
        <meta name="description" content="Next.js and prosma trial" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Grid container spacing={0} sx={{
          width: "100%",
          height: "100%"
        }}>
          <Grid item xs={4}>
            <EmployeeForm />
          </Grid>
          <Grid item xs={8}>
            <EmployeeList />
          </Grid>
        </Grid>
      </main>
    </div>
  );
}
