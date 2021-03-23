controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 5 5 f f 4 4 4 4 4 4 2 2 . 
        . . 5 5 5 f f 4 4 4 4 4 4 2 2 . 
        . . . 5 5 f f 4 4 4 4 4 4 2 2 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpacePlane, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy(effects.fire, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
let Bogey: Sprite = null
let projectile: Sprite = null
let SpacePlane: Sprite = null
scene.setBackgroundColor(15)
SpacePlane = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . 6 6 6 6 . . . . . . . . . 
    . . . 6 8 8 6 6 . . . . . . . . 
    . . . 6 6 8 8 6 6 6 . . . . . . 
    . . . . 6 6 8 8 8 6 6 . . . . . 
    . . a a a a a a a a a a a a . . 
    . 2 a a 9 9 9 9 2 2 2 2 2 a 7 . 
    5 2 a a 9 9 9 9 2 6 6 6 2 a 7 7 
    5 2 a a 9 9 9 9 2 2 2 2 2 a 7 7 
    5 2 a a 9 9 9 9 9 9 9 9 9 a 7 7 
    . 2 a a 9 9 9 9 9 9 9 9 9 a 7 . 
    . . a a a a a a a a a a a a . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(SpacePlane, 200, 200)
SpacePlane.setStayInScreen(true)
info.setLife(5)
game.onUpdateInterval(1000, function () {
    Bogey = sprites.create(img`
        . . . 8 8 . . . . . . . . . . . 
        . . . 8 f 8 . . . . . . . . . . 
        . . . 8 f f 8 . . . . . . . . . 
        . . . 8 f f f f 8 . . . . . . . 
        . . . 8 8 8 8 8 8 8 . . . . . . 
        5 f 2 2 2 2 2 2 2 2 2 2 2 2 8 . 
        5 f 2 2 6 6 6 6 6 6 6 6 2 2 8 8 
        5 f 2 2 6 9 9 9 9 9 9 9 2 2 8 8 
        5 f 2 2 6 6 6 6 6 6 6 6 2 2 8 8 
        5 f 2 2 2 2 2 2 2 2 8 8 2 2 8 8 
        5 f 2 2 2 2 2 2 2 2 2 2 2 2 8 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    Bogey.setVelocity(-100, 0)
    Bogey.setPosition(160, randint(5, 115))
    Bogey.setFlag(SpriteFlag.AutoDestroy, true)
    if (Bogey.vx < 0) {
        Bogey.image.flipX()
    }
})
