const ToJSON = props => {
  return <pre>{JSON.stringify(props, null, 2)}</pre>;
};

const addOneToCountAndInjectDate = BaseComponent => {
  return props => {
    const count = props.count + 1;
    const date = new Date();

    return <BaseComponent {...props} count={count} date={date} />
  };
};

const EnhancedToJSON = addOneToCountAndInjectDate(ToJSON);

const App = () => (
  <div style={{ fontSize: '1.5rem', textAlign: 'left' }}>
    <h2>ToJSON component</h2>
    <ToJSON count={0} />
    <h2>EnhancedToJSON component</h2>
    <EnhancedToJSON count={0} />
  </div>
);

render(<App />, mountNode);
