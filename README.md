# minio-upload-service

## Description
This is the repo of a pet project I am doing. It is intended to be a service that uploads files to a minio container instance.

The initial structure was made with

```sh
express name-of-the-project
```

## Usage
For now you can only use the upload endpoint to post a file to the minio server/container.

```sh
. run.sh
```

To stop the service from running

```sh
docker-compose down
```
