import Person from "../models/PersonModels.js";


export const getRoot = async (req, res) => {
    res.send("Welcome  Person runs")
}
// Create a new person

export const createPerson = async (req, res) => {
    const { name, age, favouriteFoods } = req.body
    try {
        const person = await Person({ 
            name, 
            age, 
            favouriteFoods 
        })
        await person.save()
        
        res.status(201).json(person)
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
}

// Get all people

export const getPeople = async (req, res) => {
    try {
        const people = await Person.find()
        res.status(200).json(people)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}
// edit people
    export const editPeople = async (req, res) =>{
        const {_id} = req.params
       try {
           if(!mongoose.Types.ObjectId.isValid(_id)){
               res.status(404).send("person does not exist")
            }
   
           
       
       const person = await person.findByIdAndUpdate(_id, {...req.body})
       if (!person){
            res.status(404).send("person does not exist")
        }
        res.status(200).send("record updated")
    }
    catch (error){
        res.status(404).send("person does not exist")
    }
   
}

