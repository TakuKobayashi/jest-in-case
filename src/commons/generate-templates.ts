export function generateTestcaseTemplate(testCases: any): string {
  if (Array.isArray(testCases)) {
    const testcaseTemplateParts: string[] = [];
    for (const testCase of testCases) {
      const testcaseTemplatePart = generateTestcaseTemplate(testCase);
      testcaseTemplateParts.push(testcaseTemplatePart);
    }
    return testcaseTemplateParts.join('\n\n');
  } else if (typeof testCases === 'object') {
    const testcaseTemplateParts: string[] = [];
    const describeKeys = Object.keys(testCases);
    for (const describeKey of describeKeys) {
      const describeSection = generateDescribeCase(describeKey.toString(), testCases[describeKey], generateTestcaseTemplate);
      testcaseTemplateParts.push(describeSection);
    }
    return testcaseTemplateParts.join('\n\n');
  } else {
    return generateTestCase(testCases.toString());
  }
}

export function generateDescribeCase(describeKey: string, testCasesValue: any, innerSecion: (testCases: any) => string): string {
  const testcaseTemplateParts: string[] = [];
  const describeSection = `describe('${describeKey}', () => {`;
  testcaseTemplateParts.push(describeSection);
  const testcaseTemplatePart = innerSecion(testCasesValue);
  testcaseTemplateParts.push(testcaseTemplatePart);
  const closeSection = '})';
  testcaseTemplateParts.push(closeSection);
  return testcaseTemplateParts.join('\n');
}

export function generateTestCase(testCaseLabel: string): string {
  // TODO: Select it case or test case
  return `it('${testCaseLabel}', () => {})`;
}
