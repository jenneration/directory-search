import React from "react";
import "../styles/EmpResults.css";

function EmpResults(props) {
  return (
    <div>
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col justify-content-center">Employee</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">DOB</th>
          </tr>
        </thead>
        <tbody>

          {props.results.map((item) =>
            //In place of an "if" statement below = if search value has a length and item.property includes the search values/inputs...
            props.searchValue.length && item.name.first.toLowerCase().includes(props.searchValue.toLowerCase()) ||
              props.searchValue.length && item.name.last.toLowerCase().includes(props.searchValue.toLowerCase()) ||
              props.searchValue.length && item.email.toLowerCase().includes(props.searchValue.toLowerCase()) ||
              props.searchValue.length && item.phone.toLowerCase().includes(props.searchValue.toLowerCase()) ||
              props.searchValue.length && item.dob.date.toLowerCase().includes(props.searchValue.toLowerCase()) ?
              //cont. -- render that data here
              <tr key={item.login.uuid}>
                <td>
                  <img src={item.picture.medium} alt="employee image" />
                </td>
                <td>
                  {item.name.first} {item.name.last}
                </td>
                <td>{item.email}</td>
                <td>{item.phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")}</td>
                <td>
                  {item.dob.date.replace(
                    /(\d{4})\-(\d{2})\-(\d{2}).*/,
                    "$2-$3-$1"
                  )}
                </td>
              </tr>
              //cont. -- or if there is nothing in the search value, render all data here
              : !props.searchValue.length ? <tr key={item.login.uuid}>
                <td>
                  <img src={item.picture.thumbnail} alt="employee image" />
                </td>
                <td>
                  {item.name.first} {item.name.last}
                </td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>
                  {item.dob.date.replace(
                    /(\d{4})\-(\d{2})\-(\d{2}).*/,
                    "$2-$3-$1"
                  )}
                </td>
              </tr>
                : null
          )}
        </tbody>
      </table>
    </div>
  );
}

export default EmpResults;
