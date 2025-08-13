const React = require('react');
const Layout = require('../layouts/Layout');

function Index(props) {
  const colors = props.colors;

  return (
    <Layout pageTitle="All Colors">
      <h1 className="hue-title">HuePersona</h1>

      <div className="color collection">
        <h2>Uncover the colors that reflect your personality.</h2>
        <p>HuePersona helps you explore your inner self through the psychology of color.
         Take a curated personality test and receive a custom color palette that matches your unique traits
          — then build your own collection to express who you are visually.</p>

        <div className="test-link">
          <a href={`/test?token=${props.token}`} className="take-test-button">
            🎨 Take the HuePersona Test
          </a>
        </div>


      {colors.length === 0 ? (
          <div className="text-center">
          <a href={`/colors/new?token=${props.token}`} className="add-color-button-index">
            <div className="whitespace"></div>
          </a>
        </div>
      ) : (
          <div className="colors-grid">
          {colors.slice(0, 5).map((color) => (
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

     <div className="button-row">
  <a href={`/colors/new?token=${props.token}`} className="add-color-button">
    Add New Color
  </a>

<a href="/auth/login" className="logout-button">
  Logout
</a>




</div>

     </div>
    
    </Layout>
  );
}

module.exports = Index;

