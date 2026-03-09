const destinations = [
    {
        name: "Sri Vijaya Puram (Port Blair)",
        description: "The capital city and gateway to the islands, rich with history.",
        image: "andaman4.jpeg"
    },
    {
        name: "Swaraj Dweep (Havelock Island)",
        description: "Renowned for Radhanagar Beach, one of Asia's best beaches.",
        image: "andaman5.jpeg"
    },
    {
        name: "Shaheed Dweep (Neil Island)",
        description: "A serene paradise known for its natural bridges and relaxed vibe.",
        image: "andaman6.jpeg"
    },
    {
        name: "North Bay Island",
        description: "Famous for coral viewing, snorkeling, and water sports.",
        image: "andaman7.jpeg"
    },
    {
        name: "Baratang Island",
        description: "Famous for limestone caves, mangrove creeks, and tribal heritage.",
        image: "andaman8.jpeg"
    },
    {
        name: "Ross Island",
        description: "Historical island with British colonial ruins and natural beauty.",
        image: "andaman9.jpeg"
    }
];

const activities = [
    {
        title: "Snorkeling at Elephant Beach",
        description: "Explore coral reefs and marine life through snorkeling in crystal clear waters.",
        duration: "2-3 Hours",
        groupType: "Group boat trip",
        location: "Swaraj Dweep(Havelock Island)",
        place: "Elephant Beach, Havelock",
        tag: "Romantic",
        icon: "fa-water",
        image: "tp andaman1.jpg"
    },
    {
        title: "Island Hopping (North Bay, Ross Island)",
        description: "Visit multiple islands including North Bay for coral viewing and Ross Island for history.",
        duration: "Full Day",
        groupType: "Large group cruise",
        location: "Sri Vijaya Puram(Port Blair)",
        place: "Port Blair",
        tag: "Romantic",
        icon: "fa-ship",
        image: "tp2 andaman.jpg"
    },
    {
        title: "Scuba Diving (Shallow Water)",
        description: "Experience the underwater world with certified instructors in safe conditions.",
        duration: "1 hours",
        groupType: "Small groups",
        location: "Swaraj Dweep(Havelock Island)",
        place: "Elephant Beach, Havelock",
        tag: "Adventure",
        icon: "fa-person-swimming",
        image: "tp3 andaman.jpg"
    }
];

const testimonials = [
    {
        name: "Rahul & Priya Sharma",
        location: "Mumbai, India",
        rating: 5,
        text: "Our honeymoon in Andaman was absolutely magical! The beaches were pristine, and the service was exceptional. Highly recommend!",
        image: "https://ui-avatars.com/api/?name=Rahul+Sharma&background=00a8cc&color=fff&size=100"
    },
    {
        name: "Amit Patel",
        location: "Delhi, India",
        rating: 5,
        text: "Best family vacation ever! The kids loved the water sports and we enjoyed the peaceful beaches. Great organization and support.",
        image: "https://ui-avatars.com/api/?name=Amit+Patel&background=ff6b6b&color=fff&size=100"
    },
    {
        name: "Sneha Reddy",
        location: "Bangalore, India",
        rating: 5,
        text: "The scuba diving experience was unforgettable! Crystal clear waters and amazing marine life. Will definitely come back again.",
        image: "https://ui-avatars.com/api/?name=Sneha+Reddy&background=764ba2&color=fff&size=100"
    },
    {
        name: "Vikram Singh",
        location: "Jaipur, India",
        rating: 5,
        text: "Amazing trip! The tour guide was knowledgeable and friendly. Every destination was breathtaking. Worth every penny!",
        image: "https://ui-avatars.com/api/?name=Vikram+Singh&background=667eea&color=fff&size=100"
    },
    {
        name: "Neha & Karan",
        location: "Pune, India",
        rating: 5,
        text: "Perfect romantic getaway! Beautiful sunsets, luxury resorts, and excellent hospitality. Made our anniversary truly special.",
        image: "https://ui-avatars.com/api/?name=Neha+Karan&background=f093fb&color=fff&size=100"
    },
    {
        name: "Rajesh Kumar",
        location: "Chennai, India",
        rating: 5,
        text: "Excellent adventure package! Jet skiing, parasailing, and island hopping were thrilling. Highly professional team!",
        image: "https://ui-avatars.com/api/?name=Rajesh+Kumar&background=4facfe&color=fff&size=100"
    }
];

