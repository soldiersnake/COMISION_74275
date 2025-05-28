const express = require("express");
const path = require("path");
const usersRoute = require("./routes/users.router");
const petsRoute = require("./routes/pets.router");
const uploader = require("./utils/uploader");

const exphbs = require("express-handlebars");

const port = 8080;
const app = express();
app.use(express.json()); // para trabajar con JSON
app.use(express.urlencoded({ extended: true })); // para trabajar con FORMULARIOS
// app.use(express.static("./public"));
app.use(express.static(path.join(__dirname, "public")));

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "/views"));

app.use("/api/users", usersRoute);
app.use("/api/pets", petsRoute);

app.post("/upload", uploader.single("file"), (req, res) => {
  res.send("Archivo subido correctamente!!");
});

const mascotas = [];
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "formulario.html"));
// });

app.post("/mascotas", uploader.single("file"), (req, res) => {
  const { nombre, tipo } = req.body;
  const file = req.file;

  if (!file) {
    return res.status(400).send(" X no se subio ninguna imagen");
  }

  const nuevaMocota = {
    nombre,
    tipo,
    thumbnail: `/img/${file.filename}`,
  };

  mascotas.push(nuevaMocota);
  res.status(201).json({
    mensaje: "Mascota registrada correctamente",
    mascotas: nuevaMocota,
  });
});

app.get("/", (req, res) => {
  res.render("index", { name: "Messi" });
});

const users = [
  {
    nombre: "Goku",
    apellido: "Saiyan",
    edad: 30,
    correo: "mail@mail.com",
    telefono: "123345",
  },
  {
    nombre: "Bulma",
    apellido: "Terricola",
    edad: 33,
    correo: "mail@mail.com",
    telefono: "55555",
  },
  {
    nombre: "Piccoro",
    apellido: "nemakeano",
    edad: 15,
    correo: "mail@mail.com",
    telefono: "333333",
  },
  {
    nombre: "Vegeta",
    apellido: "Saiyan",
    edad: 32,
    correo: "mail@mail.com",
    telefono: "66666",
  },
];

app.get("/random", (req, res) => {
  const randomUser = users[Math.floor(Math.random() * users.length)];
  res.render("random", randomUser);
});

const food = [
  { name: "Hamburguesa", price: 200 },
  { name: "Pizza", price: 150 },
  { name: "Milanesa Napolitana", price: 280 },
  { name: "Ñoquis", price: 100 },
  { name: "Burritos", price: 300 },
];

app.get("/dato-dinamico", (req, res) => {
  let testUser = {
    name: "Hernan",
    last_name: "Martinez",
    role: "admin",
  };

  res.render("dinamico", {
    user: testUser,
    isAdmin: testUser.role === "admin",
    food,
  });
});

// ULTIMO EJERCICIO FORMULARIO CON HANDLEBARS Y EVENTOS
const usuarios = []; // simula ser datos en memoria
// MOSTRAMOS PLANTILLA FORMULARIO
app.get("/register", (req, res) => {
  res.render("register");
});
// enviar formulario
app.post("/user", (req, res) => {
  const { nombre, correo, password } = req.body;

  if (!nombre || !correo || !password) {
    return res.status(400).send("Todos los campos son obligatorios");
  }

  usuarios.push({ nombre, correo, password });
  res.render("users", { usuarios });
});

app.get("/users", (req, res) => {
  res.render("users", { usuarios });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el ${port}`);
});
