/**
 * Created by ZTC on 2017-11-26.
 */
var users = require("../db/users.js");
var posts = require("../db/posts.js")
var subjects = require("../db/subjects.js")
var replys = require("../db/replys.js")
var user_actives_infos = require("../db/user_actives_infos.js")
var white_wall = require("../db/white_wall")
var school_news = require("../db/school_news")
var findData = require("../db/findData")
var ObjectID = require('mongodb').ObjectID;
var tools = require('../tool/tool')

var usersData = require('./users.json')
var postsData = require("./posts.json")

// 查找user中的所有数据
// users.findData({},function(users){
//     console.log(users);
// })

// 根据username查找password
// users.findData({username:"ztchun"},function(data){
//     console.log(data[0]._id)
// })

// user 插入数据
// users.insertData(usersData[0], function(result){
//     if (result.result.ok == 1) {
//         console.log('插入users表成功')
//     }
// })

// user删除
// users.deleteData({username: 'ztc'}, function(result) {
//     console.log(result)
// })

// users更新
// users.updateData({username: 'ztchun'}, {check: true}, function(result){
//     console.log(result)
// })

// posts insert
// posts.insertData(postsData[0],function(result){
//     console.log(result.result.ok)
// })

// posts find
// posts.findData({},function(result){
//     console.log(result)
// })

//posts update
// posts.updateData({"user_name": "ztchun"}, {"user_name": "ztc"}, function(result){
//     console.log(result.result.ok)
// })

// posts delete
// posts.deleteData({user_name: "ztc"}, function(result) {
//     console.log(result.result.ok)
// })

// subjects.findData({
//     "_id": ObjectID('5a71b7b548ea61b30b3c5e16')
// },function(result){
//     console.log(result)
// })

// tools
// tools.showTime(function(time){
//     console.log(time)
// })

// posts.findData({},function(data){
//     console.log(data)
// })

// posts.findDataBySort({}, {time: 1}, 10, 2,function(data){
//     console.log(data)
// })

// replys.updateReplys({post_id: '5a7452b9f8f4100f35a310fa'}, {
//     "from_user_name" : "crisZhou", 
//     "to_user_name" : "ztchun", 
//     "time" : "2018.02.22 10:00:00", 
//     "content" : "crisZhou comments"
// },function(data){
//     console.log(data.result)
// })

// posts.replyNumber({
//     _id: ObjectID('5a7452b9f8f4100f35a310fa')
// },{
//     reply_num: 1
// },function(data){
//     console.log(data.result)
// })

// user_actives_infos.updateData({
//     user_name: 'ztchun'
// },{
//     $pull: {
//         hearts: '5a7452b9f8f4100f35a310fa'
//     }
// },function(data){
//     console.log(data.result)
// })

// subjects.findDataByArr({
//     user_name: 'ztchun'
// },function(data){
//     console.log(data)
// })

// white_wall.updateBy({
//     _id: ObjectID('5a910c118a246643f8aa2d8f')
// },{
//     $push:{
//         support: 'ztc'
//     }
// },function(data){
//     console.log(data.result.ok)
// })

// 删除数字
// subjects.updateDeleteArray({
//     _id: ObjectID('5a9f5c2461ff7b34226dde97')
// }, {
//     user_name: "ztc",
//     avator: "/avator.jpg"
// }, function(result) {
//     console.log(result.result.ok)
// })


// findData.findData('user_actives_infos',{
//     user_name: 'ztchun'
// }, function(data){
//     console.log(data[0].posts)
// })

// posts.findDataSort({}, { time: -1 }, 0, 10, function(data) {
//     // data.sort(compare('time'))
//     console.log(data)
//  })

school_news.update({
    _id: ObjectID("5ad6dee6fd22bc022bdb9dc2")
}, {
    // $set: {
    $push: {
        replys: {
            from_user_name: 'ztchun',
            time: '2018-03-02 13:00:00',
            content: 'content',
            avator: '/ztchun.jpg'
        }
    }
    // }
}, function(data) {
    console.log(data)
})