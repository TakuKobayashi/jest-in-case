import { program, Command } from 'commander';

/**
 * Set global CLI configurations
 */
program.storeOptionsAsProperties(false);

/**
 * Displays clasp version
 */
program.version(process.env.npm_package_version, '-v, --version', 'output the current version');

const templateCommand = new Command('template');
templateCommand.description('Manage test case file and test template jest file');

templateCommand
  .command('export <template-file>')
  .description('export test template to jest file from test case file [yml]')
  .action(async (templateFilePath): Promise<void> => {
    console.log(templateFilePath);
  });
templateCommand
  .command('import <source-file>')
  .description('import test case file [yml] from jest file')
  .action(async (sourceFilePath): Promise<void> => {
    console.log(sourceFilePath);
  });
program.addCommand(templateCommand);

const spreadsheetCommand = new Command('spreadsheet');
spreadsheetCommand.description('Export test case file for spreadsheet file');
spreadsheetCommand
  .command('export <template-file>')
  .description('export test case file to spreadsheet file [csv] from test case file [yml]')
  .action(async (templateFilePath): Promise<void> => {
    console.log(templateFilePath);
  });
program.addCommand(spreadsheetCommand);

program.parse(process.argv);
