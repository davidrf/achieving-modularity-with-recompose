import { compose, flattenProp, renameProp, withProps } from 'recompose';

const UserInfo = ({ fullName, email }) => (
  // same as before
);

const addFullNameProp = withProps(
  ({ firstName, lastName }) => `${firstName} ${lastName}`,
);

const enhance = compose(
  flattenProp('user'),
  addFullNameProp,
  renameProp('emailAddress', 'email'),
);

/*
 Sample Usage

 <EnhancedUserInfo
  user={{
    firstName: "David"
    lastName: "Rodriguez Fuentes"
    emailAddress: "davidrf.developer@gmail.com"
  }}
 />
*/

const EnhancedUserInfo = enhance(UserInfo);
