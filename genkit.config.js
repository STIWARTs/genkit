import { configureGenkit } from 'genkit';
import { googleAI } from '@genkit-ai/googleai';

export default configureGenkit({
  plugins: [
    googleAI({
      apiKey: process.env.GEMINI_API_KEY,
    }),
  ],
  flowStateStore: 'file',
  traceStore: 'file',
  logLevel: 'debug',
});