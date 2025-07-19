import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../user.schema';
import { IUserRepository } from './user-repository.interface';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}

  async findByEmail(email: string): Promise<UserDocument | null> {
    return this.userModel.findOne({ email }).exec();
  }

  async findById(id: string): Promise<UserDocument | null> {
    return this.userModel.findById(id).exec();
  }

  async create(userData: { email: string; name: string; password: string }): Promise<UserDocument> {
    const user = new this.userModel(userData);
    return user.save();
  }

  async save(user: UserDocument): Promise<UserDocument> {
    return user.save();
  }

  async existsByEmail(email: string): Promise<boolean> {
    const count = await this.userModel.countDocuments({ email }).exec();
    return count > 0;
  }
} 