const clientes = require('../models/clientes');

const getAll = (req, res) => {
    console.log("getAll");
    clientes.find(function(err, clientes) {
      res.status(200).send(clientes);
    });
};

const getCompradores = (req, res) => {
    console.log("getCompradores");
    clientes.find({ comprou : true}, {nome: 1, email: 1, _id: 0}, function (err, clientes) {
      res.status(200).send(clientes); 
    });
     
};

const getByCpf = (req, res) => {
    console.log("getByCpf");

    const cpf = req.params.cpf

    clientes.find({ cpf}, function (err, clientes) {
      res.status(200).send(clientes);
});
};

const postCliente = (req, res) => {
    console.log("postCliente");
    let cliente = new clientes(req.body);
    cliente.save(function(err){
      if(err){
        res.status(500).send({ message: err.message})
      }
      res.status(201).send({ status: true, message: 'Aluna incluida com Sucesso!'})
    })
};

module.exports = {
    getAll,
    getCompradores,
    getByCpf,
    postCliente
}
