function setupBoard () {
    for (let index = 0; index <= 7; index++) {
        newPawn = sprites.create(img`
            9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 
            `, SpriteKind.Player)
        tiles.placeOnTile(newPawn, tiles.getTileLocation(index + 6, 4))
        sprites.setDataString(newPawn, "kind", "pawn")
        sprites.setDataString(newPawn, "color", "black")
    }
}
let newPawn: Sprite = null
tiles.loadMap(tiles.createSmallMap(tilemap`level2`))
setupBoard()
