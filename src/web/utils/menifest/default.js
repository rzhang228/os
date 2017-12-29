export default {
  "id": "",                 // 节点唯一标识
  "type": "",               // 节点类型，1：原生dom；2：oasisl基本元素；3：oasisl组件；4：echarts
  "tagName": "",            // type=1：当前dom标签名；否则：最外层dom标签名
  "moduleName": "",         // type=3：组件名（用于初始化组件）
  "moduleChineseName": "",  // 中文名，用于展示
  "attr": {},               // type=1：当前dom属性；否则：最外层dom属性
  "text": "",               // 标签内文本内容
  "style": {},              // type=1：当前dom样式对象；否则：最外层dom样式对象
  "option": {},             // type=1,2：为空对象；否则：为配置项（包含默认与已配置字段）
  "children": []
}