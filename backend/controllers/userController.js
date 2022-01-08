import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

// @desc    Auth user
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  console.log(email, password)

  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      isDoctor: user.isDoctor,
    })
  } else {
    console.log('testing')
    res.status(401)
    throw new Error('Invalid email or password')
  }
})

export { authUser }