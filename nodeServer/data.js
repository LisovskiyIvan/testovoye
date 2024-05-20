let users = []
let user_id = 1

module.exports = {
    getUsers: () => users,
    addUser: (user) => {
        if (user.name && user.age) {
            user.id = user_id++
            users.push(user)
            return users[user_id - 2]
        } else return 'Name and age are required'
    },
    updateUser: (updateData, id) => {
        const userIndex = users.findIndex(u => u.id == id)
        // Обновновление двух полей
        if (updateData.name != null && updateData.age != null) {
            users[userIndex] = {...updateData, "id": id}
            return users[userIndex]
        } // Обновление только поля имени
        else if (updateData.name != null) {
            users[userIndex] = {"name": updateData.name, "age": users[userIndex].age, "id": id}
            return users[userIndex]
        } // Обновление только поля возраста
        else if (updateData.age != null) {
            users[userIndex] = {"name": users[userIndex].name, "age": updateData.age, "id": id}
            return users[userIndex]
        } else return 'No data was provided'
    },
    getUserById: (id) => {
        const userIndex = users.findIndex(u => u.id == id)
        return userIndex != -1 ? users[userIndex] : `No user found with id = ${id}`
    },
    deleteUser: (id) => {
        const userIndex = users.findIndex(u => u.id == id)
        return userIndex != -1 ? users.splice(users.findIndex(u => u.id == id), 1) : `No user found with id = ${id}`
    }
}

