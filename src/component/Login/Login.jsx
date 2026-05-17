import React, { useState } from 'react'
import styles from './Login.module.css';
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const { signIn, signInWithGoogle, loading  } = useAuth();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState(null);
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();
        setError(null);

        try{
            await signIn({email,password});
            navigate('/dashboard');
        }catch(err){
            setError(err?.message || 'Sign in failed');
        }
    };

    const handleGoogleSignIn = async () => {
        try{
            await signInWithGoogle();
            navigate("/dashboard");
        }catch(err){
            setError(err.message || "Google sign in failed");
        }
    }

  return (
    <div className={styles.loginPage}>
      <form className={styles.loginCard}
      onSubmit={handleSignIn}>
        <div className={styles.brand}>
          <h2>AI Interview</h2>
          <p>Quickly sign in to access your interview dashboard.</p>
        </div>

        <div className={styles.formSection}>
          <label className={styles.inputLabel}>
            Email
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.inputField}
              required
            />
          </label>

          <label className={styles.inputLabel}>
            Password
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.inputField}
              required
            />
          </label>

          <button type='submit' className={styles.loginButton} disabled={loading}>
            {loading ? "Signing In..." : "Sign in"}
          </button>

        {error && <div className={styles.error}>{error}</div>
        }

        </div>
        
        <div className={styles.divider}>
          <span>or continue with</span>
        </div>

        <button type='button' className={styles.googleButton} onClick={handleGoogleSignIn}>
          <span className={styles.googleIcon}>G</span>
          <span>Continue with Google</span>
        </button>

        <p className={styles.signUpText}>
          Don&apos;t have an account? <span>Sign up</span>
        </p>
      </form>
    </div>
  )
} 

export default Login;
