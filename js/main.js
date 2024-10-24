const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    let animationId;
    let rotation = 0;

    function drawScene() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Background
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Center the design
      ctx.save();
      ctx.translate(canvas.width/2, canvas.height/2);
      ctx.rotate(rotation);

      // Draw circular shape
      ctx.beginPath();
      ctx.arc(0, 0, 80, 0, Math.PI * 2);
      ctx.fillStyle = '#000000';
      ctx.fill();

      // Draw rectangles
      ctx.fillStyle = '#ffffff';
      for (let i = 0; i < 6; i++) {
        ctx.save();
        ctx.rotate(i * Math.PI / 3);
        ctx.fillRect(-60, -10, 120, 20);
        ctx.restore();
      }

      ctx.restore();

      // Add text below
      ctx.fillStyle = '#000000';
      ctx.font = 'bold 24px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('THINK', canvas.width/2, canvas.height - 50);
    }

    function startAnimation() {
      cancelAnimationFrame(animationId);
      function loop() {
        rotation += 0.02;
        drawScene();
        animationId = requestAnimationFrame(loop);
      }
      loop();
    }

    function reset() {
      cancelAnimationFrame(animationId);
      rotation = 0;
      drawScene();
    }

    // Initial draw
    drawScene();