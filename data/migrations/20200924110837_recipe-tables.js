exports.up = function(knex) {
	return knex.schema
		.createTable('recipe', tbl => {
			tbl.increments();
			tbl
				.text('recipe_name', 128)
				.unique()
				.notNullable();
			tbl.text('description');
			tbl.text('instructions');
		})
		.createTable('ingredient', tbl => {
			tbl.increments();
			tbl.text('ingredient_name', 128);
			tbl
				.integer('recipe_id')
				.unsigned()
				.notNullable()
				.references('recipe.id');
			tbl.integer('quantity');
		})
		.createTable('recipe_ingredient', tbl => {
			tbl
				.integer('recipe_id')
				.unsigned()
				.notNullable()
				.references('recipe.id');
			tbl
				.integer('ingredient_id')
				.unsigned()
				.notNullable()
				.references('ingredient.id');
			tbl.primary('recipe_id', 'ingredient_id');
		});
};

exports.down = function(knex) {
	return knex.schema
		.dropTableIfExists('recipe_inredient')
		.dropTableIfExists('ingredient')
		.dropTableIfExists('recipe');
};
