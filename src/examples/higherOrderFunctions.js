const createAddNumber = y => x => x + y;

// Equivalent to:
// const addTwo = x => x + 2;

const addTwo = createAddNumber(2);

// Equivalent to:
// const addTwo = x => x + 3;

const addThree = createAddNumber(3);
