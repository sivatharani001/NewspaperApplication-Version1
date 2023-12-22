/* ------------------------------ MYSQL CONNECTION --------------------------*/
const express= require('express');
const app=express();
const mysql=require('mysql');
const path=require('path');
const ejs=require("ejs");
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"tharani",
    password:"t1a7@V01"
});

db.connect((err,result)=>{
    if (err) throw err;
    console.log("mysql connected.....");
})

const location=path.join(__dirname,"./public");

app.use(express.static(location));
app.use(express.urlencoded({extended:false}));

app.set("view engine","ejs");
/* ----------------------------------------------------------------------------------------*/

/* ------------------------------------- LOGIN PAGE VALUES -----------------------------------*/
app.post("/loginValue",(req,res)=>{
    const email=req.body.ename;
    const pass=req.body.pass;

    db.query('select * from signup where email=?',[email],(err,result)=>{
        if(result.length<1){
            res.render("signin",{msg:"email is invalid"})
        }
        else{
            if(result[0].pass==pass){
                name=result[0].firstname;

                res.render("comment")
            }
            else{
                res.render("signin",{msg:"password is invalid"})
            }
        }
    })
})
/* ------------------------------------------------------------------------------------------------*/

/* --------------------------------------- ENGLISH NEWSPAPER ---------------------------------------*/
db.query('select count(name) as count from english',(err,result)=>{
    // console.log(result);
    Ecount=result[0].count;
})
db.query('select * from english',(err,result)=>{
    english=result;
    console.log(english);
})

app.post("/EnglishEdit",(req,res)=>{
    console.log(req.body);
    const link=req.body.link;
    const name=req.body.name;
    const image=req.body.image;
    const Desc=req.body.description;
    const action=req.body.action;
    const ins={link:link,name:name,image:image,description:Desc};

    if(action=='save'){
        db.query('insert into english set ?',[ins],(err)=>{
            if(err) throw err;
            console.log("data saved.......");
            res.render("english_admin");
        })
    }

    else if(action=='update'){
        db.query('update english set ? where name=?',[ins,name],(err)=>{
            if(err) throw err;
            console.log("update successfull.......");
            res.render("english_admin");
        })
    }

    else{
        db.query('delete from english where name  = ?',[name],(err)=>{
            if(err) throw err;
            console.log("data deleted.......");
            res.render("english_admin");
        })
    }
})
/* ------------------------------------------------------------------------------------------------*/

/* ------------------------------------ HINDI NEWSPAPER -------------------------------------------*/
db.query('select count(name) as count from hindi',(err,result)=>{
    // console.log(result);
    Hcount=result[0].count;
})
db.query('select * from hindi',(err,result)=>{
    hindi=result;
    console.log(hindi);
})

app.post("/HindiEdit",(req,res)=>{
    console.log(req.body);
    const link=req.body.link;
    const name=req.body.name;
    const image=req.body.image;
    const Desc=req.body.description;
    const action=req.body.action;
    const ins={link:link,name:name,image:image,description:Desc};

    if(action=='save'){
        db.query('insert into hindi set ?',[ins],(err)=>{
            if(err) throw err;
            console.log("data saved.......");
            res.render("hindi_admin");
        })
    }

    else if(action=='update'){
        db.query('update hindi set ? where name=?',[ins,name],(err)=>{
            if(err) throw err;
            console.log("update successfull.......");
            res.render("hindi_admin");
        })
    }

    else{
        db.query('delete from hindi where name  = ?',[name],(err)=>{
            if(err) throw err;
            console.log("data deleted.......");
            res.render("hindi_admin");
        })
    }
})
/* ------------------------------------------------------------------------------------------------*/

/* ------------------------------------ KANNADA NEWSPAPER -------------------------------------------*/
db.query('select count(name) as count from kannada',(err,result)=>{
    // console.log(result);
    Kcount=result[0].count;
})
db.query('select * from kannada',(err,result)=>{
    kannada=result;
    console.log(kannada);
})

