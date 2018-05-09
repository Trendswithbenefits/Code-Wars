// Code Challenge 01 - abbreviating a two-word name

function abbrevName(name){
  let initials = name.split(' ');
  return initials[0].charAt(0).toUpperCase() + '.' + initials[1].charAt(0).toUpperCase();
}