import React from 'react'
import styles from './History.module.css';

const History = () => {
  return (
    <div className={styles.History}>
      <div className={styles.HistoryHeader}>
        <h1>Interview History</h1>
        <p>View your past interviews and performance metrics</p>
      </div>
      
      <div className={styles.HistoryContainer}>
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}>📋</div>
          <h2>No Interviews Yet</h2>
          <p>Start your first interview from the Dashboard to see your history here.</p>
        </div>
      </div>
    </div>
  )
}

export default History
