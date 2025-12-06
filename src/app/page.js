'use client'
import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Home page</h1>
    </div>
  );
}