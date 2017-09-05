import { withProps } from 'recompose';

const UserInfo = ({ fullName, email }) => (
  <div>
    <h2>Full Name: {fullName}</h2>
    <h2>Email: {email}</h2>
  </div>
);

const addFullNameProp = withProps(
  ({ firstName, lastName }) => `${firstName} ${lastName}`,
);

const EnhancedUserInfo = addFullNameProp(UserInfo);

// Sample Usage
// <UserInfo firstName="David" lastName="Rodriguez" email="a@gmail.com" />
