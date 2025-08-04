const React = require('react');
const Layout = require('../layouts/Layout');

function Edit(props) {
  const { name, hexValue, description, _id } = props.color;

  return (
    <Layout pageTitle={`Edit ${name}`}>
      <h1 id = "edit-page" className>Edit {name}</h1>

      <form action={`/colors/${_id}?_method=PUT&token=${props.token}`} method="POST">
        <div className="form-group">
          <label htmlFor="name">Color Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={name}
            placeholder="Enter color name..."
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="hexValue">Hex Code:</label>
          <input
            type="text"
            id="hexValue"
            name="hexValue"
            defaultValue={hexValue}
            placeholder="enter hex code"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            rows="3"
            defaultValue={description}
            placeholder="Describe the traits and vibe of this color..."
          />
        </div>

        <div className="Edit-actions">
          <button type="submit" className="update-button">
            Update Color
          </button>
          <a href={`/colors/${_id}?token=${props.token}`} className="back-button">
            ← Back to {name}
          </a>
        </div>
      </form>
    </Layout>
  );
}

module.exports = Edit;
