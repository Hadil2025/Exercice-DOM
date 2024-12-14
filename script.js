const articles = document.querySelectorAll('.article');


function mettreAJourPrixTotal() {
    let total = 0;
    articles.forEach(article => {
        const quantite = parseInt(article.querySelector('.quantite').textContent);
        const prix = parseFloat(article.querySelector('.prix').textContent);
        total += quantite * prix;
    });
    document.getElementById('prix-total').textContent = `Prix total : ${total} €`;
}

articles.forEach(article => {
    const plusButton = article.querySelector('.plus');
    const minusButton = article.querySelector('.minus');
    const quantiteSpan = article.querySelector('.quantite');

    plusButton.addEventListener('click', () => {
        let quantite = parseInt(quantiteSpan.textContent);
        quantite++;
        quantiteSpan.textContent = quantite;
        mettreAJourPrixTotal();
    });

    minusButton.addEventListener('click', () => {
        let quantite = parseInt(quantiteSpan.textContent);
        if (quantite > 1) { 
            quantite--;
            quantiteSpan.textContent = quantite;
            mettreAJourPrixTotal();
        }
    });
});

articles.forEach(article => {
    const supprimerButton = article.querySelector('.supprimer');

    supprimerButton.addEventListener('click', () => {
        article.remove(); 
        mettreAJourPrixTotal();
    });
});

articles.forEach(article => {
    const aimerButton = article.querySelector('.aimer');

    aimerButton.addEventListener('click', () => {
        aimerButton.classList.toggle('aime'); 
    });
});

const style = document.createElement('style');
style.innerHTML = `
    .aime {
     color: red; /* Le cœur devient rouge quand l'article est aimé */
    } ` ;
document.head.appendChild(style);
