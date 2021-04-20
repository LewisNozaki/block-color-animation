'use strict'

let grid = document.getElementsByClassName("grid-container")[0];

///////////////////////
// Create Grid Logic //
///////////////////////

let nBlocks = document.getElementById("nBlocks");

let createBlocksBtn = document.getElementById("create-blocks");

let limit = 0;

const createGrid = () => {
  let numBlocks = parseInt(nBlocks.value);

  for (let i = 0; i < numBlocks; i++) {
    let newBlock = document.createElement("div");
    newBlock.classList.add("block");
    grid.appendChild(newBlock);
  }

  limit = numBlocks;
};

createBlocksBtn.addEventListener("click", createGrid);

///////////////////////////
// Color Blocks Function //
///////////////////////////

const blocks = document.getElementsByClassName("block");
let counter = 0;
let fill = true;

const addColor = (box) => box.classList.add("on");

const removeColor = (box) => box.classList.remove("on");

let timer = null;
const move = () => {
  timer = setTimeout(() => {
    // Unfill the blocks
    fill = limit === 0 ? !fill : fill;

    limit = limit === 0 ? blocks.length : limit;

    // Removes or Adds color after each iteration
    if (counter > 0) {
      if (fill) {
        removeColor(blocks[counter - 1])
      } else {
        addColor(blocks[counter - 1])
      }
    };

    if (fill) {
      addColor(blocks[counter]);
    } else {
      removeColor(blocks[counter]);
    }

    counter++;

    if (counter < limit) {
      move();
    } else if (counter === limit) {
      counter = 0;
      limit--;
      move();
    }
  }, 100);
};

const moveBtn = document.getElementById("move");

moveBtn.addEventListener("click", move)

// Stop Button
const stop = () => clearInterval(timer);

const stopBtn = document.getElementById("stop");

stopBtn.addEventListener("click", stop);

// Reset Button
const reset = () => {
  [...blocks].forEach(removeColor);
  counter = 0;
  limit = blocks.length;
  fill = true;
};

const resetBtn = document.getElementById("reset");

resetBtn.addEventListener("click", reset);