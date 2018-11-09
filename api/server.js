const express = require('express');
const projectsDb = require('../data/helpers/projectModel');
const actionsDb = require('../data/helpers/actionModel');
const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.json('alive');
})

//Projects Endpoints

//GET
server.get('/projects', (req, res) => {
    projectsDb.get()
    .then(projects => res.status(200).json(projects))
    .catch(err => {
        res.status(500).json({ message: "Couldn't retrieve projects" })
    })
})

//GET by ID
server.get('/projects/:id', (req, res) => {
    projectsDb.get(req.params.id)
    .then(project => res.status(200).json(project))
    .catch(err => {
        res.status(404).json({ message: "there is no user by this ID" })
    })
})

//GET Project Actions
server.get('/projects/:id/all', (req, res) => {
    projectsDb.getProjectActions(req.params.id)
    .then(projects => res.status(200).json(projects))
    .catch(err => {
        res.status(500).json({ message: "failed to get actions"})
    })
})

//CREATE
server.post('/projects', (req, res) => {
    projectsDb.insert(req.body)
    .then(done => res.status(201).json(done))
    .catch(err => {
        res.status(400).json({ message: "Wasn't able to add new project" })
    })
})

//UPDATE
server.put('/projects/:id', (req, res) => {
    projectsDb.update(req.params.id, req.body)
    .then(project => res.status(201).json(project))
    .catch(err => {
        res.status(400).json({ message: "failed to update project"})
    })
})

//DELETE
server.delete('/projects/:id', (req, res) => {
    projectsDb.remove(req.params.id)
    .then(count => res.status(200).json(count))
    .catch(err => {
        res.status(400).json({ message: "could not delete project"})
    })
})

//Actions Endpoints

//GET
server.get('/actions', (req, res) => {
    actionsDb.get()
    .then(actions => res.status(200).json(actions))
    .catch(err => {
        res.status(500).json({ message: "Couldn't retrieve actions" })
    })
})

//GET by ID
server.get('/actions/:id', (req, res) => {
    actionsDb.get(req.params.id)
    .then(action => res.status(200).json(action))
    .catch(err => {
        res.status(404).json({ message: "there is no action by this ID" })
    })
})

//CREATE
server.post('/actions', (req, res) => {
    actionsDb.insert(req.body)
    .then(done => res.status(201).json(done))
    .catch(err => {
        res.status(400).json({ message: "Wasn't able to add new action" })
    })
})

//UPDATE
server.put('/actions/:id', (req, res) => {
    actionsDb.update(req.params.id, req.body)
    .then(action => res.status(201).json(action))
    .catch(err => {
        res.status(400).json({ message: "failed to update action"})
    })
})

//DELETE
server.delete('/actions/:id', (req, res) => {
    actionsDb.remove(req.params.id)
    .then(count => res.status(200).json(count))
    .catch(err => {
        res.status(400).json({ message: "could not delete action"})
    })
})


module.exports = server;