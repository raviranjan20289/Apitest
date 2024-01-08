exports.authenticateApiKey = async (req, res, next) => {
  try {
    const apiKey = req.headers["x-api-key"];

    console.log("Received API Key:", apiKey);

    if (apiKey === "Ravi123") {
      next();
    } else {
      console.log("Unauthorized Access");
      res.status(401).json({ error: "Unauthorized" });
    }
  } catch (error) {
    console.log("Internal Server Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
