#!/usr/bin/env node

/**
 * Template Cleanup Script
 * 
 * This script removes template-specific files after successful customization.
 * Run this after:
 * 1. All variables have been replaced
 * 2. Template validation passes
 * 3. External documentation is set up
 * 4. Team is ready to begin development
 */

const fs = require('fs');
const path = require('path');

// Template-specific files that should be removed after customization
const TEMPLATE_FILES = [
  'TEMPLATE_CONFIG.md',
  'SETUP_GUIDE.md', 
  'EXTERNAL_DOCS_SETUP.md',
  'QUICK_START.md',
  'CLEANUP_INFO.md',
  'TASK-TEMPLATE-CONVERSION.md',
  'validate-template.js',
  'cleanup-template-files.js', // This script removes itself last
];

// Template-specific directories that might be empty after cleanup
const TEMPLATE_DIRS = [
  // Add any directories that become empty after file removal
];

console.log('🧹 Starting Template Cleanup Process...\n');

// Verify this is a customized template (no variables remaining)
console.log('🔍 Verifying template customization is complete...');

function hasUnreplacedVariables() {
  const filesToCheck = [
    'README.md',
    'ai-context/project-brief.md',
    'strategic/vision.md'
  ];
  
  for (const file of filesToCheck) {
    if (fs.existsSync(file)) {
      const content = fs.readFileSync(file, 'utf8');
      if (content.includes('{{') && content.includes('}}')) {
        return true;
      }
    }
  }
  return false;
}

if (hasUnreplacedVariables()) {
  console.log('❌ ERROR: Template variables still found in project files.');
  console.log('   Please complete template customization first:');
  console.log('   1. Run AI agent customization process');
  console.log('   2. Run `node validate-template.js` to verify');
  console.log('   3. Then run this cleanup script\n');
  process.exit(1);
}

console.log('✅ Template customization verified\n');

// Check if external docs are set up
console.log('🔍 Checking external documentation setup...');

const requiredExternalDocs = [
  'docs/README.md',
  'docs/context/project-overview.md'
];

let missingDocs = [];
for (const doc of requiredExternalDocs) {
  if (!fs.existsSync(doc)) {
    missingDocs.push(doc);
  }
}

if (missingDocs.length > 0) {
  console.log('⚠️  WARNING: Some external documentation files are missing:');
  missingDocs.forEach(doc => console.log(`   - ${doc}`));
  console.log('\n   Recommendation: Set up external docs first using EXTERNAL_DOCS_SETUP.md');
  console.log('   You can run this cleanup script again later.\n');
}

console.log('📋 Files to be removed:');
TEMPLATE_FILES.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`   - ${file}`);
  }
});

console.log('\n⚠️  This action cannot be undone!');
console.log('   These template files will be permanently deleted.');
console.log('   Your customized project files will remain untouched.');
console.log('\n💡 What will remain after cleanup:');
console.log('   ✅ All your customized project files');
console.log('   ✅ AI-first development workflows');
console.log('   ✅ Feature templates and processes');
console.log('   ✅ Strategic documents with your project info');
console.log('   ✅ Architecture decisions and patterns');
console.log('\n🗑️  Removing template setup files...\n');

let removedCount = 0;
let errorCount = 0;

TEMPLATE_FILES.forEach(file => {
  if (fs.existsSync(file)) {
    try {
      fs.unlinkSync(file);
      console.log(`✅ Removed: ${file}`);
      removedCount++;
    } catch (error) {
      console.log(`❌ Failed to remove: ${file} - ${error.message}`);
      errorCount++;
    }
  }
});

// Clean up empty directories
TEMPLATE_DIRS.forEach(dir => {
  if (fs.existsSync(dir)) {
    try {
      const files = fs.readdirSync(dir);
      if (files.length === 0) {
        fs.rmdirSync(dir);
        console.log(`✅ Removed empty directory: ${dir}`);
      }
    } catch (error) {
      console.log(`⚠️  Could not remove directory: ${dir} - ${error.message}`);
    }
  }
});

console.log(`\n📊 Cleanup Summary:`);
console.log(`   - Files removed: ${removedCount}`);
console.log(`   - Errors: ${errorCount}`);

if (errorCount === 0) {
  console.log('\n🎉 Template cleanup completed successfully!');
  console.log('\n📚 Your project is now ready for development:');
  console.log('   - All template variables have been customized');
  console.log('   - Template setup files have been removed');
  console.log('   - AI-first development workflows are preserved');
  console.log('   - Feature templates and processes remain intact');
  console.log('\n🚀 Next steps:');
  console.log('   1. Verify external documentation is complete');
  console.log('   2. Set up your development environment');
  console.log('   3. Create your first feature using the feature template');
  console.log('   4. Begin AI-first development!');
} else {
  console.log('\n⚠️  Cleanup completed with some errors.');
  console.log('   Please manually remove any remaining template files.');
}

console.log('\n✨ Happy coding with your AI-first development setup!\n');