const express = require("express");

const router = express.Router();

const Checklist = require("../models/checklist");

router.get('/', async (req,res) => {
    try {
        let checklists = await Checklist.find();
        res.status(200).render('checklists/index', {checklists: checklists});
    } catch (error) {
        res.status(500).json(error);
        res.status(500).render('pages/error', {error: "Erro ao carregar as páginas"});
    }
});

router.get('/new' , async (req, res) => {
  try{
    let checklist = new Checklist();
    res.status(200).render('checklists/new', {checklist: checklist}); 
} catch(error){
    res.status(500).render('pages/error', {error: 'Erro ao carregar o formulário'});
}
})

router.get('/:id/edit' ,async (req, res) => {
    try {
        let checklist = await Checklist.findById(req.params.id);
        res.status(200).render('checklists/edit', {checklist: checklist});
    } catch (error) {
        res.status(500).render('pages/error', {error: 'Erro ao carregar a edição do checklist'});
    }
})

router.post('/', async (req,res) => {
    let { name } = req.body.checklist;
    let checklist;
    try {
       checklist = await Checklist.create({name});
        res.redirect('/checklist')
    } catch (error) {
        res.status(422).render('checklists/new', {checklist: {...checklist, error}})
    }
})

router.get('/:id', async (req,res)=>{
    try {
        let checklist = await Checklist.findById(req.params.id).populate('tasks');
        res.status(200).render('checklists/show', {checklist: checklist});
    } catch (error) {
        res.status(422).json(error)
        res.status(422).render('pages/error', {error: "Erro ao exibir as listas de tarefa"});
    }
})

router.put('/:id', async (req, res) => {
    let {name} = req.body.checklist;
    let checklist = await Checklist.findById(req.params.id);
    try {
        await Checklist.updateOne({_id: req.params.id},{name});
        res.redirect('/checklist');
    } catch (error) {
        let errors = error.errors;
        res.status(422).render('checklists/edit', {checklist: {...checklist, errors}})
    }
})

router.delete('/:id', async (req, res) => {
    try {
        let checklist = await Checklist.findByIdAndRemove(req.params.id);
        res.redirect('/checklist')
    } catch (error) {
        res.status(422).render('pages/error', {error: "Erro ao deletar lista de tarefas"});
    }
})

module.exports = router;