import React from 'react';

import './Todolist.css';
const Todoitem = (props) => {
    
    const {Items , deleteItem} = props;
    const length = Items.length;
   const ListItems = length ?(
    Items.map((item) => {
       return(
           <div key={item.id}>
           <span> {item.name} </span> 
           <span> {item.age}</span>
           <span className="close" onClick={() => deleteItem(item.id)}> &times;</span>
               </div>
       )
   }) ): (<p className="no-item">there is no item to show</p>)
     return(

        <div className="tabledata"> 
            <div>
                <span>Name</span>
                <span>Age</span>
                <span>Action</span>
            </div>
        {ListItems} </div>
    )
}
export default Todoitem;