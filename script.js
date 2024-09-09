// Skills data
const skills = [
    { name: "People Management", level: 80 },
    { name: "Change Management", level: 75 },
    { name: "Web Development", level: 85 },
    { name: "Project Management", level: 70 }
];

// Function to create skill bars
function createSkillBars() {
    const skillsList = document.getElementById('skillsList');
    skills.forEach(skill => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="skill-name">${skill.name}</span>
            <div class="skill-bar">
                <div class="skill-level" style="width: ${skill.level}%"></div>
            </div>
        `;
        skillsList.appendChild(li);
    });
}

// Function to add typing effect to the header
function typeEffect(element, text, speed = 100) {
    let i = 0;
    const timer = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
}

// Initialize interactivity
document.addEventListener('DOMContentLoaded', () => {
    createSkillBars();
    
    const headerText = document.querySelector('header p');
    const originalText = headerText.textContent;
    headerText.textContent = '';
    typeEffect(headerText, originalText);
});
