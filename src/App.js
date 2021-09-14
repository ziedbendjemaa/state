import React, { Component } from 'react'
import "./App.css"

export default class App extends Component {
  state={ profile:{
    Image:"https://scontent.ftun1-2.fna.fbcdn.net/v/t1.6435-9/217616429_3042600722640536_2596882021349332414_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=lk3U_9pwu94AX9IF5Pa&_nc_ht=scontent.ftun1-2.fna&oh=0ce05011de9f2e7b69f8ff1315b71903&oe=616496E1",
    Name:"zied",
    fullname:"ben djemaa",
    job:"mazelt na9ra aand nejah fi go my code",

  },
  count:0,
  isShow:true
  }
  handelshow=()=>{
this.setState({isShow:!this.state.isShow})
  }
  componentDidMount(){
    setInterval(()=>{
    this.setState({count:this.state.count+1})
    }, 1000

    );
  }
  render() {
    return (
    <div style={{textAlign:"center"}}>
      <button style={{width:"50px",height:"30px",marginBottom:"20px",backgroundColor:"#323C48",color:"white",marginTop:"90px"}} onClick={this.handelshow} >{this.state.isShow?"Hide":"Show"}</button>
      {this.state.isShow&&<div style={{ backgroundColor:"#508FE2",textAlign:"center",marginTop:"100px",marginLeft:"600px",marginRight:"600px",borderRadius:"10px",boxShadow:"3px 3px 3px 3px #a7a5a5"}}>
        <img src={this.state.profile.Image} style={{width:"200px",height:"200px",borderRadius:"90px",marginTop:"30px"}} />
        <p style={{fontFamily:"inherit",textAlign:"center",fontSize:"30px",color:"white"}}>Name: {this.state.profile.Name}</p>
        <p  style={{fontFamily:"inherit",textAlign:"center",fontSize:"30px",color:"white"}}>FullName:  {this.state.profile.fullname}</p>
        <p  style={{fontFamily:"inherit",textAlign:"center",fontSize:"30px",color:"white"}}>Job:  {this.state.profile.job}</p>
        
      <h1 style={{color:"white",fontSize:"50px"}}>{this.state.count}</h1>
      </div>
  }
    </div>
    
    )
  }
}
