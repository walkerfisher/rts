import { useState, useRef, useEffect } from "react";

type User = {
  name: string
  age: number
}

const savedUsers: User[] = [
  { name: 'Sarah', age: 20 },
  { name: 'Tim', age: 22 },
  { name: 'Joey', age: 19 },
];

const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState<string>('');
  const [user, setUser] = useState<User | undefined>();

  useEffect(() => {
    //Make sure the ref is defined and pointing to an HTML element, otherwise return
    if(!inputRef.current) return;
    
    inputRef.current.focus();
  },[]);

  const onClick = () => {
    const foundUser = savedUsers.find((user: User) => {
      return user.name === name;
    });

    setUser(foundUser);
  };

  return (
    <div>
      User Search
      <input 
        ref={inputRef} 
        value={name} 
        onChange={e => setName(e.target.value)}
      />
      <button onClick={onClick}>Find User</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  )
};

export default UserSearch;