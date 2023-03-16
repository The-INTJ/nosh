import React from "react";

class Osh100 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnabled: false,
    };
  }

  render() {
    return (
      <div>
        <div className="center">
          <h1 className="h1-styles">Purchase the Centennial</h1>
          <button className="default-button">
            <em>P U R C H A S E</em>
          </button>
        </div>
      </div>
    );
  }
}

export default Osh100;
