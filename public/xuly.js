var KhoaPham = React.createClass({
  render: function(){
    return(
      <div>
        <h1 className="mauvang"> {this.props.ten} - {this.props.giangvien} </h1>
        <KhoaHoc />
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
    <KhoaPham ten="Reactjs" giangvien="Mr. A"/>
    <KhoaPham ten="Nodejs" giangvien="Mr. B"/>
  </div>
  , document.getElementById("root"));