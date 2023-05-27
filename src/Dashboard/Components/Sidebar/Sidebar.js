import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">Learning Community</div>
      </a>

      <hr className="sidebar-divider" />

      <div className="sidebar-heading">Users Journey</div>

      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-fw fa-cog"></i>
          <span>Users</span>
        </a>
        <div
          id="collapseTwo"
          className="collapse show"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <Link className="collapse-item" to="/dashboard/">
              Create Users
            </Link>
            <Link className="collapse-item" to="updateUser">
              Manage Users
            </Link>
          </div>
        </div>
      </li>

      <div className="sidebar-heading">Course Journey</div>

      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-fw fa-cog"></i>
          <span>Categories</span>
        </a>
        <div
          id="collapseTwo"
          className="collapse show"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <Link className="collapse-item" to="createCategory">
              Create Category
            </Link>
            <Link className="collapse-item" to="updateCategory">
              Manage Category
            </Link>
          </div>
        </div>
      </li>

      <hr className="sidebar-divider" />

      <hr className="sidebar-divider d-none d-md-block" />
    </ul>
  );
}
