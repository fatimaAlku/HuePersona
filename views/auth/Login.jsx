const React = require('react');
const Layout = require('../layouts/Layout');

function Login () {
  return (
    <Layout>
      <div className="auth-container">
        <div className="auth-left">
          <form className="auth-form" action="/users/signin" method="POST">
            <h2>Login</h2>
            <p>Login with your username & password</p>

            <input
              type="text"
              name="username"
              placeholder="Username"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />

            <button type="submit">Login Now</button>
            <p className="switch-link">New here? <a href="/users">Sign Up</a></p>
          </form>
        </div>

        <div className="auth-right purple-bg">
          <div className="info-card">
            <h1>HUEPERSONA</h1>
            <p>
              Inspired by the Korean color analysis tests<br />
              that link emotions and identity to color choices.<br />
              HuePersona blends cultural psychology and web tech<br />
              for a uniquely engaging app.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

module.exports = Login;
