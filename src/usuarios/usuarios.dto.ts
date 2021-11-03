import { IsEnum, IsInt, IsString } from "class-validator";
import { TipoUsuario } from "src/enums/tipo_usuario.enum";
import { GenericDto } from "src/shared/abstract/generic-dto";

export class UsuariosDto extends GenericDto {
    
    @IsInt()
    id: number;

    @IsString()
    nombre: string;

    @IsString()
    login: string;

    @IsString()
    password: string;

    @IsEnum(TipoUsuario)
    tipo_usuario: TipoUsuario;
}