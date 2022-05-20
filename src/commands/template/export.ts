import * as fs from 'fs';
import * as path from 'path';
import { parse } from 'yaml';
import { generateTestcaseTemplate } from '../../commons/generate-templates';

export function templateExport(templateFilePath: string) {
  const txtFile = fs.readFileSync(templateFilePath, 'utf8');
  const testCases = parse(txtFile);
  const templateString = generateTestcaseTemplate(testCases);
  fs.writeFileSync(constructTemplateFile(templateFilePath), templateString, 'utf8');
}

export function constructTemplateFile(inputTemplateFilePath: string): string {
  const testCaseDirName = path.dirname(inputTemplateFilePath);
  const testCaseFileName = path.basename(inputTemplateFilePath, '.yml');
  return path.join(testCaseDirName, testCaseFileName + '.spec.ts');
}
