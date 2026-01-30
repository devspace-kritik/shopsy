import { assets } from "@/assets/assets";
import { ShopContext } from "@/context/ShopContext";
import React, { useContext, useEffect, useState } from "react";
import "./searchbar.css";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
    const [visible, setVisible] = useState(false);
    const location = useLocation();

    useEffect(()=>{
        if(location.pathname.includes('collection')){
            /* eslint-disable-next-line react-hooks/exhaustive-deps */
            setVisible(true);
        }
        else{
            setVisible(false);
        }
    },[location]);

  return showSearch && visible ? (
    <div className="searchContainer">
      <div className="searchChildContainer">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="searchInput"
          type="text"
          placeholder="Search"
        />
        <img className="searchImage" src={assets.search_icon} alt="" />
      </div>
      <img onClick={()=>(setShowSearch(false))} className="searchCrossIcon" src={assets.cross_icon} alt="" />
    </div>
  ) : null;
};

export default SearchBar;
