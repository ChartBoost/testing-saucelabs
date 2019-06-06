run_all_in_parallel:
	make clean_it test_parallel

clean_it:
	mvn clean

test_parallel:
	make -j test_android_emulator_5

test_android_emulator_5:
	deviceOrientation=portrait platformVersion=5.1 platformName=Android mvn install

