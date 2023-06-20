const mainNavItems = [
  {
    title: 'Главная',
    optional: true,
    linkTo: '/',
    hasActiveState: true,
  },
  {
    title: 'Фильмы',
    optional: false,
    linkTo: '/movies',
    hasActiveState: true,
  },
  {
    title: 'Сохранённые фильмы',
    optional: false,
    linkTo: '/saved-movies',
    hasActiveState: true,
  },
  {
    title: 'Аккаунт',
    optional: false,
    linkTo: '/profile',
    hasActiveState: false,
    isBtn: true,
  },
];

const authNavItems = [
  {
    title: 'Регистрация',
    optional: false,
    linkTo: '/signup',
    hasActiveState: false,
  },
  {
    title: 'Войти',
    optional: false,
    linkTo: '/signin',
    hasActiveState: false,
    isBtn: true,
  },
];

export { mainNavItems, authNavItems };
