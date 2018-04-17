FULL STACK WEB APP DEVELOPMENT.

This is a faux website. Goals of this site are to demonstrate
usage and proper setup of the following technologies. The
second goal is to Create small business facing frameworks, that
can be deployed on a customer need basis.

Technologies:
    backend:
    Flask
    Flask-cors
    Docker  # not hooked up.
    
    frontend:
    React - Webpack - babel
    Gulp - Sass - scss


TO start dev process start a 5 panel teminator/tmux window

(1)in ./static | npm run devstart
(2)in ./static | gulp
(3)in ./       | export FLASK_APP=server.py
               | export FLASK_DEBUG=1
               | flask run
(4) ...        | htop
(5)in ./       | jupyter lab

*1* npm = node package manager, run= execute, devstart is custom setup
.   for webpack/babel.
*2* gulp = sass/scss/css. Gulp is a compiler for Sass/scss -> css.
*3* Flask = basic python flask server package, will be less basic in
.   the future.
*4* htop = colored top. perfered over top, but watch resources for performance
.   related issues.
*5* jupyterLab = a web based multi language IDE. Currently in alpha, 
.   this is better than Atom, VSx, VSc, Vim, Emacs, Pycharm. But on par with
.   jsbin.com, cloud9.com, and web based IDES are going to be the future,
.   standard.

DONE:
    file architecture.
    gulp - webpack - babel
    basic flask server
    
TODO:
    python API backend.
    react frontend.
    authentication.
    docker. everything.
    

WISH:
    Frontend magically creates itself.
    litecoin invents its own python/web wallet that is easy.
        like an exchange wallet, same thing.

EPIC:
    Backend is up to par with industry standard and qualifing as 
    a job level, work load and quality.