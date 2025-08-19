(function(){
  // Typewriter text loop
  const el = document.getElementById('typewriter');
  if(!el) return;
  const items = [
    "Cloud Engineer • AWS • Terraform • Docker",
    "S3 Static Sites • CI/CD • Linux",
    "Learning • Building • Sharing"
  ];
  let i = 0;
  const type = (text, cb) => {
    let n = 0;
    const tick = () => {
      el.textContent = text.slice(0, ++n);
      if (n <= text.length) setTimeout(tick, 28);
      else setTimeout(cb, 1200);
    };
    tick();
  };
  const erase = (cb) => {
    const tick = () => {
      el.textContent = el.textContent.slice(0, -1);
      if (el.textContent.length) setTimeout(tick, 14);
      else setTimeout(cb, 300);
    };
    tick();
  };
  const loop = () => {
    type(items[i % items.length], () => erase(() => { i++; loop(); }));
  };
  loop();

  // Footer year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
