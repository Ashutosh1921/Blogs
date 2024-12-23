// here new users will able to sign in to site.
import { Router } from "express";
import jwt from "jsonwebtoken";

// we create and send webtoken both times when signup and login but for diff reason 
// after signup we want user to be auto logged in and don't have to repaeat login process again.
Router.post("/signup", async (req, res) => {

})