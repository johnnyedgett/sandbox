// import models from '../models'

// export default {
//   Query: {
//     messages: () => {
//       return Object.values(models.messages)
//     },
//     message: (parent, { id }) => {
//       return models.messages[id]
//     }
//   },

//   Message: {
//     user: message => {
//       return models.users[message.userId]
//     }
//   },

//   Mutation: {
//     createMessage: (parent, { text }, { me, models }) => {
//       const id = new Date().getTime()
//       const message = {
//         id,
//         text,
//         userId: me.id
//       }
//       models.messages[id] = message
//       models.users[me.id].messageIds.push(id)
//       return message
//     }
//   }
// }
