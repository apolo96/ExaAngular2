export interface Usuario {
    Id: number,
    Documento: string,
    Nombre: string,
    Apellido: string,
    TipoUsuario: number,
    NivelUsuario: number,
    Telefono: string,
    Correo: string,
    UserName: string,
    Password: string,
    PasswordModificado: boolean,
    Estado: boolean
}