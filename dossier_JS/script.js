// Création du bouton de mode sombre/clair
const toggleButton = document.createElement('button');
toggleButton.textContent = '🌙 Mode Sombre';
toggleButton.id = 'darkModeToggle';
toggleButton.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 10px 15px;
    background-color: #2c3e50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    z-index: 1000;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
`;

// Ajout du bouton au body
document.body.appendChild(toggleButton);

// Vérification de la préférence utilisateur sauvegardée
if (localStorage.getItem('darkMode') === 'enabled') {
    enableDarkMode();
}

// Fonction pour activer le mode sombre
function enableDarkMode() {
    document.body.classList.add('dark-mode');
    toggleButton.textContent = '☀️ Mode Clair';
    toggleButton.style.backgroundColor = '#f39c12';
    localStorage.setItem('darkMode', 'enabled');
}

// Fonction pour désactiver le mode sombre
function disableDarkMode() {
    document.body.classList.remove('dark-mode');
    toggleButton.textContent = '🌙 Mode Sombre';
    toggleButton.style.backgroundColor = '#2c3e50';
    localStorage.setItem('darkMode', 'disabled');
}

// Gestionnaire d'événement pour le clic sur le bouton
toggleButton.addEventListener('click', () => {
    if (document.body.classList.contains('dark-mode')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});

// Styles CSS pour le mode sombre (injectés dynamiquement)
const darkModeStyles = `
    .dark-mode {
        background-color: #1a1a1a !important;
        color: #e0e0e0 !important;
    }
    
    .dark-mode header,
    .dark-mode footer {
        background-color: #111 !important;
        color: #ccc !important;
    }
    
    .dark-mode header h1 {
        color: #fff !important;
    }
    
    .dark-mode header p,
    .dark-mode footer p {
        color: #aaa !important;
    }
    
    .dark-mode h2 {
        color: #3498db !important;
        border-bottom-color: #3498db !important;
    }
    
    .dark-mode h3 {
        color: #ecf0f1 !important;
        background-color: #2c3e50 !important;
    }
    
    .dark-mode li {
        background-color: #2c3e50 !important;
        color: #ecf0f1 !important;
        border-left-color: #3498db !important;
    }
    
    .dark-mode li:hover {
        background-color: #34495e !important;
    }
    
    .dark-mode table {
        background-color: #2c3e50 !important;
        color: #ecf0f1 !important;
    }
    
    .dark-mode thead {
        background-color: #1a252f !important;
    }
    
    .dark-mode tbody tr:nth-child(even) {
        background-color: #34495e !important;
    }
    
    .dark-mode tbody tr:hover {
        background-color: #3d566e !important;
    }
    
    .dark-mode td:last-child:contains("Disponible") {
        color: #2ecc71 !important;
    }
    
    .dark-mode td:last-child:contains("Emprunté") {
        color: #e74c3c !important;
    }
    
    .dark-mode main {
        background-color: rgba(0, 0, 0, 0.7) !important;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5) !important;
    }
    
    .dark-mode hr {
        background-color: #3498db !important;
    }
`;

// Injection des styles dans le document
const styleElement = document.createElement('style');
styleElement.textContent = darkModeStyles;
document.head.appendChild(styleElement);