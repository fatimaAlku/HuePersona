const React = require('react');
const Layout = require('../layouts/Layout');

function Show(props) {
  const { color } = props;

  return (
    <Layout pageTitle={color.name}>
    {/* <h1 className="show-title">{color.name}</h1>*/}

      <div className="show-color-container">
        <div className="color-card">
          <div
            className="color-sample"
            style={{ backgroundColor: color.hexValue }}
          ></div>

          <div className="color-name"><strong>{color.name}</strong></div>
          <div className="color-hex">Hex: {color.hexValue}</div>
          <div className="color-desc">{color.description || 'No description provided.'}</div>

          <div className="color.actions">
            <a href={`/colors?token=${props.token}`} className="back-button">
              ← Back to all Colors
            </a>
            <a href={`/colors/${color._id}/edit?token=${props.token}`} className="edit-button">
              Edit
            </a>
            <form action={`/colors/${color._id}?_method=DELETE&token=${props.token}`} method="POST">
              <button type="submit" className="delete-button">
                Delete
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

module.exports = Show;
