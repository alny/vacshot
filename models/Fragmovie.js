var mongoose = require('mongoose')

var FragMovieSchema = new mongoose.Schema({
    profile: {type: mongoose.Schema.Types.Mixed, default: ''},
    title: {type: String, trim: true, default: ''},
    category: {type: String, default: ''},
    image: {type: String, default: ''},
    status: {type: String, default: 'pending'},
    url: {type:String, default:''},
    viewed: {type:Number, default: 0},
    votes: {type:mongoose.Schema.Types.Mixed, default:{voters:[], score:0}},
    comments: {type:Array, default:[]},
    numComments: {type:Number, default:0},
    slug: {type:String, trim:true, lowercase:true, default:''},
    timestamp: {type: Date, default: Date.now}

})

FragMovieSchema.methods.summary = function(){
  var summary  = {
      profile: this.profile,
      title: this.title,
      category: this.category,
      image: this.image,
      status: this.status,
      url: this.url,
      viewed: this.viewed,
      votes: this.votes,
      comments: this.comments,
      numComments: this.numComments,
      slug: this.slug,
      timestamp: this.timestamp,
      id: this._id.toString()
  }
  return summary
}

module.exports = mongoose.model('FragMovieSchema', FragMovieSchema)
