import Layout from '../components/Layout';
import { Routes as Switch, Route } from 'react-router-dom';
import { routes } from './routes';
import PageNotFound from '../pages/404';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Layout />}>
        {routes.map(route =>
          route.isIndex ? (
            <Route key={route.path} index element={<route.element />} />
          ) : (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          ),
        )}
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Switch>
  );
}
