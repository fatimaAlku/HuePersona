const React = require('react');
const Layout = require('../layouts/Layout');

function Show(props) {
  const { color } = props;

  return (
    <Layout pageTitle={color.name}>
      <h1>{color.name}</h1>

      <div className="color-card">
        <div
          className="color-preview"
          style={{
            backgroundColor: color.hexValue,
            height: '100px',
            borderRadius: '8px',
            marginBottom: '1rem'
          }}
        ></div>

        <div className="color-info">
          <p><strong>Name:</strong> {color.name}</p>
          <p><strong>Hex Value:</strong> {color.hexValue}</p>
          <p><strong>Description:</strong> {color.description || 'No description provided.'}</p>
        </div>

        <div className="d-flex gap-2 mt-3">
          <a href={`/colors?token=${props.token}`} className="btn btn-secondary">
            ← Back to All Colors
          </a>
          <a href={`/colors/${color._id}/edit?token=${props.token}`} className="btn btn-primary">
            Edit {color.name}
          </a>
        </div>

        <div className="mt-3">
          <form action={`/colors/${color._id}?_method=DELETE&token=${props.token}`} method="POST">
            <button type="submit" className="btn btn-danger">
              Delete {color.name}
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

module.exports = Show;
