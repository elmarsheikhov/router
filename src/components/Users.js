import React from "react";

function Users() {
  const [users, setUsers] = React.useState([]);
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((melumat) => setUsers(melumat))
      .catch((err) => console.log(err));
  }, []);

  const add = (data) => {
    fetch(`https://jsonplaceholder.typicode.com/posts`, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  add({
    userId: "123ABCDEFG",
    id: "1221",
    title: "Shirvan",
    body: "Baku",
  });
  console.log(users);
  return (
    <div>
      <ul>
        {users.map((item, key) => (
          <li key={key}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
