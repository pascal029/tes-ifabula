import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Perusahaan() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    nama: "",
    kode: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const submitPerusahaan = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3001/input-perusahaan`, {
      method: "post",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    })
      .then((resp) => {
        if (!resp.ok) throw resp;
        return resp.json();
      })
      .then((data) => {
        navigate("/transaksi", { state: data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container">
      <p>Input perusahaan</p>
      <form onSubmit={submitPerusahaan}>
        <div className="input">
          <div>
            <p>
              Nama Perusahaan :{" "}
              <input onChange={handleChange} name="nama" type="text"></input>
            </p>
          </div>
          <div>
            <p>
              Kode Perusahaan :{" "}
              <input onChange={handleChange} name="kode" type="text"></input>
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