const hotels = [
    {
        name: "SeaShell Port Blair",
        description: "A premium hotel in Port Blair with modern amenities and excellent service.",
        rating: 4.2,
        reviews: 150,
        badge: "Premium",
        tag: "FAMILY CHOICE",
        image: "andaman hotels1.jpg"
    },
    {
        name: "Barefoot at Havelock",
        description: "Luxury eco-resort located near Radhanagar Beach with private villas.",
        rating: 4.7,
        reviews: 280,
        badge: "Luxury",
        tag: "LUXURY",
        image: "andaman hotesl2.jpg"
    },
    {
        name: "Silver Sand Neil Island",
        description: "Beachfront resort offering comfortable accommodation and water activities.",
        rating: 4.3,
        reviews: 120,
        badge: "Premium",
        tag: "BEACHFRONT",
        image: "andaman hotels3.jpg"
    }
];

const packages = [
    {
        title: "3 Nights 4 Days Package",
        description: "Perfect for a quick getaway covering Port Blair and Havelock Island.",
        price: "₹15,999",
        duration: "3N/4D",
        image: "andaman10.jpeg",
        icon: "fa-umbrella-beach",
        rating: 4.5,
        reviews: 120
    },
    {
        title: "4 Nights 5 Days Package",
        description: "Explore Port Blair, Havelock, and Neil Island with water activities.",
        price: "₹22,999",
        duration: "4N/5D",
        image: "andaman11.jpeg",
        icon: "fa-ship",
        rating: 4.8,
        reviews: 200
    },
    {
        title: "5 Nights 6 Days Package",
        description: "Complete Andaman experience with all major islands and attractions.",
        price: "₹28,999",
        duration: "5N/6D",
        image: "andaman12.jpeg",
        icon: "fa-island-tropical",
        rating: 4.7,
        reviews: 180
    },
    {
        title: "Honeymoon Special",
        description: "Romantic package with luxury stays and candlelight dinners.",
        price: "₹42,999",
        duration: "5N/6D",
        image: "andaman9.jpeg",
        icon: "fa-heart",
        rating: 5.0,
        reviews: 250
    },
    {
        title: "Adventure Package",
        description: "Thrilling water sports, scuba diving, and jungle trekking.",
        price: "₹32,999",
        duration: "4N/5D",
        image: "andaman4.jpeg",
        icon: "fa-person-hiking",
        rating: 4.6,
        reviews: 150
    },
    {
        title: "Family Package",
        description: "Family-friendly itinerary with activities for all age groups.",
        price: "₹26,999",
        duration: "5N/6D",
        image: "andaman5.jpeg",
        icon: "fa-people-group",
        rating: 4.4,
        reviews: 130
    }
];

function renderDestinations() {
    const grid = document.getElementById('destinationsGrid');
    if (!grid) return;
    
    grid.innerHTML = destinations.map(dest => `
        <div class="destination-card">
            <img src="${dest.image}" alt="${dest.name}">
            <div class="destination-overlay">
                <h3>${dest.name}</h3>
                <p>${dest.description}</p>
            </div>
        </div>
    `).join('');
}

function renderPackages() {
    const grid = document.getElementById('packagesGrid');
    if (!grid) return;
    
    grid.innerHTML = packages.map(pkg => `
        <div class="package-card">
            <div class="package-icon">
                <i class="fas ${pkg.icon}"></i>
            </div>
            <img src="${pkg.image}" alt="${pkg.title}" class="package-img">
            <div class="package-content">
                <div class="package-rating">
                    <span class="stars">${'★'.repeat(Math.floor(pkg.rating))}${'☆'.repeat(5-Math.floor(pkg.rating))}</span>
                    <span class="rating-score">${pkg.rating}</span>
                    <span class="rating-reviews">(${pkg.reviews} reviews)</span>
                </div>
                <h3>${pkg.title}</h3>
                <p>${pkg.description}</p>
                <div class="package-footer">
                    <div class="package-duration">${pkg.duration}</div>
                    <a href="#contact" class="enquiry-btn">Enquiry Now</a>
                </div>
            </div>
        </div>
    `).join('');
}

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

