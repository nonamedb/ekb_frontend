import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Dashboard',
            component: () => import('./views/Dashboard.vue'),
            children: [
                {
                    path: 'region',
                    name: 'DashboardRegion',
                    component: () => import('./views/DashboardRegion.vue'),
                },
                {
                    path: 'industry',
                    name: 'DashboardIndustry',
                    component: () => import('./views/DashboardIndustry.vue'),
                },
                {
                    path: 'prediction',
                    name: 'DashboardPrediction',
                    component: () => import('./views/DashboardPrediction.vue'),
                },
            ],
        },
    ],
});
