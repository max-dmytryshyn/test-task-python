import { HeaderItem } from "./HeaderItem";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <ul className="header__nav">
        <HeaderItem label="Users" path="/" />
        <HeaderItem label="Groups" path="/groups" />
      </ul>
    </header>
  );
};
