module.exports = app => {
    const router = require('express').Router()
    const mongoose = require('mongoose')
    const Person = require('../../models/Person')
    const Activity = require('../../models/Activity')
    const Team = require('../../models/Team')
    const Group = require('../../models/Group')
    router.get('/people/list', async (req, res) => {
        const allPeople = await Person.find().lean()
        const data = allPeople.filter(i => i.peopleTask != '球队队长')
        res.send(data)
    })
    router.get('/activities/list',async (req, res)=>{
        const data = await Activity.find().lean()
        res.send(data)
    })
    router.get('/activities/:id', async (req, res) => {
        const data = await Activity.findById(req.params.id)
        res.send(data)
    })
    router.get('/teams/list', async (req,res) => {
        const data = await Team.find().lean()
        res.send(data)
    })
    router.get('/teams/:id', async (req, res) => {
        const data = await Team.findById(req.params.id).populate('leader')
        res.send(data)
    })
    router.get('/groups/list', async (req,res) => {
        const data = await Group.find().lean()
        res.send(data)
    })
    router.get('/groups/:id', async (req, res) => {
        const data = await Group.findById(req.params.id)
        res.send(data)
    })
    app.use('/web/api',router)
}