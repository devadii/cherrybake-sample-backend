import { Router } from "express";
import { sample_user } from "../data.js";
import { BAD_REQUEST } from "../constants/httpStatus.js";

const router = Router();

// Utilising req.param would show up in the URL, use req.body
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  // Using the 'find' function to search whether the input email and password matches one in the sample database
  const user = sample_user.find(
    (user) => user.email === email && user.password === password
  );
  console.log(user);
  if (user) {
    res.send({ loggedIn: true, user });
  } else {
    res.send({ loggedIn: false });
  }
});

export default router;