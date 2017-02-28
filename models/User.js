var mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
    username: {type: String, default: ''},
    email: {type: String, unique: true, default: ''},
    image: {type: String, default: ''},
    points: {type:Number, default: 0},
    team: {type: String, default: ''},
    tags: {type:Array, default:[]},
    password: {type: String, default: ''},
    facebook: {type: String, default: ''},
    role: {type: String, default: ''},
    profile: {
        name: { type: String, default: ''},
        picture: { type: String, default: ''}
    },
    timestamp: {type: Date, default: Date.now}

})

UserSchema.methods.summary = function(){
  var summary  = {
      username: this.username,
      email: this.email,
      image: this.image,
      points: this.points,
      team: this.team,
      tags: this.tags,
      facebook: this.facebook,
      role: this.role,
      timestamp: this.timestamp,
      id: this._id.toString()
  }
  return summary
}

module.exports = mongoose.model('UserSchema', UserSchema)
