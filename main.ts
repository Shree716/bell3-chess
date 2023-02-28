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
let tempSprite: Sprite = null
tiles.loadMap(tiles.createSmallMap(tilemap`level2`))
setupBoard()
