/*
   NayePankh Foundation Tech Internship Portal JS
   Handles checklist state, circular progress, locked/unlocked views,
   countdown timer, track details, FAQ filter, forms, and custom confetti.
*/

document.addEventListener('DOMContentLoaded', () => {
  // --- Constants & Database ---
  const PLATFORMS = ['instagram', 'linkedin', 'youtube', 'facebook', 'twitter'];

  const TRACKS_DB = {
    frontend: {
      title: "Frontend Developer Track",
      ref: "NP-INT-2026-FE",
      difficulty: "Intermediate",
      description: "Develop a pixel-perfect, highly responsive landing page demonstrating modern animations, proper semantic HTML, clean responsive CSS variables, and solid form validation. The application should highlight the primary donation campaigns of NayePankh NGO.",
      specs: [
        "Mobile-first, fully responsive design using CSS Flexbox/Grid",
        "Smooth CSS keyframe transitions and hover micro-animations",
        "Form validation with custom styled tooltips and dynamic feedback",
        "Structured semantic HTML5 tags (header, main, section, footer, article)"
      ],
      label: "GitHub Repository URL *",
      placeholder: "https://github.com/your-username/repo-name",
      guidelines: `# NayePankh Foundation - Tech Internship Assignment
## Frontend Developer Track [Ref: NP-INT-2026-FE]

### Objective
Create a responsive, highly interactive donation landing page showcasing NayePankh Foundation's primary programs (Feed India, Education, Sanitary Distribution, Animal Welfare).

### Requirements
1. **Tech Stack**: HTML5, CSS3 (Vanilla CSS variables), and Vanilla JavaScript (ES6+). No UI frameworks (like React/Bootstrap/Tailwind) are allowed for this baseline test.
2. **Key Pages / Sections**:
   - Hero banner with inspiring background image and CTA button.
   - Interactive Donation Slider: Users select/type an amount and see what it funds (e.g., "$10 feeds 5 children").
   - Campaign Grid: Grid cards with flip animations or overlay descriptions.
   - Volunteer Registration Form: Validated input fields with proper error state styling.
3. **Accessibility**: Form elements must have labels. Focus states must be visually obvious. Contrast ratio must comply with WCAG 2.1 AA guidelines.
4. **Deliverables**:
   - Clean, commented source code pushed to a public GitHub repository.
   - Live hosted link (GitHub Pages, Vercel, Netlify, or similar).
   
Thank you and good luck!
NayePankh Foundation Tech Team`
    },
    backend: {
      title: "Backend Developer Track",
      ref: "NP-INT-2026-BE",
      difficulty: "Advanced",
      description: "Design and implement a robust RESTful API system for NGO volunteer scheduling and meal distribution tracking. Protect endpoints with JWT authentication and validate database models thoroughly.",
      specs: [
        "Node.js & Express framework or Python & Django/FastAPI",
        "MongoDB or PostgreSQL database integration with clean schemas",
        "JWT-based user signup/login and role-based permissions",
        "Robust input validation, custom error handling, and unit test files"
      ],
      label: "GitHub Repository URL *",
      placeholder: "https://github.com/your-username/api-repo-name",
      guidelines: `# NayePankh Foundation - Tech Internship Assignment
## Backend Developer Track [Ref: NP-INT-2026-BE]

### Objective
Design and implement a secure RESTful API for NayePankh volunteer scheduling and food drive tracking.

### Requirements
1. **Tech Stack**: Node.js/Express, Python/Django/FastAPI, or Java/Spring Boot. Use either MongoDB or PostgreSQL.
2. **API Endpoint Schema**:
   - \`POST /api/auth/register\` & \`POST /api/auth/login\` - User onboarding with encrypted passwords and JWT tokens.
   - \`GET /api/drives\` - Fetch all food/sanitary drives. Supported query filters: date, location.
   - \`POST /api/drives\` - Create a drive (Admin only).
   - \`POST /api/drives/:id/volunteer\` - Register authenticated user to a specific drive.
3. **Validation & Security**:
   - Sanitize all requests to protect against SQL Injection or XSS.
   - Validate input parameters using Joi, Zod, or validator decorators.
4. **Deliverables**:
   - GitHub Repository with README.md detailing local startup instructions.
   - Postman Collection JSON file for testing the endpoints.
   - Hosted API link (Render, Railway, Heroku, etc.) if possible.
   
Thank you and good luck!
NayePankh Foundation Tech Team`
    },
    fullstack: {
      title: "Full-Stack Developer Track",
      ref: "NP-INT-2026-FS",
      difficulty: "Advanced",
      description: "Build a complete web application that displays live impact metrics of NayePankh's sanitary pad drives. Include a public metrics dashboard and a secured volunteer administration portal.",
      specs: [
        "MERN stack (React, Node, Express, MongoDB) or Next.js app",
        "Live counter dashboard fetching stats via client polling or sockets",
        "Fully secured admin dashboard to insert and delete impact metrics",
        "Responsive styling, skeleton loader animations, and code split imports"
      ],
      label: "GitHub Repository URL *",
      placeholder: "https://github.com/your-username/fullstack-repo-name",
      guidelines: `# NayePankh Foundation - Tech Internship Assignment
## Full-Stack Developer Track [Ref: NP-INT-2026-FS]

### Objective
Develop a web application that tracks NGO impact metrics (meals distributed, sanitary pads shared, children educated).

### Requirements
1. **Frontend**: React (Vite) or Next.js. Implement an elegant, glassmorphic UI matching NayePankh branding. Include charts (using Chart.js, Recharts, or CSS shapes) to visualize the data.
2. **Backend**: Node.js/Express + MongoDB. Build endpoints to update the count of distributed items.
3. **Auth**: Session/Cookie or JWT auth for admins to access the data entry panel.
4. **Deliverables**:
   - Unified monorepo or split frontend/backend repositories on GitHub.
   - Live hosted link (e.g. Vercel for frontend, Render for backend).
   
Thank you and good luck!
NayePankh Foundation Tech Team`
    },
    uiux: {
      title: "UI/UX Designer Track",
      ref: "NP-INT-2026-UI",
      difficulty: "Intermediate",
      description: "Design a high-fidelity desktop and mobile wireframe in Figma for the NayePankh Foundation donation checkout funnel. Optimize for volunteer conversion and user accessibility.",
      specs: [
        "Desktop (1440px) and Mobile (375px) frame ratios in Figma",
        "Clean, interactive prototyping showing page flow interactions",
        "Custom design system containing color palettes, typography, and states",
        "Comprehensive user persona description and accessibility check list"
      ],
      label: "Figma Project URL *",
      placeholder: "https://www.figma.com/file/your-project-link",
      guidelines: `# NayePankh Foundation - Tech Internship Assignment
## UI/UX Designer Track [Ref: NP-INT-2026-UI]

### Objective
Design a conversion-optimized donation checkout process (Desktop & Mobile viewports) for NayePankh Foundation.

### Requirements
1. **Platform**: Figma.
2. **Deliverables**:
   - Landing page donation widget showing contribution options.
   - Payment method selection overlay (UPI, Cards, NetBanking).
   - "Thank You" screen featuring a social sharing card preview.
3. **UX Guidelines**:
   - Clearly highlight the 80G tax exemption badge.
   - Restrict forms to necessary fields (keep it short to increase conversions).
   - Document a custom UI design system containing button states, fonts (Inter/Outfit), and colors.
4. **Submission**:
   - Share a Figma file link. Set permissions to "Anyone with link can view".
   
Thank you and good luck!
NayePankh Foundation Tech Team`
    }
  };

  // --- DOM Elements ---
  const checkboxes = document.querySelectorAll('.social-checkbox');
  const progressCircle = document.getElementById('onboarding-progress-circle');
  const progressText = document.getElementById('onboarding-progress-text');

  // Assignment View States
  const lockedView = document.getElementById('assignment-locked');
  const unlockedView = document.getElementById('assignment-unlocked');
  const countdownText = document.getElementById('countdown-timer');
  const timerStatusText = document.getElementById('timer-status-text');

  // Tabs & Details
  const tabButtons = document.querySelectorAll('.track-tab-btn');
  const detailTitle = document.getElementById('detail-title');
  const detailDifficulty = document.getElementById('detail-difficulty');
  const detailDescription = document.getElementById('detail-description');
  const detailSpecs = document.getElementById('detail-specs');
  const btnDownloadGuidelines = document.getElementById('btn-download-guidelines');
  const btnOpenSubmission = document.getElementById('btn-open-submission');

  // Submission Form elements
  const submissionFormBox = document.getElementById('submission-form-box');
  const btnCloseSubmission = document.getElementById('btn-close-submission');
  const btnCancelSubmit = document.getElementById('btn-cancel-submit');
  const assignmentSubmitForm = document.getElementById('assignment-submit-form');
  const submissionSuccessAlert = document.getElementById('submission-success-alert');
  const submitTrackDropdown = document.getElementById('submit-track');
  const lblGithubFigma = document.getElementById('lbl-github-figma');
  const inputGithub = document.getElementById('submit-github');
  const btnConfirmSubmit = document.getElementById('btn-confirm-submit');

  // FAQ Search & Accordion
  const faqSearchInput = document.getElementById('faq-search');
  const faqItems = document.querySelectorAll('.faq-item');

  // Contact Form
  const techSupportForm = document.getElementById('tech-support-form');
  const contactSuccessAlert = document.getElementById('contact-success-alert');
  const btnSubmitSupport = document.getElementById('btn-submit-support');

  // Header animation
  const mainHeader = document.getElementById('main-header');

  // --- State Variables ---
  let onboardingState = {
    instagram: false,
    linkedin: false,
    youtube: false,
    facebook: false,
    twitter: false
  };

  let currentSelectedTrack = 'frontend';
  let confettiTriggered = false;

  // --- Initialize Onboarding State ---
  function loadOnboardingState() {
    const savedState = localStorage.getItem('nayepankh_onboarding_progress');
    if (savedState) {
      try {
        onboardingState = JSON.parse(savedState);
      } catch (e) {
        console.error("Error parsing saved onboarding state", e);
      }
    }

    // Set checkboxes visual state
    PLATFORMS.forEach(platform => {
      const checkbox = document.getElementById(`check-${platform}`);
      if (checkbox) {
        checkbox.checked = onboardingState[platform] || false;
      }
    });

    updateOnboardingUI(false); // Update without triggering initial confetti
  }

  function saveOnboardingState() {
    localStorage.setItem('nayepankh_onboarding_progress', JSON.stringify(onboardingState));
  }

  // --- Onboarding Progress Calculation ---
  function calculateProgress() {
    let completedCount = 0;
    PLATFORMS.forEach(platform => {
      if (onboardingState[platform]) completedCount++;
    });
    return (completedCount / PLATFORMS.length) * 100;
  }

  function updateOnboardingUI(shouldTriggerEffects = true) {
    const progressPercent = calculateProgress();

    // 1. Update text overlay
    progressText.textContent = `${Math.round(progressPercent)}%`;

    // 2. Update SVG stroke-dashoffset (total length: 377)
    const offset = 377 - (progressPercent / 100) * 377;
    progressCircle.style.strokeDashoffset = offset;

    // 3. Update summary pills and milestone check indicators
    PLATFORMS.forEach(platform => {
      const isCompleted = onboardingState[platform];
      const pill = document.getElementById(`pill-${platform}`);
      const milestone = document.getElementById(`milestone-${platform}`);
      const card = document.getElementById(`card-${platform}`);

      if (pill) {
        if (isCompleted) {
          pill.classList.add('completed');
          pill.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${platform.charAt(0).toUpperCase() + platform.slice(1)}`;
        } else {
          pill.classList.remove('completed');
          pill.innerHTML = `<i class="fa-brands fa-${platform === 'twitter' ? 'x-twitter' : platform === 'linkedin' ? 'linkedin-in' : platform === 'facebook' ? 'facebook-f' : platform}"></i> ${platform.charAt(0).toUpperCase() + platform.slice(1)}`;
        }
      }

      if (milestone) {
        if (isCompleted) {
          milestone.classList.add('checked');
          milestone.innerHTML = `<i class="fa-solid fa-circle-check" style="color: var(--success)"></i> ${platform.charAt(0).toUpperCase() + platform.slice(1)}`;
        } else {
          milestone.classList.remove('checked');
          milestone.innerHTML = `<i class="fa-solid fa-circle-notch"></i> ${platform.charAt(0).toUpperCase() + platform.slice(1)}`;
        }
      }

      if (card) {
        if (isCompleted) {
          card.style.borderColor = 'var(--success)';
        } else {
          // Revert to default colors
          if (platform === 'instagram') card.style.borderColor = '#e1306c';
          else if (platform === 'linkedin') card.style.borderColor = '#0077b5';
          else if (platform === 'youtube') card.style.borderColor = '#ff0000';
          else if (platform === 'facebook') card.style.borderColor = '#1877f2';
          else if (platform === 'twitter') card.style.borderColor = '#1da1f2';
        }
      }
    });

    // 4. Lock/Unlock Assignment Section
    if (progressPercent === 100) {
      lockedView.style.display = 'none';
      unlockedView.style.display = 'block';

      if (shouldTriggerEffects && !confettiTriggered) {
        triggerConfettiBlast();
        confettiTriggered = true;
      }
    } else {
      lockedView.style.display = 'flex';
      unlockedView.style.display = 'none';
      confettiTriggered = false; // Reset so they can enjoy it again if they uncheck and recheck
    }
  }

  // --- Checkbox Click Handlers ---
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
      const platform = e.target.getAttribute('data-platform');
      onboardingState[platform] = e.target.checked;
      saveOnboardingState();
      updateOnboardingUI(true);
    });
  });

  // Also enable progress updating when they click the "Visit & Follow" button
  // Clicking the button auto-checks the platform for convenient candidate UX
  const followButtons = document.querySelectorAll('.btn-follow');
  followButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const platform = btn.getAttribute('data-platform');
      if (platform && onboardingState[platform] === false) {
        const checkbox = document.getElementById(`check-${platform}`);
        if (checkbox) {
          checkbox.checked = true;
          onboardingState[platform] = true;
          saveOnboardingState();
          updateOnboardingUI(true);
        }
      }
    });
  });

  // --- Dynamic Countdown Timer ---
  // Calculates and displays the countdown.
  // Set release target to today at 6 PM. If current time is past 6 PM, target is set dynamically 2.5 hours ahead for design immersion.
  function initCountdownTimer() {
    const now = new Date();
    let target = new Date();
    target.setHours(18, 0, 0, 0); // 6:00 PM today

    if (now.getTime() >= target.getTime()) {
      // If it's already past 6:00 PM, let's set a target of 2.5 hours from current session start
      const savedTarget = localStorage.getItem('nayepankh_target_release');
      if (savedTarget) {
        const parseTarget = new Date(parseInt(savedTarget));
        if (parseTarget.getTime() > now.getTime()) {
          target = parseTarget;
        } else {
          target = new Date(now.getTime() + 2.5 * 60 * 60 * 1000); // 2.5 hours from now
          localStorage.setItem('nayepankh_target_release', target.getTime().toString());
        }
      } else {
        target = new Date(now.getTime() + 2.5 * 60 * 60 * 1000); // 2.5 hours from now
        localStorage.setItem('nayepankh_target_release', target.getTime().toString());
      }
    }

    function tick() {
      const currentTime = new Date().getTime();
      const difference = target.getTime() - currentTime;

      if (difference <= 0) {
        // Countdown completed
        countdownText.textContent = "RELEASED";
        timerStatusText.textContent = "Assignment Status";
        timerStatusText.style.color = "var(--success)";
        countdownText.style.color = "var(--success)";

        // Enhance UI labels
        document.getElementById('assignment-timer-container').style.background = 'rgba(16, 185, 129, 0.1)';
        document.getElementById('assignment-timer-container').style.borderColor = 'rgba(16, 185, 129, 0.25)';

        // Release alert
        const banner = document.querySelector('.announcement-banner');
        if (banner) {
          banner.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>Assignments are officially released! Select your track below.</span>`;
          banner.style.background = 'rgba(16, 185, 129, 0.1)';
          banner.style.borderColor = 'rgba(16, 185, 129, 0.25)';
          banner.style.color = 'var(--success)';
        }
        return;
      }

      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      const padZero = (num) => num.toString().padStart(2, '0');

      countdownText.textContent = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
      setTimeout(tick, 1000);
    }

    tick();
  }

  initCountdownTimer();

  // --- Track Selection Tabs Handler ---
  tabButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Remove active from all buttons
      tabButtons.forEach(t => t.classList.remove('active'));

      // Get current button block
      const targetBtn = e.currentTarget;
      targetBtn.classList.add('active');

      const track = targetBtn.getAttribute('data-track');
      currentSelectedTrack = track;

      // Load details into right container with a nice animation fade effect
      const details = TRACKS_DB[track];
      if (details) {
        // Toggle view fade
        const container = document.getElementById('track-details-container');
        container.style.opacity = 0;
        container.style.transform = 'translateY(5px)';

        setTimeout(() => {
          detailTitle.textContent = details.title;
          detailDifficulty.textContent = details.difficulty;

          // Difficulty Class update
          detailDifficulty.className = 'track-difficulty-badge';
          if (details.difficulty === 'Intermediate') {
            detailDifficulty.classList.add('intermediate');
          }

          detailDescription.textContent = details.description;

          // Load specs
          detailSpecs.innerHTML = '';
          details.specs.forEach(spec => {
            const li = document.createElement('li');
            li.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${spec}`;
            detailSpecs.appendChild(li);
          });

          // Sync Track dropdown value
          submitTrackDropdown.value = track;

          // Adjust labels for GitHub vs Figma
          lblGithubFigma.textContent = details.label;
          inputGithub.placeholder = details.placeholder;

          // Re-fade in
          container.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
          container.style.opacity = 1;
          container.style.transform = 'translateY(0)';
        }, 200);
      }
    });
  });

  // Track Select Dropdown Change in form syncs back to tab details
  submitTrackDropdown.addEventListener('change', (e) => {
    const selectedTrack = e.target.value;
    const matchingTab = document.querySelector(`.track-tab-btn[data-track="${selectedTrack}"]`);
    if (matchingTab) {
      matchingTab.click();
    }
  });

  // --- Download Guidelines Handler ---
  btnDownloadGuidelines.addEventListener('click', () => {
    const details = TRACKS_DB[currentSelectedTrack];
    if (details) {
      const content = details.guidelines;
      const blob = new Blob([content], { type: 'text/markdown;charset=utf-8;' });
      const url = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.setAttribute('href', url);
      link.setAttribute('download', `${currentSelectedTrack}_internship_guidelines.md`);
      link.style.visibility = 'hidden';

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  });

  // --- Form Controls (Submit Assignment Panel) ---
  btnOpenSubmission.addEventListener('click', () => {
    submissionFormBox.classList.add('active');
    // Scroll smoothly to form box
    setTimeout(() => {
      submissionFormBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
  });

  const closeForm = () => {
    submissionFormBox.classList.remove('active');
    assignmentSubmitForm.reset();
    submissionSuccessAlert.classList.remove('active');
  };

  btnCloseSubmission.addEventListener('click', closeForm);
  btnCancelSubmit.addEventListener('click', closeForm);

  // Form submission submit button action
  assignmentSubmitForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Simulate Loading State on Confirm Submit button
    btnConfirmSubmit.disabled = true;
    const originalBtnText = btnConfirmSubmit.textContent;
    btnConfirmSubmit.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Submitting...`;

    setTimeout(() => {
      // Show success alert
      submissionSuccessAlert.classList.add('active');

      // Scroll to alert
      submissionSuccessAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

      // Restore Button
      btnConfirmSubmit.disabled = false;
      btnConfirmSubmit.textContent = originalBtnText;

      // Reset form controls except success banner
      document.getElementById('submit-name').value = '';
      document.getElementById('submit-email').value = '';
      document.getElementById('submit-github').value = '';
      document.getElementById('submit-hosted').value = '';
      document.getElementById('submit-notes').value = '';

      // Trigger short celebrate confetti shower
      triggerConfettiBlast();

      // Auto-hide form panel after 6 seconds
      setTimeout(() => {
        if (submissionFormBox.classList.contains('active')) {
          closeForm();
        }
      }, 6000);

    }, 1500); // Simulated delay
  });

  // --- FAQs Filter Mechanism ---
  faqSearchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();

    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question-btn span').textContent.toLowerCase();
      const answer = item.querySelector('.faq-answer-panel p').textContent.toLowerCase();

      if (question.includes(query) || answer.includes(query)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });

  // FAQ Accordion Collapsible Panel toggling
  const questionButtons = document.querySelectorAll('.faq-question-btn');
  questionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.parentElement;
      const isActive = parent.classList.contains('active');

      // Close all other FAQs
      faqItems.forEach(item => item.classList.remove('active'));

      if (!isActive) {
        parent.classList.add('active');
      }
    });
  });

  // --- Tech Support Form Handler ---
  techSupportForm.addEventListener('submit', (e) => {
    e.preventDefault();

    btnSubmitSupport.disabled = true;
    const originalText = btnSubmitSupport.textContent;
    btnSubmitSupport.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> Sending...`;

    setTimeout(() => {
      contactSuccessAlert.classList.add('active');
      btnSubmitSupport.disabled = false;
      btnSubmitSupport.textContent = originalText;

      // Reset inputs
      techSupportForm.reset();

      setTimeout(() => {
        contactSuccessAlert.classList.remove('active');
      }, 5000);

    }, 1200);
  });

  // --- Scroll Header Animation ---
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      mainHeader.classList.add('scrolled');
    } else {
      mainHeader.classList.remove('scrolled');
    }
  });

  // --- High-Performance Canvas Confetti System ---
  const canvas = document.getElementById('confetti-canvas');
  const ctx = canvas.getContext('2d');
  let animationFrameId;
  let particles = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  class ConfettiParticle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * -canvas.height - 20;
      this.size = Math.random() * 8 + 4;
      this.color = `hsl(${Math.random() * 360}, 75%, 55%)`;
      this.speedX = Math.random() * 4 - 2;
      this.speedY = Math.random() * 5 + 4;
      this.rotation = Math.random() * 360;
      this.rotationSpeed = Math.random() * 4 - 2;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.rotation += this.rotationSpeed;
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate((this.rotation * Math.PI) / 180);
      ctx.fillStyle = this.color;
      ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
      ctx.restore();
    }
  }

  function triggerConfettiBlast() {
    // Cancel previous animations if running
    cancelAnimationFrame(animationFrameId);
    particles = [];

    // Spawn 150 particles
    for (let i = 0; i < 150; i++) {
      particles.push(new ConfettiParticle());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let active = false;
      particles.forEach(p => {
        p.update();
        p.draw();
        if (p.y < canvas.height) {
          active = true;
        }
      });

      if (active) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }

    animate();
  }

  // --- Theme Toggle Logic ----
  const themeToggleBtn = document.getElementById('theme-toggle-btn');

  function initTheme() {
    const savedTheme = localStorage.getItem('nayepankh_theme');
    const isLight = savedTheme === 'light';
    document.body.classList.toggle('light-theme', isLight);
    updateThemeIcon(isLight);
  }


  function updateThemeIcon(isLight) {
    if (themeToggleBtn) {
      const icon = themeToggleBtn.querySelector('i');
      if (icon) {
        if (isLight) {
          icon.className = 'fa-solid fa-sun';
        } else {
          icon.className = 'fa-solid fa-moon';
        }
      }
    }
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isLight = document.body.classList.toggle('light-theme');
      localStorage.setItem('nayepankh_theme', isLight ? 'light' : 'dark');
      updateThemeIcon(isLight);
    });
  }

  // --- Load Saved States on Startup ---
  initTheme();
  loadOnboardingState();
});
