import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const exists: User = this.usersRepository.findById(user_id);

    if (!exists) {
      throw new Error("User not found");
    }

    if (exists.admin === false) {
      throw new Error("Access denied");
    }

    const users: User[] = this.usersRepository.list();

    return users;
  }
}

export { ListAllUsersUseCase };
