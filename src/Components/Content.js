import React from 'react';
import Card from './Card';
import  { useState,useEffect } from 'react';
import { Button, Icon } from 'react-materialize';
import userEvent from '@testing-library/user-event';



function AllCards({newCardAddedId}) {

  const [data, setData] = useState([]);
 
  

  async function loadData() {
    let response = await fetch("http://localhost:8000/api/allCards");
    let Data = await response.json();
    console.log(Data);
    setData(Data);
  }

  useEffect(() => {
    loadData();
  }, [newCardAddedId]);

  const cards = data?.map(cards=>(
    <Card key={cards.id} card={cards}/>
  ));

  return (<div className="row">
          {cards}
          </div>
    );
}



function SearchComponent({search}){
  const[searchCards, setSearchCards] = useState([]);

  async function loadData() {

    let response = await fetch("http://localhost:8000/api/searchCards?name="+search);
    let Data = await response.json();
    setSearchCards(Data);

  }
  useEffect(()=>{
    loadData();
  },[search])

const cards= searchCards?.map(card=>(
  <Card key={card.id} card={card}/> 
))
if(searchCards.length==0){
  return <div className="row">
    <h5>Search results for: {search}</h5>
  <h1>Result not found</h1>
  <Icon style={{fontSize:"600%",color:"#b71c1c"}}>block</Icon>
</div>
}
else{ 
  return <div className="row">
{cards}
</div>}


}



function Content(props) {

  const [name,setName] = useState("");
  const [message, setMessage] = useState("");
  const [newId, setNewId] = useState(0);
  const [search, setSearch] = useState("");

  const handleSearchChange = event =>{
    setSearch(event.target.value);
  }

  const handleNameChange = event =>{
    setName(event.target.value);
  }

  const handleSearchSubmit = event =>{

  }

  const handleSubmit = event =>{
    var date = new Date();
    
    const inputData = {name,date}
    addCard(inputData);
    setName("");
    
    event.preventDefault();


  }


  async function addCard(data){
    const response = await fetch("http://localhost:8000/api/addCard", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data)
    });
    let messData = await response.json();
    setMessage(messData.id? "Data Added : " : "Error");
    console.log(messData);
    setNewId(messData.id);
  }
  


    return (
      <div className="container">
            <div className="row">
            <nav>
    <div class="nav-wrapper indigo darken-3">
      <form>
        <div class="input-field">
          <input id="search" value={search} onChange={handleSearchChange} type="search" required/>
          <label class="label-icon" for="search"><i class="material-icons">search</i></label>
          <i class="material-icons">close</i>
        </div>
      </form>
    </div>
  </nav>
  <div className="row">

  </div>
            <div>
    {
      search==""?<div>
    
        <div className="col s9 offset-s2">
          <div className="card">
          
            <div className="card-content">
            <span className="card-title">Create New Card</span>
            <form onSubmit={handleSubmit}>
            <div className="input-field">
                <input value={name} onChange={handleNameChange}
                    id="card" name="cardName" type="text" className="validate"/>
                <label htmlFor="card">Card Name</label>
                </div>
                <Button waves="light">add new <Icon right>add</Icon></Button>
            </form>
                
            </div>
          </div>
        </div>
            <AllCards newCardAddedId={newId} />
            </div>
            :
           <SearchComponent search={search}/>
          
    }

        </div>
      </div>
      </div>
    );
}

export default Content;