import formattingDate from './module';

const container = document.querySelector('.flex-container');
const data = require('../data.json');

const { columns, rows } = data;

columns.forEach((column, index) => {
  const div = document.createElement('div');
  const header = document.createElement('h2');
  const paragraph = document.createElement('p');
  header.innerText = column.name;
  paragraph.innerText = (column.dataType === 'DateTime') ? formattingDate(rows[0].values[index]) : rows[0].values[index];
  container.append(div);
  div.append(header, paragraph);
});
