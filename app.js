'use strict'

let grid = document.getElementsByClassName("grid-container")[0];

///////////////////////
// Create Grid Logic //
///////////////////////

let nBlocks = document.getElementById("nBlocks");

let createBlocksBtn = document.getElementById("create-blocks");

const createGrid = () => {
  let numBlocks = parseInt(nBlocks.value);

  for (let i = 0; i < numBlocks; i++) {
    let newBlock = document.createElement("div");
    newBlock.classList.add("block");
    grid.appendChild(newBlock);
  }
};

createBlocksBtn.addEventListener("click", createGrid);

///////////////////////////
// Color Blocks Function //
///////////////////////////

let block = document.getElementsByClassName("block");

let counter = 0;

let limit = block.length;

let fill = true;

const addColor = (box) => box.classList.add("on");

const removeColor = (box) => box.classList.remove("on");

let timer = null;
const move = () => {
  timer = setTimeout(() => {
    // Unfill the blocks
    if (limit === 0) {
      fill = !fill;
      limit = block.length;
    };

    // Removes or Adds color after each iteration
    if (counter > 0) {
      if (fill) {
        removeColor([...block][counter - 1]);
      } else {
        addColor([...block][counter - 1]);
      }
    }

    if (fill) {
      addColor(block[counter]);
    } else if (!fill) {
      removeColor(block[counter]);
    }

    counter++;

    if (counter < limit) {
      move();
    } else if (counter === limit) {
      counter = 0;
      limit--;
      move();
    }
  }, 200);
};

const moveBtn = document.getElementById("move");

moveBtn.addEventListener("click", move)

// Stop Button
const stop = () => clearInterval(timer);

const stopBtn = document.getElementById("stop");

stopBtn.addEventListener("click", stop);

// Reset Button
const reset = () => {
  [...element].forEach(removeColor);
  counter = 0;
  limit = element.length;
  fill = true;
};