import React from "react";
import group from "../../assets/Group1.png";
import "./footer.css"; // Importing the CSS file for styling

// Functional component named Index
const Index = () => {
  return (
    <footer>
      <div className="content">
        <div className="text">
          <img src={group} alt="" />
        </div>
        <div className="btn">
          <button>
            Order Now
            <svg
              width="12"
              height="16"
              viewBox="0 0 12 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.1628 7.55468L5.16314 0.888374C5.03514 0.747049 4.85649 0.667053 4.66716 0.667053H0.66738C0.404728 0.667053 0.166074 0.821711 0.0580799 1.0617C-0.048581 1.30302 -0.00458339 1.58434 0.171407 1.77899L5.76977 7.99999L0.171407 14.2197C-0.00458339 14.4156 -0.0499143 14.697 0.0580799 14.9369C0.166074 15.1783 0.404728 15.3329 0.66738 15.3329H4.66716C4.85649 15.3329 5.03514 15.2516 5.16314 15.1129L11.1628 8.44663C11.3908 8.19331 11.3908 7.80667 11.1628 7.55468Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

// Exporting the component
export default Index;
