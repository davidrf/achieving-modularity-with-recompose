import { compose, lifecycle } from 'recompose';

const addCountProps = withStateHandlers(
  { count: 0 },
  {
    addOne: (state, props) => () => ({ count: state.count + 1 }),
  }
);

const addOneAfterTwoSeconds = lifecycle({
  componentDidMount() {
    setTimeout(this.props.addOne, 2000);
  }
});

const enhance = compose(
  addCountProps,
  addOneAfterTwoSeconds,
);

const Count = ({ count }) => <span>current count: {count}</span>;

const EnhancedCount = enhance(Count);
