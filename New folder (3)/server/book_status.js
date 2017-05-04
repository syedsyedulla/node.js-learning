var Sequelize=require('sequelize');
var sequelize=require('../db/db_config.js');
var books=sequelize.define("books",{b_name:Sequelize.STRING, 
	/*:{
      type: Sequelize.BIGINT(20),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }*/
b_author:Sequelize.STRING, b_version:Sequelize.STRING});

module.exports.book_name=function(req,res){
	sequelize.sync({force:false}).then(function(err){

	books.create({
	b_name             : req.body.b_name,
	b_author           : req.body.b_author, 
	b_version          : req.body.b_version
     

	}).then(function(book){
	res.send(book);
	});
	});
}
module.exports.book_list=function(req,res){
	books.findAll({}).then(function(data,err){
	if(data){
	res.send(data);
	}
	else{
	console.log('error:',JSON.stringfy(err));
	}
	});
}
module.exports.book_delete=function(req,res){
    var temp= req.param.num;
    console.log(temp);
   
    books.find({where: {id: temp }}).then(function (data,err) {
    
        if(data){
            
            data.destroy({}).then(function (data,err) {
                if(data){
                   // res.send("reload");
                }
                else{
                    console.log('work 2 :',err);
                }
            })
        }
        else{
            console.log(' error:',JSON.stringify(err));
        }
    });
}
module.exports.book_update=function(req,res){


   console.log('this is id :',req.query.check);
    books.find({where:{id :req.body.id}}).then(function (data, err) {


    if(data){
        data.updateAttributes({
            b_name             : req.body.b_name,
            b_author           : req.body.b_author, 
            b_version          : req.body.b_version
            
            
        }).then(function () {
            res.send(data);
        })
    }
    if(err){
        console.log('Error found :',err);
    }
});
    
}
