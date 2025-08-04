const React = require('react');
const Layout = require('../layouts/Layout');

function Index(props) {
  const colors = props.colors;

  return (
    <Layout pageTitle="All Colors">
      <h1 className="hue-title">HuePersona</h1>


      <div className="color collection">
        <h2>discover yourself through your color palette</h2>

         <div className="test-link">
    <a href={`/test?token=${props.token}`} className="take-test-button">
      🎨 Take the HuePersona Test
    </a>
  </div>
  
        <a href={`/colors/new?token=${props.token}`} className="add color button">
          Add New Color
        </a>
      </div>

      {colors.length === 0 ? (
        <div className="text-center">
          <p>No colors yet! Add your first color to get started.</p>
          <a href={`/colors/new?token=${props.token}`} className="add color button">
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
              <div className="color actions">
                <a href={`/colors/${color._id}?token=${props.token}`} className="view color">
                  View
                </a>
                <a href={`/colors/${color._id}/edit?token=${props.token}`} className="edit color">
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
