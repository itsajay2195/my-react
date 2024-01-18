import React from "react";

export class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button
          onClick={() => {
            this.setState((prevState) => ({
              count: prevState.count + 1,
            }));
          }}
        >
          Increment
        </button>
      </div>
    );
  }
}

export default User;
