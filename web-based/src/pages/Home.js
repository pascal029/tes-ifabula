import FileDownload from "js-file-download";

export default function Home() {
  const downloadTransaction = (e) => {
    e.preventDefault();
    const tes = fetch("http://localhost:3001/input-transaksi", {
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
  return (
    <div className="container" style={{ gap: 10 }}>
      <div>
        <button>Input Perusahaan</button>
      </div>{" "}
      <div>
        <button>Input Transaksi</button>
      </div>{" "}
      <div>
        <button onClick={downloadTransaction}>Export data csv</button>
      </div>
    </div>
  );
}
