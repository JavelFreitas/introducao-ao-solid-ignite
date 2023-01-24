import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const exists = this.usersRepository.findById(user_id);

    if (!exists) {
      throw new Error("User not found");
    }

    const user = this.usersRepository.turnAdmin(exists);

    return user;
  }
}

export { TurnUserAdminUseCase };
