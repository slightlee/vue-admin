import { ElButton,ElForm, ElFormItem, ElInput } from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import lang from 'element-plus/lib/locale/lang/zh-cn'
import locale from 'element-plus/lib/locale'

export default (app) => {
  locale.use(lang)
  // app.use(ElButton)   // 或者 app.component(ElButton.name, ElButton)
  app.component(ElButton.name, ElButton)
  app.component(ElForm.name, ElForm)
  app.component(ElFormItem.name, ElFormItem)
  app.component(ElInput.name, ElInput)
}


// 更多组件见 https://element-plus.org/#/zh-CN/component/quickstart   -> 快速上手
