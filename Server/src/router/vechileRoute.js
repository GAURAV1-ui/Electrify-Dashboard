import express  from "express"; 
import {addVechile, getVechile} from '../controllers/controller.vechile.js'

const router = express.Router();

router.post("/addvechile", addVechile);

router.get("/getvechile", getVechile);


export default router;