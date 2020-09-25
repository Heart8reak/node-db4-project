exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('steps')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('steps').insert([
				{ recipe_id: 1, step_number: 1, instructions: 'This is the first step and then there is another one' },
				{ recipe_id: 1, step_number: 2, instructions: 'This is the second step and then there is another one' },
				{ recipe_id: 1, step_number: 3, instructions: 'This is the third step and then there is another one' }
			]);
		});
};
