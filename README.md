<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>sahasra</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Bootstrap Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css">
    
    <style>
        :root {
            --primary: #6244C5;
            --secondary: #FFC448;
            --light: #FAFAFB;
            --dark: #12141D;
            --brand-purple: #6244C5;
            --brand-pink: #FF6B9D;
            --brand-dark-bg: #12141D;
            --brand-red: #FF6B6B;
            --brand-orange: #FF9F43;
            --brand-yellow: #FFD93D;
            --brand-green: #6BCF7F;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: var(--dark);
            overflow-x: hidden;
        }


        /* Header Styles */
        .modern-hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            position: relative;
            overflow: hidden;
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }

        /* Mesh Animation Canvas */
        .mesh-canvas {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            pointer-events: none;
        }



        /* Typing Animation */
        .typing-text {
            color: var(--brand-purple);
            font-weight: bold;
        }

        .typing-cursor {
            display: inline-block;
            width: 3px;
            height: 1.2em;
            background-color: var(--brand-purple);
            margin-left: 2px;
            animation: blink 1s infinite;
        }

        @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
        }

        /* Hero Content */
        .hero-content {
            position: relative;
            z-index: 3;
        }

        .hero-title {
            background: linear-gradient(90deg, var(--brand-purple) 0%, var(--brand-pink) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-size: clamp(3rem, 9vw, 5.5rem);
            font-weight: 800;
            line-height: 1.1;
            letter-spacing: -0.02em;
            margin-bottom: 1rem;
        }

        .hero-subtitle {
            color: var(--brand-dark-bg);
            font-size: clamp(1.6rem, 5vw, 2.2rem);
            line-height: 1.5;
            font-weight: 400;
            margin-bottom: 2rem;
        }

        .hero-greeting {
            color: var(--brand-dark-bg);
            font-size: clamp(2.2rem, 5vw, 2.8rem);
            font-weight: 600;
            margin-bottom: 0.5rem;
        }

        /* Buttons */
        .btn-primary-modern {
            background-color: var(--brand-purple);
            border-color: var(--brand-purple);
            color: white;
            border-radius: 25px;
            min-width: 200px;
            padding: 12px 24px;
            font-weight: 600;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            justify-content: center;
        }

        .btn-primary-modern:hover {
            background-color: #5a3bb8;
            border-color: #5a3bb8;
            color: white;
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(98, 68, 197, 0.3);
        }

        .btn-secondary-modern {
            background-color: transparent;
            border-color: var(--brand-purple);
            color: var(--brand-dark-bg);
            border-radius: 25px;
            min-width: 200px;
            padding: 12px 24px;
            font-weight: 600;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            justify-content: center;
        }

        .btn-secondary-modern:hover {
            background-color: var(--brand-purple);
            color: white;
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(98, 68, 197, 0.3);
        }

        /* Profile Image */
        .profile-image {
            max-width: 100%;
            height: auto;
            border-radius: 20px;
        }

        .hero-image-container {
            position: relative;
            z-index: 3;
            transform: translateY(14%);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .hero-buttons {
                flex-direction: column;
                align-items: center;
            }
            
            .hero-buttons .btn {
                margin-bottom: 1rem;
                width: 100%;
                max-width: 250px;
            }
        }

        /* Smooth scrolling */
        html {
            scroll-behavior: smooth;
        }

        /* Loading animation */
        .fade-in {
            animation: fadeIn 1s ease-in;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }
    </style>
</head>
<body>

    <!-- Header Section -->
    <div class="container-fluid modern-hero" id="home">
        <!-- Mesh Animation Canvas -->
        <canvas class="mesh-canvas" id="meshCanvas"></canvas>
        
        
        
        <div class="container hero-content">
            <div class="row g-3 align-items-center">
                <div class="col-lg-6 col-md-12 py-6 pb-0 pt-lg-0 ps-lg-5 text-mobile-center">
                    <h2 class="hero-greeting mb-3 fw-bold letter-spacing-1">Hello!</h2>
                    
                    <h1 class="hero-title display-3 mb-4 fw-bold">I'm Sahasra</h1>

                    <!-- Typing Animation -->
                    <h2 class="hero-subtitle mb-4 fw-normal">
                        I'm a <span class="typing-text" id="typingText"></span><span class="typing-cursor"></span>
                    </h2>

                    <!-- Buttons -->
                    <div class="hero-buttons d-flex flex-column flex-sm-row align-items-center gap-3 pt-4">
                        <a href="https://www.linkedin.com/in/sahasralive/" target="_blank" class="btn btn-primary-modern">
                            <i class="bi bi-linkedin text-white me-2"></i>
                            Contact Me
                        </a>
                        <a href="public/cv/sahasra-cv.pdf" class="btn btn-secondary-modern" download>
                            <i class="bi bi-download me-2"></i>
                            Download CV
                        </a>
                    </div>
                </div>

                <div class="col-lg-6 col-md-12 text-center">
                    <div class="hero-image-container">
                        <img class="img-fluid profile-image" src="profile.png" alt="Profile">
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    
    <script>
        // Typing Animation
        const typingText = document.getElementById('typingText');
        const roles = ['Sworn Translator', 'Creative Designer', 'Software Developer', 'Writer', 'Voice over Artist'];
        let currentRoleIndex = 0;
        let currentCharIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;

        function typeText() {
            const currentRole = roles[currentRoleIndex];
            
            if (isDeleting) {
                typingText.textContent = currentRole.substring(0, currentCharIndex - 1);
                currentCharIndex--;
                typingSpeed = 50;
            } else {
                typingText.textContent = currentRole.substring(0, currentCharIndex + 1);
                currentCharIndex++;
                typingSpeed = 100;
            }

            if (!isDeleting && currentCharIndex === currentRole.length) {
                typingSpeed = 2000; // Pause at end
                isDeleting = true;
            } else if (isDeleting && currentCharIndex === 0) {
                isDeleting = false;
                currentRoleIndex = (currentRoleIndex + 1) % roles.length;
                typingSpeed = 500; // Pause before next word
            }

            setTimeout(typeText, typingSpeed);
        }

        // Start typing animation
        typeText();

        // Mesh Animation
        const canvas = document.getElementById('meshCanvas');
        const ctx = canvas.getContext('2d');
        let animationId;

        // Set canvas size
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Animation variables
        const particles = [];
        const particleCount = 80;
        const maxDistance = 150;
        const mouse = { x: 0, y: 0 };

        // Particle class
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.6;
                this.vy = (Math.random() - 0.5) * 0.6;
                this.size = Math.random() * 1.5 + 0.5;
                this.opacity = Math.random() * 0.4 + 0.2;
                this.hue = Math.random() * 40 + 250;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges
                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

                // Keep particles in bounds
                this.x = Math.max(0, Math.min(canvas.width, this.x));
                this.y = Math.max(0, Math.min(canvas.height, this.y));

                // Mouse interaction
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 150) {
                    const force = (150 - distance) / 150;
                    this.x -= (dx / distance) * force * 0.6;
                    this.y -= (dy / distance) * force * 0.6;
                }
            }

            draw() {
                ctx.save();
                ctx.globalAlpha = this.opacity;
                ctx.fillStyle = `hsl(${this.hue}, 80%, 35%)`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
        }

        // Create particles
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        // Mouse move handler
        function handleMouseMove(e) {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        }

        window.addEventListener('mousemove', handleMouseMove);

        // Animation loop
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update and draw particles
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            // Draw connections
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < maxDistance) {
                        const opacity = (maxDistance - distance) / maxDistance * 0.6;
                        ctx.save();
                        ctx.globalAlpha = opacity;
                        ctx.strokeStyle = `hsl(${(particles[i].hue + particles[j].hue) / 2}, 80%, 35%)`;
                        ctx.lineWidth = 0.6;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                        ctx.restore();
                    }
                }
            }

            // Draw mouse connections
            particles.forEach(particle => {
                const dx = mouse.x - particle.x;
                const dy = mouse.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 200) {
                    const opacity = (200 - distance) / 200 * 0.7;
                    ctx.save();
                    ctx.globalAlpha = opacity;
                    ctx.strokeStyle = `hsl(${particle.hue}, 80%, 35%)`;
                    ctx.lineWidth = 0.6;
                    ctx.beginPath();
                    ctx.moveTo(mouse.x, mouse.y);
                    ctx.lineTo(particle.x, particle.y);
                    ctx.stroke();
                    ctx.restore();
                }
            });

            animationId = requestAnimationFrame(animate);
        }

        // Start animation
        animate();

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add fade-in animation on load
        window.addEventListener('load', function() {
            document.body.classList.add('fade-in');
        });

        // Cleanup on page unload
        window.addEventListener('beforeunload', function() {
            cancelAnimationFrame(animationId);
        });
    </script>
</body>
</html>
