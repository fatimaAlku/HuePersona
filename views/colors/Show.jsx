const React = require('react');
const Layout = require('../layouts/Layout');

function Show(props) {
  const { color } = props;

  return (
    <Layout pageTitle={color.name}>

      <div className="show-color-container">
        <div className="show-color-card">
          <div
            className="color-sample-show"
            style={{ backgroundColor: color.hexValue }}
          ></div>

          <div className="color-name-show"><strong>{color.name}</strong></div>
          <div className="color-hex-show">Hex: {color.hexValue}</div>
          <div className="color-desc-show">{color.description || 'No description provided.'}</div>

          <div className="color.actions.show">
            <a href={`/colors?token=${props.token}`} className="back-button-showpage">
              ← Back to all Colors
            </a>
            <a href={`/colors/${color._id}/edit?token=${props.token}`} className="edit-button-showpage">
              Edit
            </a>
            <form action={`/colors/${color._id}?_method=DELETE&token=${props.token}`} method="POST">
              <button type="submit" className="delete-button-showpage">
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
