import Vue from 'vue'
import VueRouter from 'vue-router'

import MyMenu from '@/components/MyMenu'
import MyShippingCalculator from '@/components/MyShippingCalculator';
import MyWeather from '@/components/MyWeather';
import MyChartSkills from '@/components/MyChartSkills';

Vue.use(VueRouter);

const router = new VueRouter({
	routes: [
        {
			path: '/',
			component: MyWeather
        },
        {
            path: '/skills',
            component: MyChartSkills
        },
        {
            path: '/shipping',
            component: MyShippingCalculator
        },
        {
			path: '/content',
			component: MyMenu,
			children: [
				{
					path: 'my-chart-skills',
					component: MyChartSkills,
					name: 0
				},
				{
					path: 'my-shipping-calculator',
					component: MyShippingCalculator,
					name: 1
                }
            ]
        }
    ]
});

export default router;