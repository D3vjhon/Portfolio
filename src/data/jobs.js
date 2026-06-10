export const jobs = [
  {
    id: 'havanas-21',
    period: { es: 'May 2024 — Dic 2024', en: 'May 2024 — Dec 2024', pt: 'Mai 2024 — Dez 2024' },
    role: { es: 'Frontend Engineer', en: 'Frontend Engineer', pt: 'Frontend Engineer' },
    company: { es: 'Havana\'s 21', en: 'Havana\'s 21', pt: 'Havana\'s 21' },
    description: {
      es: 'Mi primer cliente como independiente. Havana\'s 21, un restaurante en La Habana, necesitaba una solución digital moderna para reemplazar su sistema tradicional. Desarrollé una plataforma web completa con acceso mediante código QR, menú digital interactivo, y un panel de administración para gestionar recetas, ingredientes y pedidos. Todo en un entorno híbrido, trabajando directamente con el dueño y el equipo del restaurante.',
      en: 'My first freelance client. Havana\'s 21, a restaurant in Havana, needed a modern digital solution to replace their traditional system. I built a complete web platform with QR code access, interactive digital menu, and an admin panel to manage recipes, ingredients, and orders. All in a hybrid environment, working directly with the owner and restaurant team.',
      pt: 'Meu primeiro cliente como freelancer. Havana\'s 21, um restaurante em Havana, precisava de uma solução digital moderna para substituir seu sistema tradicional. Desenvolvi uma plataforma web completa com acesso via QR code, cardápio digital interativo e um painel de administração para gerenciar receitas, ingredientes e pedidos. Tudo em ambiente híbrido, trabalhando diretamente com o dono e a equipe do restaurante.'
    },
    details: {
      es: [
        'Desarrollé una app web para restaurante con acceso por QR, eliminando menús físicos y permitiendo actualizaciones en tiempo real',
        'Creé un feed estilo Instagram donde los clientes ven platos, dan like y comentan, aumentando el engagement y dando feedback directo a cocina',
        'Implementé un sistema de autenticación con 3 roles (Cocina, Barra, Admin) con paneles específicos para gestión de recetas y comentarios',
        'Diseñé un panel de administración con gestión de recetas/ingredientes/menús y ordenamiento drag-and-drop como herramienta de marketing',
        'Reduje el boilerplate de API en ~60% reemplazando Axios con React Query, eliminando useState/useEffect en cada componente'
      ],
      en: [
        'Developed a restaurant web app with QR-based access, eliminating physical menus and enabling real-time updates',
        'Built an Instagram-style feed where customers browse dishes, like, and comment, boosting engagement and providing direct kitchen feedback',
        'Implemented a 3-role auth system (Kitchen, Bar, Admin) with role-specific dashboards for recipe management and customer comments',
        'Designed an admin panel with recipe/ingredient/menu management and drag-and-drop menu ordering as a marketing strategy tool',
        'Reduced API boilerplate by ~60% by replacing Axios with React Query, eliminating useState/useEffect in every component'
      ],
      pt: [
        'Desenvolvi um aplicativo web para restaurante com acesso via QR, eliminando cardápios físicos e permitindo atualizações em tempo real',
        'Criei um feed estilo Instagram onde clientes veem pratos, curtem e comentam, aumentando o engajamento e dando feedback direto à cozinha',
        'Implementei um sistema de autenticação com 3 papéis (Cozinha, Bar, Admin) com painéis específicos para gestão de receitas e comentários',
        'Projetei um painel de administração com gestão de receitas/ingredientes/cardápios e ordenação drag-and-drop como ferramenta de marketing',
        'Reduzi o boilerplate de API em ~60% substituindo Axios por React Query, eliminando useState/useEffect em cada componente'
      ]
    },
    tech: ['React', 'React Query', 'Node.js', 'Tailwind CSS', 'JWT', 'QR Code'],
    image: 'havanas21_profile.jpg'
  },
  {
    id: 'helados-tres-b',
    period: { es: 'Nov 2025 — Presente', en: 'Nov 2025 — Present', pt: 'Nov 2025 — Presente' },
    role: { es: 'Full Stack Engineer', en: 'Full Stack Engineer', pt: 'Full Stack Engineer' },
    company: { es: 'Helados las Tres B', en: 'Helados las Tres B', pt: 'Helados las Tres B' },
    description: {
      es: 'Un cliente con un negocio de helados en Santiago de Cuba necesitaba algo más que un menú digital: quería control total sobre sus finanzas y operaciones. Construí una app mobile-first (también accesible desde web) con panel administrativo para gestionar presupuesto, ventas, ganancias, inversiones, productos y precios, más un sistema de pedidos en tiempo real con datos del cliente usando Supabase. Todo respetando el diseño escogido por el cliente.',
      en: 'A client with an ice cream business in Santiago de Cuba needed more than a digital menu — they wanted full control over their finances and operations. I built a mobile-first app (also accessible from web) with an admin dashboard for managing budget, sales, profits, investments, products and pricing, plus a real-time ordering system with customer data using Supabase. All while respecting the design chosen by the client.',
      pt: 'Um cliente com um negócio de sorvetes em Santiago de Cuba precisava de mais que um cardápio digital — queria controle total sobre suas finanças e operações. Construí um aplicativo mobile-first (também acessível pela web) com painel administrativo para gerenciar orçamento, vendas, lucros, investimentos, produtos e preços, além de um sistema de pedidos em tempo real com dados do cliente usando Supabase. Tudo respeitando o design escolhido pelo cliente.'
    },
    details: {
      es: [
        'Construí un panel de administración con métricas y CRUDs completos para gestionar ventas, productos y precios',
        'Implementé un sistema de pedidos en tiempo real donde los clientes hacen pedidos y el admin sigue los estados (pendiente → preparando → entregado/cancelado)',
        'Creé mi primera aplicación serverless usando autenticación de Supabase, funciones RPC y suscripciones en tiempo real',
        'Reduje el tiempo de desarrollo estimado de 6 semanas a 2 semanas (~67% más rápido) usando arquitectura serverless sin backend dedicado'
      ],
      en: [
        'Built an admin dashboard with metrics and full CRUDs to manage sales, products, and pricing',
        'Implemented a real-time order system where customers place orders and the admin tracks status changes (pending → processing → delivered/cancelled)',
        'Built my first serverless application using Supabase authentication, RPC functions, and real-time subscriptions',
        'Reduced estimated development time from 6 weeks to 2 weeks (~67% faster) by leveraging serverless architecture without a dedicated backend'
      ],
      pt: [
        'Construí um painel de administração com métricas e CRUDs completos para gerenciar vendas, produtos e preços',
        'Implementei um sistema de pedidos em tempo real onde os clientes fazem pedidos e o admin acompanha os status (pendente → preparando → entregue/cancelado)',
        'Criei meu primeiro aplicativo serverless usando autenticação do Supabase, funções RPC e assinaturas em tempo real',
        'Reduzi o tempo de desenvolvimento estimado de 6 semanas para 2 semanas (~67% mais rápido) usando arquitetura serverless sem backend dedicado'
      ]
    },
    tech: ['React', 'Supabase', 'Tailwind CSS', 'TypeScript'],
    image: 'heladoslas3B.png',
    images: ['1772669233900.jpg','1772669234282.jpg','1772669234403.jpg','1772669234473.jpg']
  }
];
