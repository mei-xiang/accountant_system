const HouseholdRegister = {
  path: '/HouseholdRegister',
  name: 'HouseholdRegister',
  component: () => import("@/views/layout/index.vue"),
  meta: {
    title: '戶口資料',
    icon: 'iconhukouziliao' // 此处配置icon图标
  },
  children: [
    {
      path: 'addHuKou',
      name: 'AddHuKou',
      component: () => import('@/views/HouseholdRegister/addHukou/index.vue'),
      meta: { title: '新增戶口(新)', pagePath: '' }
    },
    {
      path: 'increaseStaff',
      name: 'increaseStaff',
      component: () =>
        import('@/views/HouseholdRegister/increaseStaff/index.vue'),
      meta: { title: '新增職員' }
    },
    {
      path: 'staffData',
      name: 'staffData',
      component: () => import('@/views/HouseholdRegister/staffData/index.vue'),
      meta: { title: '職員資料' },
      children: [
        {
          path: 'queryICCard',
          name: 'queryICCard',
          component: () =>
            import('@/views/HouseholdRegister/staffData/queryICCard.vue'),
          meta: { title: '職員IC卡查詢' }
        }
      ]
    },
    {
      path: 'queryOpenAccount',
      name: 'queryOpenAccount',
      component: () =>
        import('@/views/HouseholdRegister/queryOpenAccount/routerView.vue'),
      redirect: '/HouseholdRegister/queryOpenAccount/openAcccount',
      meta: { title: '開戶查詢' },
      children: [
        {
          path: 'openAcccount',
          name: 'openAcccount',
          component: () =>
            import('@/views/HouseholdRegister/queryOpenAccount/index.vue'),
          meta: { title: '開戶查詢' },
          hidden: true
        },
        {
          path: 'queryOpenAccountName',
          name: 'queryOpenAccountName',
          component: () =>
            import(
              '@/views/HouseholdRegister/queryOpenAccount/accountName/queryOpenAccountName.vue'
            ),
          meta: { title: '開戶查詢_姓名' }
        }
      ]
    },
    {
      path: 'queryStaff',
      name: 'queryStaff',
      component: () => import('@/views/HouseholdRegister/queryStaff/index.vue'),
      meta: { title: '職員查詢限定' }
    },
    {
      path: 'hukouSettings',
      name: 'hukouSettings',
      component: () =>
        import('@/views/HouseholdRegister/hukouSettings/routerView.vue'),
      meta: { title: '戶口設定' },
      redirect: '/HouseholdRegister/hukouSettings/setHukou',
      children: [
        {
          path: 'setHukou',
          name: 'setHukou',
          hidden: true,
          meta: { title: '户口设定' },
          component: () =>
            import('@/views/HouseholdRegister/hukouSettings/index.vue')
        },
        {
          path: 'apps',
          name: 'apps',
          component: () =>
            import('@/views/HouseholdRegister/hukouSettings/APPS/index.vue'),
          meta: { title: 'APPS' }
        },
        {
          path: 'revolvingLantern',
          name: 'revolvingLantern',
          component: () =>
            import(
              '@/views/HouseholdRegister/hukouSettings/APPS/revolvingLantern.vue'
            ),
          meta: { title: '修改走馬燈' }
        },
        {
          path: 'vipRoom',
          name: 'vipRoom',
          component: () =>
            import('@/views/HouseholdRegister/hukouSettings/APPS/vipRoom.vue'),
          meta: { title: '貴賓廳' }
        },
        {
          path: 'hotel',
          name: 'hotel',
          component: () =>
            import('@/views/HouseholdRegister/hukouSettings/APPS/hotel.vue'),
          meta: { title: '酒店' }
        },
        {
          path: 'restaurant',
          name: 'restaurant',
          component: () =>
            import(
              '@/views/HouseholdRegister/hukouSettings/APPS/restaurant.vue'
            ),
          meta: { title: '酒店餐廳' }
        },
        {
          path: 'news',
          name: 'news',
          component: () =>
            import('@/views/HouseholdRegister/hukouSettings/APPS/news.vue'),
          meta: { title: '咨詢信息' }
        },
        {
          path: 'housePrice',
          name: 'housePrice',
          component: () =>
            import(
              '@/views/HouseholdRegister/hukouSettings/APPS/housePrice.vue'
            ),
          meta: { title: '房價資訊' }
        },

        {
          path: 'voicePassword',
          name: 'voicePassword',
          component: () =>
            import(
              '@/views/HouseholdRegister/hukouSettings/voicePassword/index.vue'
            ),
          meta: { title: '客人設語音密碼' }
        }
      ]
    },
    // 配置這裏
    {
      path: 'voicePassword',
      name: 'voicePassword',
      component: () =>
        import('@/views/HouseholdRegister/voicePassword/index.vue'),
      meta: { title: '語言密碼設定' }
    },
    {
      path: 'relativeName',
      name: 'relativeName',
      component: () =>
        import('@/views/HouseholdRegister/relativeName/index.vue'),
      meta: { title: '相關姓名' }
    },
    {
      path: 'commissionTable',
      name: 'commissionTable',
      component: () =>
        import('@/views/HouseholdRegister/commissionTable/index.vue'),
      meta: { title: '佣金對照表' }
    },
    {
      path: 'queryHukou',
      name: 'queryHukou',
      component: () =>
        import('@/views/HouseholdRegister/queryHukou/routerView.vue'),
      redirect: '/HouseholdRegister/queryHukou/query',
      meta: { title: '戶口查詢' },
      children: [
        {
          path: 'query',
          name: 'query',
          component: () =>
            import('@/views/HouseholdRegister/queryHukou/index.vue'),
          meta: { title: '戶口查詢' },
          hidden: true
        },
        {
          path: 'image',
          name: 'image',
          component: () =>
            import('@/views/HouseholdRegister/queryHukou/image/image.vue'),
          meta: { title: '戶主圖片' }
        }
      ]
    },
    {
      path: 'deleteHukou',
      name: 'deleteHukou',
      component: () =>
        import('@/views/HouseholdRegister/deleteHukou/index.vue'),
      meta: { title: '刪除戶口' }
    },
    {
      path: 'dsTable',
      name: 'dsTable',
      component: () => import('@/views/HouseholdRegister/dsTable/index.vue'),
      meta: { title: 'DS/SS報表' }
    },
    {
      path: 'addMembership',
      name: 'addMembership',
      component: () =>
        import('@/views/HouseholdRegister/addMembership/index.vue'),
      meta: { title: '新增會員' }
    },
    {
      path: 'queryMembership',
      name: 'queryMembership',
      component: () =>
        import('@/views/HouseholdRegister/queryMembership/index.vue'),
      meta: { title: '會員查詢' }
    },
    {
      path: 'updateHuZhuImage',
      name: 'updateHuZhuImage',
      component: () =>
        import('@/views/HouseholdRegister/updateHuZhuImage/routerView.vue'),
      meta: { title: '更新戶主圖片' },
      redirect: '/HouseholdRegister/updateHuZhuImage/HuZhuImage',
      children: [
        {
          path: 'HuZhuImage',
          name: 'HuZhuImage',
          component: () =>
            import(
              '@/views/HouseholdRegister/updateHuZhuImage/index.vue'
            ),
          meta: { title: '更新戶主圖片' },
          hidden: true
        },
        {
          path: 'updateHuZhuImage',
          name: 'updateHuZhuImage',
          component: () =>
            import(
              '@/views/HouseholdRegister/updateHuZhuImage/authoizerImage/authoizerImage.vue'
            ),
          meta: { title: '更新授權人圖片' }
        }
      ]
    },
    {
      path: 'modifyStuffPsw',
      name: 'modifyStuffPsw',
      component: () =>
        import('@/views/HouseholdRegister/modifyStuffPsw/index.vue'),
      meta: { title: '修改職員登入密碼' }
    },
    {
      path: 'transferAccount',
      name: 'transferAccount',
      component: () =>
        import('@/views/HouseholdRegister/transferAccount/index.vue'),
      meta: { title: '轉戶口' }
    },
    {
      path: 'groupTable',
      name: 'groupTable',
      component: () => import('@/views/HouseholdRegister/groupTable/index.vue'),
      redirect: '/HouseholdRegister/groupTable/aa',
      meta: { title: '集團表格' },
      children: [
        {
          path: 'aa',
          name: 'qrCode',
          component: () =>
            import('@/views/HouseholdRegister/groupTable/index1.vue'),
          meta: { title: '集團表格' },
          hidden: true
        },
        {
          path: 'qrCode',
          name: 'qrCode',
          component: () =>
            import('@/views/HouseholdRegister/groupTable/qrCode.vue'),
          meta: { title: '員工二維碼生成' }
        },
        {
          path: 'authorizationNotice',
          name: 'authorizationNotice',
          component: () =>
            import(
              '@/views/HouseholdRegister/groupTable/authorizationNotice.vue'
            ),
          meta: { title: '共用授權通知書' }
        },
        {
          path: 'updateHuKouTable',
          name: 'updateHuKouTable',
          component: () =>
            import('@/views/HouseholdRegister/groupTable/updateHuKouTable.vue'),
          meta: { title: '戶口更新表格' }
        },
        {
          path: 'piENotice',
          name: 'piENotice',
          component: () =>
            import('@/views/HouseholdRegister/groupTable/piENotice.vue'),
          meta: { title: '共用批額通知書' }
        },
        {
          path: 'setPswTable',
          name: 'setPswTable',
          component: () =>
            import('@/views/HouseholdRegister/groupTable/setPswTable.vue'),
          meta: { title: '設置密碼登記表' }
        },
        {
          path: 'otherNotice',
          name: 'otherNotice',
          component: () =>
            import('@/views/HouseholdRegister/groupTable/otherNotice.vue'),
          meta: { title: '其他確認書' }
        },
        {
          path: 'piEAuthorization',
          name: 'piEAuthorization',
          component: () =>
            import('@/views/HouseholdRegister/groupTable/piEAuthorization.vue'),
          meta: { title: '戶口批額更新授權' }
        },
        {
          path: 'pdf',
          name: 'pdf',
          component: () =>
            import('@/views/HouseholdRegister/groupTable/pdf.vue'),
          meta: { title: 'PDF識別' }
        }
      ]
    },
    {
      path: 'synchronousIVR',
      name: 'synchronousIVR',
      component: () =>
        import('@/views/HouseholdRegister/synchronousIVR/index.vue'),
      meta: { title: '同步IVR' }
    }
  ]
}

export default HouseholdRegister
