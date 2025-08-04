import { useState } from "react";
const User = ({name, loc}) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);
  return (
    <div className="user-card">
      <h1>{name} Component {loc}</h1>
      <p>Count: {count}</p>
      <p>Count2: {count2}</p>
      <p>This is the user component of the Food App.</p>
    </div>
  );
}

export default User;