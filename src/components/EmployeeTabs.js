import { useState } from "react";
import "../App.css";
import {Form} from './Form'

// https://www.w3schools.com/html/html_tables.asp
// table 

function EmployeeTabs() {
  const [toggleState, setToggleState] = useState(1);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [initial, setInitial] = useState(0);
  const [restock, setRestock] = useState(0);
  const [critical, setCritical] = useState(0);
  const [type, setType] = useState('entree');


  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
        View Employees
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
        Add Employee
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
        Modify Employee
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>Roster</h2>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Add Employee</h2>
          <hr />
          <form>
            <label> Enter Name </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label> Enter Type </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="Manager">Manager</option>
              <option value="Regular Employee">Regular Employee</option>
            </select> 
            <button className="SubmitButton">Add Employee</button>
            <p>
              {name}
              {type}
            </p>

          </form>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>Modify Employee</h2>
          <hr />
          <form>
            <label> Select Employee you wish to modify </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
            /* TODO change to read from database */
              <option value="Barbra Linder">Barbra Linder</option>
              <option value="Lewis Smith">Lewis Smith</option>
              <option value="Lydia Johnson">Lidia Johnson</option>
            </select> 
            <button className="SubmitButton">Sumbit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EmployeeTabs;
