exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('ingredients')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('ingredients').insert([
				{ recipe_id: 1, name: 'butter', quantity: 2 },
				{ recipe_id: 1, name: 'onion', quantity: 5 },
				{ recipe_id: 1, name: 'cheese', quantity: 1 },
				{ recipe_id: 1, name: 'pizza', quantity: 3 },
				{ recipe_id: 1, name: 'cake', quantity: 6 },
				{ recipe_id: 1, name: 'carrots', quantity: 200 }
			]);
		});
};
