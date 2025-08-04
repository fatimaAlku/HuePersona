const React = require('react');
const Layout = require('../layouts/Layout');

function New(props) {
  return (
    <Layout pageTitle="Add New Color">
      <h1 className ="add-color-title" >Add New Color</h1>

      <form action={`/colors?token=${props.token}`} method="POST">
        <div className="form-group">
          <label htmlFor="name">Color Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter color name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="hexValue">Hex Code:</label>
          <input
            type="text"
            id="hexValue"
            name="hexValue"
            placeholder="#A974F8"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            placeholder="e.g. Lavender represents calmness and creativity..."
            rows="3"
          />
        </div>

        <div className="action div">
          <button type="submit" className="submit button">
             Create Color
          </button>
          <a href={`/colors?token=${props.token}`} className="back button">
            ← Back to All Colors
          </a>
        </div>
      </form>
    </Layout>
  );
}

module.exports = New;
