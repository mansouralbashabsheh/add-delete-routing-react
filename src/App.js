import React, { Component } from 'react';
import TodoList from './component/Todolist/Todolist'
import Additem from './component/Addlist/Addlist'
import Nav from './component/Nav'
import {BrowserRouter , Route , Switch} from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Mansour from './component/Mansour'
import Service from './component/Service'
class App extends Component {

  state = {
    Items : [
      {id:5,name:'mansour',age:24},{id:4,name:'mohammad',age:20},{id:3,name:'ahmad',age:22}
    ]
    ,
    users:[{id:5,name:'man'},{id:8,name:'dd'}]
  }
  DeleteItem = (id) => {
    let Items = this.state.Items;
    let i = Items.findIndex(item => item.id === id)
    Items.splice(i,1)
    this.setState({Items});

  }

  Additem =(item) =>{
    item.id = Math.random();
    let items =this.state.Items;
    items.push(item)
    this.setState({items})

  }
  render() {
    return (
      <BrowserRouter>
      <div className="App container">

<Nav />

<Switch>
<Route exact path="/" component={Home}/>
<Route path="/About" component={About}/>
<Route path="/Service" component={Service}/>
<Route path="/:test" component={Mansour}/>
</Switch>


  <h1 className="text-center"> TodoList</h1>
  <TodoList Items={this.state.users} deleteItem={this.DeleteItem}/>
  <Additem Additem={this.Additem} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
