import React from 'react'
import styles from './Admin.module.css';

const Admin = () => {
  return (
    <div className={styles.Admin}>
      <div className={styles.AdminHeader}>
        <h1>Admin Panel</h1>
        <p>Manage interview questions and system configuration</p>
      </div>
      
      <div className={styles.AdminContainer}>
        <div className={styles.adminCard}>
          <div className={styles.cardIcon}>❓</div>
          <div className={styles.cardTitle}>Manage Questions</div>
          <div className={styles.cardDescription}>Add, edit, and remove interview questions</div>
          <button className={styles.cardBtn}>Manage</button>
        </div>
        
        <div className={styles.adminCard}>
          <div className={styles.cardIcon}>📊</div>
          <div className={styles.cardTitle}>View Analytics</div>
          <div className={styles.cardDescription}>See user statistics and performance metrics</div>
          <button className={styles.cardBtn}>View</button>
        </div>
        
        <div className={styles.adminCard}>
          <div className={styles.cardIcon}>⚙️</div>
          <div className={styles.cardTitle}>System Settings</div>
          <div className={styles.cardDescription}>Configure AI models and system parameters</div>
          <button className={styles.cardBtn}>Configure</button>
        </div>
      </div>
    </div>
  )
}

export default Admin
