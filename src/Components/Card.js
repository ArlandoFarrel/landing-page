import data from "../data.json";
import './Card.css';
import React, {  useEffect, useState } from "react";
import Header from './Header'
import Footer from "./Footer";

function Card() {
  const [keyword, setKeyword] = useState('');
  const [hasilFilter, setHasilfilter] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  // const [search, setSearch] = useState('');
  const handlefilter = (e) => {
    const filterData = data.filter((e) => {
      return e.category.toLowerCase().includes(keyword.toLowerCase());
    });
    setHasilfilter(filterData);
  };
  console.log(keyword);

  useEffect(()=>{
    handlefilter();
  },[data, keyword])

  function getFiltered(filtered) {
    if (filtered===0) {
      return 'Barang Tidak Ada';
    }else {
      return filtered + ' Products found';
    }
  }

  return (
    <>
    <Header />

    <div className="templateContainer">
      
      <div className="searchInput_Container">
        <input id="searchInput" type="text" placeholder="Search Here" onChange={(event) => {
          setSearchTerm(event.target.value);
        }} />

       <div className="filter-area">
        <form onChange={handlefilter}>
         <select className="filter" name="isAvailable" value={keyword} onChange={(e) => setKeyword(e.target.value)}>
               <option value="">All</option>
               <option value="Ready">Ready</option>
               <option value="Pre-Order">Pre-Order</option>
               <option value="Barang Bekas">Barang Bekas</option>
           </select>
           </form>
        </div>
        
      </div>
      
      <div className="information">
                {getFiltered(hasilFilter.length)}
      </div>

      <div className="template_Container">
        {hasilFilter.length>0?
        hasilFilter
          .filter((products) => (searchTerm !== '' ? products.name.toLowerCase().includes(searchTerm) : products))
          .map((item) => (
            <div className="template" key={item.id}>
                  <img src={item.image} alt="" />
                  <h3 class="card-name">{item.name}</h3>
                  <p class="card-text">{item.description}</p>
                  <p className="price">Rp {item.price}</p>

                </div>
          )):
          data
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
              )
            })
          }
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Card;
