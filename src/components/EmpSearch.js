import React from "react";
import "../styles/EmpSearch.css"

function EmpSearch(props) {
    return (
        <div className="wrap">
            <div className="row justify-content-center align-items-center" >
                <form >
                    <div className="form-group">
                        <label>Search for Employee </label>
                        <input className="form-control-lg"
                            onChange={props.handleInputChange}
                            value={props.search}
                            name="search"
                            type="text"
                            id="search"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}


export default EmpSearch;