app.post("/KannadaEdit",(req,res)=>{
    console.log(req.body);
    const link=req.body.link;
    const name=req.body.name;
    const image=req.body.image;
    const Desc=req.body.description;
    const action=req.body.action;
    const ins={link:link,name:name,image:image,description:Desc};

    if(action=='save'){
        db.query('insert into kannada set ?',[ins],(err)=>{
            if(err) throw err;
            console.log("data saved.......");
            res.render("kannada_admin");
        })
    }

    else if(action=='update'){
        db.query('update kannada set ? where name=?',[ins,name],(err)=>{
            if(err) throw err;
            console.log("update successfull.......");
            res.render("kannada_admin");
        })
    }

    else{
        db.query('delete from kannada where name  = ?',[name],(err)=>{
            if(err) throw err;
            console.log("data deleted.......");
            res.render("kannada_admin");
        })
    }
})
/* ------------------------------------------------------------------------------------------------*/

/* ------------------------------------ MALAYALAM NEWSPAPER -------------------------------------------*/
db.query('select count(name) as count from malayalam',(err,result)=>{
    // console.log(result);
    Mcount=result[0].count;
})
db.query('select * from malayalam',(err,result)=>{
    malayalam=result;
    console.log(malayalam);
})

app.post("/MalayalamEdit",(req,res)=>{
    console.log(req.body);
    const link=req.body.link;
    const name=req.body.name;
    const image=req.body.image;
    const Desc=req.body.description;
    const action=req.body.action;
    const ins={link:link,name:name,image:image,description:Desc};

    if(action=='save'){
        db.query('insert into malayalam set ?',[ins],(err)=>{
            if(err) throw err;
            console.log("data saved.......");
            res.render("malayalam_admin");
        })
    }

    else if(action=='update'){
        db.query('update malayalam set ? where name=?',[ins,name],(err)=>{
            if(err) throw err;
            console.log("update successfull.......");
            res.render("malayalam_admin");
        })
    }

    else{
        db.query('delete from malayalam where name  = ?',[name],(err)=>{
            if(err) throw err;
            console.log("data deleted.......");
            res.render("malayalam_admin");
        })
    }
})
/* ------------------------------------------------------------------------------------------------*/

/* ------------------------------------ TAMIL NEWSPAPER -------------------------------------------*/
db.query('select count(name) as count from tamil',(err,result)=>{
    // console.log(result);
    T1count=result[0].count;
})
db.query('select * from tamil',(err,result)=>{
    tamil=result;
    console.log(tamil);
})

app.post("/TamilEdit",(req,res)=>{
    console.log(req.body);
    const link=req.body.link;
    const name=req.body.name;
    const image=req.body.image;
    const Desc=req.body.description;
    const action=req.body.action;
    const ins={link:link,name:name,image:image,description:Desc};

    if(action=='save'){
        db.query('insert into tamil set ?',[ins],(err)=>{
            if(err) throw err;
            console.log("data saved.......");
            res.render("tamil_admin");
        })
    }

    else if(action=='update'){
        db.query('update tamil set ? where name=?',[ins,name],(err)=>{
            if(err) throw err;
            console.log("update successfull.......");
            res.render("tamil_admin");
        })
    }

    else{
        db.query('delete from tamil where name  = ?',[name],(err)=>{
            if(err) throw err;
            console.log("data deleted.......");
            res.render("tamil_admin");
        })
    }
})
/* ------------------------------------------------------------------------------------------------*/

/* ------------------------------------ TELUGU NEWSPAPER -------------------------------------------*/
db.query('select count(name) as count from telugu',(err,result)=>{
    // console.log(result);
    T2count=result[0].count;
})
db.query('select * from telugu',(err,result)=>{
    telugu=result;
    console.log(telugu);
})

