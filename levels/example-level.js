export default {
  // for each planet you need an object with at least the required properties.
  // sub-planets / sub-scopes need to be nested in array as children prop
  // The maximim amount of nest levels is 3 (excl. base planet)
  // There is no limit for the amount of children in a children array, but more than 4 may create chaos =)
  // it may make sense to draw your galaxy in advance, to see which angle / distance composition will make sense and look nice.

  level: [
    {
      name: 'ulli',
      // String, required!
      // There is no length limit but this may look better if names are not longer than 10 characters.
      id: '0',
      // String(!), needs to correspond to scope system
      // "0" for base planet
      // "1", "2" (...) for 1st level
      // "1.2.", "1.3" (...) for 2nd level
      // "1.1.2", "1.1.3" (...) for 3rd level
      tracked: true,
      // Boolean, only required when true
      // true when a planet is start planet (active:true) or a child of start planet.
      children: [
        // Array, required!
        // if a planet has no children, empty array
        {
          name: 'erna',
          id: '1',
          active: true,
          // Boolean, only required when true
          // true when planet is start planet
          tracked: true,
          children: [
            {
              name: 'heinz',
              id: '1.1',
              children: [],
              parent: 'erna',
              focus: true,
              // Boolean, only required when true
              // if start planet (active:true) has children, one of them needs to be chosen
              limit: true,
              // Boolean, only required when true
              // true when children array is empty
              angl: 120,
              dist: 110,
              ring: 1,
            },
            {
              name: 'uwe',
              id: '1.2',
              children: [],
              parent: 'erna',
              limit: true,
              angl: 120,
              dist: 110,
              ring: 0,
            },
          ],

          parent: 'alderaan',
          // String, required, except for base planet (id "0")
          // name of direct parent
          angl: 50,
          // Number, required
          // 0 and 360. angle of planet in scope in relation to parent planet
          // Note: if there are more then 2 children, ths angle prop has to be ascending within the children array
          // ascending order can cross the 360 deg. e.g. 300 - 120 - 200 works while 200 - 120 - 300 doesn't work
          dist: 200,
          // Number, required
          // between 20 and 250. Distance (in px) between planet and parent planet
          ring: 0,
          // Number, required
          // 0: no planet ring; 1: green planet ring, 2: pink planet ring. No functionality, only decoration
        },
        {
          name: 'toni',
          id: '2',
          children: [
            {
              name: 'horst',
              id: '2.1',
              children: [],
              parent: 'toni',
              limit: true,
              angl: 120,
              dist: 110,
              ring: 0,
            },
          ],
          parent: 'ulli',
          angl: 170,
          dist: 130,
        },
      ],
    },
  ],

  max: 8,
  // number of max dashes in this level
  initialId: '1',
  // String, id of start planet
  initialPosition: 'erna',
  // String, name of start planet (active:true)
  initialFocus: 'heinz',
  // String or false
  // name of planet, which is focused at start of the game (focus:true) Can be any child of start planet
  // if children array of start planet is empty, initialFocus is false
  initialParent: 'alderaan',
  // String or false
  // name of planet, which is parent of start planet.
  // if start planet has id 0, initialParent is false
  charge: 'endor',
  // String, name of planet with the charge
  goal: 'naboo',
  // String, name of destination planet
  atronautName: 'luke',
  // String, optional
  // Name of contributor. Will be displayed in level view.
  galaxyName: 'skywalker galaxy',
  // String, optional
  // Name of galaxy, can be empty. Will be displayed in level view.
  thisLevel: 1,
  // String, will be filled by admin
  nextLevel: 'leveltwo',
  // String, will be filled by admin
};
