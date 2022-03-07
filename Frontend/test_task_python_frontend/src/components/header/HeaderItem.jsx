import { Link } from "react-router-dom";
import "./HeaderItem.css";

export const HeaderItem = (props) => {
  return (
    <li className="header__nav__item">
      <Link className="header__nav__item__link" to={props.path}>
        {props.label}
      </Link>
    </li>
  );
};
