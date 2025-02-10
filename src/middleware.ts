import { NextResponse, NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
    const token = req.cookies.get('sispdcao')?.value; // Obtém o token do cookie
    const currentPath = new URL(req.url).pathname;

    // Lista de rotas públicas
    const publicRoutes = ['/', '/login', '/registro'];

    // Lista de rotas privadas
    const privateRoutes = ['/dashboard','/especialista', '/exames', '/pessoalclinico'];

    // Verifica se a rota atual é pública
    const isPublicRoute = publicRoutes.includes(currentPath);

    // Verifica se a rota atual é privada
    const isPrivateRoute = privateRoutes.includes(currentPath);

    // Se estiver em uma rota privada sem token, redireciona para /login
    if (isPrivateRoute && !token) {
        return NextResponse.redirect(new URL('/login', req.url));
    }

    // Se estiver em uma rota pública e já houver um token, redireciona para /dashboard
    if (isPublicRoute && token) {
        return NextResponse.redirect(new URL('/dashboard', req.url));
    }

    // Permitir continuar a navegação normalmente
    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'], // Aplicar a todas as rotas, exceto as listadas
};
