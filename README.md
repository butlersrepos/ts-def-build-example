# Commands run & steps taken to get to this point

```
npm install typescript
touch index.js
npx tsc --init
uncomment allowJs, declaration, and emitDeclarationOnly from tscofig.json
uncomment outDir and set it to "./dist"
    if you don't do this then index.d.ts will be built in the top-directory and considered part of the source after the first run because its right next to index.js :P
wrote index.js using JSDoc commenting (https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html)
npx tsc
inspect ./dist/index.d.ts
```
