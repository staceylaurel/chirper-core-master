import { Router } from "express";
import chirpstore from "../utils/chirpsstore";

const router = Router();

//GET
router.get("/", (req, res) => {
  const chirps = chirpstore.GetChirps();
  const manipulated = Object.keys(chirps).map((key) => {
    return {
      id: key,
      ...chirps[key],
    };
  });
  manipulated.pop();
  res.json(manipulated);
});

//GET
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const chirp = chirpstore.GetChirp(id);
  res.json({ id, ...chirp });
});

//POST body
router.post("/", (req, res) => {
  const newChirp = req.body;
  chirpstore.CreateChirp(newChirp);
  res.json({ msg: "chirpCreated" });
});

//PUT body
router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const editedChirp = req.body;
  chirpstore.UpdateChirp(id, editedChirp);
  res.json({ id, msg: "chirpEdited" });
});

//DELETE
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  chirpstore.DeleteChirp(id);
  res.json({ id, msg: "chirpBeGone" })
});

export default router;