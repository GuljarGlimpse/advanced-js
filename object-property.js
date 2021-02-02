
const student = [
    {id: 21, name: 'omor sany',},
    {id: 41, name: 'elias kanchon',},
    {id: 56, name: 'manna',},
    {id: 16, name: 'dipjol',},
];
const names = student.map(s => s.name);
const ids = student.map(s => s.id);
const bigger = student.filter( s => s.id> 40);
const bigger1 = student.find( s => s.id> 40);
console.log(bigger1);