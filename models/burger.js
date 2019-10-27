var orm = require("../config/orm");

var burger = {
all: function(cb) {
  orm.all("burgers", function(res) {
    cb(res);
  });
},
insertOne: function(cols, vals, cb) {
  orm.all("burgers", cols, vals, function(res) {
    cb(res);
  });
},
updateOne: function(objColVals, condition, cb) {
  orm.all("burgers", objColVals, condition, function(res) {
    cb(res);
  });
},
deleteOne: function(condition, cb) {
  orm.all("burgers", condition, function(res) {
    cb(res);
  });
},
}
module.exports = burger;