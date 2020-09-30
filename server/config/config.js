//===========================
// Puerto
//===========================

process.env.PORT = process.env.PORT || 3000;

//===========================
// Entorno
//===========================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


//===========================
// Vencimiento del token
//===========================
// 60s 60min 24h 30d

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

//===========================
// SEED
//===========================

process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

//===========================
// Base de datos
//===========================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}
process.env.URLDB = urlDB



//===========================
// GOOGLE CLIENT ID
//===========================


process.env.CLIENT_ID = process.env.CLIENT_ID || '31761073083-l8lutrof0i8hq864k0ee445sp5ui5eds.apps.googleusercontent.com';