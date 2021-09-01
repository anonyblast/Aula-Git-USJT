# Aula-Git-USJT
## GIT commands taught at USJT

### Local
```sh
cd Documents # Navega pelas pastas
mkdir dev && cd dev # Cria um novo diretório e entra nele
git init # Inicia o controle de versão no repositário local
git config --global init.defaultBranch main # Configura a branch de iniciliazação
git branch -m main # Cria a branch de nome main
git status # vê o estado dos arquivos
touch file.js # maneira mais rápida de criar um arquivo
(essa linha é opcional, só fiz pra preencher o arquivo) 
truncate -s 365 file.js # Modifica o valor de memória do arquivo
ls -l # lista os arquivos com suas informações
chmod 744 file.js # Mofifica as permissões do arquivo
git status 
git add . # Adiciona todos os arquivos a partir de onde estiver
git config --global user.name nome # conexão com repositório remoto
git commit -m "Initial commit - USJT" # empacota todas as modificações atuais
git status -s
touch .gitignore # ignorar o arquivo ou arquivos desnecessários de subir no repositório
code .gitignore # adicione a extensão do arquivo que deseja ignorar acessando VS Code
```
### Remote
```sh
git remote add origin <link>
git config --global user.name anonyblast
git config pull.rebase true
git pull <link>
git push -u origin main
```

