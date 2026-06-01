// ============================================ 

// JINVER T. CAPILLO PORTFOLIO - COMPLETE JS 

// ============================================ 

 

document.addEventListener('DOMContentLoaded', function() { 

     

    console.log('🚀 Portfolio loaded successfully!'); 

     

    // 🎯 1. MOBILE NAVIGATION TOGGLE 

    const hamburger = document.querySelector('.hamburger'); 

    const navMenu = document.querySelector('.nav-menu'); 

 

    if (hamburger && navMenu) { 

        hamburger.addEventListener('click', () => { 

            hamburger.classList.toggle('active'); 

            navMenu.classList.toggle('active'); 

        }); 

 

        // Close mobile menu on link click 

        document.querySelectorAll('.nav-link').forEach(link => { 

            link.addEventListener('click', () => { 

                hamburger.classList.remove('active'); 

                navMenu.classList.remove('active'); 

            }); 

        }); 

    } 

 

    // 🌟 2. NAVBAR BACKGROUND ON SCROLL 

    window.addEventListener('scroll', () => { 

        const header = document.querySelector('.header'); 

        if (window.scrollY > 100) { 

            header.style.background = 'rgba(17, 24, 39, 0.98)'; 

        } else { 

            header.style.background = 'rgba(17, 24, 39, 0.95)'; 

        } 

    }); 

 

    // ⚡ 3. SMOOTH SCROLLING FOR ALL ANCHOR LINKS 

    document.querySelectorAll('a[href^="#"]').forEach(anchor => { 

        anchor.addEventListener('click', function (e) { 

            e.preventDefault(); 

            const targetId = this.getAttribute('href'); 

            const target = document.querySelector(targetId); 

             

            if (target) { 

                target.scrollIntoView({ 

                    behavior: 'smooth', 

                    block: 'start' 

                }); 

            } 

        }); 

    }); 

 

    // 📊 4. SKILL PROGRESS BARS ANIMATION 

    function animateSkillBars() { 

        const skillBars = document.querySelectorAll('.skill-progress'); 

        skillBars.forEach(bar => { 

            const targetWidth = bar.getAttribute('data-width'); 

            bar.style.width = targetWidth; 

        }); 

    } 

 

    // 🎬 5. SCROLL ANIMATIONS (Intersection Observer) 

    const observerOptions = { 

        threshold: 0.1, 

        rootMargin: '0px 0px -100px 0px' 

    }; 

 

    const scrollObserver = new IntersectionObserver((entries) => { 

        entries.forEach(entry => { 

            if (entry.isIntersecting) { 

                entry.target.classList.add('animated'); 

                 

                // Animate skill bars when skills section is visible 

                if (entry.target.matches('.skills')) { 

                    setTimeout(animateSkillBars, 200); 

                } 

            } 

        }); 

    }, observerOptions); 

 

    // Observe all sections for scroll animations 

    document.querySelectorAll('section').forEach(section => { 

        section.classList.add('animate-on-scroll'); 

        scrollObserver.observe(section); 

    }); 

 

    // ✉️ 6. CONTACT FORM HANDLING 

    const contactForm = document.getElementById('contactForm'); 

    if (contactForm) { 

        contactForm.addEventListener('submit', function(e) { 

            e.preventDefault(); 

             

            const name = document.getElementById('name').value.trim(); 

            const email = document.getElementById('email').value.trim(); 

            const message = document.getElementById('message').value.trim(); 

             

            // Basic validation 

            if (name && email && message && /\S+@\S+\.\S+/.test(email)) { 

                // Show success message 

                const successHTML = ` 

                    <div style="text-align: center; padding: 3rem; background: rgba(34, 197, 94, 0.2); border-radius: 15px; border: 2px solid #22c55e; backdrop-filter: blur(10px);"> 

                        <i class="fas fa-check-circle" style="font-size: 4rem; color: #22c55e; margin-bottom: 1rem;"></i> 

                        <h3>Thank you, ${name}!</h3> 

                        <p style="color: rgba(255,255,255,0.9); margin-bottom: 1.5rem;">Your message has been sent successfully. I'll get back to you within 24 hours! 🚀</p> 

                        <button type="button" onclick="location.reload()" class="btn btn-primary" style="margin-top: 1rem;"> 

                            Send Another Message 

                        </button> 

                    </div> 

                `; 

                 

                this.innerHTML = successHTML; 

                 

                // Log for debugging (replace with real backend later) 

                console.log('📧 Form Submitted:', { name, email, message }); 

                 

                // Auto-reset after 8 seconds 

                setTimeout(() => location.reload(), 8000); 

            } else { 

                alert('Please fill all fields correctly!'); 

            } 

        }); 

    } 

 

    // 🔗 7. ACTIVE NAVIGATION HIGHLIGHTING 

    function updateActiveNav() { 

        let current = ''; 

        const sections = document.querySelectorAll('section'); 

        const scrollPosition = window.scrollY + 100; 

 

        sections.forEach(section => { 

            if (scrollPosition >= section.offsetTop) { 

                current = section.getAttribute('id'); 

            } 

        }); 

 

        document.querySelectorAll('.nav-link').forEach(link => { 

            link.classList.remove('active'); 

            if (link.getAttribute('href') === `#${current}`) { 

                link.classList.add('active'); 

            } 

        }); 

    } 

 

    // Update nav on scroll 

    let ticking = false; 

    window.addEventListener('scroll', () => { 

        if (!ticking) { 

            requestAnimationFrame(updateActiveNav); 

            ticking = true; 

            setTimeout(() => ticking = false, 100); 

        } 

    }); 

 

    // 🍔 8. HAMBURGER ANIMATION DELAYS 

    document.querySelectorAll('.bar').forEach((bar, index) => { 

        bar.style.transitionDelay = `${index * 0.05}s`; 

    }); 

 

    // 🎯 9. SKIP LINK FOCUS MANAGEMENT 

    const skipLink = document.querySelector('.skip-link'); 

    if (skipLink) { 

        skipLink.addEventListener('keydown', (e) => { 

            if (e.key === 'Enter') { 

                skipLink.blur(); 

            } 

        }); 

    } 

 

    // ⭐ 10. INITIALIZE - Set home as active 

    if (document.querySelector('a[href="#home"]')) { 

        document.querySelector('a[href="#home"]').classList.add('active'); 

    } 

 

    // 🎉 LOADING COMPLETE 

    setTimeout(() => { 

        document.body.classList.add('loaded'); 

    }, 100); 

    // 🌙 11. DARK/LIGHT MODE TOGGLE 

const modeToggle = document.getElementById('modeToggle'); 

const body = document.body; 

 

if (modeToggle) { 

    // Check saved preference or default to dark 

    const savedMode = localStorage.getItem('themeMode') || 'dark'; 

    body.classList.toggle('light-mode', savedMode === 'light'); 

    updateModeUI(savedMode); 

 

    modeToggle.addEventListener('click', () => { 

        body.classList.toggle('light-mode'); 

        const isLight = body.classList.contains('light-mode'); 

         

        // Save preference 

        localStorage.setItem('themeMode', isLight ? 'light' : 'dark'); 

         

        // Update UI 

        updateModeUI(isLight ? 'light' : 'dark'); 

    }); 

 

    function updateModeUI(mode) { 

        const sunIcon = modeToggle.querySelector('.sun'); 

        const moonIcon = modeToggle.querySelector('.moon'); 

        const modeText = modeToggle.querySelector('.mode-text'); 

         

        if (mode === 'light') { 

            modeText.textContent = 'Dark'; 

        } else { 

            modeText.textContent = 'Light'; 

        } 

    } 

} 

}); 