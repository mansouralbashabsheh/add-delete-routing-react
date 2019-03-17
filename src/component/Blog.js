import React ,{Component} from 'react'
import axios from 'axios'

class Blog extends Component {
    state = {
        users:[]
    }
    componentDidMount()
    {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(man => {
            this.setState({users:man.data})
        })
        
    }
    render(){
        return(
            <div>
                <h1>ddd</h1>
                <div> {this.state.users.map( user => <span> {user.name} and {user.username}</span>)}</div>
            </div>
        )
    }

}
export default Blog;