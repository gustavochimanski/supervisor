// src/components/Sidebar.tsx
import { useState } from 'react';
import styles from "@/styles/Sidebar.module.css";
import Link from 'next/link';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className={`btn-menu ${styles.toggleBtn} ${isOpen ? styles.open : ''}`}
        onClick={toggleSidebar}
      >
        ☰
      </button>
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}` }>
        <Link href={"/home/home"}><button className={styles.sidebarButton}>Home</button></Link>
        <Link href={"/cadastro/cadProd"}><button className={styles.sidebarButton}>Produtos</button></Link>
        <Link href={"/"}><button className={styles.sidebarButton}>Logout</button></Link>
      </div>
    </>
  );
}
