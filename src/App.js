import data from "./data.json";
import './style.css';
import React, {useEffect, useState} from "react";

function App() {
  // const url = 
  // 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1f2898db-ceb4-4565-a1eb-2d3beb8a509c/product.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230130T061259Z&X-Amz-Expires=86400&X-Amz-Signature=e0539929a1be2b17856e3a32a94d174845e9577391b7d945900f901fd3117da3&X-Amz-SignedHeaders=host&x-id=GetObject'
  // const [users, setUsers] = useState([]);
  // const getDataUsers = async () => {
  //   const response = await fetch('https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1f2898db-ceb4-4565-a1eb-2d3beb8a509c/product.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230130T061259Z&X-Amz-Expires=86400&X-Amz-Signature=e0539929a1be2b17856e3a32a94d174845e9577391b7d945900f901fd3117da3&X-Amz-SignedHeaders=host&x-id=GetObject');
  //   const dataku = await response.json();
  //   const users = dataku.slice(0, 8);
  //   setUsers(users)
  // }
  // useEffect(() => {
  //   getDataUsers()
  // })
//   const [error, setError] = useState(null);
//     const [isLoaded, setIsLoaded] = useState(false);
//     const [items, setItems] = useState([]);
//   useEffect(() => {
//     fetch(
//         "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1f2898db-ceb4-4565-a1eb-2d3beb8a509c/product.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230128T070926Z&X-Amz-Expires=86400&X-Amz-Signature=c9f59a346d3e44bd3068dfe2842648238c4f0287cd623f1e40018bb95bb8c085&X-Amz-SignedHeaders=host&x-id=GetObject"
//     )
//         .then((res) => res.json())
//         .then(
//             (result) => {
//                 setIsLoaded(true);
//                 setItems(result);
//             },
//             (error) => {
//                 setIsLoaded(true);
//                 setError(error);
//             }
//         );
// }, []);

  const [searchTerm, setSearchTerm] = useState(""); 
  return (
    <div className="templateContainer">
      <div className="searchInput_Container">
        <input id="searchInput" type="text" placeholder="Search Here" onChange={(event) => {
          setSearchTerm(event.target.value);
        }} />
      </div>
      <div className="template_Container">
        {
          data
            .filter((val) => {
              if(searchTerm == ""){
                return val;
              } else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val;
              }
            })
            .map((val) => {
              return(
                <div className="template" key={val.id}>
                  <img src={val.image} alt="" />
                  <h3 class="card-name">{val.name}</h3>
                  <p class="card-text">{val.description}</p>
                  <p className="price">Rp {val.price}</p>

                  </div>
              )
            })
        }
      </div>
    </div>
  );
}

export default App;
