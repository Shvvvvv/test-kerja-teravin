import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Indicator from "../../components/Indicator";
import "./FormSubmission.css";

const FormSubmission = () => {
  const [indicatorForm, setIndicatorForm] = useState("DataPersonal");
  const navi = useNavigate();

  function handleClickNext(e) {
    e.preventDefault();
    if (indicatorForm === "DataPersonal") {
      navi("pendidikan");
      setIndicatorForm("Pendidikan");
    } else if (indicatorForm === "Pendidikan") {
      navi("kerja");
      setIndicatorForm("Kerja");
    } else if (indicatorForm === "Kerja") {
      navi("keahlian");
      setIndicatorForm("Keahlian");
    }
  }
  return (
    <div className="containerForm">
      <header>
        <h1>Form Submission</h1>
      </header>
      <main className="mainForm">
        <Indicator class={indicatorForm} />
        <form onSubmit={(e) => handleClickNext(e)} className="form">
          <Outlet />
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              marginTop: 10,
            }}
          >
            <input
              style={{ width: 90 }}
              type="submit"
              value={indicatorForm === "Keahlian" ? "Submit" : "Next"}
            />
          </div>
        </form>
      </main>
    </div>
  );
};

export default FormSubmission;
