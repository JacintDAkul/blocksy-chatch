function OpenMainMenu () {
    myMenu = miniMenu.createMenu(
    miniMenu.createMenuItem("Start"),
    miniMenu.createMenuItem("Credits"),
    miniMenu.createMenuItem("Options (WIP)")
    )
    myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 50)
    myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 100)
    myMenu.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.Border, miniMenu.createBorderBox(
    4,
    0,
    0,
    0
    ))
    myMenu.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.Margin, miniMenu.createBorderBox(
    0,
    0,
    0,
    2
    ))
    myMenu.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.BorderColor, 11)
    myMenu.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.BorderColor, 4)
    myMenu.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.Background, 12)
    myMenu.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Foreground, 11)
    myMenu.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Foreground, 4)
    myMenu.top = 10
    myMenu.left = 20
    myMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
        if (selectedIndex == 0) {
            InitGame()
            InMainMenu = 0
            myMenu.close()
        } else if (selectedIndex == 1) {
            OpenCreditsMenu()
            myMenu.close()
        }
    })
}
function OpenCreditsMenu () {
    myMenu2 = miniMenu.createMenu(
    miniMenu.createMenuItem("Head Developer: Jacint"),
    miniMenu.createMenuItem("Developer: Elias"),
    miniMenu.createMenuItem("Beta Testers: Henrik, Edvard"),
    miniMenu.createMenuItem("Exit")
    )
    myMenu2.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 140)
    myMenu2.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 100)
    myMenu2.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.Border, miniMenu.createBorderBox(
    4,
    0,
    0,
    0
    ))
    myMenu2.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.Margin, miniMenu.createBorderBox(
    0,
    0,
    0,
    2
    ))
    myMenu2.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.BorderColor, 11)
    myMenu2.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.BorderColor, 4)
    myMenu2.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.Background, 12)
    myMenu2.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Foreground, 11)
    myMenu2.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Foreground, 4)
    myMenu2.top = 10
    myMenu2.left = 10
    myMenu2.onButtonPressed(controller.A, function (selection, selectedIndex) {
        if (selectedIndex == 3) {
            OpenMainMenu()
            myMenu2.close()
        }
    })
}
function InitGame () {
    Level2True = 0
    Level3True = 0
    Level4True = 0
    Level5True = 0
    level6true = 0
    tiles.setCurrentTilemap(tilemap`level1`)
    enemy1 = sprites.create(img`
        f f f f f f f f f f f f f f f f 
        f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
        f 2 2 f f 2 2 2 2 2 2 f f 2 2 f 
        f 2 2 2 f f 2 2 2 2 f f 2 2 2 f 
        f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
        f 2 2 f f f 2 2 2 2 f f f 2 2 f 
        f 2 2 f f f 2 2 2 2 f f f 2 2 f 
        f 2 2 f f f 2 2 2 2 f f f 2 2 f 
        f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
        f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
        f 2 2 f f f f f f f f f f 2 2 f 
        f 2 f f f f f f f f f f f f 2 f 
        f 2 f f f f f f f f f f f f 2 f 
        f 2 f f f 2 2 2 2 2 2 f f f 2 f 
        f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
        f f f f f f f f f f f f f f f f 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(enemy1, sprites.castle.tileGrass2)
    helth = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . f 5 5 5 5 5 5 5 5 f . . . 
        . . f 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 f f 5 5 5 5 5 f . 
        f 5 5 5 5 5 f 5 5 f 5 5 5 5 5 f 
        f 5 5 5 5 f 5 5 5 5 f 5 5 5 5 f 
        f 5 5 5 5 f 5 5 5 5 f 5 5 5 5 f 
        f 5 5 5 5 5 f 5 5 f 5 5 5 5 5 f 
        . f 5 5 5 5 5 f f 5 5 5 5 5 f . 
        . . f 5 5 5 5 5 5 5 5 5 5 f . . 
        . . . f 5 5 5 5 5 5 5 5 f . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . . . f f f f . . . . . . 
        `, SpriteKind.Food)
    helth2 = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . f 5 5 5 5 5 5 5 5 f . . . 
        . . f 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 f f 5 5 5 5 5 f . 
        f 5 5 5 5 5 f 5 5 f 5 5 5 5 5 f 
        f 5 5 5 5 f 5 5 5 5 f 5 5 5 5 f 
        f 5 5 5 5 f 5 5 5 5 f 5 5 5 5 f 
        f 5 5 5 5 5 f 5 5 f 5 5 5 5 5 f 
        . f 5 5 5 5 5 f f 5 5 5 5 5 f . 
        . . f 5 5 5 5 5 5 5 5 5 5 f . . 
        . . . f 5 5 5 5 5 5 5 5 f . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . . . f f f f . . . . . . 
        `, SpriteKind.Food)
    helth3 = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . f 5 5 5 5 5 5 5 5 f . . . 
        . . f 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 f f 5 5 5 5 5 f . 
        f 5 5 5 5 5 f 5 5 f 5 5 5 5 5 f 
        f 5 5 5 5 f 5 5 5 5 f 5 5 5 5 f 
        f 5 5 5 5 f 5 5 5 5 f 5 5 5 5 f 
        f 5 5 5 5 5 f 5 5 f 5 5 5 5 5 f 
        . f 5 5 5 5 5 f f 5 5 5 5 5 f . 
        . . f 5 5 5 5 5 5 5 5 5 5 f . . 
        . . . f 5 5 5 5 5 5 5 5 f . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . . . f f f f . . . . . . 
        `, SpriteKind.Food)
    helth4 = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . f 5 5 5 5 5 5 5 5 f . . . 
        . . f 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 f f 5 5 5 5 5 f . 
        f 5 5 5 5 5 f 5 5 f 5 5 5 5 5 f 
        f 5 5 5 5 f 5 5 5 5 f 5 5 5 5 f 
        f 5 5 5 5 f 5 5 5 5 f 5 5 5 5 f 
        f 5 5 5 5 5 f 5 5 f 5 5 5 5 5 f 
        . f 5 5 5 5 5 f f 5 5 5 5 5 f . 
        . . f 5 5 5 5 5 5 5 5 5 5 f . . 
        . . . f 5 5 5 5 5 5 5 5 f . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . . . f f f f . . . . . . 
        `, SpriteKind.Food)
    special_helth = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . f f f . . . . f f f . . . 
        . . f a a a f . . f a a a f . . 
        . f a a a a a f f a a 1 1 a f . 
        f a a a a a a a a a a 1 1 a a f 
        f a a a a a a a a a a a a a a f 
        f a a a a a a a a a a a a a a f 
        f a a a a a a a a a a a a a a f 
        f a a a a a a a a a a a a a a f 
        . f a a a a a a a a a a a a f . 
        . . f a a a a a a a a a a f . . 
        . . . f a a a a a a a a f . . . 
        . . . . f a a a a a a f . . . . 
        . . . . . f a a a a f . . . . . 
        . . . . . . f a a f . . . . . . 
        . . . . . . . f f . . . . . . . 
        `, SpriteKind.Food)
    info.setLife(3)
    jacint = sprites.create(img`
        f f f f f f f f f f f f f f f f 
        f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
        f 8 8 f f f 8 8 8 8 f f f 8 8 f 
        f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
        f 8 8 f f f 8 8 8 8 f f f 8 8 f 
        f 8 8 f f f 8 8 8 8 f f f 8 8 f 
        f 8 8 f f f 8 f 8 8 f f f 8 8 f 
        f 8 8 8 8 8 8 f f 8 8 8 8 8 8 f 
        f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
        f 8 f f f 8 8 8 8 8 8 f f f 8 f 
        f 8 f f f f f f f f f f f f 8 f 
        f 8 f f f f f f f f f f f f 8 f 
        f 8 8 f f f f f f f f f f 8 8 f 
        f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
        f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
        f f f f f f f f f f f f f f f f 
        `, SpriteKind.Player)
    controller.moveSprite(jacint)
    tiles.placeOnRandomTile(special_helth, assets.tile`myTile8`)
    tiles.placeOnRandomTile(helth2, sprites.castle.tileGrass3)
    tiles.placeOnRandomTile(helth, sprites.castle.tileGrass3)
    tiles.placeOnRandomTile(helth3, sprites.castle.tileGrass3)
    tiles.placeOnRandomTile(helth4, sprites.castle.tileGrass3)
    scene.cameraFollowSprite(jacint)
}
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
	
})
let enemy4: Sprite = null
let enemy6: Sprite = null
let enemy9: Sprite = null
let enemy10: Sprite = null
let enemy5: Sprite = null
let enemy12: Sprite = null
let enemy11: Sprite = null
let enemy2: Sprite = null
let enemy8: Sprite = null
let enemy7: Sprite = null
let enemy3: Sprite = null
let jacint: Sprite = null
let special_helth: Sprite = null
let helth4: Sprite = null
let helth3: Sprite = null
let helth2: Sprite = null
let helth: Sprite = null
let enemy1: Sprite = null
let level6true = 0
let Level5True = 0
let Level4True = 0
let Level3True = 0
let Level2True = 0
let myMenu2: miniMenu.MenuSprite = null
let myMenu: miniMenu.MenuSprite = null
let InMainMenu = 0
let Credits = ["a", "b", "c"]
let MainMenu = ["Start", "b", "c"]
InMainMenu = 1
OpenMainMenu()
forever(function () {
    if (info.score() > 9) {
        if (Level3True == 0) {
            enemy3 = sprites.create(img`
                . . . . . . f f f f . . . . . . 
                . f . . . f 2 2 2 2 f . . . f . 
                . . f . f 2 2 2 2 2 2 f . f . . 
                . . . f 2 2 2 2 2 2 2 2 f . . . 
                . . f 2 2 2 2 2 2 2 2 2 2 f . . 
                . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
                f 2 2 2 2 2 f f f f 2 2 2 2 2 f 
                f 2 2 2 2 2 f 2 2 f 2 2 2 2 2 f 
                f 2 2 2 2 2 f 2 2 f 2 2 2 2 2 f 
                f 2 2 2 2 2 f f f f 2 2 2 2 2 f 
                . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
                . . f 2 2 2 2 2 2 2 2 2 2 f . . 
                . . . f 2 2 2 2 2 2 2 2 f . . . 
                . . f . f 2 2 2 2 2 2 f . f . . 
                . f . . . f 2 2 2 2 f . . . f . 
                . . . . . . f f f f . . . . . . 
                `, SpriteKind.Enemy)
            tiles.placeOnRandomTile(enemy3, assets.tile`myTile8`)
            enemy3.follow(jacint, 0.5)
            enemy7 = sprites.create(img`
                . . . . . . f f f f . . . . . . 
                . f . . . f 2 2 2 2 f . . . f . 
                . . f . f 2 2 2 2 2 2 f . f . . 
                . . . f 2 2 2 2 2 2 2 2 f . . . 
                . . f 2 2 2 2 2 2 2 2 2 2 f . . 
                . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
                f 2 2 2 2 2 f f f f 2 2 2 2 2 f 
                f 2 2 2 2 2 f 2 2 f 2 2 2 2 2 f 
                f 2 2 2 2 2 f 2 2 f 2 2 2 2 2 f 
                f 2 2 2 2 2 f f f f 2 2 2 2 2 f 
                . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
                . . f 2 2 2 2 2 2 2 2 2 2 f . . 
                . . . f 2 2 2 2 2 2 2 2 f . . . 
                . . f . f 2 2 2 2 2 2 f . f . . 
                . f . . . f 2 2 2 2 f . . . f . 
                . . . . . . f f f f . . . . . . 
                `, SpriteKind.Enemy)
            tiles.placeOnRandomTile(enemy7, assets.tile`myTile8`)
            enemy7.follow(jacint, 0.5)
            enemy8 = sprites.create(img`
                . . . . . . f f f f . . . . . . 
                . f . . . f 2 2 2 2 f . . . f . 
                . . f . f 2 2 2 2 2 2 f . f . . 
                . . . f 2 2 2 2 2 2 2 2 f . . . 
                . . f 2 2 2 2 2 2 2 2 2 2 f . . 
                . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
                f 2 2 2 2 2 f f f f 2 2 2 2 2 f 
                f 2 2 2 2 2 f 2 2 f 2 2 2 2 2 f 
                f 2 2 2 2 2 f 2 2 f 2 2 2 2 2 f 
                f 2 2 2 2 2 f f f f 2 2 2 2 2 f 
                . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
                . . f 2 2 2 2 2 2 2 2 2 2 f . . 
                . . . f 2 2 2 2 2 2 2 2 f . . . 
                . . f . f 2 2 2 2 2 2 f . f . . 
                . f . . . f 2 2 2 2 f . . . f . 
                . . . . . . f f f f . . . . . . 
                `, SpriteKind.Enemy)
            tiles.placeOnRandomTile(enemy8, assets.tile`myTile8`)
            enemy8.follow(jacint, 0.5)
            Level3True = 1
        }
        if (enemy8.overlapsWith(jacint)) {
            info.changeLifeBy(-3)
            tiles.placeOnRandomTile(enemy8, assets.tile`myTile8`)
        }
        if (enemy3.overlapsWith(jacint)) {
            info.changeLifeBy(-3)
            tiles.placeOnRandomTile(enemy3, assets.tile`myTile8`)
        }
        if (enemy7.overlapsWith(jacint)) {
            info.changeLifeBy(-3)
            tiles.placeOnRandomTile(enemy7, assets.tile`myTile8`)
        }
    }
    if (info.score() > 4) {
        if (Level2True == 0) {
            enemy2 = sprites.create(img`
                f f f f f f f f f f f f f f f f 
                f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
                f 2 2 2 f f 2 2 2 2 f f 2 2 2 f 
                f 2 2 f 2 2 f 2 2 f 2 2 f 2 2 f 
                f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
                f 2 2 2 f f f 2 2 f f f 2 2 2 f 
                f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
                f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
                f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
                f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
                f 2 2 2 f f f f f f f f 2 2 2 f 
                f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
                f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
                f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
                f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
                f f f f f f f f f f f f f f f f 
                `, SpriteKind.Enemy)
            tiles.placeOnRandomTile(enemy2, sprites.castle.tileGrass2)
            enemy2.follow(jacint, 50)
            enemy11 = sprites.create(img`
                f f f f f f f f f f f f f f f f 
                f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
                f 2 2 2 f f 2 2 2 2 f f 2 2 2 f 
                f 2 2 f 2 2 f 2 2 f 2 2 f 2 2 f 
                f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
                f 2 2 2 f f f 2 2 f f f 2 2 2 f 
                f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
                f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
                f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
                f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
                f 2 2 2 f f f f f f f f 2 2 2 f 
                f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
                f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
                f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
                f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
                f f f f f f f f f f f f f f f f 
                `, SpriteKind.Enemy)
            tiles.placeOnRandomTile(enemy11, sprites.castle.tileGrass2)
            enemy11.follow(jacint, 50)
            enemy12 = sprites.create(img`
                f f f f f f f f f f f f f f f f 
                f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
                f 2 2 2 f f 2 2 2 2 f f 2 2 2 f 
                f 2 2 f 2 2 f 2 2 f 2 2 f 2 2 f 
                f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
                f 2 2 2 f f f 2 2 f f f 2 2 2 f 
                f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
                f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
                f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
                f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
                f 2 2 2 f f f f f f f f 2 2 2 f 
                f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
                f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
                f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
                f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
                f f f f f f f f f f f f f f f f 
                `, SpriteKind.Enemy)
            tiles.placeOnRandomTile(enemy12, sprites.castle.tileGrass2)
            enemy12.follow(jacint, 50)
            Level2True = 1
        }
        if (enemy12.overlapsWith(jacint)) {
            info.changeLifeBy(-3)
            tiles.placeOnRandomTile(enemy12, sprites.castle.tileGrass2)
        }
        if (enemy2.overlapsWith(jacint)) {
            info.changeLifeBy(-3)
            tiles.placeOnRandomTile(enemy2, sprites.castle.tileGrass2)
        }
        if (enemy11.overlapsWith(jacint)) {
            info.changeLifeBy(-3)
            tiles.placeOnRandomTile(enemy11, sprites.castle.tileGrass2)
        }
    }
    if (info.score() > 14) {
        if (Level4True == 0) {
            enemy5 = sprites.create(img`
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 5 7 7 7 7 7 7 7 5 5 7 7 7 
                7 7 7 7 5 7 7 7 7 7 5 5 7 7 7 7 
                7 7 7 7 5 5 7 7 7 7 5 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 f 7 7 7 7 7 7 f 7 7 7 7 
                7 7 7 f 2 f 7 7 7 7 f 2 f 7 7 7 
                7 7 7 7 f 7 7 7 7 7 7 f 7 7 7 7 
                7 7 7 7 5 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 5 7 7 5 7 7 7 7 7 7 7 7 7 7 
                7 7 5 7 7 5 7 7 7 7 7 7 7 7 5 7 
                7 7 7 7 7 5 7 7 7 7 7 7 7 5 5 7 
                7 7 7 7 7 7 7 7 7 7 7 7 5 5 7 7 
                7 7 7 7 7 7 7 7 7 7 7 5 5 7 7 7 
                `, SpriteKind.Enemy)
            tiles.placeOnRandomTile(enemy5, sprites.castle.tileGrass1)
            enemy5.follow(jacint, 15)
            enemy10 = sprites.create(img`
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 5 7 7 7 7 7 7 7 5 5 7 7 7 
                7 7 7 7 5 7 7 7 7 7 5 5 7 7 7 7 
                7 7 7 7 5 5 7 7 7 7 5 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 f 7 7 7 7 7 7 f 7 7 7 7 
                7 7 7 f 2 f 7 7 7 7 f 2 f 7 7 7 
                7 7 7 7 f 7 7 7 7 7 7 f 7 7 7 7 
                7 7 7 7 5 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 5 7 7 5 7 7 7 7 7 7 7 7 7 7 
                7 7 5 7 7 5 7 7 7 7 7 7 7 7 5 7 
                7 7 7 7 7 5 7 7 7 7 7 7 7 5 5 7 
                7 7 7 7 7 7 7 7 7 7 7 7 5 5 7 7 
                7 7 7 7 7 7 7 7 7 7 7 5 5 7 7 7 
                `, SpriteKind.Enemy)
            enemy9 = sprites.create(img`
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 5 7 7 7 7 7 7 7 5 5 7 7 7 
                7 7 7 7 5 7 7 7 7 7 5 5 7 7 7 7 
                7 7 7 7 5 5 7 7 7 7 5 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 f 7 7 7 7 7 7 f 7 7 7 7 
                7 7 7 f 2 f 7 7 7 7 f 2 f 7 7 7 
                7 7 7 7 f 7 7 7 7 7 7 f 7 7 7 7 
                7 7 7 7 5 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 5 7 7 5 7 7 7 7 7 7 7 7 7 7 
                7 7 5 7 7 5 7 7 7 7 7 7 7 7 5 7 
                7 7 7 7 7 5 7 7 7 7 7 7 7 5 5 7 
                7 7 7 7 7 7 7 7 7 7 7 7 5 5 7 7 
                7 7 7 7 7 7 7 7 7 7 7 5 5 7 7 7 
                `, SpriteKind.Enemy)
            tiles.placeOnRandomTile(enemy9, sprites.castle.tileGrass1)
            enemy9.follow(jacint, 15)
            tiles.placeOnRandomTile(enemy10, sprites.castle.tileGrass1)
            enemy10.follow(jacint, 15)
            Level4True = 1
        }
        if (enemy5.overlapsWith(jacint)) {
            info.changeLifeBy(-3)
            tiles.placeOnRandomTile(enemy5, sprites.castle.tileGrass1)
        }
        if (enemy10.overlapsWith(jacint)) {
            info.changeLifeBy(-3)
            tiles.placeOnRandomTile(enemy10, sprites.castle.tileGrass1)
        }
        if (enemy9.overlapsWith(jacint)) {
            info.changeLifeBy(-3)
            tiles.placeOnRandomTile(enemy9, sprites.castle.tileGrass1)
        }
    }
})
forever(function () {
    if (info.score() > 29) {
        if (level6true == 0) {
            enemy6 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . f 2 . . . . . 
                . . . . . . . . f . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . . f 5 5 5 5 f . . . . . 
                . . . . f 5 5 5 5 5 5 f . . . . 
                . . . f 5 5 5 5 5 5 5 5 f . . . 
                . . . f 5 5 5 5 5 5 5 5 f . . . 
                . . . f 5 5 5 5 5 5 5 5 f . . . 
                . . . . f 5 5 5 5 5 5 f . . . . 
                . . . . . f 5 5 5 5 f . . . . . 
                . . . f f f f f f f f f f . . . 
                f f f f . f 6 6 6 6 f . f f f f 
                f 5 5 f . f f f f f f . f 5 5 f 
                f 5 5 f . . . . . . . . f 5 5 f 
                f f f f . . . . . . . . f f f f 
                `, SpriteKind.Enemy)
            tiles.placeOnRandomTile(enemy6, sprites.dungeon.floorDarkDiamond)
            enemy6.follow(jacint, 85)
            level6true = 1
        }
        if (enemy6.overlapsWith(jacint)) {
            info.changeLifeBy(-5)
            tiles.placeOnRandomTile(enemy6, sprites.dungeon.floorDarkDiamond)
        }
    }
    if (info.score() > 19) {
        if (Level5True == 0) {
            enemy4 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . f 5 . . . . . 
                . . . . . . . . f . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . . f 2 2 2 2 f . . . . . 
                . . . . f 2 2 2 2 2 2 f . . . . 
                . . . f 2 2 2 2 2 2 2 2 f . . . 
                . . . f 2 2 2 2 2 2 2 2 f . . . 
                . . . f 2 2 2 2 2 2 2 2 f . . . 
                . . . . f 2 2 2 2 2 2 f . . . . 
                . . . . . f 2 2 2 2 f . . . . . 
                . . . f f f f f f f f f f . . . 
                f f f f . f 6 6 6 6 f . f f f f 
                f 2 2 f . f f f f f f . f 2 2 f 
                f 2 2 f . . . . . . . . f 2 2 f 
                f f f f . . . . . . . . f f f f 
                `, SpriteKind.Enemy)
            tiles.placeOnRandomTile(enemy4, sprites.dungeon.floorDarkDiamond)
            enemy4.follow(jacint, 75)
            Level5True = 1
        }
        if (enemy4.overlapsWith(jacint)) {
            info.changeLifeBy(-3)
            tiles.placeOnRandomTile(enemy4, sprites.dungeon.floorDarkDiamond)
        }
    }
})
forever(function () {
    if (InMainMenu == 0) {
        enemy1.follow(jacint, 25)
        if (enemy1.overlapsWith(jacint)) {
            info.changeLifeBy(-1)
            tiles.placeOnRandomTile(enemy1, sprites.castle.tileGrass2)
        }
        if (jacint.overlapsWith(helth)) {
            info.changeScoreBy(1)
            tiles.placeOnRandomTile(helth, sprites.castle.tileGrass3)
        }
        if (jacint.overlapsWith(helth2)) {
            info.changeScoreBy(1)
            tiles.placeOnRandomTile(helth2, sprites.castle.tileGrass3)
        }
        if (jacint.overlapsWith(helth3)) {
            info.changeScoreBy(1)
            tiles.placeOnRandomTile(helth3, sprites.castle.tileGrass3)
        }
        if (jacint.overlapsWith(helth4)) {
            info.changeScoreBy(1)
            tiles.placeOnRandomTile(helth4, sprites.castle.tileGrass3)
        }
        if (jacint.overlapsWith(special_helth)) {
            info.changeLifeBy(1)
            tiles.placeOnRandomTile(special_helth, assets.tile`myTile8`)
        }
    }
})
