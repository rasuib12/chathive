//this for the hot reload to not initialize too many prisma clients
import {PrismaClient} from '@prisma/client';

declare global{
    var prisma : PrismaClient | undefined;   //eslint-disable-line no-var
};

export const db = globalThis.prisma|| new PrismaClient()

if( process.env.NODE_ENV !== 'production'){
    globalThis.prisma = db;
}