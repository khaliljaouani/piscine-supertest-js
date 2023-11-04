const request = require("supertest");
const app = require("./index");

describe("GET /", () => {
  test("Test 1", (done) => {
    request(app)
      .get("/")
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ id: 1, name: "John Doe" }]);
        done();
      });
  });
});

describe("POST /:param", () => {
  test("Test 1/2", (done) => {
    request(app)
      .post("/1")
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ error: false, num: "1" }]);
        done();
      });
  });
});

//Exercice1//

describe("POST /s1/exercice1", () => {
  test("Renvoie une erreur si n1 est null", async () => {
    const res = await request(app)
      .post("/s1/exercice1")
      .send({ n1: null, n2: 2 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("Renvoie une erreur si n2 est null", async () => {
    const res = await request(app)
      .post("/s1/exercice1")
      .send({ n1: 1, n2: null });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("Renvoie une erreur si n1 et n2 sont null", async () => {
    const res = await request(app)
      .post("/s1/exercice1")
      .send({ n1: null, n2: null });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("Calcule correctement la somme de n1 et n2", async () => {
    const res = await request(app).post("/s1/exercice1").send({ n1: 1, n2: 2 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: 3 }]);
  });
});

//Exercice2//

describe("POST /s1/exercice2", () => {
    test("Calcule correctement la soustraction de n1 et n2", async () => {
      const res = await request(app).post("/s1/exercice2").send({ n1: 5, n2: 3 });
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: 2 }]);
    });
  
    test("Renvoie une erreur si n1 est null", async () => {
      const res = await request(app)
        .post("/s1/exercice2")
        .send({ n1: null, n2: 3 });
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
    });
  
    test("Renvoie une erreur si n2 est null", async () => {
      const res = await request(app)
        .post("/s1/exercice2")
        .send({ n1: 5, n2: null });
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
    });
  
    test("Renvoie une erreur si n1 et n2 sont null", async () => {
      const res = await request(app)
        .post("/s1/exercice2")
        .send({ n1: null, n2: null });
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
    });
  });

  //Exercice3//

describe("POST /s1/exercice3", () => {
  test("Renvoie une erreur si n1 est null", async () => {
    const res = await request(app)
      .post("/s1/exercice3")
      .send({ n1: null, n2: 2 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("Renvoie une erreur si n2 est null", async () => {
    const res = await request(app)
      .post("/s1/exercice3")
      .send({ n1: 1, n2: null });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("Renvoie une erreur si n1 et n2 sont null", async () => {
    const res = await request(app)
      .post("/s1/exercice3")
      .send({ n1: null, n2: null });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("Calcule correctement la multiple de n1 et n2", async () => {
    const res = await request(app)
    .post("/s1/exercice3")
    .send({ n1: 2, n2: 2 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: 4 }]);
  });
});

//Exercice4//

describe("POST /s1/exercice4", () => {
  test("Renvoie une erreur si n1 est null", async () => {
    const res = await request(app)
      .post("/s1/exercice4")
      .send({ n1: null, n2: 2 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("Renvoie une erreur si n2 est null", async () => {
    const res = await request(app)
      .post("/s1/exercice4")
      .send({ n1: 1, n2: null });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("Renvoie une erreur si n1 et n2 sont null", async () => {
    const res = await request(app)
      .post("/s1/exercice4")
      .send({ n1: null, n2: null });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("Renvoie une erreur si n2 = 0", async () => {
    const res = await request(app)
      .post("/s1/exercice4")
      .send({ n2 : 0});
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("Calcule correctement la division de n1 et n2", async () => {
    const res = await request(app).post("/s1/exercice4").send({ n1: 6, n2: 2 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: 3 }]);
  });
});

//Exercice 5 //

describe("POST /s1/exercice5", () => {

  test("Renvoie une erreur si n1 est null", async () => {
    const res = await request(app)
    .post("/s1/exercice5")
    .send({ n1: null });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });
  
  test("Factorielle de n1", async () => {
    const res = await request(app).post("/s1/exercice5").send({ n1: 3 });
    expect(200);
    expect(res.body).toEqual([{ reponse: 6 }]);
  });
});

describe("POST /s1/exercice6", () => {
  test("Renvoie une erreur si n1 est null", async () => {
    const res = await request(app).post("/s1/exercice6").send({ n1: null });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("n1 est un nombre impair ou pair", async () => {
    const res = await request(app).post("/s1/exercice6").send({ n1: 5 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "impair" }]);
  });

  test("n1 est un nombre impair ou pair", async () => {
    const res = await request(app).post("/s1/exercice6").send({ n1: 4 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "pair" }]);
  });
});

describe("POST /s1/exercice7", () => {
  test("Renvoie une erreur si n1 est null", async () => {
    const res = await request(app).post("/s1/exercice7").send({ n1: null });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("celsius en fahrenheit", async () => {
    const res = await request(app).post("/s1/exercice7").send({ n1: 5 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: 41 }]);
  });
});

describe("POST /s1/exercice8", () => {
  test("Renvoie une erreur si n1 est null", async () => {
    const res = await request(app).post("/s1/exercice8").send({ n1: null });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("calcul aire d'un cercle", async () => {
    const res = await request(app).post("/s1/exercice8").send({ n1: 3 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: 28.274333882308138 }]);
  });
});

describe("POST /s1/exercice9", () => {
  test("Renvoie une erreur si n1 est null", async () => {
    const res = await request(app).post("/s1/exercice9").send({ n1: null });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un mot valide" }]);
  });

  test("n1 n'est pas un palindrome", async () => {
    const res = await request(app).post("/s1/exercice9").send({ n1: "test" });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: false }]);
  });

  test("est un palindrome", async () => {
    const res = await request(app).post("/s1/exercice9").send({ n1: "radar" });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: true }]);
  });
});


describe("POST /s1/exercice10", () => {
  test("Renvoie une erreur si n1 est null", async () => {
    const res = await request(app)
      .post("/s1/exercice10")
      .send({ n1: null, n2: 2 });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("Renvoie une erreur si n2 est null", async () => {
    const res = await request(app)
      .post("/s1/exercice10")
      .send({ n1: 1, n2: null });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("Renvoie une erreur si n1 et n2 sont null", async () => {
    const res = await request(app)
      .post("/s1/exercice10")
      .send({ n1: null, n2: null });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("plus grand commun diviseur de n1 et n2", async () => {
    const res = await request(app)
      .post("/s1/exercice10")
      .send({ n1: 6, n2: 3 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: 3 }]);
  });
});

describe("POST /s2/exercice1", () => {
  test("doit renvoyer la date d'aujourd'hui moins 10 ans", async () => {
    const dateActuelle = new Date();
    const année = dateActuelle.getFullYear() - 10;
    const mois = ("0" + (dateActuelle.getMonth() + 1)).slice(-2);
    const jour = ("0" + dateActuelle.getDate()).slice(-2);
    const dateAttendue = `${année}-${mois}-${jour}`;

    const response = await request(app).post("/s2/exercice1").expect(200);

    expect(response.body[0].reponse).toBe(dateAttendue);
  });
});

describe("POST /s2/exercice2", () => {
  test("doit renvoyer une date formatée en 'jj/mm/aaaa'", async () => {
    // Vous devez envoyer une date valide dans le corps de la requête.
    const dateAEnvoyer = new Date(2023, 10, 2); // pour 2 Novembre 2023
    const dateFormateeAttendue = "02/11/2023";

    const response = await request(app)
      .post("/s2/exercice2")
      .send({ date: dateAEnvoyer.toISOString() }) // Supposant que le corps de la requête attend une date ISO.
      .expect(200);

    expect(response.body[0].reponse).toBe(dateFormateeAttendue);
  });

  test("doit renvoyer une erreur si la date est invalide", async () => {
    const dateAEnvoyer = "date invalide";

    const response = await request(app)
      .post("/s2/exercice2")
      .send({ date: dateAEnvoyer })
      .expect(400);

    expect(response.body.reponse).toBe("Veuillez entrer une date valide.");
  });

  test("doit renvoyer une erreur si la date est undefined", async () => {
    const dateAEnvoyer = undefined;

    const response = await request(app)
      .post("/s2/exercice2")
      .send({ date: dateAEnvoyer })
      .expect(400);

    expect(response.body.reponse).toBe("Veuillez entrer une date valide.");
  });

  test("doit renvoyer une erreur si la date est undefined", async () => {
    const dateAEnvoyer = undefined;

    const response = await request(app)
      .post("/s2/exercice2")
      .send({ date: dateAEnvoyer })
      .expect(400);

    expect(response.body.reponse).toBe("Veuillez entrer une date valide.");
  });
});

describe("POST /s2/exercice3", () => {
  test("calcule de jours entre deux dates", async () => {
    const date1 = new Date("2023-01-01");
    const date2 = new Date("2023-01-10");

    const expectedDifference = (date2 - date1) / (1000 * 60 * 60 * 24);

    const response = await request(app)
      .post("/s2/exercice3")
      .send({ date1: date1.toISOString(), date2: date2.toISOString() });

    expect(response.statusCode).toBe(200);
    expect(response.body[0].reponse).toBe(expectedDifference);
  });

  test("dates invalides", async () => {
    const invalidDate1 = "not-a-date";
    const date2 = new Date("2023-01-10");

    const response = await request(app)
      .post("/s2/exercice3")
      .send({ date1: invalidDate1, date2: date2.toISOString() });

    expect(response.statusCode).toBe(400);
    expect(response.body.reponse).toBe("Veuillez entrer des dates valides.");
  });

  test("date1 > date2", async () => {
    const date1 = new Date("2023-01-10");
    const date2 = new Date("2023-01-01");

    const response = await request(app)
      .post("/s2/exercice3")
      .send({ date1: date1.toISOString(), date2: date2.toISOString() });

    expect(response.statusCode).toBe(400);
    expect(response.body.reponse).toBe(
      "La première date doit être antérieure à la deuxième."
    );
  });
});

describe("POST /s2/exercice4", () => {
  test("ajoute des jours a une date", async () => {
    const date = new Date("2023-01-01").toISOString();
    const jours = 10;
    const expectedDate = new Date("2023-01-11").toISOString();

    const response = await request(app)
      .post("/s2/exercice4")
      .send({ date, jours });

    expect(response.statusCode).toBe(200);
    expect(response.body.reponse).toBe(expectedDate);
  });

  test("erreur si les jours sont négatifs", async () => {
    const date = new Date("2023-01-01").toISOString();
    const jours = -10;
    const expectedDate = new Date("2023-01-11").toISOString();

    const response = await request(app)
      .post("/s2/exercice4")
      .send({ date, jours });

    expect(response.statusCode).toBe(400);
    expect(response.body.reponse).toBe("Veuillez entrer un nombre positif.");
  });

  test("erreur si les jours sont nuls", async () => {
    const date = new Date("2023-01-01").toISOString();
    const jours = null;

    const response = await request(app)
      .post("/s2/exercice4")
      .send({ date, jours });

    expect(response.statusCode).toBe(400);
    expect(response.body.reponse).toBe("Veuillez entrer un nombre.");
  });

  test("erreur si on ne rajoute pas de jours", async () => {
    const date = new Date("2023-01-01").toISOString();
    const jours = 0;

    const response = await request(app)
      .post("/s2/exercice4")
      .send({ date, jours });

    expect(response.statusCode).toBe(400);
    expect(response.body.reponse).toBe("Veuillez entrer un nombre.");
  });

  test("erreur si les jours sont undefined", async () => {
    const date = new Date("2023-01-01").toISOString();
    const jours = undefined;

    const response = await request(app)
      .post("/s2/exercice4")
      .send({ date, jours });

    expect(response.statusCode).toBe(400);
    expect(response.body.reponse).toBe("Veuillez entrer un nombre.");
  });

  test("erreur si les jours ne sont pas un nombre", async () => {
    const date = new Date("2023-01-01").toISOString();
    const jours = "not-a-number";

    const response = await request(app)
      .post("/s2/exercice4")
      .send({ date, jours });

    expect(response.statusCode).toBe(400);
    expect(response.body.reponse).toBe("Données invalides.");
  });

  test("erreur si la date est invalide", async () => {
    const invalidDate = "not-a-date";
    const jours = "not-a-number";

    const response = await request(app)
      .post("/s2/exercice4")
      .send({ date: invalidDate, jours });

    expect(response.statusCode).toBe(400);
    expect(response.body.reponse).toBe("Données invalides.");
  });
});