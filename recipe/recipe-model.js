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
	return db('recipe');
}

function getShoppingList(id) {
	return db('recipe').where({ id });
}

function getInstructions(id) {
	return db('recipe')
		.select('instructions')
		.where({ id });
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