app.post("/TeluguEdit",(req,res)=>{
    console.log(req.body);
    const link=req.body.link;
    const name=req.body.name;
    const image=req.body.image;
    const Desc=req.body.description;
    const action=req.body.action;
    const ins={link:link,name:name,image:image,description:Desc};

    if(action=='save'){
        db.query('insert into telugu set ?',[ins],(err)=>{
            if(err) throw err;
            console.log("data saved.......");
            res.render("telugu_admin");
        })
    }

    else if(action=='update'){
        db.query('update telugu set ? where name=?',[ins,name],(err)=>{
            if(err) throw err;
            console.log("update successfull.......");
            res.render("telugu_admin");
        })
    }

    else{
        db.query('delete from telugu where name  = ?',[name],(err)=>{
            if(err) throw err;
            console.log("data deleted.......");
            res.render("telugu_admin");
        })
    }
})
/* ------------------------------------------------------------------------------------------------*/

/* ------------------------------------ EDUCATION NEWSPAPER -------------------------------------------*/
db.query('select count(name) as count from education',(err,result)=>{
    // console.log(result);
    E1count=result[0].count;
})
db.query('select * from education',(err,result)=>{
    education=result;
    console.log(education);
})

app.post("/EducationEdit",(req,res)=>{
    console.log(req.body);
    const link=req.body.link;
    const name=req.body.name;
    const image=req.body.image;
    const Desc=req.body.description;
    const action=req.body.action;
    const ins={link:link,name:name,image:image,description:Desc};

    if(action=='save'){
        db.query('insert into education set ?',[ins],(err)=>{
            if(err) throw err;
            console.log("data saved.......");
            res.render("education_admin");
        })
    }

    else if(action=='update'){
        db.query('update education set ? where name=?',[ins,name],(err)=>{
            if(err) throw err;
            console.log("update successfull.......");
            res.render("education_admin");
        })
    }

    else{
        db.query('delete from education where name  = ?',[name],(err)=>{
            if(err) throw err;
            console.log("data deleted.......");
            res.render("education_admin");
        })
    }
})
/* ------------------------------------------------------------------------------------------------*/

/* ------------------------------------ TECHNOLOGY NEWS -------------------------------------------*/
db.query('select count(name) as count from technology',(err,result)=>{
    // console.log(result);
    T3count=result[0].count;
})
db.query('select * from technology',(err,result)=>{
    technology=result;
    console.log(technology);
})

app.post("/TechnologyEdit",(req,res)=>{
    console.log(req.body);
    const link=req.body.link;
    const name=req.body.name;
    const image=req.body.image;
    const Desc=req.body.description;
    const action=req.body.action;
    const ins={link:link,name:name,image:image,description:Desc};

    if(action=='save'){
        db.query('insert into technology set ?',[ins],(err)=>{
            if(err) throw err;
            console.log("data saved.......");
            res.render("technology_admin");
        })
    }

    else if(action=='update'){
        db.query('update technology set ? where name=?',[ins,name],(err)=>{
            if(err) throw err;
            console.log("update successfull.......");
            res.render("technology_admin");
        })
    }

    else{
        db.query('delete from technology where name  = ?',[name],(err)=>{
            if(err) throw err;
            console.log("data deleted.......");
            res.render("technology_admin");
        })
    }
})
/* ------------------------------------------------------------------------------------------------*/

/* ------------------------------------ SPORTS NEWS -------------------------------------------*/
db.query('select count(name) as count from sports',(err,result)=>{
    // console.log(result);
    Scount=result[0].count;
})
db.query('select * from sports',(err,result)=>{
    sports=result;
    console.log(sports);
})

