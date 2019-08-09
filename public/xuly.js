class Hello extends React.Component {
  render() {
    return (
      <div>
        <h3> Author: Quoc Hai </h3>
        <h1> Hello world ! </h1>
        <h4> Click Button to Toggle ! </h4>
        <Toggle />
      </div>
    );
  }
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <div>
  <Hello />
  </div>,
  document.getElementById("root"));
