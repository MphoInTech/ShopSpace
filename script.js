// Chat functionality
const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');

function addMessage(message, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function generateResponse(input) {
    input = input.toLowerCase();
    
    if (input.includes('rent') || input.includes('cost')) {
        return 'In Gauteng, rental costs vary significantly by area. Sandton averages R45,000/month, Vaal Mall R28,000/month, Protea Gardens Mall R25,000/month, Krugersdorp Airport R30,000/month, Kempton Park CBD R32,000/month, Johannesburg CBD R40,000/month, and Pretoria R35,000/month for retail spaces.';
    }
    
    if (input.includes('profit') || input.includes('potential')) {
        return 'Based on our analysis, Johannesburg CBD and Sandton show very high profit potential. Kempton Park CBD and Pretoria offer high potential with good foot traffic. Vaal Mall and Protea Gardens Mall show medium potential with steady community-based traffic. Krugersdorp Airport area has medium-high potential, especially for retail businesses serving travelers.';
    }
    
    if (input.includes('location') || input.includes('area')) {
        return 'Popular retail locations include: 1) Johannesburg CBD - diverse urban population 2) Pretoria Central - near government offices 3) Vaal Mall - mixed income shoppers 4) Protea Gardens Mall - local community focus 5) Kempton Park CBD - high visibility location 6) Krugersdorp Airport - traveler-focused retail. Consider factors like target demographics, foot traffic, and accessibility when choosing.';
    }
    
    return 'I can help you with information about rental costs, profit potential, and location analysis in Gauteng. What would you like to know?';
}

function sendMessage() {
    const message = userInput.value.trim();
    if (message) {
        addMessage(message, true);
        const response = generateResponse(message);
        setTimeout(() => addMessage(response), 500);
        userInput.value = '';
    }
}

// Add enter key functionality
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Load property data from locationData.json
let locationData = {};
fetch('locationData.json')
  .then(response => response.json())
  .then(data => { 
    locationData = data;
  })
  .catch(err => console.error('Error loading location data:', err));

function togglePowerBI() {
const container = document.getElementById('powerbi-container');
if (container.style.display === 'none' || container.style.display === '') {
    container.style.display = 'block';
} else {
    container.style.display = 'none';
}
}

// Property search functionality
function searchProperties() {
    const propertyType = document.getElementById('propertyType').value;
    const minPrice = parseInt(document.getElementById('minPrice').value) || 0;
    const maxPrice = parseInt(document.getElementById('maxPrice').value) || Infinity;
    
    let results = [];
    
    // Search through all locations
    for (const [location, data] of Object.entries(locationData)) {
        const matchingProperties = data.properties ? data.properties.filter(property => {
            const typeMatch = !propertyType || property.type === propertyType;
            const priceMatch = property.price >= minPrice && 
                             (maxPrice === Infinity || property.price <= maxPrice);
            return typeMatch && priceMatch;
        }) : [];
        
        results = results.concat(
            matchingProperties.map(prop => ({
                ...prop,
                location
            }))
        );
    }
    
    displaySearchResults(results);
}

function displaySearchResults(results) {
    const resultsContainer = document.createElement('div');
    resultsContainer.className = 'row mt-4 search-results';
    
    if (results.length === 0) {
        resultsContainer.innerHTML = '<div class="col-12"><p class="text-center">No properties found matching your criteria.</p></div>';
    } else {
        results.forEach(property => {
            
            const propertyCard = document.createElement('div');
            propertyCard.className = 'col-md-4 mb-4';
            propertyCard.innerHTML = `
                <div class="property-card">
                    <img src="https://placehold.co/600x400" alt="${property.type} in ${property.location}">
                    <div class="property-info">
                        <h5>${property.location}</h5>
                        <p>Type: ${property.type}</p>
                        <p>Price: R${property.price}</p>
                        <p>Size: ${property.size}</p>
                        <p>Description: ${property.description}</p>
                        <button class="btn btn-primary" onclick="contactAgent('${property.location}', ${property.price})">
                            Contact Agent
                        </button>
                    </div>
                </div>
            `;
            resultsContainer.appendChild(propertyCard);
        });
    }
    
    // Remove any existing results
    const existingResults = document.querySelector('.search-results');
    if (existingResults) {
        existingResults.remove();
    }
    
    // Append the results to the inner container of the search section for proper alignment.
    const containerSection = document.querySelector('#search .container');
    containerSection.appendChild(resultsContainer);
}

function contactAgent(location, price) {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user) {
        window.location.href = 'login.html';
        return;
    }
    alert(`Thank you for your interest! An agent will contact you about the ${location} property (R${price}) shortly.`);
}

// Map toggle functionality
function toggleMap() {
    const mapContainer = document.getElementById('mapContainer');
    if (mapContainer.style.display === 'none') {
        mapContainer.style.display = 'block';
    } else {
        mapContainer.style.display = 'none';
    }
}

// Testimonial carousel functionality
function initTestimonialCarousel() {
    const groups = document.querySelectorAll('.testimonial-group');
    let currentIndex = 0;

    function showGroup(index) {
        groups.forEach(group => group.classList.remove('active'));
        groups[index].classList.add('active');
    }

    function nextGroup() {
        currentIndex = (currentIndex + 1) % groups.length;
        showGroup(currentIndex);
    }

    // Change testimonials every 5 seconds
    setInterval(nextGroup, 5000);
}

// Initialize testimonial carousel when page loads
window.addEventListener('load', initTestimonialCarousel);

// Initialize with a welcome message
window.onload = () => {
    addMessage('Hello! I\'m your AI business advisor. I can help you find the perfect location for your business in Gauteng and provide estimates for rental costs and profit potential. What would you like to know?');
};

// Event listeners for sign up and sign in buttons
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});