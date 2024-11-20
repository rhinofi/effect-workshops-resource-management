import * as vite from 'vitest/config'

export default vite.defineConfig({
  test: {
    clearMocks: true,
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/.{idea,git,direnv,vscode}/**',
    ],
  },
})
