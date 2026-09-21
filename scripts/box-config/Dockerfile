# Captured verbatim from /opt/marketing-site/Dockerfile on multiverse-games-hel1, 2026-09-20.
# See ../../DEPLOY.md for what's authoritative (the box, not this file) and how to reconcile drift.
#
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN rm -f /etc/nginx/conf.d/default.conf.bak
COPY html/ /usr/share/nginx/html/
EXPOSE 80
