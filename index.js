const express = require("express");
const addition = require("./s1/exercice1");
const soustraction = require("./s1/exercice2");
const multiplication = require("./s1/exercice3");
const division = require("./s1/exercice4");
const factorielle = require("./s1/exercice5");
const estPairOuImpair = require("./s1/exercice6");
const celsiusEnFahrenheit = require("./s1/exercice7");
const aireCercle = require("./s1/exercice8");
const estPalindrome = require("./s1/exercice9");
const pgcd = require("./s1/exercice10");

const dateIlYADixAns = require("./s2/exercice1");
const formaterDate = require("./s2/exercice2");
const differenceEnJours = require("./s2/exercice3");
const ajouterJours = require("./s2/exercice4");
const estAnneeBissextile = require("./s2/exercice5");
const premierJourDuMois = require("./s2/exercice6");
const dernierJourDuMois = require("./s2/exercice7");
const formaterDuree = require("./s2/exercice8");
const chevauchementDates = require("./s2/exercice9");
const calculerAge = require("./s2/exercice10");

const app = express();
const PORT = 3000;
app.use(express.json());

function estNombreValide(n) {
  return n !== null && n !== undefined && typeof n === "number" && !isNaN(n);
}

app.get("/", (req, res) => {
  return res.json([{ id: 1, name: "John Doe" }]);
});

app.post("/:param", (req, res) => {
  return res.json([{ error: false, num: req.params.param }]);
});

//-----Exercice 1----------//

app.post("/s1/exercice1", (req, res) => {
  const n1 = req.body.n1;
  const n2 = req.body.n2;

  if (n1 == null || n2 == null) {
    return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
  }

  if (!estNombreValide(n1)) {
    return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
  }

  if (!estNombreValide(n2)) {
    return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
  }

  let a = addition(n1, n2);
  return res.json([{ reponse: a }]);
});

//-----Exercice 2----------//