app.post("/SportsEdit",(req,res)=>{
    console.log(req.body);
    const link=req.body.link;
    const name=req.body.name;
    const image=req.body.image;
    const Desc=req.body.description;
    const action=req.body.action;
    const ins={link:link,name:name,image:image,description:Desc};

    if(action=='save'){
        db.query('insert into sports set ?',[ins],(err)=>{
            if(err) throw err;
            console.log("data saved.......");
            res.render("sports_admin");
        })
    }

    else if(action=='update'){
        db.query('update sports set ? where name=?',[ins,name],(err)=>{
            if(err) throw err;
            console.log("update successfull.......");
            res.render("sports_admin");
        })
    }

    else{
        db.query('delete from sports where name  = ?',[name],(err)=>{
            if(err) throw err;
            console.log("data deleted.......");
            res.render("sports_admin");
        })
    }
})
/* ------------------------------------------------------------------------------------------------*/

/* ------------------------------------ BUSINESS NEWS -------------------------------------------*/
db.query('select count(name) as count from business',(err,result)=>{
    // console.log(result);
    Bcount=result[0].count;
})
db.query('select * from business',(err,result)=>{
    business=result;
    console.log(business);
})

app.post("/BusinessEdit",(req,res)=>{
    console.log(req.body);
    const link=req.body.link;
    const name=req.body.name;
    const image=req.body.image;
    const Desc=req.body.description;
    const action=req.body.action;
    const ins={link:link,name:name,image:image,description:Desc};

    if(action=='save'){
        db.query('insert into business set ?',[ins],(err)=>{
            if(err) throw err;
            console.log("data saved.......");
            res.render("business_admin");
        })
    }

    else if(action=='update'){
        db.query('update business set ? where name=?',[ins,name],(err)=>{
            if(err) throw err;
            console.log("update successfull.......");
            res.render("business_admin");
        })
    }

    else{
        db.query('delete from business where name  = ?',[name],(err)=>{
            if(err) throw err;
            console.log("data deleted.......");
            res.render("business_admin");
        })
    }
})
/* ------------------------------------------------------------------------------------------------*/

/* ------------------------------------ WEATHER NEWS -------------------------------------------*/
db.query('select count(name) as count from weather',(err,result)=>{
    // console.log(result);
    Wcount=result[0].count;
})
db.query('select * from weather',(err,result)=>{
    weather=result;
    console.log(weather);
})

app.post("/WeatherEdit",(req,res)=>{
    console.log(req.body);
    const link=req.body.link;
    const name=req.body.name;
    const image=req.body.image;
    const Desc=req.body.description;
    const action=req.body.action;
    const ins={link:link,name:name,image:image,description:Desc};

    if(action=='save'){
        db.query('insert into weather set ?',[ins],(err)=>{
            if(err) throw err;
            console.log("data saved.......");
            res.render("weather_admin");
        })
    }

    else if(action=='update'){
        db.query('update weather set ? where name=?',[ins,name],(err)=>{
            if(err) throw err;
            console.log("update successfull.......");
            res.render("weather_admin");
        })
    }

    else{
        db.query('delete from weather where name  = ?',[name],(err)=>{
            if(err) throw err;
            console.log("data deleted.......");
            res.render("weather_admin");
        })
    }
})
/* ------------------------------------------------------------------------------------------------*/

/* ----------------------------------------- ADMIN PAGE --------------------------------------------*/
app.get("/admin2305",(req,res)=>{
    res.render("admin");
})
db.query('select count(firstname) as count from signup',(err,result)=>{
    // console.log(result[0].count);
    Ccount=result[0].count;
})
db.query('select * from signup',(err,result)=>{
    cust=result;
    console.log(cust);
})
db.query('select count(firstname) as count from feedback',(err,result)=>{
    console.log(result[0].count);
    Fcount=result[0].count;
})
db.query('select * from feedback',(err,result)=>{
    cus=result;
    console.log(cus);
})
/* ------------------------------------------------------------------------------------------------*/

