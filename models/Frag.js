var mongoose = require('mongoose')

var FragSchema = new mongoose.Schema({
    profile: {type: mongoose.Schema.Types.Mixed, default: ''},
    title: {type: String, trim: true, default: ''},
    category: {type: String, default: ''},
    image: {type: String, default: ''},
    status: {type: String, default: 'pending'},
    url: {type:String, default:''},
    viewed: {type:Number, default: 0},
    favorites: {type:Array, default:[]},
    votes: {type:mongoose.Schema.Types.Mixed, default:{voters:[], score:0}},
    slug: {type:String, trim:true, lowercase:true, default:''},
    createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'UserSchema'},
    timestamp: {type: Date, default: Date.now}

})

FragSchema.methods.summary = function(){
  var summary  = {
      profile: this.profile,
      title: this.title,
      category: this.category,
      image: this.image,
      status: this.status,
      url: this.url,
      viewed: this.viewed,
      votes: this.votes,
      favorites: this.favorites,
      slug: this.slug,
      timestamp: this.timestamp,
      createdBy: this.createdBy,
      id: this._id.toString()
  }
  return summary
}

module.exports = mongoose.model('FragSchema', FragSchema)
