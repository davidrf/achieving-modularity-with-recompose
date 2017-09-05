import { compose, flattenProp, withProps } from 'recompose';

const UserInfo = ({ fullName, email }) => (
  // same as before
);

const addFullNameProp = withProps(
  ({ firstName, lastName }) => `${firstName} ${lastName}`,
);

const enhance = compose(
  flattenProp('user'),
  addFullNameProp,
);

/*
 Sample Usage

 <EnhancedUserInfo
  user={{
    firstName: "David"
    lastName: "Rodriguez Fuentes"
    email: "davidrf.developer@gmail.com"
  }}
 />
*/

const EnhancedUserInfo = enhance(UserInfo);
