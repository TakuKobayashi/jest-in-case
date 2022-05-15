import * as fs from 'fs';
import * as path from 'path';
import { parse, stringify } from 'yaml';

export function templateExport(templateFilePath: string) {
  const txtFile = fs.readFileSync(templateFilePath, 'utf8');
  console.log(parse(txtFile));
}
