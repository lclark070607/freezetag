module.exports = {

Team: function() {
    this.players = [];

    this.add = function(playerName) {
        this.players.push(playerName);
    },
    this.won = function() {

    },

    return this;
},

};

