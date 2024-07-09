import React from "react";
import User from "./User";
import './UserList.css'
const users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' }
]
class UserList extends React.Component {
    render() {
        return <div className="container-list">
            {users.map((pers) =>
                <User key={pers.id} name={pers.name} email={pers.email} />
            )}
        </div>
    }
}
export default UserList