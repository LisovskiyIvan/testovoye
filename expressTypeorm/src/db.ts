import { AppDataSource } from "./data-source"
import { User } from "./entity/User"


AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
    })
    .catch((error) => console.log(error))

const userRepository = AppDataSource.getRepository(User) 

export const db = {
    addUser: async(user: User) => {
        const u = new User()
        u.name = user.name
        u.age = user.age
        return  await userRepository.createQueryBuilder().insert().into(User).values({name: user.name, age: user.age}).execute()
    },
    getUsers: async() => {
        return await userRepository.createQueryBuilder('user').getMany()
    },
    getUserById: async(id: number) => {
        return await userRepository.createQueryBuilder('user').where("user.id = :id", {id: id}).getOne()
    },
    deleteUser: async(id: number) => {
        return (await userRepository.createQueryBuilder().delete().from(User).where("id = :id", {id: id}).execute()).affected != 0 ? true : false
    },
    updateUser: async(id: number, user: User) => {
        return (await userRepository.createQueryBuilder().update(User).set({name: user.name, age: user.age}).where("id = :id", {id: id}).execute()).affected != 0 ? true : false
    }
}
