FROM node:14

# Environment
ENV TZ='Etc/UTC'

# Include application context
COPY . /api

# Filesystem ACL Setup
RUN groupadd -r api \
 && useradd -m -r -g api api
# Use non-root user
RUN chown -R api:api /api
USER api

WORKDIR /api

# Install
RUN yarn

CMD [ "sh", "-c", "node index.js" ]
