import React from 'react';
import UserContext from '../utils/UserContext';

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
      userInfo:{
        name: "dummy",
        avatar_url: "dummy_url",
      }
    };
    console.log("UserClass constructor called");
  }
  async componentDidMount() {
    console.log("UserClass component componentDidMount");
    const data = await fetch(
      `https://api.github.com/users/vckgupta008`
    );
    const json = await data.json();
    this.setState({ userInfo: json });
    // console.log("UserClass data fetched:", json);
  }

  async componentDidUpdate(prevProps, prevState) {
    console.log("UserClass component componentDidUpdate", prevProps, prevState);

    if (prevState.count !== this.state.count) {
      console.log("Count updated from", prevState.count, "to", this.state.count);
      // You can perform additional actions here if needed            
    }
    if (prevState.count2 !== this.state.count2) {
      console.log("Count2 updated from", prevState.count2, "to", this.state.count2);
      // You can perform additional actions here if needed
    }
  }
  componentWillUnmount() {
    console.log("UserClass component componentWillUnmount");
    // Cleanup actions if needed
  }



  render() {
    const { name, loc } = this.props;
    const { count, count2, userInfo } = this.state;
    console.log("UserClass render called");
    return (
      <div className='user-card'>
        <img src={userInfo.avatar_url} alt="User Avatar" />
        <h1>{name} Class Component {loc} {userInfo.login}</h1>
        <p>Count: {count}</p>
        <p>Count2: {count2}</p>
        <button onClick={() => this.setState({ count: count + 1 })}>
          Count ++
        </button>
        <p>This is the user class component of the Food App.</p>
        <UserContext.Consumer>
          {({ user }) => (
            <h2>User Context: {user.name}</h2>
          )}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default UserClass;