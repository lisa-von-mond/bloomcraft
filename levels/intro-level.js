export const introLevel = [
  {
    name: 'zero',
    id: '0',
    tracked: true,
    children: [
      {
        name: 'una',
        id: '1',
        children: [
          {
            name: 'odin',
            id: '1.1',
            children: [],
            limit: true,
            parent: 'una',
            angl: 20,
            dist: 60,
            ring: 0,
          },

          {
            name: 'dva',
            id: '1.2',
            children: [],
            focus: true,
            limit: true,
            parent: 'una',
            angl: 220,
            dist: 50,
            ring: 2,
          },
        ],
        active: true,
        tracked: true,
        parent: 'zero',
        harge: true,
        angl: 80,
        dist: 100,
        ring: 0,
      },
      {
        name: 'dos',
        id: '2',
        children: [
          {
            name: 'tres',
            id: '2.3',
            children: [],
            limit: true,
            parent: 'dos',

            angl: 20,
            dist: 70,
            ring: 0,
          },
        ],
        parent: 'zero',
        angl: 220,
        dist: 130,
        ring: 1,
      },
    ],
  },
];
