hero = ['Ivan'];
native = ['York', 'Of'];
destination = ['Poltava', 'In'];

rainbow = [];
rainbow = rainbow.concat(native,destination,hero);
rainbow.reverse();
rainbow.unshift('Richard');
rainbow.splice(1, 3);
rainbow.push('Gave','Battle', destination[1], 'Vain');
console.log(rainbow);

for (var i = 0; i < rainbow.length; i++) {
  element = rainbow[i];
  colorClass = '';

  switch (element) {
    case 'Richard':
      colorClass = 'red';
      break;
    case 'Of':
      colorClass = 'orange';
      break;
    case 'York':
      colorClass = 'yellow';
      break;
    case 'Gave':
      colorClass = 'green';
      break;
    case 'Battle':
      colorClass = 'blue';
      break;
    case 'In':
      colorClass = 'indigo';
      break;
    case 'Vain':
      colorClass = 'violet';
      break;
    default: 
    colorClass = 'red';
    break;
  }
  document.write(' <div class="circle ' + colorClass + '"> </div>');
  document.write('<div class="text">' + element + '</div>');
}