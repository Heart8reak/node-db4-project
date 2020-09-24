exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('recipe')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('recipe').insert([
				{
					recipe_name: 'Chicken Chow Mein',
					description: 'Chicken noodle soup ',
					instructions: 'learn how to heat up the chicken'
				},
				{
					recipe_name: 'Sphagetti',
					description: 'fine dining',
					instructions: 'learn how to heat up the sphagetti'
				},
				{
					recipe_name: 'Fine Popcorn',
					description: 'buttered up tasty popcorn',
					instructions: 'put in the microwave and heat up for 2 minutes'
				},
				{
					recipe_name: 'Tasty Salmon',
					description: 'its from the sea',
					instructions: 'we have to catch it and then cook it up and add spic'
				}
			]);
		});
};
