const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        results.push(file);
      }
    }
  });
  return results;
}

const dirs = ['app', 'components'];
let files = [];
dirs.forEach(d => {
  if(fs.existsSync(d)) files = files.concat(walk(d));
});

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('useState') || content.includes('useEffect') || content.includes('useRef') || content.includes('framer-motion') || content.includes('useToast') || content.includes('lucide-react')) {
    if (!content.includes('"use client"') && !content.includes("'use client'")) {
      fs.writeFileSync(file, '"use client";\n' + content);
      console.log('Added use client to ' + file);
    }
  }
});
