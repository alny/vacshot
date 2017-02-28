var express = require('express');
var router = express.Router();
var controllers = require('../controllers')

router.get('/:resource', function(req, res, next){
  var resource = req.params.resource

  var controller = controllers[resource]
  if(controller == null){
    res.json({
      confirmation: 'fail',
      message: 'Invalid Resource'
    })
    return
  }

  controller.find(req.query, false)
  .then(function(results){
    res.json({
      confirmation: 'success',
      results: results
    })
  })
  .catch(function(err){
    res.json({
      confirmation: 'fail',
      message: err
    })
  })
})

router.get('/:resource/:id', function(req, res, next){
  var resource = req.params.resource

  var controller = controllers[resource]
  if(controller == null){
    res.json({
      confirmation: 'fail',
      message: 'Invalid Resource'
    })
    return
  }

  var id = req.params.id

  controller.findById(id)
  .then(function(result){
    res.json({
      confirmation: 'success',
      result: result
    })
  })
  .catch(function(err){
    res.json({
      confirmation: 'fail',
      message: resource + ' ' + id + ' Not Found'
    })
  })

})

router.post('/:resource', function(req, res, next){
  var resource = req.params.resource

  var controller = controllers[resource]

  if(controller == null){
    res.json({
      confirmation: 'fail',
      message: 'Invalid Resource'
    })
    return
  }

  controller.create(req.body)
  .then(function(result){
    res.json({
      confirmation: 'success',
      result:result
    })
  })
  .catch(function(err){
    res.json({
      confirmation: 'fail',
      message: err
    })
  })
})

router.put('/:resource/:id', function(req, res, next){
	var resource = req.params.resource
	var id = req.params.id

	var controller = controllers[resource]
	if (controller == null){
		res.json({
			confirmation:'fail',
			message: 'Invalid Resource.'
		})
		return
	}

	controller
	.put(id, req.body, req.session.token)
	.then(function(result){
		res.json({
			confirmation: 'success',
			result: result
		})

		return
	})
	.catch(function(err){
		res.json({
			confirmation: 'fail',
			message: err
		})

		return
	})
})

router.delete('/:resource/:id', function(req, res, next){
	var resource = req.params.resource
	var id = req.params.id

	var controller = controllers[resource]
	if (controller == null){
		res.json({
			confirmation:'fail',
			message: 'Invalid Resource.'
		})
		return
	}

	controller
	.delete(id, req.session.token)
	.then(function(){
		res.json({
			confirmation: 'success'
		})
		return
	})
	.catch(function(err){
		res.json({
			confirmation: 'fail',
			message: err
		})

		return
	})

})

module.exports = router
