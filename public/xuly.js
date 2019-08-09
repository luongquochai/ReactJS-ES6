class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1> Hello world ! </h1>
        <h3> Author: Quoc Hai </h3>
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
class CountClick extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      Count: 0
    }
  }

  AddClick(){
    this.setState(state => ({
      Count: this.state.Count + 1

    }));
  }
  Reset(){
    this.setState(state => ({
      Count: 0
    }));
  }

  render(){
    return(
      <div>
        <p> So lan click: {this.state.Count} </p>
        <button onClick={this.AddClick.bind(this)}>click me </button>
        <button onClick={this.Reset.bind(this)}>reset </button>
      </div>
    );
  }
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString()
    };
  }
  //ngay sau khi hàm render được gọi đến lần đầu tiên chạy xong
  //thì hàm componentDidMount sẽ được chạy

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
  //được gọi khi 1 component được loại bỏ khỏi DOM
  //thực hiện các thao tác dọn dẹp, huỷ timer
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleString()
    });
  }
  render() {
    return (
      <p className="App-clock">
        The time is {this.state.time}.
      </p>
    );
  }
}

ReactDOM.render(
  <div>
  <Clock />
  <Hello />
  <CountClick />

  </div>,
  document.getElementById("root"));
