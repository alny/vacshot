var mongoose = require('mongoose')

var TutorialSchema = new mongoose.Schema({
    profile: {type: mongoose.Schema.Types.Mixed, default: ''},
    title: {type: String, trim: true, default: ''},
    type: {type: String, default: ''},
    map: {type: String, default: ''},
    rifle: {type: String, default: ''},
    pistol: {type: String, default: ''},
    grenade: {type: String, default: ''},
    image: {type: String, default: ''},
    status: {type: String, default: 'pending'},
    url: {type:String, default:''},
    viewed: {type:Number, default: 0},
    votes: {type:mongoose.Schema.Types.Mixed, default:{voters:[], score:0}},
    slug: {type:String, trim:true, lowercase:true, default:''},
    timestamp: {type: Date, default: Date.now}

})

TutorialSchema.methods.summary = function(){
  var summary  = {
      profile: this.profile,
      title: this.title,
      type: this.type,
      map: this.map,
      rifle: this.rifle,
      pistol: this.pistol,
      grenade: this.grenade,
      image: this.image,
      status: this.status,
      url: this.url,
      viewed: this.viewed,
      votes: this.votes,
      slug: this.slug,
      timestamp: this.timestamp,
      id: this._id.toString()
  }
  return summary
}

module.exports = mongoose.model('TutorialSchema', TutorialSchema)
