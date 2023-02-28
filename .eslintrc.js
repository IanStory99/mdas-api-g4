module.exports = {
	extends: ["eslint-config-codely/typescript"],
	overrides: [
		{
			files: [],
			parserOptions: {
				project: ["./tsconfig.json"],
			},
		},
	],
	rules: {
		"no-console": "off",
		"@typescript-eslint/no-unsafe-return": "off",
		"@typescript-eslint/no-unsafe-call": "off",
		"@typescript-eslint/no-unsafe-assignment": "off",
		"@typescript-eslint/no-unsafe-member-access": "off",
		"@typescript-eslint/prefer-readonly": "off",
	},
};
