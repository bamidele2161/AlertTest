import PopUp from "../PopUps/PopUp";
import "./style.css";
import { Modal } from "../../interfaces/Global";
import { AddBusinessIcon, BarIcon, CloseIcon } from "../../SVGs/CustomSVGs";
import AccountType from "./AccountType";
import { useState } from "react";
import BusinessForm from "./BusinessForm";

const AddBusiness = ({ id, close }: Modal) => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <PopUp id={id as string}>
      <div className="position">
        <section className="modalWrapper">
          <header className="headerWrapper">
            <div className="addBrand">
              <AddBusinessIcon />
              <BarIcon />
              <p className="addBrandTitle">Add a Business</p>
            </div>
            <div className="iconBg" onClick={close}>
              <CloseIcon />
            </div>
          </header>

          <div className="modalContainer">
            <section className="modalSidebar">
              <div className="modalSidebarContent"></div>
            </section>
            <aside className="modalContent">
              {activeTab === 1 && <AccountType setActiveTab={setActiveTab} />}
              {activeTab === 2 && <BusinessForm setActiveTab={setActiveTab} />}
            </aside>
          </div>
        </section>
      </div>
    </PopUp>
  );
};

export default AddBusiness;
