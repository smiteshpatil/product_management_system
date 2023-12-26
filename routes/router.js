const express = require("express");
var router = express.Router();
var connection = require("../db/dbconnect");

router.get("/products", function (req, resp) {
  connection.query("select * from products", (err, data, fields) => {
    if (err) {
      console.log(err);
      resp.status(500).render("error-page");
    } else {
      resp.render("index", { proddata: data });
    }
  });
});

// GET: display form to add new product
router.get("/displayaddform", function (req, resp) {
  resp.render("add-product");
});

//POST: Add new to product to the DB
router.post("/addproduct", function (req, resp) {
  connection.query(
    "insert into products values(?,?,?,?)",
    [req.body.pid, req.body.pname, req.body.qty, req.body.price],
    (err, result) => {
      if (err) {
        console.log(err);
        resp.status(500).render("error-page");
      } else {
        resp.redirect("/products");
      }
    }
  );
});

// GET: Edit
router.get("/edit/:pnum", function (req, resp) {
  connection.query(
    "select * from products where pid=?",
    [req.params.pnum],
    function (err, data) {
      if (err) {
        console.log(err);
        resp.status(500).render("error-page");
      } else {
        resp.render("edit-product", { prod: data[0] });
      }
    }
  );
});

//POST: /updateproduct
router.post("/updateproduct", function (req, resp) {
  connection.query(
    "update products set pname=?,qty=?,price=? where pid=?",
    [req.body.pname, req.body.qty, req.body.price, req.body.pid],
    function (err, data) {
      if (err) {
        console.log(err);
        resp.status(500).render("error-page");
      } else {
        resp.redirect("/products");
      }
    }
  );
});

//GET: delete
router.get("/delete/:pnum", function (req, resp) {
  connection.query(
    "delete from products where pid=?",
    [req.params.pnum],
    function (err, data) {
      if (err) {
        console.log(err);
        resp.status(500).render("error-page");
      } else {
        resp.redirect("/products");
      }
    }
  );
});

module.exports = router;
