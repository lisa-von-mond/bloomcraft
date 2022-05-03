export default {
  level: [
    {
      name: 'new earth',
      id: '0',
      scope: 0,
      active: false,
      tracked: true,
      children: [
        {
          name: 'jupiter',
          id: '1',
          focus: true,
          parent: 'new earth',
          children: [
            {
              name: 'valerie',
              id: '1.1',
              parent: 'jupiter',
              children: [],
              limit: true,
              angl: 10,
              dist: 140,
              ring: 0,
            },

            {
              name: 'lucy',
              id: '1.2',
              parent: 'jupiter',
              children: [
                {
                  name: 'max',
                  id: '1.2.1',
                  children: [],
                  limit: true,
                  angl: 100,
                  dist: 80,
                  ring: 0,
                },

                {
                  name: 'anna',
                  id: '1.2.2',
                  children: [],
                  limit: true,
                  angl: 190,
                  dist: 80,
                  ring: 2,
                },
              ],

              flow: 2,
              angl: 130,
              dist: 170,
              ring: 0,
            },
          ],
          angl: 50,
          dist: 230,
          ring: 0,
        },

        {
          name: 'gaia',
          id: '2',
          scope: 1,
          parent: 'new earth',
          children: [
            {
              name: 'venus',
              id: '2.1',
              scope: 2,
              parent: 'gaia',
              children: [],
              limit: true,
              greens: true,
              angl: 10,
              dist: 150,
              ring: 0,
            },

            {
              name: 'ash',
              id: '2.2',
              parent: 'gaia',
              children: [],
              limit: true,
              angl: 130,
              dist: 150,
              ring: 0,
            },

            {
              name: 'neptun',
              id: '2.3',
              parent: 'gaia',
              children: [],
              limit: true,
              angl: 250,
              dist: 140,
              ring: 2,
            },
          ],
          angl: 170,
          dist: 300,
        },

        {
          name: 'yin',
          id: '3',
          tracked: true,
          parent: 'new earth',
          children: [
            {
              name: 'goa',
              id: '3.1',
              parent: 'yin',
              children: [],
              limit: true,
              goal: false,
              angl: 70,
              dist: 150,
              ring: 0,
            },

            {
              name: 'runa',
              id: '3.2',
              parent: 'yin',
              tracked: true,
              children: [
                {
                  name: 'jose',
                  id: '3.2.1',
                  scope: 3,
                  parent: 'runa',
                  children: [],
                  limit: true,
                  angl: 90,
                  dist: 90,
                  ring: 0,
                },

                {
                  name: 'mars',
                  id: '3.2.2',
                  scope: 3,
                  parent: 'runa',
                  children: [],
                  limit: true,
                  angl: 250,
                  dist: 120,
                  ring: 0,
                },

                {
                  name: 'svea',
                  id: '3.2.3',
                  parent: 'runa',
                  children: [],
                  limit: true,
                  active: true,
                  tracked: true,
                  angl: 320,
                  dist: 80,
                  ring: 2,
                },
              ],

              flow: 2,
              angl: 190,
              dist: 100,
              ring: 0,
            },

            {
              name: 'leo',
              id: '3.3',
              limit: true,
              parent: 'yin',
              children: [],
              angl: 310,
              dist: 120,
              ring: 1,
            },
          ],
          angl: 290,
          dist: 200,
          ring: 0,
        },
      ],
    },
  ],

  max: 10,
  initialPosition: 'svea',
  initialId: '3.2.3',
  initialFocus: 'jupiter',
  initialParent: false,
  charge: 'anna',
  goal: 'venus',
  thisLevel: 3,
  nextLevel: false,
  atronautName: '',
  galaxyName: 'future:3000',
};
