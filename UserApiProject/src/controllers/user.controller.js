
import * as UserService from '../services/user.service';

/**
 * Controller to get all users available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getAllUsers = async (req, res, next) => {
    const data = await UserService.getAllUsers();
    res.status(data.code).json({
      code: data.code,
      data: data.data,
      message: data.message
    });
};

/**
 * Controller to get a single user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getUser = async (req, res, next) => {
    console.log(`fetching the details of user ${req.params.id}`)
    const data = await UserService.getUser(req.params.id);
    res.status(data.code).json({
      code: data.code,
      data: data.data,
      message: data.message
    });
};
/**
 * Controller to create a new user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const newUser = async (req, res, next) => {
    const data = await UserService.newUser(req.body);
    res.status(data.code).json({
      code: data.code,
      data: data.data,
      message: data.message
    });
};

/**
 * Controller to update a user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const updateUser = async (req, res, next) => {
    const data = await UserService.updateUser(req.params.id, req.body);
    res.status(data.code).json({
      code: data.code,
      data: data.data,
      message: data.message
    });
};

/**
 * Controller to delete a single user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const deleteUser = async (req, res, next) => {
    const data = await UserService.deleteUser(req.params.id);
    res.status(data.code).json({
      code: data.code,
      data: data.data,
      message: data.message
    });
};

// export const getUserByName = async (req, res, next) => {
//   try {
//     const data = await UserService.getUserByName(req.params.firstName)
//     res.status(data.code).json ({
//       code : data.code,
//       data : data.data,
//       message: data.message
//     })
//   }
//   catch (error) {
//     next(error);
//   }
// }
