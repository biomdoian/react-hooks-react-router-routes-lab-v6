import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import 'whatwg-fetch';
import{Blob} from 'buffer';
if (typeof globalThis.Blob === 'undefined') {
    globalThis.Blob = Blob;
  }
afterEach(() => {
    cleanup();
})
