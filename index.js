const obj = {
  a: 10,

  foo() {
    console.log(this.a);
  }
};

obj.foo();
