import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function Transaksi() {
  const location = useLocation();
  const [input, setInput] = useState({
    namaPerusahaan: location.state.nama,
    namaBarang: "",
    hargaBarang: 0,
    totalBarang: 0,
  });

  const handleChange = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const submitTransaksi = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/input-transaksi", {
      method: "post",
      body: JSON.stringify(input),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        if (!resp.ok) throw resp;
        return resp.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container">
      <p>Input Transaksi</p>
      <form onSubmit={submitTransaksi}>
        <div className="input">
          <div>
            <p>Nama Perusahaan : {location.state.nama}</p>
          </div>
          <div>
            <p>
              Nama Barang:{" "}
              <input
                onChange={handleChange}
                name="namaBarang"
                type="text"
              ></input>
            </p>
          </div>
          <div>
            <p>
              Harga Barang:{" "}
              <input
                onChange={handleChange}
                name="hargaBarang"
                type="number"
              ></input>
            </p>
          </div>
          <div>
            <p>
              Total Barang:{" "}
              <input
                onChange={handleChange}
                name="totalBarang"
                type="number"
              ></input>
            </p>
          </div>
          <div style={{ marginLeft: 100 }}>
            <button>Submit data perusahaan</button>
          </div>
        </div>
      </form>
    </div>
  );
}
