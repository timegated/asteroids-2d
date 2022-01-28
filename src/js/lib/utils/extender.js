// Simple inheritance mechanism
export function extend(ChildClass, ParentClass) {
  var parent = new ParentClass();
  console.log(parent);
  console.log(ParentClass);
  ChildClass.prototype = parent;
  ChildClass.prototype.super = parent.constructor;
  ChildClass.prototype.constructor = ChildClass;
};