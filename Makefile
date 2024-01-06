VERSION:=$(shell date +"%y.%-m.%-d-%-H.%-M")

.SILENT:

build: clean
	pnpm build

clean:
	pnpm clean

publish_public:
	pnpm publish --access public

test_ava_all:
	pnpm test:ava:all

update_version:
	jq ".version = \"$(VERSION)\"" package.json > package.json.new
	mv package.json.new package.json
