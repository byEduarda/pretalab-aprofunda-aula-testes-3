import { User } from '../../core/entities/User';
import { UserRepository } from '../../core/repositories/UserRepository';
import { userModel } from '../database/mongooseUserModel';

export class MongoUserRepository implements UserRepository {
    private toEntity(doc: any): User {
        return new User(doc.id, doc.name, doc.login, doc.email, doc.password)
    }

    async save(user: User) {
        await userModel.create(user)
    }

    async findByEmail(email: string) {

        const doc = await userModel.findOne({ email });

        return doc ? this.toEntity(doc) : null

    }

    async findById(id: string) {

        const doc = await userModel.findOne({ id });

        return doc ? this.toEntity(doc) : null

    }

    async update(user: User) {
        const doc = await userModel.findByIdAndUpdate(
            user.id, {
                name: user.name,
                login: user.login,
                email: user.email,
                password: user.password
            },
            { new: true }
        );
    }

}
