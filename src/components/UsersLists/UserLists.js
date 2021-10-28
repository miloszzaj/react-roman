import { users } from '../../data/users';
import UsersListItem from 'components/UsersListItem/UsersListItem';

const UserList = () => {
  return (
    <div>
      <ul>
        {users.map((userData) => (
          <>
            <UsersListItem userData={userData} />
          </>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
