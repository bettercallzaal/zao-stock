import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typescript from 'typescript-eslint';

const compat = new FlatCompat();

export default [
  js.configs.recommended,
  ...typescript.configs.recommended,
  ...compat.extends('next/core-web-vitals'),
];
