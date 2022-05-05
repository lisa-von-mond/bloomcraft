export const textHowTo = [
  {
    headline: 'Welcome to lush:3000',
    text: 'As a space activist of the future, living in an aera, when earth has became uninhabitable because of climate crisis, you preserve intergalactic species and transport seed ressources from planets to others. Every level is based on a different galaxy. Your task is collecting a seed charge from a planet and transport it to a destination planet.',
    buttontext: 'got it',
  },
  {
    headline: 'Key Elements',
    text: "Navigate your spaceship to the planet with the charge (it will be picked up automatically) and then to your destination - that's it (=",
    illu: 'illu-1',
    buttontext: 'got it',
  },
  {
    headline: 'Game field structure',
    text: 'Every galaxy contains of a base planet and subsystems of lower order planets. You recognize them by id. from planet with id 1.2 you can move to id 1.2.1, 1.2.2 (...) or to id 1, but not to 0 or 1.3.',
    illu: 'illu-2',
    buttontext: 'got it',
  },
  {
    headline: 'navigation',
    text: 'Navigation works by three different commands: OUT means navigating one subsystem away from base (more complex id, e.g. from 1 to 1.1). IN means navigating one subsystem towards base (less complex id, e.g. from 2.3 to 2). Since there is often more than one possibility to navigate out, you need the target pointer (blinking planet), which has to be in the right position before beaming out. You switch it by command TURN.',
    buttontext: 'got it',
  },
  {
    headline: 'target pointer',
    text: 'The target pointer looks like this and will, after beaming OUT, always be by default on the first planet of a subgroup (like 3.1 or 4.2.1).',
    illu: 'illu-5',
    buttontext: 'got it',
  },
  {
    headline: 'Command principle',
    text: 'Put commands in the command line and then fire them by GO. For every level, you have only a certain amount of energy units. Therefore it can make sense, to bundle them. You can use the factor 2 or factor 3 to do so. 2leftright will be resolved as left right left right. 3out will be resolved as out out out. ',
    buttontext: 'try it yourself',
  },
  {
    headline: 'Command line',
    text: '',
    illu: 'illu-4',
    buttontext: 'got it',
  },
  {
    headline: 'Energy unit logic',
    text: 'A single command needs one energy unit. Bundled commands need as many energy units as commands behind the factor. 3out needs one energy unit, 2leftout needs two energy units. Every GO needs one unit as well, so it is more efficient - but also more risky - to fire many command in a row.',
    buttontext: 'got it',
  },
  {
    headline: 'View',
    text: 'Use the arrows to change your viewzone easily',
    illu: 'illu-6',
    buttontext: 'got it',
  },
  {
    headline: 'Survival',
    text: 'You start the game with 3 lives. Every level fail or system crash will make you lose one life. If you have energy left at the end of a level, every unit will be transformed into one additional life.',
    buttontext: 'got it',
  },
];
