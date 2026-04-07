import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function createPrismaClient(): PrismaClient {
  try {
    return new PrismaClient({
      datasourceUrl: process.env.DATABASE_URL ?? "file:./dev.db",
    });
  } catch (e) {
    // During build time, Prisma may fail to initialize (no DB available).
    // Return a proxy that will throw at runtime if actually used.
    console.warn("[Prisma] Client initialization deferred - no DB available at build time");
    return new Proxy({} as PrismaClient, {
      get(_target, prop) {
        if (prop === "then") return undefined; // Prevent Promise resolution issues
        throw new Error(`Prisma client not available. Attempted to access: ${String(prop)}`);
      },
    });
  }
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
