import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PersonSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    favouriteFoods: {
        type: [String]
    }
});

PersonSchema.static.createperson = async function (name, favouriteFoods) {
    try {
        if(!name  || !favouriteFoods) {
            throw new Error('Please provide all fields')
        }
        const exists = await this.findOne({ name })
        if(exists) {
            throw new Error('Person already exists')
        }
        const person = new this({ name, favouriteFoods })
        await person.save()
    }catch(error) {
        throw new error(error.message)
        
    }   
}

const Person = mongoose.model('Person', PersonSchema)
export default Person
