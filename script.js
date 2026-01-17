// 1. Fonction de recherche pour la page offres.html
document.addEventListener('keyup', (e) => {
    if (e.target.id === 'searchInput') {
        let filter = e.target.value.toLowerCase();
        let items = document.querySelectorAll('.list-group-item');

        items.forEach(item => {
            let text = item.textContent.toLowerCase();
            item.style.display = text.includes(filter) ? "" : "none";
        });
    }
});

// 2. Fonction pour commander un CV (Page creer-cv.html)
function commanderCV() {
    const nom = document.getElementById('nom').value;
    const infos = document.getElementById('infos').value;
    
    // Ton numéro WhatsApp (format international sans le +)
    const monNumero = "229XXXXXXXX"; // REMPLACE PAR TON VRAI NUMÉRO ICI

    if(nom === "" || infos === "") {
        alert("Veuillez remplir tous les champs !");
        return;
    }

    const message = `Bonjour Emploi Bénin, je souhaite commander un CV.\n\n` +
                    `*Nom:* ${nom}\n` +
                    `*Détails:* ${infos}\n\n` +
                    `Je m'apprête à faire le dépôt de 500F.`;

    // Encode le message pour l'URL
    const url = `https://wa.me/${monNumero}?text=${encodeURIComponent(message)}`;
    
    // Ouvre WhatsApp dans un nouvel onglet
    window.open(url, '_blank');
}