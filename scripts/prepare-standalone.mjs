import { cpSync, existsSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const projectRoot = process.cwd();
const standalonePath = resolve(projectRoot, '.next/standalone');
const staticOutputPath = resolve(projectRoot, '.next/static');

if (!existsSync(standalonePath)) {
  throw new Error('Next.js standalone output was not generated.');
}

if (existsSync(resolve(projectRoot, 'public'))) {
  cpSync(resolve(projectRoot, 'public'), resolve(standalonePath, 'public'), { recursive: true });
}

mkdirSync(resolve(standalonePath, '.next'), { recursive: true });
cpSync(staticOutputPath, resolve(standalonePath, '.next/static'), { recursive: true });