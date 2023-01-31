import { useState, useEffect } from "react";

export default function Tiga() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const result = async () => {
      const data = await fetch("http://jsonplaceholder.typicode.com/posts");
      let json = await data.json();
      console.log(json);
      json = await json.filter((el) => el.id <= 10);
      await setData(json);
      return json;
    };

    result();
  }, []);
  return (
    <div>
      <table style={{ border: 1 }}>
        <thead>
          <tr>
            <th>userId</th>
            <th>id</th>
            <th>title</th>
            <th>body</th>
          </tr>
        </thead>
        <tbody>
          {data.map((el) => {
            return (
              <tr key={el.id}>
                <td>{el.userId}</td>
                <td>{el.id}</td>
                <td>{el.title}</td>
                <td>{el.body}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
