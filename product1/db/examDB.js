let pool = require('./pool');
module.exports = {
  //获取所有题目类型
  getAllSubjectType(){
    var sql = "select * from tbl_exam_subjecttype";
    return pool.execute(sql);  
  },
  //获取所有题目难度级别
  getAllSubjectLevel(){
    var sql = "select * from tbl_exam_subjectlevel";
    return pool.execute(sql);
  },
  //获取所有的方向
  getAllDepartmentes(){
    var sql = "select * from tbl_exam_epartment";
    return pool.execute(sql);
  },
  getAllTopics(){
    var sql = "select * from tbl_exam_topic";
    return pool.execute(sql);
  },
  subject(department_id,subjectLevel_id,subjectType_id,topic_id){
    var sql = 'select * from tbl_exam_subject where department_id='+department_id+' and subjectLevel_id='+subjectLevel_id+' and subjectType_id='+subjectType_id+' and topic_id='+topic_id+'';
    return pool.execute(sql);
  },
  //根据外键四个约束获取题目
  updateSubject(checkState,id){
    var sql = "update tbl_exam_subject set checkState='"+checkState+"' where id = "+id;
    console.log(sql);
    return pool.execute(sql);
  },
  //获取答案表中获取题号的答案
  getChoice(subject_id){
    var sql = "select * from tbl_exam_choice where subject_id="+subject_id;
    return pool.execute(sql);
  },
  //删除题目
  deleteSubject(id){
    var sql = "delete from tbl_exam_subject where id="+id;
    return pool.execute(sql);
  },
  //添加试卷
  getPaper(question,answer){
    var sql = "insert into paper values(null,'"+question+"','"+answer+"')";
    return pool.execute(sql);
  },
  //添加题目
  insert(analysis,answer,checkState,stem,department_id,subjectLevel_id,subjectType_id,topic_id){
    var sql = "insert into tbl_exam_subject values(null,'"+analysis+"','"+answer+"','"+checkState+"','"+stem+"',null,"+department_id+","+subjectLevel_id+","+subjectType_id+","+topic_id+",null)";
    return pool.execute(sql);
  //添加答案
  },
  insertinto(content,correct,subject_id,use_id){
    var sql = "insert into tbl_exam_choice values(null,'"+content+"',"+correct+","+subject_id+","+use_id+")";
    // var sql = "insert into tbl_exam_choice values(null,'"+content+"',"+correct+","+subject_id+",1)";
    return pool.execute(sql);
  } 
}