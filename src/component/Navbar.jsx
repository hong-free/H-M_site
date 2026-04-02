import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const Navbar = ({ authenticate, setAuthenticate }) => {
  const menuList = ['WOMEN', 'MEN', 'KIDS', 'SALE', 'HOME']
  let [width, setWidth] = useState(0);
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login")
  }
  const handleClick = () => {
    navigate("/")
  }
  const search = (event) => {
    if (event.key === "Enter") {
      //입력한 검색어를 읽어와서 
      let keyword = event.target.value;
      console.log(keyword)
      //url을 바꿔준다.
      navigate(`/?q=${keyword}`)
    }
  }
  return (
    <div>
       <div className="side-menu" style={{ width: width }}>
        <button className="closebtn" onClick={() => setWidth(0)}>
          &times;
        </button>
        <div className="side-menu-list" id="menu-list">
          {menuList.map((menu, index) => (
            <button key={index}>{menu}</button>
          ))}
        </div>
      </div>
      <div className="top">
 <div className="burger-menu hide">
          <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
        </div>
      <div className="login-button">
        {authenticate ? (
          <div onClick={() => setAuthenticate(false)}>
            <FontAwesomeIcon icon={faUser} />
            <span style={{ cursor: "pointer" }}>로그아웃</span>
          </div>
        ) : (
          <div onClick={() => navigate("/login")}>
            <FontAwesomeIcon icon={faUser} />
            <span style={{ cursor: "pointer" }}>로그인</span>
          </div>
        )}
      </div>
      </div>
     
      <div className="nav-section">
        <img onClick={handleClick}
          width={100}
          src="data:image/png;base64,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" />
      </div>
      <div>
        <ul className="menu-list">
          {menuList.map((menu => <li>{menu}</li>)
          )}
        </ul>

        <div className="search-area">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" onKeyPress={(event) => search(event)} placeholder="검색어를 넣어주세요" />
        </div>

      </div>
    </div>
  );
};

export default Navbar;
