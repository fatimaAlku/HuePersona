const React = require('react');
const Layout = require('../layouts/Layout');

function Index(props) {
  const colors = props.colors;

  return (
    <Layout pageTitle="All Colors">
      <h1>All Colors</h1>

      <div className="d-flex justify-between align-center mb-3">
        <h2>Your Color Collection</h2>
        <a href={`/colors/new?token=${props.token}`} className="btn btn-primary">
          ➕ Add New Color
        </a>
      </div>

      {colors.length === 0 ? (
        <div className="text-center">
          <p>No colors yet! Add your first color to get started.</p>
          <a href={`/colors/new?token=${props.token}`} className="btn btn-primary">
            Add Your First Color
          </a>
        </div>
      ) : (
        <div className="colors-grid">
          {colors.map((color) => (
            <div key={color._id} className="color-card">
              <div className="color-sample" style={{ backgroundColor: color.hexValue }}></div>
              <div className="color-name"><strong>{color.name}</strong></div>
              <div className="color-hex">Hex: {color.hexValue}</div>
              <div className="color-desc">{color.description}</div>
              <div className="d-flex gap-2 mt-2">
                <a href={`/colors/${color._id}?token=${props.token}`} className="btn btn-secondary">
                  View
                </a>
                <a href={`/colors/${color._id}/edit?token=${props.token}`} className="btn btn-primary">
                  Edit
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </Layout>
  );
}

module.exports = Index;
