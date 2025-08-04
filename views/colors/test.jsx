const React = require('react');
const Layout = require('../layouts/Layout');

function TestForm(props) {
  return (
    <Layout pageTitle="Color Palette Test">
      <h1 className="test-title">Discover Your Color Palette</h1>

      <form action={`/colors/results?token=${props.token}`} method="POST" className="test-form">

        <div className="test-question">
          <label>1. Which color do you feel most drawn to?</label>
          <select name="q1" required>
            <option value="">Select an option</option>
            <option value="calm">Soft blue</option>
            <option value="bold">Vibrant red</option>
            <option value="balanced">Earthy green</option>
          </select>
        </div>

        <div className="test-question">
          <label>2. What colors do you prefer for your clothing?</label>
          <select name="q2" required>
            <option value="">Select an option</option>
            <option value="calm">Pastel shades</option>
            <option value="bold">Bright colors</option>
            <option value="balanced">Neutral tones</option>
          </select>
        </div>

        <div className="test-question">
          <label>3. Which color combination appeals to you most?</label>
          <select name="q3" required>
            <option value="">Select an option</option>
            <option value="calm">Blue and white</option>
            <option value="bold">Red and gold</option>
            <option value="balanced">Green and beige</option>
          </select>
        </div>

        <div className="test-question">
          <label>4. What color do you associate with your personality?</label>
          <select name="q4" required>
            <option value="">Select an option</option>
            <option value="calm">Light purple</option>
            <option value="bold">Fiery orange</option>
            <option value="balanced">Soft gray</option>
          </select>
        </div>

        <div className="test-question">
          <label>5. Which color would you choose for a room in your home?</label>
          <select name="q5" required>
            <option value="">Select an option</option>
            <option value="calm">Pale blue</option>
            <option value="bold">Bright yellow</option>
            <option value="balanced">Warm taupe</option>
          </select>
        </div>

        <div className="test-question">
          <label>6. What color do you feel represents your creativity?</label>
          <select name="q6" required>
            <option value="">Select an option</option>
            <option value="calm">Soft pink</option>
            <option value="bold">Electric blue</option>
            <option value="balanced">Rich green</option>
          </select>
        </div>

        <div className="test-question">
          <label>7. Which color would you choose for an accessory?</label>
          <select name="q7" required>
            <option value="">Select an option</option>
            <option value="calm">Muted lavender</option>
            <option value="bold">Bright red</option>
            <option value="balanced">Classic black</option>
          </select>
        </div>

        <div className="test-question">
          <label>8. What color do you find most calming?</label>
          <select name="q8" required>
            <option value="">Select an option</option>
            <option value="calm">Seafoam green</option>
            <option value="bold">Deep purple</option>
            <option value="balanced">Soft beige</option>
          </select>
        </div>

        <div className="test-question">
          <label>9. Which color do you prefer for your artwork?</label>
          <select name="q9" required>
            <option value="">Select an option</option>
            <option value="calm">Cool blues</option>
            <option value="bold">Bold reds</option>
            <option value="balanced">Natural greens</option>
          </select>
        </div>

        <div className="test-question">
          <label>10. How do you feel about monochromatic palettes?</label>
          <select name="q10" required>
            <option value="">Select an option</option>
            <option value="calm">I love them!</option>
            <option value="bold">Not my style</option>
            <option value="balanced">Depends on the colors</option>
          </select>
        </div>

        <div className="test-actions">
          <button type="submit" className="submit-test">Submit Test</button>
        </div>
      </form>
    </Layout>
  );
}

module.exports = TestForm;