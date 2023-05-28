import React from "react";
import { Link } from "react-router-dom";

const journeys = [
  {
    label: "User Journey",
    id: "userCollapsed",
    path: [
      {
        label: "Create User",
        path: "/dashboard/",
      },
      {
        label: "Update User",
        path: "updateUser",
      },
    ],
  },
  {
    label: "Course Journey",
    id: "courseCollapsed",
    path: [
      {
        label: "Create Category",
        path: "createCategory",
      },
      {
        label: "Update Category",
        path: "updateCategory",
      },
    ],
  },
  {
    label: "Students Journey",
    id: "studentsCollapsed",
    path: [
      {
        label: "Create Category",
        path: "createCategory",
      },
      {
        label: "Update Category",
        path: "updateCategory",
      },
    ],
  },
];

export default function Sidebar() {
  const handleCollapsed = (e, id) => {
    const element = document.getElementById(id);
    console.log(element.classList);
    if (element && element.classList.contains("show")) {
      element.classList.remove("show");
    } else {
      element.classList.add("show");
    }
  };

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

      {journeys.map((_j, index) => {
        return (
          <div key={`${_j.label}-${index}`}>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={(e) => handleCollapsed(e, _j.id)}
              >
                <span>{_j.label}</span>
                <i className="fas fa-fw fa-cog"></i>
              </button>
              <div id={_j.id} className="collapse">
                <div className="bg-white py-2 collapse-inner rounded">
                  {_j.path.map((_l, index) => (
                    <Link
                      key={`${_l.label}-${index}`}
                      className="collapse-item"
                      to={_l.path}
                    >
                      {_l.label}
                    </Link>
                  ))}
                </div>
              </div>
            </li>
          </div>
        );
      })}

      <hr className="sidebar-divider" />

      <hr className="sidebar-divider d-none d-md-block" />
    </ul>
  );
}
