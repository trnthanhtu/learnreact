var Com = React.createClass(
  {
    getInitialState: function(){
      return {num: 0}
    },
    countNum: function(){
     this.setState({num: ++this.state.num});
    },
    render: function(){
      return(
        <button onClick={this.countNum}>Hello {this.state.num}</button>
      );
    }
  }
);
ReactDOM.render(
  <Com/>,
  document.getElementById('root')
);