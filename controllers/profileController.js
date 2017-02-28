var Profile = require('../models/User')
var bcrypt = require('bcryptjs')
var Promise = require('bluebird')

module.exports = {

  find: function(params, isRaw){
     return new Promise(function(resolve, reject){
       Profile.find(params, function(err, profiles){
         if(err){
           reject(err)
           return
         }
         if(isRaw){
           resolve(profiles)
           return
         }
         var summaries = []
         profiles.forEach(function(profile){
           summaries.push(profile.summary())
         })
         resolve(summaries)
       })
     })
   },

   findById: function(id){
     return new Promise(function(resolve, reject){
       Profile.findById(id, function(err, profile){
         if(err){
           reject(err)
           return
         }

           resolve(profile)
       })
     })
   },

   create: function(params, isRaw){
     return new Promise(function(resolve, reject){

       var password = params.password
          params['password'] = bcrypt.hashSync(password, 10)


       Profile.create(params, function(err, profile){
         if(err){
           reject(err)
           return
         }
         if(isRaw == true){
           resolve(profile)
         }
           resolve(profile.summary())
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

       Profile.findByIdAndUpdate(id, params, {new:true}, function(err, profile){
         if (err){
           reject(err)
           return
         }

         resolve(profile.summary())
       })
     })
     .catch(function(err){
       reject(err)
       return
     })
   })
 }
}
