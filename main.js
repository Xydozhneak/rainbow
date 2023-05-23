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

colorClasses = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
for ( i = 0; i < rainbow.length; i++ ) {
 element = rainbow[i];
 colorClass = colorClasses[i] || 'red';
 document.write('<div class="circle ' + colorClass + '"></div>');
 document.write('<div class="text">' + element + '</div>');
}