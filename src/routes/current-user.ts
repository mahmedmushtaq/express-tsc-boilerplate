import express from "express";

const router = express.Router();

// currentUser,

router.get("/api/users/currentUser", async (req, res) => {
  //  res.send({ currentUser: req.currentUser || null });
});

export { router as currentUserRouter };
