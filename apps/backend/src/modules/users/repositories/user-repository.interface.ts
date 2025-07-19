import { UserDocument } from '../user.schema';

export interface IUserRepository {
  findByEmail(email: string): Promise<UserDocument | null>;
  findById(id: string): Promise<UserDocument | null>;
  create(userData: { email: string; name: string; password: string }): Promise<UserDocument>;
  save(user: UserDocument): Promise<UserDocument>;
  existsByEmail(email: string): Promise<boolean>;
} 