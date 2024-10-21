import { useAppDispatch, useAppSelector } from "../../hooks";
import { AddProps } from "../../interfaces/Global";
import {
  saveBusinessInfo,
  selectAccountType,
} from "../../store/slice/addBusinessSlice";
import { ArrowBackIcon } from "../../SVGs/CustomSVGs";
import { africanCountries, industries, sizes, volumes } from "../../utils";
import FormInput from "../FormInput";
import * as Yup from "yup";
import { useFormik } from "formik";
import "./style.css";
import { useGlobalHooks } from "../../hooks/globalHooks";
import toast from "react-hot-toast";

const BusinessForm = ({ setActiveTab }: AddProps) => {
  const type = useAppSelector(selectAccountType);
  const dispatch = useAppDispatch();

  const { handleShow } = useGlobalHooks();
  const initialValues = {
    name: "",
    industry: "",
    size: "",
    volume: "",
    location: "",
  };

  const onSubmit = (userData: any) => {
    const requiredData = {
      type: type,
      ...userData,
    };
    dispatch(saveBusinessInfo(requiredData));
    handleShow("create-business");
    toast.success("Business created successfully");
  };

  const addBusinessSchema = Yup.object().shape({
    name: Yup.string().required("First Name is required"),
    industry: Yup.string().required("Last Name is required"),
    size: Yup.string().required("Phone number is required"),
    volume: Yup.string().required("Gender is required"),
    location: Yup.string().required("Please select city"),
  });

  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: addBusinessSchema,
    onSubmit,
  });

  return (
    <div className="businessForm">
      <p className="pageTitle">Provide some info about your business</p>

      <form className="form" onSubmit={handleSubmit}>
        <FormInput
          id="location"
          name="location"
          label="Where is your business located"
          type="cSelect"
          required
          selectOptions={africanCountries}
          placeholder="Select Location"
          keyPropertyName="name"
          valuePropertyName="name"
          itemPropertyName="name"
          defaultValue={values?.location}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <FormInput
          id="name"
          name="name"
          label="What is your business name?"
          type="text"
          required
          placeholder="use the registerd business name on your document"
          defaultValue={values?.name}
          onChange={handleChange}
          onBlur={handleBlur}
          shortP="Use the registered business name on your document"
        />

        <FormInput
          id="industry"
          name="industry"
          label="Business Industry"
          type="cSelect"
          required
          selectOptions={industries}
          placeholder="Select industry"
          keyPropertyName="industry"
          valuePropertyName="industry"
          itemPropertyName="industry"
          defaultValue={values?.industry}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <div className="grid-container">
          <FormInput
            id="size"
            required
            name="size"
            label="Company Size"
            type="cSelect"
            selectOptions={sizes}
            placeholder="Select a size"
            keyPropertyName="size"
            valuePropertyName="size"
            itemPropertyName="size"
            defaultValue={values?.size}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <FormInput
            id="volume"
            required
            selectOptions={volumes}
            name="volume"
            label="Estimated annual volume"
            type="cSelect"
            placeholder="Select an option"
            keyPropertyName="volume"
            valuePropertyName="volume"
            itemPropertyName="volume"
            defaultValue={values?.volume}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>

        <div className="btnHolder">
          <button className="outline-btn" onClick={() => setActiveTab(1)}>
            <ArrowBackIcon />
            Back
          </button>
          <button className="main-btn" type="submit">
            Create Business
          </button>
        </div>
      </form>
    </div>
  );
};

export default BusinessForm;
