const  express = require("express");
const ctrl = require("./home.ctrl")
const  router = express.Router();
const fs =  require('fs').promises
const path = require('path')





// const ADminGoodsKiosk = path.join("/home/hosting_users/emc22wonil2/apps/emc22wonil2_emc33wonil/src/adminUser/adminGoodsKiosk.json") 
// const UserGoodsKinds = path.join("/home/hosting_users/emc22wonil2/apps/emc22wonil2_emc33wonil/src/database/userGoodsKinds.json") 
// const AdminNext = path.join("/home/hosting_users/emc22wonil2/apps/emc22wonil2_emc33wonil/src/adminSetKinds/adminNext.json") 
// const kokoTime = path.join("/home/hosting_users/emc22wonil2/apps/emc22wonil2_emc33wonil/src/adminSetKinds/kokoTime.json") 





 fs.readFile("./src/database/userGoodsKinds.json")
  .then((data) => {
    const a = JSON.parse(data);
    
    router.get('/userGoodsKinds', (req, res) => {
      res.send(a);
    });
  })
  .catch((err) => console.error(err));
  fs.readFile("./src/database/users.json")
  .then((data) => {
    const a = JSON.parse(data);
    
    router.get('/Users', (req, res) => {
      res.send(a);
    });
  })
  .catch((err) => console.error(err));

  fs.readFile("./src/database/nice.json")
  .then((data) => {
    const a = JSON.parse(data);
    
    router.get('/nice', (req, res) => {
      res.send(a);
    });
  })
  .catch((err) => console.error(err));
///////////////////////////////////////////////
fs. readFile("./src/database/kokoTime.json")
  .then((data) => {
    const a = JSON.parse(data);
    router.get('/kokoTime', (req, res) => {
      res.send(a);
    });
  })
  .catch((err) => console.error(err));
  


  // setKind



fs. readFile("./src/adminSetKinds/adminNext.json")
      .then ((data) => {
      const h = JSON.parse(data)
    
   if(h.phon !== undefined) {
    
      router.get (`/adminUinfo=${h[0].phon}`, (req, res) => {
        res.render("home/adminControl") 
         })
        }else{
        
          router.get (`/adminUinfo=${h[0].phon}`, (req, res) => {
            res.render("home/adminControl") 
             })

        }
      }).catch((err) => console.error(err));  


 
fs. readFile("./src/adminSetKinds/adminNext.json")
.then ((data) => {
const h = JSON.parse(data)

router.get ('/adminNext', (req, res) => {
  res.send(h)
})
}).catch((err) => console.error(err));  




 fs.readFile("./src/adminUser/adminGoodsKiosk.json")
     .then((data) => {
   
  const datas = JSON.parse(data)



   router.get('/adminGoodsKiosk', (req,res) =>{
   res.send(datas) 
  })
}).catch((err) => console.error(err));
console

fs.readFile("./src/adminSetKinds/adminsetkinds.json")
        .then((data) => {
     const b = JSON.parse(data)
     router.get('/setKind', (req,res) =>{
      res.send(b) 
     })
}).catch((err) => console.error(err));


 fs. readFile("./src/database/first.json")
 .then((data) => {
 const d = JSON.parse(data)
  
 router.get('/certifications', (req,res) =>{
 res.send(d) 
 })
 }).catch((err) => console.error(err));
 
router.get("/Https", ctrl.output.Https)
router.get("/websocket", ctrl.output.websocket)
router.get("/calender", ctrl.output.calender)
router.get("/", ctrl.output.index)
router.get("/newLogin", ctrl.output.newLogin)
router.get("/koko", ctrl.output.koko)
router.get("/adminTimeAdd", ctrl.output.adminTimeAdd)
router.get("/register", ctrl.output.register)
router.get("/goodsKinds", ctrl.output.goodsKinds)
router.get("/admin", ctrl.output.admin)
router.get("/adminLogin", ctrl.output.adminLogin)
router.get("/adminFee", ctrl.output.adminFee)
router.get("/Kioce", ctrl.output.Kioce)
router.get("/adminBench", ctrl.output.adminBench)
router.get("/adminViews", ctrl.output.adminViews)
router.get("/adminUinfo", ctrl.output.adminUinfo)
router.get("/goodsPush", ctrl.output.goodsPush)
router.get("/userInfor", ctrl.output.userInfor)
router.get("/certification", ctrl.output.certification)
router.get("/userAdministration", ctrl.output.userAdministration)
router.get("/userAdministrationTotall", ctrl.output.userAdministrationTotall)
////////////poset/////////////////
router.post("/login", ctrl.process.login)
router.post("/register", ctrl.process.register)
router.post("/logout", ctrl.process.logout)
router.post("/goodsKinds", ctrl.process.goodsKinds)
router.post("/admin", ctrl.process.admin)
router.post("/adminLogin", ctrl.process.adminLogin)
router.post("/adminFee", ctrl.process.adminFee)
router.post("/Kioce", ctrl.process.Kioce)
router.post("/", ctrl.process.index)
router.post("/adminBench", ctrl.process.adminBench)
router.post("/adminTimeAdd", ctrl.process.adminTimeAdd)
router.post("/adminUinfo", ctrl.process.adminUinfo)
router.post("/adminViews", ctrl.process.adminViews)
router.post("/adminControl", ctrl.process.adminControl)
router.post("/newLogin", ctrl.process.newLogin)
router.post("/goodsPush", ctrl.process.goodsPush)
router.post("/userInfor", ctrl.process.userInfor)
router.post("/koko", ctrl.process.koko)
router.post("/logoutTime", ctrl.process.logoutTime)
router.post("/forcibley", ctrl.process.forcibley) 
router.post("/enter", ctrl.process.enter)
router.post("/certification", ctrl.process.certification)
router.post("/nice", ctrl.process.nice)
router.post("/search", ctrl.process.search)
 module.exports = router      
  