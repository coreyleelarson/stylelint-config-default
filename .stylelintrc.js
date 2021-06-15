module.exports = {
  extends: [
    'stylelint-config-recommended-scss',
    'stylelint-prettier/recommended',
  ],
  plugins: ['stylelint-order'],
  rules: { 'order/properties-alphabetical-order': true },
};
