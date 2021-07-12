const router = require("express").Router();
const Account = require("./accounts-model");
const md = require("./accounts-middleware");

router.get("/", async (req, res, next) => {
  try {
    const data = await Account.getAll();
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", md.checkAccountId, (req, res, next) => {
  res.json(req.account);
});

router.post("/", (req, res, next) => {
  try {
    res.json("post new account");
  } catch (err) {
    next(err);
  }
});

router.put("/:id", (req, res, next) => {
  try {
    res.json("update account");
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", (req, res, next) => {
  try {
    res.json("delete account");
  } catch (err) {
    next(err);
  }
});

router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
