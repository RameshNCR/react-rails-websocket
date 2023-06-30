import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import TabContent from "./TabContent";
import { Provider } from "react-redux";
import store from "../redux/Store";

const App = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { title: 'template', content: 'Content 1' },
    { title: 'branding', content: 'Content 2' },
  ];
  return (
    <Provider store = {store}>
      <div >
     <ul className="nav nav-tabs">
        {tabs.map((tab, index) => (
          <li className="nav-item" key={index}>
            <a
              className={`nav-link ${activeTab === index ? 'active' : ''}`}
              
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab-pane ${activeTab === index ? 'active' : ''}`}
          >
            <TabContent title={tab.title}/>
          </div>
        ))}
      </div>
    </div>
    </Provider>
  )
}

export default App;