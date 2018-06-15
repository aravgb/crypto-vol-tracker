.PHONY: build deploy

build:
	yarn run build
	cp _ssr.json build/_ssr.json

deploy: build
	time roast deploy
