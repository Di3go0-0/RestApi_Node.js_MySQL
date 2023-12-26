import { Router } from "express";
import {
  getEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} from "../controllers/employees.controllers.js";

const router = Router();

router.get("/employees", getEmployees);
router.get("/employee/:id",getEmployee);
router.post("/employee", createEmployee);
router.patch("/employee/:id", updateEmployee);
router.delete("/employee/:id", deleteEmployee);

export default router;
