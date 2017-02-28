var Tutorial = require('../models/Tutorial')
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


      Tutorial.find(params, null, {limit:parseInt(21), sort:{'timestamp': sortOrder}}, function(err, tutorials){
        if(err){
          reject(err)
          return
        }
        if(isRaw){
          resolve(tutorials)
          return
        }
        var summaries = []
        tutorials.forEach(function(tutorial){
          summaries.push(tutorial.summary())
        })
        resolve(summaries)
      })
    })
  },

  findById: function(id){
    return new Promise(function(resolve, reject){
      Tutorial.findById(id, function(err, tutorial){
        if(err){
          reject(err)
          return
        }
          resolve(tutorial.summary())
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


        Tutorial.create(params, function(err, tutorial){
          if(err){
            reject(err)
            return
          }
            resolve(tutorial.summary())
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
      // TODO: check if user is authorized to change tutorial

      Tutorial.findByIdAndUpdate(id, params, {new:true}, function(err, tutorial){
        if (err){
          reject(err)
          return
        }

        resolve(tutorial.summary())
      })
    })
    .catch(function(err){
      reject(err)
      return
    })
  })
}
}
