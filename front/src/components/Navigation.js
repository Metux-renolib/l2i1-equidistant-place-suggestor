import React from 'react';
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="nav">
          <Link exact="true" to="/" activeclassname="nav_active" id="link"/>
          <Link
            exact="true"
            to="/contact"
            activeclassname="nav_active"
            id="link"
          />
        </nav>
  );
}

export default Navigation;