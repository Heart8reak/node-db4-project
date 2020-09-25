const db = require('../data/db.config');

module.exports = {
	getRecipes,
	getShoppingList,
	getInstructions,
	addRecipes,
	update,
	remove
};

function getRecipes() {
	return db('recipes');
}

function getShoppingList(recipe_id) {
	return db('ingredients').where({ recipe_id });
}

function getInstructions(recipe_id) {
	return db('steps').where({ recipe_id });
}

function addRecipes(newRecipe) {
	return db('recipe').insert(newRecipe);
}

function update(changes, id) {
	return db('recipe')
		.where({ id })
		.update(changes);
}

function remove(id) {
	return db('recipe')
		.where({ id })
		.del();
}