const form = document.getElementById('bookingForm');
if (form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        
        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });
            
            if (response.ok) {
                alert('Thank you for your inquiry! We will contact you shortly.');
                form.reset();
            } else {
                alert('Something went wrong. Please try again.');
            }
        } catch (error) {
            alert('Error submitting form. Please try again.');
        }
    });
}

const heroForm = document.getElementById('heroBookingForm');
if (heroForm) {
    heroForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your inquiry! We will contact you shortly.');
        heroForm.reset();
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const topBar = document.querySelector('.top-bar');
    const scrollToTop = document.querySelector('.scroll-to-top');
    
    if (window.scrollY > 50) {
        topBar.style.transform = 'translateY(-100%)';
        header.style.top = '0';
    } else {
        topBar.style.transform = 'translateY(0)';
        header.style.top = '40px';
    }
    
    if (window.scrollY > 300) {
        scrollToTop.classList.add('show');
    } else {
        scrollToTop.classList.remove('show');
    }
});

function renderHotels() {
    const grid = document.getElementById('hotelsGrid');
    if (!grid) return;
    
    grid.innerHTML = hotels.map(hotel => `
        <div class="hotel-card">
            <div class="hotel-image">
                <div class="hotel-badge">${hotel.badge}</div>
                <div class="hotel-tag">${hotel.tag}</div>
                <img src="${hotel.image}" alt="${hotel.name}">
            </div>
            <div class="hotel-content">
                <div class="hotel-rating">
                    <span class="stars">${'★'.repeat(Math.floor(hotel.rating))}${'☆'.repeat(5-Math.floor(hotel.rating))}</span>
                    <span class="score">${hotel.rating}</span>
                    <span class="hotel-reviews">(${hotel.reviews}) reviews</span>
                </div>
                <h3>${hotel.name}</h3>
                <p>${hotel.description}</p>
            </div>
        </div>
    `).join('');
}

function renderActivities() {
    const grid = document.getElementById('activitiesGrid');
    if (!grid) return;
    
    grid.innerHTML = activities.map(activity => `
        <div class="activity-card">
            <div class="activity-tag">${activity.tag}</div>
            <img src="${activity.image}" alt="${activity.title}" class="activity-img">
            <div class="activity-content">
                <div class="activity-icon">
                    <i class="fas ${activity.icon}"></i>
                </div>
                <h3>${activity.title}</h3>
                <p>${activity.description}</p>
                <div class="activity-details">
                    <div class="detail-item">
                        <i class="far fa-clock"></i>
                        <span>${activity.duration}</span>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-users"></i>
                        <span>${activity.groupType}</span>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${activity.location}</span>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-location-dot"></i>
                        <span>${activity.place}</span>
                    </div>
                </div>
                <a href="#contact" class="activity-btn">Book Now</a>
            </div>
        </div>
    `).join('');
}

function renderTestimonials() {
    const grid = document.getElementById('testimonialsGrid');
    if (!grid) return;
    
    const testimonialsHTML = testimonials.map(testimonial => `
        <div class="testimonial-card">
            <div class="testimonial-rating">
                ${'★'.repeat(testimonial.rating)}
            </div>
            <p class="testimonial-text">"${testimonial.text}"</p>
            <div class="testimonial-author">
                <img src="${testimonial.image}" alt="${testimonial.name}">
                <div>
                    <h4>${testimonial.name}</h4>
                    <p>${testimonial.location}</p>
                </div>
            </div>
        </div>
    `).join('');
    
    grid.innerHTML = testimonialsHTML + testimonialsHTML;
}

renderDestinations();
renderPackages();
renderHotels();
renderActivities();
renderTestimonials();

let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

if (slides.length > 0) {
    setInterval(nextSlide, 4000);
}
