function thongBao(name){
  alert(name);
};

var KhoaPham = React.createClass({
  addStudent(){
    this.state.tongHocVien = parseInt(this.state.tongHocVien) + 1;
    this.setState(
      this.state
    );
  },

  laythongtin: function(){
      alert(this.props.children);
  },

  getInitialState(){
    return {tongHocVien: this.props.tongHocVien};
  },

  render: function(){
    return(
      <div>
        <h1 className="mauvang"> {this.props.ten} - {this.props.giangvien} </h1>
        <KhoaHoc />
        <div>
          {this.props.children}
        </div>
        <button onClick={() => {var str = this.props.ten + ' ' + this.props.giangvien; thongBao(str) }}>Click me!</button>
        <div>Hoc vien: {this.state.tongHocVien}</div>
        <button onClick={this.addStudent}>Registry!</button>
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

var InputTag = React.createClass({
  show(){
    var text = this.refs.text_select.value;
    alert(text);
  },
  render(){
    return(
      <div>
       <select ref="text_select">
        <option value="1">AAAA</option>
        <option value="2">BBB</option>
       </select>
       <input type="text" ref="text_input"/>
       <button onClick={this.show}>Get value</button>
      </div>
    )
  }
});

ReactDOM.render(
  <div>
    <InputTag/>
    <KhoaPham ten="Reactjs" giangvien="Mr. A" tongHocVien="10">Hi</KhoaPham>
    {/*<KhoaPham ten="Nodejs" giangvien="Mr. B"/>*/}
  </div>
  , document.getElementById("root"))