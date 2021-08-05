const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept,Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTION');
  next();
});

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 3000;


const businessSectorRoutes = require("./routes/business_sector");
const certificationRoutes = require("./routes/certification");
const certSectorRoutes = require("./routes/certification_sector");
const cityRoutes = require("./routes/city");
const countryRoutes = require("./routes/country");
const districtRoutes = require("./routes/district");
const identificatioDocRoutes = require("./routes/identification_doc");
const jobProfileRoutes = require("./routes/job_profile");
const languageRoutes = require("./routes/language");
const roleRoutes = require("./routes/role");
const stateRoutes = require("./routes/state");
const studentAddrRoutes = require("./routes/student_addr");
const studentDetailsRoutes = require("./routes/student_details");
const studyStreamRoutes = require("./routes/study_stream");
const studySubStreamRoutes = require("./routes/study_sub_stream");
const universityRoutes = require("./routes/university");
const userInternalRoutes = require("./routes/user_internal");
// const userRoutes = require("./routes/user");

app.use("/api/business", businessSectorRoutes);
app.use("/api/certification", certificationRoutes);
app.use("/api/csector", certSectorRoutes);
app.use("/api/city", cityRoutes);
app.use("/api/country", countryRoutes);
app.use("/api/district", districtRoutes);
app.use("/api/idoc", identificatioDocRoutes);
app.use("/api/jprofile", jobProfileRoutes);
app.use("/api/lang", languageRoutes);
app.use("/api/role", roleRoutes);
app.use("/api/state", stateRoutes);
app.use("/api/saddress", studentAddrRoutes);
app.use("/api/sdetails", studentDetailsRoutes);
app.use("/api/sstream", studyStreamRoutes);
app.use("/api/ssubtream", studySubStreamRoutes);
app.use("/api/university", universityRoutes);
app.use("/api/uinternal", userInternalRoutes);
// app.use("/api/user", userRoutes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
