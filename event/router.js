const { Router } = require('express')
const Event = require('./model')
const router = new Router()

router.get('/event', (req, res, next) => 
Event
.findAll()
.then(eventList => res.json(eventList))
.catch(next)
);

router.get('/event/:id', (req, res, next) =>
Event
.findByPk(req.params.id)
.then(id => res.json(id))
.catch(next)
);

router.post('/event', (req, res, next) => 
Event
.create(req.body)
.then(newEvent => res.json(newEvent))
.catch(next)
);

router.put('/event/:id', (req, res, next) => 
Event
    .findByPk(req.params.id)
    .then(event => event.update(req.body))
    .then(event => res.send(event))
    .catch(next)
)

router.delete('/event/:id', (req, res, next) => 
Event
  .destroy({where: { id: req.params.id}})
  .then(number => res.send({number}))
  .catch(next)
)

module.exports = router;