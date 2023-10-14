# SSH免密登录

在 Windows 10 上实现 SSH 免密登录到 Linux 服务器，可以按照以下步骤进行操作：

1.  确保 Windows 10 上已经安装了 SSH 客户端。如果未安装，可以从 OpenSSH 官方网站（https://github.com/PowerShell/Win32-OpenSSH/releases）下载适用于 Windows 的 OpenSSH 客户端并进行安装。 
2.  打开 PowerShell 或者命令提示符（Command Prompt）。 
3.  生成 SSH 密钥对：在 PowerShell 或命令提示符中执行以下命令生成密钥对： 
```bash
ssh-keygen -t rsa
```

在生成过程中，可以选择使用默认的密钥文件路径和设置密码，也可以根据需要进行自定义。 

4.  将公钥复制到 Linux 服务器：执行以下命令将本地生成的公钥复制到 Linux 服务器的 `~/.ssh/authorized_keys` 文件中： 
```bash
cat ~/.ssh/id_rsa.pub | ssh user@linux-server "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"
```

其中，`user` 是 Linux 服务器上的用户名，`linux-server` 是 Linux 服务器的 IP 地址或域名。执行命令后，会提示输入 Linux 服务器的密码。 

5.  验证免密登录：执行以下命令尝试使用 SSH 免密登录到 Linux 服务器： 
```bash
ssh user@linux-server
```

如果一切顺利，将可以直接登录到 Linux 服务器而无需输入密码。 

请注意，以上步骤中的 `user` 和 `linux-server` 需要替换为你自己的用户名和 Linux 服务器信息。此外，为了安全起见，确保设置强密码并定期更换密钥对。
