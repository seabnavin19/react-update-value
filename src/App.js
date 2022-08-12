
import './App.css';
import { Component } from 'react';


class App extends Component {
  state ={
    "value1":"value1",
    "value2":"value2",
    "value3":"value3",
    "valueb1":"value1",
    "valueb2":"valuee",
    "select":"var1",
    "selectedBox":"box1",
    "name":"name",
    "value":"value",
    "variables":[{name:"vair",value:"test"}],
    "all_name":[]
 
  }


  async componentDidMount(){
    // const manager=  await lottery.methods.manager().call();
    // const players= await lottery.methods.getPlayers().call();
    // const balance = await web3.eth.getBalance(lottery.options.address);
    // this.setState({manager,players,balance});
  }
  onSubmit= async (event) =>{

    if(this.state.selectedBox=="box2"){

      if(this.state.select==="var1"){
    const val= this.state.value1
    this.setState({valueb2:val})
  }
  if(this.state.select==="var2"){
    const val = this.state.value2
    this.setState({valueb2:val})
  }
  if(this.state.select==="var3"){
    const val= this.state.value3
    this.setState({valueb2:val})
  }

    }


  if(this.state.selectedBox=="box1"){

      if(this.state.select==="var1"){
    const val= this.state.value1
    this.setState({valueb1:val})
  }
  if(this.state.select==="var2"){
    const val = this.state.value2
    this.setState({valueb1:val})
  }
  if(this.state.select==="var3"){
    const val= this.state.value3
    this.setState({valueb1:val})
  }

    }  
  //   event.preventDefault();
  
  
    };


    AddVariable= async (event) =>{
      console.log("helo");
      const old_list=this.state.variables
      if(!this.state.all_name.includes(this.state.name)){
        old_list.push({name:this.state.name,value:this.state.value})

      }
      
      this.setState({variables:old_list})
    };


   

  
  render(){
    return(
      <div>
          
           <div>
            <div>
             <label>Var1  </label>
             <input 
             value={this.state.value1}
             
             
             onChange={event => this.setState({value1:event.target.value})}></input>
             </div>

             <div>
             <label>Var2    </label>
             <input 
             value={this.state.value2}
             
             
             onChange={event => this.setState({value2:event.target.value})}></input>
             </div>

             <div>
             <label>Var3    </label>
             <input 
             value={this.state.value3}
             
             
             onChange={event => this.setState({value3:event.target.value})}></input>
             </div>

          
           </div>

           <div>
             <label>Enter a value want to select    </label>
             <input 
             value={this.state.select}
             
             
             onChange={event => this.setState({select:event.target.value})}></input>
             </div>

           <br></br>
           <button  onClick={this.onSubmit} >Change Text</button>
           <br></br>
           <br></br>
           <input 
             onClick={event => this.setState(this.state.selectedBox="box1")}
             value={this.state.valueb1}></input>

             <br></br>
             <br></br>

          <input 
            onClick={event => this.setState(this.state.selectedBox="box2")}
             value={this.state.valueb2}></input>


             <br></br>
             <br></br>
             <br></br>
             <br></br>
             <h1 >add variable</h1>
             <label>Name   </label>
             <input 
             value={this.state.name}
             
             
             onChange={event => this.setState({name:event.target.value})}></input>

            <label>Value   </label>
             <input 
             value={this.state.value}
             
             
             onChange={event => this.setState({value:event.target.value})}></input>
             <br></br>
             <br></br>

<button  onClick={this.AddVariable} >Add variable</button>

            <br></br>
             <br></br>
             <h2> variables</h2>
             <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Value</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {this.state.variables && this.state.variables.map(user =>
                        <tr key={user.name}>
                            <td>{user.name} </td>
                            <td>{user.value}</td>
                           
                        </tr>
                    )}
                </tbody>
            </table>
       

      </div>
     
    )
  }
  
}

export default App;

