const names = ['zero', 'one', 'two', 'three'];

function outerFn() {
  console.log('outer function');

  function innerFn(num) {
    console.log('inner function');
    return names[num];
  }

  return innerFn;
}

const innerFn_ = outerFn(); 

let name_ = innerFn_(0);
console.log(name_);

names[0] = 'zeroo';

name_ = innerFn_(0);
console.log(name_);

