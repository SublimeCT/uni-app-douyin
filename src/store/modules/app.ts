import BaseModule from "../BaseModule"

export class AppModuleState {
    /** TabBar 中的按钮组, ⚠️ 注意: 此处的列表数据必须与 `pages.json` 中的一致 */
    tabBarList: Array<object> = [
        {
            pagePath: '/pages/index/Index',
            iconPath: 'play-right',
            selectedIconPath: 'play-right-fill',
            text: 'play',
        },
        {
            pagePath: '/pages/explor/Explor',
            iconPath: 'list-dot',
            selectedIconPath: 'list',
            text: 'explorer',
        },
        {
            pagePath: '/pages/about/About',
            iconPath: 'info-circle',
            selectedIconPath: 'info-circle-fill',
            text: 'about',
        }
    ]
}

export class AppModule extends BaseModule<AppModuleState> {
    state: AppModuleState = new AppModuleState()
}

export default new AppModule()
