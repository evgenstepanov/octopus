function runOnKeys(func, ...keys) {
  let set = new Set();
  document.onkeydown = function(event) {
    set.add(event.code);
    for (let key of keys) {
      if (!set.has(key)) {
        return;
      }
    }
    set.clear();
    func();
  };
  document.onkeyup = event => {
    set.delete(event.code);
  };
}

runOnKeys(() => alert('Hello!'), 'KeyQ', 'KeyW');
