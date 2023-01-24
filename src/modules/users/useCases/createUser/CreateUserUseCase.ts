import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const exists: User = this.usersRepository.findByEmail(email);

    if (exists) {
      throw new Error("Email already in use");
    }

    const user: User = this.usersRepository.create({ name, email });

    return user;
  }
}

export { CreateUserUseCase };
