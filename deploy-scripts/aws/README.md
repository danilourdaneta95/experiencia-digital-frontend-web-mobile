

## MiPortal secretos dev
```
kubectl -n uss-exp-digital-develop create secret generic experiencia-digial-front-dev --from-env-file=deploy-scripts/aws/secrets/dev/.env

# update secret
kubectl -n uss-exp-digital-develop delete secret experiencia-digial-front-dev

kubectl -n uss-exp-digital-develop create secret generic experiencia-digial-front-dev --from-env-file=deploy-scripts/aws/secrets/dev/.env
```

## MiPortal secretos qa
``` 
kubectl -n uss-exp-digital-qa create secret generic experiencia-digial-front-qa --from-env-file=deploy-scripts/aws/secrets/qa/.env

# update secret
kubectl -n uss-exp-digital-qa delete secret experiencia-digial-front-qa

kubectl -n uss-exp-digital-qa create secret generic experiencia-digial-front-qa --from-env-file=deploy-scripts/aws/secrets/qa/.env
```

## MiPortal secretos staging
```
kubectl -n uss-exp-digital-staging create secret generic experiencia-digial-front-staging --from-env-file=deploy-scripts/aws/secrets/staging/.env

# update secret
kubectl -n uss-exp-digital-staging delete secret experiencia-digial-front-staging

kubectl -n uss-exp-digital-staging create secret generic experiencia-digial-front-staging --from-env-file=deploy-scripts/aws/secrets/staging/.env
```

## MiPortal Deploy dev
```

# Build image
sudo docker build --build-arg NEXT_PUBLIC_AZURE_TENANT_ID_USS=7a599002-001c-432c-846e-1ddca9f6b299 --build-arg NEXT_PUBLIC_AZURE_CLIENT_ID_USS=c3023804-5ba5-421a-9fc3-3b2f6c5a9700 --build-arg BASE_PATH=  --build-arg NEXT_PUBLIC_BASE_PATH=  --build-arg NEXT_PUBLIC_API_URL=https://midev.uss.cl/uss-exp-digital-backend-dev --build-arg NEXT_PUBLIC_TEST_ENVIRONMENT=true -t uss/experiencia-digital/frontend-dev:latest .

# Tag image
sudo docker tag uss/experiencia-digital/frontend-dev:latest localhost:32000/uss/experiencia-digital/frontend-dev:latest

# Push image
sudo docker push localhost:32000/uss/experiencia-digital/frontend-dev:latest

# deploy
kubectl -n uss-exp-digital-develop apply -f deploy-scripts/aws/k8s/dev/experiencia-digital-front.yaml

# delete
kubectl -n uss-exp-digital-develop delete -f deploy-scripts/aws/k8s/dev/experiencia-digital-front.yaml

# operations
kubectl -n uss-exp-digital-develop rollout restart deployment experiencia-digital-front-dev

kubectl -n uss-exp-digital-develop rollout status deployment experiencia-digital-front-dev

kubectl -n uss-exp-digital-develop rollout history deployment experiencia-digital-front-dev

kubectl -n uss-exp-digital-develop rollout undo deployment experiencia-digital-front-dev --to-revision=1

# scale
kubectl -n uss-exp-digital-develop scale deployment experiencia-digital-front-dev --replicas=2

# logs
kubectl -n uss-exp-digital-develop logs deployment experiencia-digital-front-dev
```

## MiPortal Deploy qa
```
# Build image
sudo docker build -t uss/experiencia-digital/frontend-qa:latest .

# Tag image
sudo docker tag uss/experiencia-digital/frontend-qa:latest localhost:32000/uss/experiencia-digital/frontend-qa:latest

# Push image
sudo docker push localhost:32000/uss/experiencia-digital/frontend-qa:latest

# deploy
kubectl -n uss-exp-digital-qa apply -f deploy-scripts/aws/k8s/qa/experiencia-digital-front.yaml
```	

## MiPortal Deploy staging
```
# Build image
sudo docker build -t uss/experiencia-digital/frontend-staging:latest .

# Tag image
sudo docker tag uss/experiencia-digital/frontend-staging:latest localhost:32000/uss/experiencia-digital/frontend-staging:latest

# Push image



# deploy
kubectl -n uss-exp-digital-staging apply -f deploy-scripts/aws/k8s/staging/experiencia-digital-front.yaml
```
