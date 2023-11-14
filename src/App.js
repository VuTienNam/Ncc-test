import logo from "./logo.svg";
import "./App.css";

function App() {
  const sideBarItems = ["Home", "Services", "News", "Blog", "Contact"];

  return (
    <div className='App'>
      <div className='grid-layout'>
        <div className='side-bar'>
          {sideBarItems.map((item, index) => (
            <div key={index} className='side-bar__item'>
              {item}
            </div>
          ))}
        </div>
        <div className='body'>
          <div className='content'></div>
          <div className='footer'>Copyright © 2021</div>
        </div>
      </div>
    </div>
  );
}

export default App;
