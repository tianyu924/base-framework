## 安装
```bash
npm install
```
## 注意事项
### git commit 提交规范
| 类型       | 描述         |
|----------|------------|
| feat     | 新功能        |
| fix      | 修复bug      |
| docs     | 文档修改，如README |
| style    | 代码格式化      |
| perf     | 优化相关，比如提升性能、体验       |
| chore    | 构建过程或辅助工具的变动 |
| refactor | 重构（即不是新增功能，也不是修改bug的代码变动）|
| revert   | 代码回滚       |
| test     | 单元测试       |

### api配置
/api/config.ts  
主要是通过配置的方式，自定义请求响应的统一逻辑处理

| 变量 | 描述                 |
| ---- |--------------------|
|HTTP_CODE| 可自定义配置http状态码提示文案  |
|RESPONSE_CODE| 枚举类型，定义业务逻辑处理成功状态码 |
|UNITY_RESPONSE_HANDLE|业务错误代码统一处理配置，如token失效，跳转404页面等|

### types
typescript的所有类型声明文件都放在此处

### 环境变量
| 变量 | 描述                   | 
| ---- |----------------------|
|VITE_BASE_URL| 服务器地址                |
|VITE_PROXY_BASE_URL| 代理地址，主要用于开发阶段        |
|VITE_PROXY_PREFIX| 代理接口匹配地址前缀，开发阶段可通过设置该前缀匹配对应的代理 |
