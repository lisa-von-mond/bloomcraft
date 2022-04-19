This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## ABOUT

Bloom3000is a game for children, young teenies and adults who like playing.
As a future space activist, living in an aera, when earth has became uninhabitable because of climate crisis, your task is to preserve intergalactic species and transport seed ressources from planets to others.
Completing a mission means collecting a package from a certain planet and bring it to a destination planet.

## BASIC GAME INFO

### How the game field is structured:

The game field consists of a base planet and further planet scopes, subgroups of lower order planets. A lower order planet can only be reached from the corresponding higher order planet and vice versa.

### How to navigate

Jumping to lower order planets (further from base planet) is possible with help of the command FAR. Since there are often more than one possibility to hop further, there is the focus indicator. With help of the commands LEFT and RIGHT, the focus can be changed in clockwise or anti-clockwise direction.
Hopping to higher order planets - closer to base station - works by the command CLOSE.

### How to play

Player has to pre-programme the route. The main tool for that is the command line, where commands or rows of commands can be entered and fired off. Since you have only a certain amount of commands, you will certainly have to shorten them with help of factors. Every shortened command - no matter how long - will be resolved as one shot.
2 CLOSE will be resolved as CLOSE CLOSE
3 FAR RIGHT will be resolved as FAR RIGHT FAR RIGHT FAR RIGHT 
For completing a level successfully, you will have to navigate to the planet with the seeds - passing this planet will let you automatically pick the seeds - and then navigate to your destination. 

## CONTRIBUTING

For everyone reading this: If you are interested in creating a level, feel free to contact me!

