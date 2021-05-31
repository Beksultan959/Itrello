import React from 'react';
import { Button, Icon, TextInput } from 'react-materialize';
import { Link } from 'react-router-dom';

function Card(props) {

  

  var date = new Date(props.card.date);

    return (
        <div className="col s4">
          <div className="card">
            <div className="card-content">
            <span className="card-title">{props.card.name}</span>
            <Link className="blue-text text-darken-3" style={{fontWeight:"bold"}} to={`/details/${props.card.id}`}>DETAILS <Icon style={{color:"black"}} right>more_vert</Icon></Link>
            <p><span style={{color:"#999",fontSize:"12px",fontWeight:"bold"}}>{date.toLocaleDateString()+" "+date.toLocaleTimeString()}</span></p>
            </div>
          </div>
      </div>  
    );
}

export default Card;