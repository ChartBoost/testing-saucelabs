run_all_in_parallel:
	make clean_it test_parallel

clean_it:
	mvn clean

test_parallel:
	make -j test_iphone7_10

test_iphone7_10:
	deviceOrientation=portrait platformVersion=12.2  platformName=iOS mvn install

test_ipad_air_9_3:
	deviceOrientation=portrait platformVersion=9.3 platformName=iOS mvn install
