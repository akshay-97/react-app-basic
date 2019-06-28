import React from 'react';
import ListItem from './list-item';
const Lists = (props) => {
    return(
        <ul className="list-group list-group-flush">
            {
                props.items.map((i)=>{  
                    return(
                    <div>   
                        <li className="list-group-item"><ListItem item={i} deleteItem={props.deleteItem} /></li>
                    </div>    
                    ); 
                })
            }
        </ul>
    );
};

export default Lists;