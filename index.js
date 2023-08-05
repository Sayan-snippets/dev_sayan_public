const db_conn = require("./db_config")
const mongoose = require('mongoose');
const data = require("./data")
const express = require("express");


const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static("static"));
app.set('view engine','ejs');
app.set('views', __dirname + '/views');


app.get("/getPersonalData" , async(req,res)=>{
    try {
        // Connect to the database
        await db_conn.connectToDB();
    
        // Fetch data from a collections
        const documents = await data.getPersonalData('professional_details');
        const education = await data.getEducationData('education');
        const experience = await data.getExperienceData('experience');
        const techstack = await data.getExperienceData('techstack');
        const img = await data.getProjectImagesData('project');

        res.render("index",{ doc:documents , education : education , experience : experience , techstack : techstack , img : img })

      } catch (err) {
        console.error('Error:', err);
      } finally {

        mongoose.connection.close();
      }
})


app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
  });