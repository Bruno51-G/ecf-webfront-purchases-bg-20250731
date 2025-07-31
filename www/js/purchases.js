const nom = document.getElementById('nom');
const prenom = document.getElementById('prenom');
const adresseMail = document.getElementById('adresseMail');
const services = document.getElementById('services');
const nomArticle = document.getElementById('nomArticle');
const descriptionArticle = document.getElementById('descriptionArticle');
const quantiteArticle = document.getElementById('quantiteArticle');
const prixUnitaire = document.getElementById('prixUnitaire');
const dateLivraison = document.getElementById('dateLivraison');
const justificationDemande = document.getElementById('justificationDeamnde');
const envoieDemande = document.getElementById('envoieDemande');
const annuleDemande = document.getElementById('annuleDemande');
const alerte = document.getElementById('alerte');


function verifIdentiter(event){
    
    event.preventDafault();

    let verifNom = nom.value.trim().length;
    let verifPrenom = prenom.value.trim().length;

    if (verifNom < 3){
        alerte.textContent = 'Votre nom doit avoir au minimum 3 caractères'
        return;
    }

    if (verifPrenom < 3){
        alerte.textContent = 'Votre prénom doit avoir au minimum 3 caractères'
        return;
    }

    alerte.textContent = 'Nom et prénom valide'
}

envoieDemande.addEventListener('click', verifIdentiter);
