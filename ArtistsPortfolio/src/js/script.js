// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const button = document.querySelector('.dark-mode-toggle');
    if (document.body.classList.contains('dark-mode')) {
        button.textContent = '☀️ Light Mode';
    } else {
        button.textContent = '🌙 Dark Mode';
    }
}

// Hamburger Menu Toggle
function toggleMenu() {
    const nav = document.getElementById('nav-menu');
    const hamburger = document.querySelector('.hamburger');
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Dropdown Toggle for Mobile
function toggleDropdown(event) {
    if (window.innerWidth <= 768) {
        event.preventDefault();
        const dropdown = event.target.closest('.dropdown');
        dropdown.classList.toggle('active');
    }
}

// Modal Functions
function openModal(type) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');

    const content = {
        engineering: {
            title: 'Science and Engineering',
            text: `Leonardo da Vinci was far ahead of his time with revolutionary engineering designs. His notebooks contain sketches of helicopters, tanks, submarines, and parachutes - inventions that wouldn't be realized for centuries.

He designed elaborate war machines, including giant crossbows and armed vehicles. His studies of water flow led to innovative canal systems and hydraulic pumps.

Da Vinci's engineering genius combined art, mathematics, and observation of nature. He believed that understanding the laws of nature was key to creating functional machines.`
        },
        painting: {
            title: 'Painting Masterpieces',
            text: `Leonardo da Vinci revolutionized Renaissance art with his innovative techniques. The "Mona Lisa" remains the world's most famous painting, captivating viewers with her enigmatic smile and pioneering sfumato technique.

"The Last Supper" showcases his mastery of perspective and emotional expression, depicting the dramatic moment Jesus announces his betrayal.

His techniques of chiaroscuro (light and shadow) and atmospheric perspective created unprecedented depth and realism in painting. Da Vinci spent years perfecting each work, believing art required both skill and scientific understanding.`
        },
        anatomy: {
            title: 'Anatomical Studies',
            text: `Leonardo da Vinci performed over 30 human dissections, creating more than 240 detailed anatomical drawings. His studies were centuries ahead of medical knowledge of his time.

He was the first to accurately depict the human spine's curvature, draw the heart's chambers correctly, and understand blood flow through vessels.

His anatomical illustrations combined scientific precision with artistic beauty. Da Vinci believed that to paint the human body properly, an artist must understand its inner workings completely.

Many of his anatomical discoveries weren't rediscovered until the 20th century.`
        }
    };

    const data = content[type];
    modalBody.innerHTML = `
        <h2>${data.title}</h2>
        <p>${data.text}</p>
    `;

    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function (event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}