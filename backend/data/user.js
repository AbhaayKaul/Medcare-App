import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin-User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
    isDoctor: true,
  },
  {
    name: 'Ash',
    email: 'ash@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Misty',
    email: 'misty@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
