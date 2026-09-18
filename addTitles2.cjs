const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Skip if already added
  if (content.includes('useDocumentTitle')) {
    return;
  }

  // Find component name
  const match = content.match(/(?:export const|export default function) (\w+Page)(?:: React\.FC = \(\) =>)?\s*\(\)\s*{/);
  if (!match) return;

  const componentName = match[1];
  let title = componentName.replace('Page', '').replace(/([A-Z])/g, ' $1').trim();
  if (title === 'Home') title = 'Home';
  else if (title === 'F A Q') title = 'FAQ';
  else if (title === 'How It Works') title = 'How It Works';
  else if (title === 'Royal Juniors') title = 'Royal Juniors';
  else if (title === 'Royal Gems') title = 'Royal Gems';
  else if (title === 'Royal Nova') title = 'Royal Nova';

  const fullTitle = `${title} | The Royal Education System`;

  // Insert import
  const importStatement = `import { useDocumentTitle } from '../hooks/useDocumentTitle';\n`;
  
  // Find last import
  const lastImportIndex = content.lastIndexOf('import ');
  const nextNewlineAfterImport = content.indexOf('\n', lastImportIndex);
  
  content = content.slice(0, nextNewlineAfterImport + 1) + importStatement + content.slice(nextNewlineAfterImport + 1);

  // Insert hook call
  content = content.replace(
    /(export const|export default function) (\w+Page)(?:: React\.FC = \(\) =>)?\s*\(\)\s*{/,
    `$1 $2$3() {\n  useDocumentTitle('${fullTitle}');`
  );
  
  // fix syntax issue with the regex capture if needed
  content = content.replace(
    /(export const \w+Page: React\.FC = \(\) => {|export default function \w+Page\(\) {)/,
    `$1\n  useDocumentTitle('${fullTitle}');`
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${file}`);
});
