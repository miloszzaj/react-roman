import styles from './UserListItem.module.scss';

const UsersListItem = ({ userData: { average, name, attendance = '0%' } }) => {
  return (
    <li className={styles.user}>
      <div>{average}</div>
      <div>
        <p>{name}</p>
        <p>{attendance}</p>
      </div>
      <button>X</button>
    </li>
  );
};

export default UsersListItem;
