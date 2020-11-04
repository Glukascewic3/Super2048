function HTMLActuator() {
  this.tileContainer    = document.querySelector(".tile-container");
  this.scoreContainer   = document.querySelector(".score-container");
  this.bestContainer    = document.querySelector(".best-container");
  this.messageContainer = document.querySelector(".game-message");

  this.score = 0;
}

HTMLActuator.prototype.actuate = function (grid, metadata) {
  var self = this;

  window.requestAnimationFrame(function () {
    self.clearContainer(self.tileContainer);

    grid.cells.forEach(function (column) {
      column.forEach(function (cell) {
        if (cell) {
          self.addTile(cell);
        }
      });
    });

    self.updateScore(metadata.score);
    self.updateBestScore(metadata.bestScore);

    if (metadata.terminated) {
      if (metadata.over) {
        self.message(false); // You lose
      } else if (metadata.won) {
        self.message(true); // You win!
      }
    }

  });
};

// Continues the game (both restart and keep playing)
HTMLActuator.prototype.continueGame = function () {
  this.clearMessage();
};

HTMLActuator.prototype.clearContainer = function (container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
};

HTMLActuator.prototype.addTile = function (tile) {
  var self = this;

  var wrapper   = document.createElement("div");
  var inner     = document.createElement("div");
  var position  = tile.previousPosition || { x: tile.x, y: tile.y };
  var positionClass = this.positionClass(position);

  // We can't use classlist because it somehow glitches when replacing classes
  var classes = ["tile", "tile-" + tile.value, positionClass];
  if (tile.value > 590295810358705651712)
    classes = ["tile", "tile-" + 590295810358705700000, positionClass];

  this.applyClasses(wrapper, classes);
  var outputtext = new Array();
  outputtext[1] = "2";
  outputtext[2] = "4";
  outputtext[3] = "8";
  outputtext[4] = "16";
  outputtext[5] = "32";
  outputtext[6] = "64";
  outputtext[7] = "128";
  outputtext[8] = "256";
  outputtext[9] = "512";
  outputtext[10] = "1K";
  outputtext[11] = "2K";
  outputtext[12] = "4K";
  outputtext[13] = "8K";
  outputtext[14] = "16K";
  outputtext[15] = "32K";
  outputtext[16] = "64K";
  outputtext[17] = "128K";
  outputtext[18] = "256K";
  outputtext[19] = "512K";
  outputtext[20] = "1M";
  outputtext[21] = "2M";
  outputtext[22] = "4M";
  outputtext[23] = "8M";
  outputtext[24] = "16M";
  outputtext[25] = "32M";
  outputtext[26] = "64M";
  outputtext[27] = "128M";
  outputtext[28] = "256M";
  outputtext[29] = "512M";
  outputtext[30] = "1G";
  outputtext[31] = "2G";
  outputtext[32] = "4G";
  outputtext[33] = "8G";
  outputtext[34] = "16G";
  outputtext[35] = "32G";
  outputtext[36] = "64G";
  outputtext[37] = "128G";
  outputtext[38] = "256G";
  outputtext[39] = "512G";
  outputtext[40] = "1T";
  outputtext[41] = "2T";
  outputtext[42] = "4T";
  outputtext[43] = "8T";
  outputtext[44] = "16T";
  outputtext[45] = "32T";
  outputtext[46] = "64T";
  outputtext[47] = "128T";
  outputtext[48] = "256T";
  outputtext[49] = "512T";
  outputtext[50] = "1P";
  outputtext[51] = "2P";
  outputtext[52] = "4P";
  outputtext[53] = "8P";
  outputtext[54] = "16P";
  outputtext[55] = "32P";
  outputtext[56] = "64P";
  outputtext[57] = "128P";
  outputtext[58] = "256P";
  outputtext[59] = "512P";
  outputtext[60] = "1E";
  outputtext[61] = "2E";
  outputtext[62] = "4E";
  outputtext[63] = "8E";
  outputtext[64] = "16E";
  outputtext[65] = "32E";
  outputtext[66] = "64E";
  outputtext[67] = "128E";
  outputtext[68] = "256E";
  outputtext[69] = "512E";
  outputtext[70] = "1Z";
  outputtext[71] = "2Z";
  outputtext[72] = "4Z";
  outputtext[73] = "8Z";
  outputtext[74] = "16Z";
  outputtext[75] = "32Z";
  outputtext[76] = "64Z";
  outputtext[77] = "128Z";
  outputtext[78] = "256Z";
  outputtext[79] = "512Z";
  outputtext[80] = "1Y";
  outputtext[81] = "2Y";
  outputtext[82] = "4Y";
  outputtext[83] = "8Y";
  outputtext[84] = "16Y";
  outputtext[85] = "32Y";
  outputtext[86] = "64Y";
  outputtext[87] = "128Y";
  outputtext[88] = "256Y";
  outputtext[89] = "512Y";
  outputtext[90] = "1O";
  outputtext[91] = "2O";
  outputtext[92] = "4O";
  outputtext[93] = "8O";
  outputtext[94] = "16O";
  outputtext[95] = "32O";
  outputtext[96] = "64O";
  outputtext[97] = "128O";
  outputtext[98] = "256O";
  outputtext[99] = "512O";
  outputtext[100] = "1N";
  outputtext[101] = "2N";
  outputtext[102] = "4N";
  outputtext[103] = "8N";
  outputtext[104] = "16N";
  outputtext[105] = "32N";
  outputtext[106] = "64N";
  outputtext[107] = "128N";
  outputtext[108] = "256N";
  outputtext[109] = "512N";
  outputtext[110] = "1D";
  outputtext[111] = "2D";
  outputtext[112] = "4D";
  outputtext[113] = "8D";
  outputtext[114] = "16D";
  outputtext[115] = "32D";
  outputtext[116] = "64D";
  outputtext[117] = "128D";
  outputtext[118] = "256D";
  outputtext[119] = "512D";
  outputtext[120] = "1UD";
  outputtext[121] = "2UD";
  outputtext[122] = "4UD";
  outputtext[123] = "8UD";
  outputtext[124] = "16UD";
  outputtext[125] = "32UD";
  outputtext[126] = "64UD";
  outputtext[127] = "128UD";
  outputtext[128] = "256UD";
  outputtext[129] = "512UD";

  inner.classList.add("tile-inner");
  inner.textContent = outputtext[tile.value];

  if (tile.value > 129) classes.push("tile-super");
  if (tile.value < 0) classes.push("tile--super");
  
  if (tile.previousPosition) {
    // Make sure that the tile gets rendered in the previous position first
    window.requestAnimationFrame(function () {
      classes[2] = self.positionClass({ x: tile.x, y: tile.y });
      self.applyClasses(wrapper, classes); // Update the position
    });
  } else if (tile.mergedFrom) {
    classes.push("tile-merged");
    this.applyClasses(wrapper, classes);

    // Render the tiles that merged
    tile.mergedFrom.forEach(function (merged) {
      self.addTile(merged);
    });
  } else {
    classes.push("tile-new");
    this.applyClasses(wrapper, classes);
  }

  // Add the inner part of the tile to the wrapper
  wrapper.appendChild(inner);

  // Put the tile on the board
  this.tileContainer.appendChild(wrapper);
};

