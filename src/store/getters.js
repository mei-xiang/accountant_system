const getters = {
  roles: state => state.user.roles,
  permission_routes: state => state.permission.addRoutes,
  tabsList: state => state.tabs.tabsList
}
export default getters
