const bigBook = {
  path: "/bigBook",
  name: "bigBook",
  component: () => import("@/views/layout/index.vue"),
  meta: {
    title: "大簿",
    icon: "icondabu" // 此处配置icon图标
  },
  children: [
    {
      path: "xinzengdabu",
      name: "Xinzengdabu",
      component: () => import("@/views/bigBook/addDabu/routerView.vue"),
      redirect: "/bigBook/addHuKou/xinzengdabu/:id",
      meta: { title: "新增大簿" },
      children: [
        {
          path: "xinzengdabu/:id",
          name: "Xinzengdabu",
          component: () => import("@/views/bigBook/addDabu/index.vue"),
          meta: { title: "新增大簿" },
          hidden: true
        },
        {
          path: "bigBookLocking/:id",
          name: "BigBookLocking",
          component: () => import("@/views/bigBook/addDabu/bigBookLocking/index.vue"),
          meta: { title: "大簿鎖定戶口" }
        }
      ]
    },
    {
      path: "bigBookRecord/:id",
      name: "BigBookRecord",
      component: () => import("@/views/bigBook/bigBookRecord/index.vue"),
      meta: { title: "各廳大簿記錄" }
    },
    {
      path: "bigBookReport/:id",
      name: "BigBookReport",
      component: () => import("@/views/bigBook/bigBookReport/index.vue"),
      meta: { title: "客人大簿報表" }
    },
    {
      path: "bigBookTrade/:id",
      name: "BigBookTrade",
      component: () => import("@/views/bigBook/bigBookTrade/index.vue"),
      meta: { title: "客人大簿交易" }
    },
    {
      path: "bigBookLobbyNum/:id",
      name: "BigBookLobbyNum",
      component: () => import("@/views/bigBook/bigBookLobbyNum/index.vue"),
      meta: { title: "各廳大簿總數" }
    },
    {
      path: "bigBookTradeDetail/:id",
      name: "BigBookTradeDetail",
      component: () => import("@/views/bigBook/bigBookTradeDetail/index.vue"),
      meta: { title: "各廳大簿交易明細" }
    },
    {
      path: "bigBookBSCOguest/:id",
      name: "BigBookBSCOguest",
      component: () => import("@/views/bigBook/bigBookBSCOguest/index.vue"),
      meta: { title: "BS,CO客人大簿" }
    },
    {
      path: "bigBookBSCORoom/:id",
      name: "BigBookBSCORoom",
      component: () => import("@/views/bigBook/bigBookBSCORoom/index.vue"),
      meta: { title: "BS,CO各廳大簿" }
    },
    {
      path: "bigBookGuestRecord/:id",
      name: "BigBookGuestRecord",
      component: () => import("@/views/bigBook/bigBookGuestRecord/index.vue"),
      meta: { title: "客人大簿日志" }
    },
    {
      path: "bigBookDeposit/:id",
      name: "BigBookDeposit",
      component: () => import("@/views/bigBook/bigBookDeposit/index.vue"),
      meta: { title: "集團存款回贈" }
    },
    {
      path: "bigBookLineDeposit/:id",
      name: "BigBookLineDeposit",
      component: () => import("@/views/bigBook/bigBookLineDeposit/index.vue"),
      meta: { title: "Line存款回贈設定" }
    },
    {
      path: "bigBookGuestDeposit/:id",
      name: "BigBookGuestDeposit",
      component: () => import("@/views/bigBook/bigBookGuestDeposit/index.vue"),
      meta: { title: "客人存款回贈設定" }
    }
  ]
};

console.log(bigBook)

export default bigBook;
