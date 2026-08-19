module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    
    require:['src/tests/steps/*.ts',
             'src/tests/commons/hooks.ts'
    ],
    paths: ['src/tests/features/*.feature'],

    format: ['progress-bar',
      'html:reports/cucumber-report.html',
      'json:reports/cucumber-report.json',
    ],

    
    dryRun:false
  }
};
