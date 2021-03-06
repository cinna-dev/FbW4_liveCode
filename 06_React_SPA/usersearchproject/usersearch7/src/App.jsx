import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar.jsx';
import axios from 'axios';
import Users from './components/users/Users.jsx';
import Search from './components/users/Search.jsx';
//having one state for our all react application
class App extends Component {
  state = {
    users: [],
    loading: false
  };
  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const APIKey = process.env.REACT_APP_CLIENT_ID;
  //   const APISecret = process.env.REACT_APP_CLIENT_SECRET;
  //  // console.log(APIKey);
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${APIKey}&client_secret=${APISecret}`
  //   );
  //   this.setState({ users: res.data, loading: false });
  // }
  searchText = async text => {
    this.setState({ loading: true });
    const APIKey = process.env.REACT_APP_CLIENT_ID;
    const APISecret = process.env.REACT_APP_CLIENT_SECRET;
    // console.log(APIKey);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${APIKey}&client_secret=${APISecret}`
    );
    this.setState({ users: res.data.items, loading: false });
    console.log(res.data);
  };
  render() {
    return (
      <div>
        <Navbar />
        <Search searchValue={this.searchText} />
        <Users loading={this.state.loading} users={this.state.users} />
      </div>
    );
  }
}

export default App;
