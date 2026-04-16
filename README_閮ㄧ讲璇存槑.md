# 刘宇驰学者主页部署说明（GitHub Pages + Quarto）

这个项目已经配置成：
- 用 **Quarto** 生成网站；
- 用 **GitHub Actions** 自动渲染并部署到 **GitHub Pages**；
- 你不需要先在本地把 HTML 渲染好，也不需要提交 `docs/` 或 `_site/`。

---

## 一、你现在拿到的文件里有什么

- `_quarto.yml`：网站总配置
- `index.qmd`：首页
- `research.qmd`：研究方向页
- `publications.qmd`：论文与专利页
- `projects.qmd`：项目经历页
- `contact.qmd`：联系页
- `styles.css`：样式文件
- `.github/workflows/deploy.yml`：自动部署工作流
- `files/Liu_Yuchi_CV.pdf`：简历 PDF

---

## 二、最推荐的发布方式

### 方式：直接上传到一个 GitHub 仓库，然后让 GitHub 自动部署

建议把仓库命名为：
- `你的GitHub用户名.github.io`  
这样网站地址会最简洁。

例如你的用户名是 `example`，那仓库名就建成：
- `example.github.io`

发布成功后，网址通常就是：
- `https://example.github.io/`

---

## 三、具体操作步骤

### 第 1 步：新建 GitHub 仓库
1. 登录 GitHub
2. 点击右上角 **New repository**
3. 仓库名填写：`你的用户名.github.io`
4. 设为 **Public**
5. 创建仓库

### 第 2 步：上传整个项目文件夹
你可以用下面任一方式上传：

#### 方法 A：网页直接上传
1. 打开新仓库主页
2. 点击 **uploading an existing file**
3. 把这个项目文件夹里的所有文件拖进去
4. 提交 commit

#### 方法 B：用 GitHub Desktop
1. 安装 GitHub Desktop
2. Clone 新仓库到本地
3. 把这个项目里的所有文件复制进去
4. Commit 并 Push

### 第 3 步：开启 GitHub Pages 的 GitHub Actions 部署
1. 进入仓库 **Settings**
2. 左侧找到 **Pages**
3. 在 **Build and deployment** 中，把 **Source** 设为 **GitHub Actions**

### 第 4 步：检查 Actions 权限
1. 进入 **Settings** → **Actions** → **General**
2. 找到 **Workflow permissions**
3. 选择 **Read and write permissions**
4. 保存

### 第 5 步：等待自动部署
1. 进入仓库顶部的 **Actions** 标签
2. 你会看到 `Deploy Quarto site to GitHub Pages`
3. 第一次运行成功后，Pages 页面会显示公开网址

---

## 四、你发布前建议优先改的内容

### 1. 更新邮箱
现在网站里暂时使用的是简历中的邮箱：
- `liuyuchi@zju.edu.cn`

如果他现在已经有清华正式邮箱，建议换成清华邮箱。

### 2. 补充个人主页常用链接
建议补：
- Google Scholar
- ORCID
- ResearchGate
- GitHub

这些位置我已经预留好了。

### 3. 增加头像
目前首页没有放个人照片。建议后续加入一张正式学术头像，放到 `images/` 文件夹，然后在首页加入图片引用。

### 4. 可增加 DOI / PDF 链接
论文页现在是规范化列表，但还没加 DOI 或全文链接。后续可以逐条补充。

---

## 五、后续怎么改内容

### 修改首页
编辑：`index.qmd`

### 修改研究方向
编辑：`research.qmd`

### 修改论文列表
编辑：`publications.qmd`

### 修改项目经历
编辑：`projects.qmd`

### 修改联系信息
编辑：`contact.qmd`

改完以后重新提交到 GitHub，Actions 会自动重新部署。

---

## 六、如果你想本地预览
你也可以以后自己安装 Quarto，然后在项目目录运行：

```bash
quarto preview
```

或者：

```bash
quarto render
```

但这一步不是必须的，因为这个项目已经配置成可以直接由 GitHub 自动构建。

---

## 七、我建议下一步这样继续

先把网站上线，再做第二轮美化：
1. 换成正式头像；
2. 补清华博后单位的更准确院系信息；
3. 补 Scholar / ORCID；
4. 给论文加 DOI；
5. 加一个 `News` 页面；
6. 以后可再做中英双语版本。
