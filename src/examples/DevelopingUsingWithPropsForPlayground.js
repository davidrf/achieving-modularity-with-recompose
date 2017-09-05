const UserInfo = ({ firstName, lastName, email }) => (
  <div>
    <h2>Full Name: {`${firstName} ${lastName}`}</h2>
    <h2>Email: {email}</h2>
  </div>
);

const withDevelopmentProps = withProps({
  firstName: 'David',
  lastName: 'Rodriguez',
  email: 'davidrf.developer@gmail.com',
});

const EnhancedUserInfo = withDevelopmentProps(UserInfo);

render(<EnhancedUserInfo />, mountNode);
