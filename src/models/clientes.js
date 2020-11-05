const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
    nome: { type : String},
    email: { type: String },
    cpf: { type: Number },
    dataNascimento: { type: String },
    estadoCivil: { type: String },
    telefone: { type: Number },
    comprou: { type: Boolean}
},{
    versionKey: false
});

const cliente = mongoose.model('cliente', clienteSchema);

module.exports = cliente