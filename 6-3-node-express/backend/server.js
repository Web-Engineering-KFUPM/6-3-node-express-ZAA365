// TODO 1: Import and Create express app instance
/*TODO 1:Initialize Express App
-------------------------------------------------------------------

In server.js, set up the Express server.

Tasks:
- Import express
- Create the app
- Define PORT

Hint:
- call the imported express function

Syntax hint:*/
   import express from "express";
    const app = express();
    const PORT = 3000

// TODO 1: Define server port
app.listen(PORT, () => {
  console.log(`app listening at http://localhost:${PORT}`);
});

// TODO 4: Import and Apply CORS middleware
/*-------------------------------------------------------------------
TODO 4:
Enable CORS
-------------------------------------------------------------------

In server.js, allow frontend to access backend.

Tasks:
- Import cors
- Use it as middleware

Syntax hint:*/
   import cors from "cors";
   app.use(cors() );


// TODO 5: Import and apply Morgan middleware
/*TODO 5:
Add Morgan Logger
-------------------------------------------------------------------

In server.js, add morgan to log incoming requests.

Tasks:
- Import morgan
- Use it as middleware

Goal:
Log request details in the terminal whenever the server receives a request.

Hint:
- Use the "dev" logger format

Syntax hint:
   import morgan from "morgan";
   app.use(morgan("dev"));*/
   import morgan from "morgan";
   app.use(morgan("dev"));
/*/*
--------------------------------
TODO 6.1: Root Route
--------------------------------

Path: "/"

Goal:
Send plain text response

Syntax hint:*/
// TODO 6.1: Create root route "/"
app.get("/", (req, res) => {
     res.send("Hello, World!");
   });
/*--------------------------------
TODO 6.2: Quote API Route
--------------------------------

Path: "/api/quote"

Goal:
Return a random quote as JSON

Syntax hint:*/
// TODO 6.2: Create "/api/quote" route
app.get("/api/quote", (req, res) => {
     const quote = "This is a quote!";
     res.json({ quote });
   });


// TODO 7: Start server using app.listen
