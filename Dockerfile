FROM node
LABEL CI-TEST="ci-label"
ENV NODE_ENV=development \
    PORT=9502
ADD . ./demo
WORKDIR demo
RUN yarn install --ignore-engines
CMD ["/bin/bash", "run.sh"]