/* ----------------------------- --- SIGN UP PAGE VALUES -------------------------------------------*/
app.post("/signupValue",(req,res)=>{
   const Fname=req.body.Fname;
   const Lname=req.body.Lname;
   const Ename=req.body.ename;
   const pass=req.body.password;
   const mobile=req.body.mobile;
   console.log(req.body);
   const ins={firstname:Fname,lastname:Lname,email:Ename,pass:pass,mobile:mobile};

   db.query('insert into signup set ?',ins,(err,result)=>{
    if (err) throw err;
    console.log("data inserted......................");
    res.render("signin",{msg:"Sign Up Successfully"});
   })
})
/* ------------------------------------------------------------------------------------------------*/

/* ----------------------------------- COMMENT PAGE VALUES -----------------------------------------*/
app.post("/commentValue",(req,res)=>{
    const Fname=req.body.fname;
    const Lname=req.body.lname;
    const Ename=req.body.mailid;
    const Comment=req.body.subject;
    console.log(req.body);
    const ins={firstname:Fname,lastname:Lname,email:Ename,feedback:Comment};
 
    db.query('insert into feedback set ?',ins,(err,result)=>{
     if (err) throw err;
     console.log("data inserted......................");
     res.render("comment");
    })
 })
/* ------------------------------------------------------------------------------------------------*/

/* --------------------------------------- RENDER PAGES ---------------------------------------------*/
app.get('/',(req,res)=>{
    res.render("home")
})
app.get('/signin',(req,res)=>{
    res.render("signin",{msg:""})
})
app.get('/signup',(req,res)=>{
    res.render("signup")
})
app.get('/comment',(req,res)=>{
    res.render("comment")
})
app.get('/tamil',(req,res)=>{
    res.render("tamil")
})
app.get('/english',(req,res)=>{
    res.render("english")
})
app.get('/telugu',(req,res)=>{
    res.render("telugu")
})
app.get('/malayalam',(req,res)=>{
    res.render("malayalam")
})
app.get('/hindi',(req,res)=>{
    res.render("hindi")
})
app.get('/kannada',(req,res)=>{
    res.render("kannada")
})
app.get('/feedback',(req,res)=>{
    res.render("feedback")
})
app.get('/userdetails',(req,res)=>{
    res.render("userdetails")
})
app.get('/newspaper',(req,res)=>{
    res.render("newspaper")
})
app.get('/english_admin',(req,res)=>{
    res.render("english_admin")
})
app.get('/hindi_admin',(req,res)=>{
    res.render("hindi_admin")
})
app.get('/kannada_admin',(req,res)=>{
    res.render("kannada_admin")
})
app.get('/malayalam_admin',(req,res)=>{
    res.render("malayalam_admin")
})
app.get('/tamil_admin',(req,res)=>{
    res.render("tamil_admin")
})
app.get('/telugu_admin',(req,res)=>{
    res.render("telugu_admin")
})
app.get('/education',(req,res)=>{
    res.render("education")
})
app.get('/education_admin',(req,res)=>{
    res.render("education_admin")
})
app.get('/technology',(req,res)=>{
    res.render("technology")
})
app.get('/technology_admin',(req,res)=>{
    res.render("technology_admin")
})
app.get('/sports',(req,res)=>{
    res.render("sports")
})
app.get('/sports_admin',(req,res)=>{
    res.render("sports_admin")
})
app.get('/business',(req,res)=>{
    res.render("business")
})
app.get('/business_admin',(req,res)=>{
    res.render("business_admin")
})
app.get('/weather',(req,res)=>{
    res.render("weather")
})
app.get('/weather_admin',(req,res)=>{
    res.render("weather_admin")
})
app.get('/admin',(req,res)=>{
    res.render("admin")
})
app.get('/view_feedback',(req,res)=>{
    res.render("view_feedback")
})

/* ------------------------------------------------------------------------------------------------*/
app.listen(100,(err,res)=>{
    console.log("port connected......");
})
/* ------------------------------------------------------------------------------------------------*/