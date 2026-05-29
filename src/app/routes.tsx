import { lazy } from 'react';

export const exampleRoutes = [
  { slug: 'basic', title: 'Basic example', component: lazy(() => import('../examples/basic/basic.component')) },
  { slug: 'all-visible-counter', title: 'All visible counter', component: lazy(() => import('../examples/all-visible-counter/all-visible-counter.component')) },
  { slug: 'single-selection', title: 'Single selection', component: lazy(() => import('../examples/single-selection/single-selection.component')) },
  { slug: 'search-filter', title: 'Search filter', component: lazy(() => import('../examples/search-filter/search-filter.component')) },
  { slug: 'group-by', title: 'Group By', component: lazy(() => import('../examples/group-by/group-by.component')) },
  { slug: 'selection-limit', title: 'Selection limit', component: lazy(() => import('../examples/selection-limit/selection-limit.component')) },
  { slug: 'templating', title: 'Templating', component: lazy(() => import('../examples/templating/templating.component')) },
  { slug: 'search-add-new-item', title: 'Search and Add New Item', component: lazy(() => import('../examples/search-add-new-item/search-add-new-item.component')) },
  { slug: 'disabled-state', title: 'Disabled state', component: lazy(() => import('../examples/disabled-state/disabled-state.component')) },
  { slug: 'using-in-forms', title: 'Using in Forms', component: lazy(() => import('../examples/using-in-forms/using-in-forms.component')) },
  { slug: 'virtual-scrolling', title: 'Virtual Scrolling', component: lazy(() => import('../examples/virtual-scrolling/virtual-scrolling.component')) },
  { slug: 'lazy-loading', title: 'Lazy Loading', component: lazy(() => import('../examples/lazy-loading/lazy-loading.component')) },
  { slug: 'using-inside-dialog', title: 'Using Inside Dialog', component: lazy(() => import('../examples/using-inside-dialog/using-inside-dialog.component')) },
  { slug: 'body-overlay-auto', title: 'Body Overlay Auto', component: lazy(() => import('../examples/body-overlay-auto/body-overlay-auto.component')) },
  { slug: 'methods', title: 'Methods', component: lazy(() => import('../examples/methods/methods.component')) }
];

export type ExampleRoute = (typeof exampleRoutes)[number];
