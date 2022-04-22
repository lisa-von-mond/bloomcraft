export const textHowTo = [
  {
    headline: 'How to play',
    text: 'As a future space activist, living in an aera, when earth has became uninhabitable because of climate crisis, your task is to preserve intergalactic species and transport seed ressources from planets to others. Every level is based on a different galaxy. Your task is collecting a seed charge from a planet and transport it to a destination planet.',
    buttontext: 'got it',
  },
  {
    headline: 'Game field structure',
    text: 'Your galaxy is structured in scopes. Every galaxy contains of a base planet and subgroups of lower order planets. A lower order planet can only be reached from the corresponding higher order planet and vice versa. All planets have id s to indicate the order. from 1.2 for example you can beam out to id 1.2.1, 1.2.2 (...) and beam in to id 1.',
    buttontext: 'got it',
  },
  {
    headline: 'navigation',
    text: 'You navigate your space ship by three different commands: OUT means navigating one scope away from base. IN means navigating one scope towards base. Since there is more than one possibility to navigate out, there is a target pointer, which has to be in the right position before beaming out. It can be turned by command TURN. The default position of the target pointer is always the first planet in a scope (like 1.2.1 or 3.1).',
    buttontext: 'got it',
  },
  {
    headline: 'Command line',
    text: 'Commands have to be put in the command line and then fired by the command GO. At the moment you reach the planet with the charge, it will be picked up automatically.',
    buttontext: 'See how it works',
  },
  {
    headline: 'Cockpit',
    text: 'here will be a visual demonstration of how the command line works',
    buttontext: 'got it',
  },
  {
    headline: 'Smart commands',
    text: 'For every level, you have only a certain amount of sparks. Therefore it can make sense, to bundle them. You can use the factor 2 or factor 3 to do so. 2leftright will be resolved as left right left right. 3out will be resolved as out out out',
    buttontext: 'got it',
  },
  {
    headline: 'Spark logic',
    text: 'A single command needs one spark. Bundled commands need the amount of commands behind the factor: 3out needs one spark, 2leftout needs two sparks. Every GO needs one spark as well, so it is always more efficient - but also more risky - to fire many sparks in a row.',
    buttontext: 'See how it works',
  },
  {
    headline: 'Cockpit',
    text: 'here will be another visual demonstration of how the command line works',
    buttontext: 'got it',
  },
  {
    headline: 'Navigate carefully',
    text: 'Some commands are impossible (like beaming out or turn the target pointer while you are already as far out as possible). Every impossible command will lead to a system error and level fail.',
    buttontext: '',
  },
];
