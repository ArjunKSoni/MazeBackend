const mongoos = require('mongoose')
const TeamSchema = new mongoos.Schema({
    team: {
        type: String
    }
})
const Team = new mongoos.model("Mazeteam", TeamSchema)

module.exports = Team;