import React from "react";
import Button from "../../components/Button";
import "./Home.css";
import { BiPlus, BiDetail } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const dataDummy = [
  {
    id: 111,
    nama: "Ari Sandi",
    alamat: "Kota Banjar",
  },
  {
    id: 112,
    nama: "Shefa Maldini",
    alamat: "Kota Ciamis",
  },
  {
    id: 113,
    nama: "Putri Mulyani",
    alamat: "Sipirok",
  },
];

const Home = () => {
  const plus = <BiPlus />;
  const detail = <BiDetail />;
  const nav = useNavigate();

  function handleTambah() {
    nav("/tambah/datapersonal");
  }

  return (
    <div className="containerHome">
      <header className="headerHome">
        <h1>Teravin Test React JS</h1>
      </header>
      <main className="mainHome">
        <nav className="navHome">
          <Button
            icon={plus}
            teks="Tambah"
            class="btnWhite"
            klik={handleTambah}
          />
        </nav>
        <section className="sectionHome">
          <div className="boxTabel">
            <table className="tableData">
              <thead>
                <tr>
                  <th>ID Nomor</th>
                  <th>Nama</th>
                  <th>Alamat</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {dataDummy.map((e) => {
                  return (
                    <tr key={e.id}>
                      <td>{e.id}</td>
                      <td>{e.nama}</td>
                      <td>{e.alamat}</td>
                      <td className="aksi">
                        <Button icon={detail} class="btnPrimary" />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
