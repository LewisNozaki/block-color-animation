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

let timer = null;

let counter = 0;

let limit = document.getElementsByClassName("block").length;

let fill = true;