import VueRouter from "vue-router";
import List from './components/List.vue';
import Home from './components/Home.vue';
import Detail from './components/Detail.vue';
import Author from './components/Author.vue';
import Comment from './components/Comment.vue';
import root from './root';

const routes = [
  {
    path: `${root}/`,
    // alias: [`${root}/index.html`],
    component: Home,
  },
  {
    path: `${root}/index.html`,
    redirect: `${root}/`,
  },
  {
    path: `${root}/list`,
    component: List,
  },
  {
    // (\\d+) : 숫자만 찾아주는 정규식 문법
    // * : 입력하면 반복함 ex) /id/id/id....
    path: `${root}/detail/:id(\\d+)`, 
    component: Detail,
    children: [
      {
        path: 'author',
        component: Author,
      },
      {
        path: 'comment',
        component: Comment,
      },
    ]
  },
];

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router; 