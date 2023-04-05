// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

// Import PrismaClient
import type { PrismaClient } from '@prisma/client';

declare global {
	
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface Locals extends Authrequest
		interface Locals {
			auth: import("lucia-auth").AuthRequest;
		}

		// interface PageData {}
		// interface Platform {}
	}
	// Prisma variables
	const __prisma: PrismaClient

	/// <reference types="lucia-auth" />
	declare namespace Lucia {
		type Auth = import("$lib/server/lucia").Auth;
		type UserAttributes = {
			username: string;
			name: string;
			email: string;
		};
	}

}

export {};
