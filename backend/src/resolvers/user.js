import models from '../models'

export default {
  Query: {
    me: (parent, args, { me }) => {
      return me
    },
    user: (parent, { id }) => {
      return models.users[id]
    },
    users: () => {
      return models.users
      // console.log(Object.keys(models.users))
      // var arr = []
      // Object.keys(models.users).forEach((key) => {
      //   var user = {
      //     username: models.users[key].username,
      //     id: models.users[key].id,
      //     gold: Object.values(models.users[key].gold)
      //   }
      //   arr.push(user)
      //   console.log('here')
      // })
      // console.log(arr)
      // return arr
    }
    // ,gold: ({ id, server }) => {
    //   return models.users[id].gold[server]
    // },
    // allgold: ({ id }) => {
    //   return Object.values(models.users[id].gold)
    // }
  }
}
