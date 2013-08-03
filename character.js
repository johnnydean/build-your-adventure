game.addEventListener("load", function(){

  // Get a character
  character = new Sprite(32, 32)
  character.image = game.assets['images/boy.gif']
  character.frame = 0
  character.x = 100
  character.y = 100
  game.rootScene.addChild(character)
  speed = 2

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

    var top = y
    var bottom = y + 32
    var left = x
    var right = x + 32

    if (map.hitTest(left, top)) {
      x += 2
      y += 2
    }
    if (map.hitTest(right, top)) {
      x -= 2
      y += 2
    }
    if (map.hitTest(left, bottom)) {
      x += 2
      y -= 2
    }
    if (map.hitTest(right, bottom)) {
      x -= 2
      y -= 2
    }

    this.x = x
    this.y = y

  }
  character.addEventListener("enterframe", movement)

})
