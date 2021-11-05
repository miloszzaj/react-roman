import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import {
  Wrapper,
  Circle,
  StyledInfo,
  Attendance,
} from './UsersListItem.styles';

const showIndex = (index) => alert(`#${index + 1}`);
const UsersListItem = ({
  deleteUser,
  index,
  userData: { average, name, attendance = '0%' },
}) => {
  return (
    <Wrapper>
      <Circle value={average}>{average}</Circle>
      <StyledInfo>
        <p>
          {name}
          <Button onClick={() => deleteUser(name)} />
        </p>
        <p>attendance: {attendance}</p>
      </StyledInfo>
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
