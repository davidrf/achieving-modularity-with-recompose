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


/*
 Sample Usage

 <EnhancedUserInfo
  firstName="David"
  lastName="Rodriguez Fuentes"
  email="davidrf.developer@gmail.com"
 />
*/
const EnhancedUserInfo = addFullNameProp(UserInfo);
