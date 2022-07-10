import classes from "./Header.module.css";

import image from "../../assets/meals.jpg";
import HeaderCardButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}> 
        <h1>React Meals</h1>
       <HeaderCardButton onClick={props.onShowCart}/> 
      </header>
      <div className={classes['main-image']}>
        <img src={image} alt="Foods" />
      </div>
    </>
  );
};

export default Header;
