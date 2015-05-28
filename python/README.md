### Setup and Manage multiple python versions
* (Awesome Resource) - http://davebehnke.com/python-pyenv-ubuntu.html
* https://github.com/yyuu/pyenv

```
sudo apt-get install curl git-core
curl -L https://raw.githubusercontent.com/yyuu/pyenv-installer/master/bin/pyenv-installer | bash
(update ~/.profile as listed below)
pyenv update                # update pyenv
pyenv install --list        # list of available python versions to install
which python
python --version
```

```
sudo apt-get build-dep python3.4  # install dependencies of new python version

sudo apt-get install build-essential wget \
libreadline-dev libncurses5-dev libssl1.0.0 tk8.5-dev \
zlib1g-dev liblzma-dev            # install additional dependencies

pyenv install 3.4.3 -v > python-install-3.4.3.log # build and install python
```

```
pyenv versions                # list of installed python versions

export PYENV_VERSION=3.3.4    # Change python version for a shell session
OR
~/test$ pyenv local 3.3.4     # change python version for a local directory
OR
PYENV_VERSION=3.3.4 python    # For a single use

pyenv rehash # Rehash all binaries when new libraries are installed via pip

```

### Setup Virtual Environments for package management
* http://docs.python-guide.org/en/latest/dev/virtualenvs/
* http://virtualenvwrapper.readthedocs.org/en/latest/index.html
* http://iamzed.com/2009/05/07/a-primer-on-virtualenv/


### Instructions to set up environments
```
$ pip install virtualenvwrapper
$ export WORKON_HOME=~/PythonEnvs
$ mkdir -p $WORKON_HOME
$ source /usr/local/bin/virtualenvwrapper.sh
$ mkvirtualenv env1           # Create an environment
(env1)$ pip install django    # Install packages
(env1)$ ls sitepackages       # list packages
(env1)$ ls $WORKON_HOME       # show env path
```

```
$ mkvirtualenv -p python2.6 env2 # Create another environment with specific python version

$ workon env1                    # Switch between environments

$ echo $VIRTUAL_ENV              # Show current environment

$ deactivate                     # Back to system's default environment

$ rmvirtualenv env2              # Delete an environment

$ lsvirtualenv                   # lists all environments
```


### ~/.profile
```
export PYENV_ROOT="${HOME}/.pyenv"

if [ -d "${PYENV_ROOT}" ]; then
  export PATH="${PYENV_ROOT}/bin:${PATH}"
  eval "$(pyenv init -)"
fi

export WORKON_HOME=~/PythonEnvs
source /usr/local/bin/virtualenvwrapper.sh
```

### Reference Books
