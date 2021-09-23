let hydra, hydraCanvas;
hydraCanvas = document.createElement("canvas");
hydraCanvas.width = innerWidth;
hydraCanvas.height = innerHeight;
hydraCanvas.id = "hydraCanvas";

hydra = new Hydra({
  canvas: hydraCanvas,
  detectAudio: false,
  enableStreamCapture: false,
  width: innerWidth,
  height: innerHeight,
});

const codeblocks = document.getElementsByClassName("codeblock");

for(const cb of codeblocks) {
  const cd = cb.querySelector("div");
  cd.style.width = "100vw";
  cd.style.height = "100vh";
  cd.style.left = "0";
  cd.style.top = "0";
  cd.style.position = "absolute";
//   cd.style.transform = "translate(0%, 0%)";

  var observer = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting === true) {
      hush();
      solid(0,0,0,0).out(o0)
      solid(0,0,0,0).out(o1)
      solid(0,0,0,0).out(o2)
      solid(0,0,0,0).out(o3)
      render(o0);
      setTimeout(()=>{
        eval(cb.querySelector("code").textContent)
      }, 60);
      cd.appendChild(hydraCanvas);
    }
  }, { threshold: [0.7] });

  observer.observe(cb);
}
      