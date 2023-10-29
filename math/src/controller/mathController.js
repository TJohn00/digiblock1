const add = async (req, res) => {
  try {
    const { num1,num2 } = req.body;
    res.status(201).json({ result: num1+num2});
  } catch (err) {
    console.log(err)
    res.status(400).json({ message: "Addition failed" });
  }
};

module.exports = { add };
