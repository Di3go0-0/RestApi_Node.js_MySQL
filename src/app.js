import express from "express"; //Framework para crear servidores
import employeesRoutes from "./routes/employees.routes.js"; //Rutas de empleados
import indexRoutes from "./routes/index.routes.js";

const app = express();

app.use(express.json());

app.use("/api", employeesRoutes);
app.use(indexRoutes);

app.use((req, res, next) => {
    res.status(404).json({ message: "Endpoint not found" });
  });

export default app;