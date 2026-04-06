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


// TODO 5: Import and apply Morgan middleware


// TODO 6.1: Create root route "/"


// TODO 6.2: Create "/api/quote" route


// TODO 7: Start server using app.listen
