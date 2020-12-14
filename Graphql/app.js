import { GraphQLServer } from 'graphql-yoga'

const Users = [
  {
    id: 1,
    username: 'muhammet',
    city: 'Ankara'
  },
  {
    id: 2,
    username: 'ahmet',
    city: 'Istanbul'
  },
  {
    id: 3,
    username: 'gulistan',
    city: 'Muradiye'
  }
]
const Posts = [
  {
    id: 1,
    title: 'merhaba arakdaslar sizi cok seviyorum',
    userId: 1
  },
  {
    id: 2,
    title: 'merhaba arakdaslar sizi cok seviyorum',
    userId: 2
  },
  {
    id: 3,
    title: 'merhaba arakdaslar sizi cok seviyorum',
    userId: 3
  }
]
//tip tanimlari olusturma schema
// ! isareti : null donmemesini sagliyor ,mutlaka geriye donus degeri olmasini isti.
const typeDefs = `
  type Query {
    user(id: ID!):User!
    post(id: ID!):Post!
    users:[User!]!
    posts:[Post!]!
  }
  type User{
      id: ID!
      username:String!
      city:String
  }
  type Post{
      id: ID!
      title: String!
      userId: Int!
  }
 
`
//tip tanimlarini karsilama onlara cevap donme
// args : user() parametre olarak gonderdigimiz deger demektir.
const resolvers = {
  Query: {
    user: (parent, args) => {
      return Users.find(user => user.id === +args.id)
    },
    post: (parent, args) => {
        return Posts.find(user => (user.id).toString() === args.id)
    },
    users:(args)=> Users,
    posts:(args) => Posts
  }
}

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server is running on localhost:4000'))
