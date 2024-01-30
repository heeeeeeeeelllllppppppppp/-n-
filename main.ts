namespace SpriteKind {
    export const sword_img = SpriteKind.create()
    export const evil_kind = SpriteKind.create()
    export const spider_kind = SpriteKind.create()
    export const slash = SpriteKind.create()
}
namespace StatusBarKind {
    export const evil_hp = StatusBarKind.create()
    export const spider_hp = StatusBarKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite, 100, 100)
})
function room_anilathaor_idk_how_spel () {
    sprites.destroyAllSpritesOfKind(SpriteKind.sword_img)
    sprites.destroyAllSpritesOfKind(SpriteKind.evil_kind)
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.evil_kind, function (sprite, otherSprite) {
    my_hp.value += -50
    pause(200)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    if (level == 0) {
        if (sprites.allOfKind(SpriteKind.evil_kind).length == 0 && sprites.allOfKind(SpriteKind.sword_img).length == 0) {
            level += 1
            room_anilathaor_idk_how_spel()
            roomtoucher()
        }
    } else if (level == 1) {
        if (sprites.allOfKind(SpriteKind.evil_kind).length == 0 && sprites.allOfKind(SpriteKind.spider_kind).length == 0) {
            level += 1
            room_anilathaor_idk_how_spel()
            roomtoucher()
        }
    }
})
sprites.onOverlap(SpriteKind.slash, SpriteKind.spider_kind, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(sprite)
})
function spider_fella_sp () {
    spider_list = [assets.image`myImage4`, assets.image`myImage8`, assets.image`myImage9`]
    spider_fela = sprites.create(spider_list._pickRandom(), SpriteKind.spider_kind)
    tiles.placeOnRandomTile(spider_fela, sprites.dungeon.floorLight0)
    spide_fella_hp = statusbars.create(20, 4, StatusBarKind.spider_hp)
    spide_fella_hp.max = 25
    spide_fella_hp.attachToSprite(spider_fela)
    spider_fela.follow(mySprite, randint(50, 99))
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (sprites.allOfKind(SpriteKind.sword_img).length == 0) {
        if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingUp))) {
            slash = sprites.create(assets.image`myImage2`, SpriteKind.slash)
            slash.setPosition(mySprite.x, mySprite.y + -25)
            timer.after(100, function () {
                sprites.destroy(slash)
            })
        } else if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingDown))) {
            slash = sprites.create(assets.image`myImage2`, SpriteKind.slash)
            slash.setPosition(mySprite.x, mySprite.y - -25)
            timer.after(100, function () {
                sprites.destroy(slash)
            })
        } else if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingRight))) {
            slash = sprites.create(assets.image`myImage2`, SpriteKind.slash)
            slash.setPosition(mySprite.x - -25, mySprite.y)
            timer.after(100, function () {
                sprites.destroy(slash)
            })
        } else if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingLeft))) {
            slash = sprites.create(assets.image`myImage2`, SpriteKind.slash)
            slash.setPosition(mySprite.x + -25, mySprite.y)
            timer.after(100, function () {
                sprites.destroy(slash)
            })
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite, 100, 100)
})
function roomtoucher () {
    if (level == 0) {
        tiles.setCurrentTilemap(tilemap`level`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(6, 8))
        scene.cameraFollowSprite(mySprite)
        sword_img = sprites.create(assets.image`myImage`, SpriteKind.sword_img)
        tiles.placeOnTile(sword_img, tiles.getTileLocation(12, 10))
    } else if (level == 1) {
        tiles.setCurrentTilemap(tilemap`level2`)
        tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleInsignia)
    } else if (level == 2) {
        tiles.setCurrentTilemap(tilemap`level0`)
        tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleInsignia)
    }
    sprite_cranberry()
}
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.splash("you died loser")
    game.gameOver(false)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite, 100, 100)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite, 100, 100)
})
function evil_fella_sp () {
    evil_list = [assets.image`myImage5`, assets.image`myImage0`, assets.image`myImage6`]
    evil_fella = sprites.create(evil_list._pickRandom(), SpriteKind.evil_kind)
    tiles.placeOnRandomTile(evil_fella, sprites.dungeon.floorLight0)
    evil_fella_hp = statusbars.create(20, 4, StatusBarKind.evil_hp)
    evil_fella_hp.max = 100
    evil_fella_hp.attachToSprite(evil_fella)
    evil_fella.follow(mySprite, randint(25, 50))
}
sprites.onOverlap(SpriteKind.sword_img, SpriteKind.Player, function (sprite, otherSprite) {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 5 . . 
        . . . . 3 . . 3 . . . . . 5 . . 
        . . 3 . 3 . . 3 . . . . . 5 . . 
        . . 3 . . . . 3 . . . . . 5 . . 
        . . . 3 . . . . . . . 3 f 5 . . 
        . . . . 3 3 3 . . . 3 3 f f f . 
        . . . . . . . 3 3 3 . . . f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    sprites.destroy(sprite)
})
sprites.onOverlap(SpriteKind.slash, SpriteKind.evil_kind, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(sprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.spider_kind, function (sprite, otherSprite) {
    my_hp.value += -25
    pause(200)
})
function sprite_cranberry () {
    if (level == 1) {
        for (let index = 0; index < 3; index++) {
            evil_fella_sp()
        }
    } else if (level == 2) {
        for (let index = 0; index < 4; index++) {
            evil_fella_sp()
        }
        for (let index = 0; index < 2; index++) {
            spider_fella_sp()
        }
    }
}
let evil_fella_hp: StatusBarSprite = null
let evil_list: Image[] = []
let sword_img: Sprite = null
let slash: Sprite = null
let spide_fella_hp: StatusBarSprite = null
let spider_fela: Sprite = null
let spider_list: Image[] = []
let evil_fella: Sprite = null
let my_hp: StatusBarSprite = null
let mySprite: Sprite = null
let level = 0
level = 0
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 3 . . 3 . . . . . . . . 
    . . 3 . 3 . . 3 . . . . . . . . 
    . . 3 . . . . 3 . . . . . . . . 
    . . . 3 . . . . . . . 3 . . . . 
    . . . . 3 3 3 . . . 3 3 . . . . 
    . . . . . . . 3 3 3 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
my_hp = statusbars.create(100, 4, StatusBarKind.Health)
my_hp.max = 251
my_hp.value = 251
my_hp.positionDirection(CollisionDirection.Top)
my_hp.setColor(7, 2)
roomtoucher()
evil_fella = sprites.create(assets.image`myImage5`, SpriteKind.evil_kind)
