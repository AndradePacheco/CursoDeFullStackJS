const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/javascriptNote', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=> console.log('Succesful connection!'))
.catch((err) => console.log(err));