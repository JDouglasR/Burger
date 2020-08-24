const express = require("express");
const burger = ("../models/burger.js");

const router = express.Router();

router.get("/", (req, res) => {
    cat.all((data) => {
      let burgerObject = {
        burger: data
      };
      console.log(burgerObject);
      res.render("index", burgerObject);
    });
  });
  
  router.post("/api/burgers", (req, res) => {
    burger.create([
      "name", "devoured"
    ], [
      req.body.name, req.body.devoured
    ], (result) => {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
  
  router.put("/api/burgers/:id", (req, res) => {
    let condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.update({
      devoured: req.body.devoured
    }, condition, (result) => {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

module.exports = router;