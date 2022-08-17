import React from "react";

function TopStars(props) {
  return (
    <>
      <div className="all-btns">
        <button
          className={props.activeLanguage.includes("All") ? "active" : ""}
          onClick={() => props.handleClick("All")}
        >
          All
        </button>
        <button
          className={
            props.activeLanguage.includes("Javascript") ? "active" : ""
          }
          onClick={() => props.handleClick("Javascript")}
        >
          Javascript
        </button>
        <button
          className={props.activeLanguage.includes("Ruby") ? "active" : ""}
          onClick={() => props.handleClick("Ruby")}
        >
          Ruby
        </button>
        <button
          className={props.activeLanguage.includes("java") ? "active" : ""}
          onClick={() => props.handleClick("java")}
        >
          Java
        </button>
        <button
          className={props.activeLanguage.includes("Css") ? "active" : ""}
          onClick={() => props.handleClick("Css")}
        >
          Css
        </button>
        <button
          className={props.activeLanguage.includes("Python") ? "active" : ""}
          onClick={() => props.handleClick("Python")}
        >
          Python
        </button>
      </div>
    </>
  );
}

export default TopStars;
