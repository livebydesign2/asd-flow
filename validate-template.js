#!/usr/bin/env node

/**
 * Template Validation Script
 * 
 * This script validates that the template has been properly customized:
 * 1. Checks for unreplaced {{VARIABLE}} placeholders
 * 2. Scans for remaining Campfire-specific references
 * 3. Validates external documentation links
 * 4. Reports missing variable definitions
 */

const fs = require('fs');
const path = require('path');

// Files to exclude from validation
const EXCLUDED_FILES = [
  'validate-template.js',
  'TEMPLATE_CONFIG.md',
  'TASK-TEMPLATE-CONVERSION.md',
  '.git',
  'node_modules',
  '.DS_Store'
];

// Campfire-specific terms that should be replaced
const CAMPFIRE_TERMS = [
  'Campfire',
  'campfire',
  'outdoor gear',
  'gear setup',
  'outdoor enthusiasts',
  'hiking',
  'camping',
  'backpacking'
];

function validateTemplate() {
  console.log('🔍 Validating Template Customization...\n');
  
  let hasErrors = false;
  const results = {
    unreplacedVariables: [],
    campfireReferences: [],
    missingExternalDocs: [],
    filesScanned: 0
  };

  // Scan all markdown files recursively
  function scanDirectory(dirPath) {
    const entries = fs.readdirSync(dirPath);
    
    entries.forEach(entry => {
      if (EXCLUDED_FILES.includes(entry)) return;
      
      const fullPath = path.join(dirPath, entry);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDirectory(fullPath);
      } else if (entry.endsWith('.md')) {
        scanFile(fullPath);
      }
    });
  }

  function scanFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const relativePath = path.relative(process.cwd(), filePath);
    results.filesScanned++;

    // Check for unreplaced variables
    const variableMatches = content.match(/\{\{[A-Z_]+\}\}/g);
    if (variableMatches) {
      results.unreplacedVariables.push({
        file: relativePath,
        variables: [...new Set(variableMatches)]
      });
    }

    // Check for Campfire-specific references
    const lines = content.split('\n');
    lines.forEach((line, index) => {
      CAMPFIRE_TERMS.forEach(term => {
        if (line.toLowerCase().includes(term.toLowerCase()) && !line.includes('{{')) {
          results.campfireReferences.push({
            file: relativePath,
            line: index + 1,
            content: line.trim(),
            term: term
          });
        }
      });
    });

    // Check for broken @docs/ references
    const docMatches = content.match(/@docs\/[^\s\)]+/g);
    if (docMatches) {
      docMatches.forEach(docRef => {
        // Remove the @ and check if file exists
        const docPath = docRef.substring(1);
        if (!fs.existsSync(docPath)) {
          results.missingExternalDocs.push({
            file: relativePath,
            reference: docRef
          });
        }
      });
    }
  }

  // Start validation
  scanDirectory('.');

  // Report results
  console.log(`📊 Scanned ${results.filesScanned} files\n`);

  // Report unreplaced variables
  if (results.unreplacedVariables.length > 0) {
    console.log('❌ UNREPLACED VARIABLES FOUND:');
    results.unreplacedVariables.forEach(item => {
      console.log(`   ${item.file}:`);
      item.variables.forEach(variable => {
        console.log(`     - ${variable}`);
      });
    });
    console.log('');
    hasErrors = true;
  } else {
    console.log('✅ No unreplaced variables found\n');
  }

  // Report Campfire references
  if (results.campfireReferences.length > 0) {
    console.log('❌ CAMPFIRE-SPECIFIC REFERENCES FOUND:');
    results.campfireReferences.forEach(item => {
      console.log(`   ${item.file}:${item.line} - "${item.term}"`);
      console.log(`     ${item.content}`);
    });
    console.log('');
    hasErrors = true;
  } else {
    console.log('✅ No Campfire-specific references found\n');
  }

  // Report missing external docs
  if (results.missingExternalDocs.length > 0) {
    console.log('⚠️  EXTERNAL DOCUMENTATION REFERENCES:');
    console.log('   These references point to external docs that need to be created:');
    results.missingExternalDocs.forEach(item => {
      console.log(`   ${item.file} -> ${item.reference}`);
    });
    console.log('   See TEMPLATE_CONFIG.md for guidance on external dependencies\n');
  } else {
    console.log('✅ All documentation references are valid\n');
  }

  // Final result
  if (hasErrors) {
    console.log('❌ Template validation FAILED');
    console.log('   Fix the issues above before using this template\n');
    process.exit(1);
  } else {
    console.log('✅ Template validation PASSED');
    console.log('   Template is ready for use!\n');
  }
}

// Check if TEMPLATE_CONFIG.md exists
if (!fs.existsSync('TEMPLATE_CONFIG.md')) {
  console.log('❌ TEMPLATE_CONFIG.md not found');
  console.log('   Run this script from the template root directory\n');
  process.exit(1);
}

validateTemplate();