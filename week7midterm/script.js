



// Throw Some Glitter//

window.addEventListener("load", () => {
  const canvas = document.getElementById("sparkleCanvas");
  const ctx = canvas.getContext("2d");

  //Cover the Screen //
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  // Colors //
  const rainbow = [
    "#ff3b30", 
    "#ff9500", 
    "#ffcc00", 
    "#4cd964", 
    "#34aadc", 
    "#5856d6", 
    "#ff2d55"  
  ];

  // Star sparkle object
  class Sparkle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * -canvas.height;
      this.size = Math.random() * 3 + 2;
      this.speed = Math.random() * 2 + 0.5;
      this.color = rainbow[Math.floor(Math.random() * rainbow.length)];
      this.opacity = Math.random() * 0.8 + 0.2;
      this.rotation = Math.random() * Math.PI * 2;
      this.spin = Math.random() * 0.1 - 0.05;
    }

    update() {
      this.y += this.speed;
      this.rotation += this.spin;

      if (this.y > canvas.height) {
        this.reset();
      }
    }

    drawStar() {
      const spikes = 5;
      const outer = this.size;
      const inner = this.size / 2;

      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);

      ctx.beginPath();
      ctx.moveTo(0, -outer);

      for (let i = 0; i < spikes; i++) {
        ctx.rotate(Math.PI / spikes);
        ctx.lineTo(0, -inner);
        ctx.rotate(Math.PI / spikes);
        ctx.lineTo(0, -outer);
      }

      ctx.closePath();
      ctx.fillStyle = this.color;
      ctx.globalAlpha = this.opacity;

      ctx.shadowBlur = 10;
      ctx.shadowColor = this.color;

      ctx.fill();
      ctx.restore();
    }

    draw() {
      this.drawStar();
    }
  }

  // Make it Sparkle //
  const sparkleCount = 150; 
  const sparkles = [];

  for (let i = 0; i < sparkleCount; i++) {
    sparkles.push(new Sparkle());
  }

  // Loop it //
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const s of sparkles) {
      s.update();
      s.draw();
    }

    requestAnimationFrame(animate);
  }

  animate();
});



// Submission Overlay //

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const overlay = document.getElementById("formOverlay");

  overlay.style.opacity = "1";
  overlay.style.pointerEvents = "auto";

  // Hide after 2 seconds
  setTimeout(() => {
    overlay.style.opacity = "0";
    overlay.style.pointerEvents = "none";
  }, 2000);
});