var express = require('express');
var router = express.Router();

var StudentService = require('../services/StudentService');


router.get('/all', StudentService.getAllStudents);
router.get('/search', StudentService.search);
router.get('/:id', StudentService.getStudent);
router.post('/', StudentService.addStudent);
router.put('/:id', StudentService.updateStudent);

module.exports = router;