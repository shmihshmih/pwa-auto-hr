  
  const fs = require('fs');

  // 1. create if not exist
  if (!fs.existsSync('docs')) {
    fs.mkdirSync('docs', { recursive: true });
  }

  // 2. Copy folder from build to static folder
  if (fs.existsSync('dist/pwa-auto-hr/browser') && fs.existsSync('docs')) {
    fs.cpSync('dist/pwa-auto-hr/browser', 'docs', { recursive: true });
  }