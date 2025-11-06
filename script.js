console.log("Laboratoire prêt !")
const nom = "Nathan"; 
let age = 18;
/nom = "Un autre nom";/
console.log(age)
const motDePasseAttendu = "secret123";
let motDePasseUtilisateur = "12345";      
if (motDePasseUtilisateur===motDePasseAttendu) {
    console.log("Accès autorisé. Bienvenue !");
} else if (motDePasseUtilisateur.length<8) {
    console.log("Accès refusé. Votre mot de passe est trop court (8 caractères min).");
 } else {
    console.log("Accès refusé. Mot de passe incorrect.");
}
const moi = {
    prenom: "Nathan",
    nom: "Michon",
    age: 16,
    competences: ["HTML", "CSS"]
};
console.log(moi);
console.log(moi.prenom);
console.log(" Je m'appelle " + moi.prenom + " " +moi.nom)