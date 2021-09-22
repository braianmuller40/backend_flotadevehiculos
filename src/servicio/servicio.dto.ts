import { IsEnum, IsInt, isInt, IsString } from "class-validator";
import { TipoUsuario } from "src/enums/tipoUsuario.enum";




export class ServicioDto {
    
    @IsInt()
    id: number;

    @IsEnum(TipoUsuario)
    usuario: TipoUsuario;

    @IsString()
    tipoServicio: string;

    @IsInt()
    valorServicio: number;

    @IsString()
    fechaServicio: Date;

    @IsInt()
    kmInicial: number;

    @IsInt()
    kmFinal: number;

    @IsString()
    descripcion: string;

}