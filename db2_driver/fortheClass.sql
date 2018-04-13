

Run the below  script to add the db2 libry tpo the maven dependencies
mvn install:install-file -Dfile=C:\Users\Administrator\Desktop\db2_driver\db2jcc.jar -DgroupId=com.ibm.db2.jcc -DartifactId=db2jcc4 -Dversion=10.1 -Dpackaging=jar -DgeneratePom=true -DcreateChecksum=true




<dependency>
    <groupId>com.ibm.db2.jcc</groupId>
    <artifactId>db2jcc4</artifactId>
    <version>10.1</version>
</dependency>
<dependency>
    <groupId>com.ibm.db2</groupId>
    <artifactId>db2policy</artifactId>
    <version>10.1</version>
</dependency>