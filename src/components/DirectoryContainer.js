import React, { Component } from "react";
import EmpResults from "./EmpResults";
import EmpSearch from "./EmpSearch";
import API from "../utils/API";

class DirectoryContainer extends Component {
  state = {
    search: "",
    results: []
  };

  //ORIGINAL

  // Auto load search on page load
  componentDidMount() {
    this.searchEmp();
  }

  // API call
  searchEmp = () => {
    API.search()
      .then((res) => this.setState({ results: res.data.results }))
      .catch((err) => console.log(err));
  };

  // //Prevent default behavior to refresh page
  // handleFormSubmit = event => {
  //    event.preventDefault();=
  // }

  //Get value of input triggering onChange
  handleInputChange = (event) => {
    const search = event.target.name;
    const value = event.target.value;
    this.setState({
      [search]: value,
    });
  };

  render() {
    return (
      <div>
        <EmpSearch
          //handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <EmpResults results={this.state.results}
          searchValue={this.state.search}
        />
      </div>
    );
  }
}

export default DirectoryContainer;

// class VisiblePoets extends Component {
//   constructor() {
//     super()
//     this.state = {
//       poets: [],
//       filteredPoets: []
//     }
//   }

//   componentWillMount() {
//     this.setState({
//       poets,
//       filteredPoets: poets
//     })
//   }

//   filterPoets = (poetFilter) => {
//     let filteredPoets = this.state.poets
//     filteredPoets = filteredPoets.filter((poet) => {
//       let poetName = poet.firstName.toLowerCase() + poet.lastName.toLowerCase()
//       return poetName.indexOf(
//         poetFilter.toLowerCase()) !== -1
//     })
//     this.setState({
//       filteredPoets
//     })
//   }

//   render() {
//     return (
//       <Poets poets={this.state.filteredPoets} match={this.props.match} onChange={this.filterPoets} />
//     )
//   }
// }

// export default Visib
