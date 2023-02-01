import data from "./data.json";
import './style.css';
import React, {useEffect, useState} from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState(""); 
  return (

    <><div class="header">
      <div class="header-left">
      {/* <img className="icon" src="images/baker 64.png" alt="" />  */}
      <h1>Sweet Choco</h1>
      </div>
    </div><div className="templateContainer">
        <div className="searchInput_Container">
          <input id="searchInput" type="text" placeholder="Search Product" onChange={(event) => {
            setSearchTerm(event.target.value);
          } } />
        </div>
        <div className="template_Container">
          {data
            .filter((val) => {
              if (searchTerm == "") {
                return val;
              } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val;
              }
            })
            .map((val) => {
              return (
                <div className="template" key={val.id}>
                  <img src={val.image} alt="" />
                  <h3 class="card-name">{val.name}</h3>
                  <p class="card-text">{val.description}</p>
                  <p className="price">Rp {val.price}</p>

                </div>
              );
            })}
        </div>
      </div></>
  );
}

export default App;
