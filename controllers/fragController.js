var Frag = require('../models/Frag')
var Promise = require('bluebird')
var superagent = require('superagent')
var utils = require('../utils')


module.exports = {

  find: function(params, isRaw){
    return new Promise(function(resolve, reject){
      var sortOrder = (params.sort == 'asc') ? 1 : -1

      var limit = params.limit
			if (limit == null)
          limit = '0'


      Frag.find(params, null, {limit:parseInt(21), sort:{'timestamp': sortOrder}}, function(err, frags){
        if(err){
          reject(err)
          return
        }
        if(isRaw){
          resolve(frags)
          return
        }
        var summaries = []
        frags.forEach(function(frag){
          summaries.push(frag.summary())
        })
        resolve(summaries)
      })
    })
  },

  findById: function(id){
    return new Promise(function(resolve, reject){
      Frag.findById(id, function(err, frag){
        if(err){
          reject(err)
          return
        }
          resolve(frag.summary())
      })
    })
  },

  create: function(params){
    return new Promise(function(resolve, reject){
      superagent
      .get(params.url)
      .query(null)
      .set('Accept', 'text/html')
      .end(function(err, response){
        if(err){
          reject(err)
          return
        }
        //res.send(response.text)
        var html = response.text
        var metaData = utils.Scraper.scrape(html, ['og:title', 'og:image'])

        var keys = Object.keys(metaData)
        keys.forEach(function(key, i){
          params[key] = metaData[key]
        })
        params['title'] = utils.TextUtil.removeSpecialCharacter(params.title)

        params['slug'] = utils.TextUtil.slugVersion(params.title)+'-'+utils.TextUtil.randomString(6)


        Frag.create(params, function(err, frag){
          if(err){
            reject(err)
            return
          }
            resolve(frag.summary())
        })

      })
    })
  },

  put: function(id, params, token){
  return new Promise(function(resolve, reject){
    if (token == null){
      reject({message: 'Unauthorized'})
      return
    }

    utils.JWT.verify(token, process.env.TOKEN_SECRET)
    .then(function(decode){
      var userId = decode.id
      console.log('USER ID: '+userId)
      // TODO: check if user is authorized to change frag

      Frag.findByIdAndUpdate(id, params, {new:true}, function(err, frag){
        if (err){
          reject(err)
          return
        }

        resolve(frag.summary())
      })
    })
    .catch(function(err){
      reject(err)
      return
    })
  })
}
}
