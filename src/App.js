import logo from "./logo.svg";
import cssImg from "./assets/css-icon.jpg";
import htmlImg from "./assets/html-icon.jpg";
import urlImg from "./assets/url-icon.jpg";
import "./App.css";

function App() {
  const sideBarItems = ["Home", "Services", "News", "Blog", "Contact"];

  const contentGridItems = [
    {
      title: "Lorem ipsum dolor sit amet",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.",
      image: cssImg,
    },
    {
      title: "Lorem ipsum dolor sit amet",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.",
      image: htmlImg,
    },
    {
      title: "Lorem ipsum dolor sit amet",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.",
      image: urlImg,
    },
  ];

  return (
    <div className='App'>
      <div className='layout'>
        <div className='side-bar'>
          {sideBarItems.map((item, index) => (
            <div key={index} className={`side-bar__item ${index === 0 && "active"}`}>
              {item}
            </div>
          ))}
        </div>
        <div className='body'>
          <div className='content'>
            <img src={logo} alt='logo' />
            <div className='description'>
              <div className='description__title'>Lorem ipsum dolor sit asmet?</div>
              <div className='description__detail'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique
                consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat
                hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in
                mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi.
                Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent
                et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum.
                Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec
                vulputate odio neque, sed semper turpis pellentesque a.
              </div>
            </div>
            <div className='grid-items'>
              {contentGridItems.map((item, index) => (
                <div key={index} className='grid-items__item'>
                  <div className='item-title'>{item.title}</div>
                  <div className='item-content'>
                    <span className='image'>
                      <img src={item.image} alt='file' />
                    </span>
                    {item.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='footer'>Copyright © 2021</div>
        </div>
      </div>
    </div>
  );
}

export default App;
