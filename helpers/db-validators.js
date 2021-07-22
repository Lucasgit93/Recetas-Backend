const especialidadPermitida = ( especialidad = '', especialidades = []) => {

    const incluida = especialidades.includes( especialidad );
    if(!incluida){
        throw new Error(`La especialidad ${especialidad} no esta permitida`)
    }

    return true;


}



module.exports = {
    especialidadPermitida
}