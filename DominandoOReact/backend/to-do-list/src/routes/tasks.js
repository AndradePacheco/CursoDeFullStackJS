const express = require("express");

const checklistDependentRoute = express.Router();
const simpleRoute = express.Router();

const Checklist = require("../models/checklist");
const Task = require("../models/task");

checklistDependentRoute.get('/:id/tasks/new', (req,res) => {
   try{
    let task = Task();
    res.status(200).render('tasks/new', {checklistId: req.params.id, task: task});
    } catch (error){
        res.status(422).render('pages/error', {errors: "Erro ao carregar ao formulário"})
    }
})

checklistDependentRoute.post('/:id/tasks',async (req, res) => {
    let {name} = req.body.task;
    let task = new Task({name, checklist: req.params.id});
    try {
        await task.save();
        let checklist = await Checklist.findById(req.params.id);
        checklist.tasks.push(task);
        await checklist.save();
        res.redirect(`/checklist/${req.params.id}`)
    } catch (error) {
        let errors = error.errors;
        res.status(422).render('tasks/new', {task: {...task, errors}, checklistId: req.params.id})
    }
})

simpleRoute.delete('/:id',async (req, res) => {
    try {
        let task = await Task.findById(req.params.id);
        let checklist = await Checklist.findById(task.checklist);
        let taskIndex = checklist.tasks.indexOf(task._id);
        checklist.tasks.splice(taskIndex, 1);
        await Task.deleteOne({_id: task._id});
        checklist.save();
        res.redirect(`/checklist/${checklist._id}`)
    } catch (error) {
        res.status(422).render('pages/error', {errors: "Erro ao remover tarefa"});
    }
})

simpleRoute.put('/:id', async (req, res) => {
    let task =await Task.findById(req.params.id);
    try {
        task.set(req.body.task);
        await task.save();
        res.status(200).json({task});
    } catch (error) {
        let errors = error.errors;
        res.status(422).json({task: {...errors}});
    }
})

module.exports = {
    checklistDependent: checklistDependentRoute,
    simple: simpleRoute
};
