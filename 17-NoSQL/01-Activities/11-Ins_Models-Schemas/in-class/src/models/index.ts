import Item from './Item.js';

// =========== in this file (things.js)
// export default myAwesomeThing
// export myGoodThing
// export myGreatThing

// ========== in the file I want to use those things in
// import a from './thing.js';
// import b from './thing.js';

// import myAwesomeThing from './things.js';  // myAwesomeThing is the default export
// import aCheeseburger from './things.js';  // aCheeseburger gets the value of the default export (myAwesomeThing)
// import { myGoodThing, myGreatThing } from './things.js'   // gets the exports. Must be destructured. Therefore I can't change the name

export { Item };