HTMLActuator.prototype.applyClasses = function (element, classes) {
  element.setAttribute("class", classes.join(" "));
};

HTMLActuator.prototype.normalizePosition = function (position) {
  return { x: position.x + 1, y: position.y + 1 };
};

HTMLActuator.prototype.positionClass = function (position) {
  position = this.normalizePosition(position);
  return "tile-position-" + position.x + "-" + position.y;
};

HTMLActuator.prototype.updateScore = function (score) {
  this.clearContainer(this.scoreContainer);

  var difference = score - this.score;
  this.score = score;

  this.scoreContainer.textContent = this.score;

  if (difference > 0) {
    var addition = document.createElement("div");
    addition.classList.add("score-addition");
    addition.textContent = "+" + difference;

    this.scoreContainer.appendChild(addition);
  }
};

HTMLActuator.prototype.updateBestScore = function (bestScore) {
  this.bestContainer.textContent = bestScore;
};

HTMLActuator.prototype.message = function (won) {
  var type    = won ? "game-won" : "game-over";
  var message = won ? "You win!" : "Game over!";

  this.messageContainer.classList.add(type);
  this.messageContainer.getElementsByTagName("p")[0].textContent = message;
};

HTMLActuator.prototype.clearMessage = function () {
  // IE only takes one value to remove at a time.
  this.messageContainer.classList.remove("game-won");
  this.messageContainer.classList.remove("game-over");
};
