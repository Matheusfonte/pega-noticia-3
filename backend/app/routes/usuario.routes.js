module.exports = (app) => {
  const usuarioController = require("../controllers/usuario.controller.js");
  app.post("/signup", usuarioController.signUp);
  app.post("/signin", usuarioController.signIn);
  app.get("/usuarios", usuarioController.findAll);
  app.put("/usuarios/:idUsuario", usuarioController.update);
  app.delete("/usuarios/:idUsuario", usuarioController.delete);
};
