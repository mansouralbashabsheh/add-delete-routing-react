import React ,{Component} from 'react';
import './Addlist.css';

class Additem extends Component  {
    state ={
        name: '',
        age: ''
    }
    handleChanger = (e) =>{
        this.setState({
         [e.target.id]:e.target.value,
         
        })}

        handleSubmit = (e) =>{
            e.preventDefault();
            if(e.target.name.value === '')
            return false;
            else{
                this.props.Additem(this.state)
                this.setState({name:'',age:''})
            }
    

        }
    render(){
        return(
            <div className="formdata"> 
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Name" id="name" onChange={this.handleChanger} value={this.state.name} />
                    <input type="text" placeholder="Age" id="age" onChange={this.handleChanger} value={this.state.age} />
                    <input type="submit" value="add" className="btn-adds"/>
                </form>
            </div>
        )
    }
}
export default Additem;