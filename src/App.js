import { useEffect, useState } from "react";
import Axios from "axios";
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect (() => {
    Axios.get("https://dummyjson.com/users")
    .then ((res) => {
      if (res.status === 200) {
        setData(res.data.users);
      }
      else {
        Promise.reject();
      }
    })
    .catch((err) => alert(err))
  }, [])

  const rows = () => {
    return data.map((val) =>{
      return (
        <tr>
          <td style={{textAlign: "center"}}>{val.id}</td>
          <td><img src={val.image} width={40} height={40} alt="" /></td>
          <td>{val.firstName}</td>
          <td>{val.lastName}</td>
          <td>{val.gender}</td>
          <td>{val.email}</td>
          <td>{val.username}</td>
          <td>{val.domain}</td>
          <td>{val.ip}</td>
          <td>{val.university}</td>
        </tr>
      )
    })
  }

  return (
    <div style={{backgroundColor: "rgb(36,36,36)", color: "white", height: "100%", width: "100%", overflow: "hidden"}}>
      <h1 style={{textAlign: "center"}}>Dummy data</h1>
      <table className="table">
        <tr className="tr1">
          <th>Sno</th>
          <th>Profile Pic</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Gender</th>
          <th>E-mail</th>
          <th>Username</th>
          <th>Domail</th>
          <th>IP</th>
          <th>University</th>
        </tr>
        {rows()}
      </table>
    </div>
  );
}

export default App;
