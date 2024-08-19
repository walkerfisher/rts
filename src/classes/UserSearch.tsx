import { Component } from "react";

type User = {
  name: string,
  age: number
}

interface UserSearchProps {
  users: User[]
}

interface UserSearchState {
  name: string;
  user: User | undefined
}

class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: '',
    user: undefined
  };

  onClick = () => {
    const foundUser = this.props.users.find((user: User) => {
      return user.name === this.state.name;
    });

    this.setState({ user: foundUser });
  };

  render() {
    return (
      <div>
      User Search
      <input value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
      <button onClick={this.onClick}>Find User</button>
      <div>
        {this.state.user && this.state.user.name}
        {this.state.user && this.state.user.age}
      </div>
    </div>
    )
  }
}

export default UserSearch;