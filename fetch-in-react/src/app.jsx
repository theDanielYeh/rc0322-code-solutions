import React from 'react';
import UserList from './user-list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true
    };
  }

  componentDidMount() {
    const myRequest = new Request('https://jsonplaceholder.typicode.com/users', {
      method: 'GET'
    });

    fetch(myRequest)
      .then(response => {
        // console.log(response.json())
        return response.json()
      })
      .then(users => {
        console.log(users);
        this.setState({
          users: users,
          isLoading: false
       })
      })
      .catch(console.error);

  }

  render() {
    return this.state.isLoading
      ? <p>Loading...</p>
      : <UserList users={this.state.users} />;
  }
}

export default App;
