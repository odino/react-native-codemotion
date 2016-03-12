build:
	docker build -t react-native .
	@echo "container built successfully"
apk:
	cd android; ./gradlew assembleRelease; cd -
install-on-device:
	adb uninstall com.swag && adb install android/app/build/outputs/apk/app-release.apk
bash:
	./scripts/docker-react-bash.sh
run:
	./scripts/docker-react-bash.sh ./scripts/docker-start-android.sh
