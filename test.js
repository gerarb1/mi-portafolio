const fs = require('fs');

console.log('Verificando archivos del portafolio...');
const archivos = ['index.html', 'style.css'];

archivos.forEach(archivo => {
    if (!fs.existsSync(archivo)) {
        console.error(`FALLO: no se encontró ${archivo}`);
        process.exit(1);
    }
});

console.log('Verificación completada: portafolio listo.');