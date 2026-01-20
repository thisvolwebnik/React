import { Link, Route, Routes } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="navigation">
      <Link className="navigation__link" to="/about">
        О приложении
      </Link>
      <Link className="navigation__link" to="/posts">
        Посты
      </Link>
    </nav>
  );
};
