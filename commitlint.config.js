module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['fix', 'update', 'docs', 'build', 'feat', 'refactor', 'perf', 'revert', 'chore', 'style', 'test']
    ]
  }
};
