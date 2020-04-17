import { connect } from "react-redux";
import { Link } from "react-router-dom";
import React from "react";

const Navigation = () => {
  return (
    <div>
      <Link to="/dashboard">
        <h3>Dashboard</h3>
      </Link>
    </div>
  );
};

export const ConnectedNavigation = connect((state) => state)(Navigation);
