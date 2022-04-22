export const textHowTo = [
  {
    headline: 'How to play',
    text: 'As a future space activist, living in an aera, when earth has became uninhabitable because of climate crisis, your task is to preserve intergalactic species and transport seed ressources from planets to others. Every level is based on a different galaxy. Your task is collecting a seed charge from a planet and transport it to a destination planet.',
    buttontext: 'got it',
  },
  {
    headline: 'Game field structure',
    text: 'The galaxy is structured in scopes. Every galaxy contains of a base planet and subgroups of lower order planets. You recognize them by id. from planet with id 1.2 you can move to id 1.2.1, 1.2.2 (...) and also to id 1, but not to 0 or 1.3.',
    buttontext: 'got it',
  },
  {
    headline: 'navigation',
    text: 'Navigation works by three different commands: OUT means navigating one scope away from base (more complex id). IN means navigating one scope towards base (less complex id). Since there is often more than one possibility to navigate out, you need the target pointer, which has to be in the right position before beaming out. It can be turned by command TURN. The default position of the target pointer is always the first planet in a scope (like 1.2.1 or 3.1). The target pointer will always change to higher ids (like from 2.2. to 2.3) or, if highest one is reached, to first one (from 3.2.4 to 3.2.1). The command line may help you fiding out, where you will be able to navigate.',
    buttontext: 'got it',
  },
  {
    headline: 'Command line',
    text: 'You can put in the command line and then fired by the command GO. At the moment you reach the planet with the charge, it will be picked up automatically.',
    buttontext: 'See how it works',
  },
  {
    headline: 'Cockpit',
    text: 'here will be a visual demonstration of how the command line works',
    buttontext: 'got it',
  },
  {
    headline: 'Smart commands',
    text: 'For every level, you have only a certain amount of dashes. Therefore it can make sense, to bundle them. You can use the factor 2 or factor 3 to do so. 2leftright will be resolved as left right left right. 3out will be resolved as out out out.',
    buttontext: 'got it',
  },
  {
    headline: 'Dash logic',
    text: 'A single command needs one dash. Bundles need as many dashes as commands, minus the factor. 3out needs one dash, 2leftout needs two dashes. Every GO needs one dash as well, so it is always more efficient - but also more risky - to fire many command in a row. The console will help you calculating how many dashes your current commands will need.',
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
