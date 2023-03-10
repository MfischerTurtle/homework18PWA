const router = require("express").Router();

const{
    getAllUser, 
    createUser, 
    getUserById,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/userController')

router.route('/')
    .get(getAllUser)
    .post(createUser)

router.route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)

router.route('/:userId/friends/:friendId')
    .put(addFriend)
    .delete(removeFriend)



module.exports = router;
