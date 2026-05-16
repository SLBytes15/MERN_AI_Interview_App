import React from 'react'
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div>
      <div className={styles.DashboardLeft}>
        <div className={styles.DashboardHeader}>
          Smart Resume Screening
          <div className={styles.DashboardHeaderTitle}>
            {" "}
            Smart Resume Checker
          </div>
          <div className={styles.DashboardHeaderLargeTitle}>
            Resume Match Score
          </div>
        </div>

        <div className={styles.alertInfo}>
          <div>🔔 Important Instructions</div>
          <div className={styles.dashboardInstruction}> 
            <div>please past the complete job description in the field before submitting</div>
            <div>only PDF format Resumes are accepted</div>

          </div>
        </div>
        <div className={styles.DashboardUploadResume}>
          <div className={styles.DashboardResumeBlock}>
            Upload your Resume
          </div>
          <div className={styles.DashboardInputField}>
            <label htmlFor="inputField" className={styles.analyzeAIbtn}>Upload Resume</label>
            <input type="file" accept='.pdf' id='inputField' />
          </div>

        <div className="styles jobDesc">
        <textarea className={styles.textArea} placeholder='Paste your Job Description' rows={10} cols={50}></textarea>
        <div className={styles.AnalyzeBtn}>Analyze</div>
        </div>
        </div>
      </div>

      <div className={styles.DashboardRight}>
        
      </div>
    </div>
  );
}

export default Dashboard
