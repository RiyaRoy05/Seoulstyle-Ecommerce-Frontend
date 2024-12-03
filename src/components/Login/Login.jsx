import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Header from "../Header";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const credentials = {
      admin: { email: "admin@gmail.com", password: "admin@123", path: "/admin" },
      customer: {
        email: "customer@gmail.com",
        password: "customer@123",
        path: "/customer",
      },
      seller: {
        email: "seller@gmail.com",
        password: "seller@123",
        path: "/seller",
      },
    };

    if (
      email === credentials.admin.email &&
      password === credentials.admin.password
    ) {
      navigate(credentials.admin.path);
    } else if (
      email === credentials.customer.email &&
      password === credentials.customer.password
    ) {
      navigate(credentials.customer.path);
    } else if (
      email === credentials.seller.email &&
      password === credentials.seller.password
    ) {
      navigate(credentials.seller.path);
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div>
      <Header />
      <div className="all">
        <div>
          <img
            src="https://plus.unsplash.com/premium_photo-1664201890375-f8fa405cdb7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="login-container">
          <div className="login-card">
            <h2>Login to your Account</h2>
            <p>See what is going on with your presence</p>
            <form className="login-form" onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && <p style={{ color: "red" }}>{error}</p>}
              <button type="submit" className="btn">
                Login
              </button>
            </form>
            <div className="login-footer">
              <p>Don't have an account?</p>
              <p>
                <a href="/register-seller">Register as a Seller</a> |
                <a href="/register-customer"> Register as a Customer</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
