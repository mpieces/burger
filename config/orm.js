var connection = require ('./connection.js');
var orm = {
    all: function (tableInput, cb){
        connection.query('SELECT * FROM '+ tableInput+';', function (err,result){
            if (err) throw err;
            cb(result)
        })
    },
    update: function (table, colValues, condition, cb) {
        var query = "UPDATE  " +table;
        query += "SET";
        query += objTosql(colValues);
        query += "WHERE";
        query += condition;
        connection.query(query, function(err, result){
            cb(result);
        })
    }
}
var objTosql = function(colValues){
    var arr =[];
    for(var key in colValues){
        var value = colValues[key];
        //{bala nekkanti => 'bala nekkanti'}
        if(Object.hasOwnProperty.call(colValues, key)){
            if(typeof value === "string" && value.indexOf(" ")>=0){
                value ="'" +value +"'";
            }
            //{devore: 0 => devore = 0}
            arr.push(key +"=" +value);
        }
    }
    return arr.toString();
}

module.exports = orm;