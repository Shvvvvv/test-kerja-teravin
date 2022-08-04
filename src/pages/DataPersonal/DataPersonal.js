import React, { useState } from "react";
import TextField from "../../components/TextField";
import "./DataPersonal.css";

const initialState = {
  nama: "",
  alamat: "",
  ttl: "",
  jenisKelamin: "",
};

const DataPersonal = () => {
  const [dataPersonal, setDataPersonal] = useState(initialState);

  function handleChangeNama(e) {
    setDataPersonal({ ...dataPersonal, nama: e.target.value });
  }

  function handleChangeTtl(e) {
    setDataPersonal({ ...dataPersonal, ttl: e.target.value });
  }

  function handleChangeAlamat(e) {
    setDataPersonal({ ...dataPersonal, alamat: e.target.value });
  }

  function handleChangeJenisKelamin(e) {
    setDataPersonal({ ...dataPersonal, jenisKelamin: e.target.value });
  }

  return (
    <div className="containerDataPersonal">
      <div className="boxDataPersonal">
        <div>
          <TextField
            label="Nama"
            value={dataPersonal.nama}
            handleChange={(e) => handleChangeNama(e)}
          />
          <TextField
            label="Tempat, Tanggal Lahir"
            value={dataPersonal.ttl}
            handleChange={(e) => handleChangeTtl(e)}
          />
        </div>
        <div>
          <TextField
            label="Jenis Kelamin"
            value={dataPersonal.jenisKelamin}
            handleChange={(e) => handleChangeJenisKelamin(e)}
          />
          <TextField
            label="Alamat"
            value={dataPersonal.alamat}
            handleChange={(e) => handleChangeAlamat(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default DataPersonal;
