    // GLOBALS, GLOBALS, BODGE ALL THE GLOBALS
    var external_score;
    var tile_contents = ["", "", "", "", "", "", "", "", "", "", "", ""];

    var external_score; // yep, this is a bodge

    function tweet() {

    }

    function facebook() {

    }

    var sizes = [];

    function resizeTextOn(whichelement) {

        if (typeof sizes[whichelement] == "undefined") {

            //console.log("Performing hard maths on " + whichelement);

            $(whichelement + " .tile-inner").css("display", "block");
            $(whichelement + " .tile-text").css("display", "inline-block");

            $(whichelement + " .tile-text").css("fontSize", "60px");

            while ($(whichelement + " .tile-text").width() + 30 > $(whichelement + " .tile-inner").width()) {
                var newSize = (parseInt($(whichelement + " .tile-text").css("fontSize")) - 1) + "px";
                $(whichelement + " .tile-text").css("fontSize", newSize);
            }

            if (typeof newSize == "undefined") {
                var newSize = "60px";
            }

            $(whichelement + " .tile-text").css("lineHeight", newSize);

            if (parseInt(newSize) > 50) {
                $(whichelement + " .tile-text").css("position", "relative");
                $(whichelement + " .tile-text").css("top", "5px");
            } else {
                $(whichelement + " .tile-text").css("position", "relative");
                $(whichelement + " .tile-text").css("top", "0px");
            }

            $(whichelement + " .tile-inner").css("display", "table");
            $(whichelement + " .tile-text").css("display", "table-cell");

            sizes[whichelement] = newSize;

        } else {

            newSize = sizes[whichelement];

            $(whichelement + " .tile-text").css("fontSize", newSize);
            $(whichelement + " .tile-text").css("lineHeight", newSize);

            if (parseInt(newSize) > 50) {
                $(whichelement + " .tile-text").css("position", "relative");
                $(whichelement + " .tile-text").css("top", "5px");
            } else {
                $(whichelement + " .tile-text").css("position", "relative");
                $(whichelement + " .tile-text").css("top", "0px");
            }

            $(whichelement + " .tile-inner").css("display", "table");
            $(whichelement + " .tile-text").css("display", "table-cell");

        }
    }

    $(document).keypress(function(event) {
        if (event.which == 61) {
            $(".tile-container").empty();
            var tile = new Tile({
                x: 0,
                y: 0
            }, 2);
            HTMLActuator.prototype.addTile(tile);
            var tile = new Tile({
                x: 1,
                y: 0
            }, 4);
            HTMLActuator.prototype.addTile(tile);
            var tile = new Tile({
                x: 2,
                y: 0
            }, 8);
            HTMLActuator.prototype.addTile(tile);
            var tile = new Tile({
                x: 3,
                y: 0
            }, 16);
            HTMLActuator.prototype.addTile(tile);
            var tile = new Tile({
                x: 0,
                y: 1
            }, 32);
            HTMLActuator.prototype.addTile(tile);
            var tile = new Tile({
                x: 1,
                y: 1
            }, 64);
            HTMLActuator.prototype.addTile(tile);
            var tile = new Tile({
                x: 2,
                y: 1
            }, 128);
            HTMLActuator.prototype.addTile(tile);
            var tile = new Tile({
                x: 3,
                y: 1
            }, 256);
            HTMLActuator.prototype.addTile(tile);
            var tile = new Tile({
                x: 0,
                y: 2
            }, 512);
            HTMLActuator.prototype.addTile(tile);
            var tile = new Tile({
                x: 1,
                y: 2
            }, 1024);
            HTMLActuator.prototype.addTile(tile);
            var tile = new Tile({
                x: 2,
                y: 2
            }, 2048);
            HTMLActuator.prototype.addTile(tile);
        }
    });