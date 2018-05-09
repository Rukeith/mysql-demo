FROM node
LABEL CI-TEST="ci-label"
ENV NODE_ENV=development \
    PORT=9502
ADD . ./nuclias-license
WORKDIR nuclias-license
RUN yarn install --ignore-engines
CMD node migrate.js