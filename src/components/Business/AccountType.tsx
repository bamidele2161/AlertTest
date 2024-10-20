import { ArrowRightIcon } from "../../SVGs/CustomSVGs";
import { accountOptions } from "../../utils";
import { AddProps } from "../../interfaces/Global";
import "./style.css";
import { saveAccountType } from "../../store/slice/addBusinessSlice";
import { useAppDispatch } from "../../hooks";
const AccountType = ({ setActiveTab }: AddProps) => {
  const dispatch = useAppDispatch();

  const handleNavigate = (title: string) => {
    dispatch(saveAccountType(title));
    setActiveTab(2);
  };
  return (
    <div className="account-selector">
      <div className="text">
        <p className="pageTitle">
          What kind of account do <br />
          you want to open?
        </p>
        <p className="paragraph">
          You can always add another account later on.
        </p>
      </div>
      <div className="account-options">
        {accountOptions.map((option, index) => (
          <div
            className="account-option"
            key={index}
            onClick={() => handleNavigate(option?.title)}
          >
            <span className="icon">{<option.icon />}</span>
            <div className="details">
              <h2>{option?.title}</h2>
              <p>{option?.description}</p>
            </div>
            <div className="iconBg">
              <ArrowRightIcon />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountType;
