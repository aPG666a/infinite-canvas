# LikeAI 独立维护

上游：basketikun/infinite-canvas，MIT 许可。保留 LICENSE、作者信息及前端「无限画布」标识。

独立开发分支：`codex/likeai-integration`。上游更新先在分支审查，再决定合并；不要自动覆盖本地适配。

站内入口：`/creative-canvas`，登录后在 LikeAI 导航中打开。静态部署路径 `/studio/`，使用 Hash Router，刷新项目页无需服务器路由回退。

构建：在 web 目录安装锁定依赖后执行 `VITE_BASE=/studio/ npm run build`，产物由 LikeAI 站点打包脚本复制到其嵌入式前端。不要在仓库保存 API Key 或用户素材。

默认 API 地址为本站 `/v1`。用户在画布设置里配置个人 API Key 和该 Key 可用的模型；不同平台分组可建立不同渠道。项目、媒体及 API 配置使用 URL 中 LikeAI 账号 ID 分开的浏览器存储；这不是服务端权限隔离，API 请求仍必须验证 Key。尚无云同步。未进行付费生成验收，视频需适配本站参数和未知提交状态后再推广。
