import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { UsersService } from "src/users/users.service";

@ValidatorConstraint({name:'userId',async: true})
export class UserIdValidator implements ValidatorConstraintInterface {
    constructor(private userService : UsersService){}

    async validate(id: number, args: ValidationArguments){
        return await this.userService.exists(id);
    }

    defaultMessage(validationArguments?: ValidationArguments): string {
        return "Author id does not exists";
    }
}