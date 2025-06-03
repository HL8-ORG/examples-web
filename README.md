# 样式说明

`ui.shadcn`进行了升级，你现在可以在`https://ui.shadcn.com/blocks`找到很多漂亮的模块，

在 `web`项目根目录下运行`terminal`
```
npx shadcn@latest add dashboard-01
```
可以安装一个`dashboard`

这些`dashboard`都做的不错，不过没有处理`scrollbar`的样式问题，我们可以通过`tailwind-scrollbar`来解决问题。

在样式文件加入：
```
/* scrollbar */
.scrollbar-thin::-webkit-scrollbar-thumb {
  background: var(--scrollbar-thumb);
}
.scrollbar-thin::-webkit-scrollbar-track {
  background: var(--scrollbar-track);
}
```
在需要应用的地方添加：
```
......

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      
      {/* TODO: 增加scrollbar样式 */}
      <SidebarContent className="scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600 scrollbar-track-gray-100 dark:scrollbar-track-gray-800 overflow-y-auto">

        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

```
