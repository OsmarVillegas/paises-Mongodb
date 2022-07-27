// const hello=(req,res)=> res.send('hello');

const paisesCtrl2={};
//const empleadosCtrl={};

//const Empleado= require('../models/Empleado');

paisesCtrl2.getPaises= async (req,res)=>{
    req.getConnection((err,conn) => {
        conn.query('SELECT * FROM pais',(err,rows) => {
            if(err){
                res.json(err);
            }
            res.json(rows);
        });
    });
};

// Crear un empleado
paisesCtrl2.createPaises= async (req,res)=>{
    const data= req.body;
    console.log(data);
    req.getConnection((err,conn) => {
        conn.query('INSERT * FROM pais SET ?',[data],(err,empleado) => {
            res.redirect('/empleados');
        });
    });

};

//Consultar empleado
paisesCtrl2.getPaises= (req,res)=>{
    const {id}= req.params;
    req.getConnection((err,conn) => {
        conn.query('SELECT * FROM pais WHERE _id = ?', [id],(err,rows) =>
        {
            res.json(rows);
        })

    })
}

//Actualizar un empleado
paisesCtrl2.editPaises= (req,res) => {
    const [id] = req.params;
    const data= req.body;
    req.getConnection((err,conn) => {
        conn.query('UPDATE pais SET ? WHERE _id = ?', [data,id],(err,rows) => {
            res.redirect('/paises')
        })
    })
}



//Eliminar empleado

    paisesCtrl2.deletePaises= (req,res) => {
        const { id }= req.params;
        re.getConnection((req,conn) => {
            conn.query('DELETE FROM pais WHERE _id = ?', [id],(err,rows) =>{
                res.send(rows);
            });
        });
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

module.exports= empleadosCtrl2;
