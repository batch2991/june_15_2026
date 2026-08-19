import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

export const ENV={ 
  URL: process.env.url!,
  UID: process.env.uid!,
  PWD: process.env.pwd!,
}