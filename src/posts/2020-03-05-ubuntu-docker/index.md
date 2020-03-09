---
title: Ubuntu Docker 설치
date: '2020-03-05'
description: 이제는 표준이 된 Docker를 설치해 봅니다
---

# 1. Docker 설치

```bash
sudo apt install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"
sudo apt install docker-ce
```

만약 18.04가 아닌 다른 버전을 사용중 이라면 3번째 명령어의 bionic 부분을 해당 버전의 코드 네임의 앞부분으로 바꿔주면 된다.  
만약 코드 네임을 모른다면 [Ubuntu Wiki](https://wiki.ubuntu.com/Releases) 참고하면 된다.  

# 2. 사용자를 Docker 그룹에 추가

이 단계를 거치지 않으면 `sudo` 없이 `docker` 명령어를 실행하면 권한 오류가 발생한다.  
따라서 사용자를 Docker 그룹에 추가해줘야 한다.

```bash
sudo usermod -aG docker $USER
```

위 명령어는 현재 로그인한 사용자를 Docker 그룹에 추가하는 명령어인데, 만약 다른 사용자를 Docker 그룹에 추가하고 싶다면 `$USER` 부분을 해당 사용자명으로 변경하면 된다.

# 3. 설치 확인

```bash
sudo systemctl status docker

# 결과
ubuntu@general:~$ sudo systemctl status docker
● docker.service - Docker Application Container Engine
   Loaded: loaded (/lib/systemd/system/docker.service; enabled; vendor preset: enabled)
   Active: active (running) since Thu 2020-03-05 07:59:08 UTC; 8s ago
     Docs: https://docs.docker.com
 Main PID: 4273 (dockerd)
    Tasks: 10
   CGroup: /system.slice/docker.service
           └─4273 /usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock
```
