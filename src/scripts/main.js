'use strict';

const table = document.querySelector('.field');
const lines = table.getElementsByTagName('tr');
const tableBody = table.querySelector('tbody');
const counter = lines[0].getElementsByTagName('td');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');

appendColumn.addEventListener('click', () => {
  if (counter.length < 10) {
    for (const elem of lines) {
      const newCell = document.createElement('td');

      elem.appendChild(newCell);
    }
  }
});

removeColumn.addEventListener('click', () => {
  if (counter.length > 2) {
    for (const elem of lines) {
      elem.lastElementChild.remove();
    }
  }
});

appendRow.addEventListener('click', () => {
  if (lines.length < 10) {
    const newLine = document.createElement('tr');

    tableBody.appendChild(newLine);

    for (let i = 0; i < counter.length; i++) {
      const newCell = document.createElement('td');

      newLine.appendChild(newCell);
    }
  }
});

removeRow.addEventListener('click', () => {
  if (lines.length > 2) {
    tableBody.lastElementChild.remove();
  }
});
