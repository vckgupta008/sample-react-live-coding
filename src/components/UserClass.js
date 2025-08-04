import React from 'react';
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1
    };
  }
  componentDidMount() {
    console.log("UserClass component mounted");
  }
  render() {
    const { name, loc } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className='user-card'>
        <h1>{name} Class Component {loc}</h1>
        <p>Count: {count}</p>
        <p>Count2: {count2}</p>
        <button onClick={() => this.setState({ count: count + 1 })}>
          Count ++
        </button>
        <p>This is the user class component of the Food App.</p>
      </div>
    );
  }
}

export default UserClass;