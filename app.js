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

let element = document.getElementsByClassName("block");

let timer = null;

let counter = 0;

let limit = element.length;

let fill = true;

const addColor = (box) => box.classList.add("on");

const removeColor = (box) => box.classList.remove("on");

const move = () => {
  timer = setTimeout(() => {
    fill = limit === 0 ? !fill : fill;

    limit = limit === 0 ? element.length : limit;

    if (counter > 0) {
      if (fill) {
        removeColor(element[counter - 1]);
      } else if (!fill) {
        addColor(element[counter - 1]);
      }
    }

    if (fill) {
      addColor(element[counter]);
    } else if (!fill) {
      removeColor(element[counter]);
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

const stop = () => clearInterval(timer);

const reset = () => {
  [...element].forEach(removeColor);
  counter = 0;
  limit = element.length;
  fill = true;
};