import { authMiddleware } from '@clerk/nextjs';

// const protectedRoutes = createRouteMatcher([
//   '/',
//   '/upcoming',
//   '/previous',
//   '/recordings',
//   '/personal-room',
//   '/meeting(.*)',
// ]);

// export default authMiddleware((auth, req) => {
//   if (protectedRoutes(req)) auth().protect();
// });

export default authMiddleware({});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/(api|trpc)(.*)'],
};
