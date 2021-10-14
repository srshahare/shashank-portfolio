import React, { useState } from "react";
import "./Home.css";
import Me from "../../assets/mee.jpg";
import Diagonal from "../../assets/diagonal.png";
import { Popover } from "react-tiny-popover";
import { Route, useHistory } from "react-router-dom";
import HomeScreen from "../HomeScreen/HomeScreen";
import Portfolio from "../Portfolio/Portfolio";
import AboutScreen from "../About/AboutScreen";

const Home = () => {
  const history = useHistory();
  const icons = [
    {
      name: "fas fa-home",
      pop: "Home",
    },
    {
      name: "fas fa-user-alt",
      pop: "About Me",
    },
    {
      name: "fas fa-file",
      pop: "Resume",
    },
    {
      name: "fas fa-briefcase",
      pop: "Portfolio",
    },
    {
      name: "fas fa-list-alt",
      pop: "Blogs",
    },
  ];

  const mouseEnterHandler = (i) => {
    switch (i) {
      case 0:
        setOpen1(true);
        break;
      case 1:
        setOpen2(true);
        break;
      case 2:
        setOpen3(true);
        break;
      case 3:
        setOpen4(true);
        break;
      case 4:
        setOpen5(true);
        break;
      default:
        return 0;
    }
  };
  const mouseLeaveHandler = (i) => {
    switch (i) {
      case 0:
        setOpen1(false);
        break;
      case 1:
        setOpen2(false);
        break;
      case 2:
        setOpen3(false);
        break;
      case 3:
        setOpen4(false);
        break;
      case 4:
        setOpen5(false);
        break;
      default:
        return 0;
    }
  };

  const openPopHandler = (i) => {
    switch (i) {
      case 0:
        return isOpen1;
      case 1:
        return isOpen2;
      case 2:
        return isOpen3;
      case 3:
        return isOpen4;
      case 4:
        return isOpen5;
      default:
        return 0;
    }
  };
  const findActive = (i) => {
    switch (i) {
      case 0:
        return isActive1;
      case 1:
        return isActive2;
      case 2:
        return isActive3;
      case 3:
        return isActive4;
      case 4:
        return isActive5;
      default:
        return 0;
    }
  };
  const setActive = (i) => {
    switch (i) {
      case 0:
        history.push("/");
        setActive1(true);
        setActive2(false);
        setActive3(false);
        setActive4(false);
        setActive5(false);
        break;
      case 1:
        history.push("/about-me");
        setActive1(false);
        setActive2(true);
        setActive3(false);
        setActive4(false);
        setActive5(false);
        break;
      case 2:
        history.push("/resume");
        setActive1(false);
        setActive2(false);
        setActive3(true);
        setActive4(false);
        setActive5(false);
        break;
      case 3:
        history.push("/portfolio");
        setActive1(false);
        setActive2(false);
        setActive3(false);
        setActive4(true);
        setActive5(false);
        break;
      case 4:
        history.push("/blogs");
        setActive1(false);
        setActive2(false);
        setActive3(false);
        setActive4(false);
        setActive5(true);
        break;
      default:
        return 0;
    }
  };

  const [isOpen1, setOpen1] = useState(false);
  const [isOpen2, setOpen2] = useState(false);
  const [isOpen3, setOpen3] = useState(false);
  const [isOpen4, setOpen4] = useState(false);
  const [isOpen5, setOpen5] = useState(false);

  const [isActive1, setActive1] = useState(true);
  const [isActive2, setActive2] = useState(false);
  const [isActive3, setActive3] = useState(false);
  const [isActive4, setActive4] = useState(false);
  const [isActive5, setActive5] = useState(false);
  return (
    <div className="home-container">
      <div className="home-left">
        <img className="diagonal" src={Diagonal} alt="svg" />
        <img className="me" src={Me} alt="shashank shahare" />
      </div>
      <div className="home-right">
        <Route path="/" exact>
          <HomeScreen />
        </Route>
        <Route path="/about-me" exact>
          <AboutScreen />
        </Route>
        <Route path="/portfolio" exact>
          <Portfolio />
        </Route>
      </div>
      <div className="home-menu">
        {icons.map((item, i) => (
          <Popover
            isOpen={openPopHandler(i)}
            positions={["left"]} // preferred positions by priority
            content={
              <div className="pop-menu-icon">
                <p>{item.pop}</p>
              </div>
            }
          >
            <span
              onMouseLeave={() => mouseLeaveHandler(i)}
              onMouseEnter={() => mouseEnterHandler(i)}
              onClick={() => setActive(i)}
              className={`menu-icon ${findActive(i) ? "menu-icon-active" : ""}`}
            >
              <i class={item.name}></i>
            </span>
          </Popover>
        ))}
      </div>
    </div>
  );
};

export default Home;
