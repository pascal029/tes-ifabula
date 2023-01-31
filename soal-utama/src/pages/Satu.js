import { useEffect, useState } from "react";

export default function Satu() {
  const [data, setData] = useState([]);
  const [id, setId] = useState(0);
  const [first, setFirst] = useState({});
  const fetchData = async () => {
    const data = await fetch("data.json");
    const json = await data.json();
    await setData(json);
    await setFirst(json[0]);
    return json;
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <label>{data.length == 0 ? first.warna : data[id].warna}</label>
      <button
        onClick={() => {
          if (id < data.length - 1) {
            setId(id + 1);
          } else {
            setId(0);
          }
        }}
      >
        {" "}
        change me
      </button>
    </div>
  );
}
