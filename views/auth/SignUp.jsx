const React = require('react');
const Layout = require('../layouts/Layout');

function SignUp () {
  return (
    <Layout>
      <div className="auth-container">
        <div className="auth-left">
          <form className="auth-form" action="/users" method="POST">
            <h2>Sign Up</h2>
            <p>Create your account</p>

            <input
              type="text"
              name="username"
              placeholder="Username"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />

            <button type="submit">Sign Up</button>
            <p className="switch-link">Already have an account? <a href="/users/login">Login</a></p>
          </form>
        </div>

        <div className="auth-right purple-bg">
          <div className="info-card">
            <h1>HUEPERSONA</h1>
            <p>
              Discover your personality through color.<br />
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

module.exports = SignUp;
