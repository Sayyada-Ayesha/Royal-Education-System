const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  if (content.includes('useDocumentTitle')) return;

  const match = content.match(/(const|function) (\w+Page)(?:: React\.FC)?\s*=\s*\(\)\s*(?:=>)?\s*{/);
  if (!match) {
    const match2 = content.match(/export default function (\w+Page)\(\) {/);
    if (!match2) {
       console.log(`Skipped ${file}`);
       return;
    }
  }

  const componentName = match ? match[2] : content.match(/export default function (\w+Page)\(\) {/)[1];
  let title = componentName.replace('Page', '').replace(/([A-Z])/g, ' $1').trim();

  const fullTitle = `${title} | The Royal Education System`;
  const importStatement = `import { useDocumentTitle } from '../hooks/useDocumentTitle';\n`;
  
  const lastImportIndex = content.lastIndexOf('import ');
  const nextNewlineAfterImport = content.indexOf('\n', lastImportIndex);
  content = content.slice(0, nextNewlineAfterImport + 1) + importStatement + content.slice(nextNewlineAfterImport + 1);

  content = content.replace(
    /((const|function) (\w+Page)(?:: React\.FC)?\s*=\s*\(\)\s*(?:=>)?\s*{|export default function (\w+Page)\(\) {)/,
    `$1\n  useDocumentTitle('${fullTitle}');`
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${file}`);
});
