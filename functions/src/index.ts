import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();
export const db = admin.firestore();

admin.initializeApp(functions.config().firebase);