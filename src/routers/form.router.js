import { Router } from 'express';
import express from 'express';
import Form from '../../models/formSchema.js'


const router = Router();

router.get('/', async (req, res) => {
    try {
        // Create a new form instance
        const forms = await Form.find()
        res.send(forms);

    } catch (error) {
        // Handle any errors and respond with an error message
        console.error('Error submitting form:', error);
        res.status(500).json({ success: false, message: 'Failed To Submit Form' });
    }
});

router.post('/', async (req, res) => {
    try {
        console.log(req.body);
        // Extract form data from the request body
        const { userID, email, occasion, first_name, last_name, message, pickup_date, pickup_time, phone_number } = req.body.formData;
        const {totalCount, totalPrice} = req.body.products
        const Foods = [];
        req.body.products.items.forEach(product => {
            Foods.push(product.food)
        })

        // Create a new form instance
        const form = new Form({
            userID,
            email,
            occasion,
            first_name,
            last_name,
            message,
            pickup_date,
            pickup_time,
            phone_number,
            products: Foods,
            quantity: totalCount,
            total: totalPrice,
        });

        // Save the form to the database
        const savedForm = await form.save();
        // console.log(savedForm);
        // Respond with a success message and the saved form
        res.status(201).json({ success: true, message: 'Your Form Was Submitted Successfully', form: savedForm });
    } catch (error) {
        // Handle any errors and respond with an error message
        console.error('Error submitting form:', error);
        res.status(500).json({ success: false, message: 'Failed To Submit Form' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params
    
        // Delete Form
        const form = await Form.findOneAndDelete({ _id: id })
        
        res.send({deleted: true, form: form})
        
    } catch (error) {
        // Handle any errors and respond with an error message
        console.error('Error submitting form:', error);
        res.status(500).json({ success: false, message: 'Failed To Submit Form' });
    }
});

router.put('/', async (req, res) => {
    try {

        const {id} = req.body

        // Delete Form
        const forms = await Form.findOneAndUpdate({ _id: id }, {...req.body})
        res.send({updated: true, form: forms})
        
    } catch (error) {
        // Handle any errors and respond with an error message
        console.error('Error submitting form:', error);
        res.status(500).json({ success: false, message: 'Failed To Submit Form' });
    }
});

export default router;