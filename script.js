// Store location data (simplified example)
const locationData = {
    'Sandton': {
        avgRent: 45000,
        profitPotential: 'High',
        footTraffic: 'Very High',
        demographics: 'High-income professionals',
        properties: [
            {
                type: 'retail',
                price: 35152,
                size: '150m²',
                image: 'images/retail space Sandton.jpg',
                description: 'Prime retail property in Sandton, offering exceptional visibility and accessibility in a bustling commercial hub.'
            },
            
        ]
    },
    'Rosebank Mall': {
        avgRent: 35000,
        profitPotential: 'High',
        footTraffic: 'High',
        demographics: 'Mixed, young professionals',
        properties: [
            {
                type: 'retail',
                price: 37500,
                size: '120m²',
                image: 'images/retail space Rosebank.jpg',
                description: 'Modern retail space in Rosebank Mall, combining high foot traffic with a vibrant shopping atmosphere.'
            },
            
        ]
    },
    'Centurion': {
        avgRent: 28000,
        profitPotential: 'Medium-High',
        footTraffic: 'Medium',
        demographics: 'Mixed suburban, family-oriented',
        properties: [
            {
                type: 'retail',
                price: 30000,
                size: '180m²',
                image: 'images/retail space Centurion N.jpg',
                description: 'Prime retail space in Centurion, offering high visibility and easy access in a vibrant, rapidly growing area.'
            },
            
        ]
    },
    'Ekurhuleni': {
        avgRent: 22000,
        profitPotential: 'Medium',
        footTraffic: 'Medium',
        demographics: 'Industrial, working class',
        properties: [
            {
                type: 'retail',
                price: 28000,
                size: '200m²',
                image: 'images/retail space Ekurhuleni.jpg',
                description: 'Versatile retail space in Ekurhuleni, strategically located in a bustling area with excellent connectivity.'
            },
            
        ]
    },
    'Vanderbijlpark': {
        avgRent: 18000,
        profitPotential: 'Medium',
        footTraffic: 'Medium-Low',
        demographics: 'Industrial, student population',
        properties: [
            {
                type: 'retail',
                price: 16000,
                size: '160m²',
                image: 'images/retail space Vanderbijlpark.jpg',
                description: 'Spacious retail space in Vanderbijlpark, located in a busy commercial area with excellent visibility and foot traffic.'
            },
            
        ]
    },
    'Germiston': {
        avgRent: 20000,
        profitPotential: 'Medium-High',
        footTraffic: 'Medium',
        demographics: 'Industrial, mixed residential',
        properties: [
           
            {
                type: 'retail',
                price: 7500,
                size: '140m²',
                image: 'images/retail space Germiston.jpg',
                description: 'Strategically located retail space in Germiston, offering high exposure and easy access in a thriving commercial area.'
            },

        ]
    },
    'Alberton City Shopping Centre': {
        avgRent: 21000,
        profitPotential: 'Medium-High',
        footTraffic: 'Medium',
        demographics: 'Mixed residential, family-oriented',
        properties: [
            {
                type: 'retail',
                price: 18940,
                size: '120m²',
                image: 'images/retail space Alberton.jpg',
                description: 'Prime retail space in Alberton City Shopping Centre, situated in a high-traffic area with excellent visibility and easy access for shoppers.'
            },
            
        ]
    },
    'Midrand City Shopping Centre': {
        avgRent: 32000,
        profitPotential: 'High',
        footTraffic: 'Medium-High',
        demographics: 'Mixed professional, tech hub',
        properties: [
            
            {
                type: 'retail',
                price: 45000,
                size: '180m²',
                image: 'images/retail space Midrand.jpg',
                description: 'Spacious retail space in a bustling Midrand shopping center, offering high foot traffic and prime visibility in a central location.'
            },
            
        ]
    },
    'Boksburg Civic Centre': {
        avgRent: 23000,
        profitPotential: 'Medium-High',
        footTraffic: 'Medium',
        demographics: 'Mixed industrial and residential',
        properties: [
            {
                type: 'retail',
                price: 20000,
                size: '160m²',
                image: 'images/retail space Boksburg.jpg',
                description: 'Prime retail space in Boksburg Civic Centre, located in a high-traffic area with excellent accessibility and exposure.'
            }
            
        ]
    },
    'Vaal Mall': {
        avgRent: 28000,
        profitPotential: 'Medium',
        footTraffic: 'High',
        demographics: 'Mixed income shoppers',
        properties: [
            {
                suburb: 'Vall Mall Area',
                type: 'retail',
                price: 12000,
                size: '120m²',
                image: 'images/Vaal.jpg',
                description: 'Strategic retail space in Vall Mall with excellent exposure to foot traffic.'
            }
        ]
    },
    'Protea Gardens Mall': {
        avgRent: 25000,
        profitPotential: 'Medium',
        footTraffic: 'Medium-High',
        demographics: 'Local community shoppers',
        properties: [
            {
                suburb: 'Protea Gardens',
                type: 'retail',
                price: 9500,
                size: '100m²',
                image: 'images/PGM.jpg',
                description: 'Retail space in community-focused shopping center with loyal customer base.'
            }
        ]
    },
    'Krugersdorp Airport': {
        avgRent: 30000,
        profitPotential: 'Medium-High',
        footTraffic: 'Medium',
        demographics: 'Business travelers, logistics companies',
        properties: [
            {
                suburb: 'Krugersdorp Airport',
                type: 'retail',
                price: 15000,
                size: '200m²',
                image: 'images/Krugerdorp.jpg',
                description: 'Commercial space near Krugersdorp Airport, ideal for aviation-related businesses.'
            }
        ]
    },
    'Kempton Park CBD': {
        avgRent: 32000,
        profitPotential: 'High',
        footTraffic: 'Very High',
        demographics: 'Mixed urban population',
        properties: [
            {
                suburb: 'Kempton Park Central',
                type: 'retail',
                price: 18000,
                size: '180m²',
                image: 'images/KPCBD.jpg',
                description: 'Prime location in Kempton Park CBD with high visibility and accessibility.'
            }
        ]
    },
    'Johannesburg': {
        avgRent: 40000,
        profitPotential: 'Very High',
        footTraffic: 'Very High',
        demographics: 'Diverse urban population',
        properties: [
            {
                suburb: 'CBD',
                type: 'retail',
                price: 22000,
                size: '250m²',
                image: 'images/Jhb.jpg',
                description: 'Premium commercial space in the heart of Johannesburg CBD.'
            }
        ]
    },
    'Pretoria': {
        avgRent: 35000,
        profitPotential: 'High',
        footTraffic: 'High',
        demographics: 'Government employees, students, professionals',
        properties: [
            {
                suburb: 'Pretoria Central',
                type: 'retail',
                price: 19000,
                size: '160m²',
                image: 'images/PTA.jpg',
                description: 'Well-positioned commercial property in Pretoria Central, close to government offices.'
            }
        ]
    },
};

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
    resultsContainer.className = 'row mt-4';
    
    if (results.length === 0) {
        resultsContainer.innerHTML = '<div class="col-12"><p class="text-center">No properties found matching your criteria.</p></div>';
    } else {
        results.forEach(property => {
            const propertyCard = document.createElement('div');
            propertyCard.className = 'col-md-4 mb-4';
            propertyCard.innerHTML = `
                <div class="property-card">
                    <img src="${property.image}" alt="${property.type} in ${property.location}">
                    <h5>${property.location}</h5>
                    <p>Type: ${property.type}</p>
                    <p>Price: R${property.price}</p>
                    <p>Size: ${property.size}</p>
                    <p>Description: ${property.description}</p>
                    <button class="btn btn-primary" onclick="contactAgent('${property.location}', ${property.price})">
                        Contact Agent
                    </button>
                </div>
            `;
            resultsContainer.appendChild(propertyCard);
        });
    }
     
    // Replace existing results if any
    const existingResults = document.querySelector('.search-results');
    if (existingResults) {
        existingResults.remove();
    }
    
    resultsContainer.className = 'row mt-4 search-results';
    document.getElementById('search').appendChild(resultsContainer);
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

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
