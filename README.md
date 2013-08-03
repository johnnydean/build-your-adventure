# Lesson 2: Make a character

## Goals

- Make your character move up and down
- Change the speed of your character's movement
- Make the character change direction (sprites) with the direction you're moving
- Add collision detection with the map

## Getting set up

- Download [this lesson]() onto your computer

- Create a folder for your project and put the lesson files there

- Open up `index.html`

## character.js

`character.js` is where we're going to be working today. There's a basic character already set up to move left and right around the map.

## Move up and down

The first thing we're going to be doing is getting our character to move up and down. The `movement` function controls this right now, so we're going to add to it.

``` javascript
function movement(){

  x = this.x
  y = this.y

  if (game.input.left) {
    x -= 1
  }
  if (game.input.right) {
    x += 1
  }
  if (game.input.up) {
    y -= 1
  }
  if (game.input.down) {
    y += 1
  }

  this.x = x
  this.y = y

}
```

## Change the speed

To change the speed, all we need to do is add different numbers each time you press right. To make your character move faster in the *up* direction, change this line to a 2:

``` javascript
if (game.input.up) {
  y -= 2
}
```

### With variables

If we want to control the speed everywhere in the game, we can use a variable and multiply each movement by it. Right above the movement function, let's declare a variable called **`speed`** and use it in the function

``` javascript
speed = 2

function movement(){

  x = this.x
  y = this.y

  if (game.input.left) {
    x -= 1 * speed
  }
  if (game.input.right) {
    x += 1 * speed
  }
  if (game.input.up) {
    y -= 1 * speed
  }
  if (game.input.down) {
    y += 1 * speed
  }

  this.x = x
  this.y = y

}
```

## Make your character point in the right direction

This is the line that decides which one of the sprites to use for your character:

``` javascript
character.frame = 0
```

What we're going to do is change this each time the character moves. So we're going to change the `movement` function again:

``` javascript
function movement(){

  x = this.x
  y = this.y

  if (game.input.left) {
    x -= 1 * speed
    character.frame = 3
  }
  if (game.input.right) {
    x += 1 * speed
    character.frame = 6
  }
  if (game.input.up) {
    y -= 1 * speed
    character.frame = 9
  }
  if (game.input.down) {
    y += 1 * speed
    character.frame = 0
  }

  this.x = x
  this.y = y

}
```

## Collision detection

The first rule in programming is to steal as much as you can. So let's copy and paste this into `map.js`

``` javascript
map.collisionData =
  [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ]
```

This map identifies which parts of your map are solid, and which parts the character can walk through. A `0` is free space while a `1` is a wall.

``` javascript
// Did our character run into something?

var top = this.y
var bottom = this.y + 32
var left = this.x
var right = this.x + 32


if (map.hitTest(left, top)){
  this.x += 2
  this.y += 2
  return
}
if (map.hitTest(right, top)){
  this.x -= 2
  this.y += 2
  return
}
if (map.hitTest(left, bottom)){
  this.x += 2
  this.y -= 2
  return
}
if (map.hitTest(right, bottom)){
  this.x -= 2
  this.y -= 2
  return
}
```

We had to test four different points because your character isn't just one pixel big.

![](http://cl.ly/image/0S301o0G220i/content)

We ended up checking four different points:

![](http://cl.ly/image/3B3l100n3x2W/content)

## Your assignment

Make the wall in the map an obstacle.

## Free time

In your game template, make any obstacles solid that you'd like.
