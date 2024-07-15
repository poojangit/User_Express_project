import HttpStatus from 'http-status-codes';
import sequelize, { DataTypes } from '../config/database';
const User = require('../models/user')(sequelize, DataTypes);

//get all users
export const getAllUsers = async () => {
  try {
  const data = await User.findAll();
  console.log(data.length);
  if(data.length == 0){
    return {
      code : HttpStatus.NOT_FOUND,
      data : [],
      message : "no users found"
    }
  }
  return {
    code : HttpStatus.OK,
    data : data,
    message : "All the users details fetched successfully!!"
  };
}
catch(error) {
  return {
    code : HttpStatus.INTERNAL_SERVER_ERROR ,
    data : [] ,
    message  :"Error found"
  }
}
}

//create new user
export const newUser = async (body) => {
  try{
  const checkUser = await User.findOne({
    where:{
      email : body.email
    }
  })
console.log(checkUser);
  if (checkUser == null) {
    // console.log("not found");
    const data = await User.create(body);
    return {
      code: HttpStatus.CREATED,
      data : data, 
      message : "User created Successfully!"
    }
  }
  return {
    code: HttpStatus.NOT_IMPLEMENTED,
    data : [], 
    message : "User Already exists"
  }
}
catch(error) {
  return {
    code : HttpStatus.INTERNAL_SERVER_ERROR ,
    data : [] ,
    message  :"Error found"
  }
}
};
//update single user
export const updateUser = async(id, body) => {
  try {
  const checkUser = await User.findOne({
    where : {
      id : id
    }
  })
  if(checkUser == null){
    return{
      code : HttpStatus.NOT_FOUND,
      data : [],
      message : "User not found"
    }
  }
  await User.update (body,{
    where : {
      id : id
    }
  })

  const updatedUser = await User.findOne({
    where : {
      id : id
    }
  })
  return {
    code : HttpStatus.OK,
    data : updatedUser,
    message : "User got updated Successfully!!"
  }
}
catch(error) {
  return {
    code : HttpStatus.INTERNAL_SERVER_ERROR ,
    data : [] ,
    message  :"Error found"
  }
}
}

//delete single user
export const deleteUser  = async(id) => {
  try {
  const checkUser = await User.findOne({
    where : {
      id : id
    }
  })
  console.log(checkUser);
  if(checkUser== null){
    return{
      code: HttpStatus.NOT_FOUND,
      data: [],
      message: "No User Found"
    }
  }
  await User.destroy({
    where : {
      id : id
    }
  })
  return {
    code : HttpStatus.OK,
    data : [],
    message : "User deleted Successfully!"

  }
}
catch(error) {
  return {
    code : HttpStatus.INTERNAL_SERVER_ERROR ,
    data : [] ,
    message  :"Error found"
  }
}
}

//get single user
export const getUser = async (id) => {
  // const data = await User.findOne({
  //   where : {
  //     id : id
  //   }
  // })
  const data = await User.findByPk(id)
  if(data == null){
    return {
      code : HttpStatus.NOT_FOUND,
      data : [],
      message : "No User found"
    }
  }
  return {
    code : HttpStatus.OK,
    data : data,
    message : "User details fetched successfully"
  }
};

