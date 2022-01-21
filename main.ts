namespace SpriteKind {
    export const Head = SpriteKind.create()
    export const Middle = SpriteKind.create()
    export const Bottom = SpriteKind.create()
}
scene.setBackgroundColor(1)
let top = sprites.create(img`
    . . . . f f f f f f f . . . . . 
    . . f f . . . . . . . f f . . . 
    . f . . . . . . . . . . . f . . 
    . f . . . . . . . . . . . f . . 
    f . . . . . . . . . . . . . f . 
    f . . . . . . . . . . . . . f . 
    f . . . . . . . . . . . . . f . 
    f . . . . . . . . . . . . . f . 
    f . . . . . . . . . . . . . f . 
    f . . . . . . . . . . . . . f . 
    f . . . . . . . . . . . . . f . 
    . f . . . . . . . . . . . f . . 
    . f . . . . . . . . . . . f . . 
    . . f f . . . . . . . f f . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f f f f f f . . . . . 
    `, SpriteKind.Head)
top.setPosition(35, 25)
let middle = sprites.create(img`
    . . . . 8 f f f f f f 8 . . . . 
    . . . 8 8 8 8 8 8 8 8 8 8 . . . 
    . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
    . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 f 8 8 8 8 8 8 8 8 f 8 8 8 
    8 8 8 f 8 8 8 8 8 8 8 8 f 8 8 8 
    8 8 8 f 8 8 8 8 8 8 8 8 f 8 8 8 
    8 8 8 f 8 8 8 8 8 8 8 8 f 8 8 8 
    8 8 8 f 8 8 8 8 8 8 8 8 f 8 8 8 
    8 8 8 f 8 8 8 8 8 8 8 8 f 8 8 8 
    8 8 8 f 8 8 8 8 8 8 8 8 f 8 8 8 
    8 8 8 f 8 8 8 8 8 8 8 8 f 8 8 8 
    8 8 8 f 8 8 8 8 8 8 8 8 f 8 8 8 
    `, SpriteKind.Middle)
middle.setPosition(top.x, top.y + top.height)
let bottom = sprites.create(img`
    . . f f f f f f f f f f f f . . 
    . . f f f f f f f f f f f f . . 
    . . f f f f f f f f f f f f . . 
    . . f f f f f f f f f f f f . . 
    . . f f f f f f f f f f f f . . 
    . . f f f f f . . f f f f f . . 
    . . f f f f f . . f f f f f . . 
    . . f f f f . . . f f f f f . . 
    . . f f f f . . . f f f f f . . 
    . . f f f f . . . f f f f f . . 
    . . f f f f . . . f f f f f . . 
    . f f f f f . . . f f f f f f . 
    . f f f f f f . . f f f f f f . 
    f f f f f f f . f f f f f f f f 
    f f f f f f f . f f f f f f f f 
    f f f f f f f . f f f f f f f f 
    `, SpriteKind.Bottom)
bottom.setPosition(top.x, middle.y + middle.height)
controller.moveSprite(middle, 100, 100)