app.post("/s1/exercice2", (req, res) => {
    const n1 = req.body.n1;
    const n2 = req.body.n2;
  
    if (n1 == null || n2 == null) {
        return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
      }
      if (!estNombreValide(n1)) {
        return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
      }
    
      if (!estNombreValide(n2)) {
        return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
      }
  
    let a = soustraction(n1, n2);
    return res.json([{ reponse: a }]);
  });

  //-----Exercice 3----------//

  app.post("/s1/exercice3", (req, res) => {
    const n1 = req.body.n1;
    const n2 = req.body.n2;
  
    if (n1 == null || n2 == null) {
        return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
      }
      if (!estNombreValide(n1)) {
        return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
      }
    
      if (!estNombreValide(n2)) {
        return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
      }
  
    let a = multiplication(n1, n2);
    return res.json([{ reponse: a }]);
  });

    //-----Exercice 4----------//

  app.post("/s1/exercice4", (req, res) => {
    const n1 = req.body.n1;
    const n2 = req.body.n2;
  
    if (n1 == null || n2 == null) {
        return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
      }
      if (!estNombreValide(n1)) {
        return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
      }
    
      if (!estNombreValide(n2)) {
        return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
      }

      if (n2 == 0) {
        return res.json([{ reponse: "En peut pas diviser sur le zero" }]);
      }
  
    let a = division(n1, n2);
    return res.json([{ reponse: a }]);
  });

      //-----Exercice 5---------//

  app.post("/s1/exercice5", (req, res) => {
    const n1 = req.body.n1;
  
    if (!estNombreValide(n1)) {
      return res
        .status(200)
        .json([{ reponse: "Veuillez entrer un nombre valide" }]);
    }
  
    let a = factorielle(n1);
    return res.json([{ reponse: a }]);
  });

       //-----Exercice 6---------//

  app.post("/s1/exercice6", (req, res) => {
    const n1 = req.body.n1;
  
    if (!estNombreValide(n1)) {
      return res
        .status(400)
        .json([{ reponse: "Veuillez entrer un nombre valide" }]);
    }
    let a = estPairOuImpair(n1);
    return res.json([{ reponse: a }]);
  });

     //-----Exercice 7---------//

  app.post("/s1/exercice7", (req, res) => {
    const n1 = req.body.n1;
  
    if (!estNombreValide(n1)) {
      return res
        .status(400)
        .json([{ reponse: "Veuillez entrer un nombre valide" }]);
    }
    let a = celsiusEnFahrenheit(n1);
    return res.json([{ reponse: a }]);
  });
  
   //-----Exercice 8---------//

  app.post("/s1/exercice8", (req, res) => {
    const n1 = req.body.n1;
  
    if (!estNombreValide(n1)) {
      return res
        .status(400)
        .json([{ reponse: "Veuillez entrer un nombre valide" }]);
    }
    let a = aireCercle(n1);
    return res.json([{ reponse: a }]);
  });

   //-----Exercice 9---------//

  app.post("/s1/exercice9", (req, res) => {
    const n1 = req.body.n1;
  
    if (n1 === undefined || n1 === null || typeof n1 !== "string" || n1.trim() === "") {
      return res.status(400).json([{ reponse: "Veuillez entrer un mot valide" }]);
    }
  
    let a = estPalindrome(n1);
    return res.json([{ reponse: a }]);
  });

   //-----Exercice 10---------//

  app.post("/s1/exercice10", (req, res) => {
    const { n1, n2 } = req.body;
  
    if (!estNombreValide(n1) || !estNombreValide(n2)) {
      return res
        .status(400)
        .json([{ reponse: "Veuillez entrer un nombre valide" }]);
    }
  
    let resultat = pgcd(n1, n2); // Assurez-vous que la fonction pgcd est définie correctement
    return res.json([{ reponse: resultat }]);
  });

     //-----Exercice 1---------//

  app.post("/s2/exercice1", (req, res) => {
    const date = dateIlYADixAns();
    return res.json([{ reponse: date }]);
  });

     //-----Exercice 2---------//
  
  app.post("/s2/exercice2", (req, res) => {
    const date = new Date(req.body.date);
  
    if (isNaN(date.getTime())) {
      return res
        .status(400)
        .json({ reponse: "Veuillez entrer une date valide." });
    }
  
    if (date === null || date === undefined) {
      return res
        .status(400)
        .json({ reponse: "Veuillez entrer une date valide." });
    }
  
    const dateFormatee = formaterDate(date);
    return res.json([{ reponse: dateFormatee }]);
  });
  
   //-----Exercice 3---------//

  app.post("/s2/exercice3", (req, res) => {
    // Extraction des dates à partir du corps de la requête
    const date1 = new Date(req.body.date1);
    const date2 = new Date(req.body.date2);
  
    // Validation des dates
    if (isNaN(date1.getTime()) || isNaN(date2.getTime())) {
      return res
        .status(400)
        .json({ reponse: "Veuillez entrer des dates valides." });
    }
  
    if (date1.getTime() > date2.getTime()) {
      return res.status(400).json({
        reponse: "La première date doit être antérieure à la deuxième.",
      });
    }
  
    // Utilisation de la fonction differenceEnJours pour obtenir la différence
    const jours = differenceEnJours(date1, date2);
    return res.json([{ reponse: jours }]);
  });

     //-----Exercice 4---------//
  
  app.post("/s2/exercice4", (req, res) => {
    const { date, jours } = req.body;
  
    if (jours === 0 || jours === null || jours === undefined) {
      return res.status(400).json({ reponse: "Veuillez entrer un nombre." });
    }
  
    if (!date || isNaN(jours)) {
      return res.status(400).json({ reponse: "Données invalides." });
    }
  
    //si les jours sont négatifs
    if (jours < 0) {
      return res
        .status(400)
        .json({ reponse: "Veuillez entrer un nombre positif." });
    }
  
    const dateResultat = ajouterJours(new Date(date), jours);
    return res.json({ reponse: dateResultat.toISOString() });
  });

     //-----Exercice 5---------//
  
  app.post("/s2/exercice5", (req, res) => {
    let { annee } = req.body; // Utilisez let pour permettre la réassignation si nécessaire
  
    if (!annee && annee !== 0) {
      // Vérifie si annee est undefined, null, ou vide
      return res.status(400).json({ reponse: "Données invalides." }); // Use the correct message as per the test case
    }
  
    annee = Number(annee); // Convertit l'entrée en nombre si possible
  
    if (isNaN(annee)) {
      // Vérifie si annee n'est pas un nombre après la conversion
      return res
        .status(400)
        .json({ reponse: "Veuillez entrer une année valide." }); // Use the correct message as per the test case
    }
  
    if (annee < 0) {
      // Vérifie si l'année est positive
      return res.status(400).json({ reponse: "L'année doit être positive." });
    }
  
    try {
      const estBissextile = estAnneeBissextile(annee); // S'assure que cette fonction ne lance pas d'exception
      return res.json({ reponse: estBissextile });
    } catch (error) {
      // Gère toute exception éventuelle et renvoie un code 500
      return res.status(500).json({ reponse: "Erreur du serveur." });
    }
  });

app.post('/s2/exercice6', (req, res) => {
    return res.json([{ reponse: 0 }]);
});

app.post('/s2/exercice7', (req, res) => {
    return res.json([{ reponse: 0 }]);
});

app.post('/s2/exercice8', (req, res) => {
    return res.json([{ reponse: 0 }]);
});

app.post('/s2/exercice9', (req, res) => {
    return res.json([{ reponse: 0 }]);
});

app.post('/s2/exercice10', (req, res) => {
    return res.json([{ reponse: 0 }]);
});

app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});

module.exports = app