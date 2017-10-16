var express = require('express');
var router = express.Router();
var examDB = require('../db/examDB');
//修改数据（审核）
router.get('/updateSubject',(req,resp)=>{
  var checkState = req.query.checkState;
  var id = req.query.id;
  examDB.updateSubject(checkState,id).then((data)=>{
    resp.send(data);    
  }).catch((error)=>{
    resp.send(error);
  });
});
//获取所有题目类型
router.get('/getAllSubjectType',(req,resp)=>{
  examDB.getAllSubjectType().then((data)=>{
    resp.send(data);    
  }).catch((error)=>{
    resp.send(error);
  });
});
//获取所有题目难度级别
router.get('/getAllSubjectLevel',(req,resp)=>{
  examDB.getAllSubjectLevel().then((data)=>{
    resp.send(data);    
  }).catch((error)=>{
    resp.send(error);
  });
});
//获取所有的方向
router.get('/getAllDepartmentes',(req,resp)=>{
  examDB.getAllDepartmentes().then((data)=>{
    resp.send(data);    
  }).catch((error)=>{
    resp.send(error);
  });
});
//获取所有的知识点
router.get('/getAllTopics',(req,resp)=>{
  examDB.getAllTopics().then((data)=>{
    resp.send(data);    
  }).catch((error)=>{
    resp.send(error);
  });
});
// 获取题型
router.post('/subject',(req,resp)=>{
  var department_id = req.body.department_id;
  var subjectLevel_id = req.body.subjectLevel_id;
  var subjectType_id = req.body.subjectType_id;
  var topic_id = req.body.topic_id;
  examDB.subject(department_id,subjectLevel_id,subjectType_id,topic_id).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  })
});
//获取答案
router.get('/choice',(req,resp)=>{
  examDB.getChoice(req.query.subject_id).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  })
});
//删除题目
router.post('/deleteSubject',(req,resp)=>{
  examDB.deleteSubject(req.body.id).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  })
});
//创建试卷
router.post('/getPaper',(req,resp)=>{
  examDB.getPaper(req.body.question,req.body.answer).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  })
});
router.get('/insert',(req,resp)=>{
  var analysis = req.query.analysis;
  var answer = req.query.answer;
  var checkState =req.query.checkState;
  var stem = req.query.stem;
  var department_id = req.query.department;
  var subjectLevel_id = req.query.subjectLevel;
  var subjectType_id = req.query.subjectType;
  var topic_id = req.query.topic
  examDB.insert(analysis,answer,checkState,stem,department_id,subjectLevel_id,subjectType_id,topic_id).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
})
 router.get('/insertinto',(req,resp)=>{
    console.log(1);
  //  console.log(req.query);
      var correct = req.query.correct ; 
      var content = req.query.content ; 
      var subject_id = req.query.subject_id ; 
      var use_id = req.query.use_id ; 
    examDB.insertinto(content,correct,subject_id,use_id).then((data)=>{
      console.log(data);
      resp.send(data);
    }).catch((error)=>{
      resp.send(error);
    })
  })
module.exports = router;