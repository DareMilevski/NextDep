import React from "react";
import headerStyles from "../styles/Header.module.css";

const Header = () => {
  //   const x = 5;
  return (
    <div className={headerStyles.title}>
      <h1>
        <span>WebDev</span>News
      </h1>
      <p className={headerStyles.description}>Keep up to date</p>
      {/* <style jsx>
        {`
          .title {
            color: ${x > 3 ? "red" : "blue"};
          }
        `}
      </style> */}
    </div>
  );
};

export default Header;
