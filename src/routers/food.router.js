import { Router } from "express";
import { sample_foods, sample_tags } from "../data.js";

const router = Router();

router.get('/', (req, res) => {
    res.send(sample_foods);
});

// Tags Route  
router.get('/tags', (req, res) => {
    res.send(sample_tags);
});


// Search Food Route
router.get('/search/:searchTerm', (req, res) => {
    const { searchTerm } = req.params;
// // this function takes the 'searchTerm' as input, then attempts to filter the 'sample_foods' from the data and searches for a name that matches the 'searchTerm' .toLowerCase() makes the data and searchTerm caseinsensitive.
    const foods = sample_foods.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    res.send(foods);
});


// ***** Needs fixing, only 'Lunch' tag works *****
router.get('/tag/:tag', (req, res) => {
    const { tag } = req.params;
    const foods = sample_foods.filter(item => item.tags?.includes(tag));
    res.send(foods);
});

router.get('/:foodId', (req, res) => {
    const { foodId } = req.params;
    const food = sample_foods.find(item => item.id === foodId);
    res.send(food);
});


export default router;