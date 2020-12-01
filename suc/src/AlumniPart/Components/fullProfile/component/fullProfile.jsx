import React,{Component} from "react";

class FullProfile extends Component{
  
    constructor(props){
        super(props);

       this.state={
        skillList: sessionStorage.getItem("profileProps")===null?[]:JSON.parse(sessionStorage.getItem("profileProps")),
       }
        
        console.log(this.state.skillList);
      }
    
    render()
    {
        return(
            <p>{this.state.skillList.name}</p>
        );
    }
}

export default FullProfile;