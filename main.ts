namespace SpriteKind {
    export const Cursor = SpriteKind.create()
    export const highlight = SpriteKind.create()
}
function createPiece (kind: string, black: boolean, image2: Image) {
    tempSprite = sprites.create(image2, SpriteKind.Player)
    sprites.setDataString(tempSprite, "kind", kind)
    sprites.setDataBoolean(tempSprite, "black", black)
    return tempSprite
}
function setupBoard () {
    for (let index = 0; index <= 7; index++) {
        tiles.placeOnTile(createPiece("pawn", true, img`
            . . . . . . . . 
            . . . . . . . . 
            . . . 9 8 . . . 
            . . 9 8 8 8 . . 
            . . . 9 8 . . . 
            . . . 9 8 . . . 
            . . 9 8 8 8 . . 
            . 9 8 8 8 8 8 . 
            `), tiles.getTileLocation(index + 6, 4))
    }
    tiles.placeOnTile(createPiece("rook", true, img`
        8 . . 8 8 . . 8 
        9 8 8 9 8 8 8 8 
        9 9 8 8 9 8 8 8 
        . . 8 8 8 8 . . 
        . . 8 9 8 8 . . 
        . . 8 8 9 8 . . 
        . . 8 9 8 8 . . 
        . 8 8 8 9 8 8 . 
        `), tiles.getTileLocation(6, 3))
    tiles.placeOnTile(createPiece("rook", true, img`
        8 . . 8 8 . . 8 
        9 8 8 9 8 8 8 8 
        9 9 8 8 9 8 8 8 
        . . 8 8 8 8 . . 
        . . 8 9 8 8 . . 
        . . 8 8 9 8 . . 
        . . 8 9 8 8 . . 
        . 8 8 8 9 8 8 . 
        `), tiles.getTileLocation(13, 3))
    tiles.placeOnTile(createPiece("knight", true, img`
        . . . 8 8 9 9 . 
        . . 8 9 8 8 8 . 
        . 8 8 8 8 8 8 . 
        . . . 8 8 8 8 8 
        . . . . 8 8 8 8 
        . . . 8 8 8 8 8 
        . . 8 8 8 8 8 . 
        . 8 8 8 8 8 8 . 
        `), tiles.getTileLocation(7, 3))
    tiles.placeOnTile(createPiece("knight", true, img`
        . . . 8 8 9 9 . 
        . . 8 9 8 8 8 . 
        . 8 8 8 8 8 8 . 
        . . . 8 8 8 8 8 
        . . . . 8 8 8 8 
        . . . 8 8 8 8 8 
        . . 8 8 8 8 8 . 
        . 8 8 8 8 8 8 . 
        `), tiles.getTileLocation(12, 3))
    tiles.placeOnTile(createPiece("bishop", true, img`
        . . . . . . . . 
        . . . 8 . . . . 
        . . 8 8 8 . . . 
        . . 9 8 9 . . . 
        . 8 8 8 8 8 . . 
        . . 9 8 9 . . . 
        . 8 8 9 8 8 . . 
        8 8 8 8 8 8 8 . 
        `), tiles.getTileLocation(8, 3))
    tiles.placeOnTile(createPiece("bishop", true, img`
        . . . . . . . . 
        . . . 8 . . . . 
        . . 8 8 8 . . . 
        . . 9 8 9 . . . 
        . 8 8 8 8 8 . . 
        . . 9 8 9 . . . 
        . 8 8 9 8 8 . . 
        8 8 8 8 8 8 8 . 
        `), tiles.getTileLocation(11, 3))
    tiles.placeOnTile(createPiece("queen", true, img`
        . . 8 9 9 8 . . 
        . . . 8 8 . . . 
        . . . 9 8 . . . 
        . . . 8 8 . . . 
        . . . 8 9 . . . 
        . . 9 8 8 8 . . 
        . 8 8 8 8 9 8 . 
        8 8 8 8 8 8 8 8 
        `), tiles.getTileLocation(9, 3))
    tiles.placeOnTile(createPiece("king", true, img`
        . . . 9 8 . . . 
        . 9 9 9 8 8 8 . 
        . 8 8 8 8 8 8 . 
        . . . 8 8 . . . 
        . . 9 8 8 8 . . 
        . . . 8 8 . . . 
        . . 9 9 8 8 . . 
        . 9 9 8 8 8 8 . 
        `), tiles.getTileLocation(10, 3))
    for (let index = 0; index <= 7; index++) {
        tiles.placeOnTile(createPiece("pawn", true, img`
            . . . 3 3 . . . 
            . . . 3 3 . . . 
            . . . a a . . . 
            . . 3 3 3 3 . . 
            . . 3 3 3 3 . . 
            . a 3 3 3 3 3 . 
            . a 3 3 3 3 3 . 
            . a a a a a a . 
            `), tiles.getTileLocation(index + 6, 9))
    }
    tiles.placeOnTile(createPiece("rook", true, img`
        . 3 . 3 3 . 3 . 
        . 3 3 3 3 3 3 . 
        . . a a a a . . 
        . . . 3 3 . . . 
        . . . 3 3 . . . 
        . . . 3 3 . . . 
        . . 3 3 3 3 . . 
        . a a a a a a . 
        `), tiles.getTileLocation(6, 10))
    tiles.placeOnTile(createPiece("rook", true, img`
        . 3 . 3 3 . 3 . 
        . 3 3 3 3 3 3 . 
        . . a a a a . . 
        . . . 3 3 . . . 
        . . . 3 3 . . . 
        . . . 3 3 . . . 
        . . 3 3 3 3 . . 
        . a a a a a a . 
        `), tiles.getTileLocation(13, 10))
    tiles.placeOnTile(createPiece("knight", true, img`
        . . . a 3 a . . 
        . . a 3 3 1 3 . 
        . . a 3 3 3 3 3 
        . . a 3 3 . 3 3 
        . . . 3 3 . . . 
        . . . 3 3 . . . 
        . . 3 3 3 3 . . 
        . a a a a a a . 
        `), tiles.getTileLocation(7, 10))
    tiles.placeOnTile(createPiece("knight", true, img`
        . . . a 3 a . . 
        . . a 3 3 1 3 . 
        . . a 3 3 3 3 3 
        . . a 3 3 . 3 3 
        . . . 3 3 . . . 
        . . . 3 3 . . . 
        . . 3 3 3 3 . . 
        . a a a a a a . 
        `), tiles.getTileLocation(12, 10))
    tiles.placeOnTile(createPiece("bishop", true, img`
        . . . 3 3 . . . 
        . . a a a a . . 
        . . . 3 3 . . . 
        . . . 3 3 . . . 
        . . . 3 3 . . . 
        . . 3 3 3 3 . . 
        . a 3 3 3 3 3 . 
        . a a a a a a . 
        `), tiles.getTileLocation(8, 10))
    tiles.placeOnTile(createPiece("bishop", true, img`
        . . . 3 3 . . . 
        . . a a a a . . 
        . . . 3 3 . . . 
        . . . 3 3 . . . 
        . . . 3 3 . . . 
        . . 3 3 3 3 . . 
        . a 3 3 3 3 3 . 
        . a a a a a a . 
        `), tiles.getTileLocation(11, 10))
    tiles.placeOnTile(createPiece("queen", true, img`
        . . . 3 3 . . . 
        . . 3 3 3 3 . . 
        . . . a a . . . 
        . . 3 3 3 3 . . 
        . . . 3 3 . . . 
        . . . 3 3 . . . 
        . . 3 3 3 3 . . 
        . a a a a a a . 
        `), tiles.getTileLocation(9, 10))
    tiles.placeOnTile(createPiece("king", true, img`
        . . . 3 . . . . 
        . . 3 3 3 . . . 
        . . . 3 . . . . 
        . . 3 3 3 . . . 
        . . a a a . . . 
        . . 3 3 3 . . . 
        . . 3 3 3 . . . 
        . a a a a a . . 
        `), tiles.getTileLocation(10, 10))
}
function can_i_move_here (asker: Sprite, col: number, row: number) {
    if (col < 6 || col > 13) {
        return false
    } else if (row < 3 || row > 10) {
        return false
    }
    for (let value of sprites.allOfKind(SpriteKind.Player)) {
        if (value.tilemapLocation().column == col && value.tilemapLocation().row == row) {
            if (sprites.readDataBoolean(value, "black") == sprites.readDataBoolean(asker, "black")) {
                return false
            }
            break;
        }
    }
    return true
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        highlight_move_spots(sprite)
    }
})
function highlight_move_spots (piece: Sprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.highlight)
    if (sprites.readDataString(piece, "kind") == "pawn") {
    	
    } else if (sprites.readDataString(piece, "kind") == "knight") {
        possiblyHightlight(piece, piece.tilemapLocation().column + 1, piece.tilemapLocation().row + 2)
        possiblyHightlight(piece, piece.tilemapLocation().column - 1, piece.tilemapLocation().row + 2)
        possiblyHightlight(piece, piece.tilemapLocation().column - 1, piece.tilemapLocation().row - 2)
        possiblyHightlight(piece, piece.tilemapLocation().column + 1, piece.tilemapLocation().row - 2)
        possiblyHightlight(piece, piece.tilemapLocation().column + 2, piece.tilemapLocation().row - 1)
        possiblyHightlight(piece, piece.tilemapLocation().column + 2, piece.tilemapLocation().row + 1)
        possiblyHightlight(piece, piece.tilemapLocation().column - 2, piece.tilemapLocation().row + 1)
        possiblyHightlight(piece, piece.tilemapLocation().column - 2, piece.tilemapLocation().row - 1)
    } else if (sprites.readDataString(piece, "kind") == "rook") {
    	
    } else if (sprites.readDataString(piece, "kind") == "bishop") {
    	
    } else if (sprites.readDataString(piece, "kind") == "king") {
    	
    } else if (sprites.readDataString(piece, "kind") == "bishop") {
    	
    }
}
function possiblyHightlight (sprite: Sprite, col: number, row: number) {
    if (can_i_move_here(sprite, col, row)) {
    	
    }
    tempSprite = sprites.create(img`
        5 5 5 5 5 5 5 5 
        5 . . . . . . 5 
        5 . . . . . . 5 
        5 . . . . . . 5 
        5 . . . . . . 5 
        5 . . . . . . 5 
        5 . . . . . . 5 
        5 5 5 5 5 5 5 5 
        `, SpriteKind.highlight)
    tiles.placeOnTile(tempSprite, tiles.getTileLocation(col, row))
}
let tempSprite: Sprite = null
tiles.loadMap(tiles.createSmallMap(tilemap`level2`))
setupBoard()
let theCursor = sprites.create(img`
    . . f f . . . . . . 
    . f 1 b f f f f . . 
    . f 1 1 f 1 f 1 f . 
    . f b 1 1 b 1 b f . 
    . . f b 1 1 1 1 1 f 
    . f f f 1 1 1 1 1 f 
    f 1 b f 1 1 1 1 1 f 
    f 1 1 b 1 1 1 1 1 f 
    . f 1 1 1 1 1 1 f . 
    . . f f f f f f . . 
    `, SpriteKind.Cursor)
theCursor.setFlag(SpriteFlag.Ghost, true)
controller.moveSprite(theCursor, 50, 50)
let cursorTarget = sprites.create(img`
    3 
    `, SpriteKind.Cursor)
cursorTarget.setFlag(SpriteFlag.Invisible, true)
game.onUpdate(function () {
    cursorTarget.top = theCursor.top
    cursorTarget.top = theCursor.x - 2
})
