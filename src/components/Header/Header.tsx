import { ProfIcon, NotificationIcon, BarIcon } from "../../SVGs/CustomSVGs";
import Switch from "../Switch/Swtich";
import "./style.css";
import { useAppDispatch } from "../../hooks";
import { saveAccountStatus } from "../../store/slice/globalSlice";

const Header = () => {
  const dispatch = useAppDispatch();
  const handleAccountToggle = (isLive: boolean) => {
    dispatch(saveAccountStatus(isLive ? "Live" : "Test"));
  };

  return (
    <div className="header-container">
      <div className="header-left">
        <p className="title">Dashboard</p>
      </div>
      <div className="header-right">
        <Switch onToggle={handleAccountToggle} />
        <BarIcon />
        <NotificationIcon />
        <div className="user-info">
          <div className="user-details"></div>
          <ProfIcon className="dropdown-icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
