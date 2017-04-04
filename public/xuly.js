var KhoaPham = React.createClass({
  laythongtin: function(){
      alert(this.props.children);
  },

  render: function(){
    return(
      <div>
        <h1 className="mauvang"> {this.props.ten} - {this.props.giangvien} </h1>
        <KhoaHoc />
        <div>
          {this.props.children}
        </div>
        <button onClick={this.laythongtin}>Click me!</button>
      </div>
    );
  }
});

var KhoaHoc = React.createClass({
  render: function(){
    return(
      <h3>Lap trinh Reactjs</h3>
    )
  }
});

ReactDOM.render(
  <div>
    <KhoaPham ten="Reactjs" giangvien="Mr. A">Hi</KhoaPham>
    {/*<KhoaPham ten="Nodejs" giangvien="Mr. B"/>*/}
  </div>
  , document.getElementById("root"));