echo 256 | sudo tee -a /proc/sys/fs/inotify/max_user_instances
echo 32768 | sudo tee -a /proc/sys/fs/inotify/max_queued_events
echo 65536 | sudo tee -a /proc/sys/fs/inotify/max_user_watches
watchman shutdown-server
adb uninstall com.swag
react-native start > /tmp/packager.log 2>&1 &
adb reverse tcp:8081 tcp:8081
react-native run-android
/bin/bash
