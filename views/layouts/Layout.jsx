const React = require('react');

function Layout(props) {
  return (
    <html>
      <head>
        <title>
          {!props.pageTitle
            ? 'HuePersona – Discover Yourself Through Color'
            : `${props.pageTitle} – HuePersona`}
        </title>
        <link rel="stylesheet" href="/styles.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <div className="container">
          {props.children}
        </div>
      </body>
    </html>
  );
}

module.exports = Layout;
