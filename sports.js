import React from 'react';
import './style.css';
class Reactform extends React.Component{
  constructor(){
    super();
    this.state= {sport:"",name:"",phono:null,addr:"",fees:null,refer:null,amount:null,errmsg:""};
  }
  uservalue=(event)=> {
    let n=event.target.name;
    let v=event.target.value;
    let err=" ";
    if(n==="phono"){
      if(v!==" "&&!Number(v)){
        err=<strong>invalid,This must be number</strong>
      }
      this.setState({errmsg1:err});
    }
    if(n==="fees"){
      if(v!==" "&&!Number(v)){
        err=<strong>invalid,This must be number</strong>
      }
      this.setState({errmsg2:err});
    }
    if(n==="refer"){
      if(v!==" "&&!Number(v)){
        err=<strong>invalid,This must be number</strong>
        this.setState({errmsg3:err});
      }else{
        this.setState({errmsg3:""});
      var r = document.getElementById("Refer").value;
      var f = document.getElementById("Fees").value;
      var t = r*f;
      document.getElementById("Total").value=t;  
      }
    }
  }
  formSubmit=(event)=> {  
    event.preventDefault();
    alert("Registration is Success");
  }                                                                                            
  render(){
    return(
      <div>
      <form onSubmit={this.formSubmit}>
        <h1>Sports registration</h1>
        <label for="sports">Sports</label>
                <select name="sports" id="sports">
                    <option value="Basketball">Basketball</option>
                    <option value="football">football</option>
                    <option value="Tennis">Tennis</option>
                    <option value="Carrom">Carrom</option>
                    <option value="Throwball">Throwball</option>
                    </select> <br></br><br></br>            
        Name: <input type="text" name="username" onChange={this.uservalue} /> <br /><br />
        Phone : <input type="text" name="phono" onChange={this.uservalue}/>
        {this.state.errmsg1}<br /><br />
        Address : <input type="text" name="addr" onChange={this.uservalue}/><br /><br />
        Fees : <input type="text" id='Fees' name="fees" onChange={this.uservalue}/>
        {this.state.errmsg2}<br /><br />
        References : <input type="text" id="Refer" name="refer" onChange={this.uservalue}/>
        {this.state.errmsg3}<br /><br />
        Total amount :<input type='text' id='Total' disabled /><br />
        <input type='submit'/>
      </form>
      </div>
    );
  }
}
export default Reactform;