import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { RoleService } from "src/users/role.service";

@ValidatorConstraint({name:'existingId',async: true})
export class RolIdValidator implements ValidatorConstraintInterface {
    constructor(private roleService : RoleService){}

    async validate(id: number, args: ValidationArguments){
        return await this.roleService.exist(id);
    }

    defaultMessage(validationArguments?: ValidationArguments): string {
        return "Rol id does not exists";
    }
}