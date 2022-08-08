import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Employees</title>
        <meta name="description" content="Next.js and prosma trial" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <EmployeeForm />
        <EmployeeList />
      </main>
    </div>
  );
}
