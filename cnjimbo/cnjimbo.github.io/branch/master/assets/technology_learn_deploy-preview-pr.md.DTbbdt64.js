import{j as e,b as s,c as a,a7 as i}from"./chunks/framework.Poldbx7r.js";const g=JSON.parse('{"title":"在提交pr请求后自动部署preview github pages","description":"","frontmatter":{"title":"在提交pr请求后自动部署preview github pages","date":"2024-06-18T00:00:00.000Z","tags":["技术笔记","技术教程","github","actions","deploy","preview"],"categories":["github","actions","deploy","preview"],"created":"2024-06-18T20:04:04 (UTC +08:00)","source":null,"author":"EndBug"},"headers":[],"relativePath":"technology/learn/deploy-preview-pr.md","filePath":"technology/learn/deploy-preview-pr.md","lastUpdated":1718722324000}'),t={name:"technology/learn/deploy-preview-pr.md"},n=i(`<h1 id="在提交pr请求后自动部署preview-github-pages" tabindex="-1">在提交pr请求后自动部署preview github pages <a class="header-anchor" href="#在提交pr请求后自动部署preview-github-pages" aria-label="Permalink to &quot;在提交pr请求后自动部署preview github pages&quot;">​</a></h1><blockquote><h2 id="excerpt" tabindex="-1">Excerpt <a class="header-anchor" href="#excerpt" aria-label="Permalink to &quot;Excerpt&quot;">​</a></h2><p>:octocat: 一个GitHub Action，用于为拉取请求（PR）和分支创建GitHub Pages预览 —— EndBug/pages-preview</p></blockquote><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-label="Permalink to &quot;Table of contents&quot;">​</a></h2><ul><li><a href="#what-does-it-do">What does it do?</a></li><li><a href="#setup">Setup</a></li><li><a href="#inputs">Inputs</a></li></ul><h2 id="what-does-it-do" tabindex="-1">What does it do? <a class="header-anchor" href="#what-does-it-do" aria-label="Permalink to &quot;What does it do?&quot;">​</a></h2><p>许多第三方服务允许您创建分支和拉取请求的预览部署，以便您可以利用这些预览来审查和测试您的更改。此操作同样能实现这一功能，但它是直接通过GitHub Pages来完成。</p><p>具体而言，此操作会将您的网站部署到一个不同的仓库中，该仓库将会包含您选择应用此操作的所有仓库的预览版本。</p><p>如果您对这个操作背后的逻辑感兴趣，您可以查阅<a href="./docs/flow_diagram.html">流程图文档</a>。</p><h2 id="setup" tabindex="-1">Setup <a class="header-anchor" href="#setup" aria-label="Permalink to &quot;Setup&quot;">​</a></h2><h3 id="preview-repo" tabindex="-1">Preview repo <a class="header-anchor" href="#preview-repo" aria-label="Permalink to &quot;Preview repo&quot;">​</a></h3><h4 id="using-my-template" tabindex="-1">Using my template <a class="header-anchor" href="#using-my-template" aria-label="Permalink to &quot;Using my template&quot;">​</a></h4><ol><li><p>首先，访问<a href="https://github.com/EndBug/preview-template" target="_blank" rel="noreferrer">此模板</a>，并从那里生成您的仓库：点击<code>Use this template</code>，填写仓库名称和描述，确认已勾选 <code>Include all branches</code>，然后创建仓库。</p></li><li><p>接着，进入您的仓库设置，在“Pages”（仓库设置&gt; Pages）选项卡中，将“GitHub Actions”设置为源。这样配置后，每当有新的推送或拉取请求，GitHub Actions将自动部署预览页面。</p></li></ol><h4 id="manually" tabindex="-1">Manually <a class="header-anchor" href="#manually" aria-label="Permalink to &quot;Manually&quot;">​</a></h4><ol><li><p>创建一个新的存储库以承载你的预览内容。 这个存储库将用于来自你所有存储库的预览，因此你只需要一次性设置它。</p></li><li><p>确保这个存储库包含两个分支：<code>main</code> 和 <code>gh-pages</code>（你也可以选择不同的名称）。</p><ul><li><code>main</code> 应该是你的默认分支，它仅保存工作流文件（以及你可能想要添加的其他文件，如 README、许可证等）。</li><li><code>gh-pages</code> 分支将包含实际的预览内容，初始化时应为空。</li></ul></li><li><p>在 <code>main</code> 分支中创建一个新文件，并将其命名为 <code>.github/workflows/preview.yml</code>。然后，将 <code>[</code>dependents/preview-repo.yml<code>](dependents/preview_repo.yml)</code> 中的内容复制到该文件中。 通常情况下，你无需修改这个文件中的任何内容，所有配置选项都应在源存储库的工作流中设定。 如果你更新动作到不同的主要版本，这个文件可能需要进行相应的更新。</p></li><li><p>进入你的存储库设置，在“Pages”标签页下（仓库设置 &gt; Pages），并将“GitHub Actions”设为页面发布来源。</p></li></ol><h3 id="personal-access-token-pat" tabindex="-1">Personal Access Token (PAT) <a class="header-anchor" href="#personal-access-token-pat" aria-label="Permalink to &quot;Personal Access Token (PAT)&quot;">​</a></h3><p>In order for the action to be able to trigger the deployment in the preview repo from the source repo, you&#39;ll need to create a Personal Access Token (PAT).</p><p>There are currently two types of PATs: fine-grained, which are more secure but still in beta, and classic. I&#39;d suggest to use fine-grained PATs, but if you can&#39;t, you can also use classic PATs.</p><h4 id="fine-grained-pat" tabindex="-1">Fine-grained PAT <a class="header-anchor" href="#fine-grained-pat" aria-label="Permalink to &quot;Fine-grained PAT&quot;">​</a></h4><ol><li>Go to <a href="https://github.com/settings/tokens?type=beta" target="_blank" rel="noreferrer">Account settings &gt; Developer settings &gt; Fine-grained tokens</a>.</li><li>Click on &quot;Generate new token&quot;.</li><li>Give it a recognizable name and set an appropriate expiration date.</li><li>Make sure that the &quot;Resource owner&quot; is the same user/org that owns the preview repo.</li><li>Set the &quot;Repository access&quot; to &quot;Only selected repositories&quot; and then select the preview repo.</li><li>In the &quot;Repository permissions&quot; sections, set &quot;Actions&quot; and &quot;Content&quot; to &quot;Read and write&quot;. &quot;Metadata&quot; will also be granted as &quot;Read-only&quot;, as it is required for the other two.</li><li>Click on &quot;Generate token&quot;, copy the token and save it somewhere for later.</li></ol><h4 id="classic-pat" tabindex="-1">Classic PAT <a class="header-anchor" href="#classic-pat" aria-label="Permalink to &quot;Classic PAT&quot;">​</a></h4><ol><li>Go to <a href="https://github.com/settings/tokens" target="_blank" rel="noreferrer">Account settings &gt; Developer settings &gt; Tokens (classic)</a>.</li><li>Click on &quot;Generate new token&quot; &gt; &quot;Generate new token (classic)&quot;</li><li>Give it a recognizable name and set an appropriate expiration date.</li><li>Select the <code>repo</code> scope.</li><li>Click on &quot;Generate token&quot;, copy the token and save it somewhere for later.</li></ol><h3 id="source-repo" tabindex="-1">Source repo <a class="header-anchor" href="#source-repo" aria-label="Permalink to &quot;Source repo&quot;">​</a></h3><p>This steps need to be repeated for each repo you want to use this action on.</p><ol><li>Go to the repo that contains the source code of your website.</li><li>Go to Repo settings &gt; Secrets and variables &gt; Actions.</li><li>Create a new repository secret called <code>PREVIEW_TOKEN</code> and paste the PAT you created in the previous step.</li><li>Go back to the repo contents and add the deployment workflow: you can either create a new one or add the same steps to your existing one. Use the <a href="dependents/source_repo.yml"><code>dependents/source-repo.yml</code></a> file as a template/example. Make sure to change the <code>PREVIEW_REPO</code> and <code>PAGES_BASE</code> env variable, along with the commands needed to build your website. Also, make sure to change <code>EndBug/pages-preview</code>&#39;s inputs to match your needs: more info on that in the <a href="#inputs">&quot;Inputs&quot;</a> section of this file.</li></ol><p>All done! You&#39;re now ready to use the action 🎉</p><h2 id="inputs" tabindex="-1">Inputs <a class="header-anchor" href="#inputs" aria-label="Permalink to &quot;Inputs&quot;">​</a></h2><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">EndBug/pages-preview@v1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  with</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # The directory in which the website has been built, in the a/b/c format</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    build_dir</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">build</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # The GitHub Pages base URL of the preview repo</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    preview_base_url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">https://octocat.github.io/preview</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # The repository to push previews to, in the Owner/Name format</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    preview_repo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">octocat/preview</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # The token to access the preview repo, that you created during setup</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    preview_token</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\${{ secrets.PREVIEW_TOKEN }}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # --- OPTIONAL ---</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # The name of the environment to use for the deployment</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # Default: &#39;preview&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    deployment_env</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;development&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # Whether to use the deployments API</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # Default: &#39;true&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    deployments</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # The name of the author of the resulting commit</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # Default: the GitHub Actor</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    git_author_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Mona</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # The email of the author of the resulting commit</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # Default: the GitHub Actor&#39;s</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    git_committer_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">mona@users.noreply.github.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # The committer of the resulting commit</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # Default: copies git_author_name</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    git_committer_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">GitHub Actions</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # The email of the committer of the resulting commit</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # Default: copies git_author_email</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    git_committer_email</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">41898282+github-actions[bot]@users.noreply.github.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # Whether to comment on PRs</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # Default: &#39;true&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    pr_comment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;false&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # The name of the branch that hosts the previews</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # Default: gh-pages</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    preview_branch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">custom-pages-branch</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # The name of the workflow file that contains the comment workflow in the preview repo</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # Default: preview.yml</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    preview_workflow_file_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">custom_workflow.yml</span></span></code></pre></div>`,27),l=[n];function p(o,h,r,c,k,d){return s(),a("div",null,l)}const y=e(t,[["render",p]]);export{g as __pageData,y as default};
