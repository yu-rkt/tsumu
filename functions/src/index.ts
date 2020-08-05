import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp(functions.config().firebase);

export * from './auth.function';
export * from './user.function';
export * from './note.function';
export * from './render.function';
export * from './utils/util';
