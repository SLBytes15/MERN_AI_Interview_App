import React from 'react'
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.Dashboard}>
      <div className={styles.DashboardLeft}>
        <div className={styles.DashboardHeader}>
          <div>
            <div className={styles.DashboardHeaderTitle}>
              Smart Resume Screening
            </div>
            <div className={styles.DashboardHeaderSubtitle}>
              AI-Powered Resume Match Score
            </div>
          </div>
        </div>

        <div className={styles.alertInfo}>
          <div className={styles.alertIcon}>🔔</div>
          <div>
            <div className={styles.alertTitle}>Important Instructions</div>
            <div className={styles.dashboardInstruction}> 
              <div>• Paste the complete job description in the field</div>
              <div>• Only PDF format resumes are accepted</div>
            </div>
          </div>
        </div>

        <div className={styles.DashboardUploadResume}>
          <div className={styles.DashboardResumeBlock}>
            <div className={styles.blockTitle}>Upload your Resume</div>
            <div className={styles.DashboardInputField}>
              <label htmlFor="inputField" className={styles.analyzeAIbtn}>📄 Choose Resume (PDF)</label>
              <input type="file" accept='.pdf' id='inputField' />
            </div>
          </div>

          <div className={styles.jobDescBlock}>
            <div className={styles.blockTitle}>Job Description</div>
            <textarea className={styles.textArea} placeholder='Paste the complete job description here...' rows={8}></textarea>
          </div>
        </div>

        <div className={styles.AnalyzeBtn}>🚀 Analyze Resume</div>
      </div>

      <div className={styles.DashboardRight}>
        <div className={styles.resultsPanel}>
          <div className={styles.resultsTitle}>Match Results</div>
          <div className={styles.resultsPlaceholder}>Results will appear here after analysis</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard
