import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
	rules: {
		'@stylistic/indent': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/ban-types': 'off',
		'@typescript-eslint/no-unused-vars': 'warn',
		'arrow-parens': 'off',
		'no-unused-vars': 'warn',
		'no-case-declarations': 'off',
		'no-console': 'warn',
		'no-unsafe-optional-chaining': 'off',
		'quote-props': 'off',
		'vue/html-indent': 'off',
		'vue/max-attributes-per-line': 'off',
		'vue/no-multiple-template-root': 'off',
		'vue/no-v-for-template-key': 'warn',
		'vue/valid-v-for': 'off',
		'vue/no-unused-refs': 'error',
		'vue/multi-word-component-names': 'off',
		'vue/valid-v-slot': 'off',
		'vue/html-self-closing': [
			'error',
			{
				html: {
					void: 'always',
				},
				svg: 'always',
				math: 'always',
			},
		],
		'vue/attributes-order': [
			'error',
			{
				order: [
					'EVENTS',
					'DEFINITION',
					'LIST_RENDERING',
					'CONDITIONALS',
					'RENDER_MODIFIERS',
					'GLOBAL',
					['UNIQUE', 'SLOT'],
					'TWO_WAY_BINDING',
					'CONTENT',
					'OTHER_ATTR',
				],
				alphabetical: false,
			},
		],
		'no-duplicate-imports': ['error', { includeExports: true }],
	},
})