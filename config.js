const mongoose = require('mongoose');

// Reemplaza <db_password> con tu contraseña real

const uri = "mongodb+srv://Arturo:SRa3mDlL4ARBfKPT@cluster0.av1bm.mongodb.net/escuela?retryWrites=true&w=majority&appName=Cluster0";


const dbconnect = async () => {
    try {
        await mongoose.connect(uri);
        console.log("Conexión exitosa a la db");
    } catch (err) {
        console.error("Error de conexión", err);
    }
};

module.exports = dbconnect;
