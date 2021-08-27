loadSprite('player','assets/player_3.png')

scene('game', () => {
    layers(['bg', 'obj', 'ui'], 'obj')

    const player = add([
      sprite('player'),
      pos(width()*0.5, height()*0.5),
      scale(3),
      {
        // right by default
        dir: vec2(1, 0),
      },
    ])

})
start('game')