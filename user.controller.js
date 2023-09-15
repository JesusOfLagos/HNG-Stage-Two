const Person = require('./person.model');

async function createNewPerson(req, res) {
    try {
        const { name } = req.body;  
        if (!name || typeof name !== 'string' || name.length < 5) {
            return res.status(400).json({ error: 'Name is required, should be a string and should contain at least 5 letters' });
          }
        const newPerson = new Person({
            name
    });
        await newPerson.save();
        const personId = newPerson._id;
        return res.status(201).json({ message: 'Person created successfully', personId });
    } catch (error) {
        return res.status(500).json({ error: 'Cannot create a user at the moment.' });
    }
}

async function getPerson(req, res) {
    try {
        const { id } = req.params;
        const person = await Person.findById(id);
        if (!person) {
            return res.status(404).json({ error: 'Cannot find the person' });
        }
        return res.status(200).json(person);
    } catch (error) {
        return res.status(500).json({ error: 'Cannot fetch the person at the moment.' });
    }
}


async function updatePerson(req, res) {
    try {
        const { id } = req.params;
        const { name } = req.body;
        if (!name || typeof name !== 'string' || name.length < 5) {
            return res.status(400).json({ error: 'Name is required, should be a string and should contain at least 5 letters' });
          }
          const person = await Person.findOneAndUpdate({ _id: id }, { name })
          await person.save();
          return res.status(200).json({ message: 'Person updated successfully' });
        } catch (error) {
        return res.status(500).json({ error: 'Cannot update the person at the moment.' });
    }
}
    
    
    
    
    
async function deletePerson(req, res) {
    try {
       const { id } = req.params;
       const person = await Person.findByIdAndDelete(id);
         if (!person) {
             return res.status(404).json({ error: 'Cannot find the person' });
         }
            return res.status(200).json({ message: 'Person deleted successfully' });
    } catch (error) {
        return res.status(500).json({ error: 'Cannot delete the person at the moment.' });
    }
}


module.exports = { createNewPerson, getPerson, updatePerson, deletePerson };