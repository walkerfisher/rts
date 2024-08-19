import { useState } from "react";

type User = {
  name: string
  age: number
}

const savedUsers = [
  { name: 'Sarah', age: 20 },
  { name: 'Tim', age: 22 },
  { name: 'Joey', age: 19 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [user, setUser] = useState<User | undefined>();

  const onClick = () => {
    const foundUser = savedUsers.find((user: User) => {
      return user.name === name;
    });

    setUser(foundUser);
  };

  return (
    <div>
      User Search
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={onClick}>Find User</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  )
};

export default UserSearch;