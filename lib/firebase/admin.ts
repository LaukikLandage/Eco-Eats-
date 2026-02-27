import * as admin from 'firebase-admin';

if (!admin.apps.length) {
    try {
        if (process.env.FIREBASE_PRIVATE_KEY) {
            admin.initializeApp({
                credential: admin.credential.cert({
                    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
                    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
                    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
                }),
            });
        } else {
            // Dummy initialize to prevent build crash when envs are missing
            admin.initializeApp();
        }
    } catch (error: any) {
        console.error('Firebase admin initialization error', error);
    }
}

import { getFirestore } from 'firebase-admin/firestore';

export const adminAuth = admin.apps.length > 0 ? admin.auth() : null as unknown as admin.auth.Auth;
export const adminApp = admin.apps.length > 0 ? admin.app() : null;
export const adminDb = admin.apps.length > 0 ? getFirestore(admin.app()!) : null as unknown as FirebaseFirestore.Firestore;
