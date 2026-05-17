import React from 'react'
import styles from "./Sidebar.module.css"
// import ArticleIcon from "@mui/icons-material/Article";
import {Link, useLocation, useNavigate} from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const SideBar = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const { signOut } = useAuth();

  const handleLogout = () => {
    signOut();
    navigate("/");
  }

  return (
    <div className={styles.sideBar}>
      <div className={styles.sideBarIcon}>
        <div>Resume Screening</div>
      </div>
      <div className={styles.sideBarOptionalBlock}>
        <Link
          to={"/dashboard"}
          className={[
            styles.sideBarOption,
            location.pathname === "/dashboard" ? styles.selectedOption : null,
          ].join(" ")}
        >
          Dashboard
        </Link>
        <Link
          to={"/history"}
          className={[
            styles.sideBarOption,
            location.pathname === "/history" ? styles.selectedOption : null,
          ].join(" ")}
        >
          History
        </Link>
        <Link
          to={"/admin"}
          className={[
            styles.sideBarOption,
            location.pathname === "/admin" ? styles.selectedOption : null,
          ].join(" ")}
        >
          Admin
        </Link>
        <button type='button' className={styles.sideBarOption} onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default SideBar
