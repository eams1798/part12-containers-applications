const express = require('express');
const { Todo } = require('../mongo');
const { setAsync, getAsync } = require('../redis');
const router = express.Router();

/* GET todos listing. */
router.get('/', async (_, res) => {
  const todos = await Todo.find({})
  res.send(todos);
});

/* POST todo to listing. */
router.post('/', async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text,
    done: false
  })
  setAsync('added_todos', Number(await getAsync('added_todos')) + 1);
  res.send(todo);
});

const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params
  req.todo = await Todo.findById(id)
  if (!req.todo) return res.sendStatus(404)

  next()
}

/* DELETE todo. */
singleRouter.delete('/', async (req, res) => {
  await req.todo.delete()  
  res.sendStatus(200);
});

/* GET todo. */
singleRouter.get('/', async (req, res) => {
  if (req.todo) res.send(req.todo);
  else res.sendStatus(404);
});

/* PUT todo. */
singleRouter.put('/', async (req, res) => {
  if (req.todo) {
    const updated = await Todo.findByIdAndUpdate(req.todo._id, req.body, { new: true })
    res.send(updated);
  } else res.sendStatus(404);
});


router.use('/:id', findByIdMiddleware, singleRouter)


module.exports = router;
