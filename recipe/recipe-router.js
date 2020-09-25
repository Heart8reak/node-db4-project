const express = require('express');

const recipe = require('./recipe-model');

const router = express.Router();

router.get('/', (req, res) => {
	recipe
		.getRecipes()
		.then(recipeList => {
			res.status(200).json({ message: 'Sucessfully retrieved all Recipes', recipeList });
		})
		.catch(err => {
			res.status(400).json({ message: 'Failed to retrieve your list', error: err });
		});
});

router.get('/:id/ingredients/', (req, res) => {
	const { id } = req.params;
	recipe
		.getShoppingList(id)
		.then(ingredients => {
			res.status(200).json({ message: 'Sucessfully retrieved all ingredients', ingredients });
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to retrieve ID from database', Error: err });
		});
});

router.get('/:id/instructions', (req, res) => {
	const { id } = req.params;
	recipe
		.getInstructions(id)
		.then(instructions => {
			res.status(200).json({ message: 'Successfully retrieve your instructions', instructions });
		})
		.catch(err => {
			res.status(500).json({ message: 'Database Error', Error: err });
		});
});

router.post('/', (req, res) => {
	const recipeData = req.body;
	recipe
		.addRecipes(recipeData)
		.then(newRecipe => {
			res.status(201).json({ message: ' Created a new recipe', newRecipe });
		})
		.catch(err => {
			res.status(404).json({ message: 'Failed to create new recipe', err });
		});
});

router.put('/:id', (req, res) => {
	const { id } = req.params;
	const changes = req.body;
	recipe
		.getShoppingList(id)
		.then(oldRecipe => {
			if (oldRecipe) {
				recipe.update(changes, id).then(updatedRecipe => {
					res.status(200).json({ message: 'Successfully updated recipe', updatedRecipe });
				});
			} else {
				res.status(404).json({ message: 'Could not find the recipe with the given ID' });
			}
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to update the recipe', Error: err });
		});
});

router.delete('/:id', (req, res) => {
	const { id } = req.params;
	recipe
		.remove(id)
		.then(deleted => {
			if (deleted) {
				res.status(200).json({ message: 'successfully deleted the recipe' });
			} else {
				res.status(404).json({ message: 'Could not find the recipe with the given ID' });
			}
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to delete the recipe', Error: err });
		});
});

module.exports = router;
