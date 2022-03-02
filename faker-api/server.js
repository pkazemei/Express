const faker = require('@faker-js/faker');
const express = require("express");
const app = express();
const port = 8000;

class User{
    constructor(){
        this._id=faker.datatype.uuid();
        this.firstName=faker.name.firstName();
        this.lastName=faker.name.lastName();
        this.phoneNumber=faker.phone.phoneNumber();
        this.email=faker.internet.email();
        this.password=faker.internet.password();
    }
}

class Company{
    constructor(){
        this._id=faker.datatype.uuid();
        this.name=faker.company.companyName();
        this.address=[
            faker.address.streetAddress(),
            faker.address.city(), 
            faker.address.state(),
            faker.address.zipCode(),
            faker.address.country()
        ]
    }
}

// create new user route using faker API
app.get('/api/users/new', (req,res)=>{
    let newUser = new User()
    res.json({result: newUser})
})

// create new company route using faker API
app.get('/api/companies/new', (req,res)=>{
    let newCompany = new Company()
    res.json({result: newCompany})
})

// create new user and new company route using faker API
app.get('/api/user/company', (req,res)=>{
    let newUser = new User()
    let newCompany = new Company()
    let userComp=[];
    userComp.push([newUser, newCompany]);
    res.json({result: userComp});
})

app.listen( port, () => console.log(`Listening on port: ${port}`) );