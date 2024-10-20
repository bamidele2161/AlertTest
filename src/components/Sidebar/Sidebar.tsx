import React, { useState } from "react";
import { SidebarData, SubSidebarData } from "./SidebarData";
import { NavLink } from "react-router-dom";

import "./Sidebar.css";
import addImage from "../../assets/add.png";
import { AddIcon, PlusIcon } from "../../SVGs/CustomSVGs";
import { useGlobalHooks } from "../../hooks/globalHooks";
import { selectGlobal } from "../../store/slice/globalSlice";
import { useAppSelector } from "../../hooks";
import AddBusiness from "../Business/AddBusiness";
import { selectBusinessInfo } from "../../store/slice/addBusinessSlice";
const Sidebar = () => {
  const toggle = useAppSelector(selectGlobal);
  const { handleShow } = useGlobalHooks();
  const [openAddBusiness, setOpenAddBusiness] = useState(false);
  const handleOpenAddBusiness = () => {
    setOpenAddBusiness(!openAddBusiness);
  };
  const handleAddBusiness = () => {
    handleShow("create-business");
  };
  const businessInfo = useAppSelector(selectBusinessInfo);
  return (
    <main className="sidebar-container">
      <section className="brand-section">
        <div className="up-section">
          <img src={addImage} alt="" className="addImage" />
          <div className="addText">
            <p className="bold-paragraph">
              {businessInfo?.name ? businessInfo?.name : "Payshiga Technology"}
            </p>
            <p className="light-paragraph">Business ID: 324545435</p>
          </div>
          <AddIcon onClick={handleOpenAddBusiness} />
        </div>

        {openAddBusiness && (
          <div className="down-section">
            <div className="plus">
              <PlusIcon />
            </div>

            <div className="addText" onClick={handleAddBusiness}>
              <p className="bold-paragraph">Add a Business</p>
            </div>
          </div>
        )}
      </section>
      <section className="links-section">
        <ul className="sidebar-links">
          {SidebarData.map(({ id, url, title, icon }) => (
            <React.Fragment key={id}>
              <NavLink
                key={id}
                to={url}
                className={({ isActive }) =>
                  isActive ? "sidebar-active" : "sidebar-inactive"
                }
              >
                <div className="link-item">
                  <span>{icon}</span>
                  <p>{title}</p>
                </div>
              </NavLink>
            </React.Fragment>
          ))}
        </ul>
        <ul className="sub-links">
          {SubSidebarData.map(({ id, url, title, icon }) => (
            <React.Fragment key={id}>
              <NavLink
                key={id}
                to={url}
                className={({ isActive }) =>
                  isActive ? "sidebar-active" : "sidebar-inactive"
                }
              >
                <div className="link-item">
                  <span>{icon}</span>
                  <p>{title}</p>
                </div>
              </NavLink>
            </React.Fragment>
          ))}
        </ul>
      </section>

      {toggle["create-business"] && (
        <AddBusiness
          id="create-business"
          close={() => handleShow("create-business")}
        />
      )}
    </main>
  );
};

export default Sidebar;
