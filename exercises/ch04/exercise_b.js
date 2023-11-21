// Refactor to remove all arguments by partially applying the functions.

// const filterQs = xs => filter(x => match(/q/i, x), xs);
const filterQs = filter(match(/q/i));
