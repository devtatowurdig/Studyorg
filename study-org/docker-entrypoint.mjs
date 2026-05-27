import { writeFileSync } from 'node:fs';

const apiUrl = (process.env.API_URL ?? 'http://studyorg.frameworksenac.com.br:3071').replace(/\/+$/, '');

writeFileSync('/app/env.js', `window.__env = ${JSON.stringify({ API_URL: apiUrl })};\n`);