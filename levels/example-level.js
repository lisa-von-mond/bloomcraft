export default {

// for each planet you need an object with at least the required properties.
// sub-planets / sub-scopes need to be nested in children Array

  level: [
    {
      name: 'earth', // requString
      id: '0',
      // String(!), needs to correspond to scope system
      // "0" for base planet
      // "1", "2" (...) for 1st level
      // "1.2.", "1.3" (...) for 2nd level
      // "1.1.2", "1.1.3" (...) for 3nd level
      tracked: true,
      // Boolean, only required when true. 
      // Start planet (initialPosition)
      children: [
        {
          name: 'endor',
          id: '1',
          children: [],
          // required!
          // if a planet has no children, this array has to be empty
          limit: true,
          // Boolean, only required when true. Is true when children array is empty.
          parent: 'alderaan',
          // required!
          // String. name of direct parent, required
          angl: 50,
          // required!
          // Number between 0 and 360. angle of planet in scope in relation to parent planet.
          //  Note: ths angle prop has to be ascending in every children array. e.g. angle of 1.3 has to be higher than angle of 1.2
          dist: 200,
          // required!
          // Number between 20 and 200. Distance (in px) between planet and parent planet.
          ring: 0,
          // required!
          // 0: no planet ring; 1: green planet ring, 2: pink planet ring.
        },
        {
          name: 'jakku',
          id: '2',
          children: [
            {
              name: 'naboo',
              id: '2.1',
              children: [],
              parent: 'jakku',
              limit: true,
              angl: 120,
              dist: 110,
              ring: 0,
            },
          ],
          parent: 'alderaan',
          angl: 170,
          dist: 130,
        },
      ],
    },
  ],

  max: 8,
  // number of max dashes in this level
  initialId: '3',
  // String, id of start planet
  initialPosition: 'tatooine',
  // String, name of start planet
  initialFocus: false,
  // String or Boolean false
  // name of planet, which is focused at start of the game. Can be any child of start planet
  // if children array of start planet is empty, initialFocus is false
  initialParent: 'alderaan',
  // String or Boolean false
  // name of planet, which is parent of start planet. 
  // if start planet has id 0, initialParent is false
  charge: 'endor',
  // String, name of planet with the charge
  goal: 'naboo',
  // String, name of planet with the charge
  atronautName: "luke".
  // String
  // Name of contributor. Can be empty if want to stay anonymous
  galaxyName: "skywalker's galaxy",
  // String
  // Name of galaxy, can be empty
  thisLevel: 1,
  // String, will be filled by admin
  nextLevel: 'leveltwo',
  // String, will be filled by admin
};
