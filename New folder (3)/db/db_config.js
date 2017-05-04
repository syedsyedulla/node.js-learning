var sequelize=require('sequelize');
var sequelize=new sequelize('node_dbb','root','root',
	{host:'localhost',port:3306 ,dialect:'mysql'}
	);

sequelize.authenticate().then(function(err) {
    if (err) {
      console.log('Unable to connect to the database:', err);
    } else {
      console.log('Connection has been established successfully.');
    }
});

module.exports=sequelize;