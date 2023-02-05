import mongoose from "mongoose"
import express from "express"
import Users from "../models/users.js"


async function postUser(req, res){
    const user = req.body
    const newUser = await Users.create(user)

    return res.status(201).json(newUser)
}

async function selectUser(req, res){
    const users = await Users.find()

    return res.status(200).json(users)
}

async function putUser(){
    
}

async function deleteUser(req, res){
    const id =  req.params.id

    await Users.findByIdAndDelete({
        _id: id
    })
    
    return res.status(200).json({ "msg": "usuario deletetado com existo"})
}


export { postUser, selectUser, putUser, deleteUser }