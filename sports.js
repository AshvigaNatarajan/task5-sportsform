import React,{Component} from "react";
import './style.css';
class Reactform extends React.Component{
    constructor(){
        super();
        this.state={username:"",phoneno:null};
        this.state={address:"",fees:null};
        this.state={reference:null,amount:"",errmsg:""};
    }
    uservalue=(event) =>
    {
        let n=event.target.name;
        let v=event.target.value;
        let err="";
        if(n=="phoneno"){
            if(v!="" &&! Number(v))
            {
                err=<strong>invalid,phoneno number</strong>
            }
            this.setState({errmsg:err});
        }
        if(n=="fees"){
            if(v!="" &&! Number(v))
            {
                err=<strong>invalid,fees number</strong>
            }
            this.setState({errmsg1:err});
        }
        if(n=="reference"){
            if(v!="" &&! Number(v))
            {
                err=<strong>invalid,reference number</strong>
            }
            this.setState({errmsg2:err});
        }
        else{
            this.setState({errmsg2:""});
            var r = document.getElementById("Reference").value;
            var f = document.getElementById("Fees").value;
            var t = r*f;
            document.getElementById("Total").value=t;  
        }
}
    formsubmit=(event) =>{
        event.preventDefault();
        alert("Registration is Success");
    }
    render(){
        return(
            <form onSubmit={this.formSubmit}>
                <center>
                    <h1>Sports Registration form</h1>
                </center>
                <label for="sports">Sports</label>
                <select name="sports" id="sports">
                    <option value="Basketball">Basketball</option>
                    <option value="football">football</option>
                    <option value="Tennis">Tennis</option>
                    <option value="Carrom">Carrom</option>
                    <option value="Throwball">Throwball</option>
                    </select> <br></br><br></br>              
                Name:<input type="text" name="username" onChange={this.uservalue}/><br></br><br></br>
                phoneno:<input type="text" name="phoneno" onChange={this.uservalue}/>{this.state.errmsg}<br></br><br></br>
                Address:<input type="text" name="address" onChange={this.uservalue}/><br></br><br></br>
                Fees:<input type="text" name="fees" onChange={this.uservalue}/>{this.state.errmsg1}<br></br><br></br>
                Reference:<input type="text" name="reference" onChange={this.uservalue}/>{this.state.errmsg2}<br></br><br></br>
                Total amount:<input type="text" name="amount" onChange={this.uservalue}/><br></br>
                <input type="submit" name="submit" onClick={this.formsubmit}/>
            </form>
        )
    }
}
export default Reactform;