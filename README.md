# Gerador de senhas
Gerador de senha criado com HTML, CSS, JavaScript e o pacote nanoid.

O Vite fornece ferramentas de desenvolvimento para nossa aplicação, como, por exemplo, um servidor de desenvolvimento (também comumente chamado de dev-server) e um bundler para compilação final da aplicação.
Ou seja, durante a criação, podemos digitar no terminal o comando abaixo e será gerado um servidor que rodará nossa aplicação no navegador.
```npx vite --open```

- Para a implementação desse projeto contamos com a instalação de 2 pacotes essências, o nanoid e o clipboard copy.
    - O [nanoid](https://www.npmjs.com/package/nanoid) é um pacote npm que cria senhas seguras e aleátorias para o usuário.
    - Já o [clipboard copy](https://www.npmjs.com/package/clipboard-copy) auxilia em copiar algo, é como se fosse o `Ctrl + C`, porém ele é automático, nesse projeto fiz com que ao ser clicado para gerar uma determinada senha, essa mesma senha é copiada automaticamente.

- É possível também selecionar o número de caracteres que se deseja para sua seja, esse número pode ser entre 1 e 36 caracteres.

- A proposta desse projeto foi pensado na simplicidade e praticidade, tanto na criação como também na sua utilização final.

##### Tecnologias utilizadas:
+ JavaScript;
+ CSS (puro e responsivo);
+ HTML (semântico);
+ Pacotes npm do [nanoid](https://www.npmjs.com/package/nanoid) e [clipboard copy](https://www.npmjs.com/package/clipboard-copy)
