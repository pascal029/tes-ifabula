import FileDownload from "js-file-download";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  const downloadTransaction = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/input-transaksi", {
      headers: {
        "Content-type": "application/json",
        access_token: localStorage.access_token,
      },
    })
      .then((resp) => {
        if (!resp.ok) throw new Error("error");
        return resp.blob();
      })
      .then((resp) => {
        FileDownload(resp, "transaction.csv");
      });
  };

  function MoveToPerusahaan() {
    navigate("/perusahaan");
  }

  function MoveToTransaksi() {
    navigate("/transaksi");
  }

  return (
    <div className="container" style={{ gap: 10 }}>
      <div>
        <button onClick={MoveToPerusahaan}>Input Perusahaan</button>
      </div>{" "}
      <div>
        <button onClick={MoveToTransaksi}>Input Transaksi</button>
      </div>{" "}
      <div>
        <button onClick={downloadTransaction}>Export data csv</button>
      </div>
    </div>
  );
}
