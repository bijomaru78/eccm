FROM nginx:latest

LABEL Description="Ethernet Cable Connection Manager served by NGINX inside Docker"
LABEL ECCM-Github="https://github.com/bijomaru78/eccm"

# Download latest ECCM and set up to serve through NGINX
ADD --chmod=775 https://raw.githubusercontent.com/bijomaru78/eccm/refs/heads/main/ECCM.html /usr/share/nginx/html/index.html