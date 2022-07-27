// const hello=(req,res)=> res.send('hello');

const paisesCtrl = {};

const Pais = require("../models/Pais");

paisesCtrl.getPaises = async (req, res) => {
  const paises = await Pais.find();
  res.json(paises);
};

paisesCtrl.createPaises = async (req, res) => {
  const pais = new Pais(req.body);
  console.log(pais);
  await pais.save();
  res.send({ message: "Pais creado" });
};

paisesCtrl.getPais = async (req, res) => {
  const pais = await Pais.findById(req.params.id);
  res.send(pais);
};

paisesCtrl.editPaises = async (req, res) => {
  const pais = await Pais.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "Pais actualizado" });
};

//Eliminar empleado
paisesCtrl.deletePaises = async (req, res) => {
  const pais = await Pais.findByIdAndDelete(req.params.id);
  res.json({ message: "Empleado eliminado" });
};

// empleadosCtrl.hello=(req,res)=>{
//     res.send('hello');
// };
// empleadosCtrl.getEmpleados= async (req,res)=>{
//     // res.send('get empleados');
//    const empleados= await Empleado.find();
//    res.json(empleados);
// };
// empleadosCtrl.createEmpleado= async(req,res)=>{
//     // console.log(req.body);
//     const empleado= new Empleado(req.body);
//     console.log(empleado);
//     await empleado.save();
//     res.send({message:'Empleado creado'});
// };
// empleadosCtrl.getEmpleado= async (req,res)=>{
//     // res.send('OBTENIENDO UN EMPLEADO');
//     console.log(req.params);
//     //const empleado= await Empleado.findOne({_id: req.params.id});
//     const empleado= await Empleado.findById(req.params.id);
//     res.send(empleado);
// };

// empleadosCtrl.editEmpleado= async (req,res)=>{
//     const empleado= await Empleado.findByIdAndUpdate(req.params.id,req.body);
//     res.json({status:'Empleado actualizado'});
// };

// empleadosCtrl.deleteEmpleado= async (req,res)=>{
//     const empleado= await Empleado.findByIdAndDelete(req.params.id);
//     res.json({status:'Empleado eliminado'});
// };

module.exports = paisesCtrl;
