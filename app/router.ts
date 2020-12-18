import { Application } from 'egg';
// 引入ts
export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
};
