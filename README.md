This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## ABOUT

Bloomcraft is a game for children, young teenies and adults who like playing.
As a future space activist, living in an aera, when earth has became uninhabitable because of climate crisis, your task is to preserve intergalactic species and transport seed ressources from planets to others.
For every mission, you need to preprogram the route of your spaceship, to collect a package and bring it to a certain destination.

## BASIC GAME INFO (IN PROGRESS)

### How the game field is structured:

The game field consists of a base planet, first order planets, second order planets (and third order planets - optional part of this project). For each level there will be three important positions:
- Your departure planet
- the place, where the seed pack is placed
- your destination planet

Some planets contain SCOPES - subgroups of next order planets, which can be reached from there. In every scope, there is one planet with a BASE STATION. The base station indicates the default planet to be focused in a scope.

### How to navigate

Your spaceship is able to jump from a certain order planet to a next upper or next lower ordered planet via the commands UP and DOWN.
For jumping down, there is only one possibility, jumping up always means to reach the currently focused planet.
With help of the commands LEFT and RIGHT, the focus can be changed in clockwise or anti-clockwise direction.

### How to play

Playing does not mean navigating live, but writing the right commands in a command-line for pre-programming the route. For more complex missions, you can use numbers (to repeat commands) and brackets (to repeat sequences of commands). Pressing the GO-button will start your spaceship.
For completing a level successfully, you will have to navigate to the planet with the seeds - passing this planet will let you automatically pick the seeds - and then navigate to your destination. 

## CONTRIBUTING

For everyone who is reading this: If somebody is interested in creating a level, please contact me!

