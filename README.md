# Blockchain Shop

## Dependencies
* Docker

## How to use repo
In this repository you are going to create a kind (Kubernetes in Docker) cluster with a backend based in Go and a frontend based in angular
First of all you should create the cluster
```bash
cd deployment
./cluster.sh
```

At this moment you have a cluster with 1 master and 2 nodes. All staff is deployed with the right configuration.
Go to http://localhost:30000/swagger/index.html to see the backend API documentation.

## Manage blockchain

In order to manage the nodes to see information you can connect to the node 4000 inside the cluster. Review the pod name of the node 4000 that looks like:
```bash
kubectl exec -it blockchain-backend-8669d87f94-zshfw -c blockchain-backend-4000 -- /bin/sh
```

Obtain the available PODs with the command:
```bash
kubectl get pods
```

* Node 3000: Generate the blockchain and is the main node.
* Node 4000: Manage the API and the blockchain when all is running.
* Node 5000: Is a miner node.
