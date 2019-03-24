
var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.all("burgers_db.burgers", function(res) {
            cb(res);
        });
    },
    addBurger: function(name, cb) {
        orm.create("burgers", [
            "burger_name", "devoured"
        ], [
            name, false
        ], cb);
    },
    updateBurger: function(id, cb) {
        var condition = "id=" + id;
        orm.update("burgers", {
            devoured: true
        }, condition, cb);
    }
};

module.exports = burger;