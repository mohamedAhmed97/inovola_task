const app = require("./app")
app.listen(process.env.PORT, () => {
    console.log("Server Running on port "+process.env.PORT);
})