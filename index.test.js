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